import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {IntlMixin} from 'react-intl';

import imageResolver from 'utils/image-resolver';
// import Spinner from 'components/shared/spinner';

// Load styles for the header
// and load the `react-logo.png` image
// for the `<img src='' />` element
let booodlLogo;
if (process.env.BROWSER) {
  require('styles/header.scss');
  booodlLogo = require('images/booodlLogo.png');
} else {
  booodlLogo = imageResolver('images/booodlLogo.png');
}

class Header extends Component {

  static propTypes: {
    flux: PropTypes.object.isRequired
  };

  _getIntlMessage = IntlMixin.getIntlMessage

  state = {
    spinner: false
  };

  componentDidMount() {
    this.props.flux
      .getStore('requests')
      .listen(this._handleRequestStoreChange);
  }

  _handleRequestStoreChange = ({inProgress}) => {
    return this.setState({spinner: inProgress});
  };

  render() {
    return (

    <nav role="navigation" className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="profile"><span className="navbar-brand"><img src={booodlLogo}/></span></Link>
        </div>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={this._getIntlMessage('routes.users')} className="mdl-navigation__link">
                {this._getIntlMessage('header.users')}
              </Link>
            </li>
            <li>
              <Link to={this._getIntlMessage('routes.profile')} className="mdl-navigation__link">
                {this._getIntlMessage('header.profile')}
              </Link>
            </li>
            <li>
              <Link to={this._getIntlMessage('routes.guides')} className="mdl-navigation__link">
                {this._getIntlMessage('header.guides')}
              </Link>
            </li>
            <li>
              <Link to={this._getIntlMessage('routes.protected')} className="mdl-navigation__link">
                {this._getIntlMessage('header.protected')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;
