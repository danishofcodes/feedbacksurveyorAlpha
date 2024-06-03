import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import QuestionCard from './components/QuestionCard'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const questions = [
    { id: 1, 
      feedbackquestion: "How often do you use our products?" ,
      type: "text",
      options: null
    },
    { id: 2, 
      feedbackquestion: "Which features are most valuable to you." ,
      type: "textarea",
      options: null,
    },
    { id: 3, 
      feedbackquestion: "How would you compare our products to our competitors",
      type: "radio",
      options: ["option 51", "option 52", "option 53", "option 54"],
    },
    { id: 4, 
      feedbackquestion: "What important features are we missing?",
      type: "checkbox",
      options: ["option 51", "option 52", "option 53", "option 54"]
    },

    { id: 5, 
      feedbackquestion: "What are you trying to solve by using our product?",
      type: "textarea",
      options: ["option 51", "option 52", "option 53", "option 54"]
    }
  ];


  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    
  }



  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const res = questions[currentIndex];
  console.log(res.feedbackquestion);

  let page = currentIndex + 1

  const length = questions.length - 1
  return (
    <>
      <div className="header ">
        <div className="logo">
          <div className="iconsec">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <h2 className="roboto-light ">SurveyBubble</h2>
        </div>

        <div className="faq">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
      </div>
      <div className="progressbar"></div>
      <div className="pgcountsec"> <span className="pgcount">{page}/{questions.length}</span></div>

      <div className="spread">
        <main>
          <div className="container">
            <QuestionCard question={res.feedbackquestion} questionNo={currentIndex} type={res.type} options={res.options}/>
          </div>
        </main>
        <div className="actionbuttonsec">
           <button className="buttonaction themeblu  hover:bg-gray-500" onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft} /> Prev</button>
          {currentIndex < length && <button className="buttonaction themeblu hover:bg-gray-500" onClick={handleNext}>Next <FontAwesomeIcon icon={faAngleRight} /></button>}
          {currentIndex === length && <button className="buttonaction bg-green-500 hover:bg-green-600">Submit</button>}

        </div>
      </div>
    </>
  )
}

export default App
