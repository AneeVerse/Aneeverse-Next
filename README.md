# Aneeverse Blog System with MongoDB

This project is a Next.js-based blog system that uses MongoDB for data storage. This approach is production-ready and works well with deployments on platforms like Vercel.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file based on `.env.example`:
   ```
   cp .env.example .env.local
   ```
4. Set up MongoDB:
   - Create a free MongoDB Atlas account (https://www.mongodb.com/atlas/database)
   - Create a new cluster
   - Set up database access (username and password)
   - Get your connection string and update it in `.env.local`
5. Run the development server:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## MongoDB Setup

### Creating a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
2. Sign up for a free account
3. Create a new project
4. Build a new cluster (you can use the free tier)
5. Set up a database user with read/write privileges
6. Configure network access (you can allow access from anywhere during development)
7. Get your connection string from the "Connect" button on your cluster

### Configuring Your Application

Update your `.env.local` file with your MongoDB connection details:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aneeverse?retryWrites=true&w=majority
MONGODB_DB=aneeverse
```

Replace `username`, `password`, and `cluster.mongodb.net` with your actual credentials.

## API Routes

The application includes the following API routes:

- `GET /api/blogs` - Get all blogs with optional filtering
- `POST /api/blogs` - Create a new blog
- `GET /api/blogs/[id]` - Get a specific blog by ID
- `PUT /api/blogs/[id]` - Update a blog
- `DELETE /api/blogs/[id]` - Delete a blog

## Deployment on Vercel

This application is designed to work seamlessly with Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy!

## Features

- MongoDB integration for production-ready data storage
- Admin dashboard for managing blog posts
- Create, read, update, and delete blog posts
- Categorized blog listings
- Responsive design
