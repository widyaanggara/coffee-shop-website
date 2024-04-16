const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (window.scrollY > 1){
        navbar.classList.replace('bg-transparent','nav-color')
    }
    else if (this.window.scrollY <= 0){
        navbar.classList.replace('nav-color','bg-transparent')
    }
});




// Chat
// Chat Pop up

// Pop-up Start
var button = document.getElementById("open-button");
var closebutton = document.getElementById("close");
var overlay = document.getElementById("overlay");

function hide(){
    overlay.style.display ="none";
    button.style.display ="block";
}

button.onclick = function(){
    overlay.style.display ="block";
    button.style.display ="none";
}

closebutton.onclick = function(){
    hide();
}

window.onclick = function(event){
    if (event.target == overlay){
        hide();
    }
}

// Pop up end

// Chat start
const msgForm = get(".popUp-footer");
const msgInput = get("input");
const chatArea = get(".popUp-main");

// const CP_MSG = [
//     "What's wrong with the product?",
//     "Do you request refound?",
//     "Please send the order details.",
//     "Thanks! You'll get refound soon."
// ];
// var i = 0;

const CP_IMG = "https://cdn-icons-png.flaticon.com/256/2928/2928988.png";
const CLIENT_IMG = "https://image.flaticon.com/icon/svg/929/929422.svg";
const CP_NAME = "Customer Service";
const CLIENT_Name = "Client";

appendMessege(CP_NAME, CP_IMG, "comp", "Hi, how i can help you?");
// msgForm.addEventListener("submit", event =>{
//     event.preventDefault();

//     const chatText = msgInput.value;
//     if (!chatText) return;

//     appendMessege(CLIENT_Name, CLIENT_IMG, "client", chatText);
//     msgInput.value = "";

//     cpResponse();
// });

function appendMessege(name, img, side, text){
    const msgHTML = `
    <div class = "msg ${side}-msg">
        <div class = "chat-img" style ="background-img:url(${img})"></div>
        
    <div class = "chat-bubble">
            <div class = "chat-name">${name}</div>
        <div class = "chat-text">${text}</div>
            </div>
    </div>
        
    `;

    chatArea.insertAdjacentHTML("beforeend", msgHTML);
    chatArea.scrollTop += 500;
}

// function cpResponse(){
//     const chatText = CP_MSG [i++];
//     if (i >= CP_MSG.length){
//         i = 0;
//     }
//     const delay = chatText.split(" ").length * 100;

//     setTimeout(() => {
//         appendMessege(CP_NAME, CP_IMG, "comp", chatText);
//     }, delay);
// }

function get(selector, root = document){
    return root.querySelector(selector);
}
