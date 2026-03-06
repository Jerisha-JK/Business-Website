import RegistrationLayout from "../../Layout/Register_layout";

function Business_Certificate() {
  return (
    <RegistrationLayout
      leftTitle={`Get Essential Business Certificates <span class="highlight">with Expert Guidance</span>`}
      benefits={[
        "Shop & Establishment Certificate",
        "MSME / Udyam Registration Certificate",
        "Import Export Code (IEC) Certificate",
        "Professional Tax Registration",
        "Digital Signature Certificate (DSC)"
      ]}
      formTitle="Business Certification"
      serviceOptions={[
        "Trade License",
        "Rubber Board Registration",
        "Spice Board Registration",
        "APEDA Registration",
        "FPO Mark Certification",
        "Make In India Certification"
        
      ]}
      // whatsappNumber="91900000000"
    />
  );
}

export default Business_Certificate;