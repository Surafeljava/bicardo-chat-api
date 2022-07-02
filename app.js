express = require('express');
const mongoose = require("mongoose");
app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/bicardochat',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => { console.log('Mongo Connected') }).catch(e => console.log(`Error Message: ${e}`));


app.use('/', (res, req) => {
    req.send("Bicardo Chat API . . .");
})


app.listen(5000, () => {
    console.log("Listening on PORT - 5000");
});