import React from 'react';
import '../global-styles';
import config from '../../config';

import Header from '../components/Header';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Header config={config}/>
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
