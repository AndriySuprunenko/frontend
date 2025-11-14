type TitleProps = {
  text: string;
  position?: "left" | "center" | "right";
};

const Title = ({ text, position = "left" }: TitleProps) => {
  const positionClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return <h2 className={`text-3xl ${positionClasses[position]}`}>{text}</h2>;
};

export default Title;
