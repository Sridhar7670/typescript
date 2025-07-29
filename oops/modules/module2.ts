import variable_two, { interface1, variable_one } from "./module1";
import { func_one } from "./module1";
import { class_one } from "./module1";

let obj:class_one=new class_one();
// console.log(obj.var_one,obj.var_two)
// console.log(variable_one)
// console.log(variable_two)
// console.log(func_one());

class class_two implements interface1{
    var_one: string="react js "
    var_two: string="node js"
    func_one(): string {
        return "i am from interface module 1"
    }
}
export let obj1:class_two =new class_two();
console.log(obj1.var_one,obj1.var_two,obj1.func_one()) //react js  node js i am from interface module 1


export let obj2:any={
    sub_one:"reac js",
    sub_two:"recat js"
}