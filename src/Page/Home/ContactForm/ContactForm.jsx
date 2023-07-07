const ContactForm = () => {
  return (
    <div className="bg-base-200 py-20 px-6 ">
      <div className="grid md:grid-cols-2 gap-5 md:w-10/12 mx-auto">
        <div>
          <h2 className="text-3xl font-bold">Contract</h2>
          <div className="flex gap-6 w-full">
            <div className="form-control flex-1">
              <label className="label">
                <span className="text-lg font-semibold italic">
                  Name <sup>*</sup>
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="text-lg font-semibold italic">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered rounded-none"
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              className="h-40 w-full resize-none input input-bordered rounded-none mt-5 p-6"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-warning bg-orange-600 text-white mt-6 px-10">
              Send
            </button>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9022.948776008148!2d-87.0703526006089!3d35.59336407779481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1688726014026!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mx-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
