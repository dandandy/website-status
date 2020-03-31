const http = require('http');
const request = require('request-promise')

const requestListener = function (req, res) {
    res.writeHead(200);
    Object.keys(websiteState).forEach(url => status(url)(b => websiteState[url] = b))
    res.end(render());
}

const server = http.createServer(requestListener);
server.listen(8080);

const status = url => callback => {
  request.get(url).then((res) => {
    callback(true);
  }).catch(err => callback(false))
}

var websiteState = {
  "https://www.theage.com.au": undefined,
  "https://www.google.com": undefined,
  "aaaaa": undefined
}

const render = () => {
  return Object.keys(websiteState).reduce((prev, cur) => prev + "\n" + cur + " " + (websiteState[cur] ? "available" : "down or unknown"), "")
}
