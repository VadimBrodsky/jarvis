import React from 'react';

const V4Image = ({ domain, env, uuid, playerParams, type }) => {
  const dataParams = Object.entries({
    height: 260,
    type,
    uuid,
    v: 4,
    width: 360,
    ...playerParams,
  })
    .filter(param => param[0] !== 'NA')
    .reduce((acc, param) => {
      acc[`data-${param[0]}`] = param[1];
      return acc;
    }, {});

  return (
    <img
      className="vidyard-player-embed"
      alt="video thumbnail"
      src={`//${domain}.vidyard.${env}/${uuid}.jpg`}
      {...dataParams}
    />
  );
};

export default V4Image;
