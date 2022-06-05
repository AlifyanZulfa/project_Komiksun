/* eslint-disable no-multi-assign */
/* eslint-disable no-use-before-define */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DataSourceSearch from '../data/data-source-search';
import DataSourceGenre from '../data/data-seurce-genre';
import { createItemTemplate } from './templates/template-creator';

class App {
  constructor({ jumbotron, content }) {
    this._jumbotron = jumbotron;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    if (url !== '/' && url !== '/home') {
      this._jumbotron.hidden = true;
    } else {
      this._jumbotron.hidden = false;
    }

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    const komikContainer = document.querySelector('#items');

    const renderResult = results => {
      for (let index = 0; index < results.length; index++) {
        const item = results[index];
        komikContainer.innerHTML += createItemTemplate(item);
      }
    };

    const searchElement = document.querySelector('app-search');

    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSourceSearch.show(searchElement.value);
        komikContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    searchElement.clickEvent = onButtonSearchClicked;

    const onGenresAllClicked = async () => {
      try {
        const result = await DataSourceGenre.show('All');
        komikContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#genres-All').addEventListener('click', onGenresAllClicked);

    const onGenresActionClicked = async () => {
      try {
        const result = await DataSourceGenre.show('Action');
        komikContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#genres-Action').addEventListener('click', onGenresActionClicked);

    const onGenresPetualanganClicked = async () => {
      try {
        const result = await DataSourceGenre.show('Petualangan');
        komikContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#genres-Petualangan').addEventListener('click', onGenresPetualanganClicked);

    const onGenresRomaceClicked = async () => {
      try {
        const result = await DataSourceGenre.show('Romance');
        komikContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#genres-Romance').addEventListener('click', onGenresRomaceClicked);

    const onGenresComediClicked = async () => {
      try {
        const result = await DataSourceGenre.show('Comedi');
        komikContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#genres-Comedi').addEventListener('click', onGenresComediClicked);
  }
}

export default App;
