// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add some animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Function to count character frequency in a word
function charCount(word) {
    const count = {};
    for (let char of word) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// Play background music when "Buka Undangan" button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const bukaUndanganBtn = document.querySelector('a.btn.btn-primary.btn-lg');
    const musicToggleBtn = document.getElementById('music-toggle');
    const audio = document.getElementById('bg-music');

    bukaUndanganBtn.addEventListener('click', () => {
        audio.play().catch(e => {
            console.log('Autoplay prevented:', e);
        });
    });

    musicToggleBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicToggleBtn.textContent = 'Pause Music';
        } else {
            audio.pause();
            musicToggleBtn.textContent = 'Play Music';
        }
    });

    // Add images from img2 folder to the carousel
    const carouselInner = document.querySelector('#photoGallery .carousel-inner');
    const img2FolderImages = [
        'img2/photo1.jpg',
        'img2/photo2.jpg',
        'img2/photo3.jpg',
        // Add more image paths as needed
    ];

    img2FolderImages.forEach((src) => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('d-block', 'w-100', 'rounded');
        img.alt = 'Foto tambahan';
        div.appendChild(img);
        carouselInner.appendChild(div);
    });
});

// RSVP form submission handling
const rsvpForm = document.getElementById('rsvpForm');
rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !attendance) {
        alert('Mohon isi nama dan kehadiran Anda.');
        return;
    }

    // For demo, just show alert. In real app, send data to server or email.
    alert(`Terima kasih, ${name}! Kehadiran Anda: ${attendance}. Pesan: ${message}`);

    // Reset form
    rsvpForm.reset();
});
