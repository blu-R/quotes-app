import React, { useState } from "react";
import quotes from "../../quotes.json";
import BtnNext from "../BtnNext/BtnNext";
import QuoteIcon from "../QuoteIcon/QuoteIcon";

import "./QuoteBox.styles.css";

const quotesLength = quotes.length;

function QuoteBox() {
    const [quote, setQuote] = useState(
        quotes[Math.floor(Math.random() * quotesLength)]
    );
    const [color, setColor] = useState("#000000");

    document.body.style.backgroundColor = color;

    const getQuote = () => {
        let number = Math.floor(Math.random() * quotesLength);
        setQuote(quotes[number]);
        setColor(color_generator());

        document.body.style.backgroundColor = color;
    };

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

    return (
        <div className="quote-container">
            <QuoteIcon size="5em" color={color} />
            <p style={{ color: color }} className="quote">
                {quote.quote}
            </p>
            <p style={{ color: color }} className="author">
                {quote.author}
            </p>
            <BtnNext fGetQuote={getQuote} size="3em" color={color} />
        </div>
    );
}

export default QuoteBox;
