import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payments implements HasFormatter
{
    constructor( 
        readonly recipient: string,
        private details : string,
        public amount : number
    ){}

    public format()
    {
        return `${this.recipient} owns Rs${this.amount} for ${this.details}`;
    }
}

