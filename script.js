// Fetch the list of images from images.json
fetch('images.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load images.json');
        }
        return response.json();
    })
    .then(images => {
        // Function to get a consistent random image for the day
        const getRandomImage = () => {
            const today = new Date();
            const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate(); // Unique seed for the day
            const index = seed % images.length; // Consistent image for the day
            return images[index];
        };

        // Set the random image
        document.getElementById('randomImage').src = getRandomImage();
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });
