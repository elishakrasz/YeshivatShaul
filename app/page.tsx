import Hero from "./components/Hero";
import Card from "./components/Card";

const info = [
  { title: "תורה", subTitle: "Torah" },
  { title: "אהבת ישראל", subTitle: "Ahavat Israel" },
  { title: "צדק", subTitle: "Righteousness" }
];

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="mt-16 px-6 lg:px-16 lg:mt-24 mb-44 flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:gap-8 space-y-6 lg:space-y-0">
  {info.map((card) => (
    <Card key={card.title} title={card.title} subTitle={card.subTitle} />
  ))}
</div>

      {/* <div className="mt-16 px-6 lg:px-16 lg:mt-24 mb-44 flex items-center justify-center lg:grid lg:grid-cols-3 lg:gap-4 space-y-6 lg:space-y-0 lg:space-x-6">
        {info.map((card) => (
          <Card key={card.title} title={card.title} subTitle={card.subTitle} />
        ))}
      </div> */}
    </div>
  );
}
