async function overrideMultipleParts(url, targets) {
  const res = await fetch(url);
  const htmlText = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");

  targets.forEach(({ selector, overrideId }) => {
    const extracted = doc.querySelector(selector);
    const targetDiv = document.getElementById(overrideId);

    if (extracted && targetDiv) {
      // headタグの中身だけを抽出（タグなし）
      let text = "";
      for (const child of extracted.children) {
        text += child.textContent.trim() + "\n";
      }
      targetDiv.textContent = text.trim();
    } else {
      console.warn("対象が見つからない:", selector, overrideId);
    }
  });
}

overrideMultipleParts("src/core /layout.html", [
  { selector: "head",   overrideId: "override-head" },
  { selector: "header", overrideId: "override-header" },
  { selector: "footer", overrideId: "override-footer" }
]);
