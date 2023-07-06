import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import MainGood from "./MainGood";

const MainHome = () => {
  const [flag, setFlag] = useState(false);

  var check = document.getElementById("flagBox");

  useEffect(() => {
    if (check) {
      if (check.checked) {
        console.log("GOOD");
        setFlag(true);
      } else {
        console.log("BAD");
        setFlag(false);
      }
    }
  }, [check]);

  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  return (
    <div>
      <ProtectedRoute
        exact
        path="/user/Michael/Wicks"
        flag={flag}
        component={MainGood}
      />
    </div>
  );
};

export default MainHome;