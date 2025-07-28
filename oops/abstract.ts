// abstract classes

// if we know "partial implmentations" then we will choose "abstract classes"
// "abstract" is the keyword used to create the "abstract" classes
// implementations provided by "child classes"

abstract class class_one{
    func_one():void{
    console.log("func_one");
    }

    abstract func_two():void;
};
class class_two extends class_one{
    func_two():void{
        console.log("func_two");
    }
}
let obj:class_two = new class_two();

obj.func_two();  //func_one
obj.func_one();  //func_two


abstract class class_one_1{
    func_one():string{
    return "func_one";
}
abstract func_two(): string;
}
abstract class class_two_2 extends class_one_1{
    func_two():string{
    return "func_two";
}
abstract func_three():string;
}

class class_three extends class_two_2 {
    func_three(): string {
        return "function class three"
    }
}

let obj_1:class_three = new class_three();
console.log(obj_1.func_one(),obj_1.func_two(),obj_1.func_three())


// abstract class class_one{}
// let obj:class_one = new class_one();
// 
// Note : we cant create object to the abstract classes Iand interfaces


// when we use interface and declare some in blueprint nd someother methods are added to the class make it abstact method it wont hrow any error 

interface interface1_3{
func_one():any;
}
abstract class class_one_3 implements interface1_3{
    func_one():any {
    return "ReactJS";}
    abstract  func_two():any;
}
    //as objects cannot be created to abstrcta clases create one more acess from there 
class class_two_3 extends class_one_3 {
    func_two():any {
        return "Node js"
    }
}

let object:class_two_3 = new class_two_3();
console.log(object.func_one(),object.func_two())




