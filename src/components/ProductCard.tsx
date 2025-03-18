// src/components/ProductCard.tsx
import React from "react";
import { ProductProps } from "../interface/product";
import { Card } from "react-bootstrap";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="product-card border-0 shadow-sm p-3">
      <Card.Img
        variant="top"
        src={product.image}  
        className="product-image"
        alt={product.name}  
      />
      <Card.Body className="text-center">
        <Card.Title className="fw-bold">{product.name}</Card.Title>
        <Card.Text className="text-danger fw-bold">
          {product.price.toLocaleString()}₫
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;