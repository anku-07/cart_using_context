import React, { useEffect, useState } from "react";

const Curd = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  const handelAddProduct = () => {
    if (inputData.trim() === "") {
      return;
    }
    // const newData = [...data, inputData];
    setData([...data, inputData]);
    setInputData("");
  };

  useEffect(() => {
    console.log("All product", data);
  }, [data]);

  return (
    <div>
      <div>
        <p>Add Product</p>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handelAddProduct}>Add Product</button>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Curd;
