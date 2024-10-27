import Link from 'next/link'

const footer = () => {
  return (
    <>
      <div className="w-[100%] bg-black">
            <ul className="flex justify-around pt-12">
                <Link href="#hero" className="text-white">Home</Link>
                <Link href="#about" className="text-white">About</Link>
                <Link href="#portfolio" className="text-white">Portfolio</Link>
                <Link href="#contact" className="text-white">Contact</Link>
            </ul>
        </div>
    </>
  )
}

export default footer
