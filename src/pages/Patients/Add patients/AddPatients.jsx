import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
import UseAddPatients from "../../../hooks/HPatients/UseAddPatients";
import toast from "react-hot-toast";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const AddPatients = ({ isOpen, closeModal, title }) => {
  const [patientData, setpatientData] = useState({
    name: "",
    gender: "",
    address: "",
    disease: "",
  });
  const { addPatientData, loading } = UseAddPatients();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setpatientData({
      ...patientData,
      [name]: value,
    });
  };
  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addPatientData(patientData, userData);
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
      toast.error(result.error, {
        duration: 1000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
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
              value={patientData.name}
              onChange={changeHandler}
              name="name"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <Label htmlFor="address"> Address : </Label>
            <Input
              // @ts-ignore
              id="address"
              value={patientData.address}
              onChange={changeHandler}
              name="address"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="gender"> Gender : </Label>
            <Input
              // @ts-ignore
              id="gender"
              value={patientData.gender}
              onChange={changeHandler}
              name="gender"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="disease"> Disease : </Label>
            <Input
              // @ts-ignore
              id="disease"
              value={patientData.disease}
              onChange={changeHandler}
              name="disease"
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

export default AddPatients;
