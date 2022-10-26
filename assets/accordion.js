import './accordion.css';

customElements.define('details-accordion', class extends HTMLElement {
  connectedCallback() {
    this.onclick = evt => [...this.children].map(detail => !evt.ctrlKey && detail.toggleAttribute("open", evt.target == detail));
  }
});