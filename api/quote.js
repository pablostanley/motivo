const { Configuration, OpenAIApi } = require('openai');

module.exports = async (req, res) => {
  try {
    // Replace with your OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;

    const configuration = new Configuration({ apiKey });
    const openai = new OpenAIApi(configuration);
    const prompt =
      'Generate an ironic motivational quote misquoting famous quotes or mixing two famous quotes:';
    const completion = await openai.createChatCompletion({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates ironic motivational quotes.',
        },
        { role: 'user', content: prompt },
      ],
    });

    const quoteMessage = completion.data.choices.find((choice) => choice.msg.role === 'assistant');
    const quote = quoteMessage.content.trim();
    const author = 'Unknown'; // Replace with the actual author if needed

    // Log the server response
    console.log('Server response:', { quote, author });

    // Set CORS headers and send the response with the quote and author
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({ quote, author });
  } catch (err) {
    console.error(err);

    res.status(400).send(err?.message || 'Something went wrong');
  }
};
