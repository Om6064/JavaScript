let myPromise = new Promise((Resolve, Rejected) => {
    let confirm = true;

    if (confirm) {
        Resolve("Yahh ! Problem is Resolved")
    } else {
        Rejected("Opps ! Problem is rejected")
    }
})
// myPromise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {

//         console.log(error);
//     })
    

// it is the method of promise when timing functions or time taking functions are called in code

// same as we have async and await for the same now we show methods of it

// async function getUser() {
    
// }

// const ero = async () => {

// }

// this two methods for async functions for aerrow and function keyword

async function getUser() {
       try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (res.status == 404) {
            throw new Error("something went wrong")
        }
       
       let data = await res.json()
      console.log(data);
      
       }catch(err){
        console.log(err);
       }
        
}
getUser()