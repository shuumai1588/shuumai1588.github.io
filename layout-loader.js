document.addEventListener("DOMContentLoaded", () => {
    fetch("layout.html")
        .then(res => res.text())
        .then(html => {
            const temp = document.createElement("html");
            temp.innerHTML = html;

            // layout.html の head の中身を追加
            const newHead = temp.querySelector("head");
            if (newHead) {
                for (const node of newHead.children) {
                    document.head.appendChild(node.cloneNode(true));
                }
            }

            // layout.html の header と footer を差し込む
            const newHeader = temp.querySelector("header");
            const newFooter = temp.querySelector("footer");

            if (newHeader) {
                document.body.prepend(newHeader.cloneNode(true));
            }
            if (newFooter) {
                document.body.append(newFooter.cloneNode(true));
            }
        });
});
