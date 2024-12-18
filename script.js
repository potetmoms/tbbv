// Array of image URLs
const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3'
];

// Function to get a consistent random image for the day
function getRandomImage() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate(); // Unique seed for the day
    const index = seed % images.length; // Consistent image for the day
    return images[index];
}

// Set the random image
document.getElementById('randomImage').src = getRandomImage();
