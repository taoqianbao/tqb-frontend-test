/**
  一道值得研究的JS题
*/

var a = {
    n: 1
};
var b = a;
a.x = (a = {
    n: 2
});
console.log("a.x = ", a.x);
console.log("b.x = ", b.x);
