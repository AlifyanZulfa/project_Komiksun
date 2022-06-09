class AppPublis extends HTMLElement {
    connectedCallback() {
      this._render();
    }
  
    _render() {
      this.innerHTML = `
            <style>
            .input_section {
                display: flex;
                flex-direction: column;
                padding: 16px;
                border: 1px solid black;
                border-radius: 10px;
            }
            
            .input_section > h2 {
                text-align: center;
                color: cornflowerblue;
            }
            
            .input_section > form > .input {
                margin: 8px 0;
            }
            
            .input_section > form > button {
                background-color: cornflowerblue;
                color: white;
                border: 0;
                border-radius: 5px;
                display: block;
                width: 100%;
                padding: 8px;
                cursor: pointer;
            }
            
            .input_section > form > button > span {
                font-weight: bold;
            }
            
            .input_section > form > .input > input {
                display: block;
                width: 100%;
                padding: 8px;
                border-radius: 5px;
            }
            
            
            
            .input_section > form > .input > label {
                color: cornflowerblue;
                font-weight: bold;
            }
            
            .input_section > form > .input_inline {
                margin: 12px 0;
                display: flex;
                align-items: center;
            }
            
            .input_section > form > .input_inline > label {
                color: cornflowerblue;
                font-weight: bold;
                margin-right: 10px;
            }
            </style>
    
            <section class="input_section">
            <h2>Masukkan Buku Baru</h2>
            <form id="inputBook">
                <div class="input">
                    <label for="inputBookTitle">Judul</label>
                    <input id="inputBookTitle" type="text" required>
                </div>
                <div class="input">
                    <label for="inputBookAuthor">Penulis</label>
                    <input id="inputBookAuthor" type="text" required>
                </div>
                <div class="input">
                    <label for="inputBookYear">Tahun</label>
                    <input id="inputBookYear" type="number" required>
                </div>
                <div class="input_inline">
                    <label for="inputBookIsComplete">Selesai dibaca</label>
                    <input id="inputBookIsComplete" type="checkbox">
                </div>
                <button id="bookSubmit" type="submit">Masukkan Buku ke rak <span>Belum selesai dibaca</span></button>
            </form>
        </section>
          `;
    }
  }
  
  customElements.define('app-publis', AppPublis);