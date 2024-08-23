




// const promise = new Promise((resolve, reject) => {

//     resolve('Hello, world!')
// }
// )


// promise
//     .then(result => { console.log(result); })
//     .then(result => {console.log(result);}) 


//. Напишіть функцію, яка отримує масив чисел
// і повертає проміс, який виконується, якщо всі 
//числа в масиві є парними.Якщо ж принаймні одне число
//непарне, проміс повинен бути відхилено з повідомленням 
//"Є непарні числа".

// function arrChecking (arr) {
//     const everyNum = arr.every((num) => {
//      return   num % 2 === 0
//     })
//     return new Promise((resolve, reject) => {
        
//         if (everyNum) {
//             resolve('всі числа парні')
//         } else {
//             reject('Є непарні числа')

//         }
//     })
// }

// arrChecking([2, 4, 6])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
   
// const isOpenModal = true

// const promise1 = new Promise((resolve, reject) => {
//     if (isOpenModal) {
//         setTimeout(() => {
//                 resolve('promise1 виконався успішно')
//             }, 1000)
//     } else {
//         reject('promise1 не виконався')
//         }
// })
    
// const promise2 = new Promise((resolve, reject) => {
//   if (isOpenModal) {
//         setTimeout(() => {
//                 resolve('promise2 виконався успішно')
//             }, 2000)
//     } else {
//         reject('promise2 не виконався')
//         }
// })
    
// const promise3 = new Promise((resolve, reject) => {
//    if (isOpenModal) {
//         setTimeout(() => {
//                 resolve('promise3 виконався успішно')
//             }, 3000)
//     } else {
//         reject('promise3 не виконався')
//         }
// })
    
// console.dir(Promise)
// Promise.all([promise1, promise2, promise3])
//     .then((response) => {
//         console.log(response);
//     }
// )
//     .catch(error=>console.log(error));
    



const promise1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve(console.log('проміс 1'))}, 5000)
})
const promise2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve(console.log('проміс 2'))}, 8000)
})
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve(console.log('проміс 3'))}, 1000)
})


Promise.rase([promise1, promise2, promise3])
    .then((first) => {
    return console.log(first);
})