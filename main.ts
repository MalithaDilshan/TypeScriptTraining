
// Interface declaration 
// interface Point
// {
//     x : number,
//     y : number,
//     draw : () => void
// }

class Point 
{
    private _x : number;
    private _y : number;
    
    // '?' take this as optional ( TypeScript can not have multiple contractors )
    constructor( x? : number, y? : number )
    {
        this._x = x;
        this._y = y;
    }

    // constructor( private x? : number, private y? : number )
    // {
    // }


    draw()
    {
        console.log( "Coordinate - X : " + this._x + "  Y : " + this._y );
    }

    getX()
    {
        return this._x;
    }

    setX( value : number )
    {
        if( value < 0)
        {
            throw new Error( " Value is not in the valid range")
        }
        
        this._x = value;
    }

    // Declare as a property access modifier 
    get y()
    {
        return this._y;
    }

    set y( value : number )
    {
        if( value < 0)
        {
            throw new Error( " Value is not in the valid range")
        }
        
        this._y = value;
    }
}
// let point = new Point ();
let point1 = new Point( 4, -1 );
// point.x = 4;
// point.y = 5;
point1.draw();
console.log(" Y: ", point1.y );
