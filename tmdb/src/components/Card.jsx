/* eslint-disable react/prop-types */
import {
  CardContent,
  CardMedia,
  Card as MUICard,
  Typography,
} from "@mui/material";
export const Card = ({ item, type }) => {
  return (
    <MUICard>
      <CardMedia
        component="img"
        image={
          item.image || `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
        height={150}
        alt={item.title}
      />

      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {item.title || item.name}
        </Typography>
      </CardContent>
    </MUICard>
  );
};
