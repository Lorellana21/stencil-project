import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <accordion-menu
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem."
        ></accordion-menu>

<div class="app-main">
  <header-title
          text="culator"
          image="https://i.pinimg.com/originals/6f/25/21/6f252187d9b7723939e46a68aba4ce0e.png"></header-title>
  
  
          <stencil-route-link url="/profile/stencil">
          <button-landing text="Let´s cat-culate!"></button-landing>
          </stencil-route-link>
</div>
      </div>
    );
  }
}
