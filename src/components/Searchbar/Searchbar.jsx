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

// import React, { Component } from 'react';
// import { Header, Field, Btn, Form } from './Searchbar.styled';
// import PropTypes from 'prop-types';
// import { toast } from 'react-hot-toast';
// import { BsSearch } from 'react-icons/bs';

// export class Searchbar extends Component {
//   state = {
//     value: '',
//     page: 1,
//   };

//   // Створюємо методи для контрольованої форми

//   handleChange = e => {
//     this.setState({ value: e.target.value, page: 1 });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.value.trim() === '') {
//       toast.error('Write some text', {
//         position: 'top-right',
//         duration: 1500,
//       });
//       return;
//     }
//     this.props.onSubmit(this.state.value);
//     // this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <Header>
//         <Form onSubmit={this.handleSubmit}>
//           <Btn type="submit">
//             <BsSearch size="16px" />
//           </Btn>

//           <Field
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </Form>
//       </Header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
