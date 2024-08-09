// const date1 = new Date().toLocaleString()
// const date = Date.now()

// 01.01.1970

// console.log('date: ', date);
// console.log('date1: ', date1);









// setTimeout(() => {
//     const date2 = new Date();
//       console.log('date1: ', date1);
//     console.log('date2: ', date2);


//     const deltaTime = date2 - date1;
    
//     console.log(deltaTime);

// }, 2000)









// 1. Створити функцію, яка повертає поточну дату та час.


const date = function () {
    console.log(new Date());
    return new Date()
}
 
date()






// 2. Створити функцію, яка приймає дату та повертає рік.


const year = function (date) {
    console.log(date.getFullYear() );
}

year(date())
// 3. Створити функцію, яка приймає дату та повертає місяць.


function findDate() {
    const actualDate = new Date()
    const actualYear = actualDate.getFullYear()
     const actualMonth = actualDate.getMonth()+1
    const actualDay = actualDate.getDate()
    console.log(actualYear, actualMonth, actualDay);
}
findDate()

// 4. Створити функцію, яка приймає дату та повертає день місяця.

// 5. Створити функцію, яка приймає дату та повертає години.

// 6. Створити функцію, яка приймає дату та повертає хвилини.

// 7. Створити функцію, яка приймає дату та повертає секунди.

// 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).