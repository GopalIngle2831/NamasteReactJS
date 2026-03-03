import React from "react"; 

class UserClass extends React.Component{ 
    constructor(props){

        super(props)  

        this.state = {
            count: 0,
            Myname: "Dummy",
            username: "xyx",
            url: "abc",
            avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabOgeMNrSqYJ4c2-kMg0I_QreIqbVVfgvWQ&s"
        }

        console.log("UserClass Constructor Called");
        
    }

    async componentDidMount(){ 
        console.log("UserClass componentDidMount Called");
        const data = await fetch("https://api.github.com/users/GopalIngle2831") 
        const json = await data.json();
        console.log(json);

        this.setState({
            Myname: json.name,
            username: json.login,
            url: json.html_url,
            avatar_url: "https://avatars.githubusercontent.com/u/181389555?v=4"
        }) 
    }


    componentDidUpdate(){
        console.log("componentDidUpdate called"); 
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }
    
    render() {

        console.log("UserClass Render Called");
        

        const {name, location} = this.props
        const {count, Myname, url, username, avatar_url} = this.state

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click me</button>
                <div><img src={avatar_url}></img></div>
                <h2>Name: {Myname}</h2>
                <h3>Username: {username}</h3>
                <h3>URL: {url}</h3>
            </div>
        )
    }
}

export default UserClass;
