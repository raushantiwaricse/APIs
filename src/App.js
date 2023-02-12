import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurant").then((result) => {
      result.json().then((response) => {
        // console.log(response);
        setData(response);
      });
    });
  }, []);
  console.log(data);

  return (
    <div className="App">
      <table border="2">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Author</td>
        </tr>

        {data.map((e, key) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.author}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
