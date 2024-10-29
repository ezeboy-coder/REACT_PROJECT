import { useState } from "react";
import Button from "./components/Button";
import Alerts from "./components/Alerts";
const alertTitle = "This Is An Alert!!!!!!!!!!!!!!!!!";

const App = () => {
  const [showTitle, closeTitle] = useState(false);
  return (
    <>
      {showTitle == true ? (
        <Alerts alertTitle={alertTitle} alertbtn={()=>closeTitle(false)} />
      ) : null}

      <Button
        title={showTitle == true ? "HIDE ALERT" : "SHOW ALERT"}
        color={showTitle==true ? "danger":"primary"}
        btnClicked={() => closeTitle(!showTitle)
        }
      />
    </>
  );
};

export default App;
