import React from 'react';

class V4EmbedScript extends React.Component {
  componentDidMount() {
    const { domain, env, js } = this.props;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//${domain}.vidyard.${env}${js}/embed/v4.js?preview=1`;
    script.async = true;

    this.refs.inlineScript.appendChild(script);
  }

  render() {
    return (<div ref="inlineScript" />);
  }
}

export default V4EmbedScript;
