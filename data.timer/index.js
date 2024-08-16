const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};


const timer = {
  intervalId: null,

  start () {
    const startTime = Date.now(); 

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
                            
      const deltaTime = currentTime - startTime;
const time = getTimeComponents(deltaTime)
        console.log('time: ', time);
        updateClockface(time)
    
    },1000)
  },
  stop() {
        clearInterval(this.intervalId);
    }
}
refs.startBtn.addEventListener('click', () => {
  timer.start()
})

refs.stopBtn.addEventListener('click', () => {
  timer.stop()
})






  /*
   * Приймає число, приводить його в рядок і додає на початок 0 
   * якщо число менше 2-х знаків
   */

function pad(value) {
            
    return String(value).padStart(2, '0');
  }


/*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщується годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   */

function getTimeComponents(time) {
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    
  }

/*
 * - Приймає час в міллісекундах
 * - Вираховує скільки в них вміщується годин/хвилин/секунд
 * - Малює інтерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

