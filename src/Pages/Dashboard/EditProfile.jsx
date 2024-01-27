import { useState } from "react"
import axios from "axios";
import { toast } from "sonner";
import Cookies from "js-cookie";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./EditProfile.module.scss";
const Card = (props) => {
  // { newName, newPwd, confirmNewPwd, phone }
  const [newName, setnewName] = useState("");
  const [newPwd, setPwd] = useState("");
  const [confirmNewPwd, setconfirmNewPwd] = useState("");
  const [phone, setPhone] = useState("");
  const editProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_APP_API}/all/edit/profile`, {
        newName, newPwd, confirmNewPwd, phone, photo: ""
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get("authToken")}`
          ,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast("Dashboard edited successfully!");
        window.location.href='/dashboard';
      }
    } catch (error) {
      toast(error.message);
    }
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Edit Profile</h1>
        <div className={styles.photoCont}>
          <img src={props.src} alt="loading profile pic..." className={styles.photo} />
          {/* <button className={styles.button}>Change Photo</button> */}
        </div>
      </div>
      <form className={styles.form} method='PUT'>
        <input type="text" placeholder="Edit Name" className={styles.textBox} value={newName} onChange={(e) => setnewName(e.target.value)} />
        <input type="text" placeholder="Edit Phone Number" className={styles.textBox} value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Change Password" className={styles.textBox} value={newPwd} onChange={(e) => setPwd(e.target.value)} />
        <input
          type="text"
          placeholder="Confirm New Password"
          className={styles.textBox}
          value={confirmNewPwd}
          onChange={(e) => setconfirmNewPwd(e.target.value)}
        />
        <div className={styles.subCont}>
          <input type="submit" value="Confirm" className={styles.subBtn} onClick={editProfile} />
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
