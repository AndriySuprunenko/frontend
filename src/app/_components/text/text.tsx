type TextProps = {
  text: string;
  position?: "left" | "center" | "right";
};

const Text = ({ text, position = "left" }: TextProps) => {
  const positionClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return <p className={`text-base ${positionClasses[position]}`}>{text}</p>;
};

export default Text;
