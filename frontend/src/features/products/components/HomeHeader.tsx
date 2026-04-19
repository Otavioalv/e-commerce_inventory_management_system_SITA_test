

export const HomeHeader = () => {
    return (
        <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="">
                <h1 className="font-bold text-lg">
                    E-Commerce Inventory Management System
                </h1>
                <h2 className="text-sm">
                    Manage your product catalog
                </h2>
            </div>

            <button className="bg-gray-900 text-white py-3 px-5 rounded-md font-bold active:bg-gray-900/80 hover:bg-gray-900/90 transition-all cursor-pointer text-sm">
                + Add New Product
            </button>
        </div>
    );
}
