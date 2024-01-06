import styles from "./EditProfile.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
const Card = (props) => {
    return (
        <div className={styles.loginWrap}>
            <div className={styles.headingCont}>
                <h1 className={styles.h1}>Edit Profile</h1>
                <div className={styles.photoCont}>
                    <img src={props.src} alt="loading profile pic..." className={styles.photo} />
                    <button className={styles.button}>Change Photo</button>
                </div>
            </div>
            <form className={styles.form}>
                <input type="text" placeholder="Edit Name" className={styles.textBox} />
                <input type="text" placeholder="Edit Phone Number" className={styles.textBox} />
                <input type="text" placeholder="Change Password" className={styles.textBox} />
                <input
                    type="text"
                    placeholder="Confirm New Password"
                    className={styles.textBox}
                />
                <div className={styles.subCont}>
                    <input type="submit" value="Confirm" className={styles.subBtn} />
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
                    <Card src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703354598/dashboard_photo_pdunq5.svg" />
                </div>
            </div>
        </div>
    );
};

export default Edit;