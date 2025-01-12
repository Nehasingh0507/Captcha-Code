

    let result
 
 function generatecaptcha()
  {
    result=""
    let text = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$%@&#"
    for(let i=0; i<6; ++i)
    {
        result += text[Math.ceil(Math.random()*text.length)]
    }
    document.getElementById("captcha-code").innerHTML = result
  }

  let btn = document.getElementById('btn');
  btn.addEventListener('click', function(){
    const input = document.getElementById("input-text");
    if(input.value=== result)
    {
    alert("Registration success")
    }
    else
    {
    alert("captcha not match")
    }

  })
