import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "../interface/product";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(` http://localhost:3000/products`);
        setProducts(response.data);
        console.log("Dữ liệu sản phẩm:", response.data);
      } catch (error) {
        const axiosError = error as AxiosError;

        let errMessage = "Lỗi khi tải dữ liệu!";
        if (axiosError.response && axiosError.response.data) {
          const data = axiosError.response.data as { message?: string };
          errMessage = data.message || errMessage;
        } else if (axiosError.message) {
          errMessage = axiosError.message;
        }

        toast.error(errMessage);
        setError(errMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
        <h1>Sản phẩm nổi bật</h1>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
