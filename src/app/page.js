import Heading from "./components/Heading";
import AboutUs from "./components/AboutUs";
import HealthPriority from "./components/HealthPriority";
import WhatWeDo from "./components/WhatWeDo";
import Mission from "./components/Mission";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <Heading/>
       <AboutUs/>
       <HealthPriority/>
       <WhatWeDo/>
       <Mission/>
        <ContactUs/>
      </main>
    
    </div>
  );
}
