import axios, { AxiosInstance } from 'axios'
import Word from '../models/Word'

export default class WordService {
  private _http: AxiosInstance
  private _endpoint: string
  private _targetWord: string

  constructor(targetWord: string){
    this._http = axios.create({ baseURL: import.meta.env.VITE_API_URL })
    this._endpoint = import.meta.env.VITE_WORD_SEARCH_ENDPOINT
    this._targetWord = targetWord
  }

  async searchWords(): Promise<Word[]> {
    try {
      const response = await this._http.get(`${this._endpoint}/${this._targetWord}`)
      return response.data.map((word: any) => new Word(word))
    } catch(err){
      return []
    }
  }
}