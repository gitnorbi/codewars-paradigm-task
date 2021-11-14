const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
    mode:'development',//"production", //'development', //a másik 'production'
    //entry: "./src/js/iindex.js",
        entry: {
            main:path.resolve(__dirname, "src/Js/index.js"),
        },

        output: {
           // filename: '[name].main.js', a [name] az az entry pointnal a propertyre utal, ami annak a neve
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true, // ez azert kell, hogy az előző filet törölje es csak az ujjat tartsa meg!
            assetModuleFilename:'[name][ext]',
             },  // output vége


             //loaders:
             /*webpack alapból a jsnont és a js-t érti meg, ha akarok mast is használni vele, pl
             jpg-t, css-t stb ezért hasznalunk loadereket
             a loader elösször megkereesi a src file-ba ezeket a filokat majd átalakítja őket olyanna
             amit már a webpack is ért és így importálhat! ez a module rule beállítás eztcsinálja!*/
    module: {
          rules: [
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,type: 'asset/resource'
            },//svg vége

           {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], //they are read right to l, and css must be on the 
                //must be on the right
                //css-loader keresi meg a filet és alakítja modullá míg a style-loader hozzá adja az
                //általunk most pluginnal generalt html file-hoz
              }, // Css vége
              
              

              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              

              {// babel kezdete
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              },// babel vége


          ],
        },// module vége


        plugins: [new HtmlWebpackPlugin(
            {
                title:"Detect Pangram by Norbi",
                filename:"index.html",
                template:path.resolve(__dirname,"src/Html/temp.html"), //ha a generalt html fileom akarom
                //hogy tartalmazzon alap html-t, akkor itt adhatom meg az útját!
        }
        )],

        devtool:"inline-source-map", // ez ha hiba van akkor a consoleba segít azt is kiírni, hogy 
        //melyik file-ban!!
        devServer:{
            static: [path.resolve(__dirname, 'dist'),path.resolve(__dirname, 'src/Html')],// old contentBase
            // a statichoz adjak hozza miinden patht ami htmlt tartalmaz,ha akarom, hogy a templetet
            // is figyelje pl a css-t nem kell!
            port:5001, //default 8080
            open: true, 
            hot: true, //befrissít?
            //watchContentBase:true, // nem működik!?
    

        }

      
 
};




  
