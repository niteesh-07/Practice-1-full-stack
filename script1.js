const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  toggleBtn.textContent = newTheme === "light" ? "🌙" : "☀️";
});
