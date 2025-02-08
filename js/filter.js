// Save this as 'js/filter.js'

document.addEventListener('DOMContentLoaded', () => {
    // Get all portfolio items and navigation links
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterLinks = document.querySelectorAll('.portfolio-nav a');
    
    // Function to show/hide items based on category
    const filterPortfolio = (category) => {
        portfolioItems.forEach(item => {
            // Get tags from the item
            const tags = Array.from(item.querySelectorAll('.tag')).map(tag => 
                tag.textContent.toLowerCase()
            );
            
            // Show all items if 'all' is selected, otherwise filter by category
            if (category === 'all' || tags.includes(category.toLowerCase())) {
                item.style.opacity = '1';
                item.style.display = 'block';
                // Add animation
                setTimeout(() => {
                    item.style.transform = 'translateY(0)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                // Hide after fade out
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    };
    
    // Add click event listeners to filter links
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            filterLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get category from href attribute
            const category = link.getAttribute('href').replace('#', '');
            
            // Apply filter
            filterPortfolio(category);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${category}`);
        });
    });
    
    // Handle initial load with hash
    const initialCategory = window.location.hash.replace('#', '') || 'all';
    const activeLink = document.querySelector(`.portfolio-nav a[href="#${initialCategory}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        filterPortfolio(initialCategory);
    }
});