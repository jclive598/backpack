import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M3.5 11.6l4 3.8c.9.8 2.2.8 3.1 0l4-3.8c.6-.6.6-1.5.1-2.1-.6-.6-1.5-.6-2.1-.1l-2 1.9V3.5C10.5 2.7 9.8 2 9 2s-1.5.7-1.5 1.5v7.8l-2-1.9c-.3-.3-.6-.4-1-.4s-.8.2-1.1.5c-.6.6-.5 1.5.1 2.1z" /></svg>;
  }

}