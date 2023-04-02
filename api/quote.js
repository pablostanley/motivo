const { Chat } = require('@openai/assistant');

module.exports = async (req, res) => {
  // Replace with your OpenAI API key
  const apiKey = process.env.OPENAI_API_KEY;

  const chat = new Chat({ apiKey });
  const prompt = 'Generate an ironic motivational quote misquoting famous quotes or mixing two famous quotes:';
  const chatResponse = await chat.sendMessages([
    { role: 'system', content: 'You are a helpful assistant that generates ironic motivational quotes.' },
    { role: 'user', content: prompt },
  ]);

  const quoteMessage = chatResponse.messages.find(msg => msg.role === 'assistant');
  const quote = quoteMessage.content.trim();
  const author = 'Unknown'; // Replace with the actual author if needed

  // Log the server response
  console.log("Server response:", { quote, author });

  // Set CORS headers and send the response with the quote and author
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json({ quote, author });
};
