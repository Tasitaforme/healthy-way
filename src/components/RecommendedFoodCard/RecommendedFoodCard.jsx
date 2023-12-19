import { useEffect, useState } from 'react';
import { fetchRecommendedFood } from '../../redux/api/api.recommended.js';
import {
  List,
  Item,
  ImgThumb,
  Img,
  ProductDescription,
  ProductName,
  Value,
} from './RecommendedFoodCard.styled.js';

export const RecommendedFoodCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getRecommendedFood = async () => {
      const products = await fetchRecommendedFood();
      const randomProduct = products
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
      setProducts(randomProduct);
    };
    getRecommendedFood();
  }, []);

  return (
    <List>
      {products.map((product) => (
        <Item key={product._id}>
          <ImgThumb>
            <Img src={product.img} alt={product.name} />
          </ImgThumb>
          <ProductDescription>
            <ProductName>{product.name}</ProductName>
            <Value>
              {product.amount} {}
              <span>{product.calories} calories</span>
            </Value>
          </ProductDescription>
        </Item>
      ))}
    </List>
  );
};
