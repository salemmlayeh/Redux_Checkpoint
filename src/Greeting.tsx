/*
  File: Greeting.tsx
  Description: Converted a JavaScript functional component to TypeScript.
  Changes made:
  1. Added an interface 'GreetingProps' to define the type of props.
  2. Typed the component using React.FC<GreetingProps> for type safety.
  3. Ensures 'name' prop is always a string and provides IntelliSense in editors.
*/

import React from 'react';

// Define the props type
interface GreetingProps {
  name: string;
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
