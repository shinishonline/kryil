# MongoDB Atlas + Vercel Setup Guide

## Admin Credentials

**Default Login:**
- URL: https://kryil.com/admin
- Username: `admin@kryil.com`
- Password: `kryil@admin123`

**Important:** Change the password hash in production by updating the `ADMIN_PASSWORD_HASH` environment variable in Vercel.

---



## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Create a new cluster (M0 Free tier)
4. Choose a cloud provider and region (preferably close to your users)
5. Wait for cluster creation (2-5 minutes)

## Step 2: Configure Database Access

1. In Atlas, go to **Database Access** (left sidebar)
2. Click **Add New Database User**
3. Authentication Method: Password
4. Username: `kryil_admin` (or your choice)
5. Password: Generate a secure password (save it!)
6. Database User Privileges: **Read and write to any database**
7. Click **Add User**

## Step 3: Configure Network Access

1. Go to **Network Access** (left sidebar)
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (0.0.0.0/0)
   - This is needed for Vercel serverless functions
4. Click **Confirm**

## Step 4: Get Connection String

1. Go to **Database** (left sidebar)
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Driver: Node.js, Version: 5.5 or later
5. Copy the connection string, it looks like:
   ```
   mongodb+srv://kryil_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` with your actual password

## Step 5: Install Dependencies

```bash
npm install mongodb
```

## Step 6: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name? kryil-infotech
   - Directory? ./
   - Override settings? No

5. Set environment variables in Vercel:
   ```bash
   vercel env add MONGODB_URI
   ```
   - Paste your MongoDB connection string
   - Select: Production, Preview, Development

6. Redeploy:
   ```bash
   vercel --prod
   ```

## Step 7: Update Frontend API URL

1. Create `.env` file (copy from `.env.example`)
2. Set `VITE_API_URL` to your Vercel URL
3. Example: `VITE_API_URL=https://kryil-infotech.vercel.app`

## Step 8: Test the API

Test contact submission:
```bash
curl -X POST https://your-vercel-app.vercel.app/api/submit-contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Test message",
    "source": "contact_form"
  }'
```

## API Endpoints

After deployment, you'll have these endpoints:

- `POST /api/submit-contact` - Contact form submissions
- `POST /api/submit-application` - Job application submissions

## Database Collections

Your MongoDB database will have these collections:

1. **contacts** - Contact form submissions
   - Fields: name, email, phone, message, source, createdAt, status

2. **applications** - Job applications
   - Fields: name, email, phone, linkedIn, coverLetter, position, resumeData, createdAt, status

## Viewing Data in MongoDB Atlas

1. Go to your cluster in MongoDB Atlas
2. Click **Collections**
3. Browse your data in `kryil_infotech` database

## Alternative: Keep GitHub Pages + Vercel API

You can:
- Keep your frontend on GitHub Pages (kryil.com)
- Host only the API on Vercel (api.kryil.com or vercel subdomain)
- Update API calls to point to Vercel URL

This gives you the best of both worlds!
