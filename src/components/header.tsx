import Link from "next/link"
const header = () => {
  return (
    <>
      <nav className="w-full flex bg-black">
        <img src="./images/logo.png" alt=""
         className="w-48 "
         />

        <div className="w-[80%]">
            <ul className="flex justify-around pt-12">
                <Link href="#hero" className="text-white">Home</Link>
                <Link href="#about" className="text-white">About</Link>
                <Link href="#portfolio" className="text-white">Portfolio</Link>
                <Link href="#contact" className="text-white">Contact</Link>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default header
