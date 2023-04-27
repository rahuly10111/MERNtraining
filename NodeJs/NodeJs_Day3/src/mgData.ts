import { MongoClient, Db } from 'mongodb';

async function main() {
    const uri = 'mongodb://127.0.0.1:27017/test'; 
    const client = await MongoClient.connect(uri);
    const db: Db = client.db('DrugManagementSystem'); 
    const collection = db.collection('test');
    const result = await collection.find({}).toArray();
    console.log(result);
    client.close();
}
main().catch(console.error);
