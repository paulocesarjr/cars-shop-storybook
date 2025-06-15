import "./App.css";
import type { Car } from "./types/Car";
import { cars } from "./data/cars";
import CarCard from "./components/CarCard/CarCard";

function App() {
  return (
    <>
      {cars.map((car: Car) => (
        <CarCard
          key={car.id}
          make={car.make}
          model={car.model}
          year={car.year}
          price={car.price}
          photo={car.photo}
        />
      ))}
    </>
  );
}

export default App;
