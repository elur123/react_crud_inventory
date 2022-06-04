import { useState } from 'react';

function Basic() {
  return (
    <div className="Basic">
      <ButtonState />
    </div>
  );
}

// State
function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitle = () => {
    setTitle("New Title");
  }

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitle}>Update Title</button>
      <button onClick={updateCount}>Update Counter</button>
    </div>
  );
}

// Props
function Data(props) {
  return (
    <div>
      <p>Title: {props.title} </p>
      <p>Counter: {props.count} </p>
    </div>
  );
}


export default Basic;
