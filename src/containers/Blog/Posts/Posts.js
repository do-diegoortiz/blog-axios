import React, {Component} from 'react'

import Post from '../../../components/Post/Post'
import axios from 'axios'
import './Posts.css'

class Posts extends Component {æ
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Diego'
                }
            })
            this.setState({posts: updatedPosts})
        })
        .catch ( error => {
            console.log(error)
        })
  }

  postSelectedHandler = id => {
    this.setState({selectedPostId: id})
  }

  render () {
    const posts = this.state.posts.map(post=>{
      return <Post 
                  key={post.id} 
                  title={post.title} 
                  author={post.author}
                  clicked={ () => this.postSelectedHandler(post.id)}/>
    })

    return(
      <section className="Posts">
          {posts}
      </section>
    )
  }
}

export default Posts