(() => {
    let fullscreen = false;
    const clock = document.querySelector('#js-output');
    clock.addEventListener('click', () => {
        if(!fullscreen) {
            if(document.body.requestFullscreen) {
                document.body.requestFullscreen();
                fullscreen = true;
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                fullscreen = false;
            }
        }
    });

    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    function format(number) {
        return number <= 9 ? "0" + number : number
    }

    clock.innerHTML = `${format(hours)}:${format(minutes)}`;

    setInterval(() => {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++
                if(hours == 24) {
                    hours = 0;
                }
            }
        }
        clock.innerHTML = `${format(hours)}:${format(minutes)}`;
    }, 1000);

})()