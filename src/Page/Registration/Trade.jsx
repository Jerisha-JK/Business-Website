import RegistrationLayout from "../../Layout/Register_layout";

function Trade_License() {
  return (
    <RegistrationLayout
      leftTitle={`Obtain Your <span class="highlight">Trade License</span> with Complete Legal Assistance`}
      benefits={[
        " New Trade License Registration",
        " Trade License Renewal & Modification",
        "Municipal Documentation Support",
        "Compliance with Local Authority Regulations",
      ]}
      formTitle="Trade License"
      serviceOptions={[
        "Trade License",
        "Gumasta License",
       
        
      ]}
     
    />
  );
}

export default Trade_License;