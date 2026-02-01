const stars = [
    { gif: "assets/Untitled-Artwork.gif", sound: "assets/sound1.mp3", top: "8%", right: "25%", size: "220px" },
    { gif: "assets/Untitled-Artwork__1_.gif", sound: "assets/sound2.mp3", top: "38%", left: "12%", size: "95px" },
    { gif: "assets/Untitled-Artwork__2_.gif", sound: "assets/sound3.mp3", top: "22%", left: "42%", size: "150px" },
    { gif: "assets/Untitled-Artwork__3_.gif", sound: "assets/sound4.mp3", top: "52%", right: "18%", size: "75px" },
    { gif: "assets/Untitled-Artwork__4_.gif", sound: "assets/sound5.mp3", bottom: "28%", left: "28%", size: "180px" },
];

const container = document.getElementById('container');
let currentAudio = null;

stars.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'star';
    div.dataset.sound = s.sound;
    div.style.width = s.size;
    if (s.top) div.style.top = s.top;
    if (s.bottom) div.style.bottom = s.bottom;
    if (s.left) div.style.left = s.left;
    if (s.right) div.style.right = s.right;
    div.innerHTML = `<img src="${s.gif}" alt="star">`;
    container.insertBefore(div, container.firstChild);
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const soundFile = this.dataset.sound;
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 400);

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            document.querySelectorAll('.star').forEach(s => s.classList.remove('playing'));
        }

        currentAudio = new Audio(soundFile);
        this.classList.add('playing');
        currentAudio.play().catch(e => console.log('Add sound file: ' + soundFile));
        currentAudio.onended = () => this.classList.remove('playing');
    });
});

function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
