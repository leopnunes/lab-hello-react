import burguinho from './images/menu-top-xs.png'
import ironLogo from './images/ironhack-logo-xs.png'
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='navBar'>
      <img className='ironLogo' src={ironLogo} alt="ironlogo"/>
      <img className='burguinho' src={burguinho} alt="burguinho"/>
      </div>

    <div className="header">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button>Awesome!</button>
      </div>

    <div className='body'>
      <img className='img1' src={img1} alt="img1"/>
      <img className='img2' src={img2} alt="img2"/>
      <img className='img3' src={img3} alt="img3"/>
      <img className='img4' src={img4} alt="img4"/>
    </div>

    <div className='body'>
    <h4>Declarative</h4>

    </div>

    </div>
  );
}

export default App;