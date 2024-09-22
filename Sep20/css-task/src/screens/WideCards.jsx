import Card from "../components/basic-components/OutlineCard";

function WideCards() {
  const ecom = [
    {
        wideName:"Bread",
         widePrice:10,
    },
    {
        wideName:"Bread",
         widePrice:10,
    },
    {
        wideName:"Bread",
         widePrice:10,
    },
    {
        wideName:"Bread",
         widePrice:10,
    },
    {
        wideName:"Bread",
         widePrice:10,
    },{
        wideName:"Bread",
         widePrice:10,
    }

    
  ];

  return (
    <div className="grid grid-cols-2  gap-x-2 bg-white w-[40%]">
      {ecom.map((information) => (
        <Card
          cardType="wide"
          wideName={information.wideName} widePrice={information.widePrice} imgAlt={"imgAlt"} imgSrc={"food/bread.png"}
        />
      ))}
    </div>
  );
}
export default WideCards;
