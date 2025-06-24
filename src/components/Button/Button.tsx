import { IoCart } from "react-icons/io5";
import "./button.css";

type ButtonProps = {
  title: string;
  showIcon?: boolean;
};

function Button({ title, showIcon = true }: ButtonProps) {
  return (
    <button className="button">
      {showIcon && <IoCart />} {title}
    </button>
  );
}

export default Button;
