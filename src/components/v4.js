import React from 'react';
import V4EmbedScript from './v4-embed-script';
import V4Image from './v4-image';

const V4inline = options => (
  <React.Fragment>
    <V4Image {...Object.assign({}, options, { type: 'inline' })} />
  </React.Fragment>
);

const V4LightBox = options => (
  <React.Fragment>
    <V4Image {...Object.assign({}, options, { type: 'lightbox' })} />
  </React.Fragment>
);

export { V4inline, V4LightBox };
