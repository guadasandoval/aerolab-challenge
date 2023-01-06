import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../containers/Home';
import UseContext from '../context/UseContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <UseContext>
      <Layout>
        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        </Routes>    
      </Layout>
      </UseContext>
    </BrowserRouter>
    </>
  );
}

export default App;
