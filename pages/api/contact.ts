import { MongoClient } from 'mongodb';
import { NextApiHandler } from 'next';
import { FormData } from '../../interfaces/form';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') throw new Error('F off man');
  const {
    email,
    name,
    message,
  }: { email: string; name: string; message: string } = req.body;
  if (
    !email ||
    !name ||
    name.trim() === '' ||
    !message ||
    !email.includes('@') ||
    message.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid input' });
    return;
  }
  //   STore to db
  const newMessage: FormData = {
    email,
    name,
    message,
  };
  let client;
  try {
    client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@${process.env.MONGO_CLUSTER}.njrnlhv.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
      // 'mongodb+srv://studylc29:Nextjs2023@cluster0.njrnlhv.mongodb.net/my-site?retryWrites=true&w=majority'
    );
  } catch (err) {
    return res.status(500).json({ message: "Couldn't connect" });
  }
  const db = client.db();
  try {
    const result = await db.collection('messages').insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (err) {
    client.close();
    return res.status(500).json({ message: 'Failed' });
  }
  client.close();
  console.log(newMessage);
  res.status(201).json({ message: 'Successfully stored', data: newMessage });
};
export default handler;
