import Navbar from "../../Components/Navbar/Navbar";
import ContactUs from "../../Components/Pages/Contact/ContactUs/ContactUs";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
const Contact = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar page="CONTACT" />
      <div>
        <ContactUs />
        <Faq />
      </div>
    </div>
  );
};
export default Contact;
