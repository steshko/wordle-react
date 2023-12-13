import Letter from "./Letter";
export default function Row({userInput, word, validate}: {userInput?: string, word: string, validate: boolean}){
    return(
        <div className="row flex-center">
            {[...Array(5)].map((itm, i) => <Letter key={i} letter={userInput? userInput[i] : undefined} correctLetter={word[i]} word={word} validate={validate}/>)}
        </div>
    );
}