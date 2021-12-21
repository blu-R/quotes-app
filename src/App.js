import React, { useState } from "react";
import "./App.css";
import quotes from "./quotes.json";

//COMPONENTS
import QuoteBox from "./Components/QuoteBox/QuoteBox";

const getIndex = (max) => Math.floor(Math.random() * max);
const color_generator = () => {
    let color_section = Math.floor(Math.random() / 0.33); // there are three section in full spectrum
    let transformed_hue = Math.acos(2 * Math.random() - 1) / 3.14; // transform so secondary colors would be as dominant as the primary colors
    let hue = 120 * color_section + 120 * transformed_hue;
    return (
        "hsl(" +
        hue +
        "," +
        (0.5 + Math.random() / 2) * 100 +
        "% ," +
        0.5 * 100 +
        "%)"
    );
};

function App() {
    const [quote, setQuote] = useState(quotes[getIndex(quotes.length)]);
    const [color, setColor] = useState(color_generator);

    document.body.style.backgroundColor = color;

    const getQuote = () => {
        setQuote(quotes[getIndex(quotes.length)]);
        setColor(color_generator());
    };

    return (
        <div className="main-container">
            <QuoteBox
                fGetQuote={getQuote}
                quote={quote.quote}
                author={quote.author}
                color={color}
            />
        </div>
    );
}

export default App;
