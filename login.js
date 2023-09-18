function register(){
    accno=accno1.value
    username=username1.value
    pw=pw1.value
    cpw=cpw1.value
    if(pw==cpw){
        a1.innerHTML=""
        //object
        user={accno,pw,cpw}
        // console.log(user);
        if(accno in localStorage){
            alert("user already exists")
            window.location='index.html'
        }
        else{
            localStorage.setItem(accno,JSON.stringify(user))
            alert('registered successfully')
            window.location='index.html'
        }

    }
    else{
        a1.innerHTML=`<p class="text-danger">
        password doesn't match </p>`
        
    }

}

function login(){
    accountNo=uname.value
    Password=Password.value

    if(accountNo in localStorage){
        userobj=JSON.parse(localStorage.getItem(accountNo))
        if(userobj.pw==Password){
            window.location='hpme.html'
            alert('login success')
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert('incorrect accno')
    }
}