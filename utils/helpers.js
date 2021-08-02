const enterButton = document.querySelector("enter-button");
const chatInput = document.querySelector("chat-input");
const sessionInput = document.querySelector("session-input");
const chatForm = document.querySelector("chat-form");

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