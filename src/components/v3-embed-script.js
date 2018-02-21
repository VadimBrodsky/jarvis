import React from 'react';
import { toQueryString } from '../helpers/search-params';

class V3EmbedScript extends React.Component {
  componentDidMount() {
    const { domain, env, uuid, type, playerParams } = this.props;
    const params = toQueryString(playerParams);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = `vidyard_embed_code_${uuid}`;
    script.src = `//${domain}.vidyard.${env}/${uuid}.js?v=3.1.1&type=${type}&${params}`;

    this.refs.inlineScript.appendChild(script);
  }

  render() {
    return <div ref="inlineScript" />;
  }
}

export default V3EmbedScript;
