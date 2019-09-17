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

const obj = {
    a: 1,
    b: 'string',
};
  
obj.a = 1;

interface Obj {
    b?: string;
    a?: number;
    [propName: string]: any;
}
var obj1 : Obj = {
    a: 1,
    b: 'str'
}

obj1.c = 'opop';


// 带有任意数量的其它属性：
interface Foo {
    [propName: string]: any;
}
let foo : Foo = {};
  
for (let i = 0; i< 100; i++) {
    foo[String(i)] = i;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    console.log( "Hello, " + person.firstName + " " + person.lastName);
}

let user: Student = new Student("Jane", "M.", "User");

greeter(user);

function warnUser(): void {
    console.log("This is my warning message");
}

function warnUser2(): void {
    console.log("This is my warning message");
}

function error(message: string): void {
    throw new Error(message);
}




