const express = require('express');
const cors=require("cors")
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());

app.post('/bfhl', (req, res) => {
  console.log(req)
  const { data } = req.body;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && /^[A-Za-z]$/.test(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];
  
  res.json({
    is_success: true,
    user_id: "srinivas_sobhit_kintali_22082003",
    email: "sk7001@srmist.edu.in",
    roll_number: "RA2111031010041",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
