require("dotenv/config");
const mongoose  = require("mongoose");
const app = require ('./app');

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

})
.then(() => console.log("Connected to MongoDB!"))
.catch((err) => console.log("MongoDB Connection Failed"))

const port = process.env.PORT




app.listen(port, (err)=> err ? console.log(err): console.log( ` App running on port ${port} ` ));

