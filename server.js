const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.all("/*", (req, res) => {
  res.json({
    url: req.url,
    method: req.method,
    headers: req.headers,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
