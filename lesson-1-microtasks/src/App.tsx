import { useState } from 'react';
import './App.css';
import { Money } from './Money';
import { Cars } from './1.2.Map/Cars';

const topCars = [
    { manufacturer: 'BMW', model: 'm5cs', id: 1 },
    { manufacturer: 'Mercedes', model: 'e63s', id: 2 },
    { manufacturer: 'Audi', model: 'rs6', id: 3 },
];

function App() {
    type FilterType = 'all' | 'RUBLS' | 'Dollars';

    const money = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ];

    const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

    function onButtonclick(buttonName: FilterType) {
        setCurrentFilter(buttonName);
    }

    const filterdeMoney =
        currentFilter === 'all'
            ? money
            : money.filter((item) => item.banknots === currentFilter);

    const buttonHehe: Array<{
        title: 'all' | 'RUBLS' | 'Dollars';
        onButtonclick: () => void;
    }> = [
        {
            title: 'all',
            onButtonclick: () => onButtonclick('all'),
        },
        {
            title: 'RUBLS',
            onButtonclick: () => onButtonclick('RUBLS'),
        },
        {
            title: 'Dollars',
            onButtonclick: () => onButtonclick('Dollars'),
        },
    ];

    // -----------------------------------------//
    let [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(++a);
    };

    const onClickResetHandler = () => {
        setA(0);
    };
    return (
        <div>
            <Cars cars={topCars} />
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickResetHandler}>0</button>
            <Money money={filterdeMoney} />
            <MoneyFilter filters={buttonHehe} />
        </div>
    );
}

type MoneyFilterProps = {
    filters: Array<{
        title: 'all' | 'RUBLS' | 'Dollars';
        onButtonclick: () => void;
    }>;
};

export const MoneyFilter = ({ filters }: MoneyFilterProps) => {
    return filters.map((item, index) => {
        return (
            <button key={index} onClick={item.onButtonclick}>
                {item.title}
            </button>
        );
    });
};

export default App;
