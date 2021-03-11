
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import img1 from './components/images/layout/bg1.jpg'
import img2 from './components/images/layout/bg2.jpg'

function App() {
  return (
    <div className="App">

      <Header title="Hello, how are you?" 
              desc="Welcome to my game"/>

      <Layout title="First player" 
              desc="Description"
              urlBg={img1}/>

      <Layout title="Second player" 
              desc="Description"
              colorBg="purple"/>

      <Layout title="Third player" 
              desc="Description"
              urlBg={img2}/>

      <Footer />
      
    </div>
  );
}

export default App;
