'use strict';

const { app } = require('egg-mock/bootstrap');

describe('jspang test', () => {
  it('jspang index', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>I am  JSPang</h1>');
  });
});
