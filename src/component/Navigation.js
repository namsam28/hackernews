import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">HackerNews</Link>
            </h1>

            <nav>
                <ul>
                    <li>
                        <Link to={{
                            pathname:"/news",
                            state:{
                                apiQuery:"news"
                            }
                        }}>news</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname:"/past",
                            state:{
                                apiQuery:"past"
                            }
                        }}>past</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname:"/comment",
                            state:{
                                apiQuery:"comment"
                            }
                        }}>comment</Link>
                    </li>
                    <li>
                        <Link to="./ask">ask</Link>
                    </li>
                    <li>
                        <Link to="./show">show</Link>
                    </li>
                    <li>
                        <Link to="./jobs">jobs</Link>
                    </li>
                    <li>
                        <Link to="./submit">submit</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;