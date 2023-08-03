import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    factors = [0,2,3,4,5,6];
    factorsDiv = [2,3,4,5,6,7];

    handleAdd() {
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleDivide(event) {
        const factor = event.target.dataset.factor;
        
        this.dispatchEvent(new CustomEvent('divide', {
            detail: factor
        }));
    }

    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        
        this.dispatchEvent(new CustomEvent('multiply', {
            detail: factor
        }));
    }

    handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
    }
}