/* eslint-disable react/prop-types */
import Modal from "../../../../Ui/Modal";
import toast from "react-hot-toast";
import { useState } from "react";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import { axiosInstance } from "../../../../config/axios.config";
// eslint-disable-next-line react/prop-types
const DelDoctor = ({ isOpen, closeModal , editDoctor }) => {
  const [loading, setloading] = useState(false);
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const onsubmitDeleteHandeler = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      const { status } = await axiosInstance.delete(
        `/api/users/staff/${editDoctor.id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${userData.data.access_token}`,
          },
        }
      );
      if (status === 200) {
        closeModal();
       
        toast.success("Success Deleted!", {
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
      console.log(error);
    }finally{
      setloading(false)
    }
  };



  return (
    <div>
      <Modal title={`Are You Sure You Want To Delete Dr -  ${editDoctor.name}`} isOpen={isOpen} closeModal={closeModal}>

        <form onSubmit={onsubmitDeleteHandeler}>
          <div className="flex justify-center items-center space-x-3 ">
            
            <SubmitButton loading={loading}>
              Delete
            </SubmitButton>
            <Cancelbtn onclick={closeModal}>
              Cancel
            </Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DelDoctor;
