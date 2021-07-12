
import './App.css';
import myimage from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxwidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br></br>

<img src={myimage}></img>

<br></br>

<img src={"/imageInPublic.gif"}></img>

</div>

<video width="320" height="240" controls>

<source src={"myvideo.mp4"} type="video/mp4" ></source>

</video>
    </div>
  );
}

export default App;
