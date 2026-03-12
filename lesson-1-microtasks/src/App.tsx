import './App.css';
import { Counter } from './1.1 Counter/Counter';
import { CarsApp } from './1.2.Map/CarsApp';
import { MoneyApp } from './1.5. Filter/MoneyApp';
import { InputApp } from './2.1 Input/InputApp';

function App() {
    return (
        <div className='main'>
            <Counter />
            <CarsApp />
            <MoneyApp />
            <InputApp />
        </div>
    );
}

export default App;
