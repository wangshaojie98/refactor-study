// 使用到了组合函数，运用了函数的高阶性等
// const compose = (...fns) => {
//   return value => {
//     return fns.reverse().reduce((acc, fn) => fn(acc), value)
//   }
// }

// const documentWrite = document.write.bind(document)
// const createNode = function(text) {
//   return '<h1>' + text + '</h1>'
// }
// const setText = msg => msg

// const printMessage = compose(
//   documentWrite,
//   createNode,
//   setText
// )

// printMessage('hi~ godkun')
function add(a, b) {
  console.log(arguments.length);
  console.log('a', a)
  console.log('b', b)
  return Number(a) + Number(b);
}
add(1)