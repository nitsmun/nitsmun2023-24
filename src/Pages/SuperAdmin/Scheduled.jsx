import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/ContextProv";

const Scheduled = () => {
  const { role } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role !== "superadmin") {
      navigate("/");
    }
  }, [navigate, role]);

  return (
    <main>
      <h1>Scheduled Account Deletion</h1>
    </main>
  );
};

export default Scheduled;
