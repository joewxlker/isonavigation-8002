import { randomUUID } from "crypto";
import { Button, ButtonTwo } from "./components/button";
import { Header } from "./components/header";
import { Section } from "./components/section";

import config from "public/config.json";
import { type ProjectInfo } from "~/app/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { Tokenomics } from "./features/tokenomics";

export default function HomePage() {
  const projectData = config as ProjectInfo;
  const layout = "xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] m-auto";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-5 text-black ${layout}`}
    >
      <Header config={projectData} layout={layout} />
      <div id="landing" className="pt-40 flex flex-col gap-40 xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] w-screen">
        <div className="flex flex-col gap-12">
          <p className="text-xl font-body text-t3">ISONAVIGATION</p>
          <h1 className="xl:text-7xl lg:text-7xl text-5xl font-accent text-t1">THE FIRST <span className="text-accent">OPPORTUNITY & DISCOVERY</span> RADAR FOR DEFI INVESTORS</h1>
          <p className="text-lg font-body text-t2 xl:w-1/2 lg:w-1/2">Make more profit, save a ton of time, and become a successful investor. The future looks a lot like <span className="text-accent font-accent">$ENXS</span>, with our ecosystem approach to uncovering and investing in DeFi projects with great long-term potential, without the hassle or steep learning curve.</p>
          <div className="xl:w-1/3 lg:w-1/3 flex flex-row gap-5">
            <Button href="" text="Telegram" />
            <ButtonTwo href="" text="Twitter" />
          </div>
        </div>
        <div className="w-full flex flex-row py-8 border-y-t3 border-y-[1px]">
          <div className="flex-1 flex items-center justify-evenly flex-row flex-wrap gap-5">
            {[
              { src: "/brands/uniswapLong.svg", href: "", height: 10, width: 120 }, 
              { src: "/brands/dextoolsLong.svg", href: "", height: 10, width: 100 }, 
              { src: "/brands/cmcLong.svg", href: "", height: 10, width: 130 }, 
              { src: "/brands/cgLong.svg", href: "", height: 10, width: 120 }
            ].map(props => <Link key={randomUUID()}  href={props.href}>
              <Image alt="" {...props}/>
            </Link> 
            )}
          </div>
        </div>
      </div>
      <div>
      </div>
      <div id="about-wrapper" className="xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] w-screen">
        <div className="border-t-[1px] border-t-s3">
          <Section.Container id="about">
            <Section.Header image={'/icons/iso.svg'} title="about"/>
            <Section.Body>
              <Section.Article 
              title="A low-stress way to profit from the DeFi space"
              buttons={[{ text:'Read WhitePaper', href:''}]}
              body="Stop looking for the next big thing. Instead, we save you time and treasure, and most importantly, 
                    the stress of missing the exit or worrying about rug pulls. The ultimate investment that 
                    crypto enthusiasts can make in DeFi, and truly HODL without worrying about consequences."/>
              <Section.Graphics src="" alt="" height={350} width={500} />
            </Section.Body>
          </Section.Container>
        </div>
      </div>
      <div id="tokenomics-wrapper" className="xl:px-40 lg:px-20 md:px-20 px-2 max-w-[2000px] w-screen">
        <Tokenomics config={projectData}/>
      </div>
      {/* <Footer config={projectData} layout={layout} /> */}
    </main>
  );
}
