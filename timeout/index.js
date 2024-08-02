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

setInterval(() => {
    confirm('Підпишіться')
    confirmCount++;
}, 3000);



