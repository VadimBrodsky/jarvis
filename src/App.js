import React, { Component } from 'react';
import { urlParams, filterPlayerParams } from './helpers/search-params';
import { V3inline, V3LightBox } from './components/v3';
import { V4inline, V4LightBox } from './components/v4';

class App extends Component {
  state = {
    domain: 'play',
    env: 'com',
    js: '',
    type: 'v3inline',
    uuid: 'QK4FcA7a4LRsfd5rZa26E8',
  };

  componentWillMount() {
    const params = urlParams();
    const playerParams = filterPlayerParams(Object.keys(this.state), params);

    this.setState({
      domain: params.domain || this.state.domain,
      env: params.env || this.state.env,
      js: params.js || this.state.js,
      type: params.type || this.state.type,
      uuid: params.uuid || this.state.uuid,
      playerParams,
    });
  }

  render() {
    console.log('params: ', this.state);

    const comp = (type => {
      switch (this.state.type) {
        case 'v3inline':
          return <V3inline {...this.state} />;
        case 'v3lightbox':
          return <V3LightBox {...this.state} />;
        case 'v4inline':
          return <V4inline {...this.state} />;
        case 'v4lightbox':
          return <V4LightBox {...this.state} />;
        default:
          return <p>oh no, not a valid type</p>;
      }
    })(this.state.type);

    return comp;
  }
}

export default App;