import React from 'react';

const Notification = ({ message }) => {
  const style = {
    color: message.type === 'success' ? 'green' : 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (!message || !message.type || !message.content) return null;

  return (
    <div style={style}>
      {message.type === 'success' ? 'Success: ' : 'Error: '}
      {message.content}
    </div>
  );
};

export default Notification;
