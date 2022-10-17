import Link from "next/link";
import Layout from "../../components/Layout";
import { articles } from "../../mock/articles";


const Articles = () => {
    return (
        <Layout>
            {articles.map((a) => {
                return (
                    <ul>
                        <li>
                            <Link href = {`/articles/${a.id}`}>
                                <a>{a.title}</a>
                            </Link>
                   
                        </li>
                    </ul>
                )
            })}
        </Layout>
    )
}

export default Articles;