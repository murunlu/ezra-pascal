// Tiny hash router: #/ (home), #/all, #/meet, #/story/<slug>
(function () {
  const S = window.STORIES;
  const app = document.getElementById('app');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = d => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const count = st => st.strips.length === 1 ? '1 strip' : st.strips.length + ' strips';

  const stripHTML = (strip, title) => {
    const src = `img/strips/${strip.id}.webp`;
    const alt = `${title}. ` + strip.text.map((t, i) => `Panel ${i + 1}: ${t}`).join(' ');
    return `<figure class="strip sketch">
      <img class="strip-img" src="${src}" alt="${esc(alt)}" width="2400" height="901" loading="lazy">
      <div class="panels" role="img" aria-label="${esc(alt)}">
        ${strip.text.map(() => `<div class="panel" style="background-image:url('${src}')"></div>`).join('')}
      </div>
    </figure>`;
  };

  const card = st => `<a class="card" href="#/story/${st.slug}">
      <img src="img/strips/${st.strips[0].id}-thumb.webp" alt="" loading="lazy" width="420" height="626">
      <h3>${esc(st.title)}</h3>
      <span class="meta">${fmt(st.date)} &middot; ${count(st)}</span>
      <p>${esc(st.blurb)}</p>
    </a>`;

  const views = {
    home() {
      const latest = S[S.length - 1];
      return `<section>
          <div class="featured-head"><span class="stamp">Newest!</span><h2>${esc(latest.title)}</h2><span class="date">${fmt(latest.date)}</span></div>
          <p class="blurb">${esc(latest.blurb)}</p>
          ${latest.strips.map(s => stripHTML(s, latest.title)).join('')}
          <p class="center"><a class="btn primary" href="#/story/${S[0].slug}">Start from the very beginning</a></p>
        </section>
        <section>
          <h2 class="section-title">All the stories</h2>
          <p class="section-sub">${S.length} stories so far. Newest first.</p>
          <div class="cards">${[...S].reverse().map(card).join('')}</div>
        </section>`;
    },
    all() {
      return `<h2 class="section-title">All the stories</h2>
        <p class="section-sub">From the very first ride down the hill to the newest one.</p>
        <div class="cards">${S.map(card).join('')}</div>`;
    },
    meet() {
      return `<h2 class="section-title">Meet the gang</h2>
        <div class="gang">
          <div class="who"><img src="img/ezra.webp" alt="Ezra, a boy with messy black hair, green T-shirt and blue overalls, arms up and grinning">
            <div><h3 class="ezra-name">Ezra</h3><p class="role">Age six. Runs at everything.</p>
            <p>Loud, fast, sincere, and full of big plans. Asks the biggest question in the room, then gets distracted by a bug. One overall strap is always falling down.</p></div></div>
          <div class="who"><img src="img/pascal.webp" alt="Pascal, a tall, lanky honey-brown teddy bear with a patch on his tummy, walking">
            <div><h3 class="pascal-name">Pascal</h3><p class="role">A stuffed bear. Very much alive.</p>
            <p>Tall, lanky, and patched on the tummy. Says very little, and is usually right, slowly. Nobody knows if anyone besides Ezra hears him talk.</p></div></div>
          <div class="who"><img class="place" src="img/house.webp" alt="The house at night, one window lit, seen from the hill">
            <div><h3>Mom &amp; Dad</h3><p class="role">Mostly off panel.</p>
            <p>A voice from the house, a pair of legs, a hand holding a towel. The straight men.</p></div></div>
          <div class="who"><img class="place" src="img/tree.webp" alt="The huge old tree in the backyard, with Ezra and Pascal tiny at its foot">
            <div><h3>The backyard</h3><p class="role">Where it all happens.</p>
            <p>A house at the edge of a field, a big hill, a creek, one huge old tree, and a lot of stars.</p></div></div>
        </div>
        <p class="center" style="margin-top:36px"><a class="btn primary" href="#/story/${S[0].slug}">Read the first story</a></p>`;
    },
    story(slug) {
      const i = S.findIndex(s => s.slug === slug);
      if (i < 0) return `<p class="center">That story wandered off. <a href="#/">Back to the comics</a>.</p>`;
      const st = S[i], prev = S[i - 1], next = S[i + 1];
      const parts = st.strips.map((s, k) => `
        ${st.strips.length > 1 ? `<p class="part">Part ${k + 1}</p>` : ''}
        ${stripHTML(s, st.title)}
        <details class="transcript"><summary>Read the words</summary><ol>${s.text.map(t => `<li>${esc(t)}</li>`).join('')}</ol></details>`).join('');
      const link = (s, label, cls) => s ? `<a class="btn ${cls}" href="#/story/${s.slug}">${label}</a>` : `<span class="btn" aria-disabled="true">${label}</span>`;
      return `<div class="reader-head"><h2>${esc(st.title)}</h2><span class="date">${fmt(st.date)} &middot; story ${i + 1} of ${S.length}</span></div>
        ${parts}
        <nav class="pager" aria-label="More stories">
          ${link(prev, '&larr; ' + (prev ? esc(prev.title) : ''), '')}
          <a class="btn" href="#/all">All stories</a>
          ${link(next, (next ? esc(next.title) : '') + ' &rarr;', 'primary')}
        </nav>`;
    },
  };

  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [name, arg] = h.split('/');
    const view = name === 'story' ? 'story' : (views[name] ? name : 'home');
    app.innerHTML = view === 'story' ? views.story(arg) : views[view]();
    document.querySelectorAll('.nav a').forEach(a => {
      if (a.dataset.nav === view) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    const st = view === 'story' && S.find(s => s.slug === arg);
    document.title = st ? `${st.title} · Ezra & Pascal` : 'Ezra & Pascal';
    if (route.ran) { window.scrollTo(0, 0); app.focus({ preventScroll: true }); }
    route.ran = true;
  }

  // arrow keys flip stories in the reader
  document.addEventListener('keydown', e => {
    if (e.target.closest('input, textarea') || e.altKey || e.ctrlKey || e.metaKey) return;
    const m = location.hash.match(/^#\/story\/(.+)$/); if (!m) return;
    const i = S.findIndex(s => s.slug === m[1]);
    const to = e.key === 'ArrowRight' ? S[i + 1] : e.key === 'ArrowLeft' ? S[i - 1] : null;
    if (to) location.hash = '#/story/' + to.slug;
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  window.addEventListener('hashchange', route);
  route();
})();
