// Vercel Serverless Function - Contact Form Submission
const { MongoClient } = require('mongodb');

// MongoDB connection string (will be set in Vercel environment variables)
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'kryil_infotech';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return client;
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, source } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    const collection = db.collection('contacts');

    // Insert contact submission
    const result = await collection.insertOne({
      name,
      email,
      phone: phone || '',
      message,
      source: source || 'contact_form',
      createdAt: new Date(),
      status: 'new'
    });

    return res.status(200).json({
      success: true,
      message: 'Contact submitted successfully',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error submitting contact:', error);
    return res.status(500).json({
      error: 'Failed to submit contact',
      details: error.message
    });
  }
};
