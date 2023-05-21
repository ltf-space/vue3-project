let str:String = '12'
// console.log('str',str)
let arr:Array<Number> = [1,2,3,4,5]

// 范型-接口
interface obj {
  a:Number,
  b:String,
  c?:boolean,//可有可无属性
  [nameText:string]:any
}
let obj:obj = {
  a:1,
  b:'1',
  c:true,
  d:1
}
console.log('obj',obj)
// 随机
let sj:Number = Math.random() * 1
// console.log('sj',sj)
// 元组
let arrY:Array<any> = [1,'2']
function test_T<T>(length:number,value:T):Array<T> {
  // let resArr:Array<String> = []
  let resArr:T[] = []
  for (let i = 0; i < length; i++) {
    resArr[i] = value
  }
  // console.log('resArr',resArr)
  return resArr
}
test_T(4,'ltf')

// 范型接口--要求定义的interface参数与函数中参数类型一致（变量名字可不同）
interface searchFun {
  (num:number,str:string) : string
}
let searchtemp : searchFun
searchtemp = function fun (num2:number,str:string){
  let temp:string = num2+str
  // console.log('temp',temp)
  return temp
}
searchtemp(1,'2')

// 枚举
enum color {red=2,green,blue}
console.log('color.red',color[2])