import "./App.css"
import Header from "./HeadComponent";
import Rectangle from "./RectangleComponent";
import Footer from "./Footer";
import ImageFadeIn from "./ImageFadeComponent";
const App = () => {
  return (
    <>
      <main className="h-screen justify-items-center">
        <Header></Header>
        <div className="p-7"></div>
        <div className="bg-[url(/wallpaper.jpg)] bg-fixed w-full h-[200px]">
          <div className="p-10 xl:text-6xl font-mono flex flex-row justify-between">
            <p>
              Sergi Cosimo <br></br>
              Ing.Informatico
            </p>
            <div className=" 
            rounded-full
            bg-[url(pic.jpg)] w-[100px] h-[100px]"></div>
          </div>
        </div>
        <div className="h-[200px] w-full bg-white text-black shadow-xl p-3">
          <p>Benvenuti nel mio sito web.<br />
            Il mio nome è Cosimo sono un
            appassionato di tecnologia e sviluppo software,
            mi piace sperimentare con linguaggi di programmazione,
            ambienti di sviluppo web, e strumenti per la creazione di contenuti digitali e multimediali. <br></br>
            Lavoro con entusiasmo su progetti che uniscono creatività, logica e innovazione.</p>
        </div>
        <div className="border-t border-gray-500"></div> {/*bordo */}
        <div className="h-[250px] w-full bg-white text-black p-3">
          <p className="font-bold text-3xl">
            Formazione:
          </p>
          <p>
            <b>I.I.S.S. G.Salvemini Alessano: </b><br></br>
            Da Non sottovalutare la mia formazione presso <b>l'istituto tecnico informatico</b><br />
            dove ho gettato le basi per lavorare nel mondo dell'informatica e dove ho potuto certificare alcune competenze come CISCO , ECDL e Video Editing.<br></br>

            <br /><b>Politecnico di Torino: </b><br />
            Laurea in Ingegneria Informatica <br></br>
            Sto acquisendo una solida base teorica e pratica in informatica,
            con corsi che spaziano dall’architettura dei sistemi ai linguaggi di programmazione, algoritmi e sviluppo web.</p>
          <ImageFadeIn src="arrow.gif"></ImageFadeIn>
        </div>
        <div className="bg-white w-full xl:p-5 p-16"></div>
        <div className="h-[200px] w-full bg-white text-black xl:h-[250px] h-[350px]">
          <p className="font-bold text-3xl pl-3">
            Competenze:
          </p>
          <div className="grid grid-cols-2 gap-4 p-5 font-mono xl:grid-cols-4 ">
            <ul className="xl:text-xl text-sm list-disc pl-8  bg-[url('/card.png')] bg-cover rounded-xl shadow-2xl border border-gray-500">
              <li>C</li>
              <li>C++</li>
              <li>Rust</li>
              <li>Java</li>
            </ul>
            <ul className="xl:text-xl text-sm  list-disc pl-8  bg-[url('/card.png')] bg-cover  rounded-xl shadow-2xl border border-gray-500">
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Express</li>
              <li>SQL / MySQL / MongoDB</li>
            </ul>
            <ul className="xl:text-xl text-sm  list-disc pl-8  bg-[url('/card.png')] bg-cover rounded-xl shadow-2xl border border-gray-500">
              <li>Unity</li>
              <li>Blender</li>
              <li>Visual Basic</li>
              <li>Git</li>
              <li>SourceTree</li>
            </ul>
            <ul className="xl:text-xl text-sm  list-disc pl-8  bg-[url('/card.png')] bg-cover rounded-xl shadow-2xl border border-gray-500">
              <p className="text-center pr-8"><b>Work in progress: </b></p>
              <li>python</li>
              <li>tkinter</li>
              <li>opengl</li>
              <li>Fastify</li>

            </ul>
          </div>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            Progetti:
          </p>
          <p>Politecnico di Torino
            Laurea in Ingegneria Informatica <br></br>
            Sto acquisendo una solida base teorica e pratica in informatica,
            con corsi che spaziano dall’architettura dei sistemi ai linguaggi di programmazione, algoritmi e sviluppo web.</p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            LandTiger LPC1768:
          </p>
          <p>
            Nel corso di Architetture e Sistemi di elaborazione ho avuto la possibilità di lavorare sulla scheda LandTiger LPC1768
            con processore ARM Cortex M3 , ho progettato una versione di Pacman con il software Keil uVision programmato in C

          </p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            Applicazione Web:
          </p>
          <p>
            Nel corso di Applicazioni Web1 ho sviluppato un frontend e backend con React e Express.
          </p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            Geocontrol:
          </p>
          <p>
            Un intera webapp con documentazione per il corso di Ingegneria del Software.
          </p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            Blender:
          </p>
          <p>
            Una delle mie passioni che pratico ormai da anni è creare arte 3D con il software Blender.<br />
            Trovo davvero molto rilassante il processo di creazione di un modello o animazione.
          </p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            Unity:
          </p>
          <p>
            Oltre che creare videogiochi Unity è usato per poter sviluppare Android APP in modo veloce e semplice. <br></br>
            Insieme a Blender ormai sono anni che uso Unity.
          </p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            Rust chat app:
          </p>
          <p>
            Sto sviluppando un progetto in Rust per il corso di programmazione di sistemi , è un software di messaggistica programmato con Rust.
          </p>
        </div>
        <div className="h-[200px] w-full bg-white text-black pt-8 p-3">
          <p className="font-bold text-3xl">
            tkinter:
          </p>
          <p>
            Sto iniziando ad apprendere il modulo tkinter in python per creare applicazioni con interfaccia grafica. <br />
            In passato ho già usato strumenti simili , come ad esempio Java Swing e Visual Basic.
          </p>
        </div>
        <div className="w-full bg-white text-black pt-8 p-3">   {/*Immagini in fondo , cose con cui lavoro*/}
          <div className="grid grid-cols-3 gap-1 p-5 font-mono xl:grid-cols-7 ">
            <ImageFadeIn src="C.jpeg"></ImageFadeIn>
            <ImageFadeIn src="java.png"></ImageFadeIn>
            <ImageFadeIn src="tailwind.png"></ImageFadeIn>
            <ImageFadeIn src="react.png"></ImageFadeIn>
            <ImageFadeIn src="unity.jpeg"></ImageFadeIn>
            <ImageFadeIn src="bstrap.png"></ImageFadeIn>
            <ImageFadeIn src="py.png"></ImageFadeIn>
            <ImageFadeIn src="js.png"></ImageFadeIn>
            <ImageFadeIn src="blender.png"></ImageFadeIn>
            <ImageFadeIn src="git.png"></ImageFadeIn>
            <ImageFadeIn src="OGL.png"></ImageFadeIn>
            <ImageFadeIn src="Rust.webp"></ImageFadeIn>
            <ImageFadeIn src="sql.webp"></ImageFadeIn>
            <ImageFadeIn src="mdb.webp"></ImageFadeIn>

          </div>
        </div>
        <Footer />
      </main >

    </>
  )
};

export default App;