"use strict";

function basicPromise (willResolve) {
    return new Promise ((resolve, reject) => {
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