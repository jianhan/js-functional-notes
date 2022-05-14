const callLeft = (fn, ...leftArgs) => (...rest) => fn(...leftArgs, ...rest)
const callLast = (fn, ...rightArgs) => (...rest) => fn(...rest, ...rightArgs)

const sayHello = (from, to) => console.log(`hello my name is ${from} and how are you ${to}`);
const tomSayHelloTo = callLeft(sayHello, 'Tom')
tomSayHelloTo('Jack')
tomSayHelloTo('Bob')

const greetingToAdamFrom = callLast(sayHello, 'Adam');
greetingToAdamFrom('Bob')
greetingToAdamFrom('Jack')

const partial = (fn, ...args) => (...rest) => fn(...args, ...rest);

const threeSum = (a, b, c) => a + b + c;
const fiveAdd = partial(threeSum, 5);
console.log(fiveAdd(2, 3))
