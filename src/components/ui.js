import React, { Component } from 'react';
import './ui.css';
import { toQueryString } from '../helpers/search-params';

export default class EmbedUI extends Component {
  envOptions = ['com', 'test', 'dev'];
  typeOptions = ['v3inline', 'v3lightbox', 'v4inline', 'v4lightbox'];

  state = {
    domain: this.props.params.domain,
    env: this.props.params.env,
    js: this.props.params.js,
    playerParams: this.props.params.playerParams || {},
    type: this.props.params.type,
    uuid: this.props.params.uuid,
  };

  handleUuidChange = (e) => {
    this.setState({ uuid: e.target.value });
  };

  handleDomainChange = (e) => {
    this.setState({ domain: e.target.value });
  };

  handleJsChange = (e) => {
    this.setState({ js: e.target.value });
  };

  handleEnvChange = (e) => {
    this.setState({ env: e.target.value });
  };

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { domain, env, js, type, uuid, playerParams } = this.state;

    const settings = toQueryString({ domain, env, js, type, uuid });
    const params = toQueryString(playerParams);
    const newSearch = params ? settings.concat('&', params) : settings;
    window.location.search = newSearch;
  };

  render() {
    return (
      <div className="ui">
        <form onSubmit={this.handleSubmit}>
          <label>
            UUID
            <input
              type="text"
              value={this.state.uuid}
              onChange={this.handleUuidChange}
              maxLength="22"
            />
          </label>

          <label>
            Domain
            <input
              type="text"
              value={this.state.domain}
              onChange={this.handleDomainChange}
            />
          </label>

          <label>
            Env
            <select onChange={this.handleEnvChange} value={this.state.env}>
              {this.envOptions.map((env, i) => (
                <option value={env} key={i}>
                  {env}
                </option>
              ))}
            </select>
          </label>

          <label>
            Type
            <select onChange={this.handleTypeChange} value={this.state.type}>
              {this.typeOptions.map((type, i) => (
                <option value={type} key={i}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            JS Path
            <input type="text" value={this.state.js} onChange={this.handleJsChange} />
          </label>

          {Object.keys(this.state.playerParams).map((propKey, i) => {
            const { playerParams } = this.state;
            return (
              <label key={i}>
                {propKey}
                <input
                  type="text"
                  value={playerParams[propKey]}
                  onChange={(e) => {
                    this.setState({
                      playerParams: {
                        ...playerParams,
                        [propKey]: e.target.value,
                      },
                    });
                  }}
                />
              </label>
            );
          })}

          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
