const Contact = () => {
  return (
    <div className="font-semibold text-3xl p-4 m-4">
      <h1> 7973537221 </h1>
      {/* <h2> himanshudhaka987@gmail.com</h2> */}

      <form className="m-4 p-4">
        <input
          type="text"
          className=" border-black m-2 p-2"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className=" border-black m-2 p-2"
          placeholder="Message"
        ></input>
        <button className=" border-black m-2 p-2 bg-gray-200 rounded-lg">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
