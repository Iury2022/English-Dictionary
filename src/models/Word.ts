export default class Word {
  public spelling: string
  public meanings: any[]
  public definitions: any[] = []

  constructor(
    jsonObj: any
  ){
    this.spelling = jsonObj.word
    this.meanings = jsonObj.meanings
    for(let i = 0; i < jsonObj.meanings.length; i++){
      this.definitions.push(jsonObj.meanings.definitions)
    }
  }
}