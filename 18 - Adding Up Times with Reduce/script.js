const timeNodes = [...document.querySelectorAll("[data-time]")];

//console.log(timeNodes[1].dataset);

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode =>{
        const [mins, secs] = timeCode.split(":").map(parseFloat);
            return (mins * 60) + secs;
        
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(seconds / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);




