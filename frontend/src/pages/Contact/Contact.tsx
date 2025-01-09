import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import contactBg from "../../assets/contact/banner.jpg"
const Contact = () => {
    return (
        <div>
             <Helmet>
                  <title>Spice Forge | Contact</title>
             </Helmet>
             <Cover title='CONTACT US' subTitle='TALK WITH OUR STAFFS' img={contactBg}/>
        </div>
    );
};

export default Contact;