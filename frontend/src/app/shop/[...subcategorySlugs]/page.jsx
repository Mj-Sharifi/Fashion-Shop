import fetchData from "@/Utils/fetchData";
import React from "react";
import { Container, Grid } from "@mui/material";
import ProductCard from "@/Components/ProductCard";
export default async function Subcategory({ params }) {
  const products = await fetchData(
    process.env.BASE_API +
      `products?populate=*&filters[categories][title][$eq]=${
        params.subcategorySlugs[0].charAt(0).toUpperCase() +
        params.subcategorySlugs[0].slice(1)
      }&filters[subcategories][title][$eq]=${params.subcategorySlugs[1]}`
  );

  console.log(products);
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <Grid item sm={3}></Grid>
        <Grid item sm={9}>
          <Grid
            container
            sx={{ width: "100%" }}
            display={"flex"}
            justifyContent={{ xs: "center", sm: "inherit" }}
          >
            {products.data?.map((e, i) => (
              <Grid key={i} item xs={9} sm={6} md={4} xxl={3}>
                <ProductCard
                  id={e.id}
                  title={e?.attributes.title}
                  rating={+e?.attributes.rating?.slice(1)}
                  imgPrimary={
                    process.env.NEXT_PUBLIC_BASE_URL +
                    e?.attributes.imageprimary.data.attributes.url
                  }
                  imgSecondary={
                    process.env.NEXT_PUBLIC_BASE_URL +
                    e?.attributes.imagesecondary.data.attributes.url
                  }
                  discount={e?.attributes.discount}
                  price={e?.attributes.price}
                  isNew={e?.attributes.isNew}
                  isAvailable={e?.attributes.isAvailable}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
