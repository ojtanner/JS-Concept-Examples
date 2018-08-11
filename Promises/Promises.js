"use strict";

/**
 * Basic Promise Example
 */

function basicPromise (willResolve) {
    return new Promise (function executor(resolve, reject) {
        if (willResolve) {
            resolve('Promise resolved');
        }
        else {
            reject('Promise rejected');
        }
    });
};

basicPromise(true)
    .then((promiseResult) => {
        console.log(promiseResult)
    });

/**
 * Error Handling With Catch
 */

function errorHandling () {
    return new Promise ((resolve, reject) => {
        throw new Error('Uh oh! Error!');
        resolve('This never gets called');
    });
};

errorHandling()
    .then((promiseResult) => {
        console.log(promiseResult);
    })
    .catch((error) => {
        console.log(error)
    })

/**
 * Promise.all()
 * Promise.race()
 */

function resolvesAfterOneSecond () {
     return new Promise( (resolve, reject) => {
        setTimeout(resolve, 1000, 'First one!!!')
     });
};

function resolvesAfterTwoSeconds () {
    return new Promise( (resolve, reject) => {
       setTimeout(resolve, 2000, 'Second :p')
    });
};

function resolvesAfterThreeSeconds () {
    return new Promise( (resolve, reject) => {
       setTimeout(resolve, 3000, 'Third :(')
    });
};

Promise.all([
        resolvesAfterOneSecond(),
        resolvesAfterTwoSeconds(),
        resolvesAfterThreeSeconds()
    ])
    .then((promiseResults) => {
        console.log('Promise.all() =', promiseResults);
    });

Promise.race([
    resolvesAfterOneSecond(),
    resolvesAfterTwoSeconds(),
    resolvesAfterThreeSeconds()
    ])
    .then((firstOneToReturn) => {
        console.log('Promise.race() =', firstOneToReturn);
    });