// Vercel Serverless Function - Career Application Submission
const { MongoClient } = require('mongodb');

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
    const {
      firstName,
      lastName,
      email,
      phone,
      education,
      experience,
      githubRepo,
      position,
      appliedAt
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !education || !experience || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    const collection = db.collection('career_applications');

    // Insert career application
    const result = await collection.insertOne({
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      phone,
      education,
      experience,
      githubRepo: githubRepo || '',
      position,
      appliedAt: appliedAt || new Date().toISOString(),
      createdAt: new Date(),
      status: 'new',
      reviewed: false
    });

    return res.status(200).json({
      success: true,
      message: 'Application submitted successfully! We will get back to you soon.',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error submitting career application:', error);
    return res.status(500).json({
      error: 'Failed to submit application',
      details: error.message
    });
  }
};
