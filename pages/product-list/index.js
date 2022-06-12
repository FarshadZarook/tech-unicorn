import Layout from "../../src/components/shared/layout";
import ProductList from "../../src/components/listing/productListLayout";

function productListPage() {
    return (
        <Layout title={"Product List Page"}>
            <ProductList></ProductList>
        </Layout>
    )
}

export default productListPage;