const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "froom Productiion and team." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);  
}); 
 
