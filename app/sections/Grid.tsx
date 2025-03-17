import { gridItems } from "../data";
import dynamic from "next/dynamic";

// Dynamically import the default export for BentoGrid
const BentoGrid = dynamic(
  () => import("./components/BentoGrid").then((mod) => mod.BentoGrid),
  { ssr: false }
);

// Dynamically import the named export for BentoGridItem
const BentoGridItem = dynamic(
  () => import("./components/BentoGrid").then((mod) => mod.BentoGridItem),
  { ssr: false }
);

const Grid = () => {
  return (
    <section id="about" className="h-screen">
      <div className="relative max-w-7xl mx-auto h-full flex flex-row px-16 max-h-[70vh]">
        <BentoGrid className="container">
          {gridItems.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
        </BentoGrid>

      </div>

    </section>
  );
};

export default Grid;