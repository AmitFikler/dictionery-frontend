import { useNavigate } from 'react-router-dom';
import { WordObj } from '../../@types/wordtype';
import ErrorPage from './ErrorPage';
interface DefinitionProps {
  getDefinition: (word: string, partOfSpeech: string) => Promise<any>;
  definition: WordObj | undefined;
  setDefinition: React.Dispatch<React.SetStateAction<WordObj[]>>;
}
const Definition = ({
  definition,
  getDefinition,
  setDefinition,
}: DefinitionProps) => {
  const navigate = useNavigate();
  const navigating = (word: string) => {
    if (word && getDefinition) {
      const cleanWord = word.replace(/[^a-zA-Z ]/g, '');
      getDefinition(cleanWord, 'All').then((data) => {
        setDefinition(data);
        navigate('/word/' + cleanWord + '/All');
      });
    }
  };

  if (!definition) {
    return <ErrorPage />;
  }
  return (
    <div>
      <h1>
        {definition.word}-<i>{definition.pos}</i>
      </h1>
      {definition.definitions.map((defin, i) => (
        <div className="word-def ">
          <p>
            {i + 1}.{' '}
            {defin.split(' ').map((word) => {
              return (
                <span
                  onClick={() => {
                    navigating(word);
                  }}
                >
                  {word}
                  {'  '}
                </span>
              );
            })}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Definition;
