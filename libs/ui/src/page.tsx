import { PropsWithChildren } from 'react';
import Image, { StaticImageData } from 'next/image';
import { titleFont } from '@weyneshof/util/fonts';

import logo from '../content/logo.svg';

export const Page: React.FC<PropsWithChildren<{image: StaticImageData, title: string}>> = ( props) => {


  return (

    //get image source from props

    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">

        <a href='/'>
          <Image src={logo} alt="logo" className={"w-[200px]"} />
        </a>

        <h1 className={titleFont.className + " text-5xl text-white shadow-black text-"} style={{
        }}>{props.title}</h1>



      </div>
      <div className="grow">
      {props.children}
      </div>
    </div>
  )
}
