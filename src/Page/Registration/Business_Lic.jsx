import RegistrationLayout from "../../Layout/Register_layout";

function Business_License() {
  return (
    <RegistrationLayout
      leftTitle={`Simplify Your <span class="highlight">Business License</span> Process Today`}
      benefits={[
        "New Business License Registration",
        "License Renewal & Amendments",
        "Documentation & Application Filing",
        "Regulatory & Local Authority Compliance",
        "Ongoing Support & Advisory Services"
      ]}
      formTitle="Business License"
      serviceOptions={[
        "RNI Registration",
        "AGMARK License",
        "Fire License",
        "Industry License",
        
      ]}
      // whatsappNumber="91900000000"
    />
  );
}

export default Business_License;