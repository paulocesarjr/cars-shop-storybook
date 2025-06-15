import { IoCart } from "react-icons/io5";

type ButtonProps = {
  title: string;
  showIcon?: boolean;
};

function Button({ title, showIcon = true }: ButtonProps) {
  return (
    <button>
      {showIcon && <IoCart />} {title}
    </button>
  );
}

export default Button;
