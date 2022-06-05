class AppCategory extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="row row-cols-1 row-cols-sm-2 g-3 pt-5">
            <div class="col">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                    <div class="bg-image hover-zoom">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://p4.wallpaperbetter.com/wallpaper/578/11/775/naruto-vs-sasuke-guys-quarrel-fight-wallpaper-preview.jpg" alt="Action" class="w-100">
                    </div>
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://p4.wallpaperbetter.com/wallpaper/965/883/624/manga-one-piece-wallpaper-preview.jpg" alt="Petualangan">
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://p4.wallpaperbetter.com/wallpaper/787/1018/508/mitsuha-miyamizu-taki-tachibana-kimi-no-na-wa-romance-wallpaper-preview.jpg" alt="Romance">
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm m-2">
                    <a href="/#/explore">
                        <img class="bd-placeholder-img item-image" width="100%" height="200" src="https://p4.wallpaperbetter.com/wallpaper/765/698/354/anime-anime-girls-yahari-ore-no-seishun-love-comedy-wa-machigatteiru-yuigahama-yui-wallpaper-preview.jpg" alt="Comedi">
                    </a>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define('app-category', AppCategory);
