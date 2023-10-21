import mongoose from "mongoose";

const Connection = async(username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@crud-app-cpm.wtkdodo.mongodb.net/?retryWrites=true&w=majority`;

    try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Database Connected Successfuly");
    } catch (error) {
        console.log("Error while connecting with the database",error)
    }
}

export default Connection;