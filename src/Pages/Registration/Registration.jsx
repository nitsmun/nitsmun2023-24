/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import { useState, useMemo, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { toast } from "sonner";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Registration.module.scss";
import { UserContext } from "../../Context/ContextProv";
import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";
import Footer from "../../Components/Footer/Footer";

const FieldName = (props) => {
  return (
    <div className={styles.fieldName} style={{ width: `${props.width}` }}>
      <h1 className={styles.name}>{props.name}</h1>
      <h1
        className={styles.compulsory}
        style={{ visibility: `${props.compulsory === true ? "visible" : "hidden"}` }}
      >
        *
      </h1>
    </div>
  );
};

const Registration = () => {
  const [choiceOfReg, setChoiceOfReg] = useState("");
  const [isChoiceHidden, setIsChoiceHidden] = useState(false);
  const [isGroupRegistration, setIsGroupRegistration] = useState();
  const [regThroughInviteLink, setRegThroughInviteLink] = useState(false);
  const [grpNameFromLeader, setGrpNameFromLeader] = useState("");
  // const [grpMembers, setGrpMembers] = useState()
  const [searchMember, setSearchMember] = useState("");
  // const [accountExists, setAccountExists] = useState(false)
  const { grpLeaderEmail, memberEmail, uniqueToken, eventNameIn, grpName } = useParams();
  // console.log("choiceOfReg :", choiceOfReg)
  useEffect(() => {
    if (grpLeaderEmail && memberEmail && uniqueToken && eventNameIn && grpName) {
      setRegThroughInviteLink(true);
      setChoiceOfReg("group");
      setIsChoiceHidden(true);
      setIsGroupRegistration(true);
    }
  }, [eventNameIn, grpLeaderEmail, memberEmail, uniqueToken, grpName]);
  // console.log("isGroupRegistration:", isGroupRegistration);
  // console.log("regThroughInviteLink:", regThroughInviteLink)
  // console.log("grpLeaderEmail:", grpLeaderEmail);
  // console.log("memberEmail:", memberEmail);
  // console.log("uniqueToken:", uniqueToken);
  // console.log("eventNameIn:", eventNameIn);
  // console.log("grpName:", grpName);
  const { role, isLoggedIn } = useContext(UserContext);
  const [submitting, setSubmitting] = useState(false);

  const isStudentTrue = useMemo(() => {
    return Boolean(role === "client" && isLoggedIn);
  }, [role, isLoggedIn]);

  const profileKey = useMemo(() => ["profile"], []);
  const { data, error, isLoading } = useQuery(profileKey, fetchProfile, {
    enabled: isStudentTrue,
  });
  const navigate = useNavigate();

  // ! comment out before pushing to prod
  useEffect(() => {
    setTimeout(() => {
      if (memberEmail && data)
        if (data?.email !== memberEmail) {
          toast.error("This Invite link is not intended for you", {
            duration: 10000,
          });
          navigate("/applynow");
        }
    }, 5000);
  }, [memberEmail, data, navigate]);

  const isAdmin = useMemo(() => {
    return Boolean(role === "admin" && isLoggedIn);
  }, [role, isLoggedIn]);

  useEffect(() => {
    document.title = "Registration form | NITSMUN";
    if (!isStudentTrue) {
      navigate("/applynow");
      toast.error("You need to login first to register for the event", {
        duration: 10000,
      });
    }
    if (data?.isVerified === false) {
      navigate("/dashboard");
      toast.error("You need to verify your email first", {
        duration: 10000,
      });
    }

    if (isAdmin) {
      navigate("/dashboard");
    }
  }, [isStudentTrue, navigate, data?.isVerified, isAdmin]);

  const eventName = "Annual Conference 2024";

  const [payment, setPayment] = useState("");
  const [college, setCollege] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [previousMunExperience, setPreviousMunExperience] = useState("");
  const [committeePreference, setCommitteePreference] = useState([]);
  const [portfolioPreference, setPortfolioPreference] = useState([]);
  // console.log(portfolioPreference)
  const handleCommiteeSelection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCommitteePreference((prevCOmt) => [...prevCOmt, value]);
    } else {
      setCommitteePreference((prevComt) => prevComt.filter((comt) => comt !== value));
      if (value === "IB") {
        setIbPortfolio([]);
      } else if (value === "UNHRC") {
        setUnhrcPortfolio([]);
      } else if (value === "IPC") {
        setIpcPortfolio([]);
      } else if (value === "Mahabharat") {
        setMahaPortfolio([]);
      }
    }
  };

  const ibOptions = [
    "Prime minister",
    "Amit Shah",
    "Director of IB",
    "Director General, Central Reserve Police Force",
    "Director General, Central Industrial Security Force",
    "Director General, National Security Guard",
    "Director General, National Investigation Agency",
    "Secretary , RAW (Ravi Sinha, IPS)",
    "DGP UP Police",
    "ADGP UP Police",
    "Cabinet Secretary (Rajiv Gauba, IAS)",
    "Home Secretary (Ajay Kumar Bhalla, IAS)",
    "Foreign secretary",
    "Defence Secretary",
    "National Security Advisor",
    "National Cyber Security Coordinator",
    "Chairman NTRO",
    "Head of NIA",
    "DNSA",
    "Himanta Biswa Sarma",
    "Pramod Sawant",
    "Bhupendra Patel",
    "Manik Saha",
    "Pushkar Singh Dhami",
    "Yogi Adityanath",
  ];

  const unhrcOptions = [
    "Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Bangaldesh",
    "Belgium",
    "Bolivia",
    "Brazil",
    "Burkina Faso",
    "Canada",
    "Chile",
    "China",
    "Democratic Republic of Congo",
    "Denmark",
    "France",
    "Germany",
    "Greece",
    "India",
    "Iran",
    "Iraq",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kuwait",
    "Libya",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Netherlands",
    "Nigeria",
    "Pakistan",
    "Palestine",
    "Poland",
    "Qatar",
    "Russian Federation",
    "Saudi Arabia",
    "Senegal",
    "South Africa",
    "South Korea",
    "Spain",
    "Srilanka",
    "Sudan",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States Of America",
    "Uruguay",
    "Vietnam",
  ];

  const ipcOptions = [
    "Al-Jazeera",
    "Australian Broadcasting Corporation",
    "BBC",
    "DAWN",
    "Reuters",
    "The Guardian",
    "The Hindu",
    "The Independent",
    "The Indian Express",
    "The Spectator",
    "The Washington Post",
    "Xinhua News Agency",
  ];

  const mahaOptions = [
    "Abhimanyu",
    "Arjuna",
    "Bhima",
    "Chekitana",
    "Dhrishtadyumna",
    "Dhrishtaketu",
    "Draupadi",
    "Drupada",
    "Ghatotkacha",
    "Iravan",
    "Kaikeyi",
    "Krishna",
    "Kunti",
    "Madri",
    "Malaydhwaja",
    "Nakula",
    "Sahadeva",
    "Satyaki",
    "Shalya",
    "Shankha",
    "Shikhandi",
    "Sreniman",
    "Uttara",
    "Virata",
    "Yudhishthira",
    "Alambusha",
    "Ashwatthama",
    "Bahlika",
    "Bhagadatta",
    "Bhishma",
    "Brihadbala",
    "Dhritarashtra",
    "Dronacharya",
    "Durmukha",
    "Duryodhana",
    "Dushasana",
    "Dushkarna",
    "Gandhari",
    "Jarasandha",
    "Jayadratha",
    "Karna",
    "Kripacharya",
    "Laxman Kumara",
    "Shakuni",
    "Shishupala",
    "Sudakshina",
    "Susharma",
    "Uluka",
    "Vikarna",
    "Vrishaketu",
    "Vrishasena",
    "Shalya",
    "Vidur",
    "Yuyutsu",
  ];

  const [ibPortfolio, setIbPortfolio] = useState([]);
  const [unhrcPortfolio, setUnhrcPortfolio] = useState([]);
  const [mahaPortfolio, setMahaPortfolio] = useState([]);
  const [ipcPortfolio, setIpcPortfolio] = useState([]);

  useEffect(() => {
    setPortfolioPreference([
      ...ibPortfolio,
      ...unhrcPortfolio,
      ...mahaPortfolio,
      ...ipcPortfolio,
    ]);
  }, [ibPortfolio, unhrcPortfolio, mahaPortfolio, ipcPortfolio]);

  const handleSelect = (event) => {
    const { value } = event.target;
    if (ibPortfolio.length >= 3) {
      setIbPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setIbPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleSelectIpc = (event) => {
    const { value } = event.target;
    if (ipcPortfolio.length >= 3) {
      setIpcPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setIpcPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleSelectUnhrc = (event) => {
    const { value } = event.target;
    if (unhrcPortfolio.length >= 3) {
      setUnhrcPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setUnhrcPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleSelectMaha = (event) => {
    const { value } = event.target;
    if (mahaPortfolio.length >= 3) {
      setMahaPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setMahaPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  useEffect(() => {
    if (committeePreference?.length > 3) {
      toast("Please select 1-3 committees");
      setCommitteePreference([]);
      setIbPortfolio([]);
      setUnhrcPortfolio([]);
      setIpcPortfolio([]);
      setMahaPortfolio([]);
      setPortfolioPreference([]);
    }

    if (portfolioPreference?.length > 9) {
      toast("You can select maximum of 9 Portfolios");
      setPortfolioPreference([]);
      setIbPortfolio([]);
      setUnhrcPortfolio([]);
      setIpcPortfolio([]);
      setMahaPortfolio([]);
    }
  }, [committeePreference, portfolioPreference]);

  const handleImgChange = (base64) => {
    setPayment(base64);
  };

  const ifNitsguy = {
    eventName,
    payment,
    previousMunExperience,
    committeePreference,
    portfolioPreference,
    isGroupRegistration,
  };

  const otherGuy = {
    eventName,
    payment,
    previousMunExperience,
    committeePreference,
    portfolioPreference,
    college,
    accomodation,
    isGroupRegistration,
  };

  const [grpTeamDetailsFromApi, setGrpTeamDetailsFromApi] = useState();
  useEffect(() => {
    if (data) {
      const filteredTeamGrpDetails = data?.sendInviteToWhom?.filter(
        (item) => item.eventName === eventName && item.grpName === grpNameFromLeader
      );
      setGrpTeamDetailsFromApi(filteredTeamGrpDetails[0]);
    }
  }, [data, grpNameFromLeader]);

  const [teamMembersFromApi, setTeamMembersFromApi] = useState();
  useEffect(() => {
    if (data) {
      const filteredConfirmedTeamMembers = data?.registrationInvite?.filter(
        (item) => item.eventName === eventName && item.grpName === grpNameFromLeader
      );
      setTeamMembersFromApi(filteredConfirmedTeamMembers[0]?.grpMembers);
    }
    // console.log(teamMembersFromApi)
  }, [data, grpNameFromLeader]);

  const [teamGrpMatch, setTeamGrpMatch] = useState(false);
  useEffect(() => {
    if (data && grpTeamDetailsFromApi)
      if (
        grpNameFromLeader.toLowerCase() === grpTeamDetailsFromApi.grpName &&
        grpTeamDetailsFromApi.eventName === eventName
      ) {
        setTeamGrpMatch(true);
      } else {
        setTeamGrpMatch(false);
      }
  }, [data, grpNameFromLeader, grpTeamDetailsFromApi]);

  const commonPayload =
    data?.isStudentOfNITS === true
      ? ifNitsguy
      : data?.isStudentOfNITS === false
      ? otherGuy
      : null;
  // additional all 4 params
  // grpLeaderEmail, memberEmail, uniqueToken, eventNameIn, grpName
  const payLoadForInvitedIndividualRegistration = {
    ...commonPayload,
    grpName,
    eventNameIn,
    memberEmail,
    grpLeaderEmail,
    inviteToken: uniqueToken,
    isGroupRegistration,
  };
  // change payment: to any string
  // console.log("payLoadForInvitedIndividualRegistration:", payLoadForInvitedIndividualRegistration)
  // useEffect(() => {
  //   setGrpMembers()
  // }, [])
  const payloadForGrpLeader = {
    ...commonPayload,
    grpName: grpNameFromLeader,
    grpMembers: teamMembersFromApi,
    isGroupRegistration,
  };

  const payload =
    regThroughInviteLink === true
      ? payLoadForInvitedIndividualRegistration
      : regThroughInviteLink === false && isGroupRegistration === true
      ? payloadForGrpLeader
      : regThroughInviteLink === false && isGroupRegistration === false
      ? commonPayload
      : null;
  // console.log("teamMembersFromApi : ", teamMembersFromApi)
  // console.log(payload)
  // console.log(regThroughInviteLink)
  // console.log(isButtonEnabled)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // console.log(payload)
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_API}/reg/yp`, payload, {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.message === "Event registration completed") {
            toast(
              "Event registration completed, Kindly Check email for the Confirmation message",
              {
                duration: 10000,
              }
            );
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 2500);
          }
        });
    } catch (ee) {
      if (ee.response) {
        switch (ee.response.data.error) {
          case "Please fill all required fields":
            toast("Please fill all required fields");
            break;
          case "invalid committee selection":
            toast("invalid committee selection");
            break;
          case "invalid portfolio selection":
            toast("invalid portfolio selection");
            break;
          case "Unauthorized":
            toast("Unauthorized");
            break;
          case "User not found":
            toast("User not found");
            break;
          case "Signup with this email for the event already exists":
            toast("Signup with this email for the event already exists");
            break;
          case "You need to verify your email first":
            toast("You need to verify your email first");
            break;
          case "Admins and SuperAdmins are not allowed to register for an event":
            toast("Admins and SuperAdmins are not allowed to register for an event");
            break;
          case "Something went wrong on the server side":
            toast("Something went wrong on the server side");
            break;
          case "grpName is missing":
            toast.error("grpName is missing");
            break;
          case "Minimum 1 member is required for group registration":
            toast.error("Minimum 1 member is required for group registration");
            break;
          case "You have already registered for this event":
            toast.error("You have already registered for this event");
            break;
          case "fill all fields":
            toast.error("fill all fields");
            break;
          case "not verified, so can't register":
            toast.error("not verified, so can't register");
            break;
          case "where are the details":
            toast.error("where are the invite details");
            break;
          case "Team Leader not found":
            toast.error("Team Leader not found");
            break;
          case "Team Member not found":
            toast.error("Team Member not found");
            break;
          case "Invite link not found":
            toast.error("Invite link not found");
            break;
          case "Invalid token":
            toast.error("Invalid token");
            break;
          case "You have already accepted the invite":
            toast.error("You have already accepted the invite");
            break;
          default:
            // if (error.includes("User with email")) {
            //   const email = error.match(/User with email (.*) not found/)[1];
            //   toast.error(`User with email ${email} not found`);
            // } else if (error.includes("has not verified their email")) {
            //   const email = error.match(/email (.*) has not verified their email/)[1];
            //   toast.error(`error ${email} has not verified their email`);
            // }
            // // else if()
            // else {
            //   toast("Something went wrong");
            //   console.error(ee);
            //   break;
            // }
            toast("Something went wrong");
            console.error(ee);
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  // console.log("isGroupRegistration :", isGroupRegistration)
  // console.log("regThroughInviteLink : ", regThroughInviteLink)
  const isButtonEnabled = useMemo(() => {
    // this is for individual registration with invite link
    if (regThroughInviteLink === true) {
      if (data?.isStudentOfNITS === true) {
        return Boolean(
          previousMunExperience &&
            portfolioPreference?.length > 0 &&
            committeePreference?.length > 0 &&
            grpLeaderEmail &&
            memberEmail &&
            uniqueToken &&
            eventNameIn &&
            grpName
        );
      }
      if (data?.isStudentOfNITS === false) {
        return Boolean(
          previousMunExperience &&
            portfolioPreference?.length > 0 &&
            committeePreference?.length > 0 &&
            college &&
            accomodation &&
            grpLeaderEmail &&
            memberEmail &&
            uniqueToken &&
            eventNameIn &&
            grpName
        );
      }
    }

    // this is for group leader registration
    if (isGroupRegistration === true && regThroughInviteLink === false) {
      if (data?.isStudentOfNITS === false) {
        return Boolean(
          payment &&
            previousMunExperience &&
            college &&
            portfolioPreference?.length > 0 &&
            committeePreference?.length > 0 &&
            accomodation &&
            grpNameFromLeader &&
            teamMembersFromApi?.length > 1
        );
      }
      if (data?.isStudentOfNITS === true) {
        return Boolean(
          payment &&
            previousMunExperience &&
            portfolioPreference?.length > 0 &&
            committeePreference?.length > 0 &&
            grpNameFromLeader &&
            teamMembersFromApi?.length > 1
        );
      }
    }

    // this is for individual registration without invite link
    if (
      regThroughInviteLink === false &&
      isGroupRegistration === false &&
      data?.isStudentOfNITS === false
    ) {
      return Boolean(
        payment &&
          previousMunExperience &&
          college &&
          portfolioPreference?.length > 0 &&
          committeePreference?.length > 0 &&
          accomodation
      );
    }
    return Boolean(
      payment &&
        previousMunExperience &&
        portfolioPreference?.length > 0 &&
        committeePreference?.length > 0
    );
  }, [
    payment,
    previousMunExperience,
    college,
    portfolioPreference,
    committeePreference,
    data?.isStudentOfNITS,
    accomodation,
    eventNameIn,
    grpName,
    grpLeaderEmail,
    memberEmail,
    uniqueToken,
    regThroughInviteLink,
    isGroupRegistration,
    grpNameFromLeader,
    teamMembersFromApi,
  ]);
  // console.log(teamMembersFromApi?.length)
  // console.log(isButtonEnabled)
  const isGoNextBtnEnabled = useMemo(() => {
    return Boolean(choiceOfReg);
  }, [choiceOfReg]);
  // console.log(isGoNextBtnEnabled)
  const handleNextStepOfReg = (e) => {
    e.preventDefault();
    setIsChoiceHidden(true);
    if (choiceOfReg === "group") {
      setIsGroupRegistration(true);
    } else if (choiceOfReg === "individual") {
      setIsGroupRegistration(false);
    }
  };

  // console.log(data)
  // useEffect(() => {
  //   try {
  //     const doesAccountExists = async () => {
  //       await axios.get(`${import.meta.env.VITE_REACT_APP_API}/accounttest/${searchMember}`, {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get("authToken")}`,
  //           "Content-Type": "application/json",
  //         },
  //       }).then((res) => {
  //         if (res.data.message === "accounts exists") {
  //           setAccountExists(true)
  //         }
  //         else if (res.data.message === "no account found") {
  //           setAccountExists(false)
  //         }
  //         else if (res.data.message === "not the correct email format") {
  //           setAccountExists(false)
  //         } else if (res.data.message === "Email is required") {
  //           setAccountExists(false)
  //         } else if (res.data.message === "verify your email first") {
  //           setAccountExists(false)
  //         }
  //       })
  //     }
  //     // doesAccountExists()
  //   } catch (errr) {
  //     if (errr.response) {
  //       switch (errr.response.data.error) {
  //         case "Internal Server Error":
  //           toast.error("Internal Server Error")
  //           break
  //         default:
  //           toast.error("Something went wrong")
  //           break
  //       }
  //     }
  //   }
  // }, [searchMember])

  const [sendingInvite, setSendingInvite] = useState(false);
  const isSendInviteButtonEnabled = useMemo(() => {
    return Boolean(
      searchMember &&
        eventName &&
        grpNameFromLeader &&
        searchMember.includes("@") &&
        searchMember.includes(".")
    );
  }, [searchMember, eventName, grpNameFromLeader]);
  // console.log(isSendInviteButtonEnabled)
  const handleSendInvite = async (e) => {
    e.preventDefault();
    setSendingInvite(true);
    try {
      await axios
        .post(
          `${import.meta.env.VITE_REACT_APP_API}/sendinvite`,
          { email: searchMember, eventName, grpName: grpNameFromLeader },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.message === "invite link sent sucessfully") {
            toast.success("invite link sent sucessfully", {
              duration: 7500,
            });
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "email required to send invite to join team":
            toast.error("email required to send invite to join team");
            break;
          case "event name required to send invite to join team":
            toast.error("event name required to send invite to join team");
            break;
          case "grp name required to send invite to join team":
            toast.error("grp name required to send invite to join team");
            break;
          case "grpLeader can't be the member":
            toast.error("grpLeader can't be the member");
            break;
          case "User not found, signup first":
            toast.error("User not found, ask them to signup first");
            break;
          case "something went wrong":
            toast.error("something went wrong, server error");
            break;
          case "whoSendTheInvite User not found, signup first":
            toast.error("whoSendTheInvite User not found, signup first");
            break;
          case "user has already registered for the event":
            toast.error("user has already registered for the event");
            break;
          case "user not verified, ask them to verify their email first":
            toast.error("user not verified, ask them to verify their email first");
            break;
          default:
            toast.error("Something went wrong");
            console.error(err);
            break;
        }
      }
    } finally {
      setSendingInvite(false);
    }
  };

  // const [pricing, setPricing] = useState(399);
  // useEffect(() => {
  //   if (data && teamMembersFromApi) {
  //     if (teamMembersFromApi?.length > 1) {
  //       setPricing("349 for each member");
  //     } else if (teamMembersFromApi?.length > 5) {
  //       setPricing("250 for each member");
  //     }
  //   }
  // }, [data, teamMembersFromApi]);
  // console.log(teamMembersFromApi?.length)

  const grandTotalPricing = 349 * (teamMembersFromApi?.length + 1);

  // const handleOpenInNewTab = (e) => {
  //   e.preventDefault();
  //   const imageUrl = `${payment}`;
  //   window.open(imageUrl, '_blank');
  // };

  // const handleDeleteTheUploadedPayment = (e) => {
  //   e.preventDefault();
  //   setPayment("");
  // };
  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log(committeePreference)
  // console.log(portfolioPreference)
  // console.log(accomodation)
  // console.log(data?.sendInviteToWhom[0]?.eventName)
  // console.log(eventName)
  // console.log(data?.sendInviteToWhom[0]?.grpName)
  // console.log(grpNameFromLeader)

  // console.log(teamMembersFromApi[0].grpMembers)
  return (
    <div>
      <Navbar page="REGISTRATION" />
      {isChoiceHidden === false && (
        <main id={styles.choiceregis}>
          <h1>Do you want to make Individual Registration or Group Registration?</h1>
          <p>(There will be discounts in the pricing if you register in a group)</p>
          <main>
            <div>
              <input
                type="radio"
                id="choice"
                value="group"
                checked={choiceOfReg === "group"}
                onChange={(e) => setChoiceOfReg(e.target.value)}
              />
              <label htmlFor="choice">
                Group Registration (group leader select this)
              </label>
            </div>
            <div id={styles.moretoplabel}>
              <input
                type="radio"
                id="choice"
                value="individual"
                checked={choiceOfReg === "individual"}
                onChange={(e) => setChoiceOfReg(e.target.value)}
              />
              <label htmlFor="choice">Individual Registration</label>
            </div>
            <button
              disabled={!isGoNextBtnEnabled}
              style={{ cursor: !isGoNextBtnEnabled ? "not-allowed" : "pointer" }}
              onClick={handleNextStepOfReg}
            >
              Next
            </button>
          </main>

          <main id={styles.imporantforgrp}>
            <h4>Important instructions related to Group Registration:</h4>
            <ul>
              <li>
                Form a group of at least{" "}
                <span id={styles.focusedbold}>3 individuals (including team leader)</span>{" "}
                who will register together. There is a discounted rate available for group
                registrations, making it advisable to register for Annual Conference 2024
                as a group.
              </li>
              <li>
                Designate a group leader (with no specified priorities or additional
                advantages); anyone within the group can assume this role. Instruct the
                chosen leader to opt for group registration, input a group name, and send
                invitations to the members. Invited members will receive an invitation
                link via email, and they should utilize this link to register and avail of
                the discount.
              </li>
              <li>
                Say, if you invite 3 members and 2 of them successfully register for the
                annual conference, the discount will be applied based on the number of
                members who registered for the event through your invitation link.
              </li>
              <li>
                Group members do not need to pay any fees; only the group leader is
                required to pay fees for the entire group.
              </li>
            </ul>

            <h4>Functionality of a group leader:</h4>
            <ul>
              <li>He/She will send invites to the group members.</li>
              <li>
                Ensure that the invited member registers for the annual conference using
                the provided invite link to secure their spot within the group.
              </li>
              <li>The group leader will pay the fees for the whole group.</li>
              <li style={{ color: "red" }}>
                After all group members have completed their registrations, the group
                leader must finalise the process by registering for the event using the
                same group name that was provided when sending the invites.
              </li>
            </ul>
          </main>
        </main>
      )}

      {/* individual registration */}
      {isGroupRegistration === false && (
        <>
          <h1 className={styles.mainHeading}>INDIVIDUAL REGISTRATION</h1>
          <div className={styles.regCont}>
            <div className={styles.heading}>
              <div className={styles.textCont}>
                <h1 className={styles.title}>NITSMUN 2024 Online Registration Form</h1>
                <h4 className={styles.tagline}>
                  Please fill in the form below. We&apos;ll contact you as soon as
                  possible.
                </h4>
              </div>
              <div className={styles.logoCont}>
                <img
                  alt="logo loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702639587/nitsmun/nitsmun_logo_2_np5mtk.png"
                  className={styles.logo}
                />
              </div>
            </div>
            <form className={styles.form}>
              <div className={`${styles.partitions} ${styles.prevExp}`}>
                <FieldName compulsory name="Previous MUN experiences" />
                <textarea
                  value={previousMunExperience}
                  onChange={(e) => {
                    setPreviousMunExperience(e.target.value);
                  }}
                  className={styles.inputBox}
                ></textarea>
              </div>

              {data?.isStudentOfNITS === false && (
                <div className={`${styles.partitions} ${styles.prevExp}`}>
                  <FieldName compulsory name="Your College Name" />
                  <textarea
                    value={college}
                    onChange={(e) => {
                      setCollege(e.target.value);
                    }}
                    className={styles.inputBox}
                  ></textarea>
                </div>
              )}

              <div className={`${styles.partitions} ${styles.committee}`}>
                {/* Committee Preferences */}
                <FieldName compulsory name="Committee Preferences" />

                <div className={styles.partitionChild}>
                  <h6 className={styles.disclaimer}>
                    Chose any three committees in order of preference :
                  </h6>

                  <div className={styles.inputCont}>
                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 1: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="UNHRC"
                          checked={committeePreference.includes("UNHRC")}
                          onChange={handleCommiteeSelection}
                        />
                        UNHRC
                      </label>
                    </div>
                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 2: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="IB"
                          checked={committeePreference.includes("IB")}
                          onChange={handleCommiteeSelection}
                        />
                        IB
                      </label>
                    </div>
                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 3: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="Mahabharat"
                          checked={committeePreference.includes("Mahabharat")}
                          onChange={handleCommiteeSelection}
                        />
                        Hastinapur Special Council
                      </label>
                    </div>

                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 4: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="IPC"
                          checked={committeePreference.includes("IPC")}
                          onChange={handleCommiteeSelection}
                        />
                        IPC
                      </label>
                    </div>
                  </div>

                  {/* Portfoilio preference */}
                  <FieldName compulsory name="Portfolio Preferences" />

                  {/* <div className={styles.inputCont}>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 1: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 1"
                      checked={portfolioPreference.includes("Portfolio 1")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 1
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 2: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 2"
                      checked={portfolioPreference.includes("Portfolio 2")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 2
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 3: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 3"
                      checked={portfolioPreference.includes("Portfolio 3")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 3
                  </label>
                </div>

                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 4: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 4"
                      checked={portfolioPreference.includes("Portfolio 4")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 4
                  </label>
                </div>
              </div> */}

                  <div id={styles.flex}>
                    {/* IPC PORTFOLIO */}
                    {committeePreference.includes("IPC") && (
                      <main id={styles.maxoptionwidth}>
                        <p>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                            IPC
                          </span>{" "}
                          : (you can select max 3 portfolios for each Committee)
                        </p>
                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelectIpc}
                            value={ipcPortfolio}
                            // size={ipcOptions.length}
                          >
                            {ipcOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label
                              multiple
                              onClick={handleSelectIpc}
                              value={ipcPortfolio}
                            >
                              {ipcOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              IPC
                            </span>
                            :
                            {ipcPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {ipcPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}

                    {/* MAHABhARAT PORTFOLIO */}
                    {committeePreference.includes("Mahabharat") && (
                      <main id={styles.maxoptionwidth}>
                        <p>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                            Hastinapur Special Council
                          </span>{" "}
                          : (you can select max 3 portfolios for each Committee)
                        </p>
                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelectMaha}
                            value={mahaPortfolio}
                            // size={mahaOptions.length}
                          >
                            {mahaOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label
                              multiple
                              onClick={handleSelectMaha}
                              value={mahaPortfolio}
                              // size={mahaOptions.length}
                            >
                              {mahaOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              Hastinapur Special Council
                            </span>{" "}
                            :{" "}
                            {mahaPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {mahaPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}
                    {/* IB PORTFOLIO */}
                    {committeePreference.includes("IB") && (
                      <main id={styles.maxoptionwidth}>
                        <p id={styles.portfoliotitle}>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>IB</span>{" "}
                          : (you can select max 3 portfolios for each Committee){" "}
                        </p>

                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelect}
                            value={ibPortfolio}
                            // size={ibOptions.length}
                          >
                            {ibOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label multiple onClick={handleSelect} value={ibPortfolio}>
                              {ibOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              IB
                            </span>
                            :
                            {ibPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {ibPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}

                    {/* UNHRC PORTFOLIO */}
                    {committeePreference.includes("UNHRC") && (
                      <main id={styles.maxoptionwidth}>
                        <p>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                            UNHRC
                          </span>{" "}
                          : (you can select max 3 portfolios for each Committee){" "}
                        </p>
                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelectUnhrc}
                            value={unhrcPortfolio}
                          >
                            {unhrcOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label
                              multiple
                              onClick={handleSelectUnhrc}
                              value={unhrcPortfolio}
                              className={styles.limitedheight}
                            >
                              {unhrcOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              UNHRC
                            </span>
                            :
                            {unhrcPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {unhrcPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}
                  </div>

                  <div className={styles.payment}>
                    <FieldName compulsory name="Payment" />
                    <div className={styles.payCont}>
                      <p className={styles.p}>
                        To participate in the NITSMUN Annual Conference 2024, a
                        registration fee of Rs 399 is to be paid by every delegate.
                      </p>
                      <div className={styles.payInfoMaster}>
                        <div className={styles.paymentInfoCont}>
                          <div className={styles.paymentInfo}>
                            <h1 className={styles.h1}>
                              <span className={`${styles.h1} ${styles.bolded}`}>
                                Account Number:
                              </span>
                              3263 01 0000 4144
                            </h1>

                            <h1 className={styles.h1}>
                              <span className={`${styles.h1} ${styles.bolded}`}>
                                IFSC:
                              </span>
                              BARB0MENGRO
                            </h1>
                            <h1 className={styles.h1}>
                              <span className={`${styles.h1} ${styles.bolded}`}>
                                UPI ID:
                              </span>
                              marufpadaya@barodampay , marufpadaya786@okaxis
                            </h1>
                            {/* <span
                          className={`${styles.h1} ${styles.bolded}`}
                          style={{ color: "#000000" }}
                        >
                          Scan QR code to pay :
                        </span> */}
                          </div>

                          <div className={styles.paymentInfo}>
                            <h1 className={styles.h1}>
                              <span className={`${styles.h1} ${styles.bolded}`}>
                                Account Holder&apos;s Name:
                              </span>
                              Maruf A Kadar Padaya
                            </h1>

                            <h1 className={styles.h1}>
                              <span className={`${styles.h1} ${styles.bolded}`}>Or,</span>
                              Scan the QR code given below :
                            </h1>
                          </div>

                          <div id={styles.qrcodehldr}>
                            <img
                              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706533667/WhatsApp_Image_2024-01-29_at_18.25.22_oaxkqa.jpg"
                              alt=""
                            />
                          </div>
                          <div className={styles.screenshot}>
                            <div>
                              Insert screenshot of the payment (size should be less than
                              500KB) * :
                            </div>
                            <FileBase64
                              multiple={false}
                              onDone={({ base64, file }) => {
                                if (
                                  (file.type === "image/png" ||
                                    file.type === "image/jpeg" ||
                                    file.type === "image/jpg" ||
                                    file.type === "image/webp" ||
                                    file.type === "image/avif") &&
                                  file.size <= 500 * 1024
                                ) {
                                  handleImgChange(base64);
                                } else {
                                  toast(
                                    "Invalid file type or image is greater than 500KB"
                                  );
                                  setPayment("");
                                }
                              }}
                            />
                          </div>
                        </div>

                        {/* <div>
                      <img
                        alt="logo loading..."
                        src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702679499/Rickrolling_QR_code_1_bic0zd.png"
                      />
                    </div> */}
                      </div>

                      {data?.isStudentOfNITS === false && (
                        <>
                          <FieldName
                            compulsory
                            name="Do you want to avail the accomodation facility?"
                          />
                          <h6>
                            Hospitality fee: Rs. 1500 (Note: Hospitality fee includes
                            accommodation, access to concerts and other events under
                            Incandescence 2024)
                          </h6>
                          <main id={styles.extramarginaccom}>
                            <div>
                              <label className="radioinpt">
                                <input
                                  type="radio"
                                  name="accomodation"
                                  value="Yes"
                                  checked={accomodation === "Yes"}
                                  onChange={(event) => {
                                    setAccomodation(event.target.value);
                                  }}
                                />
                                Yes
                              </label>
                            </div>

                            <div>
                              <label className="radioinpt">
                                <input
                                  type="radio"
                                  name="accomodation"
                                  value="No"
                                  checked={accomodation === "No"}
                                  onChange={(event) => {
                                    setAccomodation(event.target.value);
                                  }}
                                />
                                No
                              </label>
                            </div>
                          </main>
                        </>
                      )}

                      {/* Show the uplaoded photo */}
                      {payment && (
                        <main id={styles.maindivpreviewphto}>
                          <p>Uploaded Payment photo:</p>
                          <div id={styles.uploadedimgpreview}>
                            <img src={payment} alt="" />
                          </div>
                        </main>
                      )}
                      {payment && (
                        <p id={styles.texttoselectdiff}>
                          &quot;Click again on Choose file button to select different
                          photo&quot;
                        </p>
                      )}

                      {/* submit button  */}
                      <div className={styles.subCont}>
                        <input
                          type="submit"
                          // value={submitting ? "Submitting..." : "Submit"}
                          value="Registration closed"
                          // disabled={submitting || !isButtonEnabled}
                          disabled
                          style={{
                            cursor:
                              submitting || !isButtonEnabled ? "not-allowed" : "pointer",
                            opacity: submitting || !isButtonEnabled ? "0.5" : "1",
                          }}
                          onClick={handleSubmit}
                          className={styles.submitBtn}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contactInfoCont} id={styles.columnflex}>
                <h2 className={styles.bolded}>For any general queries contact:</h2>
                <h2 className={styles.normal}>1. Ronak Jain (+91 84028 22820)</h2>
                <h2 className={styles.normal}>2. Aditi (+91 84865 00973)</h2>
              </div>
              {/* <div className={styles.contactInfoCont} id={styles.columnflex}>
                <h2 className={styles.bolded}>For any form related queries contact:</h2>
                <h2 className={styles.normal}>1. Aditya (+91 8210610167)</h2>
                <h2 className={styles.normal}>2. Ankit (+91 88129 59563)</h2>
                <h2 className={styles.normal}>3. Dorothy (+91 81330 72305)</h2>
              </div> */}
            </form>
          </div>
        </>
      )}

      {isGroupRegistration === true && (
        <>
          {regThroughInviteLink === true && (
            <h1 className={styles.mainHeading}>
              {" "}
              GROUP MEMBER REGISTRATION (INVITE LINK)
            </h1>
          )}

          {regThroughInviteLink === false && (
            <h1 className={styles.mainHeading}> GROUP LEADER REGISTRATION</h1>
          )}

          <div className={styles.regCont}>
            <div className={styles.heading}>
              <div className={styles.textCont}>
                <h1 className={styles.title}>NITSMUN 2024 Online Registration Form</h1>
                <h4 className={styles.tagline}>
                  Please fill in the form below. We&apos;ll contact you as soon as
                  possible.
                </h4>
              </div>
              <div className={styles.logoCont}>
                <img
                  alt="logo loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702639587/nitsmun/nitsmun_logo_2_np5mtk.png"
                  className={styles.logo}
                />
              </div>
            </div>
            <form className={styles.form}>
              {regThroughInviteLink === false && (
                <>
                  <div className={`${styles.partitions} ${styles.prevExp}`}>
                    <FieldName compulsory name="Group Name" />
                    <textarea
                      value={grpNameFromLeader}
                      onChange={(e) => {
                        setGrpNameFromLeader(e.target.value);
                      }}
                      className={styles.inputBox}
                    ></textarea>
                  </div>

                  {grpNameFromLeader !== "" && (
                    <div className={`${styles.partitions} ${styles.prevExp}`}>
                      <FieldName compulsory name="Search Members" />
                      <textarea
                        value={searchMember}
                        placeholder="Search members by their email (they should have created their account on NITSMUN website)"
                        onChange={(e) => {
                          setSearchMember(e.target.value);
                        }}
                        className={styles.inputBox}
                      ></textarea>
                      {/* {accountExists === true && (
                      )} */}
                      <button
                        id={styles.sendinvitebtnid}
                        disabled={sendingInvite || !isSendInviteButtonEnabled}
                        style={{
                          cursor:
                            sendingInvite || !isSendInviteButtonEnabled
                              ? "not-allowed"
                              : "pointer",
                          opacity:
                            sendingInvite || !isSendInviteButtonEnabled ? "0.5" : "1",
                        }}
                        onClick={handleSendInvite}
                      >
                        {sendingInvite ? "Sending..." : "Send Invite Link"}
                      </button>
                      {/* ({grpTeamDetailsFromApi?.toWhom?.length}) */}
                      <p id={styles.textmemes}>
                        You have invited following members in the group :{" "}
                        {grpNameFromLeader}
                      </p>
                      {grpTeamDetailsFromApi?.toWhom?.length === 0 && <p>None</p>}
                      {grpTeamDetailsFromApi?.toWhom?.length > 0 &&
                        teamGrpMatch === true && (
                          <main>
                            <div>
                              {grpTeamDetailsFromApi?.toWhom?.map((item, index) => (
                                <p id={styles.textmemes} key={index}>
                                  {item?.email} :{" "}
                                  {item?.hasAccepted === "yes"
                                    ? "Registration done"
                                    : "Registartion Not done yet"}{" "}
                                </p>
                              ))}
                            </div>
                          </main>
                        )}
                    </div>
                  )}
                </>
              )}

              {/* {teamMembersFromApi?.length} */}
              {grpNameFromLeader !== "" && (
                <>
                  <p id={styles.textmemescenter}>
                    These members have registered in the {eventName} with your invite link
                    in the group: {grpNameFromLeader}
                  </p>
                  <p
                    id={styles.textmemescenter}
                    style={{ color: "red", textDecoration: "none", fontStyle: "italic" }}
                  >
                    {teamMembersFromApi?.length === 1 &&
                      `"You need to add atleast 1 more member to complete the group"`}
                    {teamMembersFromApi?.length === 0 &&
                      `"You need to add atleast 2 member to complete the group"`}
                  </p>
                </>
              )}

              {teamMembersFromApi?.length > 0 &&
                teamMembersFromApi.map((item) => {
                  return (
                    <div className={`${styles.partitions} ${styles.prevExp}`}>
                      <p id={styles.textmemes}>{item}</p>
                      {/* {item} */}
                    </div>
                  );
                })}

              <div className={`${styles.partitions} ${styles.prevExp}`}>
                <FieldName compulsory name="Previous MUN experiences" />
                <textarea
                  value={previousMunExperience}
                  onChange={(e) => {
                    setPreviousMunExperience(e.target.value);
                  }}
                  className={styles.inputBox}
                ></textarea>
              </div>

              {data?.isStudentOfNITS === false && (
                <div className={`${styles.partitions} ${styles.prevExp}`}>
                  <FieldName compulsory name="Your College Name" />
                  <textarea
                    value={college}
                    onChange={(e) => {
                      setCollege(e.target.value);
                    }}
                    className={styles.inputBox}
                  ></textarea>
                </div>
              )}

              <div className={`${styles.partitions} ${styles.committee}`}>
                {/* Committee Preferences */}
                <FieldName compulsory name="Committee Preferences" />

                <div className={styles.partitionChild}>
                  <h6 className={styles.disclaimer}>
                    Chose any three committees in order of preference :
                  </h6>

                  <div className={styles.inputCont}>
                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 1: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="UNHRC"
                          checked={committeePreference.includes("UNHRC")}
                          onChange={handleCommiteeSelection}
                        />
                        UNHRC
                      </label>
                    </div>
                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 2: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="IB"
                          checked={committeePreference.includes("IB")}
                          onChange={handleCommiteeSelection}
                        />
                        IB
                      </label>
                    </div>
                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 3: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="Mahabharat"
                          checked={committeePreference.includes("Mahabharat")}
                          onChange={handleCommiteeSelection}
                        />
                        Hastinapur Special Council
                      </label>
                    </div>

                    <div className={styles.field}>
                      <h2 className={styles.h2}>Choice 4: </h2>
                      <label className="radioinpt">
                        <input
                          type="checkbox"
                          name="committee"
                          value="IPC"
                          checked={committeePreference.includes("IPC")}
                          onChange={handleCommiteeSelection}
                        />
                        IPC
                      </label>
                    </div>
                  </div>

                  {/* Portfoilio preference */}
                  <FieldName compulsory name="Portfolio Preferences" />
                  <div id={styles.flex}>
                    {/* IPC PORTFOLIO */}
                    {committeePreference.includes("IPC") && (
                      <main id={styles.maxoptionwidth}>
                        <p>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                            IPC
                          </span>{" "}
                          : (you can select max 3 portfolios for each Committee)
                        </p>
                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelectIpc}
                            value={ipcPortfolio}
                            // size={ipcOptions.length}
                          >
                            {ipcOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label
                              multiple
                              onClick={handleSelectIpc}
                              value={ipcPortfolio}
                            >
                              {ipcOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              IPC
                            </span>
                            :
                            {ipcPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {ipcPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}

                    {/* MAHABhARAT PORTFOLIO */}
                    {committeePreference.includes("Mahabharat") && (
                      <main id={styles.maxoptionwidth}>
                        <p>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                            Hastinapur Special Council
                          </span>{" "}
                          : (you can select max 3 portfolios for each Committee)
                        </p>
                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelectMaha}
                            value={mahaPortfolio}
                            // size={mahaOptions.length}
                          >
                            {mahaOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label
                              multiple
                              onClick={handleSelectMaha}
                              value={mahaPortfolio}
                              // size={mahaOptions.length}
                            >
                              {mahaOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              Hastinapur Special Council
                            </span>{" "}
                            :{" "}
                            {mahaPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {mahaPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}
                    {/* IB PORTFOLIO */}
                    {committeePreference.includes("IB") && (
                      <main id={styles.maxoptionwidth}>
                        <p id={styles.portfoliotitle}>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>IB</span>{" "}
                          : (you can select max 3 portfolios for each Committee){" "}
                        </p>

                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelect}
                            value={ibPortfolio}
                            // size={ibOptions.length}
                          >
                            {ibOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label multiple onClick={handleSelect} value={ibPortfolio}>
                              {ibOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              IB
                            </span>
                            :
                            {ibPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {ibPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}

                    {/* UNHRC PORTFOLIO */}
                    {committeePreference.includes("UNHRC") && (
                      <main id={styles.maxoptionwidth}>
                        <p>
                          Portfolio list for{" "}
                          <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                            UNHRC
                          </span>{" "}
                          : (you can select max 3 portfolios for each Committee){" "}
                        </p>
                        {window.innerWidth > 768 && (
                          <select
                            multiple
                            onChange={handleSelectUnhrc}
                            value={unhrcPortfolio}
                          >
                            {unhrcOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}

                        {window.innerWidth < 768 && (
                          <main id={styles.heightfixed}>
                            <label
                              multiple
                              onClick={handleSelectUnhrc}
                              value={unhrcPortfolio}
                              className={styles.limitedheight}
                            >
                              {unhrcOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </label>
                          </main>
                        )}

                        <div>
                          <h3>
                            Selected Portfolios for{" "}
                            <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                              UNHRC
                            </span>
                            :
                            {unhrcPortfolio?.length > 0 && (
                              <p id={styles.smolsize}>
                                Click again on the item in the above list to deselect them
                              </p>
                            )}
                          </h3>
                          <ul>
                            {unhrcPortfolio.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </main>
                    )}
                  </div>

                  <div className={styles.payment}>
                    <FieldName compulsory name="Payment" />
                    {regThroughInviteLink === true && (
                      <p id={styles.moreboldsize}>
                        Your Group Leader will make the collective payment of all members
                        who register through their&apos;s invite link. Discount will be
                        made accordingly
                      </p>
                    )}

                    {regThroughInviteLink === true && (
                      <main id={styles.imporantinfoongrp}>
                        <h4>Important info related to your group:</h4>
                        <ul>
                          <li>Group Name: {grpName}</li>
                          <li>
                            Group Leader Email:{" "}
                            <a href={`mailto:${grpLeaderEmail}`}>{grpLeaderEmail}</a>
                          </li>
                          <li>Event Name: {eventNameIn}</li>
                        </ul>
                      </main>
                    )}

                    <div className={styles.payCont}>
                      {regThroughInviteLink === false && (
                        <>
                          <p className={styles.p}>
                            To participate in the NITSMUN Annual Conference 2024, a
                            registration fee of Rs{" "}
                            {regThroughInviteLink === true
                              ? ""
                              : "349 per member of the group(including the group leader)"}{" "}
                            is to be paid by group leader.
                          </p>
                          <div className={styles.payInfoMaster}>
                            <div className={styles.paymentInfoCont}>
                              <div className={styles.paymentInfo}>
                                <h1 className={styles.h1}>
                                  <span className={`${styles.h1} ${styles.bolded}`}>
                                    Account Number:
                                  </span>
                                  3263 01 0000 4144
                                </h1>

                                <h1 className={styles.h1}>
                                  <span className={`${styles.h1} ${styles.bolded}`}>
                                    IFSC:
                                  </span>
                                  BARB0MENGRO
                                </h1>
                                <h1 className={styles.h1}>
                                  <span className={`${styles.h1} ${styles.bolded}`}>
                                    UPI ID:
                                  </span>
                                  marufpadaya@barodampay , marufpadaya786@okaxis
                                </h1>
                              </div>

                              <div className={styles.paymentInfo}>
                                <h1 className={styles.h1}>
                                  <span className={`${styles.h1} ${styles.bolded}`}>
                                    Account Holder&apos;s Name:
                                  </span>
                                  Maruf A Kadar Padaya
                                </h1>

                                <h1 className={styles.h1}>
                                  <span className={`${styles.h1} ${styles.bolded}`}>
                                    Or,
                                  </span>
                                  Scan the QR code given below :
                                </h1>
                              </div>
                              {teamMembersFromApi?.length > 0 && (
                                <p id={styles.procintotal}>
                                  Grand Total: Rs. {grandTotalPricing}
                                </p>
                              )}

                              <div id={styles.qrcodehldr}>
                                <img
                                  src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706533667/WhatsApp_Image_2024-01-29_at_18.25.22_oaxkqa.jpg"
                                  alt=""
                                />
                              </div>
                              <div className={styles.screenshot}>
                                <div>
                                  Insert screenshot of the payment (size should be less
                                  than 500KB) * :
                                </div>
                                <FileBase64
                                  multiple={false}
                                  onDone={({ base64, file }) => {
                                    if (
                                      (file.type === "image/png" ||
                                        file.type === "image/jpeg" ||
                                        file.type === "image/jpg" ||
                                        file.type === "image/webp" ||
                                        file.type === "image/avif") &&
                                      file.size <= 500 * 1024
                                    ) {
                                      handleImgChange(base64);
                                    } else {
                                      toast(
                                        "Invalid file type or image is greater than 500KB"
                                      );
                                      setPayment("");
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {data?.isStudentOfNITS === false && (
                        <>
                          <FieldName
                            compulsory
                            name="Do you want to avail the accomodation facility?"
                          />
                          <h6>
                            Hospitality fee: Rs. 1500 (Note: Hospitality fee includes
                            accommodation, access to concerts and other events under
                            Incandescence 2024)
                          </h6>
                          <main id={styles.extramarginaccom}>
                            <div>
                              <label className="radioinpt">
                                <input
                                  type="radio"
                                  name="accomodation"
                                  value="Yes"
                                  checked={accomodation === "Yes"}
                                  onChange={(event) => {
                                    setAccomodation(event.target.value);
                                  }}
                                />
                                Yes
                              </label>
                            </div>

                            <div>
                              <label className="radioinpt">
                                <input
                                  type="radio"
                                  name="accomodation"
                                  value="No"
                                  checked={accomodation === "No"}
                                  onChange={(event) => {
                                    setAccomodation(event.target.value);
                                  }}
                                />
                                No
                              </label>
                            </div>
                          </main>
                        </>
                      )}

                      {/* Show the uplaoded photo */}
                      {payment && (
                        <main id={styles.maindivpreviewphto}>
                          <p>Uploaded Payment photo:</p>
                          <div id={styles.uploadedimgpreview}>
                            <img src={payment} alt="" />
                          </div>
                        </main>
                      )}
                      {payment && (
                        <p id={styles.texttoselectdiff}>
                          &quot;Click again on Choose file button to select different
                          photo&quot;
                        </p>
                      )}
                      {/* submit button  */}
                      <div className={styles.subCont}>
                        <input
                          type="submit"
                          // value={submitting ? "Submitting..." : "Submit"}
                          value="Registration closed"
                          // disabled={submitting || !isButtonEnabled}
                          disabled
                          style={{
                            cursor:
                              submitting || !isButtonEnabled ? "not-allowed" : "pointer",
                            opacity: submitting || !isButtonEnabled ? "0.5" : "1",
                          }}
                          onClick={handleSubmit}
                          className={styles.submitBtn}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contactInfoCont} id={styles.columnflex}>
                <h2 className={styles.bolded}>For any general queries contact:</h2>
                <h2 className={styles.normal}>1. Ronak Jain (+91 84028 22820)</h2>
                <h2 className={styles.normal}>2. Aditi (+91 84865 00973)</h2>
              </div>
              {/* <div className={styles.contactInfoCont} id={styles.columnflex}>
                <h2 className={styles.bolded}>For any form related queries contact:</h2>
                <h2 className={styles.normal}>1. Aditya (+91 8210610167)</h2>
                <h2 className={styles.normal}>2. Ankit (+91 88129 59563)</h2>
                <h2 className={styles.normal}>3. Dorothy (+91 81330 72305)</h2>
              </div> */}
            </form>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};
export default Registration;
