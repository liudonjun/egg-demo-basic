'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
    async index() {
        const { ctx, app } = this;
        await ctx.render(
            'jspang.html', {
            nowTime: app.currentTime()
        })
    }
    async getGirls() {
        const { ctx } = this;
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(ctx.body = "<h1>杨幂，正在向你走来</h1>")
            }, 5000)
        })
    }
    async getGirl() {
        const { ctx } = this;
        const res = await ctx.service.jspang.getGirl('1818');
        ctx.body = res

    }
    async getGirl2() {
        const { ctx } = this;
        ctx.body = ctx.params.name
    }
    async getGirl2() {
        const { ctx } = this;
        let name = ctx.params.name
        let age = ctx.params.age
        ctx.body = '大哥你好，我是' + name + ',今年' + age + '岁.欢迎光临红浪漫!'
    }
    async add() {
        const ctx = this.ctx
        ctx.body = {
            status: 200,
            data: ctx.request.body
        }
    }
    async add() {
        const ctx = this.ctx
        ctx.session.username = 'jspang'
        ctx.cookies.set("user", "啦啦啦", {
            maxAge: 1000 * 60,
            httpOnly: false,
            encrypt: true,//在Cookie里设置中文
        })
        ctx.body = {
            status: 200,
            data: 'Cookie添加成功'
        }
    }
    async del() {
        const ctx = this.ctx
        ctx.cookies.set("user", null)
        ctx.body = {
            status: 200,
            data: 'Cookie删除成功'
        }
    }
    async editor() {
        const ctx = this.ctx
        ctx.cookies.set("user", 'bilibili')
        ctx.body = {
            status: 200,
            data: 'Cookie修改成功'
        }
    }
    async show() {
        const ctx = this.ctx
        const user = ctx.cookies.get("user", { encrypt: true })
        console.log(user)
        ctx.body = {
            status: 200,
            data: 'Cookie显示成功'
        }
    }
    async newContext() {
        const { ctx } = this;
        const params = ctx.params();
        console.log(params)
        ctx.body = 'newContext';
    }
    async newRequest() {
        const { ctx } = this;
        const token = ctx.request.token
        ctx.body = {
            status: 200,
            body: token
        }

    }
    async newResponse(){
        const {ctx} = this;
        ctx.response.token='jspang.com'
        const testBase64 = ctx.helper.base64Encode('jspang.com')
        ctx.body = testBase64
      }

}

module.exports = JspangController;
