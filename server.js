const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {

  const readWrite = (file,contentType) => {
  fs.readFile(file, function(err, data) {
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    res.end();
  });
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    readWrite("index.html","text/html")
  }
  else if (page == '/api') {

    let serverChoice = computerChoice()

    function computerChoice(){
      let randomNumber = Math.random()
      if(randomNumber < .33){
        return "rock"
      }else if(randomNumber < .66){
        return "paper"
      } else if(randomNumber >= .66){
        return "scissors"
      }
    }

      res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          computerChoice: serverChoice

      }
      res.end(JSON.stringify(objToJson));
  }//else if

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    readWrite('js/main.js','text/javascript')
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

