import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from '../UI/MyButton';

export class Discount extends Component {


    state ={
        discountStart:0,
        discountEnd:30,
    }


    porcentage =() =>{

         if(this.state.discountStart < this.state.discountEnd){
             this.setState({
                discountStart: this.state.discountStart + 1
             })
         }
    }

    componentDidUpdate(){
        setTimeout(()=>{
                this.porcentage()
        },30)
    }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
          onReveal ={()=> this.porcentage()}
          >
            <div className="discount_porcentage">
    <span>{this.state.discountStart}min</span>
              <span>IN Repair</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>sale discount_description</h3>
              <p>
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500, quand un imprimeur anonyme assembla ensemble des morceaux
                de texte pour réaliser un livre spécimen de polices de texte. Il
                n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
                à la
              </p>

              <MyButton
              text="Purchaes Tickets"
              bck="#ffa800"
              color="#ffffff"
              link="http://google.com"

                  
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
