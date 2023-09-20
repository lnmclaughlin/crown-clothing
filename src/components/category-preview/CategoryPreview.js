import ProductCard from "../product-card/ProductCard";

import "./category-preview.styles.js";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.js";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
