import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="grid md:grid-cols-3  bg-neutral text-neutral-content">
        <div className=" text-center p-10 bg-[#2f3135] w-full">
          <img src="/logo.jpg" alt="" className="h-20 mx-auto rounded-md" />
          <h1 className="text-3xl">Sports Mentor</h1>
        </div>
        <div className=" text-center p-10 bg-[#1f2937] w-full">
          <h1 className="text-2xl text-white text-center">CONTACT US</h1>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className=" text-center p-10  w-full ">
          <div>
            <h3 className="text-2xl text-white text-center mb-4">Follow US</h3>
            <p>Follow US</p>
            <div className="flex gap-8 text-2xl text-white w-fit mx-auto mt-4">
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-[#151515] footer-center p-4 text-white ">
        <div>
          <p>Copyright © 2023 - All right reserved by Rofikul Islam Resan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
