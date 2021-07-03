import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface TogleProps {
  handleChatFiltering: (isTrue: boolean) => void;
}

function Togle({ handleChatFiltering }: TogleProps) {
  const [state, setState] = useState({
    checkedB: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    handleChatFiltering(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="상담 중인 요청만 보기"
      />
    </div>
  );
}
export default Togle;
