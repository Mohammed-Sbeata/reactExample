import React from "react";

export function Signup(){
    const [signupData,setSignupData] = React.useState({
        email:'',
        password:'',
        confirmPassword:''
    })

    const [user , setUser] = React.useState()
    const [error,setError] = React.useState('')


    const handlerSubmit = ()=>{
        setError(null)

        if(!signupData.email || !signupData.password || !signupData.confirmPassword){
            return setError('Filled Submit... , Please Enter All Input')
        }
        if(signupData.password !== signupData.confirmPassword){
            return setError('Hey!!!... Password Not Equel Confirm Password')
        }
        setUser({
            email: signupData.email,
            password: signupData.password
        })
    }
    const handlerDelete = ()=>{
        setSignupData({
            email:'',
            password:'',
            confirmPassword:''
        })
        setUser('')
    }

    return(
        <>
        <div>
            Email: <input  type="email" placeholder="Enter Email" 
            onChange={(e)=>setSignupData({...signupData,email:e.target.value})} /><br/>
            Password: <input type="password" placeholder="Enter Password"
             onChange={(e)=>setSignupData({...signupData,password:e.target.value})} /><br/>
            Confirm Password: <input type="password" placeholder="Confirm Password"
             onChange={(e)=>setSignupData({...signupData,confirmPassword:e.target.value})} /><br/>
            <button onClick={handlerSubmit}>Submit</button>
        </div>
        
        <div>
            {
                error?<h3>{error}</h3>:
                user &&
                <div>
                    <h3>{user.email}</h3>
                    <h3>{user.password}</h3>
                    <button onClick={()=>handlerDelete()}>DELET</button>
                </div>
            }
        </div>
        </>
    )
}