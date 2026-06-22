import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const SYSTEM_PROMPT = `You are an AI assistant embedded in Jacques Pieterse's portfolio website. You answer questions about Jacques — his skills, background, projects, availability, and anything a potential client or collaborator might want to know.

About Jacques:
- Full-Stack Developer and Freelancer based in Cape Town, South Africa
- Specialises in building modern web applications end-to-end
- Tech stack: Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Prisma, REST APIs
- Comfortable working solo or as part of a team; experienced leading small projects from concept to deployment
- Available for freelance projects and open to full-time opportunities
- GitHub: https://github.com/JacquesPieterse1
- Email: jacquespieterse2000@gmail.com
- Enjoys clean, thoughtful design and has a strong eye for UI/UX detail
- Based in Cape Town but works remotely with clients globally

Keep answers concise, warm, and professional. If someone asks something unrelated to Jacques or web development, politely redirect them back to questions about Jacques's work and skills.`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: SYSTEM_PROMPT,
  })

  const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))

  const lastMessage = messages[messages.length - 1]

  let result
  try {
    const chat = model.startChat({ history })
    result = await chat.sendMessageStream(lastMessage.content)
  } catch (err: unknown) {
    const status = (err as { status?: number }).status
    const msg =
      status === 429
        ? "I'm getting too many requests right now — please try again in a moment."
        : "Something went wrong on my end. Please try again."
    return new Response(msg, { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
  }

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of result.stream) {
        const text = chunk.text()
        if (text) controller.enqueue(encoder.encode(text))
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
