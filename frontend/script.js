fetch("http://localhost:3000/api/matches")
  .then(res => res.json())
  .then(matches => {
    console.log("Fetched matches:", matches);

    const container = document.getElementById("matches");

    if (!Array.isArray(matches) || matches.length === 0) {
      container.innerHTML = "<p>No matches found.</p>";
      return;
    }

    // Sort matches by date (latest first)
    matches.sort((a, b) => new Date(b.date) - new Date(a.date));

    matches.forEach(match => {
      const matchTitle = match.title || "Unknown Match";
      const date = match.date || "Unknown Date";

      // Extract actual video link from iframe embed HTML
      const embedHtml = match.videos?.[0]?.embed || "";
      const videoLink = embedHtml.match(/src=['"]([^'"]+)['"]/)?.[1] || "#";

      const div = document.createElement("div");
      div.className = "match";
      div.innerHTML = `
        <strong>${matchTitle}</strong>
        <em>${new Date(date).toLocaleString()}</em>
        <a href="${videoLink}" target="_blank">Watch Highlight</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error fetching matches:", err);
    const container = document.getElementById("matches");
    container.innerHTML = "<p>Failed to load matches. Please try again later.</p>";
  });

// 🌗 Dark mode toggle logic (🌙 or ☀️)
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));

  // Update icon
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 🌓 Load persisted theme and update icon on startup
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
