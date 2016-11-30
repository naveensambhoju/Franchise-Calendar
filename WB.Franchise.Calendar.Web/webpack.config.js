 var webpack = require("webpack");

 module.exports = {
     entry: "./app/main.ts",
     output: {
         path: "wwwroot/dist",
         filename: "app.bundle.js"

     },
     module: {
         loaders: [
             { test: /\.ts$/, loader: "ts" }
         ]
     },
     resolve: {
         extensions: ['', '.js', '.ts']
     },
     devServer: {
         inline: true,
         port: 8000
     }

 }

 /*

 loaders => Any file ending with .ts should be loaded with ts-loader, since webpack only supports .js files and not ts
 resolve - extensions ==> all files whichs ends with .js and .ts or does not have any extension ('') files should be processed by webpack

 */