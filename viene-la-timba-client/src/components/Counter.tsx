import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [hidden, setHidden] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      {hidden ? <h1>count hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>count!</button>
      <button onClick={() => setHidden(!hidden)}>hide/show</button>
    </>
  );
}
