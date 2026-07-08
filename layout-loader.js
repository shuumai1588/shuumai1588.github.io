document.addEventListener("DOMContentLoaded", () => {
    fetch("layout.html")
        .then(res => res.text())
        .then(html => {
            const temp = document.createElement("html");
            temp.innerHTML = html;

            // head の内容を追加
            const newHead = temp.querySelector("head");
            if (newHead) {
                for (const node of newHead.children) {
                    document.head.appendChild(node.cloneNode(true));
                }
            }

            // header/footer を安全な場所に差し込む
            const newHeader = temp.querySelector("header");
            const newFooter = temp.querySelector("footer");

            if (newHeader) {
                document.getElementById("layout-header")
                    .appendChild(newHeader.cloneNode(true));
            }
            if (newFooter) {
                document.getElementById("layout-footer")
                    .appendChild(newFooter.cloneNode(true));
            }
        });
});
