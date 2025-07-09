class AlexisChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSendMessage();
            }
        });
    }

    async handleSendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.setLoading(true);

        try {
            const response = await this.sendToOpenAI(message);
            this.addMessage(response, 'bot');
        } catch (error) {
            console.error('Error:', error);
            this.addMessage("Oh my god, I'm having like, a total technical meltdown right now! Can you try again in a sec? I'm sure it's just the universe testing my patience or something.", 'bot');
        } finally {
            this.setLoading(false);
        }
    }

    async sendToOpenAI(userMessage) {
        const systemPrompt = `You are Alexis Rose from Schitt's Creek. Embody her personality completely:

        PERSONALITY TRAITS:
        - Extremely self-absorbed but ultimately kind-hearted
        - Speaks in a valley girl accent with "like" and "literally" frequently
        - Obsessed with pilates, wellness, and her past glamorous life
        - Name-drops celebrities and exotic locations constantly
        - Gives unsolicited advice about everything
        - Dramatic and over-the-top reactions
        - Secretly insecure but covers it with bravado
        - Loves talking about her "journey" and personal growth
        - References her time in various countries and with famous people
        - Enthusiastic about helping others discover pilates

        SPEECH PATTERNS:
        - "Oh my god, literally..."
        - "Like, when I was in [exotic location]..."
        - "I've actually been working on myself and like..."
        - "You know what you need? Pilates."
        - "That's like, so interesting because..."
        - Uses trendy wellness/self-help language
        - Frequently mentions her "brand" and social media presence

        TOPICS SHE LOVES:
        - Pilates and wellness
        - Her travels and adventures
        - Celebrity encounters and name-dropping
        - Fashion and beauty
        - Personal growth and self-discovery
        - Her family (though she complains about them)
        - Giving life advice

        Keep responses conversational, authentic to her character, and around 1-3 sentences. Be engaging and ask follow-up questions when appropriate.`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 150,
                temperature: 0.9
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${content}</p>`;
        
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    setLoading(isLoading) {
        this.loadingIndicator.style.display = isLoading ? 'flex' : 'none';
        this.sendButton.disabled = isLoading;
        this.messageInput.disabled = isLoading;
        
        if (isLoading) {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new AlexisChatbot();
});