import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WordObj } from '../../@types/wordtype';
import Definition from './Definition';

interface PartOfSpeechProps {
  getDefinition: (word: string, partOfSpeech: string) => Promise<any>;
}
function PartOfSpeechComp({ getDefinition }: PartOfSpeechProps) {
  const { partOfSpeech } = useParams();
  const [definition, setDefinition] = useState<WordObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (partOfSpeech) {
      getRandomDefinition(partOfSpeech);
    }
  }, []);

  const getRandomDefinition = async (part: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/part-of-speech/${part}`
      );
      setDefinition([response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        definition?.map((deff, i) => (
          <Definition
            key={i}
            definition={deff}
            getDefinition={getDefinition}
            setDefinition={setDefinition}
          />
        ))
      )}
    </>
  );
}

export default PartOfSpeechComp;
