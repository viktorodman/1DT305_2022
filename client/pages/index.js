// Next
import Head from "next/head";

// React
import { useState } from "react";

// React-Icons
import {
  WiThermometer,
  WiSprinkle,
  WiBarometer,
  WiStrongWind,
} from "react-icons/wi";

// Components
import TabsItem from "../components/tabsItem";

const Tabs = Object.freeze({
  Temperature: "Temperature",
  Humidity: "Humidity",
  Pressure: "Pressure",
  H2S: "H2S",
});

export default function Home() {
  const [tab, setTab] = useState(Tabs.Temperature);

  return (
    <div>
      <Head>
        <title>BadBoyRune</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="w-screen mx-2 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <TabsItem
              label={Tabs.Temperature}
              Icon={WiThermometer}
              setActive={() => setTab(Tabs.Temperature)}
              active={Tabs.Temperature === tab}
            />
            <TabsItem
              label={Tabs.Humidity}
              Icon={WiSprinkle}
              setActive={() => setTab(Tabs.Humidity)}
              active={Tabs.Humidity === tab}
            />
            <TabsItem
              label={Tabs.Pressure}
              Icon={WiBarometer}
              setActive={() => setTab(Tabs.Pressure)}
              active={Tabs.Pressure === tab}
            />
            <TabsItem
              label={Tabs.H2S}
              Icon={WiStrongWind}
              setActive={() => setTab(Tabs.H2S)}
              active={Tabs.H2S === tab}
            />
          </ul>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
