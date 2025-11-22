// Vercel Serverless Function - Job Application Submission
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
    const { name, email, phone, linkedIn, coverLetter, position, resumeData } = req.body;

    // Validate required fields
    if (!name || !email || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    const collection = db.collection('applications');

    // Insert job application
    const result = await collection.insertOne({
      name,
      email,
      phone: phone || '',
      linkedIn: linkedIn || '',
      coverLetter: coverLetter || '',
      position,
      resumeData: resumeData || null, // Base64 encoded resume or file info
      createdAt: new Date(),
      status: 'new'
    });

    return res.status(200).json({
      success: true,
      message: 'Application submitted successfully',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return res.status(500).json({
      error: 'Failed to submit application',
      details: error.message
    });
  }
};
