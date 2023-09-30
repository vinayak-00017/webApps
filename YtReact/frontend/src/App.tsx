import { BrowserRouter, Route, Routes } from "react-router-dom"
import { VideoGrid } from "./components/VideoGrid";
import { Appbar } from "./components/Appbar";
import { Signin } from "./components/Signin";
import { Watch } from "./components/Watch";
import { RecoilRoot } from "recoil";



function App(){

  return (<div>
    <RecoilRoot>
    <BrowserRouter>
    <Appbar></Appbar>
      <Routes>
        <Route path={"/"} element={<VideoGrid/>}/>
        <Route path={"/watch"} element={<Watch/>}/>
        <Route path={"/signin"} element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
    
  </div>
    
  )
}

export default App;
