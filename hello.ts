import * as http from 'http';
import * as fs from 'fs';
//import jQuery from 'jquery'
var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(typeof(str2));
console.log(str2)

console.log('test')

//jQuery("#foo");
 
let r: RegExp = /[a-z]/;                // var r = /[a-z]/;
let d: Date = new Date();               // var d = new Date();
// let body: HTMLElement = document.body;  // var body = document.body;

let server = http.createServer(function(req,res){
    res.write("data.toString()");
    res.end()
})

server.listen('3000',function(){
    console.log('---服务器已经启动，监听的端口号是3000')
});

//console.log(fs);

