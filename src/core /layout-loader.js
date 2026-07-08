async function overrideMultipleParts(url, targets) {
  const res = await fetch(url);
  const htmlText = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");

  // targets = [{selector, overrideId}, ...]
  targets.forEach(({ selector, overrideId }) => {
    const extracted = doc.querySelector(selector);
    const targetDiv = document.getElementById(overrideId);

    if (extracted && targetDiv) {
      targetDiv.innerHTML = extracted.innerHTML;
    } else {
      console.warn("対象が見つからない:", selector, overrideId);
    }
  });
}

// head, header, footer を順番に処理
overrideMultipleParts("layout.html", [
  { selector: "head",   overrideId: "override-head" },
  { selector: "header", overrideId: "override-header" },
  { selector: "footer", overrideId: "override-footer" }
]);
