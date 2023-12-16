import { useEffect, useState } from 'react';
import { fetchRecommendedFood } from '../../api.recommended';

export const RecommendedFoodCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getRecommendedFood = async () => {
      const products = await fetchRecommendedFood();
      setProducts(products);
    };
    getRecommendedFood();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Олежа</h2>
              <p>Работай</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
