const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

function getRandomLine(filePath){
    // read from the file
    const data = fs.readFileSync(filePath,'utf-8');

    const lines = data.split('\n');

    // Select a random line
    const randomLine = lines[Math.floor(Math.random() * lines.length)];

    return randomLine;
}

const filePath = './generated_paragraphs.txt'

app.get('/random',(req,res)=> {
    res.json({
        message: 'Generated new Paragraph !!!',
        paragraph: getRandomLine(filePath)
    })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})