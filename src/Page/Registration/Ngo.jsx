import RegistrationLayout from "../../Layout/Register_layout";

function NGO() {
  return (
    <RegistrationLayout
      leftTitle={`Turn Your Vision into a <span class="highlight">Legally Registered NGO</span>`}
      benefits={[
        "Trust, Society & Section 8 Company Registration",
        "12A & 80G Registration Assistance",
        "CSR Registration & Compliance",
        "FCRA Registration & Reporting Support",
        "Annual Filing & Legal Compliance"
      ]}
      formTitle="NGO Registration"
      serviceOptions={[
        "Section 8 Company Registration",
        "Section 8 Microfinance Company Registration",
        "Darpan Registration",
        "12A and 80G Registration",
        "FCRA Registration",
        "NGO Accounting"
        
      ]}
      
    />
  );
}

export default NGO;