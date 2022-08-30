require('dotenv').config()

const { MongoClient } = require("mongodb");

const client = null

const clientConection = async () => { 
  const client = new MongoClient(process.env.URI_MONGODB);
  const result = await client.db(process.env.NAME_DB);
  return result 
}






/*
async function run() {
    try {
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
*/
//run().catch(console.dir);

module.exports = {
  getConnectionDB: clientConection,
  client
}

