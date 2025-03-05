import React from "react";
import ReactDOM from "react-dom/client"
import Wallpaper,{Title} from "./Components/card";
import { Button } from "./Components/button";

const domRoot=document.getElementById("parent")
const reactRoot=ReactDOM.createRoot(domRoot)
const App = () => {
  return (
    <div>
        <Button color="submit">Submit</Button>
        <Button color="danger">Cancel</Button>
        <h1>Hi It is Krossiar</h1>
        <Wallpaper username={Title}></Wallpaper>
        <Wallpaper username="Gogi"></Wallpaper>
        <Wallpaper username="Vipul"></Wallpaper>
        {/*Card({username:"Krossiar"})*/}
    </div>

    //React.createElement("h1",{},"hello from App")
  )
}

reactRoot.render(<App/>)