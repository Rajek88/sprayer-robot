import { ref, set } from "firebase/database";
import { database } from "./config";

function App() {
  const enablePump = async () => {
    await set(ref(database, "cmd/"), {
      cmd: "true",
    });
    // to execute a funtion after a delay dont pass the () with function name
    setTimeout(() => {
      disablePump();
    }, 3000);
    return;
  };
  const disablePump = async () => {
    console.log("Now Disabling the pump and moving on");
    await set(ref(database, "cmd/"), {
      cmd: "false",
    });
    return;
  };
  const spray = async () => {
    await enablePump();
  };
  return (
    <div className="App">
      <button onClick={spray}>Spray</button>
    </div>
  );
}

export default App;
