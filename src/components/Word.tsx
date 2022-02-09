import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { WordObj } from '../../@types/wordtype';
import Definition from './Definition';
import ErrorPage from './ErrorPage';

interface WordProps {
  getDefinition: (word: string, partOfSpeech: string) => Promise<any>;
}

function Word({ getDefinition }: WordProps) {
  const { word, partOfSpeech } = useParams();
  const [definition, setDefinition] = useState<WordObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (word && partOfSpeech) {
      getDefinition(word, partOfSpeech).then((data) => {
        setDefinition(data);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : definition.length ? (
        definition.map((def, i) => {
          return (
            <Definition
              key={i}
              definition={def}
              getDefinition={getDefinition}
              setDefinition={setDefinition}
            />
          );
        })
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default Word;
