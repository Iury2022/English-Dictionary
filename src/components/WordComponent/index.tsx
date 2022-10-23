import './styles.css'

export default ({
  spelling,
  meanings,
}: {
  spelling: string,
  meanings: any[],
}) =>{
  return (
    <div>
      <h2>{spelling}</h2>
      <div className="meaning">
        {meanings.map((meaning) => {
          return (
            <>
              <i>{meaning.partOfSpeech}</i>
              {meaning.definitions.map((definitionObj: any) => {
                let { definition, synonyms, antonyms } = definitionObj
                return <div className="definition">
                  <span>{definition}</span>
                  <span>{synonyms.join(', ')}</span>
                  <span>{antonyms.join(', ')}</span>
                  <hr />
                </div>
              })}
            </>
          )
        })}
      </div>
      
    </div>
  )
}