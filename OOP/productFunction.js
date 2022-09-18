function product(n, p, x) {
    console.log("this at start", this);
    this.name = n;
    this.price = p;
    this.exp = x;
    console.log("this at end", this)
}

// const iphone = new product("iphone", 100000);
product("iphone", 100000, '10x');

console.log(this)

// console.log(iphone);
// this at start product {}
// product {}

// console.log(new product("iphone", 100000));
// this at start product {}
// product {}






// this at start <ref *1> Object [global] {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 39.03110000491142,
//         nodeStart: 0.7445000112056732,
//         v8Start: 2.6282000094652176,
//         bootstrapComplete: 28.35700000822544,
//         environment: 13.498100012540817,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1661116688915.696
//     },
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     }
//   }
//   this at end <ref *1> Object [global] {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 40.45000000298023,
//         nodeStart: 0.7445000112056732,
//         v8Start: 2.6282000094652176,
//         bootstrapComplete: 28.35700000822544,
//         environment: 13.498100012540817,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1661116688915.696
//     },
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     name: 'iphone',
//     price: 100000
//   }