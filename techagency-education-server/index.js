const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kaasp8g.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("techagency");    
    const courses =  database.collection("allcourses");
    const selected_courses = database.collection('selected-courses'); 
    const stories = database.collection('stories'); 
    const gallery = database.collection('gallery'); 
    const notices = database.collection('notices'); 

    app.get("/courses", async(req, res)=>{
        const result = await courses.find().toArray();
        res.send(result);
    })
    
    app.get("/course/preview/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};        
      const result = await courses.find(filter).toArray();
      res.send(result);
    })
    
    app.post('/selected-courses',async(req, res)=>{
      const selected = req.body;
      const result = await selected_courses.insertOne(selected);
      res.send(result);
    })
    
    app.get('/selected-courses',async(req, res)=>{
      const email = req.query.email;
      const filter = {user: email}
      const result =  await selected_courses.find(filter).toArray();
      res.send(result);
    })

    app.get('/stories', async(req, res)=>{
      const result = await stories.find().toArray();
      res.send(result);
    })
    app.get('/gallery', async(req, res)=>{
      const result = await gallery.find().toArray();
      res.send(result);
    })
    app.get('/notices', async(req, res)=>{
      const result = await notices.find().toArray();
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})