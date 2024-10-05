import "./Input.css";

const Input = () => {
  return (
    <>
      <div className="LetsWorkTogether">
        <h1 className="white">Let's work</h1>
        <h1 className="blue">together</h1>
        <input className="name" type="text" placeholder="Name *" />
        <input className="email" type="email" placeholder="Email *" />
        <input className="Subject" type="text" placeholder="Your subject *" />
        <input className="Message" type="text" placeholder="Your message *" />
        <button type="button" class="btn1 btn-outline-secondary">
          Send Message
        </button>
      </div>
    </>
  );
};

export default Input;
