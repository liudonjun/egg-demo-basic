'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    ctx.body = 'hi, egg';
  }
  async jspang() {
    const { ctx } = this;
    ctx.body = '<h1>Hello JSPang</h1>';
  }
  async testGetGirl(){
    const ctx = this.ctx;
    let id = ctx.query.id
    const res = await ctx.service.jspang.getGirl(id)
    ctx.body=res;
  }
}

module.exports = HomeController;
