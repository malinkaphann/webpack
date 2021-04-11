import Router from 'alpine-router';

export default new Router([
  {
    path: '/',
    template: `<h1>Hello World!</h1>`,
  },
  {
    path: 'about',
    templateUrl: 'about.html',
  },
]);
