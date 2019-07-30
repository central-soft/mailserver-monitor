const http = require('http');
const fs = require('fs');
const csv = require('csv');
const html = fs.readFileSync('index.html');

const getDataFromFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const src = fs.createReadStream(filePath);
    src.on('error', (err) => { reject(err); });
    src.pipe(csv.parse({columns: true}, (err, data) => {
      if (err) { reject(err); }
      resolve(data);
    }));
  });
};

const server = http.createServer(async (request, response) => {

  switch (request.url) {
    case '/data':
      let data = await getDataFromFile('./data.csv');
      response.writeHead(200, {'Content-Type' : 'application/json'});
      response.write(JSON.stringify(data));
      response.end();
      break;
    default:
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(html);
  }
});

server.listen(9000);

// 分かりやすいように...
const Reset = '\x1b[0m';
const BgRed = '\x1b[41m';
console.log(`${BgRed}！！サーバ容量監視用！！${Reset}`);
