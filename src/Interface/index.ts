export interface LoginInputProps {
    type:string,
    name:string,
    label:string,
    placeholder:string,
    register:Function
  }
  export interface GenreIDInterface {
    genres:Array<{id:number,name:string}>
  }