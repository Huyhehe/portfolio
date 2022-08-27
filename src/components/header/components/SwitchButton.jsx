import { Switch } from "@mui/material";
import { useState } from "react";

const SwitchButton = () => {
  const [checked, setChecked] = useState(false);
  const handleSwitch = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <>
      <div>
        <span>Themes</span>
        <Switch checked={checked} onChange={handleSwitch}></Switch>
      </div>
    </>
  );
};

export default SwitchButton;
