import CategoryPreview from "../../routes/category-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
