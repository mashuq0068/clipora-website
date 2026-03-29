import React from "react";

export default function Map() {
  return (
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d102528.3234932161!2d-74.01154609099295!3d40.71403570621854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1692583544542!5m2!1svi!2s"
      width="100%"
      height={724}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
