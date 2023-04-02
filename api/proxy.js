const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const apiUrl = 'https://motivo.vercel.app/api/quote';
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  // Set the Access-Control-Allow-Origin header
  res.setHeader('Access-Control-Allow-Origin', 'chrome-extension://gpicdaanpiconkafmhjmfccfheppifcn');
  res.status(200).json(data);
};