function updateCountdown() {
    const now = new Date();
    
    // 現在の年から、次の年の1月1日 00:00:00 を計算
    const currentYear = now.getFullYear();
    const nextYearDate = new Date(currentYear + 1, 0, 1, 0, 0, 0);
    
    // タイトルの更新（例：2026年まであと）
    document.getElementById('year-title').innerText = `${currentYear + 1}年まであと`;

    const diff = nextYearDate - now;
    const displayElement = document.getElementById('year-timer');

    // 万が一の例外処理
    if (diff <= 0) {
        displayElement.innerText = "00:00:00:00:00";
        return;
    }

    // 時間の計算
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const ms = Math.floor((diff % 1000) / 10); // 0.01秒

    // 2桁固定で表示 (日は3桁以上になることもあるのでそのまま)
    displayElement.innerText = 
        `${String(d).padStart(2, '0')}:${String(h).padStart(2, '0')}:` +
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:` +
        `${String(ms).padStart(2, '0')}`;
}

// 10ミリ秒（0.01秒）ごとに実行
setInterval(updateCountdown, 10);
updateCountdown();