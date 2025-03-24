/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
        return new Promise((res,rej) => {
        Promise.all(functions.map(fn => fn.call(null)))
        .then(results => res(results))
        .catch  (e  => rej(e))
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */