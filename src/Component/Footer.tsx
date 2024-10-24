import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-4 lg:px-6 ">
        <div>
          <h2 className=" text-xl font-bold">About Us</h2>
          <p className="py-4 ">
            Music School is a premier institution dedicated to teaching the art
            and science of music.We nurture talent from the ground up,fostering
            a vibrant community of musicians.{" "}
          </p>
        </div>
        <div>
          <h2 className=" text-xl font-bold">Quick Link</h2>

          <div className="gap-2 flex flex-col py-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/Courses"}>Courses</Link>
            <Link href={"/Contact"}>Contact</Link>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold">Follow Us</h2>
          <div className="py-4   space-x-2 ">
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Linkedin</Link>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold">Contact Us</h2>
          <div className=" py-4">
            <p>Dhaka,Bangladesh</p>
            <p>Dhaka-1216</p>
            <p>
              Email:{" "}
              <a
                href="mailto:mosayebhossain09@gmail.com"
                className="hover:text-gray-400"
              >
                mosayebhossain09@gmail.com
              </a>
            </p>
            <p>Phone: 01602053180</p>
          </div>
        </div>
      </div>
      <p className=" flex justify-center font-semibold text-center text-base mt-8 mb-8  ">
        © 2024 Music School. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
