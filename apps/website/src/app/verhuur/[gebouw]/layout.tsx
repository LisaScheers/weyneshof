import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    gebouw: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: `Verhuur ${params.gebouw}`,
    description: `Verhuur van ${params.gebouw} op speelplein Weyneshof`,
  };

}

export default function Layout() {

  return (
    <>
    </>
  );
}
