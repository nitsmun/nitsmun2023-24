/* eslint-disable no-underscore-dangle */
import React, { useMemo, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/ContextProv";
import { fetchContactUsResponses } from "../../ReactQuery/Fetchers/SuperAdmin/GetContactUsResponses";

const ContactRes = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useContext(UserContext);
  const isAdmin = useMemo(() => {
    return Boolean(role === "admin" && isLoggedIn);
  }, [role, isLoggedIn]);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [navigate, isAdmin]);
  const queryKey = useMemo(() => ["contactUsData"], []);
  const { data, isLoading, error } = useQuery(queryKey, fetchContactUsResponses, {
    enabled: isAdmin,
  });

  const allResponses = data?.allResponses;
  useEffect(() => {
    document.title = "Contact Us Responses | NITSMUN";
  }, []);
  if (error) {
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <h1>Contact Us Responses ({allResponses?.length})</h1>
      <div>
        {allResponses.map((res) => {
          return (
            <div key={res?._id}>
              <h2>Name : {res?.name}</h2>
              <h4>
                Email : <a href={`mailto:${res?.email}`}>{res?.email}</a>
              </h4>
              <h4>Message : {res?.message}</h4>
              <h4>Contacted at: {res?.contactedAt}</h4>
              <hr />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ContactRes;
