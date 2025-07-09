# Alexis Rose Chatbot

A fun interactive chatbot that embodies the personality of Alexis Rose from Schitt's Creek. This chatbot uses OpenAI's GPT-3.5 Turbo model to provide engaging conversations with Alexis's characteristic charm and pilates enthusiasm.

## Features

- **Character-Driven Responses**: Authentic Alexis Rose personality with her signature style
- **Real-time Chat Interface**: Clean, responsive UI for seamless conversations
- **OpenAI Integration**: Powered by GPT-3.5 Turbo for intelligent responses
- **Error Handling**: Robust error handling and user feedback
- **Loading States**: Visual feedback during API calls
- **Keyboard Support**: Press Enter to send messages

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: OpenAI GPT-3.5 Turbo
- **Fonts**: Google Fonts (Lato)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd Chatbot-Web
   ```

2. **Configure API Key**

   - Copy your OpenAI API key
   - Open `config.js`
   - Replace `'YOUR_API_KEY_HERE'` with your actual API key:
     ```javascript
     const CONFIG = {
       OPENAI_API_KEY: "sk-your-actual-api-key-here",
     };
     ```

3. **Launch the Application**
   - Open `index.html` in your web browser
   - Or serve it using a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Usage

1. Type your message in the input field
2. Click "Send" or press Enter
3. Wait for Alexis to respond with her characteristic flair
4. Continue the conversation about pilates, life, or anything else!

## Project Structure

```
Chatbot-Web/
├── index.html          # Main HTML file
├── app.css            # Styling
├── index.js           # Main JavaScript logic
├── config.js          # API configuration (not committed)
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## Security Notes

- **API Key Protection**: The `config.js` file is excluded from version control
- **Client-Side Limitation**: This is a client-side implementation for portfolio purposes
- **Production Consideration**: For production use, implement a backend API to secure your API key

## Character Background

Alexis Rose arrives in Schitt's Creek as a highly self-involved celebutante who is often comically oblivious but also generous and kindhearted. Having once dominated the publicity world, she became a pilates legend and now aims to make everyone a pilates lover.

## Future Enhancements

- [ ] Add conversation history persistence
- [ ] Implement typing indicators
- [ ] Add emoji reactions
- [ ] Create multiple character modes
- [ ] Add voice input/output
- [ ] Implement rate limiting

## Contributing

This is a portfolio project, but suggestions and improvements are welcome!

## License

This project is for educational and portfolio purposes.

---
