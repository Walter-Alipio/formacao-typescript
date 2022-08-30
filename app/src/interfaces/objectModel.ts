import { Comparable } from "./comparable";
import { Printable } from "./printable";

export interface Model<T> extends Printable, Comparable<T>{
  
}