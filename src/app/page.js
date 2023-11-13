import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section id='home'>
        <container>
          <div className='flex flex-wrap pt-36'>
            <div className='w-full self-center px-10 lg:w-1/2'>
              <h1 className='text-base font-semibold text-secondary'> Hello, Everyone! 👏
                <span className='block text-white text-4xl lg:text-5xl'>I'm Arif Alfarisy</span>
              </h1>
              <h2 className='font-medium text-lg mb-5'>
                Fullstack Developer
              </h2>
              <p className='font-medium mb-5 leading-relaxed'>
                Ipsum irure ea cupidatat labore ipsum consectetur sint officia voluptate. Reprehenderit dolor est labore sint nostrud labore deserunt incididunt labore nostrud proident non.
              </p>
              <button className="btn btn-secondary font-semibold py-3 px-8 text-white">Hire Me</button>
            </div>
            <div className='w-full self-end px-10 lg:w-1/2'>
              <div className='relative mt-10'>
                <img alt='foto-profile' className='max-w-full mx-auto' src={ '/arif.png' } />
                <span className='absolute left-1/2 -translate-x-1/2 -bottom-20 -z-10'>
                  <svg width={ 400 } height={ 400 } viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1ba37b" d="M32.2,-64.4C38.7,-52,38.8,-37.2,43.2,-26.1C47.7,-15,56.5,-7.5,60.7,2.4C64.9,12.4,64.6,24.7,56.2,29.1C47.9,33.5,31.5,29.9,20.8,28.3C10.1,26.8,5.1,27.3,-4.4,35C-13.9,42.6,-27.8,57.4,-31.4,54.9C-35,52.3,-28.4,32.4,-32.9,20.4C-37.4,8.3,-53.1,4.2,-57,-2.2C-60.9,-8.6,-52.9,-17.3,-45.5,-24.3C-38.1,-31.4,-31.3,-36.9,-23.8,-48.7C-16.3,-60.6,-8.2,-78.8,2.3,-82.8C12.8,-86.9,25.7,-76.8,32.2,-64.4Z" transform="translate(100 100) scale(1)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </container>
      </section>
    </>
  )
}
