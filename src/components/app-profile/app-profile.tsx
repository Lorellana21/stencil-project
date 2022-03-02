import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {

  @State() number1: any = "";
  @State() number2: any = "";
  @State() operator: any = "";
  @State() result: any = "";
  @State() cats1: string[];
  @State() cats2: string[];

  @Listen ("click", {capture: true})

     handleNumber(val){
       if(this.operator === ""){
         this.number1 = val;
         this.getCats1FromApi();
        
       } else {
         this.number2 = val;
         this.getCats2FromApi();
         
       }
       
        console.log("number1", this.number1)
        console.log("operator", this.operator)
        console.log("number2", this.number2)
        console.log("result", this.result)
     }
     handleOperator(val){
       this.operator = val;
     }
     getResult(){
       switch (this.operator){
         case "+":
           this.result = this.number1 + this.number2;
           break;
         case "-":
           this.result = this.number1 - this.number2;
           break;
          case "/":
           this.result = this.number1 / this.number2;
           break;
           case "*":
           this.result = this.number1 * this.number2;
           break;
       }
     }
     delete(){
       this.number1 = "";
       this.operator = "";
       this.number2 = "";
       this.result = "";
       this.cats1 = [];
       this.cats2 = [];
     }

     getCats1FromApi(){
      fetch(`https://api.thecatapi.com/v1/images/search?limit=${this.number1}&page=${this.number1}&order=DESC`, {
        headers: {
          "x-api-key": "f20f4fa4-309c-4207-89ad-1d67ead65b14",
        }
      })
       .then(response => response.json())
       .then((data) => {
         this.cats1 = data.forEach((cat) => {
           console.log("firstnumber", cat.url)
         })
        });
     }

     getCats2FromApi(){
      fetch(`https://api.thecatapi.com/v1/images/search?limit=${this.number2}&page=${this.number2}&order=DESC`, {
        headers: {
          "x-api-key": "f20f4fa4-309c-4207-89ad-1d67ead65b14",
        }
      })
       .then(response => response.json())
       .then((data) => {
         this.cats2 = data.forEach((cat) => {
           console.log("secondnumber", cat.url)
         })
        });
     }
  

  render() {
    
      return (
        <div class="app-profile">

<div class="calculator">
                    <div class="output">
                     <div class="previous-operand">{!this.operator ? this.number1 : ""}</div>
                     <div class="operator">{this.operator}</div>
                     <div class="current-operand">{!this.operator ? "" : this.number2}</div>
                     <div class="result">{this.result}</div>
                     </div>
                   
                   
                    
                    <div class="calculator-buttons">
                        <button onClick={() => this.delete()}class="btn clear span-2">Borrar</button>
                        <button class="btn orange ">😻</button>
                        <button onClick={() => this.handleOperator("/")} class="btn orange ">÷</button>
                        <button onClick={() => this.handleNumber(7)}  class="btn">7</button>
                        <button onClick={() => this.handleNumber(8)}  class="btn">8</button>
                        <button onClick={() => this.handleNumber(9)}  class="btn">9</button>
                        <button onClick={() => this.handleOperator("*")}  class="btn orange">x</button>
                        <button onClick={() => this.handleNumber(4)}  class="btn">4</button>
                        <button onClick={() => this.handleNumber(5)}  class="btn">5</button>
                        <button onClick={() => this.handleNumber(6)}  class="btn">6</button>
                        <button onClick={() => this.handleOperator("-")}  class="btn orange">-</button>
                        <button onClick={() => this.handleNumber(1)}  class="btn">1</button>
                        <button onClick={() => this.handleNumber(2)}  class="btn">2</button>
                        <button onClick={() => this.handleNumber(3)}  class="btn">3</button>
                        <button onClick={() => this.handleOperator("+")}  class="btn orange">+</button>
                        <button onClick={() => this.handleNumber(0)}  class="btn span-3">0</button>
                        <button onClick={() => this.getResult} class="btn orange equal">=</button>
                    </div>
            </div>
    
         <div class="pictures">{this.cats1}</div>
         
        </div>
      );
    
  }
}
