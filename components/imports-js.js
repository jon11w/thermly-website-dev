class ImportsJs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Javascript files-->
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/jquery-3.0.0.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/bootstrap-datepicker.min.js"></script>
        <script src="/js/custom.js?version=105"></script>
        `
    }
};

customElements.define('js-imports', ImportsJs);