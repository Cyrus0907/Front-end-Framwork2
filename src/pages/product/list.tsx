import {Table } from "antd";
function ProductList() {
  // JSX

  const dataSource = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 2500000,
      thumbnail: "https://example.com/nike-af1.jpg",
      description: "Giày thể thao Nike Air Force 1 cổ điển."
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 3200000,
      thumbnail: "https://example.com/adidas-ultraboost.jpg",
      description: "Giày chạy bộ Adidas Ultraboost thoải mái."
    },
    
  ];
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id', 
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }
  ];
  
  <Table dataSource={dataSource} columns={columns} />;
  return <div>
    
  </div>;
}

export default ProductList;