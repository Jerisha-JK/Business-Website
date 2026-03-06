import RegistrationLayout from "../../Layout/Register_layout";

function Fssai() {
  return (
    <RegistrationLayout
      leftTitle={`Start Your Food Business with <span class="highlight">Certified FSSAI Approval</span>`}
      benefits={[
        "Quick Online Application Filing",
        "Documentation & Eligibility Support",
        "Renewal, Upgrade & Amendment Services",
        "Ongoing Regulatory Compliance Assistance",
      ]}
      formTitle="FSSAI Registration"
      serviceOptions={[
        "FSSAI Registration",
        "FSSAI Central License",
        "FSSAI State License",
        "FSSAI Product Approval",
        "FSSAI License Renewal",
        "Halal Certification",
      ]}
      
    />
  );
}

export default Fssai;