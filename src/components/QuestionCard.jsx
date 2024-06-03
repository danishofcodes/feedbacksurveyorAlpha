
export default function QuestionCard({ question, questionNo, options, type }) {
    return (
        <div className="card"> {/* Use className for class attribute */}
            <div className="fb-question">
                {questionNo + 1}. {question}
                {console.log(options)}
            </div>
            <div>
                {(type === 'radio' || type === 'checkbox') && (
                    <div>
                        {options.map((option) => ( // Use option for clarity
                            <>
                                <input  type={type}  value={option} />
                                <label key={option}> {/* Add key for accessibility */}  {option} </label>
                            </>
                        ))}
                    </div>
                )}
                {type === 'textarea' && <textarea></textarea>}
            </div>
        </div>
    )
}
