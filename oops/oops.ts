
// OOPS
// 1) class
// 2) object
// 3) inheritance
// 4) polymorphism
// 5) encapsulation
// 6) abstraction



// class

// collection of "variables and functions" called as class
// encapsulation of variables and functions called as class
// we can create classes by using "class" keyword
// we can create object to the class by using "new" keyword

// typescript supports the 3 modifiers: 
// 1) public
// 2) private
// 3) protected

// public modifier recomended to functions
// private modifier recomended to variables

// EX:
// ===========================
class class_one{
    var_one:string = "Hello";
    func_one():string{
        return "Welcome";
    } //"HELLO WELCOME"
}

let obj1:class_one = new class_one();
console.log(obj1.var_one, obj1.func_one() );

class class_two{
    private var_one:string = "Hello";
    public func_two(): string{
        return this.var_one;
        }  //Hello
}
let obj2:class_two = new class_two();
console.log(obj2.func_two() );





class class_three{
sub_one:string;
sub_two:string;
sub_three:string;
constructor(){
this.sub_one = "ReactJS with TypeScript";
this.sub_two = "NodeJS with TypeScript";
this.sub_three = "MongoDB with TypeScript";
}
};
let obj3:class_three = new class_three(); 
console.log(obj3.sub_one, obj3.sub_two, obj3.sub_three);


//parameterized constructor 

class class_4{
    sub_one: string;
    sub_two:string;
    sub_three: string;
    constructor (arg1:string, arg2:string, arg3: string) {
            this.sub_one = arg1;
            this.sub_two = arg2;
            this.sub_three = arg3;
    }
}

// The obj1 object is initialized with the values "ReactJS", "NodeJS", and "MongoDB"
//  for sub_one, sub_two, and sub_three respectively. This demonstrates how to create an 
//  object from a class and pass arguments to its constructor in TypeScript.


let obj4_1:class_4 = new class_4("ReactJS", "NodeJS", "MongoDB");
console.log(obj4_1.sub_one,obj4_1.sub_two,obj4_1.sub_three);


let obj4_2:class_4 = new class_4("NEXT JS", "NEST JS", "POSTGRESS SQL");
console.log(obj4_2.sub_one,obj4_2.sub_two,obj4_2.sub_three);

// ReactJS NodeJS MongoDB.   4_1
// NEXT JS NEST JS POSTGRESS SQL. 4_2




class class_5{
    private var_one:any;
    private var_two:any;
    private var_three:any;
    constructor(arg1:any, arg2:any,arg3:any){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    public func_one(): any{
        return this.var_one;
    }
    public func_two():any{
        return this.var_two;
    }
    public func_three(): any{
        return this.var_three;
    }
}

let obj5:class_5=new class_5("one","two","three")
console.log(obj5.func_one(),obj5.func_two(),obj5.func_three())  //. one two three



// we can only acess constructor values directly if we see obj constructor parameters are public best example
//Note: we can access "public arguments of constructor" with class "objects"
class class_6{
    constructor (public arg1:any){}
}
let obj6:class_6 = new class_6("Hello");
console.log(obj6.arg1 );   //hello