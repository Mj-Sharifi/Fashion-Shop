"use client";
import { addToWishlist } from "@/Lib/Features/Wishlist/wishSlice";
import { useAppDispatch, useAppSelector } from "@/Lib/hooks";
import {
  FavoriteBorderOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

import React from "react";


const isInWishlist = (id,wishlist) =>{
  let isIn = false
  for (const w of wishlist) {
    if(id==w.id){
      isIn = true
      break
    }
  }
  return isIn
}
export default function ProductCard({
  id,
  title,
  imgPrimary,
  imgSecondary,
  rating,
  price,
  discount,
  isNew,
  isAvailable,
}) {
  
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  return (
    <Stack
      width={"100%"}
      overflow={"hidden"}
      position={"relative"}
      alignItems={"center"}
      sx={{
        "&:hover": {
          "img:nth-child(1)": {
            transform: "translateX(-100%)",
          },
          "img:nth-child(2)": {
            visibility: "visible !important",
            opacity: "1 !important",
            transform: "translateX(0)",
          },
          "& .buttons div, .buttons button": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      }}
    >
      <Box width={"100%"} position={"relative"} overflow={"hidden"} mb={4}>
        <Box
          component={"img"}
          src={imgPrimary}
          sx={{ width: "100%", transition: "0.5s", objectFit: "contain" }}
        />
        <Box
          component={"img"}
          src={imgSecondary}
          sx={{
            transition: "0.5s",
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            visibility: "hidden",
            opacity: "0.8",
            transform: "translateX(100%)",
          }}
        />
        <Stack
          className="buttons"
          width={"100%"}
          direction={"row"}
          position={"absolute"}
          bottom={"0"}
        >
          <IconButton
            disableRipple
            sx={{
              transition: "0.3s",
              width: "15%",
              height: "40px",
              borderRadius: "0",
              bgcolor: `${isInWishlist(id,wishlist)?"colors.lightblack":"colors.violet"}`,
              color: "text.white",
              transform: "translateY(100%)",
              opacity: "0",
              "&:hover": {
                bgcolor: "colors.lightblack",
              },
            }}
            onClick={() =>
              dispatch(
                addToWishlist({
                  id,
                  title,
                  imageprimary: imgPrimary,
                  price,
                  discount,
                  isAvailable,
                })
              )
            }
            disabled={isInWishlist(id,wishlist)}
          >
            <FavoriteBorderOutlined/>
          </IconButton>

          <Link
            href={`/product/${id}/${title.toLowerCase().split(" ").join("-")}`}
            style={{ width: "70%" }}
          >
            <Button
              sx={{
                transition: "0.3s",
                transitionDelay: "0.1s",
                width: "100%",
                height: "40px",
                fontSize: "14px",
                borderRadius: "0",
                bgcolor: `${isAvailable ? "colors.violet" : "colors.lightblack"}`,
                color: "text.white",
                border: "1px solid #ffffff90",
                borderBottom: "0",
                borderTop: "0",
                transform: "translateY(100%)",
                opacity: "0",
                "&:hover": {
                  transitionDelay: "0",
                  bgcolor: "colors.lightblack",
                },
              }}
            >
              {isAvailable ? "More info ..." : "Out of Stock"}
            </Button>
          </Link>
          <IconButton
            disableRipple
            sx={{
              transition: "0.3s",
              transitionDelay: "0.2s",
              width: "15%",
              height: "40px",
              borderRadius: "0",
              bgcolor: "colors.violet",
              color: "text.white",
              transform: "translateY(100%)",
              opacity: "0",
              "&:hover": {
                transitionDelay: "0",
                bgcolor: "colors.lightblack",
              },
            }}
          >
            <VisibilityOutlined />
          </IconButton>
        </Stack>
      </Box>
      <Typography component={"h2"}>{title}</Typography>
      <Rating readOnly precision={0.5} value={rating} />
      <Stack direction={"row"}>
        {discount ? (
          <Typography>
            ${(price - (price * discount) / 100).toFixed(2)}-
            <span
              style={{
                textDecoration: "strikethrough",
                color: "#8e8e8e",
              }}
            >
              ${price.toFixed(2)}
            </span>
          </Typography>
        ) : (
          <Typography>{`$${price.toFixed(2)}`}</Typography>
        )}
      </Stack>
      <Stack sx={{ position: "absolute", top: "5%", right: "5%" }} gap={1}>
        {isNew && (
          <Chip
            variant="filled"
            label="New"
            sx={{
              width: "65px",
              paddingY: "3px",
              borderRadius: "5px",
              bgcolor: "colors.violet",
              color: "text.white",
              fontSize: "14px",
              fontWeight: "500",
            }}
          />
        )}
        {discount ? (
          <Chip
            variant="filled"
            label={`-${discount}%`}
            sx={{
              width: "65px",
              paddingY: "3px",
              borderRadius: "5px",
              bgcolor: "colors.pink",
              color: "text.white",
              fontSize: "14px",
              fontWeight: "500",
            }}
          />
        ) : undefined}
      </Stack>
    </Stack>
  );
}
