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