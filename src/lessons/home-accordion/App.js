import React from 'react';
import "./App.css";

const articles = [
    {id:111, title: "Title111", description:"Description111"},
    {id:222, title: "Title222", description:"Description222"},
    {id:333, title: "Title333", description:"Description333"},
    {id:444, title: "Title444", description:"Description444"},
    {id:555, title: "Title555", description:"Description555"},
]

const Article = ({title, description, visibilityClass, id, func}) => {
    return (
        <section>
            <h2 onClick={()=>func(id)}>{title}</h2>
            <p className={visibilityClass}>
                {description}
            </p>
        </section>
    )
}


class ArticleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeId: null
        }
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(id){
        this.setState(prevState => ({
            activeId: (prevState.activeId != id) ? id : null
        }));
    }

      render () {
        const {activeId} = this.state;
        return (
              <ul>
                  {
                      articles.map((article)=>
                          <li key={article.id}>
                              <Article
                                  title={article.title}
                                  description={article.description}
                                  visibilityClass={(activeId != article.id) ? "noactive" : "active"}
                                  id={article.id}
                                  func = {this.handleClick}
                              />
                          </li>
                      )
                  }
              </ul>
          )
      }

}
export default ArticleList
