const QuestionNumber = (props) => {

    const length = props.length
    const array = []

    for(let i=1; i<=length; i++){
        array.push(i);
    }

    const onTrigger = (event) => {
        props.indexhandler(parseInt(event.target.textContent)-1);
    }

    return(
        <div className="qno">
            <div className="header">
                <p>Questions</p>
            </div>
            <hr/>
            <div className="questions">
                {
                    array.map((number, index)=> (
                        <div key={index} onClick={onTrigger} className="qsn"><p>{number}</p></div>
                    ))
                }
            </div>
            <style jsx>{`
                .qno{
                    width: 90%;
                    height: 60%;
                    box-shadow: 3px 3px 10px black;
                }

                p{
                    background: transparent;
                }

                .questions{
                    width: 100%;
                    height: 10em;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    column-gap: 3%;
                    overflow: hidden;
                    padding: 5%;
                    cursor: pointer;
                    color: white;
                }

                .qsn{
                    height: 80%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: blue;
                    border-radius: 0.5em;
                }

                .header{
                    width: 100%;
                    height: 20%;
                    text-align: center;
                    align-items: center;
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default QuestionNumber;