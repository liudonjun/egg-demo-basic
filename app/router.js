'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const counter = app.middleware.counter()
  router.get('/', controller.home.index);
  router.get('/jspang', controller.home.jspang);
  router.get('/my', counter, controller.jspang.index);
  // router.get('/getGirls', controller.jspang.getGirls);
  router.get('/getGirl', controller.jspang.getGirl);
  router.get('/getGirl2/:name', controller.jspang.getGirl2);
  router.get('/getGirl2/:name/:age', controller.jspang.getGirl2);
  router.post('/add', controller.jspang.add);
  router.get('/testGetGirl', controller.home.testGetGirl);
  router.post('/add', controller.jspang.add);
  router.post('/del', controller.jspang.del);
  router.post('/editor', controller.jspang.editor);
  router.post('/show', controller.jspang.show);
  router.post('/newContext', controller.jspang.newContext);
  router.post("/newRequest", controller.jspang.newRequest);
  router.get('/newResponse', controller.jspang.newResponse);
  router.get("/addGirl", controller.girlsManage.addGirl);
  router.get("/delGirl", controller.girlsManage.delGirl);
  router.get("/updateGirl", controller.girlsManage.updateGirl);
  router.get("/getGirls", controller.girlsManage.getGirls);
};
