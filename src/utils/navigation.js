/**
 * Client-side SPA navigation utility
 * Avoids full-page refreshes while keeping URLs clean for Vercel/production.
 */
export function navigateTo(path) {
  if (!path) return;

  // External link
  if (path.startsWith('http://') || path.startsWith('https://')) {
    window.open(path, '_blank', 'noopener,noreferrer');
    return;
  }

  // Anchor jump on current page (e.g., #about)
  if (path.startsWith('#')) {
    const el = document.querySelector(path);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', path);
      return;
    }
    // If element not on current page, route to home with hash
    path = '/' + path;
  }

  // Same page anchor link (e.g. /#about)
  if (path.startsWith('/#')) {
    const hash = path.slice(1);
    if (window.location.pathname === '/' || window.location.pathname === '') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', path);
        return;
      }
    }
  }

  // Update browser URL
  window.history.pushState({}, '', path);

  // Dispatch popstate event so App router picks it up immediately
  window.dispatchEvent(new Event('popstate'));

  // If path doesn't contain a hash anchor, scroll to top
  if (!path.includes('#')) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
}
