const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Retrieve the bot token from the environment variables
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("Bot token not found in the .env file.");
  process.exit(1);
}

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Define a handler for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Check if the message sender is a user (not a bot)
  if (!msg.from.is_bot) {
    // Store the chat ID (You can implement your storage logic here)
    storeChatId(chatId);

    // Respond with a "Hi" message
    bot.sendMessage(chatId, 'Hi');
  }
});

// Function to store the chat ID (You can replace this with your own storage logic)
function storeChatId(chatId) {
  // Implement your storage logic here (e.g., save it to a database)
  console.log(`Chat ID ${chatId} stored.`);
}
