import Card from "../components/basic-components/OutlineCard";

function EcomCards() {
  const ecom = [
    {
        dishName: "Chips",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/chips.png",
        avatarClassName: "",
    },
    {
        dishName: "Side Dish",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/fries.png",
        avatarClassName: "",
    }, {
        dishName: "Bread",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/bread.png",
        avatarClassName: "",
    }, {
        dishName: "Bolthouse",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/bottle.png",
        avatarClassName: "",
    }, {
        dishName: "Chips",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/chips.png",
        avatarClassName: "",
    },
    {
        dishName: "Side Dish",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/fries.png",
        avatarClassName: "",
    }, {
        dishName: "Bread",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/bread.png",
        avatarClassName: "",
    }, {
        dishName: "Bolthouse",
        dishPrice: "10",
        dishType: "Breakfast",
        imgAlt: "food",
        imgSrc: "food/bottle.png",
        avatarClassName: "",
    }, 
    
  ];

  return (
    <div className="grid grid-cols-4  gap-x-4 bg-white w-[60%] py-4 pb-20">
      {ecom.map((information) => (
        <Card
          cardType="ecom"
          dishName={information.dishName}
          dishPrice={information.dishPrice}
          dishType={information.dishType}
          imgAlt={information.imgAlt}
          imgSrc={information.imgSrc}
          avatarClassName={""}
        />
      ))}
    </div>
  );
}
export default EcomCards;
