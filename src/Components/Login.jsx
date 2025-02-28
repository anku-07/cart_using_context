import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState(null);

  const [show, setShow] = useState(false);

  console.log("name:", name);
  console.log("gmail:", gmail);

  const handelclick = () => {
    setShow(!show);
    
  };

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Gmail : </p>
      <input
        type="text"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
      />
      <br /> <br />
      <button onClick={handelclick}>login</button>
      {show && (
        <div>
          <p>UserName is : {name}</p>
          <p>User Mail is : {gmail}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
