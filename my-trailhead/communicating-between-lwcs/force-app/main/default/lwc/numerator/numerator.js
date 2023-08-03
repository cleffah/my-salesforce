import { api, LightningElement } from 'lwc';

export default class Numerator extends LightningElement {
    // @api counter = 0;
    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
      return this._currentCount;
    }
    set counter(value) {
      this.priorCount = this._currentCount;
      this._currentCount = value;
    }

    handleIncrement() {
        this.counter++;
    }

    handleDecrement() {
        this.counter--;
    }

    handleDivide(event) {
        const factor = event.detail;
        this.counter /= factor;
    }

    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
    }

    @api
    maximizeCounter(event) {
        const number = parseInt(event.detail);
        this.counter += number;
    }
}