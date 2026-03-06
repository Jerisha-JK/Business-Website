import ComplianceLayout from "../../Layout/Compliance_layout";


function GST_Registration() {
  return (
    <ComplianceLayout
 leftTitle={`Get Your <span class="highlight">GST Registration</span> Completed Smoothly & Efficiently`}
benefits={[
  "Complete Application Preparation & Filing Support",
  "Accurate Documentation & GST Portal Assistance",
  "Guidance on HSN/SAC Codes & Tax Structure",
  "ARN Tracking & Timely Registration Updates",
  "Post-Registration Compliance & Advisory Support",
]}
  formTitle="GST Registration"
  defaultService="GST Registration"
//   whatsappNumber="91XXXXXXXXXX"
/>
  );
}

export default GST_Registration;