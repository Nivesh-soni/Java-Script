// Immediately Invoked Function Expression (IIFE)

//1
function chai()
{
    console.log(`DB Connected`)
}
chai();


//2 Named IIFE
(function Tea(){
    console.log(`DB Connected`)
})();


//3 Simple IIFE or UnNamed IIFE
(  (name) => {
    console.log(`DB Connected ${name}`)
}  )("Nivesh");