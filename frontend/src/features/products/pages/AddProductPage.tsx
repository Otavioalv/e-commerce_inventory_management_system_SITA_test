import { LuChevronLeft } from "react-icons/lu";

import { Button } from "../../../shared/components/ui/Button";
import { Container } from "../../../shared/components/ui/Container"


export default function AddProductPage() {
    return (
        <Container>
            <div>
                <Button 
                    className="text-gray-500 text-sm px-0 flex items-center gap-1"
                    variant={"none"}
                >
                    <LuChevronLeft/> Back to Inventory
                </Button>
            </div>

            <h1
                className="font-bold text-sm"
            >
                Create a New Product
            </h1>
            
            <div className="border border-gray-300 rounded-sm p-4">
                <form 
                    action=""
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2 flex-1">
                        <label 
                            htmlFor=""
                            className="font-bold text-sm"
                        >
                            Product Name *
                        </label>
                        <input 
                            type="text" 
                            placeholder="Industrial Grade Compressor"
                            className="border border-gray-300 p-2 rounded-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label 
                            htmlFor=""
                            className="font-bold text-sm"
                        >
                            Description *
                        </label>
                        <textarea 
                            name="" 
                            id="" 
                            className="border border-gray-300 p-2 rounded-sm min-h-60"
                            placeholder="High-performance air compressor suitable for heavy-duty industrial applications. Features a 50L tank and 2.5HP motor with automatic thermal overload protection."
                        >

                        </textarea>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-6">
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                            <label 
                                htmlFor=""
                                className="font-bold text-sm"
                            >
                                Unit Price {"(USD)"} *
                            </label>
                            {/* real number */}
                            <input 
                                type="number" 
                                placeholder="0.00"
                                className="border border-gray-300 p-2 rounded-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                            <label 
                                htmlFor=""
                                className="font-bold text-sm"
                            >
                                Stock Quantity *
                            </label>
                            {/* Int number */}
                            <input 
                                type="number" 
                                placeholder="12"
                                className="border border-gray-300 p-2 rounded-sm"
                            />
                        </div>
                    </div>

                    <Button>
                        Save Product
                    </Button>
                </form>
            </div>
        </Container>
    );
}

