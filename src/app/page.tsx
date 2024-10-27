import Header from "@/components/header"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <Header />

      <section id="hero" className="flex bg-black">
        <img src="./images/profile.jpg" className="m-12 rounded-full p-5" alt="" width={400} height={300} />

        <h1 className="py-44 text-7xl text-white">I am Hamza Bhatti. Front-end Developer</h1>
      </section>
 
      <section id="about" className="p-5 mt-5 w-full flex justify-evenly">
        <div className="w-1/2">
        <h2 className="text-lg">Who Am I?</h2>
        <h1 className="text-7xl mb-4">About Me</h1>
        <p className="text-xl text-justify mb-5">
         Hello! I am Hamza Bhatti, a passionate front-end developer with a keen eye for design and a 
         focus on creating intuitive, user-centered digital experiences. With a solid foundation in HTML,
         CSS, JavaScript, and frameworks like TypeScript and ASP.NET Core, I build responsive, 
         accessible, and visually appealing web applications.I specialize in creating dynamic interfaces
          and seamless user experiences. From mobile-responsive landing pages to multi-page websites, 
          my goal is to deliver projects that meet both client objectives and user needs. My recent work 
          includes diverse projects such as e-commerce sites, CRUD applications, and custom components, 
          each crafted with precision and a commitment to quality.I am continuously exploring the latest 
          technologies and trends in front-end development, ensuring that my work is always up-to-date 
          and impactful. If you are looking for a developer who combines technical skills with a deep 
          understanding of design, lets connect and bring your vision to life!
        </p>
        <Link href="#contact" className="w-12 border-black border-solid border-2 p-2 m-60 hover:bg-black hover:text-white">Hire Me</Link>
        </div>
        <img src="./images/about.jpg" alt="" className="w-[45%]"/>
      </section>
      <Portfolio />

      <section id="contact">
        <h1 className="text-7xl mb-4 text-center">Contact</h1>

        <div>

        <Link href="mailto:bhatti39932gmail.com" className="text-xl ml-60 flex flex-row">Contact with me on Email</Link>
        <Link href="https://www.linkedin.com/in/hamzabhatti143/" className="text-xl ml-60 flex text-center flex-row">My LinkedIn</Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}
