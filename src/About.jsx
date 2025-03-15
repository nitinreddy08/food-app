import Header from "./components/header"
import User from "./components/UserClass"

const About = ()=>{
    return(
        <div>
            <Header/>
            <h1>this is about page</h1>
            <User name={"Nitin"} age={22}/>
        </div>
    )
}

export default About