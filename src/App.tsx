import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Word from './components/Word';
import SearchAppBar from './components/SearchAppBar';
import PartOfSpeechComp from './components/PartOfSpeech';
import HomePage from './components/HomePage';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const getDefinition = async (word: string, partOfSpeech: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/word/${word}/${
          partOfSpeech === 'All' ? '' : partOfSpeech
        }`
      );
      return response.data;
    } catch (error) {
      toast.error('Error ocurred', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/word/:word/:partOfSpeech"
            element={<Word getDefinition={getDefinition} />}
          />
          <Route
            path="/partOf-speech/:partOfSpeech"
            element={<PartOfSpeechComp getDefinition={getDefinition} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
