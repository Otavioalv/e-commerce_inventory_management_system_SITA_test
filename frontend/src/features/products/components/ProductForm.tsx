import { FormTextArea } from "../../../shared/components/forms/FormTextArea";
import { FormField } from "../../../shared/components/forms/FormField";
import { FormInput } from "../../../shared/components/forms/FormInput";
import { Button } from "../../../shared/components/ui/Button";
import { Form } from "../../../shared/components/forms/Form";
import { productSchema } from "../schemas/products.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { LuChevronLeft } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


import type { ProductFormData } from "../schemas/products.schemas";
import type { Product } from "../types";


interface IProductFormProps {
    title: string,
    onSaveProduct: (data: ProductFormData) => void,
    isLoading: boolean,
    product?: Product,
}

export const ProductForm = ({
    title,
    isLoading,
    onSaveProduct,
    product,
}: IProductFormProps) => {
    const navigate = useNavigate();

    const methods = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: "",
            stockQuantity: "",
        }
    });

    const { reset } = methods;
    useEffect(() => {
        if(product) {
            reset({
                name: product.name,
                description: product.description,
                price: String(product.price),
                stockQuantity: String(product.stockQuantity),
            });
        }
    }, [product, reset]);
    
    
    return (
        <>
            <div>
                <Button 
                        className="text-gray-500 text-sm px-0 flex items-center gap-1"
                        variant={"none"}
                        onClick={() => navigate("/products/home")}
                    >
                        <LuChevronLeft/> Back to Inventory
                </Button>
            </div>
            
            <h1
                className="font-bold text-sm"
            >
                {title}
            </h1>
            

            <Form methods={methods} onSubmit={onSaveProduct}>
                <FormField
                    name="name"
                >
                    {({ register, error }) => (
                        <FormInput
                            label="Product Name *" 
                            id="name"
                            placeholder="Industrial Grade Compressor"
                            error={error}
                            {...register}
                        />
                    )}
                </FormField>

                <FormField name="description">
                    {({ register, error }) => (
                        <FormTextArea
                            id="description"
                            label="Description *" 
                            placeholder="High-performance air compressor..."
                            error={error}
                            {...register}
                        />
                    )}
                </FormField>

                <div className="flex flex-row gap-4 w-full">
                    <FormField name="price">
                        {({ register, error }) => (
                            <div className="flex-1 min-w-0">
                                <FormInput 
                                    id="unit_price"
                                    label="Unit Price (USD) *" 
                                    type="text"
                                    placeholder="0.00"
                                    error={error}
                                    {...register}
                                />
                            </div>
                        )}
                    </FormField>

                    <FormField name="stockQuantity">
                        {({ register, error }) => (
                            <div className="flex-1 min-w-0">
                                <FormInput 
                                    id="stock_quantity"
                                    label="Stock Quantity *" 
                                    type="number"
                                    placeholder="12"
                                    error={error}
                                    {...register}
                                />
                            </div>
                        )}
                    </FormField>
                </div>


                <Button 
                    type="submit" 
                    disabled={isLoading}
                    variant={isLoading ? "disabled" : "default"}
                >
                    Save Product
                </Button>
            </Form>
        </>
    );
}

