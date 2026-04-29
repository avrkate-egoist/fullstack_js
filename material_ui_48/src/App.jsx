import "./App.css";
import { Grid } from "@mui/material";
import Header from "./components/Header.jsx";
import MediaCard from "./components/MediaCard.jsx";
import { products } from "./products/products.js";
import PaginationControlled from "./components/PaginationControlled.jsx";
import ActiveLastBreadcrumb from "./components/ActiveLastBreadcrumb.jsx";

function App() {
  return (
    <>
      <Header />
      <div className='main-container'>
        <Grid container spacing={2}>
          {products.map((item) => (
            <Grid key={item.id} xs={12} sm={6} md={4}>
              <MediaCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <PaginationControlled />
      <div className='breadcrumb-container'>
        <ActiveLastBreadcrumb />
      </div>
    </>
  );
}

export default App;
