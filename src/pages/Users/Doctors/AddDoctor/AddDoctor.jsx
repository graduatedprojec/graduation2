/* eslint-disable react/prop-types */

import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";

import toast from "react-hot-toast";
import { useState } from "react";
import UseAddDoctorData from "../../../../hooks/HDoctors/UseAddDoctorData";
// eslint-disable-next-line react/prop-types
// @ts-ignore
const AddDoctor = ({ isOpen, closeModal, title }) => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { addDoctorData, loading } = UseAddDoctorData();

  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addDoctorData(doctorData, userData);

    if (result.success) {
      closeModal();
      toast.success("Success Updated!", {
        duration: 1000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={onAddHandler}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Name"> Name : </Label>
            <Input
              // @ts-ignore
              id="Name"
              value={doctorData.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Phone : </Label>
            <Input
              // @ts-ignore
              id="Phone"
              value={doctorData.phone}
              onChange={changeHandler}
              name="phone"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Email"> Email : </Label>
            <Input
              // @ts-ignore
              id="Email"
              value={doctorData.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="address"> Address : </Label>
            <Input
              // @ts-ignore
              id="address"
              value={doctorData.address}
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
