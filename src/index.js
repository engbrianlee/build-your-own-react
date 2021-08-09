import * as React from "react";
import ReactDOM from "react-dom";

/**
 * A react element is just an object.
 * - element refer to react elements
 * - nodes refer to dom elements
 */
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "hello"
  }
};

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
