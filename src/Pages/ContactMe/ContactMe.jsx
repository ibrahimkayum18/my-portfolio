import Swal from "sweetalert2";

const ContactMe = () => {
  const handleMail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name, email, message);
    const config = {
      SecureToken: "cc3b55f8-3c05-4b74-9672-59a67a5649b2",
      To: "ibrahimkayum017@gmail.com",
      From: email,
      Subject: "Mail From Portfolio",
      Body: message,
    };
    if (email) {
      window.Email.send({config}).then(() => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email send successfully",
            showConfirmButton: false,
            timer: 1500
          });
      });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please check your information",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  };

  return (
    <div id="contact-me" className="h-screen">
      <h2 className="text-center text-5xl font-semibold py-10">
        <span className="text-sky-300">Contact</span> me
      </h2>
      <div>
        <form onSubmit={handleMail} className="space-y-5 text-black">
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
