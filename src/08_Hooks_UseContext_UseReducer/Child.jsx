import React, { useContext } from "react";
import MyContext from "./MyContext";
import AddressCard from "./AddressCard";

const Child = () => {
  const { value, setValue } = useContext(MyContext);
  const updateData = () => {
    setValue((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        building: "Google",
      },
    }));
  };
  return (
    <div>
      <div>
        Child
        <p>{JSON.stringify(value)}</p>
        <button onClick={updateData}>Update to Google Office</button>
      </div>
      <div>
        <AddressCard
          city={value.address.city}
          village={value.address.village}
          building={value.address.building}
        />
      </div>
    </div>
  );
};

export default Child;
