import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M22 8.941V6.006a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.938a2.998 2.998 0 0 1 0 5.995v3.055a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3.053a3 3 0 1 1 0-6zm-9 7.916c0 .1-.043.143-.143.143H11.4c-.1 0-.143-.043-.143-.143V9.229l-1.686.942a.323.323 0 0 1-.143.043c-.071 0-.114-.028-.114-.128V8.557a.248.248 0 0 1 .157-.214l2.357-1.271a.432.432 0 0 1 .23-.072h.799c.1 0 .143.043.143.143z" /></svg>);