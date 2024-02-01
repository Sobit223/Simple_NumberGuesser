const input = document.querySelector('.input');
const button = document.querySelector('button')
const remaining = document.querySelector('.remaining')
const response = document.querySelector('.response')
const show_previous_responses = document.querySelector('.previousr');

const previous_responses = []
let my_random_value = Math.round(Math.random()*10+1)
// console.log(my_random_value);


function random_generator(){
    my_random_value = Math.round(Math.random()*10+1)
}

button.addEventListener('click',function(event){
    const value = parseInt(input.value)
    if(previous_responses.length == 10){
        response.innerHTML="Your chances have been finished !! Please click to Play again"
        response.addEventListener('click',function(event){
            reset()
        })
    }
    else if(valid(value)){
        previous_responses.push(value)
        update(value)
        show_response(value)
        input.value = ''

    }
})

function valid(value){
    if(value==="" || value>10 || value<1 || isNaN(value)){
        alert("Please insert a valid value , Read the instructions carefully")
    }
    else{
        return true
    }
}

function update(value){
    remaining.innerHTML = `You have chances left : ${10-previous_responses.length}`
    show_previous_responses.innerHTML+=`${value}` + ", "

}

function show_response(value){
    if(value>my_random_value){
        response.innerHTML = "<h2>Your value is too high</h2>"
    }
    else if(value < my_random_value){
        response.innerHTML = "<h2>Your value is too low</h2>"
    }

    else{
        response.innerHTML = "<h2>Congrats you guessed it right</h2>"
        response.addEventListener('click',function(e){
            reset()
        })
    }
}


function reset(){
    input.value = ''
    remaining.innerHTML = "You have chances left : 10"
    show_previous_responses.innerHTML = "Your previouse responses are ::"
    response.innerHTML=''
    previous_responses.splice(0,previous_responses.length)
    document.body.style.background = "antiquewhite";
    random_generator()

}

const colorchanger = document.querySelectorAll('.span')
colorchanger.forEach((color)=>{
    color.addEventListener('click',function(e){
        document.body.style.background=e.target.id
    })
})