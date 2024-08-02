const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "from Productionn." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);  
}); 
 
