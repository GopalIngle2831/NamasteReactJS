 import User from "./User";
 import UserClass from "./UserClass"; //Class based component
 
 const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namasate react web series</h2>
            <UserClass name={"Gopal through Class Component"} location={"Buldhana"}/> {/** Passing props in class based component */}
        </div>
    )
 }

 export default About;