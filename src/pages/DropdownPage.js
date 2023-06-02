import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "First choice",
      value: "First choice",
    },
    {
      label: "Second choice",
      value: "Second choice",
    },
    {
      label: "Third choice",
      value: "Third choice",
    },
    {
      label: "Fourth choice",
      value: "Fourth choice",
    },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
