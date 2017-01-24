var DomElement = (function () {
    function DomElement(tag) {
        this.tag = tag;
    }
    DomElement.prototype.add = function (element) {
        this.child = element.tag;
    };
    DomElement.prototype.print = function () {
        console.log("<" + this.tag + ">");
        if (this.child) {
            new DomElement(this.child).print();
        }
        console.log("<" + this.tag + ">");
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
div.add(p1);
div.add(p2);
html.add(div);
html.print();
