export default function Letter({letter, correctLetter, validate, word}: {letter?: string, correctLetter: string, validate: boolean, word: string}){
    
    const color = !validate ? 'white' : letter!.toLowerCase() === correctLetter.toLowerCase() ? 'green' : word.toLowerCase().includes(letter!.toLowerCase()) ? 'yellow' : 'gray';
    return(
        <div 
            className="letter-container flex-center"
            style={{
                backgroundColor: color,
                borderColor: color === 'white' ? 'gray' : color
            }}>
            {letter}
        </div>
    );
}