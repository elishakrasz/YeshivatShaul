import Hero from "./components/Hero";
import Card from "./components/Card";

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
      <div className="mt-16 px-6 lg:px-16 lg:mt-24 mb-44 flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:max-w-6xl">
          {info.map((card) => (
            <Card key={card.title} title={card.title} subTitle={card.subTitle} />
          ))}
        </div>
      </div>
    </div>
  );
}
