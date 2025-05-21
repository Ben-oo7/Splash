// ======================
// Core Functions
// ======================
function organizeAndDisplayLinks(links, searchTerm = "") {
    const container = document.getElementById("sections-container");
    
    // Validate input
    if (!links || !Array.isArray(links)) {
        container.innerHTML = `<div class="error-message">Invalid links data</div>`;
        return;
    }
    
    try {
        container.innerHTML = "";
        
        // Cache lowercase search term for performance
        const searchTermLower = searchTerm.toLowerCase();
        
        // Filter links if search term exists
		const filteredLinks = searchTerm 
			? links.filter(link => 
				link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				link.category.toLowerCase().includes(searchTerm.toLowerCase())
			)
			: links;

        // Group by category
        const categories = {};
        filteredLinks.forEach(link => {
            if (!link.category) return;
            if (!categories[link.category]) {
                categories[link.category] = [];
            }
            categories[link.category].push(link);
        });

        // Generate HTML
        for (const [category, items] of Object.entries(categories)) {
            const sectionId = category.replace(/\s+/g, '-');
            
            const sectionHTML = `
                <section class="section" id="${sectionId}">
                    <h1>${category}</h1>
                    <ul class="blocks-list" id="${sectionId}-links">
                        ${items.map(link => `
                            <li class="blocks-item">
                                <a href="${link.url}" target="_blank" class="blocks-item-link" aria-label="${link.title}">
                                    <span class="block-icon-wrapper">
                                        <img 
                                            src="${link.icon}" 
                                            alt="${link.title}" 
                                            class="block-icon"
                                            loading="lazy"
                                            onerror="this.src='./img/default-icon.png'"
                                        >
                                    </span>
                                    <h3 class="blocks-item-title">${link.title}</h3>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </section>
            `;
            
            container.insertAdjacentHTML('beforeend', sectionHTML);
        }

        // Show "No results" if empty
        if (filteredLinks.length === 0) {
            container.innerHTML = `
                <div class="error-message">
                    <p>No links found for "${searchTerm}"</p>
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `
            <div class="error-message">
                <h3>Error displaying links</h3>
                <p>${error.message}</p>
            </div>
        `;
        console.error("Error generating links:", error);
    }
}

// ======================
// Dynamic Navbar
// ======================
function generateNavbar() {
    const categories = [...new Set(linkData.map(link => link.category))];
    const navbar = document.getElementById("navbar-links");
    
    navbar.innerHTML = categories.map(category => `
        <a href="#${category.replace(/\s+/g, '-')}" class="nav-link" aria-label="${category} section">
            ${category}
        </a>
    `).join('');
}

// ======================
// Search Functionality (with debounce)
// ======================
function setupSearch() {
    const searchInput = document.getElementById("search-input");
    let searchTimeout;
    
    searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            organizeAndDisplayLinks(linkData, e.target.value);
        }, 300);
    });
}

// ======================
// Dark Mode Toggle
// ======================
function setupThemeToggle() {
    const toggle = document.getElementById("theme-toggle");
    const icon = toggle.querySelector("i");
    
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.className = "fas fa-sun";
    }
    
    toggle.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
        icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
        localStorage.setItem("theme", isDark ? "light" : "dark");
    });
}

// ======================
// Initialize Everything
// ======================
document.addEventListener("DOMContentLoaded", () => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        const icon = document.querySelector("#theme-toggle i");
        icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    generateNavbar();
    setupSearch();
    setupThemeToggle();
    organizeAndDisplayLinks(linkData);
    
    // Highlight active nav link on scroll
    window.addEventListener("scroll", throttle(() => {
        const sections = document.querySelectorAll(".section");
        let current = "";
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = `#${section.id}`;
            }
        });
        
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === current);
        });
    }, 100));
});

// ======================
// Utility Functions
// ======================
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
