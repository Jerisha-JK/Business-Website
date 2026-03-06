import RegistrationLayout from "../../Layout/Register_layout";

function Company() {
  return (
    <RegistrationLayout
      leftTitle={`Start & Grow Your Business with
  <span class ="highlight"> Seamless Company Registration</span>`}
      benefits={[
        "Name Approval & Documentation",
        "SPICe+ Form Filing",
        "GST & MSME Registration",
        "Post-Incorporation Compliance",
      ]}
      formTitle="Company Registration"
      serviceOptions={[
        "Drug License",
        "Ayush License",
        "ISO Registration",
        "SPICe+ Form",
        "Factory License",
        "Network License",
        "GMP Certification",
        "Import Export Code (IEC)",
        "Digital Signature Certificate",
        "Small Scale Industries Registration",
        "Petrol Pump Registration",
        "Trademark Registration",
        "Trademark Renewal"
      ]}
      // whatsappNumber="919626020591"
    />
  );
}

export default Company;