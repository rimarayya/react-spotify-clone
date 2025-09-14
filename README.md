# 🎵 Lyriks

Lyriks is a **music streaming and lyrics web application** built with **React, Vite, and Tailwind CSS**.  
It allows users to explore music, view top charts, search for songs, and display lyrics in a clean, responsive UI.

---

## 🚀 Features

- 🎶 Browse trending songs and top charts
- 🔍 Search for artists, tracks, and genres
- 📌 View detailed artist and song information
- 📝 Fetch and display lyrics in real time
- 🎨 Modern responsive UI with Tailwind CSS
- ⚡️ Fast development with Vite

---

## 🛠️ Tech Stack

- [React](https://react.dev/) – UI library
- [Vite](https://vitejs.dev/) – Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) – Code quality
- External Music API (proxied with CORS Anywhere)

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://gitlab.com/uni.rima.rayya/react-spotify-clone.git
   ```

2. **Move to the project file**

   ```bash
   cd lyriks
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Fix CORS restriction (required step)**  
   Go to 👉 [CORS Anywhere Demo](https://cors-anywhere.herokuapp.com/corsdemo)  
   Click **"Request temporary access to the demo server"**.  
   This enables the app to fetch data correctly.

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Build for production**

   ```bash
   npm run build
   ```

---

## 📦 Project Structure

```
lyriks/
│── index.html
│── package.json
│── vite.config.js
│── tailwind.config.js
│── src/       # React components and pages
│── public/    # Static assets
```

---

## 🖼️ Screenshots

| Discover Page                         | Artist Details                    | Lyrics View                       |
| ------------------------------------- | --------------------------------- | --------------------------------- |
| ![Discover](screenshots/Discover.png) | ![Artist](screenshots/Artist.png) | ![Lyrics](screenshots/lyrics.png) |

---

## ⚠️ Deployment Note

This project **cannot be deployed directly** due to CORS limitations.  
Users must manually request access through the [CORS Anywhere Demo](https://cors-anywhere.herokuapp.com/corsdemo) before using the app.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.
