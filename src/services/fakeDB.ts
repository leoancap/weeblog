import { IPost } from "#domainTypes";

export const fakeDB = {
  saveToLocalStorage(query:string,newPost:IPost)  {
    const cachedPosts = this.readFromLocalStorage(query)
    localStorage.setItem(query,JSON.stringify([newPost,...cachedPosts]))
  },
  readFromLocalStorage (query:string)  {
    const cachedPosts = localStorage.getItem(query)
    return JSON.parse(cachedPosts as string) || []
  }
}