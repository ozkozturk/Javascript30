const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    // we added + 90 because our hand was on 9 before adding transform: rotate(90deg);
    
    const secDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    /* if we write our code as below we wouldn't count extra time. For example 2 minutes 17 seconds: we wouldn't acount the degree of 17 seconds or 35 minutes for 8 hour 35 minutes:

        const minsDegrees = ((mins / 60) * 360) + 90;
    */
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60 ) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setClock, 1000);