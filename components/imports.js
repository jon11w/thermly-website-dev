class Imports extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Preload fonts-->
        <link rel="preload" href="/fonts/sofiapro-medium-webfont.woff2" as="font" crossorigin="anonymous">
        <link rel="preload" href="/fonts/sofiapro-regular-webfont.woff2" as="font" crossorigin="anonymous">
        <link rel="preload" href="/fonts/SofiaProSoftMed-webfont.woff2" as="font" crossorigin="anonymous">
        <link rel="preload" href="/fonts/SofiaProSoftReg-webfont.woff2" as="font" crossorigin="anonymous">

        <!-- style css -->
        <link rel="stylesheet" href="/css/style.css?version=105">
        <link rel="stylesheet" href="/css/articles.css?version=105">
        <link rel="stylesheet" href="/css/responsive.css?version=105">
        <link rel="stylesheet" href="/css/style.variables.css?version=105">
        <link rel="stylesheet" href="/css/globalFonts.css?version=105">
        <link rel="stylesheet" href="/css/globalColours.css?version=105">

        <!-- Responsive-->
        <link rel="stylesheet" href="/css/responsive.css?version=105">

        <!-- Tweaks for older IEs-->
        <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
        
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XVWV3YKEDQ"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-XVWV3YKEDQ');
        </script>
        `
    }
};

customElements.define('head-imports', Imports);