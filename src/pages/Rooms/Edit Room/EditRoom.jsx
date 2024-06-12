
/* eslint-disable react/prop-types */
import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseEditRoom from "../../../hooks/HRooms/UseeditRoom";
import { rooms_form } from "../../../data/resources_data/resourse_forms";
import { roomsSchema } from "../../../validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrMessage from "../../../errors/Error input message/ErrMessage";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const EditRoom = ({
  isOpenEdit,
  closeModalEdit,
  title,

  editRoom,
}) => {
  const { editRoomData, loading } = UseEditRoom(); // Use the custom hook
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // const changeHandler = (e) => {
  //   const { value, name } = e.target;
  //   seteditRoom({
  //     ...editRoom,
  //     [name]: value,
  //   });
  // };
  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const result = await editRoomData(editRoom, userData);
  //   if (result.success) {
  //     closeModalEdit();
  //     toast.success("Success Updated!", {
  //       duration: 1000,
  //       style: {
  //         borderRadius: "10px",
  //         background: "#333",
  //         color: "#fff",
  //       },
  //     });
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1500);
  //   } else {
  //     toast.error(result.error, {
  //       duration: 1000,
  //       style: {
  //         borderRadius: "10px",
  //         background: "#333",
  //         color: "#fff",
  //       },
  //     });
  //   }
  // };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(roomsSchema),
    defaultValues: editRoom,
  });
  // Populate the form with the current values of editRoom
  useEffect(() => {
    for (const key in editRoom) {
      setValue(key, editRoom[key]);
    }
  }, [editRoom, setValue]);
  const onSubmit = async (data) => {
    const result = await editRoomData(data, userData);
    console.log(result , 'edit roomnum');
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
  //==================== RENDER FORM ==========
  const room_render = rooms_form.map(
    ({ id, name, label, type, validation }, idx) => (
      <div key={idx} className="flex gap-2 flex-col">
        <Label htmlFor={id}>{label}:</Label>
        <Input
          type={type}
          id={id}
          {...register(name, validation)}
          defaultValue={editRoom[name]}
        />
        {errors[name] && <ErrMessage msg={errors[name]?.message} />}
      </div>
    )
  );
  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
      <form onSubmit={handleSubmit(onSubmit)}>
          {room_render}
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Edit </SubmitButton>
            <Cancelbtn onClick={closeModalEdit}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default EditRoom;
