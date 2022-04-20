const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn")
let test = document.getElementById("slider").style.backgroundImage = "url('My project6.jpg')";
let counter = 0;

nextBtn.addEventListener("click", () => {
    if(test === "url('My project6.jpg')" && counter === 0){
    document.getElementById("slider").style.backgroundImage = "url('My project3.jpg')";
    document.getElementById("slider").style.transitionDuration = "1" + "s"
    counter++
    }else{
        document.getElementById("slider").style.backgroundImage = "url('My project6.jpg')";
        document.getElementById("slider").style.transitionDuration = "1" + "s"
        counter--
    }
    
});

prevBtn.addEventListener("click", () => {
    if(test === "url('My project6.jpg')" && counter === 0){
        document.getElementById("slider").style.backgroundImage = "url('My project3.jpg')";
        document.getElementById("slider").style.transitionDuration = "1" + "s"
        counter++
        }else{
            document.getElementById("slider").style.backgroundImage = "url('My project6.jpg')";
            document.getElementById("slider").style.transitionDuration = "1" + "s"
            counter--
        }
});