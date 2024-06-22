import React from 'react';

const FormSummary = ({ data }) => (
  <div>
    <h2>Registration Summary</h2>
    <p>Name: {data.name}</p>
    <p>Email: {data.email}</p>
    <p>Age: {data.age}</p>
    <p>Attending with a guest: {data.hasGuest ? 'Yes' : 'No'}</p>
    {data.hasGuest && <p>Guest Name: {data.guestName}</p>}
  </div>
);

export default FormSummary;