import React from 'react';
import StoreHours from './StoreHours';

export default class HoursModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openingHours: false,
      edit: null,
      store: null,
      viaModal: true
    };
  }

  componentWillMount = () => {
    this.setState({openingHours: this.props.hours, edit: this.props.edit, store: this.props.store});
  };


  render = () => {
    return (

      <div className="modal fade bs-example-modal-lg" id="hoursModal" tabindex="-1" role="dialog"
           aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <StoreHours hours={this.state.openingHours} edit={this.state.edit} store={this.state.store} expand={true}
                          viaModal={true}/>
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


