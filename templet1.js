const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn")
let test = document.getElementById("slider").style.backgroundImage = "url('My project6.jpg')";
let counter = 0;

nextBtn.addEventListener("click", () => {
    if(test === "url('My project6.jpg')" && counter === 0){
    document.getElementById("slider").style.backgroundImage = "url('My project3.jpg')";
    counter++
    }else{
        document.getElementById("slider").style.backgroundImage = "url('My project6.jpg')";
        counter--
    }
    
});

prevBtn.addEventListener("click", () => {
    if(test === "url('My project6.jpg')" && counter === 0){
        document.getElementById("slider").style.backgroundImage = "url('My project3.jpg')";
        counter++
        }else{
            document.getElementById("slider").style.backgroundImage = "url('My project6.jpg')";
            counter--
        }
});