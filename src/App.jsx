import React, { useState } from 'react';
import './Calculator.css';

const BinaryCalculator = () => {
    const [binaryInputs, setBinaryInputs] = useState(Array(18).fill(''));
    const [decimalResult, setDecimalResult] = useState(Array(18).fill(''));

    const handleBinaryInputChange = (event, index) => {
        const value = event.target.value;
        const newBinaryInputs = [...binaryInputs];
        newBinaryInputs[index] = value;
        setBinaryInputs(newBinaryInputs);
    };

    const handleCalculate = () => {
        const decimal = parseInt(binaryInputs.join(''), 2);
        const binaryString = decimal.toString(2).padStart(18, '0');
        const newDecimalResult = binaryString.split('');
        setDecimalResult(newDecimalResult);
    };

    return (
        <div className="calculator-container">
            <h1 className="title">Prosty Kalkulator Binarny</h1>
            <p className="description">
                Wpisz liczby binarne i kliknij plus aby uzyskać wynik w dziesiętnym formacie.
            </p>
            <div className="input-container">
                <div className="input-wrapper">
                    <div className="input-label">Liczba binarna:</div>
                    <div className="input-row">
                        {binaryInputs.map((input, index) => (
                            <input
                                key={index}
                                type="text"
                                className="input-field"
                                value={input}
                                onChange={(event) => handleBinaryInputChange(event, index)}
                            />
                        ))}
                    </div>
                </div>
                <button className="calculate-button" onClick={handleCalculate}>
                    +
                </button>
            </div>
            <div className="result-container">
                <div className="result-label"></div>
                <div className="result">
                    {decimalResult.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            className="result-field"
                            value={digit}
                            readOnly
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const DecimalCalculator = () => {
    const [decimalInputs, setDecimalInputs] = useState(Array(18).fill(''));
    const [binaryResult, setBinaryResult] = useState(Array(18).fill(''));

    const handleDecimalInputChange = (event, index) => {
        const value = event.target.value;
        const newDecimalInputs = [...decimalInputs];
        newDecimalInputs[index] = value;
        setDecimalInputs(newDecimalInputs);
    };

    const handleCalculate = () => {
        const decimal = parseInt(decimalInputs.join(''), 10);
        const binaryString = decimal.toString(2).padStart(18, '0');
        const newBinaryResult = binaryString.split('');
        setBinaryResult(newBinaryResult);
    };

    return (
        <div className="calculator-container">
            <h1 className="title">Prosty Kalkulator Dziesiętny</h1>
            <p className="description">
                Wpisz liczby dziesiętne i kliknij w plusa aby uzyskać wynik w binarnym formacie.
            </p>
            <div className="input-container">
                <div className="input-wrapper">
                    <div className="input-label">Liczba dziesiętna:</div>
                    <div className="input-row">
                        {decimalInputs.map((input, index) => (
                            <input
                                key={index}
                                type="text"
                                className="input-field"
                                value={input}
                                onChange={(event) => handleDecimalInputChange(event, index)}
                            />
                        ))}
                    </div>
                </div>
                <button className="calculate-button" onClick={handleCalculate}>
                    +
                </button>
            </div>
            <div className="result-container">
                <div className="result-label"></div>
                <div className="result">
                    {binaryResult.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            className="result-field"
                            value={digit}
                            readOnly
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Calculator() {
    return (
        <div className="calculator-wrapper">
            <BinaryCalculator />
            <DecimalCalculator />
        </div>
    );
}
