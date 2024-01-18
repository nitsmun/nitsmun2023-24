import { useQuery } from "react-query";
import React, { useContext, useMemo } from "react";
import { UserContext } from "../../Context/ContextProv";
import { fetchAllCreatedAccounts } from "../../ReactQuery/Fetchers/SuperAdmin/GetAllSignups";

const AllAccounts = () => {
  const { role, isLoggedIn } = useContext(UserContext);

  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "superadmin");
  }, [isLoggedIn, role]);

  const queryKey = useMemo(() => ["allCreatedAccountData"], []);

  const { data, error, isLoading } = useQuery(queryKey, fetchAllCreatedAccounts, {
    enabled: isEnabled,
  });

  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return <div>AllAccounts</div>;
};

export default AllAccounts;
