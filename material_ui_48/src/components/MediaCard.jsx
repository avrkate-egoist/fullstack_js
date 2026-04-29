import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          sx={{
            color: "#fff",
            backgroundColor: "#b8a9c9",
            "&:hover": {
              backgroundColor: "#2e1a47",
            },
          }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
