import Button from "../Button/Button";
import Photo from "../Photo/Photo";
import "./car-card.css";

type CarProps = {
  make: string;
  model: string;
  year: number;
  price: number;
  photo: string;
};

function CarCard({ model, make, year, price, photo }: CarProps) {
  return (
    <div className="car-card">
      <h3>{model}</h3>
      <Photo url={photo} />
      <ul className="car-details">
        <li>{make}</li>
        <li>{year}</li>
        <li>{price}</li>
      </ul>
      <Button title="Comprar" />
    </div>
  );
}

export default CarCard;
