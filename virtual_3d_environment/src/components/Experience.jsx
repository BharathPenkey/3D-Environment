import { OrbitControls } from "@react-three/drei";
import {Office} from "./Office";
import { Avatar } from "./Avatar";



export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1}/>
       <Office/>
       <Avatar position={[0.3, 0, 0.9]}/>
      
    </>
  );
};
