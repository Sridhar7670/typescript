// modifiers
//1) public
//2) private
//3) protected


//public
//public modifier applicable to variables, functions, and constructor
//we can access public members by using class objects
//all public members by default accessable to "child classes"

class class_one{
    public var_one:string;  
    public constructor(){
        this.var_one = "Hello";
    }
    public func_one():string{
        return this.var_one;
    }
}

class class_two extends class_one{}
let obj:class_two = new class_two();

console.log(obj.func_one()) //HEllo



//private
//private modifier applicable to 'variables", "functions" and "constructor"
//we can't create object to the "private constructor" class
//we can't access private members with class objects
//private members "wont" accessable to child classes


class class_three{
    private var_one:string = "Hello";
    private func_one():string{
    return "welcome";
    }
}
let obj_3:class_three = new class_three();
// obj_3.var_one;
//Property 'var_one' is private and only accessible within class 'class_one'.
// obj_3.func_one();
//Property 'func_one' is private and only accessible within class 'class_one'.


class class_four{
private var_one:string = "Hello";
}
class class_five extends class_four{}
let obj5:class_five = new class_five();
// obj5.var_one;
//Property 'var_one' is private and only accessible within class 'class_one'.


class class_6{
    private constructor(){}
}
// let obj6:class_6 = new class_6(); 
//Constructor of class 'class_6' is private and only accessible within the class declaration.

class class_7{
    private var_one:string = "Hello";
    public var_two:string = this.var_one;
    private func_one():any{
        return "Welcome";
    }
    public func_two():any{
    return this.func_one();
    }
}
class class_7_1 extends class_7{}
let obj7:class_7_1= new class_7_1();
console.log(obj7.var_two)  //Hello
console.log(obj7.func_two())  //Welcome





//protected
//protected modifier also applicable to "variables, functions and constructor"
//protected members avilable to "child classes"
//protected members we "can't" access class objects 
//we can't create object to protected constructor class


class class_protected{
protected var_one:string = "Hello";
protected func_one(): any {
return "Welcome";
}
protected constructor(){}
// Constructor of class 'class_protected' is protected and only accessible within the class declaration.
}


// let obj_protected:class_protected = new class_protected();
// obj_protected.var_one;
//Property 'var_one' is protected and only accessible within class 'class_protected' and its subclasses.

// obj_protected.func_one();
// Property 'func_one' is protected and only accessible within class 'class_protected' and its subclasses.




class class_one_4{
    protected var_one:string = "Hello";
}
class class_two_4 extends class_one_4{
    public var_two:string = this.var_one;
}
let obj_4:class_two_4 = new class_two_4();
console.log(obj_4.var_two);   //hello







// Feature	            public	                private	            protected
// Accessible 
// within the same 
// class?	                Yes	                 Yes	                    Yes

// Accessible by 
// child classes?	        Yes	                    No	                    Yes

// Accessible by 
// objects (from 
// outside the class)?	    Yes	                     No	                    No

// Object creation 
// (if constructor 
// is...)?	            Yes, can be created from anywhere.	No, cannot be created from outside the class.	No, cannot be created from outside, but child classes can use it.