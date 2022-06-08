import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import projectImage from "../public/coding.jpg";

const DataAnalysis: NextPage = () => {
  return (
      <div className='mt-4'>
          <h1 className='text-xl text-indigo-600 mb-4 font-bold'>
              Data Analysis App
          </h1>
          <Image src={projectImage} />
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur asperiores ea quis fugit nostrum perferendis. Quia sint modi dolores rerum suscipit sequi quasi fugit quibusdam expedita, beatae at itaque laudantium labore! Corrupti saepe perferendis error pariatur, exercitationem mollitia unde!
        </div>
        <div className='mt-6'>
            <Link href="/">
                <a href={"/"} className="hover:text-indigo-600 font-bold underline">
                    Back
                </a>
            </Link>
        </div>
      </div>
  )
}

export default DataAnalysis
