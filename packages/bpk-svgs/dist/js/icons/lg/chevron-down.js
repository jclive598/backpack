import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z" /></svg>);