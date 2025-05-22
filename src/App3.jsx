import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobilePage from "./MobilePage";
import DesktopPage from "./DesktopPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/mobile" element={<MobilePage />} />
                <Route path="/desktop" element={<DesktopPage />} />
            </Routes>
        </Router>
    );
};

export default App;

const redirectBasedOnWidth = () => {
    const isMobile = window.innerWidth < 768;
    const currentPath = window.location.pathname;

    if (isMobile && currentPath !== "/mobile") {
        window.location.href = "/mobile";
    } else if (!isMobile && currentPath !== "/desktop") {
        window.location.href = "/desktop";
    }
};

// Esegui il controllo solo al caricamento della pagina
//   window.addEventListener("load", redirectBasedOnWidth);

const container = document.querySelector(".container");
function isMobile() {
    if (container) {
        return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    }
    else {
        console.error("Elemento container non trovato");

    }
}
console.log(isMobile());
container.dataset.type = isMobile() ? "mobile" : "desktop";
