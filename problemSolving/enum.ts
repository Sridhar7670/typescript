//enum
//enum used to create custom constant
enum Enum1{
CONST1,
CONST2,
CONST3,
CONST4
}
console.log(
    Enum1.CONST1,
    Enum1.CONST2, 
    Enum1.CONST3, 
    Enum1.CONST4
);
//0 1 2 3

//Enum1.CONST1 = 100;
//Cannot assign to 'CONST1' because it is a read-only property.

enum Enum2{
X = 1,
Y,
Z
}
console.log(Enum2 );

// { '1': 'X', '2': 'Y', '3': 'Z', X: 1, Y: 2, Z: 3 }

enum enum3{
    CONST1=100,
    const2=200,
    const3=300

}
console.log(enum3)
// { '100': 'CONST1', '200': 'const2', '300': 'const3', CONST1: 100, const2: 200,const3: 300}
function fone(arg:enum3){
    console.log(arg)
}
fone(enum3.CONST1)
fone(enum3.const2)
fone(enum3.const3) //100 200 300


enum Enum4{
    SUB = "ReactJS"
}
let my_func = (param1: Enum4):void=>{
console.log(param1);
}
my_func(Enum4.SUB);



//if no structure is followed then it says enum must have initializer example
enum Enum1{
X = 0,
Y = "Hello",
// Z  Enum member must have initializer.
}