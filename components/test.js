import React from "react";

const test = () => {
  const data = [
    {
      id: 1,
      name: "data 1",
    },
  ];
  const Delete = (id) => {
    axios.delete(`apiurl/${id}`).then((response) => {
      // Do some thing
    });
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => {
              console.log(item); // log ra item se lay duoc {id, name}
              Delete(item.id); // truyen id vao ham
            }}
          >
            Xoa
          </button>
        </div>
      ))}
    </div>
  );
};

export default test;
