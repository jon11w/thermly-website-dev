class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <img class="footer-logo" src="/icon/ThermlyLogotypeOrange.svg" width="200px" />
            <div class="grid">
                <ul class="footer-nav">
                    <li class="text-small"><a class="footer-nav-link" href="/">Home</a></li>
                    <li class="text-small"><a class="footer-nav-link" href="/about-us.html">About</a></li>
                    <li class="text-small"><a class="footer-nav-link" href="/press/">Press</a></li>
                    <li class="text-small"><a class="footer-nav-link" href="https://platform.thermly.co.uk/resident-auth">Sign in</a></li>
                </ul>
                <p class="footer-disclaimer text-small">&copy; Thermly 2024. All rights reserved.</p>
            </div>
        </footer>
        `
    }
};

customElements.define('footer-standard', Footer);