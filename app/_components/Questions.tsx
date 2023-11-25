import Link from 'next/link'
import React from 'react'

function Questions({q1, q2, q3, q4}: {q1?: string, q2?: string, q3?:string, q4:string}) {
  return (
    <section id='questions'>
        <div className="container">
            <div className="question-group">
              {q1 && <p className="q1">{q1}</p>}
              {q2 && <p className="q2">{q2}</p>}
              {q3 && <p className="q3">{q3}</p>}
              {q4 && <p className="q4">{q4}</p>}

            </div>
            
        </div>
    </section>
  )
}

export default Questions

