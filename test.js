import { useState } from "react";

const data = [
  {
    name: "foo",
    code: "gdfgsd"
  },
  {
    name: "bar",
    code: "gfdsgsdfgfd"
  }
];

const App = ({ setsList = data }) => {
  const [state, setState] = useState(setsList);

  const handleChange = (e, i) => {
    const { value, name } = e.target;

    const newState = [...state];
    newState[i] = {
      ...newState[i],
      [name]: value
    };

    console.log(newState);
    setState(newState);
  };

  return (
    <div className="App">
      {state.map(({ name, code }, index) => {
        return (
          <div key={index}>
            <label>
              name
              {":  "}
              <input
                name="name"
                value={name}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <label>
              code
              {":  "}
              <input
                name="code"
                value={code}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default App;
