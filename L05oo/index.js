/**
 * Created by WangYuanhong on 2016-07-27.
 */
function A() {
    this.sayhehe = function () {//构造方法
        console.log("hehe jikexueyuan");
    }
}

A.prototype.sayhello=function () {
    console.log("Hello JS");
}

A.sayHi=function () {
    console.log("Hello JiKeXueYuan")
}

var a=new A();
a.sayhello();
A.sayHi();

function B() {

}

B.prototype = new A();//继承

var b = new B();
b.sayhello();
b.sayhehe();