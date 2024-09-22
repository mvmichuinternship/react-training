import Card from "../components/basic-components/OutlineCard";

function InfoCards() {
  const info = [
    {
      infoData: "Organically Produce",
      infoName: "VEGETABLES",
      classNameLeft: "bg-emerald-100",
      classNameRight: "bg-emerald-400 ",
      buttonClass: "bg-emerald-500",
      imgAlt: "info-food",
      imgSrc: "food/info-card/veg.png",
    },
    {
      infoData: "flat 20% off",
      infoName: "FRESH FOODS",
      classNameLeft: "bg-amber-100",
      classNameRight: "bg-amber-400 ",
      buttonClass: "bg-amber-500",
      imgAlt: "info-food",
      imgSrc: "food/info-card/veg.png",
    },
    {
      infoData: "Gluten free",
      infoName: "SUPER SALADS",
      classNameLeft: "bg-emerald-100",
      classNameRight: "bg-emerald-400 ",
      buttonClass: "bg-emerald-500",
      imgAlt: "info-food",
      imgSrc: "food/info-card/veg.png",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-x-4 bg-white w-full pt-36 -pb-20">
      {info.map(information => (
        
        <Card
          cardType="info"
          infoData={information.infoData}
          infoName={information.infoName}
          classNameLeft={information.classNameLeft}
          classNameRight={information.classNameRight}
          buttonClass={information.buttonClass}
          imgAlt={information.imgAlt}
          imgSrc={information.imgSrc}
          avatarClassName={""}
        />
        
      ))}
    </div>
  );
}
export default InfoCards;
