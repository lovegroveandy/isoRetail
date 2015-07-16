import React from 'react';
import StoreMap from './StoreMap';

export default class MapModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    let zoomer = true;
    return (

      <div className="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <StoreMap location={this.props.location} mapid={'modmap'} zoomControl={zoomer} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    );
  };
}


