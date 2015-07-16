import React from 'react';
import Products from './Products';

export default class Catalogue extends React.Component {
  constructor(props) {
    super(props);
  }


  render = () => {
    let contents;

    contents = () => {
      if (this.props.catalogue) {
        return (
          <Products storeid={this.props.storeid}/>
        );
      }
    };


    return (
      <div className="catalogueWrapper underlined-section">
        <div className="catalogueTitleBar">
          <span className="catalogue-title col-md-10"><h3>What you'll find at {this.props.storename}</h3></span>
        </div>
        <div className="separator"></div>
        {contents()}
      </div>
    );
  };
}
