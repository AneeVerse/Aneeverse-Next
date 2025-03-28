import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

// Updated options with better timeout settings
const options = {
  connectTimeoutMS: 30000,  // 30 seconds connection timeout
  socketTimeoutMS: 45000,   // 45 seconds socket timeout
  serverSelectionTimeoutMS: 60000, // 60 seconds to select a server
  maxPoolSize: 10,          // Maximum number of connections in the connection pool
  retryWrites: true,        // Retry write operations if they fail
  // These options are deprecated but we'll keep them for backwards compatibility
  // with older MongoDB drivers
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Global promise reference
let clientPromise;

// Handle non-existent URI
if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// In development, use a global variable so connections survive hot reloading
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect()
      .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for each request
  const client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .catch(err => {
      console.error('Failed to connect to MongoDB:', err);
      throw err;
    });
}

// Export the client promise
export default clientPromise; 