const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const root = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeKey = "corearmorx-theme";

const getStoredTheme = () => {
  try {
    return localStorage.getItem(themeKey);
  } catch (_) {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(themeKey, theme);
  } catch (_) {
    // Storage can fail in private contexts; the current page still updates.
  }
};

const normalizeTheme = (theme) => (theme === "light" ? "light" : "dark");

const applyTheme = (theme) => {
  const nextTheme = normalizeTheme(theme);

  if (nextTheme === "light") {
    root.dataset.theme = "light";
  } else {
    root.removeAttribute("data-theme");
  }

  if (themeMeta) {
    themeMeta.setAttribute("content", nextTheme === "light" ? "#f8ffe9" : "#071008");
  }

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.setAttribute("aria-pressed", String(nextTheme === "light"));
    button.setAttribute(
      "aria-label",
      nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
    button.title = nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme";

    const label = button.querySelector(".theme-toggle-text");
    if (label) {
      label.textContent = nextTheme === "light" ? "Dark" : "Light";
    }
  });
};

applyTheme(root.dataset.theme === "light" ? "light" : getStoredTheme());

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (navLinks && !navLinks.querySelector(".theme-toggle")) {
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.type = "button";
  themeToggle.innerHTML =
    '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-text"></span>';

  themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setStoredTheme(nextTheme);
    applyTheme(nextTheme);
  });

  navLinks.appendChild(themeToggle);
  applyTheme(root.dataset.theme === "light" ? "light" : getStoredTheme());
}
