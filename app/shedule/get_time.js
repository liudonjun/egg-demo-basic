const Subscription = require('egg').Subscription

class GetTime extends Subscription{
//   static get schedule(){
//     return {
//       interval:'10s',
//       type:'worker'
//     };
//   }
  static get schedule(){
    return {
      cron: '*/3 * * * * *',
      type:'worker'
    };
  }

  async subscribe(){
    console.log(Date.now())
  }

};

module.exports =GetTime;

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    |
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, optional)