import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
                <Link href={'/'}>ShopNexa</Link>
            </div>
            <div>
                <ul className="flex items-center gap-5">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Checkout</li>
                </ul>
            </div>
            <div>
                cart
            </div>

        </div>
    );
};

export default Navbar;