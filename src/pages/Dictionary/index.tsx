import { useState, useEffect } from 'react'
import Word from '../../models/Word'
import WordService from '../../services/WordService'
import WordComponent from '../../components/WordComponent'

export default () =>{
  const [words, setWords] = useState<Word[]>([])

  const getWord = async () =>{
    const urlSearchParams = new URLSearchParams(location.search)
    const word = urlSearchParams.get('word')
    if(word != null){
      const wordService = new WordService(word)
      setWords(await wordService.searchWords())
    }
  }

  useEffect(() =>{
    getWord()
  }, [])

  return (
    <div id="dictionary">
      {words.map((word) => <WordComponent {...word} />)}
    </div>
  )
}