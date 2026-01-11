const GoogleMap = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-elegant">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.5!2d27.2725!3d61.6875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4690ce1e2a0b9a1b%3A0x5c89fe3c8b4c7d0e!2sPorrassalmenkatu%2015%2C%2050100%20Mikkeli%2C%20Finland!5e0!3m2!1sen!2sfi!4v1704900000000!5m2!1sen!2sfi"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Antilop sijainti kartalla"
      />
    </div>
  );
};

export default GoogleMap;
