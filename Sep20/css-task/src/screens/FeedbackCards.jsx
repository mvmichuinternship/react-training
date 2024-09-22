import Card from "../components/basic-components/OutlineCard";

function FeedbackCards() {
  const ecom = [
    {
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.",
      userName: "Mridula Vinod",
      userOccupation: "Associate Engineer",
      imgAlt: "profile",
      imgSrc: "avatars/avatar2.png",
      avatarClassName: "",
    },
    {
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.",
        userName: "Vignesh",
        userOccupation: "Associate Engineer",
        imgAlt: "profile",
        imgSrc: "avatars/avatar1.png",
        avatarClassName: "",
      },
      {
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.",
        userName: "Monish",
        userOccupation: "Associate Engineer",
        imgAlt: "profile",
        imgSrc: "avatars/avatar3.png",
        avatarClassName: "",
      },
  ];

  return (
    <div className="flex flex-wrap  gap-x-2 bg-white w-full bg-transparent justify-center items-center py-8">
      {ecom.map((information) => (
        <Card
          cardType="feedback"
          feedback={
            information.feedback
          }
          userName={information.userName}
          userOccupation={information.userOccupation}
          imgAlt={information.imgAlt}
          imgSrc={information.imgSrc}
          avatarClassName={information.avatarClassName}
        />
      ))}
    </div>
  );
}
export default FeedbackCards;
