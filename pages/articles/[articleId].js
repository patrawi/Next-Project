import { useRouter } from "next/router";
import { articles } from "../../mock/articles";
import Layout from "../../components/Layout";
const Article = () => {
    const router = useRouter();
    const articleId = router.query.articleId;
    const article = articles.find((a) => a.id === articleId)
    if(!article) {
        return (
            <Layout>
                <div>Not Found</div>
            </Layout>
        )
    }
    return (
        <Layout>
            <div>
                <h6>{article.id}</h6>
                <p>{article.title}</p>
                <p>{article.content}</p>
            </div>
        </Layout>
    )
}

export default Article;