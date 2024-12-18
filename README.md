# Pokémon App - Full Stack Project

This repository contains a **Pokémon App** project with both **frontend** and **backend** implementations. The app allows users to search, view, and explore Pokémon details.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)

## Project Overview

The Pokémon App is a simple React-Redux application that interacts with a backend API to display a list of Pokémon, allows users to search by name, and shows detailed Pokémon information in a modal.

## Technologies Used

### Frontend:
- React
- Redux Toolkit
- Axios
- React Router
- CSS (or any preprocessor like SCSS if needed)

### Backend:
- Node.js
- Express
- MongoDB (or another database of choice)
- Mongoose

## Setup Instructions

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   PORT=5100
   MONGO_URI=<your_mongodb_connection_string>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   The backend will be available at [http://localhost:5100](http://localhost:5100).

## Usage

1. Open the app in your browser at [http://localhost:3000](http://localhost:3000).
2. Use the search bar to find specific Pokémon by name.
3. Click on a Pokémon card to view its details in a modal.

## Features

- View a list of Pokémon fetched from the backend API.
- Search for Pokémon by name.
- View detailed information for a selected Pokémon.

## Folder Structure

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── PokemonCard.js
│   │   ├── SearchBar.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── DetailPage.js
│   ├── features/
│   │   ├── pokemonSlice.js
│   ├── store.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
```

### Backend
```
backend/
├── models/
│   ├── Pokemon.js
├── routes/
│   ├── pokemonRoutes.js
├── controllers/
│   ├── pokemonController.js
├── config/
│   ├── db.js
├── app.js
├── server.js
```

## API Endpoints

### Base URL:
```
http://localhost:5100/api/pokemon
```

### Endpoints:

1. **GET /api/pokemon**
   - Fetches all Pokémon.
   - Response:
     ```json
     [
       {
         "id": 1,
         "name": "Bulbasaur",
         "image": "<image_url>",
         "base_experience": 64,
         "height": 7,
         "weight": 69
       }
     ]
     ```

2. **GET /api/pokemon/:name**
   - Fetches a Pokémon by name.
   - Response:
     ```json
     {
       "id": 1,
       "name": "Bulbasaur",
       "image": "<image_url>",
       "base_experience": 64,
       "height": 7,
       "weight": 69
     }
     ```

## Future Enhancements

1. Add pagination to the Pokémon list.
2. Implement user authentication for personalized features.
3. Allow users to save favorite Pokémon.
4. Add additional Pokémon stats and abilities in the detail view.
5. Improve UI with animations and enhanced styling.

---

Feel free to reach out for support or contributions!

