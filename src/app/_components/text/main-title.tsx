type MainTitleProps = {
  text: string;
  position?: "left" | "center" | "right";
};

const MainTitle = ({ text, position = "left" }: MainTitleProps) => {
  const positionClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return <h1 className={`text-5xl ${positionClasses[position]}`}>{text}</h1>;
};

export default MainTitle;
