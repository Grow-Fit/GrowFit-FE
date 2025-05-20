import styles from "./page.module.scss";

import Step1 from "@/app/goal/_components/step1";
import Step2 from "@/app/goal/_components/step2";
import ButtonWrapper from "@/app/goal/_components/buttonwrapper";


const Page = () => {
  return (
    <div>
      {/*<Step1/>*/}
      <Step2/>
      {/*<ButtonWrapper />*/}
    </div>
  );
};

export default Page;