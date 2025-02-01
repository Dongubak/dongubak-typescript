import React from 'react';

interface Props {
   name: string,
   color?: string, /// optional props
}

const Hello = ({name, color='blue'}: Props) => {
  return (
    <div>
      <h1 style={{color: color}}>Hello {name}</h1>
    </div>
  )
}

export default Hello;