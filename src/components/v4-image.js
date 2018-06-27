import React from 'react';
import VidyardV4 from '../lib/vidyard-embed-code.esm.js';

class V4Image extends React.Component {
  componentDidMount() {
    VidyardV4.api.renderPlayer(this.img);
  }

  setImgRef = (el) => {
    this.img = el;
  }

  dataParams = () => {
    const { type, uuid } = this.props;

    return Object.entries({
      type,
      uuid,
      v: 4,
      ...this.props.playerParams,
    })
      .filter(param => param[0] !== 'NA')
      .reduce((acc, param) => {
        acc[`data-${param[0]}`] = param[1];
        return acc;
      }, {});
  }

  render() {
    return (
      <img
        className="vidyard-player-embed"
        alt="video thumbnail"
        src={`//${this.props.domain}.vidyard.${this.props.env}/${this.props.uuid}.jpg`}
        ref={this.setImgRef}
        {...this.dataParams()}
      />
    );
  }
};

export default V4Image;
