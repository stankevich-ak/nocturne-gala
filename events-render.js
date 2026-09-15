/* Keep the existing page-specific card styles while sharing event selection and markup. */
(() => {
  const events = window.nocturneEvents;
  if (!Array.isArray(events)) return;
  const localDay = now => new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Vancouver', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(now);
  const dateLabel = date => new Intl.DateTimeFormat('en-CA', {
    timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric'
  }).format(new Date(`${date}T12:00:00Z`));
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const link = (href, className, text) => {
    const node = element('a', className, text);
    node.href = href;
    return node;
  };
  function card(event, past) {
    const url = `/${event.id}/`;
    const card = element('article', 'ev-card');
    const cover = link(url, 'ev-img-link');
    cover.setAttribute('aria-label', `${past ? 'View the recap of' : 'Learn more about'} ${event.name}`);
    const frame = element('div', 'ev-img');
    const image = element('img', 'ev-photo');
    image.src = event.image;
    image.alt = event.name;
    image.loading = 'lazy';
    frame.append(image, element('span', `ev-status${past ? ' past' : ''}`, past ? 'Past Event' : event.status));
    cover.append(frame);
    const body = element('div', 'ev-body');
    const meta = element('p', 'ev-meta', `${event.location} · `);
    const date = element('time', '', dateLabel(event.date));
    date.dateTime = event.date;
    meta.append(date);
    const actions = element('div', 'ev-ctas');
    if (!past && event.cta) actions.append(link(`${url}#${event.anchor}`, 'btn btn-gold', event.cta));
    actions.append(link(url, 'btn btn-outline', past ? 'View Recap' : 'Learn More'));
    body.append(element('h3', 'ev-name', event.name), meta, element('p', 'ev-desc', event.description), actions);
    card.append(cover, body);
    return card;
  }
  let renderedDay;
  function render() {
    const today = localDay(new Date());
    if (renderedDay === today) return;
    renderedDay = today;
    const isPast = event => event.past || event.date < today;
    const upcoming = events.filter(event => !isPast(event)).sort((a, b) => a.date.localeCompare(b.date));
    const past = events.filter(isPast).sort((a, b) => b.date.localeCompare(a.date));
    document.querySelectorAll('[data-event-list]').forEach(container => {
      const mode = container.dataset.eventList;
      // Past-event pages retain two cards, with the nearest upcoming event first.
      const selected = mode === 'past' ? past : mode === 'next' ? upcoming.slice(0, 2) : upcoming;
      if (selected.length) container.replaceChildren(...selected.map(event => card(event, mode === 'past')));
      else {
        const message = element('p', 'events-empty', mode === 'past' ? 'Past event recaps will appear here.' : 'Our next event will be announced soon.');
        if (mode === 'next') message.append(' ', link('/events/', '', 'Explore all events'));
        container.replaceChildren(message);
      }
    });
  }
  render();
  // Refresh long-lived tabs across the local date boundary and on return.
  setInterval(render, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
})();
