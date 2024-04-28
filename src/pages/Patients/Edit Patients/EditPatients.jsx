// @ts-nocheck
/* eslint-disable react/prop-types */
import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseEditPatientsData from "../../../hooks/HPatients/UseEditPatients";

const EditPatients = ({
  isOpenEdit,
  closeModalEdit,
  title,
  setEditPatients,
  editPatients,
}) => {
  const { editPatientData, loading } = UseEditPatientsData(); // Use the custom hook
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setEditPatients({
      ...editPatients,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await editPatientData(editPatients, userData);
    if (result.success) {
      closeModalEdit();
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
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={onSubmitHandler}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Name"> Name : </Label>
            <Input
              id="Name"
              value={editPatients.name}
              onChange={changeHandler}
              name="name"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <Label htmlFor="address"> Address : </Label>
            <Input
              id="address"
              value={editPatients.address}
              onChange={changeHandler}
              name="address"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="disease"> Disease : </Label>
            <Input
              id="disease"
              value={editPatients.disease}
              onChange={changeHandler}
              name="disease"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="gender"> Gender : </Label>
            <Input
              id="gender"
              value={editPatients.gender}
              onChange={changeHandler}
              name="gender"
            />
          </div>

          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Edit </SubmitButton>
            <Cancelbtn onClick={closeModalEdit}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditPatients;
