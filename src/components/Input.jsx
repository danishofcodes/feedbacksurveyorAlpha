import React from 'react'

export default function Input(type) {
    return (
        <>
            <div>
                <input type="text" />
            </div>

            {type == "radio" && <div>
                {option.map((opt)=>{ <input type="radio" name={} text/> })}
            </div>
            }
            {type == "textarea" &&
                <div >
                    <textarea></textarea>
                </div>
            }
        </>
    )
}
