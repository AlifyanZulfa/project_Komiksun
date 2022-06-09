import '../../component/app-publis';

const Publis = {
  async render() {
    return `
          <app-publis></app-publis>
          `;
  },

  async afterRender() {
    console.log('');
  },
};

export default Publis;