import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyEquipCard from "../components/MyEquipCard";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function MyEquipment() {
  const { user } = useContext(AuthContext);
  const [myEquipment, setMyEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://assignment-10-server-ab.vercel.app/equipments/user?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEquipment(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching equipment:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-8 min-h-[450px] w-10/12 mx-auto dark:text-white">
      <Helmet>
        <title>MyEquipment | PlayGear</title>
      </Helmet>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center mb-6">
            My Equipment List {myEquipment.length}
          </h2>
          {myEquipment.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myEquipment.map((equipment) => (
                <MyEquipCard
                  key={equipment._id}
                  equipment={equipment}
                  myEquipment={myEquipment}
                  setMyEquipment={setMyEquipment}
                ></MyEquipCard>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-red-400 text-3xl font-bold">
                You don't have any equipment yet! Add to see your equipment.
              </h2>
              <Link to={"/add-equipment"}>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 lg:mt-20 dark:bg-blue-700 dark:hover:bg-blue-600">
                  Add Equipment
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
