import React, {Component, PropTypes} from 'react';
import {IntlMixin} from 'react-intl';
import classNames from 'classnames';
import MapModal from './MapModal';
import HoursModal from './HoursModal';
import StoreImage from './StoreImage';
import StoreHours from './StoreHours';
import StoreMap from './StoreMap';
import Catalogue from './Catalogue';
import Download from './Download';
import Made from './Made';

if (process.env.BROWSER) {
  require('styles/profile.scss');
}

class Profile extends Component {

  static propTypes = {
    flux: PropTypes.object.isRequired
  }

  _getIntlMessage = IntlMixin.getIntlMessage;
  _formatMessage = IntlMixin.formatMessage.bind(Object.assign({}, this, IntlMixin));

  state = this.props.flux
    .getStore('profile')
    .getBySeed();

  componentWillMount() {
    this._setPageTitle();

    this.props.flux
      .getActions('profile')
      .fetch();
  }

  componentDidMount() {
    this.props.flux
      .getStore('profile')
      .listen(this._handleStoreChange);
  }

  componentWillUnmount() {
    this.props.flux
      .getStore('profile')
      .unlisten(this._handleStoreChange);
  }

  _handleStoreChange = () => {
    const store = this.props.flux
      .getStore('profile')
      .getBySeed();

    this.setState(store);
    this._setPageTitle();
  };

  _setPageTitle = () => {
    let title;
    if (this.state.store) {
      title = this._getIntlMessage('profile.page-title');
    } else {
      title = this._getIntlMessage('profile.not-found-page-title');
    }

    this.props.flux
      .getActions('page-title')
      .set.defer(title);
  };


  render() {
    let logo;
    let range;

    if (this.state.store && this.state.store.attributes) {
      const store = this.state.store.attributes;

      let zoomer = false;
      let description = classNames('collapsed', {'expanded': this.state.fullDescription});
      let showMore = classNames('', {'hidden': !store.description});

      logo = () => {
        if (store.logo !== null) {
          return (
              <img src={store.logo} />
            );
        }
      };

      range = () => {
        return (
          <span className="price-range pull-right">Price range:
            <label className="rad">
              <input type="radio" value={store.range} name="range" checked={store.range === 'low'} />
              <i>$</i>
            </label>
            <label className="rad">
              <input type="radio" value={store.range} name="range" checked={store.range === 'medium'} />
              <i>$$</i>
            </label>
            <label className="rad">
              <input type="radio" value={store.range} name="range" checked={store.range === 'high'} />
              <i>$$$</i>
            </label>
          </span>
        );
      };

      return (
        <div className="profile-page">
          <MapModal location={store.location} mapid={'modmap'} />
          <HoursModal hours={store.openingHours} store={store} />

          <section className="container-fluid overview">
            <div className="col-md-6 store-image-wrap">
              <StoreImage photos={store.photos} />
            </div>

            <div className="col-md-4 store-details">
              <div className="logo-wrapper">
                {logo()}
                {range()}
              </div>

              <span className="name-wrapper ">
                <h1><span tabIndex="0" >{store.name}</span></h1>
              </span>

              <div className="description-wrapper">
                <p className="highlight">Lorem ipsum dolor sit amet</p>
                <p className={description} ref="description" >
                  {store.description}
                </p>
                <a href="" className={showMore} onClick={this.readMore} tabIndex="-1">read more</a>
              </div>

              <StoreHours hours={store.openingHours} store={store} expand={false} viaModal={false} />

              <StoreMap address={store.address} location={store.location} mapid={'map'} zoomControl={zoomer} phone={store.phone} url={store.url} />

            </div>
          </section>

          <section className="container-fluid">
            <div className="col-md-4 col-md-offset-2 stats-wrapper">
              <Catalogue storename={store.name} storeid={store.id} catalogue={true} />
            </div>
            <div className="col-md-4 stock-wrapper">
            </div>
          </section>

          <Download />
          <Made />
        </div>
      );
    }

    return (
      <div className='container'>
        <h2>Store not found</h2>
      </div>
    );
  }

}

export default Profile;
