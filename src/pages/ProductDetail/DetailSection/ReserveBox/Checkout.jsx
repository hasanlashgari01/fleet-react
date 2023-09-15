const Checkout = () => {
    return (
        <ul className="space-y-1 font-PoppinsRegular text-sm">
            <li className="flex justify-between items-center px-3 py-2">
                <span className="text-neutral-4">$119 x 7 nights</span>
                <span className="font-PoppinsMedium text-neutral-2 dark:text-neutral-8">$833</span>
            </li>
            <li className="flex justify-between items-center px-3 py-2">
                <span className="text-neutral-4">10% campaign discount</span>
                <span className="font-PoppinsMedium text-neutral-2 dark:text-neutral-8">-$125</span>
            </li>
            <li className="flex justify-between items-center px-3 py-2">
                <span className="text-neutral-4">Service fee</span>
                <span className="font-PoppinsMedium text-neutral-2 dark:text-neutral-8">$103</span>
            </li>
            <li className="flex justify-between items-center px-3 py-2 bg-neutral-7 dark:bg-neutral-3 text-neutral-2 rounded-lg">
                <span className="text-neutral-4 dark:text-neutral-8">Total</span>
                <span className="font-PoppinsMedium text-neutral-2 dark:text-neutral-8">$833</span>
            </li>
        </ul>
    );
};

export default Checkout;
