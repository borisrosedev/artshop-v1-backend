// ArtShop Client-Side JavaScript

console.log('ArtShop app.js loaded successfully! 🎨');

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    // Progressive fade-in for cards
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.art-card, .feature-card').forEach(el => observer.observe(el));

    // Mobile nav collapse (future enhancement placeholder)
    // const navToggle = document.querySelector('.nav-toggle');
    // if (navToggle) {
    //   navToggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));
    // }
});

// Sample API fetch function
async function fetchArtworks() {
    try {
        const response = await fetch('/artworks');
        const data = await response.json();
        console.log('Artworks fetched:', data);
        return data;
    } catch (error) {
        console.error('Error fetching artworks:', error);
    }
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  .art-card, .feature-card { opacity:0; transform:translateY(26px); transition:opacity .6s ease, transform .6s cubic-bezier(.22,.61,.36,1); }
  .art-card.in, .feature-card.in { opacity:1; transform:translateY(0); }
`;
document.head.appendChild(style);
