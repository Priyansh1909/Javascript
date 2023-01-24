window.onload = function(){

    const start_button = document.getElementById("start_button")
    const pause_button = document.getElementById("pause_button")
    const reset_button = document.getElementById("reset_button")
    let milliseconds = 00
    let seconds = 00
    let minutes = 00
    let appendseconds = document.getElementById("second")
    let appendminutes = document.getElementById("minute")
     let interval

    start_button.onclick = ()=>{
        interval = setInterval(starttimer, 1000);
    }

    pause_button.addEventListener("click" , ()=>{
        clearInterval(interval);
    })

    reset_button.addEventListener("click", ()=>{
        clearInterval(interval);
        milliseconds = 00;
        minutes = "00";
        seconds = "00";
        appendminutes.innerHTML = minutes;
        appendseconds.innerHTML = seconds;
    })

    function starttimer(){
        milliseconds+=1000;
        if(milliseconds == 1000){
            milliseconds = 0;
            seconds++;
            appendseconds.innerHTML = seconds
            if(seconds  == 60){
                seconds = 0;
                minutes++;
                appendminutes.innerHTML = minutes
            }
        }
    }


}