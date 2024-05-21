import Image from 'next/image';
import LogoImg from '../../../public/Logo_postit.png';

export default function Logo() {
  return <img src={'/Logo_postit.png'} alt={'Logo'} className="w-[350px]" />;
}
