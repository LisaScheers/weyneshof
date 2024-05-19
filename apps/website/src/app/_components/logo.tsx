import Image from 'next/image';
import LogoImg from './content/Logo_postit.png';

export default function Logo() {
  return (
    <img src={'/content/Logo_postit.png'} alt={'Logo'} className="w-[350px]" />
  );
}
