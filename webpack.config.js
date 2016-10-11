var webpack = require('webpack');

module.exports={
	entry:['./asset/js/main.js'],
	output:{
        path:'./dist',
        filename:'index.js'
	},
	module:{
		loaders:[{
			test:/\.js$/,
			exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
		},
		{
			test:/\.jsx$/,
			exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
		}]
	},
	externals: {
        'react': 'window.React',
        'react-dom':'window.ReactDOM',
        'socket.io':'window.io'
    }
	
	
}
