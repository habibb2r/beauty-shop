import SectionTitle from "../Reuseable/SectionTitle";


const ContactInfo = () => {
    
    return (
        <div>
              <SectionTitle title={"Contact Info"}></SectionTitle>
              <div className="flex justify-center items-center gap-10">
                  <div>
                  <h1>Address</h1>
                  <p>123 Main St, City</p>
                  <p>State, Country</p>
                  <p>Postal Code</p>
                  <p>Phone: 123-456-7890</p>
                  </div>
                  <div>
                    <p>Links</p>
                    <p>Links</p>
                    <p>Links</p>
                  </div>
              </div>
            
        </div>
    );
};

export default ContactInfo;