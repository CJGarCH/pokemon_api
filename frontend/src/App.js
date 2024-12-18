import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Ensure this path matches your actual store file
import HomePage from "./pages/HomePage"; // Adjust the path to match your structure

const App = () => {
    return (
        <Provider store={store}> {/* Connects Redux store to the app */}
            <div className="App">
                <HomePage /> {/* Renders the main page of the application */}
            </div>
        </Provider>
    );
};

export default App;
