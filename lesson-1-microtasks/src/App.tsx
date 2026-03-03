import { useState } from 'react';
import './App.css';
import { CarsComponent } from './CarsComponent';

const topCars = [
    { manufacturer: 'BMW', model: 'm5cs', id: 1 },
    { manufacturer: 'Mercedes', model: 'e63s', id: 2 },
    { manufacturer: 'Audi', model: 'rs6', id: 3 },
];

function App() {
    let [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(++a);
    };

    const onClickResetHandler = () => {
        setA(0);
    };
    return (
        <div>
            <CarsComponent cars={topCars} />
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickResetHandler}>0</button>
        </div>
    );
}

export default App;
