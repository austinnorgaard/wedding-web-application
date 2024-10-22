const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors);

app.listen(4242, () => console.log("Node server listening on port 4242!"));