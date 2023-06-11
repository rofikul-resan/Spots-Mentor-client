import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const FeedbackModal = ({ feedbackId }) => {
  const { axiosSecure } = useAxiosSecure();
  const handleFeedback = (event) => {
    event.preventDefault();
    const feedbackText = event.target.feedback.value;
    console.log(feedbackText);
    axiosSecure
      .patch(`http://localhost:5000/feedback/class/${feedbackId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          window.feedback_modal.close();
          Swal.fire({
            icon: "success",
            title: "Feedback Sent",
          });
        }
      });
  };
  return (
    <dialog id="feedback_modal" className="modal ">
      <form method="dialog" className="modal-box" onSubmit={handleFeedback}>
        <h3 className="font-bold text-lg mb-4">Send Your feedback </h3>
        <textarea
          placeholder="Type Your Feedback"
          name="feedback"
          className="h-40 input input-bordered p-4 w-full resize-none"
        ></textarea>
        <div className="modal-action">
          <button type="submit" className="btn btn-sm btn-primary">
            Submit
          </button>
          <button
            onClick={() => window.feedback_modal.close()}
            type="button"
            className="btn btn-sm btn-warning"
          >
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default FeedbackModal;
