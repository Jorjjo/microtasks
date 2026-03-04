type MoneyComponentProps = {
    currentMoney: Array<{
        banknots: string;
        value: number;
        number: string;
    }>;

    buttonHehe: Array<{
        title: 'all' | 'RUBLS' | 'Dollars';
        onButtonclick: () => void;
    }>;
};

export function MoneyComponent({
    currentMoney,
    buttonHehe,
}: MoneyComponentProps) {
    return (
        <>
            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    );
                })}
            </ul>
            {buttonHehe.map((item, index) => {
                return (
                    <button key={index} onClick={item.onButtonclick}>{item.title}</button>
                );
            })}
        </>
    );
}
