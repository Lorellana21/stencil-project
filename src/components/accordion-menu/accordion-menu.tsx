import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'accordion-menu',
  styleUrl: 'accordion-menu.css',
  shadow: true,
})



export class AccordionMenu {

  @Prop() título: string = "";
  @Prop() content: string = "";
  @State() isActive: boolean = false;


handleAccordion(){
    this.isActive = !this.isActive;
}


  render() {
    return (
      <div class="accordion">
          <div class="accordion-title" onClick={() => this.handleAccordion()}>
            
            {/* <div>{this.isActive ? "➖" : "➕"}</div> */}
            {/* <h2>{this.título}</h2> */}
          </div>
          {this.isActive && <div class="accordion-content">{this.content}</div>}
        </div>
    
    );
  }
}