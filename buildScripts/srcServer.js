import express from 'express';
import path from 'path';
import open  from 'open';//open our site in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */


const port =3000;
const app=express();  //instance of express
const compiler = webpack(config); 

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo : true,
  publicPath: config.output.publicPath
}));

app.get('/',function (req,res){  //which routes to handle here root

res.sendFile(path.join(__dirname,'../src/index.html'));
//__dirname togice the current directory name
// with join we will join the index file
});

app.listen(port,function(err){

if(err){
console.log(err);
}
else{
open('http://localhost:'+port);
}
});
