import React from "react";


export default Lecture_content = () => {
    return (
    <>
        <h1><a href='https://www.w3schools.com/REACT/react_forms.asp' target='_blank'>
                React Forms (from W3C)</a></h1>
        <p>Use the useState Hook to manage the input:</p>
        <p>You can control the submit action by adding an event handler in the onSubmit attribute for the &#60;form&#62;:</p>
        <h2>Form example:</h2>

        <code>
            import &#123; useState &#125; from "react";<br />
            import ReactDOM from 'react-dom';<br /><br />

            function MyForm() &#123;<br />
            &nbsp;const [name, setName] = useState("");<br /><br />

            &nbsp;const handleSubmit = (event) =&#62; &#123;<br />
            &nbsp;&nbsp;event.preventDefault();<br />
            &nbsp;&nbsp;alert(`The name you entered was: $&#123;name&#125;`)<br />
            &nbsp;&#125;<br /><br />

            &nbsp;return (<br />
            &nbsp;&nbsp;&#60;form onSubmit=&#123;handleSubmit&#125;&#62;<br />
            &nbsp;&nbsp;&nbsp;&#60;label&#62;Enter your name:<br />
            &nbsp;&nbsp;&nbsp;&#60;input <br />
            &nbsp;&nbsp;&nbsp;&nbsp;type="text" <br />
            &nbsp;&nbsp;&nbsp;&nbsp;value=&#123;name&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;(e) =&#62; setName(e.target.value)&#125;<br />
            &nbsp;&nbsp;&nbsp;/&#62;<br />
            &nbsp;&nbsp;&nbsp;&#60;/label&#62;<br />
            &nbsp;&nbsp;&nbsp;&#60;input type="submit" /&#62;<br />
            &nbsp;&nbsp;&#60;/form&#62;<br />
            &nbsp;)<br />
            &#125;<br />

            ReactDOM.render(&#60;MyForm /&#62;, document.getElementById('root'));<br />
        </code>
        
        
        
    </>

    )
 

}