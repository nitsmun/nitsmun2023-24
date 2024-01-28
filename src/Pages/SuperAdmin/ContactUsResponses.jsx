/* eslint-disable no-console */
import React, { useMemo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { UserContext } from "../../Context/ContextProv";
import { fetchContactUsResponses } from "../../ReactQuery/Fetchers/SuperAdmin/GetContactUsResponses";

const ContactUsResponses = () => {
  const navigate = useNavigate;
  useEffect(() => {
    document.title = "Contact Us Responses | NITSMUN";
    if (role !== "superadmin") {
      navigate("/");
    }
  }, [navigate, role]);

  const { role, isLoggedIn } = useContext(UserContext);

  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "superadmin");
  }, [isLoggedIn, role]);

  const queryKey = useMemo(() => ["contactUsData"], []);

  const { data, error, isLoading } = useQuery(queryKey, fetchContactUsResponses, {
    enabled: isEnabled,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const responses = data?.allResponses;
  console.log(responses);
  return <div>ContactUsResponses</div>;
};

export default ContactUsResponses;
