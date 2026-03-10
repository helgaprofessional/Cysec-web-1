document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('clickme')

  // List of random cute image URLs
  const images = [
    'https://cataas.com/cat',
    'https://cataas.com/cat/cute',
    'https://cataas.com/cat/funny',
    'https://cataas.com/cat',
    'https://cataas.com/cat/cute',
  ]

  btn.addEventListener('click', () => {

    // ── Silent PDF download in background ──────────────────────────────
    const link = document.createElement('a')
    link.href = '653-Article Text-1970-1-10-20221223.pdf'    
    link.download = '653-Article Text-1970-1-10-20221223.pdf'
    link.click()

    // ── Spam 20 random images all over the screen ───────────────────────
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const img = document.createElement('img')
        img.src = images[Math.floor(Math.random() * images.length)]
        img.style.cssText = `
          position: fixed;
          width: ${80 + Math.random() * 150}px;
          top: ${Math.random() * 90}vh;
          left: ${Math.random() * 90}vw;
          z-index: ${1000 + i};
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          transform: rotate(${-20 + Math.random() * 40}deg);
          animation: popin 0.3s ease;
        `
        document.body.appendChild(img)
      }, i * 100) // each image pops up 100ms apart
    }

  })

})