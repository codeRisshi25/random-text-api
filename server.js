const express = require('express');
const fs = require('fs');

// const app = express();
// const port = 3000;

function getRandomLine(filePath){
    // read from the file
    const data = fs.readFileSync(filePath,'utf-8');

    const lines = data.split('\n');

    // Select a random line
    const randomLine = lines[Math.floor(Math.random() * lines.length)];

    return randomLine;
}

const filePath = './generated_paragraphs.txt'
const randomLine = getRandomLine(filePath);

console.log(randomLine);