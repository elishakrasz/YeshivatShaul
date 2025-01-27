import Hero from "./components/Hero";
import Card from "./components/Card";
import Banner from "./components/Banner";

const info = [
  { title: "תורה", subTitle: "Torah" },
  { title: "אהבת ישראל", subTitle: "Ahavat Israel" },
  { title: "צדק", subTitle: "Righteousness" },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Cards Section */}
      <div className="mt-8 px-12 lg:px-16 lg:mt-16 mb-16 flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:max-w-6xl">
          {info.map((card) => (
            <Card key={card.title} title={card.title} subTitle={card.subTitle} />
          ))}
        </div>
      </div>
      <Banner />
    </div>
  );
}
