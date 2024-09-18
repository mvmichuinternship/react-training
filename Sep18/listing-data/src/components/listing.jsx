import React from "react";
import data from"../data/data.json"
import Card from "./card";

function Listing(){
    const postData = data
    return(
        <div className="flex flex-col w-full">
            <div className="text-start p-6 font-bold text-lg">
                Total Posts: <span className="font-normal">{postData.total}</span>
            </div>
            <div className=" w-[100%] gap-x-2 gap-y-2 flex justify-center flex-wrap h-[100%]">
            {postData.posts.map(((post, index)=>
                <div key = {index}>
                <Card data={post}/>
                </div>
            ))}
            </div>
            
        </div>
    );
}

export default Listing;