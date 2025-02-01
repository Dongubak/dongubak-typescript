import React from 'react';

const Counter = () => {
   const [number, setNumber] = React.useState(0);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumber(Number(e.target.value));
   };

   return (
      <div>
         <input onChange={onChange}></input>
         <p>{number}</p>
      </div>
   )
}

export default Counter;