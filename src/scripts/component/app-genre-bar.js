class AppGenre extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="d-flex py-2">
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" id="genre-All" class="btn btn-outline-success"">All</button>
            <button type="button" id="genre--Action" class="btn btn-outline-success"3">Action</button>
            <button type="button" id="genre--Petualangan" class="btn btn-outline-success">Petualangan</button>
            <button type="button" id="genre--Romance" class="btn btn-outline-success">Romance</button>
            <button type="button" id="genre--Comedi" class="btn btn-outline-success">Comedi</button>
          </div>
        </div>
    `;
  }
}

customElements.define('app-genre-bar', App);
