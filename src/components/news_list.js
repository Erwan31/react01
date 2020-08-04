import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = ({news}) => {

    console.log(news);

    return(
        <>
        {news.map( (item) =>
            <NewsListItem item={item} key={item.id}/>
            )
        }
        </>
    )

}

export default NewsList;