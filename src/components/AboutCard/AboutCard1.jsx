
import styles from "../../styles";
import { Psy } from "../../constants/images";

const AboutCard1 = ({exp, title, imgUrl}) => {
  return (
    <div className={`flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center ${styles.paddings} card__background w-full my-[2rem] max-w-[1700px]`}>
      <img className="w-[18rem] h-[18rem] rounded-[50%]"
        src={imgUrl}
        alt="psychologist" />

      <div className="lg:w-[50%] w-[100%] flex flex-col justify-start lg:items-end items-center lg:my-0 my-2">
        <p className={`mb-3 ${styles.text} text-secondary font-bold`}>
          {title} exp: {exp}
        </p>
        <p className="text-[1.3rem] text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti amet blanditiis totam 
          distinctio culpa commodi aspernatur quia odit laudantium? In sit animi debitis autem fugiat 
          magni ratione et, ad beatae?
        </p>
      </div>
    </div>
  )
}

export default AboutCard1