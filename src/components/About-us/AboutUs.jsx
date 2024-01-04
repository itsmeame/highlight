import { Transition } from "@headlessui/react"
import { useState } from "react"
import { accordions } from "./data"
import "./about.css";


function App() {
  const [activeAccordion, setActiveAccordion] = useState(0)
  return (
    <div className='min-h-screen py-14' style={{ backgroundColor: '#0d0225' }}>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-3'>
          {accordions.map((accordion, index) => {
            const Icon = accordion.icon
            return (
              <button
                onClick={() => setActiveAccordion(index)}
                key={index}
                className='flex flex-col items-center border p-6
                  last-of-type:rounded-r-md
                  first-of-type:rounded-l-md
                '
              >
                <Icon className='w-10 h-10 text-white' />
                <h2 className='text-xl text-white'>{accordion.title}</h2>
              </button>
            )
          })}
        </div>
        <div className='relative overflow-hidden border'>
          {accordions.map((accordion, index) => {
            return (
              <div key={`show-${index}`}>
                <Transition
                  show={activeAccordion === index}
                  className={"grid grid-cols-2 p-10  w-full items-center"}
                  // swipe transtion from left to right
                  enter='transition ease-out absolute top-0 duration-500 transform'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-out duration-500 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='-translate-x-full'
                >
                  <div>
                    <h3 className='text-xl text-white'>
                      {accordion.description}
                    </h3>
                    {accordion.lists.map((list, index) => {
                      const Icon = list.icon
                      return (
                        <div
                          key={index}
                          className='flex border rounded p-2 items-center mt-4'
                        >
                          <Icon className='w-6 h-6 text-white' />
                          <p className='ml-2 text-white'>{list.title}</p>
                        </div>
                      )
                    })}
                  </div>
                  <img
                    src={accordion.image}
                    className='transform ml-auto -skew-x-12 skew-y-6'
                    alt=''
                  />
                </Transition>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
