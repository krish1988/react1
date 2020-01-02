import React, { Component } from "react";
import MyButton from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";

export class Pricing extends Component {
  state = {
    prices: [100, 50, 30],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Le Lorem est simplement du faux texte employé danscomposition et la mise en page avant impression. Le Lorem Ipsum",
      "Le Lorem Ipsum est simplement du faux texte employé dans la  et la mise en page avant impression. Le Lorem Ipsum",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
    ],
    linkto: ["http://google.com", "http://google.de", "http://google.fr"],
    delay: [500, 0, 500]
  };

  showBoxs = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>

            <div className="pricing_description">{this.state.desc[i]}</div>

            <div className="pricing_buttons">
              <MyButton
                text="buy"
                bck="#ffa800"
                color="ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxs()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
