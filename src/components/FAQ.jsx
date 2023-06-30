 import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import React, { useState } from 'react'

const FAQ = ({ question, answer }) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);


    return (
        <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className="faq__icon">
                    {
                        isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </div>
            {isAnswerShowing && <div>{answer}</div>}
        </article>
    )
}

export default FAQ
