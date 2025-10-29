## Tourist Attraction Search Website

A React + Express web application for searching and discovering tourist attractions.

### Project Structure

```
react-tourist-attraction-mini-project/
├── client/          # React frontend (Vite)
├── server/          # Express backend
├── package.json     # Root package.json
└── vercel.json      # Vercel deployment config
```

### Local Development

#### Prerequisites
- Node.js (v14 or higher)
- npm

#### Setup

1. **Install dependencies:**
   ```bash
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```

2. **Start the backend server (Port 4001):**
   ```bash
   cd server
   npm run start
   ```

3. **Start the frontend (in a new terminal, Port 4002):**
   ```bash
   cd client
   npx vite --port 4002
   ```

4. **Open your browser:**
   ```
   http://localhost:4002
   ```

### Deployment to Vercel

#### Deploy Backend
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Create a new project, select repository
4. Set Root Directory to `server`
5. Deploy

Note your backend URL after deployment.

#### Deploy Frontend
1. Create another project from the same repository
2. Set Root Directory to `client`
3. Add Environment Variable: `VITE_API_URL` = your backend URL
4. Deploy

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/trips?keywords=<search>` | Search tourist attractions |

### Technologies

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Node.js, Express, CORS
