
// contact me 
let subBtn = document.getElementById("submit");

    subBtn.addEventListener("click" , e => {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;
        let body = "name: " + name + '<br/> email: '+ email + '<br/> phone: '+ phone + '<br/> message: '+ message;
        
        Email.send({
        Host : "smtp.gmail.com",
        Username : "mhdalghazzouli@gmail.com",
        Password : "uokbbasawpoytgeg",
        To : 'mhdalghazzouli@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : body
    }).then(
    message => alert(message)
    );
});