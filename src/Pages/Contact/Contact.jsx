import Navbar from "../../Components/Navbar/Navbar";
import ContactUs from "../../Components/Pages/Contact/ContactUs/ContactUs";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
import Footer from "../../Components/Footer/Footer"
const Contact = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar page="CONTACT" />
      <div>
        <ContactUs />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
