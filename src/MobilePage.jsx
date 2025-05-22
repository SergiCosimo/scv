import "./App.css"
import Header from "./HeadComponent";
import Rectangle from "./RectangleComponent";
const MobilePage = () => {
  return (
    <main className=" h-screen flex flex-col bg-gray-500 ">
      <div>
        <Header></Header>
        <section className="p-10"></section>
        <section className="bg-gray-400 p-0">
          <p text-white className="bg-red-800">PAGINA MOBILE</p>
        </section>
        <Rectangle />
        <Rectangle />

      </div>
    </main>
  )
};

export default MobilePage;