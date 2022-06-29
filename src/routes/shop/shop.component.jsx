import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoryPreview from "../../routes/category-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
