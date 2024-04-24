/* eslint-disable react/prop-types */

import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import { axiosInstance } from "../../../../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const AddDoctor = ({ isOpen, closeModal, title, setaddDoctor, addDoctor }) => {
  const [loading, setloading] = useState(false);
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setaddDoctor({
      ...addDoctor,
      [name]: value,
    });
  };

  const onAddHandeler = async (e) => {
    e.preventDefault();
    setloading(true);
    const { name, email, phone, address } = addDoctor;
    try {
      const { status } = await axiosInstance.post(
        `/api/users/staff/store`,
        { name, email, phone, static_role: "doctor", address },
        {
          headers: { Authorization: `Bearer ${userData.data.access_token}` },
        }
      );

      if (status) {
        closeModal();

        toast.success("Success Updated!", {
          duration: 1000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error.response?.data.error.message);
    } finally {
      setloading(false);
    }
  };
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={onAddHandeler}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Name"> Name : </Label>
            <Input
              // @ts-ignore
              id="Name"
              value={addDoctor.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Phone : </Label>
            <Input
              // @ts-ignore
              id="Phone"
              value={addDoctor.phone}
              onChange={changeHandler}
              name="phone"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Email"> Email : </Label>
            <Input
              // @ts-ignore
              id="Email"
              value={addDoctor.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="address"> address : </Label>
            <Input
              // @ts-ignore
              id="address"
              value={addDoctor.address}
              onChange={changeHandler}
              name="address"
            />
          </div>
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Add </SubmitButton>
            <Cancelbtn onClick={closeModal}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddDoctor;
