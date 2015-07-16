import React, {Component} from 'react';
import imageResolver from 'utils/image-resolver';

let booodlIcon;
if (process.env.BROWSER) {
  require('styles/footer.scss');
  booodlIcon = require('images/booodl_icon.png');
} else {
  booodlIcon = imageResolver('images/booodl_icon.png');
}


class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="container">
          <a href="#" className="booodl_icon logo"><img src={booodlIcon} /></a>
          <div className="social">
            <a href="//blog.booodlit.com" target="_blank">Blog</a>
            <a href="//facebook.com/booodlit" target="_blank">Facebook</a>
            <a href="//twitter.com/booodl" target="_blank">Twitter</a>
            <a href="//www.youtube.com/channel/UCt-mJ_KjU-MpXuz-su6PUmg" target="_blank">YouTube</a>
          </div>
          <div className="rights">
            <p className="terms">Copyright &copy; 2015</p>
            <a href="//booodl.com/privacy" className="terms" target="_blank">Privacy policy</a>
            <a href="//booodl.com/terms" className="terms" target="_blank">Terms &amp; conditions</a>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
