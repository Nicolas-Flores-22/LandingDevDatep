import { useEffect } from "react";
import useObserver from "../../hooks/useObserver";
import manager_photo from "../../assets/manager_photo.svg";
import aboutUs_section_video from "../../assets/aboutUs_section_video.svg";
import aboutUs_section_img1 from "../../assets/aboutUs_section_img1.svg";
import aboutUs_section_img2 from "../../assets/aboutUs_section_img2.svg";
import aboutUs_section_img3 from "../../assets/aboutUs_section_img3.svg";

export const AboutUs = () => {
  const { observer, setElements, entries } = useObserver({
    threshold: 0.75,
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".lazy");
    const sectionsArray: Element[] = Array.from(sections);
    setElements(sectionsArray);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazy = entry.target as HTMLImageElement;
        lazy.src = lazy.dataset.src!;
        lazy.classList.add(
          "translate-y-0",
          "opacity-100",
          "transition",
          "duration-1000",
          "ease-in-out"
        );
        lazy.classList.remove("lazy", "opacity-0");
        observer.unobserve(lazy);
      }
    });
  }, [entries, observer]);
  return (
    <div>
      <section className="w-full lazy">
        <div className="flex justify-center w-full lg:h-[80vh] bg-[url('./assets/Union.svg')] bg-cover bg-no-repeat">
          <div className="max-w-[1440px]">
            <div className="flex flex-col lg:flex-row mt-8 lg:mt-[65px]">
              <div className="flex flex-col py-10">
                <h2 className="font-sans mb-5 text-3xl sm:text-4xl font-bold text-white">
                  ¿Quienes somos?
                </h2>
                <p className="mb-8 text-lg text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  repellendus omnis sunt natus doloribus suscipit corrupti
                  laborum vero eius, est cumque pariatur maiores aut ullam vel
                  temporibus, quas aliquam accusamus.
                </p>
              </div>
              <img src={manager_photo} alt="manager-photo-section" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center gap-y-2 mx-auto text-center w-[95%] max-w-[1100px]">
          <h2 className="w-full mb-6 font-sans text-3xl font-bold tracking-tight text-[#051C46] sm:text-4xl sm:leading-none">
            ¿Qué hacemos por ti?
          </h2>
          <p className="w-full mb-4 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            nam assumenda commodi sint sunt velit deleniti asperiores, odit
            numquam. Provident aspernatur sunt minus odit expedita ex unde optio
            dolores temporibus?
          </p>
          <div className="lazy opacity-0">
            <img src={aboutUs_section_video} alt="aboutUs_section_video" />
          </div>
        </div>
      </section>
      <section className="w-full lazy opacity-0">
        <div className="flex w-full h-auto lg:h-[700px] mt-20 bg-[url('./assets/diferencia_background.svg')] bg-cover bg-no-repeat ">
          <div className="w-full flex flex-col items-center gap-16 justify-center max-w-[1300px] mx-auto">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-center text-[#051C46] opacity-80">
                  Nuestros profesionales son los más capacitados
                </h2>
                <p className="text-xl sm:text-2xl font-normal text-center text-[#051C46] opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita doloremque, libero aliquid excepturi tenetur
                  repellendus a omnis error vero eveniet id consectetur quisquam
                  delectus veniam temporibus voluptatibus obcaecati aliquam
                  sunt!
                </p>
                <h3>Diseñadores</h3>
                <h3>Desarrolladores</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={aboutUs_section_img1} alt="aboutUs_section_img1" />
                <img src={aboutUs_section_img2} alt="aboutUs_section_img2" />
                <img src={aboutUs_section_img3} alt="aboutUs_section_img3" />
                <img src={aboutUs_section_img1} alt="aboutUs_section_img1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
