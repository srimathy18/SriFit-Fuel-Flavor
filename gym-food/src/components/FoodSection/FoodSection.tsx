import FoodItem from "../FoodItem/FoodItem";
import Food1 from "../../assets/images/f1.png";
import Food2 from "../../assets/images/f2.png";
import Food3 from "../../assets/images/f3.png";
import Food4 from "../../assets/images/f4.png";
import Food5 from "../../assets/images/f5.png";
import Food6 from "../../assets/images/f6.png";
import Food7 from "../../assets/images/f7.png";
import Food8 from "../../assets/images/f8.png";
import { useState } from "react";
import * as uuid from "uuid";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { url } from "../../url";

interface FoodTypes {
  __id: string;
  type: string;
  imgSrc: string;
  title: string;
  description: string;
  price: number;
  
}

async function fetchFoodItems(): Promise<FoodTypes[]> {
  const response = await fetch(`${url}/recipes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

const FoodSection = () => {
  const [footItem, setFoodItem] = useState<FoodTypes | null>(null);
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["foodItems"], queryFn: fetchFoodItems });

  return (
    <section className="food_section layout_padding-bottom mt-4">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>

        {/* Filters Menu */}
        <ul className="filters_menu">
          <li className="active" data-filter="*">
            All
          </li>
          <li data-filter=".burger">Drink</li>
          <li data-filter=".pizza">Salad</li>
        </ul>

        <div className="filters-content">
          <div className="row grid">
            {/* Menu Items */}
            {query.isLoading && <p>Loading...</p>}
            {query.data &&
              query.data.map((foodItem: FoodTypes) => {
                return (
                  <FoodItem
                    key={foodItem.__id}
                    category={foodItem.type}
                    imageSrc={foodItem.imgSrc}
                    itemName={foodItem.title}
                    description={foodItem.description}
                    price={foodItem.price}
                    type={foodItem.type}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
