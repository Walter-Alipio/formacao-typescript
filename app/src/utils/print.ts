import { Printable } from "../interfaces/printable.js";

export function print(...args: Array<Printable>){
  for(let arg of args){
    console.log(arg.toText());
  }
}