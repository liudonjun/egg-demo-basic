/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646288486031_9543';

  // add your middleware config here
  config.middleware = [];

  // CSRF安全策略
  config.security = {
    csrf: {
      enable: false,
    }
  }

  config.static = {
    // prefix:"/assets/"
  }

  config.session = {
    key: "PANG_SESS",   // 设置Key的默认值
    httpOnly: true,      // 设置服务端操作
    maxAge: 1000 * 60,   // 设置最大有效时间
    renew: true,        // 页面有访问动作自动刷新session 
  }

  config.mysql = {
    app: true,     //是否挂载到app下面
    agent: false,  //是否挂载到代理下面
    client: {
      host: '127.0.0.1',      // 数据库地址
      port: '3306',           // 端口
      user: 'root',           // 用户名
      password: 'root',    // 密码
      database: 'test-egg'    // 连接的数据库名称
    }
  }

  config.view = {
    mapping: {
      ".html": "ejs"
    },

  };

  //全局挂载中间件
  // config.middleware = ['counter'];


  config.ejs = {
    // delimiter: "$",

  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
