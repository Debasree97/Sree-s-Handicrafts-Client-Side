import { Container } from '@mui/material';
import React from 'react';
import notFound from '../../images/notFound.png';

const NotFound = () => {
    return (
      <Container>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
            height: "80vh",
          }}
        >
          <img
            src={notFound}
            style={{ width: "50%" }}
            alt=""
          />
        </Container>
      </Container>
    );
};

export default NotFound;