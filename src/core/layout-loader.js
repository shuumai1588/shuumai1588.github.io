fetch("src/core/layout.html")
  .then(res => res.text())
  .then(html => {
    const doc = new DOMParser().parseFromString(html, "text/html");

    // header
    const header = doc.querySelector("header");
    if (header) {
      document.querySelector("#override-header").innerHTML = header.innerHTML;
    }

    // footer
    const footer = doc.querySelector("footer");
    if (footer) {
      document.querySelector("#override-footer").innerHTML = footer.innerHTML;
    }
  });
