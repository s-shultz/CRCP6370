document.getElementById("send-button").addEventListener("click", sendMessage);

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    console.log(userInput);
    appendMessage(userInput, "user");

    const url = `https://api.openai.com/v1/chat/completions`;


    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer $OPENAI_API_KEY",

        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },

                {
                    role: "user",
                    content: userInput
                }
            ],
            max_tokens: 256
        })
    });

    if (response.ok) {
        const data = await response.json();
        const botReply = data.choices[0].message.content.trim();
        appendMessage(botReply, "bot");
    } else {
        appendMessage("Error: Unable to generate response", "bot");
    }

    document.getElementById("user-input").value = "";
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    if (!chatBox) {
        console.error("Chat box not found");
        return;
    }
    console.log(message, sender);
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-bubble", sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}