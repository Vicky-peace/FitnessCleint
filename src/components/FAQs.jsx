import React from 'react'
import { faqs } from '../data'
import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import FAQ from './FAQ'


const FAQs = () => {
    return (
        <section className="faqs">
            <div className="container faq__container">
                <SectionHead icon={<FaQuestion />} title='FAQs' />
                <div className="faqs__wrapper">
                    {
                        faqs.map(({ id, question, answer }) => {
                            return <FAQ key={id} question={question} answer={answer} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQs