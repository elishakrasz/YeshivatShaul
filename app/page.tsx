import Image from "next/image";
import Hero from "./components/Hero";
import Card from "./components/Card";

const info = [{ title: "תורה", subTitle: "Torah" }, { title: "אהבת ישראל", subTitle: "Ahavat Israel" }, { title: "צדק", subTitle: "Righteousness" }];

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <div className="mt-24 justify-between grid grid-cols-3 gap-2 px-16 mb-44">
        {info.map((card) => (
          <Card key={card.title} title={card.title} subTitle={card.subTitle} />
        ))}
      </div>
      
    </div>
  );
}
