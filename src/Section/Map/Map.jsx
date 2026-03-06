import "./Map.css"

function MapSection() {
  return (
    <section className="map-section">
      <h2 className="map-title">Our Location</h2>

      <div className="map-container">
        <iframe
          title="business-location"
          src="https://www.google.com/maps/embed?pb=!4v1772521503233!6m8!1m7!1sMhSOp_Quu72yMt0BiJVYgQ!2m2!1d8.234034421565836!2d77.24309429284719!3f274.05513076731705!4f2.6240340125532953!5f0.7820865974627469"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;