import HeaderPhone from "./phone/header/header-phone";
import SecTitle from "./phone/secTitle/secTitle";
import Secscd from "./phone/secScd/secscd";
import Advantage from "./phone/Advantage/Advantage";
import PdcList from "./phone/ProductsList/PdcList";
import Aboutpag from "./phone/AboutPage/AboutPag";
import SecSlide from "./phone/SecSlide/SecSlide";
import Footer from "./phone/footer/footer";
import Dheader from "./desktop/Dheader/Dheader";
import Dtitle from "./desktop/Dheader/Dtitle";
import Dproduct from "./desktop/Dheader/Dproducts";
import Dadvantage from "./desktop/Dheader/Dadvantage";
import Dabout from "./desktop/Dabout";
import Dpartner from "./desktop/Dheader/Dpartner";
import Dfooter from "./desktop/Dfooter";
import DfotSec from "./desktop/Dheader/DfotSec";

function App() {
  return (
    <div className="flex flex-col w-full">
      <div className="xl:hidden">
        <HeaderPhone />
        <SecTitle />
        <Secscd />
        <Advantage />
        <PdcList />
        <Aboutpag />
        <SecSlide />
        <Footer />
      </div>
      <div className="hidden relative xl:block">
        <Dheader />
        <Dtitle />
        <Dproduct />
        <Dadvantage />
        <Dabout />
        <Dpartner />
        <DfotSec />
        <Dfooter />
      </div>
    </div>
  );
}

export default App;
