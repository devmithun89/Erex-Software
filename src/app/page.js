import Help from "./containers/How_can_we _help _you/help";
import GreetSince from "./containers/greet_since/greetSince";
import HappyClint from "./containers/heppy_clint/happyClint";
import Hero from "./containers/hero/hero";
import NewSletter from "./containers/new_sletter/newSletter";
import OurClint from "./containers/our_clint/ourClint";

export default function Home() {
  return (
    <>
      <Hero />
      <OurClint />
      <Help />
      <GreetSince />
      <HappyClint />
      <NewSletter />
    </>
  );
}
