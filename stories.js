// Every story on the site, oldest first. A story can run as many strips as it needs:
// add strip ids (rendered by strips-v3/render.mjs) to `strips`, then run build.py.
// `text` is the dialogue, one line per panel: it is the alt text and the transcript.
window.STORIES = [
  {
    slug: 'boss-of-me', title: 'The Boss of Me', date: '2026-09-25',
    blurb: 'Ezra declares himself in charge of everything. The hill has other plans.',
    strips: [{ id: 's1', text: [
      "Ezra: From now on, I'm the boss of me. I decide everything! Pascal: Everything?",
      "Ezra: Where I go! How fast! What happens! I'm the master of my destiny!",
      'Ezra: AAAA! Pascal: Did you decide the rock?',
      "Ezra: OK. I'm the boss of me, except rocks, hills, gravity, and Mom. Pascal: Keep going. The list gets long.",
    ] }],
  },
  {
    slug: 'mirror', title: 'Mirror', date: '2026-09-25',
    blurb: 'A hand mirror, a puddle, a window, and one very sticky face.',
    strips: [{ id: 's2', text: [
      'Ezra: Look! I caught the sun!',
      "Ezra: It's in the puddle too! And the window! And every drop on the grass!",
      "Ezra: How can there be a million suns and only one sun? Pascal: The drops don't make it. They show it.",
      'Ezra: So what am I showing? Pascal: Right now? Mostly jam.',
    ] }],
  },
  {
    slug: 'private', title: 'Private', date: '2026-09-25',
    blurb: 'Ezra claims the big old tree. Forever. Mostly.',
    strips: [{ id: 's3', text: [
      "Tap tap tap. The sign reads: Ezra's Fort. Private! Forever!",
      'Pascal: Whose tree is it? Ezra: Mine. I climbed it.',
      'Ezra and Pascal look up at the huge old tree.',
      "The new sign reads: Guest Fort. All welcome. Even me. Ezra: But it's still mine on Tuesdays.",
    ] }],
  },
  {
    slug: 'bedtime', title: 'Bedtime', date: '2026-09-25',
    blurb: 'Two small figures, one very big sky.',
    strips: [{ id: 's4', text: [
      'Ezra and Pascal lie in the grass under the stars.',
      'Ezra: Pascal, why do I want summer to last forever, when nothing lasts forever?',
      "Pascal: Maybe you're made for somewhere it does.",
      'A voice from the house: Ezra! Bedtime! Ezra: Not there, obviously.',
    ] }],
  },
  {
    slug: 'the-seed', title: 'The Seed', date: '2026-10-10',
    blurb: 'Ezra finds a tiny nut. It turns out to be much bigger on the inside.',
    strips: [{ id: 's5', text: [
      "Ezra: Pascal! I found a tiny nut! Pascal: That's not a nut. That's a tree.",
      'Ezra: THIS?! Where does it keep the branches?!',
      'Ezra holds the acorn to his ear and listens.',
      "Ezra: I'll plant it, and someday we'll sit in its shade! Pascal: In about eighty years. Ezra: ...I'll bring snacks.",
    ] }],
  },
  {
    slug: 'thank-you-note', title: 'Thank-You Note', date: '2026-10-10',
    blurb: 'Mom wants a thank-you note for the strawberries. But who gets it?',
    strips: [{ id: 's6', text: [
      'Ezra: Mom says I have to write a thank-you note for the strawberries.',
      'Ezra: But who do I thank? The bush? The bees? The sun? The rain? Pascal: Who sent all of them?',
      'Ezra lies in the grass with a crayon in his mouth, looking at the sky.',
      'The note reads: Thank you for everything! P.S. More strawberries. Ezra: That covers everybody.',
    ] }],
  },
  {
    slug: 'today', title: 'Today', date: '2026-10-10',
    blurb: 'The biggest jump in history, scheduled a little too soon.',
    strips: [{ id: 's7', text: [
      "Ezra: Tomorrow I'm doing the biggest jump in history! Pascal: Tomorrow isn't promised. Today is.",
      'Ezra: Then TODAY! Biggest jump EVER! Right NOW!',
      "Pascal: What's the landing plan? Ezra: LANDING?!",
      'Ezra sits soaked in the creek. Ezra: The landing was for tomorrow.',
    ] }],
  },
  {
    slug: 'signed', title: 'Signed', date: '2026-10-10',
    blurb: 'A ladybug, a magnifying glass, and a bear with a secret.',
    strips: [{ id: 's8', text: [
      'Ezra: Pascal, who painted the dots on this ladybug?',
      'Ezra: Seven dots. Exactly seven! Somebody counted! Pascal: Everything is signed, if you look.',
      'Ezra looks around the garden through his magnifying glass.',
      "Ezra: So where's YOUR signature? Pascal: On my tag. Don't look.",
    ] }],
  },
];
