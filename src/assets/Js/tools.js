  // Block common key combinations (F12, Ctrl+Shift+I/J, Ctrl+U)
  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();

    if (key === "f12") {
      e.preventDefault();
      alert("F12 is disabled");
    }

    if (e.ctrlKey && e.shiftKey && (key === "i" || key === "j")) {
      e.preventDefault();
      alert("Developer tools are blocked");
    }

    if (e.ctrlKey && key === "u") {
      e.preventDefault();
      alert("Viewing source is disabled");
    }
  });

  // Block right-click context menu
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right-click is disabled");
  });

  // Detect DevTools opened (based on window resizing)
  let detectDevTools = setInterval(() => {
    if (
      window.outerWidth - window.innerWidth > 100 ||
      window.outerHeight - window.innerHeight > 100
    ) {
      alert("Developer tools are open!");
    }
  }, 1000);
