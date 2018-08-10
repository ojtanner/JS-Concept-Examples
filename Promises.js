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
    })