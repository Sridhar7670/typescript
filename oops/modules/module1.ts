export let variable_one:string="hello world ";

let variable_two:string ="hello default module "
export default variable_two 


export function func_one():string{
    return "hello fucntion"
}
export class class_one{
    var_one:string;
    var_two:string;
    var_three:string;
    constructor(){
        this.var_one = "ReactJS";
        this.var_two = "NodeJS";
        this.var_three = "MongoDB";
    }
}


export interface interface1{
    var_one:string,
    var_two:string,
    func_one():string;
}
console.log("i am mod 1")


