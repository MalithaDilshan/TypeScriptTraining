
// Interface declaration 
interface Point
{
    x : number,
    y : number,
    draw : () => void
}

let drawPoint = ( x : number, y: number) =>
{
    console.log( x*x + y*y )
}

let drawPoint1 = ( point : { x : number, y : number } ) => 
{
    console.log( point.x*point.x + point.y*point.y)
}

let drawPoint2 = ( point : Point ) =>
{
    console.log( point.x*point.x + point.y*point.y)
}

drawPoint( 2, 3);

drawPoint1( {
    x : 1,
    y : 2
});
