//when ever we know only "declarations", but we dont know "implementations" then we will choose "interface"
// we will create interfaces with "interface" keyword
// implementations provided by either "child classes" or "json"
// child classes provides implementations with the help of "implements" keyword

interface interface1{
    var_one:string;
}
class class_one implements interface1{
    var_one:string = "welcome to interfaces";  // meaning it promises to provide the var_one property as defined in the interface.
}
let obj:class_one = new class_one();
console.log(obj.var_one);

//welcome to interfaces


interface interface1{
    var_one:string;
}
let obj1:interface1 = {
    var_one: "Hello"   //obj is declared and explicitly typed as interface1, then initialized with a var_one property set to the string "Hello".
};
console.log(obj1.var_one );



//one intreface extends another  

interface interface2{
    var_one:string
}
interface interface2_1 extends interface2 {
    var_two :string
}

let obj2 : interface2_1 ={
    var_one:"main class var",
    var_two:" extended from main"
}

console.log(obj2.var_one,obj2.var_two);


//nested interface or grand parent 

interface interface1_1{
    var_one:string;
}
interface interface2_1 extends interface1_1{
    var_two:string;
}
interface interface3_1 extends interface2_1{
    var_three:string;   
}

let obj3:interface3_1 = {
    var_one: "Hello_1",
    var_two: "Hello_2",
    var_three: "Hello_3"
};
console.log(obj3.var_one, obj3.var_two, obj3.var_three );





interface interface1_in{
    func_one():number;
}
interface interface2_in{
    func_two():number;
}
interface interface3_in extends interface1_in, interface2_in{
    func_three():number;
}
let obj6:interface3_in = {
    func_one: ():number=>{
        return 100;
    },
    func_two: ():number=>{
    return 200;
    },
    func_three : ():number=>{
    return 300;
    }
};
console.log(obj6.func_one(),obj6.func_two(),obj6.func_three()) //100 200 300


// interface interface1{}
// let obj:interface1 = new interface1();
////Note : we can't create object to the intefaces also