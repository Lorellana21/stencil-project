import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'header-title',
  styleUrl: 'header-title.css',
  shadow: true,
})



export class HeaderTitle {

  @Prop() image: string = "";
  @Prop() text: string = "";





  render() {
    return (
      <div class="header">
        <img class="image" src={this.image}> </img>
        <h2 class="title">{this.text}</h2>
      </div>
    );
  }
}