let express=require('express');
let webpack=require('webpack');
let webpackDevMiddleware=require('webpack-dev-middleware');
let webpackHotMiddleware=require('webpack-hot-middleware');
let config=require('./webpack.config');

let app=new express();
let compiler=webpack(config);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/src/index.html');
});

app.listen(3000);