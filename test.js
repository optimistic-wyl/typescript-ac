/* for (var i=1; i<=5; i++) { 
    (function(i){
        setTimeout( function timer() {
            console.log(i);
        }, i * 1000 );
    })(i)
} */
/* for (let i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log(i);
    }, i * 1000 );
} */
//闭包的概念： 外部函数调用之后其变量对象本应该被销毁，但闭包的存在使我们仍然可以访问外部函数的变量对象

//闭包判定的准则：执行时是否在内部定义的函数中访问了上层作用域的变量

//访问其他外部函数的内部变量的函数，在外部函数调用并执行结束之后，其变量本应被销毁，但是闭包的存在使我们仍然可以访问外部函数的变量对象

//应用闭包的主要场合是：设计私有的方法和变量。

//匿名函数最大的用途是创建闭包
import jQuery from 'jquery'

function outer(){
    var name = 'out'
    function inner(num){
        // console.log(i)
        setTimeout( function timer() {
            console.log(num);
        }, 5000 )
    }
    for(var i = 0; i <5; i++){
        inner(i)
    }
}

outer()

console.log("dfdfdf")


/************************* */
class m1{
    a = 'a';
    b = 'b';
}

let m2 = {
    c: 'c',
    d: 'd'
}

// console.log(new jQuery())

// let m3 = jQuery.extend(new m1(), m2);
// console.log(m3.a,m3.c)

function Abc (){
    this.a = 'a'
}

Abc.prototype = {
    aa: function(){
        console.log('a')
    }
}

var abc = new Abc();
for(let i in abc){
    console.log('forIn:',i)
}

console.log(Object.keys(abc));

console.log(Object.getOwnPropertyNames(abc))


let acc = {
    bb: 'bb',
    cc: 'cc'
}
for(let i in acc){
    console.log('forIn:',i)
}

console.log(Object.keys(acc));

console.log(Object.getOwnPropertyNames(acc))
