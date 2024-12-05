import React from "react";
import Swal from "sweetalert2";

export default function MyEquipCard({
  equipment,
  myEquipment,
  setmyEquipment,
}) {
  const { _id, image, itemName, category, price, stockStatus } = equipment;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        className="h-40 w-full object-cover rounded-md mb-4"
        src={image}
        alt="Equipment"
      />
      <h3 className="text-lg font-semibold mb-2">{itemName}</h3>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-gray-700 text-sm mb-2">
        <strong>Price:</strong> ${price}
      </p>
      <p className="text-gray-700 text-sm mb-4">
        <strong>Stock:</strong> {stockStatus} available
      </p>
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">
          Update
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
