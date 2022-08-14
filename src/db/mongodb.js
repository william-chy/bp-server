const mongoose = require('mongoose')

// 连接数据库，自动新建 Demo 库
mongoose.connect('mongodb://db:27017/Demo', {
  useNewUrlParser: true, // 避免“不建议使用当前URL字符串解析器”
  useUnifiedTopology: true, // 解决连接报错问题
}).then(() => {
  console.log("Successfully connected to the DB");
})
  .catch((e) => {
    console.log(e);
  });


module.exports = mongoose