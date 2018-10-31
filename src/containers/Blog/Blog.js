import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'
import './Blog.css';
import { Route, NavLink } from 'react-router-dom'

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash:"#submit",
                                search:"?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
                {/* <section>
                    <FullPost 
                        id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;