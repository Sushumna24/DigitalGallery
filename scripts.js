const images = [
    'https://th.bing.com/th/id/OIP.mkYhDfJ_OJxuBecZQ3cnHwHaEo?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.mkYhDfJ_OJxuBecZQ3cnHwHaEo?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.rpOqHFfq5hTMfenixciZzgHaEo?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.53_U22T9Tvj8aumYZQyLVAHaEo?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.wgBMVofijw6YWzH__9RbjgAAAA?w=450&h=306&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.-61dKUueIvCjV4UjS6KTvgHaEo?rs=1&pid=ImgDetMain'
];
let currentIndex = 0;

function displayImage(index) {
    const imageView = document.getElementById('current-image');
    imageView.src = images[index];

    // Highlight current image in film strip
    const filmStrip = document.getElementById('filmStrip');
    filmStrip.innerHTML = '';
    images.forEach((image, idx) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Thumbnail';
        img.onclick = () => {
            displayImage(idx);
            document.querySelectorAll('.film-strip img').forEach((img, i) => {
                img.classList.remove('active');
            });
            img.classList.add('active');
        };
        if (idx === index) {
            img.classList.add('active');
        }
        filmStrip.appendChild(img);
    });
}

function firstImage() {
    currentIndex = 0;
    displayImage(currentIndex);
}

function lastImage() {
    currentIndex = images.length - 1;
    displayImage(currentIndex);
}

function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    displayImage(currentIndex);
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    displayImage(currentIndex);
}

function shuffleImages() {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    displayImage(0); // Display the first image after shuffling
}

// Display the first image initially
displayImage(currentIndex);