import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Product } from '../../types';
import HomePage from '../HomePage';
import { render, screen } from '@testing-library/react';


const productsMock:Product[] = [
    {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: "10",
        stockQuantity: 5,
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: "20",
        stockQuantity: 10,
    },
];


const deleteMock = vi.fn();
const navigateMock = vi.fn();


vi.mock("../../state/useProducts", () => ({
    useProducts: () => ({
        products: productsMock,
        deleteProduct: deleteMock,
        isLoading: false,
    }),
}));


vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );

    return {
        ...actual,
        useNavigate: () => navigateMock,
        useParams: () => ({ id: "1" }),
    };
});



describe("HomeProductPage", () => {
    let user: ReturnType<typeof userEvent.setup>;

    beforeEach(() => {
        user = userEvent.setup();
        render(<HomePage />);
    });

    it("should press button edit", async () => {
        const editButton = screen.getByRole("button", {
            name: "edit-product-1",
        });

        await user.click(editButton);

        expect(navigateMock).toHaveBeenCalledWith("/products/edit/1");
    })

    it("should press button create new product", async () => {
        const addButton = screen.getByRole("button", {
            name: "add-new-product-btn",
        });

        await user.click(addButton);

        expect(navigateMock).toHaveBeenCalledWith("/products/create");
    })

    it("should press clear button comfirm delete product", async () => {
        /* comfirm-dialog-button */
        /* delete-product-${prod.id} */
        const deleteButton = screen.getByRole("button", {
            name: "delete-product-2"
        });
        await user.click(deleteButton);

        
        const confirmButton = screen.getByRole("button", {
            name: "comfirm-dialog-button"
        });
        await user.click(confirmButton);

        expect(deleteMock).toHaveBeenCalledWith(2);
    })
});
    




