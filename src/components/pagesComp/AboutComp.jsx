import "../../App.css";
import "../../css/logo.css";
import HeaderPage from "./HeaderPage";
import NavPages from "./NavPages";
import ImageText from "./ImageText";
import TextImage from "./TextImage";

function AboutComp() {
  return (
    <div className="">
      <NavPages header={"ABOUT US"} class={"imageAbout"} />
      <div className="containerL">
        <HeaderPage header={"A trusted toronto, Colorado locksmith company."} />
        <ImageText
          img={"https://www.frontrangelocksmith.com/images/about-thumbnail.png"}
          text={
            "Cheetah Locksmith originated when 7 dedicated locksmiths united to establish the premier locksmithing company in the Mile High City. Each specialist at Cheetah Locksmith excels in distinct locksmithing domains. This unique collaboration allows us to offer a comprehensive solution for safeguarding homes, businesses, and vehicles – a first in toronto. With a collective experience surpassing 50 years, we've encountered every lock and unlocked countless cars. However, we consistently pursue improvement, staying at the forefront of security trends."
          }
        />
        <p className="textP TextMargin">
          Through unwavering commitment and a fervent approach to our craft,
          we've forged a stellar standing within the locksmithing sector. This
          renown has propelled us to collaborate with prominent enterprises
          across toronto and its environs. As we aspire to shape our industry,
          our role extends beyond merely altering locks or crafting car keys.
          We're dedicated to enlightening individuals on enhancing home
          security, optimizing business safety, cost-effective measures, and
          more. This drive led to the inception of our YouTube channel and "4
          Houses a Minute," a security-focused blog acclaimed for its top-tier
          articles, attracting thousands of readers monthly. Furthermore, we
          impart our expertise to fellow locksmiths nationwide through our
          successful online course, "The Art of Lock Picking," boasting nearly
          1500 students.
        </p>
        <TextImage
          img="https://www.frontrangelocksmith.com/images/about-thumbnail-2.png"
          text="Ultimately, our purpose revolves around your happiness. We aim to assure you that, within the toronto metro, you possess a trustworthy ally should you find yourself stranded at your car or home during the late hours. Someone genuinely concerned about your security when altering or rekeying locks. A 24/7 resource for inquiries related to your home or business safety. Upholding this mission, we've achieved an esteemed A+ rating from the BBB and garnered numerous 5-star reviews on platforms like Google, Yelp, and Facebook."
          boxHeader={"Placing customer satisfaction at the core of our values."}
        />

        <ImageText
          img="https://www.frontrangelocksmith.com/images/change-lock.png"
          text="Where others falter, we excel. Our specialization lies in tackling the most intricate tasks. With our accumulated expertise, we frequently handle extensive projects encompassing major office structures, factories, and storefronts throughout the toronto metropolitan area. Our methodology involves comprehending your security requisites, aligning with your business objectives, and subsequently devising the optimal solution. Extensive master key systems, advanced security locks, and comprehensive CCTV setups merely constitute a fraction of the commercial solutions in which we take immense pride as experts."
          boxHeader={"Our expertise lies in commercial projects"}
        />
      </div>
    </div>
  );
}

export default AboutComp;
