type Car = {
    manufacturer: string;
    model: string;
    id: number;
};

type CarsProps = {
    cars: Array<Car>;
};

export const Cars = ({ cars }: CarsProps) => {
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
