let currentUser = 1;

function sendMessage() {
    let input = document.getElementById('messageInput');
    let messageText = input.value.trim();
    if (messageText !== "") {
        let messagesDiv = document.getElementById('messages');
        let message = document.createElement('div');
        message.classList.add('message', currentUser === 1 ? 'user1' : 'user2');
        message.innerText = messageText;
        messagesDiv.appendChild(message);
        input.value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        currentUser = currentUser === 1 ? 2 : 1; // Switch user
    }
}
