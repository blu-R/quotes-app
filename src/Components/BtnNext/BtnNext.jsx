import * as React from "react";

function BtnNext({ fGetQuote, size, color }) {
    return (
        <a href="#" className="btnNext">
            <svg
                stroke={color}
                fill={color}
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={size}
                width={size}
                onClick={fGetQuote}
            >
                <path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z" />
            </svg>
        </a>
    );
}

export default BtnNext;
