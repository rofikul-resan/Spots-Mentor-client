import moment from "moment/moment";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const postTime = new Date().getTime();
  console.log(postTime);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Class Name</span>
        </label>
        <input
          {...register("exampleRequired", { required: true })}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </form>
  );
};

export default AddClass;
