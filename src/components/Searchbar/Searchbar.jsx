import { useState } from 'react';
import { Header, Field, Btn, Form } from './Searchbar.styled';
import { toast } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';

export function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = e => {
    setValue(e.target.value);
    setPage(prevPage => page + 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error('Write some text', {
        position: 'top-right',
        duration: 1500,
      });
      return;
    }
    onSubmit(value);
    // setValue('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <BsSearch size="16px" />
        </Btn>

        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
}
