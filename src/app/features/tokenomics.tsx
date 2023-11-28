"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { Section } from "../components/section";
import { useCopyToClipboard } from "../hooks/copyToClipboard";
import { ProjectInfo } from "../models/project.model";
import Image from "next/image";

export const Tokenomics = ({ config }: { config: ProjectInfo }) => {
    
    const { copied, copy } = useCopyToClipboard();

    return (
        <Section.Container id="tokenomics">
            <Section.Header  image={'/icons/iso.svg'} title="tokenomics" />
            <Section.Body>
            <div className="flex flex-row gap-5 xl:flex-nowrap lg:flex-nowrap flex-wrap">
                <article className="xl:w-2/3 lg:w-2/3 flex flex-col gap-5 py-5">
                <h3 className="text-5xl text-t1 font-accent text-center">GET TO KNOW <span className="text-accent">$ISO</span></h3>
                <p className="font-body text-lg text-t2 text-center">
                    Utility, governance, and exposure are all rolled into one powerful token that makes you part of the evolving EtherNexus ecosystem. Get in on the action and help drive the bright future of DeFi projects and investments.
                </p>
                </article>
                <ul className="xl:w-1/3 lg:w-1/3 w-full border-l-s3 border-l-[1px] flex flex-col justify-evenly items-start p-2">
                {[
                    { key: 'Total Supply', value: '100M' },
                    { key: 'Contract Address', value: '0x18a...5667', button: true },
                    { key: 'Circulating Tokens', value: '100%' }
                ].map(props => <li className="font-body text-lg text-t2 text-center w-full">
                    <p className="text-left text-t3 font-accent">
                        {props.key}
                    </p>
                    <span className="flex flex-row justify-between">
                        <p className="text-left text-t2 font-body">
                            {props.value}
                        </p>
                        {props.button && <button onClick={() => copy(config.contractAddress)}>
                            <p className={`${copied ? 'text-accent' : ''} transition-colors duration-300 font-body text-lg`}>copy</p>
                        </button>}
                    </span>
                    </li>)}
                </ul>
            </div>
            </Section.Body>
            <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap flex-row justify-between border-t-[1px] border-t-accent border-l-[1px] border-l-accent pb-20 p-5 gap-5">
                <Card.Container>
                    <Card.Header heading="TAXES" icon="/icons/gg.svg" />
                    <div className="w-full flex-1 flex-col flex gap-5 px-3 py-2">
                        <span className="flex flex-row justify-between items-center">
                            <p className="text-xl text-left font-body text-t3">BUY</p>
                            <p className="text-xl text-left font-body text-t1">5</p>
                        </span>
                        <span className="flex flex-row justify-between items-center">
                            <p className="text-xl text-left font-body text-t3">SELL</p>
                            <p className="text-xl text-left font-body text-t1">5</p>
                        </span>
                    </div>
                    <div className="absolute right-0 -top-44 opacity-10">
                        <p className="text-[23rem] font-accent text-accent">5</p>
                    </div>
                </Card.Container>
                <Card.Container>
                    <Card.Header heading="SECURITY" icon="/icons/pie.svg" />
                        <div className="w-full flex-1 flex-col flex gap-5 px-3 py-2">
                            <span className="flex flex-row justify-between items-center">
                                <p className="text-xl text-left font-body text-t3">Liquidity locked</p>
                                <Link className="px-2 py-1 flex flex-row gap-2 bg-accent bg-opacity-30 rounded-md" href="">
                                    <Image src="/icons/arrowlink.svg" alt="" height={17} width={17}/>
                                </Link>
                            </span>
                            <span className="flex flex-row justify-between items-center">
                                <p className="text-xl text-left font-body text-t3">Ownership Renounced</p>
                                <Link className="px-2 py-1 flex flex-row gap-2 bg-accent bg-opacity-30 rounded-md" href="">
                                    <Image src="/icons/arrowlink.svg" alt="" height={17} width={17}/>
                                </Link>
                            </span>
                        </div>
                </Card.Container>
            </div>
        </Section.Container>
    )
}