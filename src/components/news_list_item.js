import React from 'react';
import { css }  from 'glamor';


const NewsListItem = (props) => {

    let news_items = css({
        padding: '20px',
        boxSizing:'border-box',
        borderBottom:'1px solid grey'
    });

    return(
        <div {...news_items}>
           <h3>{props.item.title}</h3>
           <div>{props.item.feed}</div>
        </div>
    )
}

export default NewsListItem;