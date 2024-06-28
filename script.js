document.addEventListener('DOMContentLoaded', () => {
    const dino = document.getElementById('dino');
    const cactus = document.getElementById('cactus');
    let isJumping = false;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && !isJumping) {
            jump();
        }
    });

    function jump() {
        isJumping = true;
        let upInterval = setInterval(() => {
            if (dino.offsetTop <= 100) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (dino.offsetTop >= 150) {
                        clearInterval(downInterval);
                        isJumping = false;
                    } else {
                        dino.style.top = dino.offsetTop + 10 + 'px';
                    }
                }, 20);
            } else {
                dino.style.top = dino.offsetTop - 10 + 'px';
            }
        }, 20);
    }

    function checkCollision() {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            alert('Game Over');
            window.location.reload();
        }
    }

    setInterval(checkCollision, 10);
});
