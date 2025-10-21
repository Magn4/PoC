document.getElementById('fetchBtn').addEventListener('click', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '';

  // Fetch the value from the safe /echo endpoint (returns JSON)
  const res = await fetch(`/echo?id=${encodeURIComponent(id)}`);
  const data = await res.json();

  // SAFE: insert untrusted data using textContent (no HTML parsing)
  document.getElementById('safeText').textContent = data.id;

  // If you must insert HTML, sanitize it first using DOMPurify
  const clean = DOMPurify.sanitize(data.id);
  document.getElementById('sanitizedHtml').innerHTML = clean;
});