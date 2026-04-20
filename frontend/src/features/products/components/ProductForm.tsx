import { FormTextArea } from "../../../shared/components/forms/FormTextArea";
import { FormField } from "../../../shared/components/forms/FormField";
import { FormInput } from "../../../shared/components/forms/FormInput";
import { Button } from "../../../shared/components/ui/Button";
import { Form } from "../../../shared/components/forms/Form";
import { productSchema } from "../schemas/products.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuChevronLeft } from "react-icons/lu";
import { useForm } from "react-hook-form";


import type { ProductFormData } from "../schemas/products.schemas";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { useEffect } from "react";


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
                            placeholder="Industrial Grade Compressor"
                            error={error}
                            {...register}
                        />
                    )}
                </FormField>

                <FormField name="description">
                    {({ register, error }) => (
                        <FormTextArea
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
                                    label="Unit Price (USD) *" 
                                    type="number"
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

