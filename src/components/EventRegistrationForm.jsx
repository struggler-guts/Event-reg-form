// src/components/EventRegistrationForm.jsx

import React from 'react';
import useForm from '../hooks/useForm';
import FormField from './FormField';
import FormSummary from './FormSummary';

const initialState = {
  name: '',
  email: '',
  age: '',
  hasGuest: false,
  guestName: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (isNaN(values.age) || Number(values.age) <= 0) {
    errors.age = 'Age must be a number greater than 0';
  }
  if (values.hasGuest && !values.guestName.trim()) {
    errors.guestName = 'Guest name is required';
  }
  return errors;
};

const EventRegistrationForm = () => {
  const { values, errors, isSubmitting, isValid, handleChange, handleSubmit } = useForm(
    initialState,
    validate
  );

  if (isSubmitting && isValid) {
    return <FormSummary data={values} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Event Registration Form</h1>
      <FormField
        label="Name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Age"
        name="age"
        type="number"
        value={values.age}
        onChange={handleChange}
        error={errors.age}
      />
      <div className="checkbox-field">
        <input
          type="checkbox"
          name="hasGuest"
          checked={values.hasGuest}
          onChange={handleChange}
        />
        <label htmlFor="hasGuest">Are you attending with a guest?</label>
      </div>
      {values.hasGuest && (
        <FormField
          label="Guest Name"
          name="guestName"
          type="text"
          value={values.guestName}
          onChange={handleChange}
          error={errors.guestName}
        />
      )}
      <button type="submit" disabled={!isValid || isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default EventRegistrationForm;