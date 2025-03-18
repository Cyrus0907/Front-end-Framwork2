// src/pages/List.tsx
import React, { useEffect, useState } from "react";
import { ProductProps } from "../interface/product"; // Import interface

function List() {
    const [products, setProducts] = useState<ProductProps[]>([]); // Sử dụng interface

    useEffect(() => {
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Danh sách sản phẩm</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price.toLocaleString()} VNĐ</p>
                                <a href="#" className="btn btn-primary">Xem Chi Tiết</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;