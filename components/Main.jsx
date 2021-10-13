import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
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
                    <Button size="small">Positive</Button>
                    <Button size="small" color="warning">
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
