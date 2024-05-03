class ArticleSummary extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="flex-column gap-1">
            <div class="article-summary-image-container">
            ${this.getAttribute('image')
                ? `<img class="article-summary-image" src="${this.getAttribute('image')}" alt="Nonspecific article doodle" />`
                : ""
            }           
            </div>
            <a class="heading-medium emerald article-summary-title" href="${this.getAttribute('link')}">${this.getAttribute('heading')}</a>
            <div class="text-standard article-summary-description">${this.getAttribute('summary')}</div>
            <div class="flex justify-space-between align-item-center article-summary-tags">
                <div class="filter-button text-small emerald">${this.getAttribute('tag')}</div>
                <div class="text-small">${this.getAttribute('length') ? this.getAttribute('length') : ""}</div>
            </div>
        </div>
        `
    }
};

customElements.define('article-summary', ArticleSummary);