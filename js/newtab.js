document.addEventListener('DOMContentLoaded', async () => {
  fetchQuote();
});

async function fetchQuote() {
  try {
    const response = await fetch('https://motivo.vercel.app/api/quote');
    console.log('Response:', response); // Add this line to log the response
    const data = await response.json();
    console.log('Data:', data); // Add this line to log the data
    const { quote, author } = data;

    document.getElementById('quote').innerText = quote;
    document.getElementById('author').innerText = author;

    changeColorPalette();
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}


function changeColorPalette() {
  const colors = ['#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67', '#F79F1F', '#A3CB38', '#1289A7', '#D980FA', '#B53471'];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const backgroundColor = colors[randomColorIndex];
  const textColor = colors[(randomColorIndex + 5) % colors.length];

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById('quote').style.color = textColor;
  document.getElementById('author').style.color = textColor;
}
