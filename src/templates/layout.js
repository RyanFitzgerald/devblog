import React from 'react';
import 'prismjs/themes/prism.css';

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header config={userConfig} />
        {children}
      </div>
    );
  }
}

export default Template;
