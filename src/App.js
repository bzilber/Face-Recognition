import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import 'tachyons'; seems to not matter if placed here or index.js, so far..

function App() {
  return (
    <div className="App">
      <Navigation/>
       <Logo/>
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
