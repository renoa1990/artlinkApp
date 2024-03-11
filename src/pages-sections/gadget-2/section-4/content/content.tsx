"use client";

import Link from "next/link";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
// LOCAL CUSTOM HOOK
import useCarousel from "./useCarousel";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { FlexBetween } from "components/flex-box";
import { H2, Paragraph } from "components/Typography";
import ProductCard11 from "components/product-cards/product-card-11";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ==============================================================
type Props = { products: Product[] };
// ==============================================================

export default function Content({ products }: Props) {
  const { carouselRef, responsive, handleNext, handlePrev } = useCarousel();

  return (
    <Container>
      <FlexBetween mt={10} mb={5}>
        <div>
          <H2 fontSize={{ sm: 34, xs: 28 }}>New Arrival Products</H2>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            There are many variations passages
          </Paragraph>
        </div>

        <div>
          <IconButton onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton onClick={handleNext} sx={{ backgroundColor: "white", boxShadow: 2, ml: 0.5 }}>
            <ArrowForward fontSize="small" />
          </IconButton>
        </div>
      </FlexBetween>

      <Carousel ref={carouselRef} slidesToShow={4} responsive={responsive} arrows={false}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <ProductCard11
              title={product.title}
              image={product.thumbnail}
              sale={product.discount ? true : false}
            />
          </Link>
        ))}
      </Carousel>
    </Container>
  );
}
