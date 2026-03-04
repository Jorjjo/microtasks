type MoneyProps = {
    money: Array<Banknote>;
};

type Banknote = {
    banknots: string;
    value: number;
    /** уникальный id */
    number: string;
};

export function Money({ money }: MoneyProps) {
    return (
        <>
            <ul>
                {money.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
