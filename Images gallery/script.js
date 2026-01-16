const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let images = [];
let currentIndex = 0;
const TOTAL_IMAGES = 12;

// Load Random Images from API
for (let i = 0; i < TOTAL_IMAGES; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/500/400?random=${Math.random()}`;
  img.onclick = () => openLightbox(i);
  gallery.appendChild(img);
  images.push(img);
}

// Open Lightbox
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Next / Prev
function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  lightboxImg.src = images[currentIndex].src;
}
