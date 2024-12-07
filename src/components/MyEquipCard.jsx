import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

export default function MyEquipCard({
  equipment,
  myEquipment,
  setmyEquipment,
}) {
  const { _id, image, itemName, category, price, stockStatus } = equipment;

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
              setmyEquipment(remainingEquipment);
            }
          });
      }
    });
  };

  return (
    <Fade direction="up" delay={200} triggerOnce>
      <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-800 dark:text-white">
        <img
          className="h-60 w-full object-cover rounded-md mb-4"
          src={image}
          alt={itemName}
        />
        <h3 className="text-lg font-semibold mb-2">{itemName}</h3>
        <p className="text-gray-700 text-sm mb-2 dark:text-gray-300">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-gray-700 text-sm mb-2 dark:text-gray-300">
          <strong>Price:</strong> ${price}
        </p>
        <p className="text-gray-700 text-sm mb-4 dark:text-gray-300">
          <strong>Stock:</strong> {stockStatus} available
        </p>
        <div className="flex justify-between">
          <Link to={`/update-equipment/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded dark:bg-blue-700 dark:hover:bg-blue-600">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded dark:bg-red-600 dark:hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </Fade>
  );
}
