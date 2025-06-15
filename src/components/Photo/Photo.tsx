import { clsx } from "clsx";
import "./photo.css";

type PhotoProps = {
  url: string;
  isBlackAndWhite?: boolean;
};

function Photo({ url, isBlackAndWhite = false }: PhotoProps) {
  const styles = clsx("car-photo", {
    "car-photo--black-and-white": isBlackAndWhite,
  });

  return <img className={styles} src={url} alt="Photo" />;
}

export default Photo;
