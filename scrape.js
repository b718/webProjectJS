const request = require("request");
const cheerio = require("cheerio");
let x = 0;
request(
  "https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States",
  (error, response, html) => {
    if (!error & (response.statusCode == 200)) {
      const $ = cheerio.load(html);

      let test = $("*");

      console.log(test.text());

      test.each((i, el) => {
        if ($(el).text().includes("George Washington")) {
          x++;
        }
      });

      console.log(x);
    }
  }
);
