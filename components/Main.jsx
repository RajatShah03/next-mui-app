import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Main = () => {
  return (
    <Box padding="40px 0">
      <Container maxWidth="xl">
        <ButtonGroup
          variant="contained"
          aria-label="outlined button group"
          sx={{ maxWidth: "100%" }}
        >
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
        </ButtonGroup>
      </Container>
      <br />
      <Container maxWidth="xl">
        <Paper style={{ padding: "20px" }}>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7].map((ele) => (
              <Grid item key={ele} xs={12} sm={6} md={6} lg={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={`card-${ele}`}
                    height="150"
                    image="https://source.unsplash.com/random"
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Title
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem libero neque, velit quas animi porro.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Positive
                    </Button>
                    <Button variant="outlined" size="small" color="warning">
                      Negative
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Main;
