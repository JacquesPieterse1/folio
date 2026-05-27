(function () {
  // ——— Custom cursor (follows mouse with easing) ———
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (hasFinePointer && dot && ring) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Hover state for interactive things
    const hoverables = 'a, button, [data-cursor="hover"], .project, .pillar';
    document.querySelectorAll(hoverables).forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  } else if (dot && ring) {
    dot.style.display = 'none';
    ring.style.display = 'none';
  }

  // ——— Magnetic buttons ———
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.35;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ——— Reveal on scroll ———
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  // ——— Typing animation in the live code demo ———
  const term = document.getElementById('terminalBody');
  if (term) {
    // Each entry: { html: '...', delay: ms before this line starts }
    // We type character-by-character but skip inside tags.
    const lines = [
      { text: `<span class="cm">// app/api/projects/route.ts</span>` },
      { text: `<span class="kw">import</span> <span class="punct">{</span> NextResponse <span class="punct">}</span> <span class="kw">from</span> <span class="str">"next/server"</span>;` },
      { text: `<span class="kw">import</span> <span class="punct">{</span> db <span class="punct">}</span> <span class="kw">from</span> <span class="str">"@/lib/db"</span>;` },
      { text: `` },
      { text: `<span class="kw">export async function</span> <span class="fn">GET</span>(req: Request) <span class="punct">{</span>` },
      { text: `  <span class="kw">const</span> { searchParams } = <span class="kw">new</span> <span class="fn">URL</span>(req.url);` },
      { text: `  <span class="kw">const</span> limit = <span class="fn">Number</span>(searchParams.<span class="fn">get</span>(<span class="str">"limit"</span>)) || <span class="num">10</span>;` },
      { text: `` },
      { text: `  <span class="kw">const</span> projects = <span class="kw">await</span> db.projects.<span class="fn">findMany</span>(<span class="punct">{</span>` },
      { text: `    where: <span class="punct">{</span> published: <span class="num">true</span> <span class="punct">}</span>,` },
      { text: `    orderBy: <span class="punct">{</span> shippedAt: <span class="str">"desc"</span> <span class="punct">}</span>,` },
      { text: `    take: limit,` },
      { text: `  <span class="punct">}</span>);` },
      { text: `` },
      { text: `  <span class="kw">return</span> NextResponse.<span class="fn">json</span>(<span class="punct">{</span> projects <span class="punct">}</span>);` },
      { text: `<span class="punct">}</span>` },
    ];

    function typeAll() {
      term.innerHTML = '';
      let i = 0;

      function typeLine() {
        if (i >= lines.length) {
          // blinking cursor at the end
          const cur = document.createElement('span');
          cur.className = 'terminal-cursor';
          term.appendChild(cur);
          return;
        }
        const line = document.createElement('div');
        term.appendChild(line);
        const html = lines[i].text;
        if (html === '') {
          line.innerHTML = '&nbsp;';
          i++;
          setTimeout(typeLine, 30);
          return;
        }
        let pos = 0;
        function step() {
          // Reveal one logical character (skip past tags as a unit)
          while (pos < html.length && html[pos] === '<') {
            const end = html.indexOf('>', pos);
            if (end === -1) break;
            pos = end + 1;
          }
          pos++;
          line.innerHTML = html.slice(0, Math.min(pos, html.length));
          if (pos < html.length) {
            setTimeout(step, Math.random() * 18 + 10);
          } else {
            i++;
            setTimeout(typeLine, 90);
          }
        }
        step();
      }
      typeLine();
    }

    // Start when terminal is in view
    if ('IntersectionObserver' in window) {
      let started = false;
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            typeAll();
            io2.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io2.observe(term);
    } else {
      typeAll();
    }
  }

  // ——— Smooth-scroll for in-page nav ———
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();
