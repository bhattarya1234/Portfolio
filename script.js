let links = document.getElementById("links");
let menuBtn = document.getElementById("menuBtn");
let modeToggle = document.getElementById("mode");
let isToggled = false;
let container = document.getElementById("container");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
});

modeToggle.addEventListener("click", () => {
  if (!isToggled) {
    // light theme
    modeToggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/></svg>';

    isToggled = true;

    container.style.background = "#EAE8E4";
    modeToggle.style.color = "#25272B";

    document.documentElement.style.setProperty("--text-color1", "#25272B");
    document.documentElement.style.setProperty("--text-colorH1", "#292B30");
    document.documentElement.style.setProperty("--text-colorP", "#686868");

    document.documentElement.style.setProperty(
      "--btn-border",
      "rgba(37, 39, 43, 0.25)",
    );
    document.documentElement.style.setProperty(
      "--btn-bg",
      "rgba(37, 39, 43, 0.05)",
    );
  } else {
    // dark theme
    modeToggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>';

    isToggled = false;

    container.style.background = "rgb(14, 18, 27)";
    modeToggle.style.color = "aliceblue";

    document.documentElement.style.setProperty("--text-color1", "aliceblue");
    document.documentElement.style.setProperty(
      "--text-colorH1",
      "rgb(203, 203, 203)",
    );
    document.documentElement.style.setProperty(
      "--text-colorP",
      "rgb(113, 113, 113)",
    );

    document.documentElement.style.setProperty(
      "--btn-border",
      "rgba(240, 248, 255, 0.25)",
    );
    document.documentElement.style.setProperty(
      "--btn-bg",
      "rgba(240, 248, 255, 0.06)",
    );
  }
});


        //for autotyping library
    var typed = new Typed('#element', {
      strings:["Full Stack Developer","MERN Stack Developer","Programmer", "Designer"],
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 1200,
      loop: true
    });




