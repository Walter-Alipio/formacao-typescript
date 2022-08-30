import { printable } from "../interfaces/printable.js";

export function print(...args: Array<printable>){
  for(let arg of args){
    console.log(arg.toText());
  }
}