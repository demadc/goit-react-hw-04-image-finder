import React, { Component } from 'react';
import { Header, Form, Btn, Field } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  // Створюємо методи для контрольованої форми
  handleChange = e => {
    this.setState(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast('Enter key words for search');
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  //   toast('Write some text', {
  // position: "top-center",
  // autoClose: 2500,
  // hideProgressBar: false,
  // closeOnClick: true,
  // pauseOnHover: true,
  // draggable: true,
  // progress: undefined,
  // theme: "light",
  // });

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <BsSearch size="40" />
          </Btn>

          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
