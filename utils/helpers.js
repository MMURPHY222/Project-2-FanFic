// const { io } = require("socket.io-client");

const { Socket } = require("socket.io-client");

const enterButton = document.querySelector("#enter-button");
const chatInput = document.querySelector("#chat-input");
const sessionInput = document.querySelector("#session-input");
const chatForm = document.querySelector("#chat-form");

// const socket = io('http://localhost:3001');

// socket.on("connect", () => displayMessage(`Connected with id: ${socket.id}`))

chatForm.addEventListener("submit", event => {
    event.preventDefault();

    const chat = chatInput.value;
    const session = sessionInput.value;

    if (chat == "") {
        return;
    } else {
        displayChat(chat);
    }

    chatInput.value = "";
});

enterButton.addEventListener("click", () => {
    const session = sessionInput.value;
});

const displayChat = chatMessage => {
    const div = document.createElement("div");
    div.textContent = chatMessage;
    document.querySelector("#chat-box").append(div);
}