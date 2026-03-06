import ComplianceLayout from "../../Layout/Compliance_layout";


function Trust() {
  return (
    <ComplianceLayout
leftTitle={`Stay Updated with <span class="highlight">Trust Annual Compliance</span>`}
benefits={[
  "Expert Legal & Tax Assistance",
  "Timely Return & Audit Filings",
  "Complete Documentation Support",
  "Regulatory Compliance Guidance",
]}
  formTitle="Trust Annual Compliance"
  defaultService="Trust Annual Compliance"
//   whatsappNumber="91XXXXXXXXXX"
/>
  );
}

export default Trust;