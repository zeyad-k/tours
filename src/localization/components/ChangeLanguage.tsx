import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { directionAtom } from "../../atoms/directionAtom";

const ChangeLanguage = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    const direction = event.target.selectedOptions[0].getAttribute("data-dir");
    i18n.changeLanguage(selectedLanguage); // Use i18n instance to change language
    if (direction) {
      directionAtom.update(direction); // Update directionAtom with the new direction
    }
  };

  return (
    <div className="flex">
      <label className="flex gap-2">
        <select
          value={i18n.language}
          onChange={handleChangeLanguage}
          className="px-2 py-1 bg-transparent border border-gray-400 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option className="text-gray-700" value="en" data-dir="ltr">
            {t("English")}
          </option>
          <option className="text-gray-700" value="ar" data-dir="rtl">
            {t("Arabic")}
          </option>
          <option className="text-gray-700" value="de" data-dir="ltr">
            {t("German")}
          </option>
        </select>
      </label>
    </div>
  );
};
export default ChangeLanguage;
