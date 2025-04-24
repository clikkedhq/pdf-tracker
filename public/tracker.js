(async () => {
  const uuid = window._pdfTrackUUID;
  if (!uuid) return;

  const userAgent = navigator.userAgent;

  const ip = await fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => data.ip)
    .catch(() => "0.0.0.0");

  fetch("/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      uuid,
      ip,
      userAgent
    })
  });
})();
