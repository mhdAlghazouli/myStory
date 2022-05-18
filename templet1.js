
// make a slider
   //calling the BTNS   
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
  //create counter and words value 
let counter = 2;
let words = ""
  //making a loop on the next btn 
for(let i = 1 ; i <= 4 ; i++){
    nextBtn.onclick = function(){
        if(counter === 2){
        counter++
        words = `url('My project${counter}.jpg')`
        document.getElementById("slider").style.backgroundImage = words
        document.getElementById("slider").style.transitionDuration = "1" + "s"
        document.getElementById("slider").style.transitionDelay = "250" + "ms"
        }else{
            words = `url('My project${counter + 1}.jpg')`
            document.getElementById("slider").style.backgroundImage = words
            document.getElementById("slider").style.transitionDuration = "1" + "s"
            document.getElementById("slider").style.transitionDelay = "250" + "ms"
            counter++
        }
        if(counter > 5){
            counter = 2;
            words = `url('My project${counter}.jpg')`
            document.getElementById("slider").style.backgroundImage = words
            document.getElementById("slider").style.transitionDuration = "1" + "s"
            document.getElementById("slider").style.transitionDelay = "250" + "ms"
        }
    }
    // making loop on the prev btn
    prevBtn.onclick = function(){
        if(counter === 2){
            counter = 5
            words = `url('My project${counter}.jpg')`
            document.getElementById("slider").style.backgroundImage = words
            document.getElementById("slider").style.transitionDuration = "1" + "s"
            document.getElementById("slider").style.transitionDelay = "250" + "ms"
            
        }else{
                words = `url('My project${counter - 1}.jpg')`
                console.log(words)
                document.getElementById("slider").style.backgroundImage = words
                document.getElementById("slider").style.transitionDuration = "1" + "s"
                document.getElementById("slider").style.transitionDelay = "250" + "ms"
                counter--
                
            }
    }
}
// end of slider

  
  
 
 

