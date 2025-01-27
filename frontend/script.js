const API_URL = import.meta.env.VITE_API_URL;

document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });

  const data = await response.text();
  alert(data);
});

document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });

  const data = await response.json();
  alert(data.message);
});
