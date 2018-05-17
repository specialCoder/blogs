const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(webpackConfig);
const htmlPath = path.join(__dirname,'/dist/index.html');

app.use(webpackDevMiddleware(compiler,{
    publicPath:webpackConfig.output.publicPath
}))

app.get('/',function(req,res){
    // res.setHeader('200',{
    //     "content-type":'text/html',
    // })
    console.log('htmlPath =====>',htmlPath);
    res.sendFile(htmlPath);
});

app.listen('3000',function(){
    console.log('server start port:3000');
});