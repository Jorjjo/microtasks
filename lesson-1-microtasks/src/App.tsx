import './App.css';
import { CarsComponent } from './CarsComponent';

const topCars = [
    { manufacturer: 'BMW', model: 'm5cs', id: 1 },
    { manufacturer: 'Mercedes', model: 'e63s', id: 2 },
    { manufacturer: 'Audi', model: 'rs6', id: 3 },
];

function App() {
    return (
        <>
            <CarsComponent cars={topCars} />
        </>
    );
}

export default App;
