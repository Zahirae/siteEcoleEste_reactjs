const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT ||5001;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
async function connectDB() {
	try{
		await mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
	}catch(err){
		console.log(err)
	}

}
connectDB();

const etudianRouter = require('./routes/etudiant');
app.use('/etudiant', etudianRouter);
const profRouter = require('./routes/prof');
app.use('/prof', profRouter);

const connection =  mongoose.connection;
connection.once('open',()=>console.log("MongoDB database connection established successfully"))

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Zahira:Zahira1717@clustereste-exmxi.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useCreateIndex: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/


app.listen(port, ()=>{
	console.log(`Server is running on port: ${port}`);
});

