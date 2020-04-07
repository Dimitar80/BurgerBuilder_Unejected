// Functional component, that i also won't(will not) manage any state with hooks!
// I will just get 'props' as an input and i will return props.children,
// no wrapping elemnent, no JSX - which is why we dont need to import React from 'react'!

const AuxWrap = (props) => props.children;

export default AuxWrap;
