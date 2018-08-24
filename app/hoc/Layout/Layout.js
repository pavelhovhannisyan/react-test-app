import React, {Component} from 'react';

import Header from '../../components/Header/Header';

class Layout extends Component {

  render() {
    let element;
    if (this.props.children) {
      element = this.props.children
    }

    return (<div>
        <Header/> {element}
    </div>)
  }
}

export default Layout;
