

const ContactMe = () => {
    return (
        <div id="contact-me" className="h-screen">
        <h2 className="text-center text-5xl font-semibold py-10">
          <span className="text-sky-300">Contact</span> me
        </h2>
        <div>
          <form className="space-y-5">
            <div className="lg:flex w-3/4 mx-auto gap-4">
              <div className="w-full">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="py-2 px-5 rounded-lg w-full"
                  placeholder="Your Email..."
                />
              </div>
              <div className="w-full">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="py-2 px-5 rounded-lg w-full"
                  placeholder="Your Name..."
                />
              </div>
            </div>
            <div className=" w-3/4 mx-auto gap-4">
              <label className="">Message</label> <br />
              <textarea
                name="message"
                className="w-full h-32 rounded-lg px-5 py-3"
                placeholder="Type your message"
              ></textarea>
            </div>
            <div className="text-center ">
              <button className="btn bg-sky-300 border-none">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ContactMe;