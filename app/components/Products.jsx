let React = require('react');
import classNames from 'classnames';
// import BrochureService from '../../services/BrochureService';
// import BrochureStore from '../../stores/BrochureStore';
let Slider = require('react-slick');

// if (process.env.BROWSER) {
//  let slick = require('slick-carousel');
// }

let carousel = null;

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 1,
      products: null,
      prodCount: 0,
      prodVisible: 0
    };
  }

  componentWillMount = () => {
    // TODO: Get rid of this when on test
    // BrochureService.getProducts('d5d055a7c87b9d8409621af99142d247fdc2dc606b50', token, this.state.offset);
    // BrochureService.getProducts(this.props.storeId, token, this.state.offset);
    // this.changeListener = this._onChange.bind(this);
    // BrochureStore.addChangeListener(this.changeListener);
    let dummyData = [
      {
        image: 'http://ecx.images-amazon.com/images/I/41h8nZ29dLL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41Werk5yaYL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/31NvExWfw2L._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41RouO%2BYEgL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41G8D-4CF3L._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41h8nZ29dLL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41kcSyEWGIL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41h8nZ29dLL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41Werk5yaYL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/31NvExWfw2L._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41RouO%2BYEgL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41G8D-4CF3L._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41h8nZ29dLL._AC_SY220_.jpg',
        name: 'no idea'
      },
      {
        image: 'http://ecx.images-amazon.com/images/I/41kcSyEWGIL._AC_SY220_.jpg',
        name: 'no idea'
      }
    ];

    this.setState({products: dummyData, prodCount: 14});
  };


  // _getStateFromStores = () => {
  //    return {
  //        products: BrochureStore.getProducts().results,
  //        prodCount: BrochureStore.getProducts().total
  //    };
  // };
  //
  // _onChange = () => {
  //    this.setState(this._getStateFromStores());
  // };

  componentDidMount = () => {
    carousel = $(this.refs.prodCarousel.getDOMNode());

    this.setState({settings: {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }});
  };

  _moveSlide = (direction) => {
    if (direction) {
      carousel.slick('slickNext');
    } else {
      carousel.slick('slickPrev');
    }
    this._setVisibleSlide();
  };

  _setVisibleSlide = () => {
    let activeSlide = carousel.find('.slick-active');
    if (activeSlide.length > 1) {
      this.setState({prodVisible: activeSlide[0].data('slick-index')});
    } else {
      this.setState({prodVisible: activeSlide.data('slick-index')});
    }
  };

  _showMore = (more, event) => {
    event.preventDefault();
    if (event.target.className.indexOf('disabled') === -1) {
      // var carousel = $(React.findDOMNode(this.refs.carousel));
      let activeSlide = carousel.find('.slick-active');

      if (activeSlide.length > 1) {
        // multiple visible so get more from service
        if (activeSlide[activeSlide.length - 1].data('slick-index') === this.state.prodCount - 1) {
          this.loadData(more);
        } else {
          this._moveSlide(more);
        }
      } else {
        // only 1 visible so change slide or get more if on end slide
        let slideIndex = activeSlide.data('slick-index');
        if ((slideIndex === 0 && !more) || (slideIndex === 2 && more)) {
          if (slideIndex === this.state.prodCount - 1) {
            // get data from service
            this.loadData(more);
          } else {
            // change slides
            this._moveSlide(more);
          }
        } else {
          this._moveSlide(more);
        }
      }
    }
  };

  loadData = (more) => {
    let offset = this.state.offset;
    if (more) {
      offset++;
    } else {
      if (offset > 1) {
        offset--;
      }
    }
    // BrochureService.getProducts(this.props.storeid, token, offset);
    this.setState({offset: offset, prodVisible: 0});
  };

  componentWillUnmount = () => {
    // BrochureStore.removeChangeListener(this.changeListener);
  };

  render = () => {
    if (!this.state.products) {
      return (
        <div className="catalogue-carousel">
                <span className="all-link pull-right">
                    <a href="" className="badge disabled">&lt;</a>
                    <a href="" className="badge disabled">&gt;</a>
                </span>

          <div className="clear" ref="prodCarousel">
            <div></div>
          </div>
        </div>
      );
    } else {
      // TODO: Look at calculating # products based on offset * products.length
      let showPrev = classNames('badge', 'prev', {'badge disabled': this.state.offset === 1 && this.state.prodVisible === 0});
      let showNext = classNames('badge', 'next', {'badge disabled': this.state.products.length < 3});

      let prodList = this.state.products.map((prod, i) => {
        return (
          <div className="" data-slick-index={i} key={i}>
            <img src={prod.image} alt={prod.name} className="catalogue-image"/>
          </div>
        );
      });

      return (
        <div className="catalogue-carousel">
                <span className="all-link pull-right">
                    <a href="" className={showPrev} onClick={this._showMore.bind(this, false)}>&lt;</a>
                    <a href="" className={showNext} onClick={this._showMore.bind(this, true)}>&gt;</a>
                </span>

          <Slider {...this.state.settings}>
            {prodList}
          </Slider>
        </div>
      );
    }
  };

}
