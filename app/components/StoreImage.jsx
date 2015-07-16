import React from 'react';
// import ModalStore from '../../stores/ModalStore';
import classNames from 'classnames';

export default class StoreImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null
    };
  }

  componentDidMount = () => {
    if (this.props.photos.length > 0) {
      $(React.findDOMNode(this.refs.storeImage)).css('background-image', 'url(' + this.props.photos[0] + ')');
    }
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      imageUrl: nextProps.photos[0]
    });
  };

  showImageModal = (name, event) => {
    event.preventDefault();
    // ModalStore.setImageType(name);
    $(React.findDOMNode('imageModal')).modal('show');
  };


  componentDidUpdate = () => {
    $(React.findDOMNode(this.refs.storeImage)).css('background-image', 'url(' + this.props.photos[0] + ')');
  };


  render = () => {
    let placeImage = classNames('store-image-bg', {'placeholder': !this.props.photos.length > 0});

    if (this.props.edit) {
      return (
        <div className={placeImage} ref="storeImage">
          <span className="fileUpload">
              <a href="" onClick={this.showImageModal.bind(this, 'photos')}
                 className="glyphicon glyphicon-camera"><span className="glyph-text">Edit</span></a>
          </span>
        </div>
      );
    } else {
      return (
        <div className={placeImage} ref="storeImage"></div>
      );
    }
  };

}
