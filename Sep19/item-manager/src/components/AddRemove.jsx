import React, { useState, useRef, useContext, useEffect } from "react";
import { ItemManagerContext } from "../context/ItemContext";
import Card from "./basic-components/Card";

function AddRemove(){

    const nameRef = useRef(null);
    const descRef = useRef(null);

    const [itemNew, setItemNew] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemDesc, setItemDesc] = useState("")

    const {addItem, removeItem, items}= useContext(ItemManagerContext)

    // useEffect(() => {
    //     nameRef.current.focus();
        
    //   }, []);

    //   useEffect(() => {
    //     // console.log(items)
    //     // console.log(itemName)
    //   }, [itemName]);

      useEffect(() => {
        // console.log(data.name)
        setItemNew(items)
      },[items]);

      useEffect(()=>{

      },[itemNew])
    return(
        <div className="flex flex-col w-auto my-10 gap-y-4">
        <input
        className="border px-2 rounded-md py-1 focus:outline-neutral-400"
        type="text"
        ref={nameRef}
        value={itemName}
        placeholder={"Add item name"}
        onChange={(e) => setItemName(e.target.value)}
      />
       <input
        className="border px-2 rounded-md py-1 focus:outline-neutral-400"
        type="text"
        ref={descRef}
        value={itemDesc}
        placeholder={"Add item desc"}
        onChange={(e) => setItemDesc(e.target.value)}
      />
      <button
        onClick={() => {
            console.log(itemName, itemDesc)
          addItem(itemName, itemDesc);
          setItemDesc("");
          setItemName("");
        }}
      >
        Add
      </button>

        <div className="gap-x-2 gap-y-2 flex justify-center flex-wrap h-[100%]">
        {itemNew.map(((item, index)=>
                item && (<div key = {index}>
                                {/* {console.log(item)} */}
                <Card data={item}/>
                </div>)
            ))}
        </div>

        </div>
    )
}

export default AddRemove;