import Image from "next/image";

type SliderProps = {
  href: string;
  alt: string;
};

const Slider = ({ href, alt }: SliderProps) => {
  return <Image src={href} alt={alt} />;
};

export default Slider;
