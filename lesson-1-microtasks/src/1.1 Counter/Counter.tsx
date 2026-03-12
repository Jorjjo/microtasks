import { useState } from 'react';

export function Counter() {
    let [a, setA] = useState(0);
    const onClickHandler = () => {
        setA(++a);
    };

    const onClickResetHandler = () => {
        setA(0);
    };
    return (
        <div>
            <h2>Counter</h2>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickResetHandler}>0</button>
        </div>
    );
}
