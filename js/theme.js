let themes = {
  light: {
    logo: "IEEE-CS_LogoTM-orange.png",
  },
  dark: {
    logo: "IEEE-CS_LogoTM-white.png",
  },
};
document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("theme-button");
  button.onclick = () => {
    let isDark = document.body.classList.toggle("dark");
    let theme = themes[isDark ? "dark" : "light"];
    document.getElementById("logo").src = `assets/imgs/${theme.logo}`;
    button.innerHTML = isDark ? 
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M380-160q133 0 226.5-93.5T700-480q0-133-93.5-226.5T380-800h-21q-10 0-19 2 57 66 88.5 147.5T460-480q0 89-31.5 170.5T340-162q9 2 19 2h21Zm0 80q-53 0-103.5-13.5T180-134q93-54 146.5-146T380-480q0-108-53.5-200T180-826q46-27 96.5-40.5T380-880q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80Zm80-400Z"/>
    </svg>`
    : 
    `<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960" >
      <path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-200Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </svg>`;
  };

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    button.click();
  }
});
