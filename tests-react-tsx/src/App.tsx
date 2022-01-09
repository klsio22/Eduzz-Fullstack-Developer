import { useState } from "react";
import { Button } from "./components/Button";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
function sum(number1: number, number2: number) {
  alert(number1 + number2);
}

function App() {
  const [cup, setCup] = useState("");

  return (
    <div>
      <Button type="button" onClick={() => sum(15, 6)} name={"Clique aqui"} />

      <ComponentA>
        <ComponentB>
          <Button
            type="button"
            onClick={() => sum(8, 8)}
            name={"Clique aqui"}
          />
        </ComponentB>
      </ComponentA>
    </div>
  );
}

export default App;
