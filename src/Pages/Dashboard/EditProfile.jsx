import { useState, useContext, useMemo, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useQuery } from "react-query";
import FileBase64 from "react-file-base64";
import Cookies from "js-cookie";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./EditProfile.module.scss";
import { UserContext } from "../../Context/ContextProv";
import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";

const Card = () => {
  // { newName, newPwd, confirmNewPwd, phone }
  const [newName, setnewName] = useState("");
  const [newPwd, setPwd] = useState("");
  const [confirmNewPwd, setconfirmNewPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const handleImgChange = (base64) => {
    setPhoto(base64);
  };
  const { role, isLoggedIn } = useContext(UserContext);
  const isTrue = useMemo(() => {
    return Boolean(role && isLoggedIn);
  }, [role, isLoggedIn]);
  const { data, error, isLoading } = useQuery("profile", fetchProfile, {
    enabled: isTrue,
  });

  useEffect(() => {
    if (data) {
      setnewName(data.name);
      setPhone(data.phone);
      setPhoto(data.photo);
    }
  }, [data]);

  const isButtonEnabled = useMemo(() => {
    return Boolean(newName || newPwd || confirmNewPwd || phone || photo);
  }, [newName, newPwd, confirmNewPwd, phone, photo]);

  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const editProfile = async (e) => {
    e.preventDefault();
    if (newPwd && newPwd.length < 8) {
      toast("Password should not be less than 8 characters");
      return;
    }
    if (newPwd && newPwd !== confirmNewPwd) {
      toast("Passwords do not match");
      return;
    }
    setSubmitting(true);
    try {
      await axios
        .put(
          `${import.meta.env.VITE_REACT_APP_API}/all/edit/profile`,
          {
            newName,
            newPwd,
            confirmNewPwd,
            phone,
            photo,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.message === "Profile edited successfully") {
            toast("Profile edited successfully");
          }
        });
    } catch (errr) {
      if (errr.response) {
        switch (errr.response.data.error) {
          case "No entries to update":
            toast("No entries to update");
            break;
          case "Password should not be less than 8 characters":
            toast("Password should not be less than 8 characters");
            break;
          case "Passwords do not match":
            toast("Passwords do not match");
            break;
          case "Something went wrong on the server side, profile update failed":
            toast("Something went wrong on the server side, profile update failed");
            break;
          default:
            toast("Something went wrong");
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Edit Profile</h1>
        <div className={styles.photoCont}>
          <img src={photo} alt="" className={styles.photo} />
          <FileBase64
            multiple={false}
            onDone={({ base64, file }) => {
              if (
                (file.type === "image/png" ||
                  file.type === "image/jpeg" ||
                  file.type === "image/jpg" ||
                  file.type === "image/webp" ||
                  file.type === "image/avif") &&
                file.size <= 300 * 1024
              ) {
                handleImgChange(base64);
              } else {
                toast("Invalid file type or image is greater than 300KB");
                setPhoto("");
              }
            }}
          />
          {/* <button className={styles.button}>Change Photo</button> */}
        </div>
      </div>
      <form className={styles.form} method="PUT">
        <input
          type="text"
          placeholder="Edit Name"
          className={styles.textBox}
          value={newName}
          onChange={(e) => setnewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edit Phone Number"
          className={styles.textBox}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Change Password"
          className={styles.textBox}
          value={newPwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className={styles.textBox}
          value={confirmNewPwd}
          onChange={(e) => setconfirmNewPwd(e.target.value)}
        />
        <div className={styles.subCont}>
          <input
            type="submit"
            value={submitting ? "Submitting..." : "Submit"}
            disabled={!isButtonEnabled || submitting}
            style={{
              cursor: !isButtonEnabled || submitting ? "not-allowed" : "pointer",
              opacity: !isButtonEnabled || submitting ? ".5" : "1",
            }}
            className={styles.subBtn}
            onClick={editProfile}
          />
        </div>
      </form>
    </div>
  );
};
const Edit = () => {
  // const { data, error, isLoading, isFetching } = useQuery("profile", fetchProfile, {
  //   refetchOnWindowFocus: "always",
  // });

  // if (error) {
  //   return <div>Something went wrong!</div>;
  // }
  // if (isLoading || isFetching) {
  //   return <div>Loading...</div>;
  // }

  return (
    // <main className={styles.mainCont}>
    //   {/* <ul>
    //     {data.map((product) => (
    //       <li key={product.id}>{product.title}</li>
    //     ))}
    //   </ul> */}

    // </main>
    <div className={styles.loginPage}>
      <Navbar page="CONTACT" />
      <div className={styles.pageCont}>
        <div className={styles.innerCont}>
          <div className={styles.logoCont}>
            <div className={styles.parent}>
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703270578/nitsmun/oAuth-logo_z5vdk0.svg"
                alt="logo loading..."
                className={styles.img}
              />
            </div>
            <h1 className={styles.h1}>
              Join us in shaping a better world through NITS MUN!
            </h1>
          </div>
          <Card src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706367691/prof_rg9g0w.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Edit;
