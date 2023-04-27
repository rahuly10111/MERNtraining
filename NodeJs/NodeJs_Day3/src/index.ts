
//Asynchronous function that calculates the sum of two numbers using a Promise
function calculateSumAsyncPromise(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = a + b;
            resolve(sum);
        }, 1000);
    });
}
calculateSumAsyncPromise(8, 4)
    .then((sum) => {
        console.log(sum);
    })
    .catch((err) => {
        console.error(err);
    });
console.log('This code will run immediately after await function');


//Synchronous function that calculates the sum of two numbers
function calculationOfNumber(a: number, b: number) {
    return (a + b);
}
console.log(calculationOfNumber(2, 4));
console.log("This Message Will Print After the Excution Of Synch Function");

//using Promises
// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully!');
//         }, 3000);
//     });
// }

// fetchData().then((result) => {
//     console.log("promises", result);
// }).catch((error) => {
//     console.error(error);
// });


// //using async/await
// async function fetchDataAsync(): Promise<void> {
//     const result = await fetchData();
//     console.log("async/await", result);
// }

// fetchDataAsync().catch((error) => {
//     console.error(error);
// });
