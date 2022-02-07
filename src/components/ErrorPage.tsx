import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>No such word..</h1>
      <button onClick={() => navigate('/')}>search a new word</button>
    </>
  );
}

export default ErrorPage;
