import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyEquipCard from "../components/MyEquipCard";
import { Helmet } from "react-helmet-async";

export default function MyEquipment() {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [myEquipment, setmyEquipment] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/equipments/user?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setmyEquipment(data);
        
        console.log(data);
      });
  }, []);

  return (
    <div className="my-8">
      <Helmet>
        <title>MyEquipment | PlayGear</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">
        My Equipment List {myEquipment.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myEquipment.map((equipment) => (
          <MyEquipCard
            key={equipment._id}
            equipment={equipment}
            myEquipment={myEquipment}
            setmyEquipment={setmyEquipment}
          ></MyEquipCard>
        ))}
      </div>
    </div>
  );
}
