interface IDomElement {
  tag:string;
  print();
}

class DomElement implements IDomElement{
  tag: string;
  child: string;
  constructor(tag: string){
    this.tag = tag;
  }

  add(element: IDomElement){
    this.child = element.tag;
  }
  
  print(){
   console.log(`<${this.tag}>`);
   if(this.child){new DomElement(this.child).print()}
   console.log(`<${this.tag}>`);
  }
}

class TextNode implements IDomElement{
  tag:string;
  text:string;
  constructor(text: string){
    this.text = text;
  }
  print(){
    console.log(this.text);
  }
}

let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(p1);
div.add(p2);
html.add(div);

html.print();


