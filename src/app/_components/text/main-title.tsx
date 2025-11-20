type MainTitleProps = {
  text: string;
  position?: "left" | "center" | "right";
  styles?: string;
};

const MainTitle = ({ text, position = "left", styles }: MainTitleProps) => {
  const positionClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return (
    <h1 className={`text-5xl ${positionClasses[position]} ${styles}`}>
      {text}
    </h1>
  );
};

export default MainTitle;
