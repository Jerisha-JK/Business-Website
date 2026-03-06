import ComplianceLayout from "../../Layout/Compliance_layout";


function Msme() {
  return (
    <ComplianceLayout
 leftTitle={`Get Your <span class="highlight">MSME Registration</span> Done Hassle-Free`}
benefits={[
  "Expert Consultation Support",
  "Complete Documentation Assistance",
  "Quick & Smooth Registration Process",
  "Guidance on Government Benefits",
]}
  formTitle="MSME Registration"
  defaultService="MSME Registration"
//   whatsappNumber="91XXXXXXXXXX"
/>
  );
}

export default Msme;