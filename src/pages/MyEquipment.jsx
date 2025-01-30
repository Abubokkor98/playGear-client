import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-ab.vercel.app/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });
              const remainingEquipment = myEquipment.filter(
                (equip) => equip._id !== _id
              );
              setMyEquipment(remainingEquipment);
            }
          });
      }
    });
  };

  return (
    <div className="my-8 min-h-[450px] w-10/12 mx-auto dark:text-white">
      <Helmet>
        <title>MyEquipment | PlayGear</title>
      </Helmet>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Manage Your {myEquipment.length} Equipment Items Below!
          </h2>
          {myEquipment.length > 0 ? (
            <table className="table-auto w-full bg-white text-sm text-left border-collapse dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Stock</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myEquipment.map((equipment) => (
                  <tr
                    key={equipment._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-2 border">
                      <img
                        src={equipment.image}
                        alt="Equipment"
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border">{equipment.itemName}</td>
                    <td className="px-4 py-2 border">{equipment.category}</td>
                    <td className="px-4 py-2 border">${equipment.price}</td>
                    <td className="px-4 py-2 border">
                      {equipment.stockStatus}
                    </td>
                    <td className=" border">
                      <div className="flex space-x-2 justify-center">
                        <Link to={`/update-equipment/${equipment._id}`}>
                          <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded dark:bg-blue-700 dark:hover:bg-blue-600">
                            <FaEdit className="mr-1" /> Update
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(equipment._id)}
                          className="flex items-center bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded dark:bg-red-600 dark:hover:bg-red-500"
                        >
                          <FaTrash className="mr-1" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
