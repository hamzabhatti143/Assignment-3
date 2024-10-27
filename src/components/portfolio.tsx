
const portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div>
            <h1 className="text-7xl mb-4 text-center">Portfolio</h1>
            <div className="flex justify-around p-3 ml-[20px]">
                <img src="./images/port-1.png" alt="" className="w-80 h-48" />
                <img src="./images/port-2.png" alt="" className="w-80 h-48"/>
                <img src="./images/port-3.png" alt="" className="w-80 h-48"/>
            </div>
            <div className="flex justify-around p-3 ml-[20px]">
                <img src="./images/port-4.png" alt="" className="w-80 h-48" />
                <img src="./images/port-5.png" alt="" className="w-80 h-48"/>
                <img src="./images/port-6.png" alt="" className="w-80 h-48"/>
            </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
