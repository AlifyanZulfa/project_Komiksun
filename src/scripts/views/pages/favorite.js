import FavoriteKomikIdb from '../../data/favorite-komik-idb';
import { createItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  async afterRender() {
    const komiks = await FavoriteKomikIdb.getAllKomik();
    const komikContainer = document.querySelector('#items');
    komiks.forEach((item) => {
      komikContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Favorite;
