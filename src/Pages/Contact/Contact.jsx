import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ContactUs from "../../Components/Pages/Contact/ContactUs/ContactUs";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | NITSMUN";
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar page="CONTACT" />
      <div>
        <ContactUs />
        <Faq color="#1d1c41" />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
