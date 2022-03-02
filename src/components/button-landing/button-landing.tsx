import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'button-landing',
  styleUrl: 'button-landing.css',
  shadow: true,
})



export class ButtonLanding {

  @Prop() text: string = "";


  render() {
    return (
      <div class="button">{this.text}
        
      </div>
    );
  }
}