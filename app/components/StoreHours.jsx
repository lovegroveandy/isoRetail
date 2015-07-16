import React from 'react';
import classNames from 'classnames';

export default class StoreHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _showHours: props.expand,
      hours: null,
      messageRequest: null,
      viaModal: props.viaModal
    };
  }

  componentWillMount = () => {
    this.setState({hours: this.props.hours});
  };

  _getTodaysHours = () => {
    let d = new Date();
    let n = this._getDayName(d.getDay());
    return this.props.hours[n];
  };

  _isOpen = () => {
    let today = this._getTodaysHours();
    let open = today.open;
    let close = today.close;

    let now = new Date().getHours();
    now = parseFloat(now.toFixed(2));

    if (now >= parseFloat(open) && now <= parseFloat(close)) {
      return 'Open now til ' + close;
    }
    return 'Currently closed';
  };

  _getDayName = (day) => {
    let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return days[day];
  };

  _showHours = (e) => {
    e.preventDefault();
    // _self.setState({_showHours: !_self.state._showHours});
    $('#hoursModal').modal('show');
    // launch modal
  };


  render = () => {
    let toggleClass = classNames('opening-hours', {'hidden': !this.state._showHours});
    let showLink = classNames('hours-link', {'hidden': this.state.viaModal});
    let hoursList;

    if (this.state.hours) {
      hoursList = Object.keys(this.state.hours).map((day, i) => {
        return (
          <tr key={i}>
            <td>{day}</td>
            <td>
              <span >{this.state.hours[day].open}</span>
              <span> - </span>
              <span >{this.state.hours[day].close}</span>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <div></div>
      );
    }


    return (
      <div className="hours-box">
        <div className="hours-wrapper">
          <div className="current-status">{this._isOpen()}
          </div>
          <span><a href="" className={showLink} onClick={this._showHours} tabIndex="-1">view hours ></a></span>
          <table className={toggleClass}>
            <tbody>
            {hoursList}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

}
