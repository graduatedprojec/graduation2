/* eslint-disable react/prop-types */
// @ts-ignore

import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";

import toast from "react-hot-toast";

import UseEditDoctorData from "../../../../hooks/HDoctors/UseEditDoctor";
const EditDoctor = ({
  isOpenEdit,
  closeModalEdit,
  title,
  editDoctor,
  seteditDoctor,
}) => {
  const { editDoctorData, loading } = UseEditDoctorData(); // Use the custom hook

  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const changeHandler = (e) => {
    const { value, name } = e.target;
    seteditDoctor({
      ...editDoctor,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const result = await editDoctorData(editDoctor, userData);

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
              // @ts-ignore
              id="Name"
              value={editDoctor.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Phone : </Label>
            <Input
              // @ts-ignore
              id="Phone"
              value={editDoctor.phone}
              onChange={changeHandler}
              name="phone"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Email"> Email : </Label>
            <Input
              // @ts-ignore
              id="Email"
              value={editDoctor.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
          {/* <div className="flex gap-2 flex-col">
            <Label htmlFor="role"> address : </Label>
            <Input 
// @ts-ignore
            id="role" value={editDoctor.address} onChange={changeHandler} name="address" />
          </div> */}
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Edit </SubmitButton>
            <Cancelbtn onClick={closeModalEdit}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditDoctor;
