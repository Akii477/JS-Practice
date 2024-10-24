// const promiseOne = new Promise(function (resolve, reject) {
//     // DO an Async task.
//     // DB calls, cryptogrphy, network
//     setTimeout(function () {
//         console.log("Async task is compelete.");
//         resolve(); // directly connected to .then operation we can pass the argument as well.

//     }, 3000)
// });
// promiseOne.then(function () {
//     console.log('Promise Consumed.');

// });


// // ANOTHER WAY TO WRITE PROMISE (WITHOUT VARIABLE).

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve();
//     }, 3000)
// }).then(function () {
//     console.log('Async taks 2 is resolved.');

// });

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Chai", email: "chai@example.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })

// promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (error) { //(!error) than so error
//             resolve({ username: "Akash", password: "123" })
//         }
//         else {
//             reject('ERROR:Somthing went wrong!'); // directly connected to catch.
//         }

//     }, 1000);
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username;

//     })
//     .then((username) => {
//         console.log(username);

//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("The promise is either resolved or rejected");

//     });


    // ASYNC AWAIT

    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
    
    async function consumePromiseFive() {
        try{
            const response = await promiseFive;
            console.log(response);
            
        }
        catch(error)
        {
            console.log(error);
            
        }
    }

    consumePromiseFive(); 


    // Real example to fetch from API

    // async function getAllUsers() {
    //     try{
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json(); // to convert into json it also takes times so use await else it does not the desired result.
    //         console.log(data);
    //     }
    //     catch(error)
    //     {
    //         console.log("Error:",error);
            
    //     }
    // }

    // getAllUsers();


    // SAME things using try catch
    fetch('https://api.github.com/users/Akii477')
    .then((response)=>
    {
        return response.json();
    })
    .then((data) =>
    {
        console.log(data);
        
    })
    .catch((error) =>
    {
        console.log("Error:",error);
        
    });