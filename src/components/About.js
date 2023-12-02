import React, { useState } from 'react'

export default function About() {
    const [textStyle, settextStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [text, settext] = useState("Enable dark mode")

    const handleClick = () => {
        if (textStyle.color === 'black') {
            settextStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'

            })
            settext('Enable light mode')
        }
        else {
            settextStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            settext('Enable dark mode')
        }


    }
    return (
        <div className='container my-3 p-3' style={textStyle}>
            <h1 className='container my-2'  >About TextUtils</h1>
            <div className="accordion" style={textStyle} id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            <strong>What exactly is TextUtils?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={textStyle}>
                            <strong>TextUtils is a versatile single-page text manipulation application, offered completely free of charge. Seamlessly count the number of words and characters in your provided text with ease. Elevate your content creation process by determining the estimated reading time of your text, a valuable tool for script preparation, YouTube videos, presentations, and more. Streamline your creative workflow with TextUtils – empowering your words, effortlessly.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>What framework is used to make TextUtils?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={textStyle}>
                            <strong>I harnessed the power of React to craft TextUtils.</strong >
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Are you going to add more features in the future?</strong >
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={textStyle}>
                            <strong>Absolutely! I'm currently working on enhancing TextUtils with advanced features. I plan to include functionalities such as removing extra spaces, capitalizing the first letter of new sentences, and I'm even exploring the integration of AI for features like paraphrasing, summary writing, and toggling words. Stay tuned for exciting updates!</strong >
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary my-3 " onClick={handleClick}>{text}</button>
        </div>
    )
}
