// generics
// generic functions typically use angle brackets (<>) to define type parameters. 
// generics are use to achieve "strict typing "
// generics are also used to decide "data type dynamically "


function func_one<A, B>(param1: A, param2:B):void{
    console.log(param1, param2);
}

func_one<string, string>("ReactJS", "Angular");



class class_one<A, B, C>{
    sub_one: A;
    sub_two: B;
    sub_three:C;
    constructor (arg1: A, arg2: B, arg3:C) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
}
let obj:class_one<string, number, string> =new class_one("ReactJS",99, "MongoDB");
console.log(obj.sub_one, obj.sub_two, obj.sub_three);


class class_two{
    func_one<A, B> (param1: A, param2:B):void{
    console.log(param1, param2);
    }
}
let obj1:class_two = new class_two();
obj1.func_one<string, string>("Hello_1", "Hello_2");





interface interface1<A,B>{
    var_one:A;
    var_two:B;
}
let obj2:interface1<number, number> = {
    var_one: 100,
    var_two: 200
}
console.log(obj2.var_one, obj2.var_two );  //100 200

class class_three implements interface1<any, any>{
    var_one: any ="Hello_1";
    var_two: any ="Hello_2";
}

let obj3:class_three = new class_three();
console.log(obj3.var_one, obj3.var_two);    //Hello_1 Hello_2



interface interface2<A,B,C>{
    var_one:A;
    var_two:B;
    var_three:C;
    func_two():void;

}
let obj4:interface2<string,number,any>={
    var_one:"hello_1",
    var_two:999,
    var_three:"hello_3",
    func_two:():void=>{
        console.log("hello_4")
    }
}
console.log(obj4.var_one,obj4.var_two,obj4.var_three);
obj4.func_two(); 

// hello_1 999 hello_3
// hello_4
