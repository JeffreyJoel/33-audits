import React from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const timelineData = [
  {
    protocol: "Payant",
    findings: [
        "Found 1 Critical vulnerability",
        "Found  4 High risk vulnerabilities",
        "Found 14 Medium risk vulnerabilities",    
      ]
  },
  {
    protocol: "JuiceBox",
    findings: [
      "Found 1 Critical vulnerability",
      "Found  4 High risk vulnerabilities",
      "Found 14 Medium risk vulnerabilities",    
    ]
  },
  {
    protocol: "JuiceBox",
    findings: [
        "Found 1 Critical vulnerability",
        "Found  4 High risk vulnerabilities",
        "Found 14 Medium risk vulnerabilities",    
      ]
  },
]

export  function Audits() {
  return (
    <div className="max-w-6xl mx-auto px-8 mt-24 pt-8 relative" id='audits'>
        <h1 className="text-center text-5xl font-semibold">
        Recent Audits
        </h1>
      <div className=" mx-auto divide-zinc-800 relative">
        <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-slate-500 to-transparent -left-4 md:-left-10">
          <span className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500 style_meteor__iBwXl left-1" style={{visibility: 'hidden', '--meteor-delay': '2s', '--meteor-duration': '0s', '--meteor-width': '140px'} as React.CSSProperties}></span>
        </div>
        {timelineData.map((protocol, index) => (
          <div key={protocol.protocol} className="border-b border-zinc-800">
            <h1 className="text-2xl font-bold text-zinc-200 my-8 relative">
              <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-slate-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
              {protocol.protocol}
            </h1>
            <div className="mb-8">
              {protocol.findings.map((finding, findingIndex) => (
                <div key={findingIndex} className="flex flex-row space-x-2 items-start my-2">
                  <Check className="text-white mt-[3px] flex-shrink-0" size={16} />
                  <span className="text-zinc-400 md:text-base">{finding}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='w-fit mt-12 mx-auto'>
      <Link
            href="https://app.deform.cc/form/6d07745a-8a46-4445-b064-4755c72e8c4b/?page_number=0"
            target="blank"
          >
            <Button
              className="rounded-xl text-lg p-6 cursor-pointer"
              variant={"secondary"}
            >
              Book an Audit <ArrowRight className="ml-4" />
            </Button>
          </Link>
      </div>
    </div>
  )
}