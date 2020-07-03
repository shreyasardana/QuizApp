import React from 'react';


const Questionaire = ({
    handleAnswer,
    data
}) => {

    // if(!data){
    // return null;}

    let {correct_answer, incorrect_answers, question}=data;
    
    //console.log(data)
    
    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random()-0.5);
    
    return(

        
    <div>
         <div className="bg-purple-500 text-white p-10 rounded-lg">
            <h2 className="text-2xl" dangerouslySetInnerHTML={{__html:question}}>
                
            </h2>
        </div> 
         <div className="grid grid-cols-2 gap-6 mt-6">
            {shuffledAnswer.map(answer => (
                    <button className="bg-purple-500 text-white p-10 rounded-lg" 
                    onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}}>
                    </button>
            ))}
            
        </div> 
        
    </div>
    );
};

export default Questionaire;