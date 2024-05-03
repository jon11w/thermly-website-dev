class Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <a 
            class="read_more text-large" 
            href="${this.getAttribute('href')}" 
            style="background-color: ${this.getAttribute('background-colour')}; color: ${this.getAttribute('text-colour')}"
        >
            ${this.getAttribute('text')}
        </a>
        `
    }
};

customElements.define('button-standard', Button);