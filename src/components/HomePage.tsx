import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { PART_OF_SPEECH_DICT } from '../helpers/partOfSpeech';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [part, setPart] = useState('All');
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/word/' + input + '/' + part);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPart(event.target.value);
  };
  return (
    <div
      style={{
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '30%',
      }}
    >
      <h1>Welcome to Dictionary</h1>
      <TextField
        id="filled-basic"
        label="Search"
        variant="filled"
        onChange={(e) => setInput(e.target.value)}
      />
      <FormControl variant="filled" sx={{ mt: '6%', minWidth: 120 }}>
        <InputLabel id="part">Part</InputLabel>
        <Select
          labelId="part"
          label="Part"
          value={part}
          onChange={handleChange}
        >
          <MenuItem value={'All'}>All</MenuItem>
          {PART_OF_SPEECH_DICT.map((part) => {
            return <MenuItem value={part}>{part}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        sx={{ mt: '6%', minWidth: 120 }}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </div>
  );
}

export default HomePage;
