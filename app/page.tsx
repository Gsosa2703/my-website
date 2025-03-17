import HomeHero from "./sections/HomeHero";
import HomeAbout from './sections/HomeAbout';
import HomeWork from './sections/HomeWork';
import dataSlider from "./data/work-data.json";
import WorkExperiece from './sections/Experiece';
import GetInTouch from './sections/GetInTouch';
import Grid from './sections/Grid';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <Grid />
      <HomeWork data={dataSlider} />
      <WorkExperiece />
      <GetInTouch />
    </div>
  );
}
