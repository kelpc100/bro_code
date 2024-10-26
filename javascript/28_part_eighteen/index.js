// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})
// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You DIDN'T take out the trash");
            }

        }, 1000);
    });
}

function doLaundry(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const laundryDone = true;

            if(laundryDone){
                resolve("You do the laundry 👕");
            }
            else{
                reject("You DIDN'T do the laundry");
            }

        }, 3500);
    });
}


console.time("Execution");

walkDog().then(value => {console.log(value); return cleanKitchen()})
                  .then(value => {console.log(value); return takeOutTrash()})
                  .then(value => {console.log(value); return doLaundry()})
                  .then(value => {console.log(value); console.log("You finished all the chores!"); console.timeEnd("Execution"); 
                  })
                  .catch(error => console.error(error));





// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue
/*console.time("Execution Time");

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        const doLaundryResult = await doLaundry();
        console.log(doLaundryResult);

        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }
    console.timeEnd("Execution Time"); 
}

doChores();
*/
