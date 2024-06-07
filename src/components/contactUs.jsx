export default function ContactUs() {
  return (
    <footer
      id="contact"
      className=" flex py-7 justify-evenly gap-10 relative w-full min-h-[30vh] flex-wrap"
    >
      <div className=" z-[10] absolute top-0 left-0 w-full h-full flex ">
        <span className=" bg-[#4d069c] w-[100vw] min-h-[30vh]"></span>
        {/* <span className=" bg-white w-[20vw] min-h-[30vh]"></span> */}
      </div>
      <section className=" z-[20] w-[70vw] sm:w-[40vw] flex justify-center flex-col gap-5">
        <h3 className=" text-4xl font-extrabold text-white space-x-6">
          Get in touch now
        </h3>
        <h5 className=" text-xl text-gray-400 space-x-4">
          feel free to contact any time
        </h5>
        <input
          className=" p-3 outline-none min-w-[35vw] rounded-md"
          placeholder="Name or organization"
          type="text"
        />
        <input
          className=" p-3 outline-none min-w-[35vw] rounded-md"
          placeholder="Email"
          type="email"
        />
        <input
          className=" p-3 outline-none min-w-[35vw] rounded-md"
          type="text"
          multiple
          placeholder="Message"
        />
        <button className=" px-7 py-2 text-white text-2xl bg-[#732020] hover:bg-pink-700">
          Send
        </button>
      </section>
      <section className=" bg-black rounded-l-md min-h-[25vh] w-[70vw] sm:w-[60vw] lg:w-[30vw] z-[20] flex justify-start items-center flex-col gap-1 ">
        <h3 className=" text-2xl text-white font-bold w-full text-start ml-5 p-4">
          Info
        </h3>
        <ul className=" w-full flex flex-col justify-start gap-2 sm:gap-4 p-4 sm:p-6 text-gray-400">
          <li className=" flex p-2 gap-5 sm:gap-8 justify-start items-center">
            <img
              src="/gray/gitgray.svg"
              alt="info"
              className=" w-[35px] h-[35px]"
            />
            <span>github/sui-kee</span>
          </li>
          <li className=" flex p-2 gap-5 sm:gap-8 justify-start items-center">
            <img
              src="/gray/emailgray.svg"
              alt="info"
              className=" w-[35px] h-[35px]"
            />
            <span>mesutkee@gmail.com</span>
          </li>
          <li className=" flex p-2 gap-5 sm:gap-8 justify-start items-center">
            <img
              src="/gray/phonegray.svg"
              alt="info"
              className=" w-[35px] h-[35px]"
            />
            <span>+060102784985</span>
          </li>
          <li className=" flex p-2 gap-5 sm:gap-8 justify-start items-center">
            <img
              src="/gray/locationgray.svg"
              alt="info"
              className=" w-[35px] h-[35px]"
            />
            <span>Malaysia/Klang</span>
          </li>
        </ul>
      </section>
    </footer>
  );
}
