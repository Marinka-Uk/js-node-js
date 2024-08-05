// <!-- NOTIFICATION -->
const refs = {
notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

setTimeout(hideNotification, 3000)


/*
* Функції
*/
function onNotificationClick() {
hideNotification();
clearTimeout(timeoutId)
}

function showNotification() {
refs.notification.classList.add('is-visible');

}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
    console.log('Закрили');
}


//promt


setTimeout(() => {
    
confirm('Підпишіться')
},5000)





let confirmCount = 0;
const intervalId = setInterval(() => {
    confirm('Підпишіться')
    confirmCount++;
    if (confirmCount === 5) {
        clearInterval(intervalId)
        return
    }
    hasSubscribed = confirm('Підпишись')
    promptCounter += 1
}, 3000);

/**
 * Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, 
 * починаючи від from і закінчуючи to.
    * Зробіть два варіанти рішення.
    * 1. Використовуючи setInterval.
    * 2. Використовуючи вкладений setTimeout.
 */

