# 🚀 AI Image Generator (MERN + AI)

AI Image Generator is a full-stack web application that allows users to generate images from text prompts using AI. Built with the MERN stack, it integrates AI services for image generation and cloud storage for efficient image handling.

---

## 🧠 Features

- 🔐 User Authentication (JWT based)
- 🤖 AI Image Generation (Text → Image)
- ☁️ Cloudinary Integration (Image storage)
- ❤️ Like System
- 🔍 Search functionality
- 📊 User Dashboard
- 📥 Download images
- 🎨 Modern UI

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- React Router DOM
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### AI & Cloud
- OpenAI API
- Cloudinary

### Security
- JWT Authentication
- bcrypt
- Helmet & CORS

---

## 🏗️ Project Structure


ai-image-generator/
│
├── client/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── App.jsx
│
├── server/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ └── server.js


---

## 🔄 Workflow

1. User enters prompt in frontend  
2. Request sent to backend via Axios  
3. JWT token verified  
4. Backend calls OpenAI API  
5. Image generated  
6. Image uploaded to Cloudinary  
7. Data stored in MongoDB  
8. Response sent to frontend  
9. Image displayed to user  

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/mansi-katiyar/AI_Image-_Generator-2.git
cd AI_Image-_Generator-2
2. Install Dependencies
Backend
cd server
npm install
Frontend
cd client
npm install
3. Environment Variables

Create .env file inside server folder:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key
CLOUD_NAME=your_cloudinary_name
CLOUD_KEY=your_cloudinary_key
CLOUD_SECRET=your_cloudinary_secret
4. Run Project
# Backend
cd server
npm run dev

# Frontend
cd client
npm run dev
🌍 Deployment
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas
📸 Screenshots

(Add screenshots here)

👩‍💻 Author

Mansi Katiyar
GitHub: https://github.com/mansi-katiyar
