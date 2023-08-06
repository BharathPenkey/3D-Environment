import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0.8, 1, 5]}}>
      <Experience />
    </Canvas>
  );
}

export default App;

//deployment link -https://64cf6c832be4dd36e0df54e9--exquisite-snickerdoodle-a0c1d0.netlify.app/