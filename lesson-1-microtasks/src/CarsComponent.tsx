type Car = {
    manufacturer: string;
    model: string;
    id: number;
};

type CarsComponentProps = {
    cars: Array<Car>;
};

export const CarsComponent = ({ cars }: CarsComponentProps) => {
    return (
        <table>
            <thead>
                {cars.map((car) => {
                    return (
                        <tr key={car.id}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    );
                })}
            </thead>
        </table>
    );
};
