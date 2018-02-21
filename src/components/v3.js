import React from 'react';
import V3EmbedScript from './v3-embed-script';
import V3LightboxImage from './v3-lightbox-image';

const V3inline = options => <V3EmbedScript type="inline" {...options} />;

const V3LightBox = options => (
  <React.Fragment>
    <V3EmbedScript {...Object.assign({}, options, { type: 'lightbox' })} />
    <V3LightboxImage {...options} />
  </React.Fragment>
);

export { V3inline, V3LightBox };
