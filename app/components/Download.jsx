import React from 'react';

export default class Download extends React.Component {
  constructor(props) {
    super(props);
  }

  isAndroid = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let ua = userAgent.toLowerCase();
    return ua.indexOf('android') > -1;
  };

  isIOS = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return !!(userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iod/i));
  };

  _handleDownClick = () => {
    if (this.isIOS()) {
      window.open('https://itunes.apple.com/au/app/booodl-it/id943234988?mt=8', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.booodl.booodlit', '_blank');
    }
  };

  _handleVideoClick = () => {
    let v;
    document.getElementById('videoModal').modal('show');
    v = document.getElementById('boo-video');
    v.play();

    document.getElementById('boo-video-close').on('click', () => {
      v = document.getElementById('boo-video');
      v.pause();
      document.getElementById('videoModal').modal('hide');
    });
  };

  render = () => {
    return (
      <div className="download container-fluid">
        <div className="container">
          <h2>Message + Buy <br />from any nearby<br/>store.</h2>

          <div className="tp-caption lfl button-wrapper">
            <a href="#" className="btn btn-primary btn-lg btn-download" onClick={this._handleDownClick}>Download the
              App</a>
            <a href="#" className="video-link" data-toggle="modal" data-target="#videoModal"
               onClick={this._handleVideoClick}><span
              className="spritehome play_icon"></span><span>Watch video</span></a>
          </div>
        </div>
      </div>
    );
  };

}
