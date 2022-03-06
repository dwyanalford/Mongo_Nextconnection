import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('tidalDatabase');
    const data = await db
      .collection('tidal-products')
      .find({ category: 'sets' })
      .toArray();
    res.status(200).json(data);
    // console.log(data);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
