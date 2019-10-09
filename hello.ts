import * as http from 'http';
import * as fs from 'fs';
//import jQuery from 'jquery'

import _ from 'lodash';
var str : string = '1' 
var str2:number = <any> str   //str、str2 是 string 类型
console.log(typeof(str2));
console.log(str2)

console.log('test')

//jQuery("#foo");
 
let r: RegExp = /[a-z]/;                // var r = /[a-z]/;
let d: Date = new Date();               // var d = new Date();
// let body: HTMLElement = document.body;  // var body = document.body;
//console.log(http)
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

/******************************************* */
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
/******************************************* */

interface SquareConfig {
    color: string;
}
  
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      // Error: Property 'clor' does not exist on type 'SquareConfig'
      newSquare.color = config.color;
    }
    /* if (config.width) {
      newSquare.area = config.width * config.width;
    } */
    return newSquare;
}

let paramObj = {size: 10,  color: "black"};

let mySquare = createSquare(paramObj);


/************************** */
/* interface ClockConstructor {
    new (hour: number, minute: number): any;
}

class Clock implements ClockConstructor {
    //currentTime: Date;
    constructor(h: number, m: number) { }
} */


/************************** */
function abc(){

}

//console.log(abc.constructor);

/************************** */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
/* function getProperty(obj:any, key:any) {
    console.log(obj[key])
    return obj[key];
} */

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m");

/************************** */
enum E {
    Foo,
    Bar,
}

console.log('E.Foo:', E.Foo);

function f(x: E) {
    /* if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~~
        // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    } */
}


console.log('enum')
declare enum Enum {
    A = 1,
    B,
    C = 2
}

/* declare class Groeet {
    constructor(greeting: string);

    greeting: string;
    showGreeting(): void;
}

var groeet = new Groeet('opo')

groeet.showGreeting() */

/*********************************** */

  const a = _.includes([1, 2, 3], 1);
  console.log(a);


/**
 * 如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 
 * 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined：
 * ********************************* */

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}

console.log(fixed(null));


/**
 * 类型别名
 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

/**
 * 
 */
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

/**
 * 
 */

const forInObj = {
    a: 'a',
    b: 'b',
    [Symbol()]: 's'
}

const forInArr = [1,2,3]

for (let x in forInObj){
    console.log(x)
}

for (let x in forInArr){
    console.log(x)
}

/** */
type objClazz = {a:'a'}
let oo : objClazz ;

function e() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @e()
    @g()
    method() {}
}

/**类装饰器返回一个值： 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。*/
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";

        /* constructor(...args:any[]){
            super();
            this.hello = args[0] + "ooooo"
        } */
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string = 'selfHello';
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));

/* class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('target:',target)
        console.log('propertyKey:',propertyKey)
        console.log('descriptor:',descriptor)
        descriptor.enumerable = value;
    };
} */

/* var greeter1 = new Greeter('world');
console.log(greeter1.greet()); */









