import React from 'react';

const V3LightboxImage = ({ uuid, domain, env }) => {
  return (
    <div className="outer_vidyard_wrapper">
      <div
        className="vidyard_wrapper"
        onClick={() => {
          window[`fn_vidyard_${uuid}`]();
        }}
      >
        <img
          alt="video thmbnail"
          src={`//${domain}.vidyard.${env}/${uuid}.jpg?`}
          width="360"
        />
        <div className="vidyard_play_button">
          <a href="javascript:void(0);"> </a>
        </div>
      </div>
    </div>
  );
};

export default V3LightboxImage;
