import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from "@testing-library/user-event";
import AddProductPage from '../AddProductPage';

const addProductMock = vi.fn();
const navigateMock = vi.fn();

vi.mock("../../state/useProducts", () => ({
    useProducts: () => ({
        addProduct: addProductMock,
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
    };
});



describe('AddProductPage', () => {
    it('should submit the form with correct data when all fields are filled', async () => {
        const user = userEvent.setup();

        render(<AddProductPage />);

        await user.type(screen.getByLabelText(/product name/i), "Test Product");
        await user.type(screen.getByLabelText(/description/i), "Test Description");
        await user.type(screen.getByLabelText(/unit price/i), "10");
        await user.type(screen.getByLabelText(/stock quantity/i), "5");

        await user.click(screen.getByRole("button", { name: /save product/i }));

        expect(addProductMock).toHaveBeenCalledWith({
            name: "Test Product",
            description: "Test Description",
            price: "10",
            stockQuantity: 5,
        });

        expect(navigateMock).toHaveBeenCalledWith("/products/home");
    });
});

