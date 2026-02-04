let clickCount = 0;
const messages = [
    "Serius?",
    "Serius Ini Gw Diginiin?",
    "Ayolaaa😛",
    "Pwisss 🙏",
    "Jahad Bangedd 💔",
    "Ok Gitu Yaa 😢",
    "Ini Last Serius😭",
    "Yaudaa🥹"
];

function changeNo() {
    const noBtn = document.getElementById('noBtn');
    
    if (clickCount < messages.length) {
        noBtn.textContent = messages[clickCount];
        noBtn.classList.add('changed');
        
        setTimeout(() => {
            noBtn.classList.remove('changed');
        }, 500);
        
        clickCount++;
    }
}

function sayYes() {
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('successMessage').style.display = 'block';
    
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
}

function showGallery() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('photoGallery').style.display = 'block';
    
    // Auto scroll animation
    setTimeout(() => {
        autoScrollGallery();
    }, 500);
}

function autoScrollGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        const scrollHeight = galleryContainer.scrollHeight;
        const clientHeight = galleryContainer.clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        
        let currentScroll = 0;
        const scrollStep = 2;
        const scrollInterval = setInterval(() => {
            if (currentScroll >= maxScroll) {
                clearInterval(scrollInterval);
                // Scroll back to top smoothly
                setTimeout(() => {
                    galleryContainer.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 1000);
            } else {
                currentScroll += scrollStep;
                galleryContainer.scrollTop = currentScroll;
            }
        }, 20);
    }
}

function backToSuccess() {
    document.getElementById('photoGallery').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = ['❤️', '💕', '💖', '💗', '💝', '🌹', '✨'][Math.floor(Math.random() * 7)];
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-50px';
    confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
    confetti.style.animation = `float ${Math.random() * 3 + 3}s linear`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 6000);
}