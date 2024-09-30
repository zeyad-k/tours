import { useTranslation } from "react-i18next";
import LocalizationComponent from "./localization/components/LocalizationComponent";
import { directionAtom } from "./atoms/directionAtom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Footer/Header";

function App() {
  const { t } = useTranslation();
  const dir = directionAtom.useValue();
  return (
    <>
      <LocalizationComponent>
        <div
          dir={dir}
        >
          <Header  />
         
       
        <h2 className="text-2xl">{t("home")}</h2>
        <Footer />

        </div>
      </LocalizationComponent>
    </>
  );
}

export default App;
