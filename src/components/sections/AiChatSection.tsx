'use client'

import { useEffect, useRef, useState } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  "What's your tech stack?",
  'Tell me about your projects',
  'Are you available for freelance?',
  'Where are you based?',
]

export function AiChatSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  async function send(text: string) {
    const question = text.trim()
    if (!question || isStreaming) return

    const next: Message[] = [...messages, { role: 'user', content: question }]
    setMessages([...next, { role: 'assistant', content: '' }])
    setInput('')
    setIsStreaming(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) throw new Error('Request failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let aiText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        aiText += decoder.decode(value, { stream: true })
        setMessages([...next, { role: 'assistant', content: aiText }])
      }
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setIsStreaming(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send(input)
  }

  return (
    <section className="ask-wrap" id="ask">
      <div className="ask-inner">
        <aside className="jp-rail" aria-hidden="true">
          <span className="jp-rail-label">[04] / Ask</span>
          <span className="jp-rail-label">— AI</span>
        </aside>

        <div className="ask-body">
          <div className="ask-lead reveal">
            <span>Ask me anything</span>
            <h4>I&apos;m an AI trained on Jacques&apos;s background.</h4>
            <p>Ask about his skills, availability, projects, or anything else you&apos;d want to know before working together.</p>
          </div>

          <div className="terminal reveal" style={{ ['--rev-delay' as string]: '100ms' }}>
            <div className="terminal-bar">
              <span className="terminal-lights">
                <i /><i /><i />
              </span>
              <span className="terminal-path">AI — Ask me anything</span>
              <span className="terminal-badge">GPT</span>
            </div>

            <div className="ask-messages">
              {messages.length === 0 && (
                <div className="ask-empty">
                  <span>↓ Try one of the suggestions below or type your own question</span>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === 'user' ? 'ask-msg-user' : 'ask-msg-ai'}
                >
                  {msg.role === 'assistant' && msg.content === '' && isStreaming ? (
                    <span className="terminal-cursor" />
                  ) : (
                    msg.content
                  )}
                  {msg.role === 'assistant' && msg.content !== '' && isStreaming && i === messages.length - 1 && (
                    <span className="terminal-cursor" />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 0 && (
              <div className="ask-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="ask-pill"
                    onClick={() => send(s)}
                    disabled={isStreaming}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="ask-input-row">
              <input
                ref={inputRef}
                className="ask-input"
                type="text"
                placeholder="Ask a question…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isStreaming}
              />
              <button
                className="ask-send"
                onClick={() => send(input)}
                disabled={isStreaming || !input.trim()}
              >
                {isStreaming ? '…' : 'Send →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
