import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 1, 6]}}>
      <Experience />
    </Canvas>
  );
}

export default App;
