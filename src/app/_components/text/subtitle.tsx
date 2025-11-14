type SubTitleProps = {
  text: string;
  position?: "left" | "center" | "right";
};

const SubTitle = ({ text, position = "left" }: SubTitleProps) => {
  const positionClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return <h3 className={`text-2xl ${positionClasses[position]}`}>{text}</h3>;
};

export default SubTitle;
