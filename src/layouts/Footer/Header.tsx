import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../localization/components/ChangeLanguage";

const Header = () => {
	const { t } = useTranslation();

  return (
    <div className=" bg-slate-200 flex content-between justify-between m-6 ">
      <h1>{t("react_app")}</h1>
	  <ChangeLanguage />
    </div>
  );
};

export default Header;