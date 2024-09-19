import React, { useContext, useEffect } from "react";
import { ItemManagerContext } from "../../context/ItemContext";

function Card({data}){
    
    const {removeItem, items}= useContext(ItemManagerContext)


    



    return(
        <div className=" w-48 flex flex-col justify-between h-32 border rounded-md p-4 overflow-y-auto">
            <p className="font-bold text-lg text-center">
                {data.name}
            </p>
            <div className="overflow-y-auto">
            <p>
                {data.description}
                {/* {console.log(data)} */}
            </p>
            </div>     
            <button className="px-2 py-1 text-sm rounded-md border cursor-pointer hover:bg-neutral-100" onClick={()=>{ removeItem(data.name) }}>
                Remove
                </button>   
        </div>
    );
}

export default Card;