# AI-Code-Reviewer

An AI-powered tool that reviews code for syntax, logic, and best practices using LLMs.

## Features
- ✅ Automated code review with contextual feedback
- 🧠 LLM integration for intelligent suggestions
- 📊 Dashboard for review summaries

## Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/Rosi87g/AI-Code-Reviewer.git

2. Install dependencies:
   ```bash
   npm create vite@latest
   cd foldername
   npm install
   npm run dev
   
   npm install react react-dom @monaco-editor/react react-select @google/genai react-markdown react-spinners lucide-react

   
3. 🔐 Setting Up Gemini API Key
To use Google’s Gemini model for code review, you’ll need an API key from Google AI Studio.
🪄 Step-by-Step Guide
- Visit Google AI Studio
Go to https://aistudio.google.com and sign in with your Google account.
- Create a New API Key
- Navigate to the API Keys section in the sidebar.
- Click Create API Key and give it a name (e.g., AI-Code-Reviewer-Key).
- Copy the generated key.
- Add the Key to Your Project
- Create a .env file in the root directory (if not already present).
- Add the following line:
GEMINI_API_KEY=your_api_key_here
- Replace your_api_key_here with the actual key.
- Use the Key in Your App
The app uses the @google/genai SDK to connect with Gemini. The key is loaded from .env and passed securely to the backend.
🔒 Security Tip
Never commit your .env file to GitHub. Add it to .gitignore to keep your API key safe.

   
   
