import { contacts } from "../libs/contact";

export default function FooterContact() {
  return (
    <footer className=" min-h-fit bg-[#061D26] flex w-full flex-col gap-4 md:flex-row justify-start items-center p-3">
      <section className=" flex justify-center items-center gap-3 flex-col">
        <img
          width={200}
          height={200}
          className=" w-[200px] h-[200px] "
          alt="image"
          src={"/envelop.svg"}
        />
        <h3 className=" text-2xl text-red-400 font-bold">mesutkee@gmail.com</h3>
      </section>
      <section className=" flex flex-col justify-start items-start gap-2">
        {contacts.map((item, i) => (
          <a
            key={i}
            target="blank"
            className=" flex justify-center gap-2 items-center"
            href={item.link}
          >
            <img
              width={200}
              height={200}
              className=" w-[40px] h-[40px] "
              alt="image"
              src={item.image}
            />
            <h3 className=" text-sm text-white font-mono">{item.name}</h3>
          </a>
        ))}
      </section>
    </footer>
  );
}
