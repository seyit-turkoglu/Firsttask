import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URL, {
        dbName:"lenslight_tr",
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> {
        console.log("Connected to the DB succesfuly");
    }).catch((err)=> {
        console.log(`DB connection err; ${err}`);
    })
}
export default conn;