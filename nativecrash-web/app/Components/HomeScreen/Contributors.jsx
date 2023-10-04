import React from 'react'
import {DiGithubBadge} from 'react-icons/di'
import Link from 'next/link'
const Contributors = () => {
  const details = [
    {
      name: 'Karthik Namboori',
      githubLink: 'https://github.com/karthik2603-theBrogrammer',
      role: 'Dev',
      background: 'bg-accent',
      src:'/karthik.png'

    },
    {
      name: 'Leharaditya Kumar',
      githubLink: 'https://github.com/Larry8668',
      role: 'Dev',
      background: 'bg-accent',
      src:'/lehar_unofficial.jpg'
    },

  ]
  return (
    <>
      <h1 className="mb-4 text-4xl my-7 mt-32 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-secondary text-center w-screen">
        Our Contributors
      </h1>

      <div className='h-fit w-screen flex flex-col items-center justify-center md:flex-row md:space-x-9'>

        {details?.map((contributorDetail, index) => (
          <div key={index} className={`${contributorDetail.background} flex flex-row space-x-3 items-center justify-center p-3 rounded-xl m-6`}>
            <div className="avatar">
              <div className="w-16 rounded-full   ring-offset-base-100 ring-offset-2">
                <img src={contributorDetail.src} />
              </div>
            </div>
            <h1 className="mb-4 md:text-4xl my-7 font-bold    dark:text-white  text-center ">
              {contributorDetail.name}
            </h1>
            <h1 className="mb-4 text-2xl my-7 font-bold leading-none tracking-tight   dark:text-gray-500  text-center ">
              {contributorDetail.role}
            </h1>
            <Link href = {contributorDetail.githubLink}>
            <DiGithubBadge  size = {40} className = 'my-auto'/>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Contributors