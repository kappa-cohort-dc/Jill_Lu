var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
var myObj: object = { x: 5, y: 10 };

// object constructor
class MyNode{
  val: number;
  constructor(value: number){
    this.val= 0;
  }
  _priv: number;
  doSomething(){
    this._priv =10;
  }
}

let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);

function myFunction(message: string): string {
    return message;
}
console.log(myFunction("Hello World!"));

function sendingErrors(error: string): never {
	throw new Error(error);
}
sendingErrors('this is an Error');
