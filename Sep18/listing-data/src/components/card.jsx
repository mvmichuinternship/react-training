import React, { useEffect } from "react";

function Card({data}){
    
    // useEffect(() => {
    //     console.log(data.posts)
    //   },[data]);

    return(
        <div className=" w-72 flex flex-col justify-between h-72 border rounded-md p-4 overflow-y-auto">
            <p className="font-bold text-lg text-center">
                {data.title}
            </p>
            <div className="overflow-y-auto">
            <p>
                {data.body}
                {/* {console.log(data)} */}
            </p>
            </div>
            
            <div className="flex justify-center space-x-3 overflow-x-scroll">

                {data.tags.map((tag)=>(
                <div className=" px-2 py-1 text-clip rounded-full border " key={tag}>
                    {tag}
                    {/* {console.log(tag)} */}
                </div>
                ))}
                
                </div>
                {
                    data.userId===123 &&(
                        <div className="flex justify-center gap-x-3" >
                    <div className=" px-2 py-1  rounded-md border cursor-pointer hover:bg-neutral-100">
                        Edit
                    </div>
                    <div className=" px-2 py-1  rounded-md border cursor-pointer hover:bg-neutral-100">
                        Delete
                    </div>
                </div>
                    )
                }
                
            
            
        </div>
    );
}

export default Card;