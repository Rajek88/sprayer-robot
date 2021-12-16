import { ref, set } from "firebase/database";
import { database } from "./config";

function App() {
  const enablePump = async () => {
    await set(ref(database, "cmd/"), {
      cmd: "true",
    });
    setTimeout(() => {
      console.log("Now Disabling the pump and moving on");
      disablePump();
    }, 3000);
    return;
  };
  const disablePump = async () => {
    await set(ref(database, "cmd/"), {
      cmd: "false",
    });
    return;
  };
  const spray = async () => {
    await enablePump();
    await disablePump();
  };
  return (
    <div className="App">
      <button onClick={spray}>Spray</button>
    </div>
  );
}

export default App;
