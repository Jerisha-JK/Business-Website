import RegistrationLayout from "../../Layout/Register_layout";

function Other() {
  return (
    <RegistrationLayout
      leftTitle={`Start <span class="highlight">Your Business </span>with Complete Legal Support`}
      benefits={[
        "Company & MSME Registration",
        "GST Registration & Filing",
        "Tax Consultancy & Compliance",
        "Government E-Services",
       
      ]}
      formTitle="Other Registration"
      serviceOptions={[
        "Tea Board Registration",
        "SEPC License",
       
        
      ]}
     
    />
  );
}

export default Other;