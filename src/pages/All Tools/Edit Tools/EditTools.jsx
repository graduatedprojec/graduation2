import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
// eslint-disable-next-line react/prop-types
const EditTool = ({ isOpenEdit, closeModalEdit, title }) => {
  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="id"> ID : </Label>
            <Input id="id" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Name"> Name : </Label>
            <Input id="Name" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Name"> Type Tool : </Label>
            <Input id="Name" />
          </div>
          <div className="flex justify-center items-center space-x-3 ">
            <SubmitButton title={"Edit"} add={""} />
            <Cancelbtn title={"Cancel"} add={""} />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditTool;
