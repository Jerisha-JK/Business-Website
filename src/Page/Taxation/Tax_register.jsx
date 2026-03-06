import ComplianceLayout from "../../Layout/Compliance_layout";


function Tax_Registration() {
  return (
    <ComplianceLayout
 leftTitle={`Secure Your <span class="highlight">Tax Registration</span> with Complete Support`}
benefits={[
  "End-to-End Application Preparation & Filing",
  "Accurate Documentation & Verification Assistance",
  "Guidance on Applicable Tax Categories",
  "Timely Submission to Avoid Delays",
  "Post-Registration Compliance & Advisory Support",
]}
  formTitle="Tax Registration"
  defaultService="Tax Registration"
//   whatsappNumber="91XXXXXXXXXX"
/>
  );
}

export default Tax_Registration;