import { useState } from 'react';
import { Money } from './Money';

export function MoneyApp() {
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

    function onButtonClick(buttonName: FilterType) {
        setCurrentFilter(buttonName);
    }

    const filterdeMoney =
        currentFilter === 'all'
            ? money
            : money.filter((item) => item.banknots === currentFilter);

    const buttonHehe: Array<{
        title: 'all' | 'RUBLS' | 'Dollars';
        onButtonClick: () => void;
    }> = [
        {
            title: 'all',
            onButtonClick: () => onButtonClick('all'),
        },
        {
            title: 'RUBLS',
            onButtonClick: () => onButtonClick('RUBLS'),
        },
        {
            title: 'Dollars',
            onButtonClick: () => onButtonClick('Dollars'),
        },
    ];

    return (
        <div>
            <Money money={filterdeMoney} />
            <MoneyFilter filters={buttonHehe} />
        </div>
    );
}

type MoneyFilterProps = {
    filters: Array<{
        title: 'all' | 'RUBLS' | 'Dollars';
        onButtonClick: () => void;
    }>;
};

const MoneyFilter = ({ filters }: MoneyFilterProps) => {
    return filters.map((item, index) => {
        return (
            <button key={index} onClick={item.onButtonClick}>
                {item.title}
            </button>
        );
    });
};
