//Inheritance
//Getting the data from Parent class to Child class called as Inheritance
//we will implement Inheritance with the help of "extends" keyword
//1) Single Level Inheritance
//2) Multi Level Inheritance
//3) Multiple Inheritance
//4) Hirarichal Inheritance
//5) Hybrid Inheritance


//Single Level Inheritance
    class Parent{
        var_one:string = "Hello";
    }
    class Child extends Parent{
        var_two:string = "Welcome";
    }
    let p:Parent = new Parent();
    console.log(p.var_one );  //hello

    let c:Child = new Child();
    console.log(c.var_one, c.var_two );  //hello welcome

    let p1: Parent = new Child();
    console.log(p1.var_one);  //hello

// let c1:Child = new Parent();
//Property 'var_two' is missing in type 'Parent' but required in type 'Child'.





//2) Multi Level Inheritance

class Parent1{
func_one():string{
return "Parent Class";
}
}
class Child1 extends Parent1{
func_two():string{
return "Child Class";
}
}
class Subchild1 extends Child1{
func_three():string{
return "Subchild class";
}
}
let obj: Subchild1 = new Subchild1();
console.log(obj.func_one(), obj.func_two(), obj.func_three());  // Parent Class Child Class Subchild class

let obj1:Child1 =new Child1();
console.log(obj1.func_one(),obj1.func_two());

// console.log(obj1.func_three());  this is not acessible cause object is created on child and hence it cannot pocess subchilds methods 


// single child containing ore than one parent called multi level inheritance  








//3. mutiple inheritance
// No, TypeScript does not support multiple inheritance for classes. A class in TypeScript can only extend a single other class. This is a deliberate design choice to avoid the complexity and potential issues that arise when a class inherits methods with the same name from multiple parent classes.

// class parent1{}
// class parent2{}
// class child extends parent1,parent2{}.  //Classes can only extend a single class.






//4) Hirarichal Inheritance: where a single parent class is inherited by multiple child classes.
class Parent2{
    var_one:string = "Hello_1";
}
class Child2_1 extends Parent2{
    var_two:string = "Hello_2";
}
class Child2_2 extends Parent2{
    var_two:string = "Hello_3";
}
class Child2_3 extends Parent{
    var_two:string = "Hello_4";
}
let obj2_1:Child2_1 = new Child2_1();
console.log(obj2_1.var_one, obj2_1.var_two );

let obj2_2:Child2_2 = new Child2_2();
console.log(obj2_2.var_one, obj2_2.var_two);

let obj2_3:Child2_3 = new Child2_3();
console.log(obj2_3.var_one, obj2_3.var_two );






//5) Hybrid Inheritance :Hirachical +Multiple 
//  hybrid inheritance is not supported by typescript 

// class parent{}
// class child1 extends parent{}
// class child2 extends parent{}
// class subchild extends child1,child2{}   //not supported 




