import React from 'react';
// useEffect를 사용하여 컴포넌트가 처음 레너링되는 시점에 api를 요청한다. 이것은 뒷정리 함수이다. 
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }`;

    // const sampleArticle = {
    //     title: '제목',
    //     description: '내용',
    //     url: 'https://google.com',
    //     urlToImage: 'https://via.placeholder.com/160',
    // };

    const NewsList = ({category}) => {
        // const [articles, setArticles] = useState(null);
        // const [loading, setLoading] = useState(false);

        // useEffect(() => {
        //     // async를 사용하는 함수 따로 선언
        //     const fetchData = async () => {
        //         setLoading(true);
        //         try {
        //             const query = category === 'all' ? '' : `&category=${category}`;
        //             const response = await axios.get(
        //                 `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=addcdab2a76a4d5eb229e948752cdf20`,
        //             );
        //             setArticles(response.data.articles);
        //         } catch (e) {
        //             console.log(e);
        //         }
        //         setLoading(false);
        //     };
        //     fetchData();
        // }, [category]);
        const [loading, response, error] = usePromise(() => {
            const query = category === 'all' ? '' : `&category=${category}`;
            return axios.get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=addcdab2a76a4d5eb229e948752cdf20`,
            );
        }, [category]);
        // 대기 중일 때
        if (loading) {
            return <NewsListBlock>대기 중...</NewsListBlock>;
        }
        // 아직 articles 값이 설정되지 않았을 때
        if (!loading) {
            return null;
        }
        // 에러가 발생했을 때
        if (error) {
            return <NewsListBlock>에러 발생!</NewsListBlock>;
        }
        // articles 값이 유효할 때 
        const { articles } = response.data;
        return (
            <NewsListBlock>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))}
            </NewsListBlock>
        );
    };

    export default NewsList;