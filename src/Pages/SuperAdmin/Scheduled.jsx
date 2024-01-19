/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/ContextProv";
import { fetchScheduledAccounts } from "../../ReactQuery/Fetchers/SuperAdmin/GetScheduledAccount";

const Scheduled = () => {
  const { role, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role !== "superadmin") {
      navigate("/");
    }
  }, [navigate, role]);

  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "superadmin");
  }, [isLoggedIn, role]);

  const queryKey = useMemo(() => ["scheduledAccountData"], []);

  const { data, error, isLoading } = useQuery(queryKey, fetchScheduledAccounts, {
    enabled: isEnabled,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const responses = data?.allDeletionScheduledAccounts;
  console.log(responses);

  return (
    <main>
      <h1>Scheduled Account Deletion</h1>
      {responses?.length === 0 && <h2>No accounts scheduled for deletion</h2>}
      {responses?.length > 0 &&
        responses?.map((item, index) => {
          return (
            <div key={item?._id}>
              <h2>{index + 1}</h2>
              <Link to={`/user/${item._id}`}>
                <p>{item?.email}</p>
              </Link>
            </div>
          );
        })}
    </main>
  );
};

export default Scheduled;
