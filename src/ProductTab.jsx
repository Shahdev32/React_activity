import React from 'react';
import Product from './Product.jsx';

function ProductTab() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Product title="Logistish Master" idx={0} />
      <Product title="Apple pencil" idx={1} />
      <Product title="Zebronics Zeb-tranformer" idx={2} />
      <Product title="Peteronics" idx={3} />
    </div>
  );
}

export default ProductTab;
