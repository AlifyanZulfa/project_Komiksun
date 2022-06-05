class AppAboutUs extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
               <style>
                h1.title {
                  font-size: 2rem;
                  color: #39cc14;
                  padding: auto;
                  display: flex;
                  background-color: rgb(200, 228, 195);
                  border-radius: 10px;
                  text-align: center;
                  justify-content: center;
                }
                h2.title {
                  font-size: 2rem;
                  color: Black;
                  padding: auto;
                  display: flex;
                  background-color: rgb(200, 228, 195);
                  border-radius: 10px;
                  text-align: center;
                  justify-content: center;
                }
                p.subtitle {
                  font-size: 1.2rem;
                  color: #042B41;
                  padding: 80px 50px 80px 50px;
                  width: 100%;
                  display: flex;
                  background-color: rgb(200, 228, 195);
                  border-radius: 10px;
                }
                </style>
                
                <section id='welcome'>
                <div class='container'>
                <div class='row justify-content-evenly mb-5 pb-5'>
                  <div class='col-sm-7 pe-3 d-flex flex-column justify-content-center text-center'>
                    <h1 class='title'>Tentang Komiksun</h1>
                    <h2 class='title'>Komiksun (self publishing comic)</h2>
                    <p class='subtitle'>Website ini didirikan dengan alasan agar penikmat komik dapat menghemat biaya dan dapat memanfaatkan waktu dengan baik dengan tidak perlu untuk mengeluarkan uang untuk membeli buku komik dan mengeluarkan waktu serta biaya untuk pergi ke toko komiknya, hanya memerlukan kuota yang minim untuk dapat mengaksesnya. Website ini didirikan dengan tujuan untuk memudahkan penikmat komik dalam membaca komik dan menerbitkan komik. Kami memilih membuat projek ini dikarenakan project ini mudah untuk dibuat, belum banyak orang yang membuat dan bermanfaat bagi orang lain.</p>
                  </div>
                </div>
                </div>
                </section>             
              `;
  }
}

customElements.define('app-aboutus', AppAboutUs);
