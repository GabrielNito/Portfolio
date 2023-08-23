function file_get_contents(url) {
  try {
    var x = new XMLHttpRequest();
    x.open("get", url, true);
    x.send(null);
    if (x.status != 200) {
      // return nothing if the status code is not 200 OK, e.g. the page is not found
      return "";
    }
    return x.responseText;
  } catch (e) {
    // failed to retrieve contents
    return "";
  }
}

const home = file_get_contents("../index.html");

const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send(home);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
