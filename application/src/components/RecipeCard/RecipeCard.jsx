import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import withHocs from "./RecipeCardHoc";
import RecipeDialog from "../RecipeDialog/RecipeDialog";

function RecipeCard(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const { classes, data, onOpen } = props;
  const { id, name, description } = data;

  return (
    <React.Fragment>
      <RecipeDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        id={id}
      />
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image='https://source.unsplash.com/random'
            title='Image title'
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              View
            </Button>
            <Button size='small' color='primary' onClick={() => onOpen(data)}>
              Edit
            </Button>
            <Button
              size='small'
              color='secondary'
              onClick={() => setOpenDialog(true)}
            >
              DELETE
            </Button>
          </CardActions>
        </Card>
      </Grid>
      </React.Fragment>
  );
}

export default withHocs(RecipeCard);
