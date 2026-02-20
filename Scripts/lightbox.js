// =============================================
// VIDEO LIGHTBOX — Pure JS, no dependencies
// Privacy note: No external scripts, no tracking,
// no CDN calls. Your visitors' data stays local.
// =============================================

const lightbox      = document.getElementById('video-lightbox');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn      = document.getElementById('lightbox-close');

// --- OPEN: Intercept all video trigger links ---
document.querySelectorAll('.video-trigger').forEach(link => {
  link.addEventListener('click', function(event) {
    
    event.preventDefault(); // Stop the browser from navigating to the file

    const videoSrc = this.dataset.video; // Grab the path from data-video=""

    // Set the video source and load it
    lightboxVideo.src = videoSrc;
    lightboxVideo.load();

    // Show the lightbox
    lightbox.classList.add('active');

    // Autoplay after a tiny delay (browsers need the overlay to render first)
    lightboxVideo.play();
  });
});

// --- CLOSE: Via the X button ---
closeBtn.addEventListener('click', closeLightbox);

// --- CLOSE: Click on the dark backdrop (outside the video) ---
lightbox.addEventListener('click', function(event) {
  // Only close if they clicked the backdrop itself, not the video/button
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// --- CLOSE: Press the Escape key ---
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// --- The close function ---
function closeLightbox() {
  lightboxVideo.pause();       // Stop playback
  lightboxVideo.src = '';      // Clear the source (frees memory)
  lightbox.classList.remove('active'); // Hide the overlay
}
```

---

Your File Structure

portfolio/
├── index.html
├── lightbox.css
├── lightbox.js
└── videos/
    ├── project-one.mp4    ← converted from .MOV
    └── project-two.mp4
```