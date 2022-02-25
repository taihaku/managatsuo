/* eslint-disable react/jsx-key */
import Link from 'next/link';

import Image from 'next/image';

type Props = {
  title: string

  src: string

  slug?: string
}

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <Image
    height={720}
    width={1280}
    src={src}
    alt={`Thumbnail cover image ${title}`}
    />
  )

  return (
    <>
    { slug ? (
      <Link href={`/posts/${slug}`}>
        <a aria-label={title}>{image}</a>
      </Link>
    ) : (
      image
    ) }
    </>
  )
}


export default Thumbnail