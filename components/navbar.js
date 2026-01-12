class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          transition: all 0.3s ease;
        }
        .font-heading {
          font-family: 'Montserrat', sans-serif;
        }
        a {
          transition: color 0.3s ease;
        }
        #mobile-menu {
          transition: all 0.3s ease;
        }
      </style>
      <nav class="fixed w-full bg-white bg-opacity-90 shadow-sm z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-green-800 font-heading">River Revival Rangers</a>
          <div class="hidden md:flex space-x-8">
            <a href="#problem" class="text-green-700 hover:text-green-600">The Problem</a>
            <a href="#biochar" class="text-green-700 hover:text-green-600">Biochar</a>
            <a href="#plan" class="text-green-700 hover:text-green-600">The Plan</a>
            <a href="#involved" class="text-green-700 hover:text-green-600">Get Involved</a>
          </div>
          <button class="md:hidden focus:outline-none" id="menu-toggle">
            <i data-feather="menu" class="text-green-800"></i>
          </button>
        </div>
        <!-- Mobile menu -->
        <div class="md:hidden hidden bg-white w-full px-6 py-4" id="mobile-menu">
          <div class="flex flex-col space-y-4">
            <a href="#problem" class="text-green-700 hover:text-green-600">The Problem</a>
            <a href="#biochar" class="text-green-700 hover:text-green-600">Biochar</a>
            <a href="#plan" class="text-green-700 hover:text-green-600">The Plan</a>
            <a href="#involved" class="text-green-700 hover:text-green-600">Get Involved</a>
          </div>
        </div>
      </nav>
    `;

    // Add event listeners for mobile menu
    this.shadowRoot.getElementById('menu-toggle').addEventListener('click', () => {
      const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    this.shadowRoot.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        this.shadowRoot.getElementById('mobile-menu').classList.add('hidden');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);