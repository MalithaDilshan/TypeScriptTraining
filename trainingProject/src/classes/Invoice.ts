import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter
{
    constructor( 
        readonly client: string,
        private details : string,
        public amount : number
    ){}

    public format()
    {
        return `${this.client} owns Rs${this.amount} for ${this.details}`;
    }
}

