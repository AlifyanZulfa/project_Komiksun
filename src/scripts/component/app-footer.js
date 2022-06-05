class AppFooter extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <style>
          .bg-footer {
            background-color: #39cc14;
          }
        </style>
        <footer class="text-center text-white p-3 bg-footer shadow mt-5">
          <p class="m-2"> © Copyright 2022 : <span class="fw-bold">Komiksun</span></p>
        </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
