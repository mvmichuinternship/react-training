import React, { useState, useRef, useContext, useEffect } from "react";
import { ItemManagerContext } from "../context/ItemContext";
import Card from "./basic-components/Card";
import useFiltering from "../hooks/Filtering";
import useSorting from "../hooks/Sorting";

function AddRemove() {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const searchRef = useRef(null);
  const selectRef = useRef(null);


  const [itemNew, setItemNew] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [searchText, setSearchText] = useState("");
  const [nameorder, setNameOrder] = useState(true);
  const [descorder, setDescOrder] = useState(true);
  const [sortType, setSortType] = useState("name")

  const filtered = useFiltering(searchText);
  const sorted = useSorting(sortType, nameorder, descorder);

  const { addItem, removeItem, items } = useContext(ItemManagerContext);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    // console.log(data.name)
    setItemNew(items);
  }, [items]);

  useEffect(() => {
    setItemNew(filtered);
  }, [searchText]);

  useEffect(() => {
    setItemNew(sorted);
  }, [sortType, nameorder, descorder]);
  return (
    <div className="flex flex-col w-[60%] my-10 justify-center h-screen gap-y-4">
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
          // console.log(itemName, itemDesc)
          addItem(itemName, itemDesc);
          setItemDesc("");
          setItemName("");
        }}
      >
        Add
      </button>

      <div className="flex w-full justify-between gap-y-4">
        <div className="flex w-full gap-y-4">
        <input
          className="border px-2 rounded-l-md py-1 focus:outline-neutral-400"
          type="text"
          ref={searchRef}
          value={searchText}
          placeholder={"Add item desc"}
          onChange={(e) => {
            setSearchText(String(e.target.value));
          }}
        />

        <button
          onClick={() => {
            // console.log("filter", filtered);
          }}
          className="border bg-neutral-100 rounded-r-md px-2"
        >
          Search
        </button>
        </div>
        <div  className="border px-2 text-center rounded-md">
            <select name="Sort" id="" ref={selectRef} onChange={(e)=>{setSortType(e.target.value);}} onFocus={()=>{setNameOrder(!nameorder);setDescOrder(!descorder)}} >
                <option value="name" >By Name</option>
                <option value="description" >By Description</option>
            </select>
        </div>

      </div>

      <div className="gap-x-2 gap-y-2 flex justify-center flex-wrap h-[100%]">
        {itemNew.map(
          (item, index) =>
            item.name && (
              <div key={index}>
                {/* {console.log(item)} */}
                <Card data={item} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default AddRemove;
