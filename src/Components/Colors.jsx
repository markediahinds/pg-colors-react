import { useState, useEffect } from "react";
import Color from "./Color";

const API = import.meta.env.VITE_API_URL;

function Colors() {
  const [colors, setColors] = useState([]);

  // Lifecycle Methods -- in class components, but useEffect handles the life cycle of a component here in functional components

  useEffect(() => {
    fetch(`${API}/colors`)
    .then(res => res.json())
    .then(res =>  {
      console.log(res)
      setColors(res)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="Colors">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>See this color</th>
              <th>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((color) => {
              return <Color key={color.id} color={color} id={color.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Colors;
