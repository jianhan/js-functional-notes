const unary = (fn) => (...args) => args.length === 0 ? fn() : fn(args[0]);

const result = ['1', '2', '3'].map(unary(parseInt));
console.log(result)
