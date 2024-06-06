document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const searchInput = document.getElementById('search-input');
    const imageResultsContainer = document.getElementById('image-results');

    generateButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            fetchImages(searchTerm);
        }
    });

    async function fetchImages(query) {
        const apiKey = 'gqEYNmX6p2vGAUvjyz-EntntGkwDA2noKPaZdzhuxQ0';
        const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayImages(data.results);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    function displayImages(images) {
        imageResultsContainer.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('div');
            imgElement.classList.add('image-card');
            imgElement.innerHTML = `
                <img src="${image.urls.small}" alt="${image.alt_description}">
                <p>${image.alt_description}</p>
                <a href="${image.urls.full}" download="image.jpg" class="download-button">Download</a>
            `;
            imageResultsContainer.appendChild(imgElement);
        });
    }
});
