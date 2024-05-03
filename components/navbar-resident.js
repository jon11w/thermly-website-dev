class NavbarResident extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header-area">
            <div class="logo flex">
                <a class="logo flex-center" href="/"><img class="logo-image" src="/icon/ThermlyLogotypeOrange.svg" /></a>
                <span class="logo-tm orange">TM</span>
            </div>
            <nav class="site-navbar text-large">
                <ul>
                    <li class="mobile"><a class="nav-link emerald" href="/">Home</a></li>
                    <li><a class="nav-link emerald" href="/heat-pumps">Heat pumps</a></li>
                    <li><a class="nav-link emerald" href="/how-it-works">How it works</a></li>
                    <li><a class="nav-link emerald" href="/about-us">About us</a></li>
                    <li><a class="nav-link emerald" href="/articles">Articles</a></li>
                    <li class="mobile"><a class="nav-link emerald" href="https://platform.thermly.co.uk/resident-auth">Sign in</a></li>
                </ul>
            </nav>
            <div class="nav-get-started">
                <ul class="text-large nav_button">
                    <li><a class="nav-link emerald" href="https://platform.thermly.co.uk/resident-auth">Sign in</a></li>
                </ul>
                <a class="read_more text-standard nav_button" href="https://platform.thermly.co.uk/heatpump-readiness">Get started <img class="logo-image" src="/icon/arrow-right.svg" /></a>
            </div>
            <button class="nav-toggler">
                <i class="nav-burger fa fa-bars"></i>
            </button>
        </header>
        `
    }
};

customElements.define('navbar-resident', NavbarResident);