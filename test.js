// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
var readline = require("readline");

// URL of the page we want to scrape
let varTest = false;
var rl = readline.createInterface(process.stdin, process.stdout);

// Async function which scrapes the data
async function scrapeData(url) {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);

    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);

    // Select all the list items in plainlist class
    const listItems = $("*");

    let x = 0;

    //we need to find a way to count the occurences of a word!
    listItems.each((idx, el) => {
      if ($(el).text().includes("hi")) {
        x++;
      }
    });

    // Write countries array in countries.json file

    console.log(x);
  } catch (err) {
    console.error(err);
  }
}

// Invoke the above function
var url = "";
var word = "";

//rWord.setPrompt("What word do you want to check for? ");
//rWord.prompt();
//rWord.on("line", (word) => {
//  word = word;
//  rWord.close;
//});

rl.setPrompt(`What URL would you like to search? `);
rl.prompt();
rl.on("line", (age) => {
  url = age;
  varTest = true;
  scrapeData(url, word);
  rl.close();
});
