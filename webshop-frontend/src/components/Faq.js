import { useRef, useState } from 'react'


const FaqsCard = (props) => {
  
  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
      const answerElH = answerElRef.current.childNodes[0].offsetHeight
      setState(!state)
      setAnswerH(`${answerElH + 20}px`)
  }

  return (
    <div 
        className="space-y-3 mt-5 overflow-hidden border-b"
        key={idx}
        onClick={handleOpenAnswer}
    >
        <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {faqsList.q}
            {
                state ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                )
            }
        </h4>
        <div
            ref={answerElRef} className="duration-300"
            style={state ? {height: answerH } : {height: '0px'}}
        >
            <div>
                <p className="text-gray-500">
                    {faqsList.a}
                </p>
            </div>
        </div>
    </div>
)
}
export default function questions() {

  const faqsList = [
      {
          q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod?",
          a: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
          q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod?",
          a: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
          q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod?",
          a: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
          q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod?",
          a: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
          q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod?",
          a: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
  ]

  return (
      <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
          <div className="space-y-3 text-center">
              <h1 className="text-3xl text-gray-800 font-semibold">
                  FAQ
              </h1>
              <p className="text-gray-600 max-w-lg mx-auto text-lg">
                  Still confused? feel free to contact us.
              </p>
          </div>
          <div className="mt-14 max-w-2xl mx-auto">
              {
                  faqsList.map((item, idx) => (
                      <FaqsCard
                          key={idx}
                          faqsList={item}
                      />
                  ))
              }
          </div>
      </section>
  )
}