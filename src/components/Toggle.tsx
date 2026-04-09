import { Form } from "react-bootstrap";

type Props = {
  value: boolean;
  onChange: (val: boolean) => void;
};

const Toggle = ({ value, onChange }: Props) => {
  return (
    <Form.Check
      type="switch"
      id="view-toggle"
      checked={value}
      onChange={(event) => onChange(event.target.checked)}
      label=""
      className="mb-0"
    />
  );
};

export default Toggle;
