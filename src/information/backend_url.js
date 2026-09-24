// Local dev picks this up from .env (REACT_APP_API_URL=http://localhost:8000).
// Vercel picks it up from the project's Environment Variables at build time.
export const server_url = process.env.REACT_APP_API_URL || "https://trenders-server.onrender.com";