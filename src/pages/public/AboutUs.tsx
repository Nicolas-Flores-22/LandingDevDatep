import { useEffect } from "react";
import useObserver from "../../hooks/useObserver";
import manager_photo from "../../assets/manager_photo.svg";

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
    </div>
  );
};
