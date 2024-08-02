const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "Agrisathi From Prod Server." }); 
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);  
}); 
 
