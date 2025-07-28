//readonly
//readonly is the "keyword" in "TypeScript"
//readonly is used to "read" the content but we can't "update" the content
//we can initilize "readonly" members with constructor
class class_one{
readonly var_one: string;
constructor(){
this.var_one = "Hello";
}
}
let obj:class_one = new class_one();
console.log(obj.var_one);
// obj.var one = "welcome";
//Cannot assign to 'var_one' because it is a read-only property



//super
//super "keyword" used to call the "Parent class members"
//super keyword applicable to "constructor" and "functions"
class Parent{
constructor (public arg1:string){}
public func_one():string{
    return "welcome"
}
}
class Child extends Parent {
constructor (public param1: string, public param2:string) {
super (param1);

}
public func_two(): string {
    return super.func_one()
}
}
let obj1: Child = new Child("Hello_1", "Hello_2");
console.log(obj1.param1,obj1.param2,obj1.arg1)   //hello_1,HELLO_2,HELLO_1