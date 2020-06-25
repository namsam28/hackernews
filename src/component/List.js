import React from "react";

class NewsList extends React.Component{
    
    
    componentDidMount(){
        //console.log(this.props.value)
    }

    render(){
        const {id,title,user,time_ago,url} = this.props.value;
        //,points,time,type
        return (
            <li data-id={id} target="_blank">
                <a href={url}>
                    <strong className="ti">{title}</strong>
                </a>
                <div className="news_info">
                    <span className="user">{user}</span>
                    <span className="upload_time">{time_ago}</span>
                </div>
            </li>
        )
    }
}


export default NewsList;
