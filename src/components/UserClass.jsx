import react from "react";

class User extends react.Component {
    constructor(props){
        super(props)
    }

    

    render(){
        const{name,age} = this.props
        return(
            <div className="use-comp">
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <p>Job : Software Developer</p>

            </div>
        )
    }
}
export default User