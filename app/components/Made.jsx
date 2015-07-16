import React from 'react';

export default class Made extends React.Component {
  constructor(props) {
    super(props);
  }


  render = () => {
    return (
      <div className="getApp">
        <div className="container">
          <div className="section-heading ">
            <div className="spritehome pin_icon"></div>
            <h2>I need a refresher. What's this all about?</h2>

            <p className="highlighted"><em>Booodl for Retail</em> is the best way to connect with your local customers.
            </p>
            <br/><br/>

            <p>Store your inventory on Booodl so users can browse your in-store stock from the app, instant message you
              about the items they want, and even 'Tap + Buy' then
              head in-store to pick up later.</p>

            <p>This is the future of retail. Claim your store profile and start booodling today.</p>
          </div>
        </div>
      </div>
    );
  }
}
