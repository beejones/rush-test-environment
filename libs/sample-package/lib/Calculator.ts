import { FancyCalculator } from '@beejones/fancy-calculator';

/**
 * Calculator Class
 */
export default class Calculator {
    static add(n1: number, n2: number): number {
        return FancyCalculator.add(n1, n2);
    } 
}
