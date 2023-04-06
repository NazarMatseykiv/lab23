import React, { useState } from 'react';

function ProductTable({ products, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <ProductRow product={product} />
            <td>{product.price * product.quantity}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ProductRow({ product }) {
  return (
    <>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
    </>
  );
}

function Task7() {
  const [products, setProducts] = useState([
    { name: 'Coca Cola', price: 10, quantity: 5 },
    { name: 'Lays', price: 20, quantity: 3 },
    { name: 'Water', price: 15, quantity: 2 },
  ]);

  const handleDelete = (index) => {
    setProducts((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
}

export default Task7;
