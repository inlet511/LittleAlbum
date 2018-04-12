const express = require('express');
const router = require('./controller/router');

const app = express();

//设置模板引擎
app.set("views","./views");
app.set("view engine","ejs");

//静态服务
app.use(express.static("./public"));
app.use(express.static("./uploads"));
//路由中间件
app.use('/',router);

app.use((req,res)=>{
    res.render("err",{
        "baseurl":req.pathName
    });
});

app.listen(3000);