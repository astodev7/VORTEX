// Get property ID from URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

// Load property data
if (propertyId && properties[propertyId]) {
    const property = properties[propertyId];

    // Set basic info
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('propertyLocation').textContent = property.location;
    document.getElementById('propertyPrice').textContent = property.price;

    // Set specs
    document.getElementById('specArea').textContent = property.area;
    document.getElementById('specRooms').textContent = property.rooms;
    document.getElementById('specBaths').textContent = property.baths;
    document.getElementById('specGarage').textContent = property.garage;

    // Set property info
    document.getElementById('propertyCode').textContent = property.code;
    document.getElementById('propertyType').textContent = property.type;
    document.getElementById('propertyStatus').textContent = property.status;
    document.getElementById('propertyTax').textContent = property.tax;
    document.getElementById('propertyCondo').textContent = property.condo;

    // Set description
    document.getElementById('propertyDescription').innerHTML = property.description;

    // Set location description
    document.getElementById('locationInfo').innerHTML = `<p>${property.locationDesc}</p>`;

    // Load gallery
    const mainImage = document.getElementById('mainImage');
    mainImage.src = property.images[0];
    mainImage.alt = property.title;

    const thumbsContainer = document.getElementById('galleryThumbs');
    property.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `${property.title} - Foto ${index + 1}`;
        thumb.className = 'property-gallery-thumb';
        if (index === 0) thumb.classList.add('active');

        thumb.addEventListener('click', () => {
            mainImage.src = img;
            document.querySelectorAll('.property-gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });

        thumbsContainer.appendChild(thumb);
    });

    // Load features
    const featuresContainer = document.getElementById('featuresList');
    property.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature-item';
        featureDiv.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 6L8 14L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${feature}</span>
        `;
        featuresContainer.appendChild(featureDiv);
    });

    // Update page title
    document.title = `${property.title} — Vortex Imóveis`;

} else {
    // Property not found - redirect to 404
    window.location.href = '404.html';
}

// Contact form handler
const contactForm = document.querySelector('.contact-card-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            phone: contactForm.querySelector('input[type="tel"]').value,
            message: contactForm.querySelector('textarea').value,
            property: property.title,
            propertyCode: property.code
        };

        // In a real application, this would send data to a server
        console.log('Form data:', formData);

        // Redirect to thank you page
        window.location.href = 'thank-you.html';
    });
}
