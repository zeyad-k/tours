import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

interface LocalizationComponentProps {
  children: ReactNode;
}

const LocalizationComponent: React.FC<LocalizationComponentProps> = ({
  children,
}) => {
  return <I18nextProvider i18n={i18n} >{children}</I18nextProvider>;
};
export default LocalizationComponent;
