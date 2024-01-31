import { useState } from "react";
import Button2 from "./Button2";
import InputField from "./InputField";
const Form = () => {
  const [isim, setIsim] = useState();
  const [soyadınız, setSoyadınız] = useState();
  const [yaş, setYaş] = useState();
  return (
    <form>
      <InputField
        labelTitle={"Adınızı Giriniz"}
        placeholderTitle={"Adınız"}
        onChange={(e) => setIsim(e.target.value)}
      />
      <InputField
        labelTitle={"Soyadınızı Giriniz"}
        placeholderTitle={"Soyadınız"}
        onChange={(e) => setSoyadınız(e.target.value)}
      />
      <InputField
        labelTitle={"Yaşınızı Giriniz"}
        placeholderTitle={"Yaşınız"}
        onChange={(e) => setYaş(e.target.value)}
      />
      <Button2
        onClick={() => console.log(isim,soyadınız,yaş)}
        buttonTitle={"Formu Gönder"}
        buttonColor={"purple"}
      />
    </form>
  );
};
export default Form;
