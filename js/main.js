/* এই ফাইলটা data.js পড়ে পেজ বানায়। এটা সাধারণত বদলানোর দরকার নেই। */
const P = PORTFOLIO;
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const ICONS = {
  github: '<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>',
  linkedin: '<path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/>',
  facebook: '<path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/>',
  x: '<path d="M18.2 2.3h3.3l-7.2 8.3 8.5 11.2h-6.7l-5.2-6.8-6 6.8H1.6l7.7-8.8L1.2 2.3h6.8l4.7 6.2 5.5-6.2zm-1.2 17.5h1.8L7 4.2H5z"/>',
  youtube: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>'
};

function socialsHTML() {
  return P.socials.filter(s => s.url).map(s =>
    `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}"><svg viewBox="0 0 24 24">${ICONS[s.icon] || ICONS.github}</svg></a>`
  ).join('');
}

function iconURL(icon) {
  if (icon.startsWith('si:')) { const [, n, c] = icon.split(':'); return `https://cdn.simpleicons.org/${n}/${c || 'ffffff'}`; }
  if (icon.startsWith('http')) return icon;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${icon}/${icon}-original.svg`;
}

const cardImg = (p, cls = '') =>
  `<div class="pimg ${cls}"><span>${esc(p.name.split(' (')[0])}</span><img src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy" onerror="this.remove()"></div>`;

const tags = arr => arr.map(t => `<span class="tag">${esc(t)}</span>`).join('');

/* ---------- Navbar (সব পেজে) ---------- */
function renderNav(home) {
  const pre = home ? '' : 'index.html';
  const items = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['education', 'Education'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact']]
    .filter(([id]) => !(id === 'education' && !P.education.length) && !(id === 'experience' && !P.experience.length));
  $('#nav').innerHTML = `
    <div class="wrap nav">
      <a class="logo" href="${pre}#home"><b>AR</b> Raju</a>
      <nav class="nav-links" id="navLinks" aria-label="Main navigation">
        ${items.map(([id, label]) => `<a href="${pre}#${id}" data-id="${id}">${label}</a>`).join('')}
      </nav>
      <a class="btn sm outline nav-cta" href="${esc(P.resume)}" download>⬇ Resume</a>
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false">☰</button>
    </div>`;
  const links = $('#navLinks');
  $('#burger').onclick = e => { const o = links.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); };
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

function renderFooter() {
  $('#footer').innerHTML = `
    <div class="wrap foot">
      <div><b style="color:#fff"><span style="color:var(--accent)">AR</span> Raju</b><br>Let's build something great together.</div>
      <div class="socials sm">${socialsHTML()}</div>
      <div>© ${new Date().getFullYear()} ${esc(P.name)}. All rights reserved.</div>
    </div>`;
}

/* ---------- Home page ---------- */
function renderHome() {
  renderNav(true);
  const c = P.contact;
  const [first, ...rest] = P.name.split(' ');
  const last = rest.pop();

  $('#home').innerHTML = `
    <div class="wrap hero-grid">
      <div>
        <p class="hello">Hello, I'm</p>
        <h1>${esc(first + ' ' + rest.join(' '))} <span>${esc(last)}</span></h1>
        <p class="role">${esc(P.role)}</p>
        <p class="intro">${esc(P.intro)}</p>
        <div class="socials">${socialsHTML()}</div>
        <div class="hero-btns">
          <a class="btn primary" href="${esc(P.resume)}" download>⬇ Download Resume</a>
          <a class="btn" href="#contact">✉ Get In Touch</a>
        </div>
      </div>
      <div class="photo"><div class="frame"><span>AR</span><img src="${esc(P.heroPhoto)}" alt="${esc(P.name)}" onerror="this.remove()"></div></div>
    </div>`;

  $('#about').innerHTML = `
    <div class="wrap">
      <h2 class="title">About Me</h2>
      <div class="about-grid">
        <div class="about-photo"><span>AR</span><img src="${esc(P.aboutPhoto)}" alt="${esc(P.name)}" loading="lazy" onerror="this.remove()"></div>
        <div class="about-text">${P.about.paragraphs.map(t => `<p>${esc(t)}</p>`).join('')}</div>
        <div class="traits">${P.about.traits.map(t => `<div class="trait"><i>${t.icon}</i><div><b>${esc(t.title)}</b><small>${esc(t.text)}</small></div></div>`).join('')}</div>
      </div>
    </div>`;

  $('#skills').innerHTML = `
    <div class="wrap">
      <h2 class="title">Skills</h2>
      <p class="lead">Technologies and tools I work with.</p>
      <div class="skill-grid">
        ${P.skills.map(g => `
          <div class="box"><h3>${esc(g.category)}</h3>
            <div class="chips">${g.items.map(s => `<div class="chip"><img src="${esc(iconURL(s.icon))}" alt="" loading="lazy" onerror="this.remove()"><span>${esc(s.name)}</span></div>`).join('')}</div>
          </div>`).join('')}
      </div>
    </div>`;

  $('#education').innerHTML = P.education.length ? `
    <div class="wrap"><h2 class="title">Education</h2><p class="lead">My academic background.</p>
      ${P.education.map(e => `<div class="item"><div class="ic">🎓</div><div><h4>${esc(e.title)}</h4><p>${esc(e.place)}</p><p>${esc(e.period)}</p></div></div>`).join('')}
    </div>` : '';
  if (!P.education.length) $('#education').remove();

  $('#experience').innerHTML = P.experience.length ? `
    <div class="wrap"><h2 class="title">Experience</h2><p class="lead">Hands-on work I have done.</p>
      ${P.experience.map(e => `<div class="item"><div class="ic">💼</div><div><h4>${esc(e.title)}</h4><p>${esc(e.place)} · ${esc(e.period)}</p>
        <ul>${(e.points || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></div>`).join('')}
    </div>` : '';
  if (!P.experience.length) $('#experience').remove();

  $('#projects').innerHTML = `
    <div class="wrap">
      <h2 class="title">Projects</h2>
      <p class="lead">Some of my best work. Click "View Details" to read the full story of each project.</p>
      <div class="cards">
        ${P.projects.map((p, i) => `
          <article class="pcard">${cardImg(p, 'g' + (i % 3 + 1))}
            <div class="pbody"><h3>${esc(p.name)}</h3><p>${esc(p.short)}</p>
              <div class="tags">${tags(p.stack.slice(0, 4))}</div>
              <a class="btn sm outline" href="project.html?id=${encodeURIComponent(p.id)}">View Details →</a>
            </div>
          </article>`).join('')}
      </div>
    </div>`;

  const wa = c.whatsapp ? `<li><span class="ic">💬</span><div><small>WhatsApp</small><a href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener">+${esc(c.whatsapp)}</a></div></li>` : '';
  $('#contact').innerHTML = `
    <div class="wrap">
      <h2 class="title">Contact</h2>
      <p class="lead">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
      <div class="contact-grid">
        <ul class="cinfo">
          <li><span class="ic">✉</span><div><small>Email</small><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></div></li>
          <li><span class="ic">📞</span><div><small>Phone</small><a href="tel:${esc(c.phone)}">${esc(c.phone)}</a></div></li>
          ${wa}
        </ul>
        <form id="contactForm">
          <div class="frow"><input name="name" type="text" placeholder="Your Name" required><input name="email" type="email" placeholder="Your Email" required></div>
          <textarea name="message" placeholder="Message" required></textarea>
          <button class="btn primary" type="submit" style="justify-self:start">➤ Send Message</button>
        </form>
      </div>
    </div>`;
  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(e.target);
    const sub = encodeURIComponent('Portfolio message from ' + d.get('name'));
    const body = encodeURIComponent(d.get('message') + '\n\nFrom: ' + d.get('name') + ' (' + d.get('email') + ')');
    location.href = `mailto:${c.email}?subject=${sub}&body=${body}`;
  });

  renderFooter();

  // সক্রিয় মেনু হাইলাইট
  const links = [...document.querySelectorAll('.nav-links a')];
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.dataset.id === en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main > section[id]').forEach(s => io.observe(s));
}

/* ---------- Project details page ---------- */
function renderProject() {
  renderNav(false);
  const id = new URLSearchParams(location.search).get('id');
  const idx = P.projects.findIndex(p => p.id === id);
  const p = P.projects[idx];
  const main = $('#project');
  if (!p) { main.innerHTML = `<div class="wrap"><a class="back" href="index.html#projects">← Back to Projects</a><h1>Project not found</h1></div>`; renderFooter(); return; }
  document.title = `${p.name} | ${P.name}`;
  const list = (a, cls) => `<ul class="${cls}">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  main.innerHTML = `
    <div class="wrap">
      <a class="back" href="index.html#projects">← Back to Projects</a>
      <div class="pd-hero">
        <div>
          <h1>${esc(p.name)}</h1>
          <p>${esc(p.short)}</p>
          <div class="tags">${tags(p.stack)}</div>
          <div class="hero-btns" style="margin-top:20px">
            <a class="btn primary" href="${esc(p.live)}" target="_blank" rel="noopener">↗ Live Project</a>
            <a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub (Client)</a>
          </div>
        </div>
        <div class="pd-img">${cardImg(p, 'g' + (idx % 3 + 1))}</div>
      </div>
      <div class="pd-sec"><h2>Project Overview</h2><p>${esc(p.overview)}</p></div>
      <div class="pd-sec"><h2>Main Technology Stack</h2><div class="tags">${tags(p.stack)}</div></div>
      <div class="pd-sec pd-cols">
        <div><h2>Key Features</h2>${list(p.features, 'checklist')}</div>
        <div><h2>Links</h2><div class="links2">
          <div>Live Project<br><a href="${esc(p.live)}" target="_blank" rel="noopener">${esc(p.live)}</a></div>
          <div>GitHub (Client)<br><a href="${esc(p.github)}" target="_blank" rel="noopener">${esc(p.github)}</a></div>
        </div></div>
      </div>
      <div class="pd-sec"><h2>Challenges Faced</h2>${list(p.challenges, 'numlist')}</div>
      <div class="pd-sec"><h2>Future Improvements &amp; Plans</h2>${list(p.future, 'numlist')}</div>
    </div>`;
  renderFooter();
}

document.getElementById('project') ? renderProject() : renderHome();
