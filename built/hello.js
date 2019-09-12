"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
//import jQuery from 'jquery'
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(typeof (str2));
console.log(str2);
console.log('test');
//jQuery("#foo");
var r = /[a-z]/; // var r = /[a-z]/;
var d = new Date(); // var d = new Date();
// let body: HTMLElement = document.body;  // var body = document.body;
var server = http.createServer(function (req, res) {
    res.write("data.toString()");
    res.end();
});
server.listen('3000', function () {
    console.log('---服务器已经启动，监听的端口号是3000');
});
//console.log(fs);
//# sourceMappingURL=hello.js.map