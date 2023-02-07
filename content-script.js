function dottedNodes(e) {
    const nodes = e.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        // そもそもテキストではない場合は処理しない
        if (node.nodeType !== Node.TEXT_NODE) {
            continue;
        }
        const cleanText = node.textContent.trim();
        // 空のテキストは処理しない
        if (!cleanText) {
            continue;
        }
        // すでにドット化されていたら処理しない
        if (/^\.+$/g.test(cleanText)) {
            continue;
        }
        node.textContent = '.'.repeat(cleanText.length);
    }
}

function clean() {
    const items = document.querySelectorAll('body *:not(style, script)');
    for (var i = 0; i < items.length; i++) {
        const item = items[i];
        dottedNodes(item);
    }
}

clean();
// この処理はマジでくそだと思う
setInterval(clean, 1000 / 20);

// TODO: YouTubeライブとニコニコのコメントが貫通するバグの修正
