import "./App.css";
import type { Car } from "./types/Car";
import { cars } from "./data/cars";

function App() {
  return (
    <>
      {cars.map((car: Car) => (
        <div key={car.id} className="car">
          <h2>
            {car.make} {car.model}
          </h2>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
          <img src={car.photo} alt={`${car.make} ${car.model}`} />
        </div>
      ))}
    </>
  );
}

export default App;
