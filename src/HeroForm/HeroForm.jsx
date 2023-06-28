import { useState } from 'react';
import { useDispatch } from 'react-redux';

export function HeroForm() {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [power, setPower] = useState('');

  const dispatch = useDispatch();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAlias = (event) => {
    setAlias(event.target.value);
  };

  const handlePower = (event) => {
    setPower(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'CREATE_SUPERHERO',
      payload: {
        superheroName: name,
        onDuty: true,
        alias,
        power
      }
    });

    setName('');
    setAlias('');
    setPower('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={handleName} value={name} />
      <input type="text" placeholder="Alias" onChange={handleAlias} value={alias} />
      <input type="text" placeholder="Power" onChange={handlePower} value={power} />
      <input type="submit" />
    </form>
  );
}
