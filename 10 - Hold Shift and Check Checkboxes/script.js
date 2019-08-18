
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//console.log(checkboxes);


let lastChecked;

function handleCheck(e) {
    //console.log(e);
    //console.log(e.shiftKey);
    let inBetween = false;

    if(e.shiftKey && this.checked) {
       checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if(checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
            console.log("Starting to check them in between!");
        }

        if (inBetween) {
            checkbox.checked = true;
        }
       });
    }

    lastChecked = this;
    //console.log(lastChecked);
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));