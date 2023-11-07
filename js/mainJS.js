"uce strict"

window.addEventListener('load',windowLoad)

function windowLoad() {

    //fun initialization 
    function digitsCountersInit(digitsCountersItem) {
        let digitsCounters = digitsCountersItem ? digitsCountersItem : document.querySelectorAll('[data-digits-counter]')
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter)
            })
        }
    }

    //func Animation
    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000
        let startValue = parseInt(digitsCounter.innerHTML)
        let startPosition = 0

        const step = (timestamp) => {

            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue))

            if (progress < 1) {
                window.requestAnimationFrame(step)
            }

        }
        window.requestAnimationFrame(step);
    }

    digitsCountersInit()
}