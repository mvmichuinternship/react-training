import IconButton from "../components/basic-components/IconButton";
import MiniCard from "../components/MiniCard";

function HomePage() {
  return (
    <div className="flex-flex-col float-left">
      <div className="flex w-full h-full px-24 items-center justify-center">
        <div className="flex flex-col justify-center  text-start w-[50%]">
          <span className="text-4xl font-black">Live on</span>
          <span className="text-emerald-400 text-4xl font-black">
            fruits and vegetables
          </span>
          <span className="text-4xl font-black">to live healthy</span>
          <br />
          <span className="underline text-lg">100% Healthy and Fresh</span>
          <br />
          <br />
          <IconButton
            className={
              "w-max bg-black rounded-full text-white px-8 py-2 font-bold"
            }
            onClick={() => {
              console.log("Clicked");
            }}
            title={"Shop Now"}
          />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="man.png" alt="" className="w-full" />
        </div>
      </div>
      {/* <MiniCard /> */}
    </div>
  );
}
export default HomePage;
