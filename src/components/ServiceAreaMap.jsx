import React from 'react';
import mapImage from '../images/service-area-map-kapiti-coast.webp'; // Static fallback image

export default function ServiceAreaMap({ useStatic = false }) {
  return (
    <div className="w-full my-12">
      {useStatic ? (
        <img
          src={mapImage}
          alt="Map showing the service area for Duke Property Services"
          className="w-full h-auto rounded-xl shadow-md border-2 border-duke-dark"
        />
      ) : (
        <iframe
          title="Duke Property Services Service Area Map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1D5HAzWR-I8fFB9pyMqrt_LziofTzJeE"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-md border-2 border-duke-dark"
        ></iframe>
      )}
    </div>
  );
}
