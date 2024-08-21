




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

function arrChecking (arr) {
    const everyNum = arr.every((num) => {
     return   num % 2 === 0
    })
    return new Promise((resolve, reject) => {
        
        if (everyNum) {
            resolve('всі числа парні')
        } else {
            reject('Є непарні числа')

        }
    })
}

arrChecking([2, 4, 6])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
   