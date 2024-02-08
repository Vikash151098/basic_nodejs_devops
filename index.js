const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200).send({ statusCode: 200, data: "welcome to ExpressJs Basic..." })

})



app.listen(4000, () => console.log("app is listening on 4000...."));