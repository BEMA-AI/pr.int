const media = [
    { type: 'image', source: 'image1.jpg' },
    { type: 'image', source: 'image2.jpg' },
    { type: 'video', source: 'video1.mp4' },
    // Add more media files as needed
];

let index = 0;

function displayMedia() {
    const mediaContainer = document.getElementById('media-container');
    const currentMedia = media[index];

    // Clear the container for the new media item
    mediaContainer.innerHTML = '';

    if (currentMedia.type === 'image') {
        const img = document.createElement('img');
        img.src = currentMedia.source;
        mediaContainer.appendChild(img);
    } else if (currentMedia.type === 'video') {
        const video = document.createElement('video');
        video.src = currentMedia.source;
        video.autoplay = true;
        video.onended = () => { 
            // Go to the next media item when the video ends
            nextMedia();
        };
        mediaContainer.appendChild(video);
    }

    // Go to the next media item after 10 seconds (for images)
    if (currentMedia.type === 'image') {
        setTimeout(() => {
            nextMedia();
        }, 10000); // 10 seconds
    }
}

function nextMedia() {
    index = (index + 1) % media.length;
    displayMedia();
}

// Start displaying media
displayMedia();
