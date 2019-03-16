window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  class Option {
    constructor(width, height, bg, fontSize, border, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
      this.border = border;
    }
    divNew() {
      let div = document.createElement('div'),
        dom = document.body;
      div.innerHTML = 'Сегодня, я стал еще чуть-чуть умней!';
      div.style.cssText = 
      `height: ${this.height}px;
      width: ${this.width}px; 
      background-color: ${this.bg};
      font-size: ${this.fontSize}px; 
      text-align: ${this.textAlign};
      border: ${this.border};`;
      dom.appendChild(div);
    }
  }
  let div = new Option("100%", "50", "#a9f4c8", "21", "1px solid #4e9074", "center");
  div.divNew();
});