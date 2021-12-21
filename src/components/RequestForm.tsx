import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import InputLabel from '@mui/material/InputLabel';
// import FormLabel from '@mui/material/FormLabel';

const RequestForm = () => {
  return (
    <form className="contact-form">
      {/* <FormLabel>Name</FormLabel> */}
      {/* <InputLabel>Email</InputLabel> */}
      <input type="text" className="input-email" placeholder="Email" />
      <input type="text" className="input-email" placeholder="Phone" />
      <TextareaAutosize
        minRows={10}
        aria-label="maximum height"
        placeholder="Ask anything..."
        defaultValue=""
        style={{ width: 600 }}
      />
      <Button variant="contained">Send</Button>
    </form>
  );
};

export default RequestForm;
