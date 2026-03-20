type Props = {
  value: boolean;
  onChange: (val: boolean) => void;
};

const Toggle = ({ value, onChange }: Props) => {
  return (
    <div
      onClick={() => onChange(!value)}
      style={{
        width: "50px",
        height: "24px",
        background: value ? "#4caf50" : "#ccc",
        borderRadius: "999px",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          background: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "2px",
          left: value ? "26px" : "2px",
          transition: "left 0.3s",
        }}
      />
    </div>
  );
};

export default Toggle;