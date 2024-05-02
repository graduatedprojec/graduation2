import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseEditRoomPatients from "../../../../hooks/HRoom Patients/UseEditRoomPatients";
import { UseSelectPatientsRoom } from "../../../../hooks/HSelect patients/UseSelectPatientsRoom";
// eslint-disable-next-line react/prop-types
const EditRoomPatients = ({
  isOpenEdit,
  closeModalEdit,
  title,
  editRoomPatients,
  seteditRoomPatients,
}) => {
  const { editRoomPatientsData, loading } = UseEditRoomPatients(); // Use the custom hook
  const storageKey = "logged";
  const StoredId = localStorage.getItem("roomId");
  const roomIdStored = StoredId ? JSON.parse(StoredId) : null;
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const { data } = UseSelectPatientsRoom();
  const changeHandler = (e) => {
    const { value, name } = e.target;
    seteditRoomPatients({
      ...editRoomPatients,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await editRoomPatientsData(editRoomPatients, userData);
    // if (result.success) {
    //   closeModalEdit();
    //   toast.success("Success Updated!", {
    //     duration: 1000,
    //     style: {
    //       borderRadius: "10px",
    //       background: "#333",
    //       color: "#fff",
    //     },
    //   });
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1500);
    // } else {
    //   toast.error(result.error, {
    //     duration: 1000,
    //     style: {
    //       borderRadius: "10px",
    //       background: "#333",
    //       color: "#fff",
    //     },
    //   });
    // }
  };
  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={onSubmitHandler}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="patient_id"> Patients Id : </Label>
            <select
              className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
               focus:border-[#dbdbebde] focus:outline-none focus:ring-1
                 rounded-md px-3 py-3 text-md text-white"
              value={editRoomPatients.patient_id}
              name="patient_id"
              onChange={changeHandler}
            >
              {data &&
                data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
            </select>
          </div>
          <select
            className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
               focus:border-[#dbdbebde] focus:outline-none focus:ring-1
                 rounded-md px-3 py-3 text-md text-white"
            value={roomIdStored}
            name="patient_id"
            onChange={changeHandler}
          >
            <option>select room id </option>
            <option value={roomIdStored}>{roomIdStored}</option>
          </select>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Bed Number : </Label>
            <Input
              // @ts-ignore
              id="bed_number"
              value={editRoomPatients.bed_number}
              name="bed_number"
              onChange={changeHandler}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="date_in"> Date In: </Label>
            <Input
              // @ts-ignore
              id="date_in"
              type="date"
              value={editRoomPatients.date_in}
              name="date_in"
              onChange={changeHandler}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="date_out"> Date In: </Label>
            <Input
              // @ts-ignore
              id="date_out"
              type="date"
              value={editRoomPatients.date_out}
              name="date_out"
              onChange={changeHandler}
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

export default EditRoomPatients;
