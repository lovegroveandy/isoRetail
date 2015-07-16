import React from 'react';
import classNames from 'classnames';
import GoogleMap from 'google-map-react';

// let map = [];

if (process.env.BROWSER) {
  require('styles/map.scss');
}


export default class StoreMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _showMap: false,
      address: null
    };
  }

  componentWillMount = () => {
    this.setState({address: this.props.address});
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      address: nextProps.address
    });
  };

  handleClick = () => {
    // setTimeout(() => {
    //  map.modmap.invalidateSize();
    // }, 500);
    $('#myModal').modal('show');
  };


  render = () => {
    let showAddress = classNames('col-md-9 store-address', {'hidden': !this.props.address});
    let showLink = classNames('map-link', {'hidden': !this.props.address});

    return (

      <div className="map-wrapper">
        <div className="mapper col-md-3">
          <GoogleMap id={this.props.mapid} ref={this.props.mapid}
            center={[59.938043, 30.337157]}
            zoom={9}>
          </GoogleMap>
        </div>
        <div className={showAddress}>
          <div ref="address">{this.props.address}</div>
          <div>
            <a href={'tel:' + this.props.phone} target="_blank" ref="phone">{this.props.phone}</a>
          </div>
          <div>
            <a href={this.props.url} target="_blank" ref="url">{this.props.url}</a>
          </div>
          <div>
            <a href="" className={showLink} data-toggle="modal" data-target="#myModal" onClick={this.handleClick}
               tabIndex="-1">view map ></a>
          </div>
        </div>
      </div>

    );
  };

}
