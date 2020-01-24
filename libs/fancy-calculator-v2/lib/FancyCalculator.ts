import { ICalculator } from '@beejones/calculator-interface';

/**
 * Calculator Class
 */
export default class  implements ICalculator {
    add(n1: number, n2: number): number {
        return n1 + n2;
    } 
    sub(n1: number, n2: number): number {
        return n1 - n2;
    } 
    mul(n1: number, n2: number): number {
        return n1 * n2;
    } 
}
