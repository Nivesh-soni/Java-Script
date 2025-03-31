# Project releted DOM
## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## Project 1
```Javascript
const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

btn.forEach(function(btn){
  console.log(btn)
  btn.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == "grey")
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "white")
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "blue")
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "yellow")
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "purple")
    {
      body.style.backgroundColor = e.target.id
    }
  })
})

```


# Project 2

``` Javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const r = document.querySelector('#results');

  if (h === '' || h < 0 || isNaN(h)) {
    r.innerHTML = `Please give a valid heigth ${h}`;
  } else if (w === '' || w < 0 || isNaN(w)) {
    r.innerHTML = `Please give a valid weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 1000)).toFixed(2);
    r.innerHTML = `<span>${bmi}</span>`;
  }
});

```