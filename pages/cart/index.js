import Layout from "../../src/components/shared/layout";
import Cart from "../../src/components/cart/cartLayout";

function cartPage() {
    return (
        <Layout title={"My Cart"}>
            <Cart></Cart>
        </Layout>
    )
}

export default cartPage;