class GetStarted extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="flex-column gap-3">
            <div class="feedback-bar emerald text-standard text_align_center">We're looking to improve Thermly to ensure we're meeting your needs. We'd love for you to spend a couple of minutes answering our <a href="https://surveys.visitor-analytics.io/64fb6e3d-f645-11ee-b210-6a4600145893/6634d79da01f8f604202149a" style="text-decoration: underline;" class="text-secondary" target="_blank">short feedback form here</a>.</div>
                <div class="grid-equal-2">
                    <div class="flex-center">
                        <img class="thermly-logo" src="/images/thermly_mobile.svg" />
                    </div>
                    <div class="flex-card">
                        <div class="title-large emerald">
                            Our short Heat Pump Readiness Assessment is free, and only takes 5 minutes of your time.
                        </div>
                        <div class="row header-button-row">
                            <a 
                                class="read_more text-large" 
                                href="https://platform.thermly.co.uk/heatpump-readiness"
                                style="display: inline-block"
                            >
                                Get started
                            </a>
                        </div>
                        <div class="text-large text-secondary">
                            Find out more about heat pumps
                        </div>
                    </div>
                </div>
            </div>
            `
    }
};

customElements.define('get-started', GetStarted);