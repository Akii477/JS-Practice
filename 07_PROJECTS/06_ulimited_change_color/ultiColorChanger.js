const randomColor = function()
{
    const hex = '0123456789ABCDF';
    let color = '#';

    for(let i=0; i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
}
let intervalId ;
const startChangingColor = () =>
{
    if(!intervalId)
    {    
        intervalId = setInterval(changeBgColor, 1000);
    };

    function changeBgColor()
    {
        document.body.style.backgroundColor = randomColor();
    }
};
document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = ()=>
{
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector('#stop').addEventListener('click',stopChangingColor);


// ---------------------------------------------------------------------
let fontcolor;
const text = document.getElementById('text');
const startChangingColorText= () =>
    {
        if(!fontcolor)
        {    
            fontcolor = setInterval(changeBgColorText, 1000);
        };
    
        function changeBgColorText()
        {
            text.style.color = randomColor();
        }
    };
    document.querySelector('#start').addEventListener('click', startChangingColorText);
    
    const stopChangingColorText = ()=>
    {
        clearInterval(fontcolor);
        fontcolor = null;
    };
    document.querySelector('#stop').addEventListener('click',stopChangingColorText);