/* eslint-disable no-console */
import { useCallback, useReducer, useMemo } from "react";
import axios from "axios";
import { useMutation } from "react-query";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SETNAME":
      return { ...state, name: action.payload };
    case "SETEMAIL":
      return { ...state, email: action.payload };
    case "SETMESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = useCallback(
    (e) => {
      dispatch({ type: "SETNAME", payload: e.target.value });
    },
    [dispatch]
  );

  const handleEmailChange = useCallback(
    (e) => {
      dispatch({ type: "SETEMAIL", payload: e.target.value });
    },
    [dispatch]
  );

  const handleMessageChange = useCallback(
    (e) => {
      dispatch({ type: "SETMESSAGE", payload: e.target.value });
    },
    [dispatch]
  );

  const isFormFilled = useMemo(() => {
    return state.email !== "" && state.name !== "" && state.message !== "";
  }, [state.email, state.name, state.message]);

  const mutation = useMutation(
    (newMessage) =>
      axios.post(`${import.meta.env.VITE_REACT_APP_API}/v1/api/contactus`, newMessage),
    {
      onSuccess: (res) => {
        console.log(res.data.message);
      },
      onError: (error) => {
        console.error(error.message);
      },
    }
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      mutation.mutate({
        name: state.name,
        email: state.email,
        message: state.message,
      });
    },
    [state.name, state.email, state.message, mutation]
  );

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  if (mutation.isSuccess) {
    return (
      <div>
        <span>Query Submitted!</span>
      </div>
    );
  }

  return (
    <main>
      <h1>Contact Us Form</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={state.name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={state.email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={state.message}
          onChange={handleMessageChange}
        />
      </div>

      <button
        disabled={mutation.isLoading || !isFormFilled}
        style={{ cursor: !isFormFilled ? "not-allowed" : "pointer" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </main>
  );
};

export default Contact;
