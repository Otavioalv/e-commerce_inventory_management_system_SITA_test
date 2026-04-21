import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditProductPage from "../EditProductPage";
import { describe, it, expect, vi } from 'vitest';


const fetchByIdMock = vi.fn();
const updateProductMock = vi.fn();
const navigateMock = vi.fn();

vi.mock("../../state/useProducts", () => ({
    useProducts: () => ({
        fetchById: fetchByIdMock,
        updateProduct: updateProductMock,
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



describe("EditProductPage", () => {
    it("should load product and submit update", async () => {
        const user = userEvent.setup();

        fetchByIdMock.mockResolvedValue([
            {
                id: 1,
                name: "Old Product",
                description: "Old Description",
                price: "10",
                stockQuantity: 5,
            },
        ]);

        render(<EditProductPage />);


        const nameInput = await screen.findByLabelText(/product name/i);
        const descriptionInput = await screen.findByLabelText(/description/i);
        const priceInput = await screen.findByLabelText(/unit price/i);
        const stockQuantityInput = await screen.findByLabelText(/stock quantity/i);
        

        expect(nameInput).toHaveValue("Old Product");
        expect(descriptionInput).toHaveValue("Old Description");
        expect(priceInput).toHaveValue("10");
        expect(stockQuantityInput).toHaveValue(5);

        // typing new values to input form
        await user.clear(nameInput);
        await user.type(nameInput, "Updated Product");
        
        await user.clear(descriptionInput);
        await user.type(descriptionInput, "Update Description");

        await user.clear(priceInput);
        await user.type(priceInput, "67");
        
        await user.clear(stockQuantityInput);
        await user.type(stockQuantityInput, "67");

        // submit form
        await user.click(
            screen.getByRole("button", { name: /save product/i })
        );


        await waitFor(() => {
            expect(updateProductMock).toHaveBeenCalledWith(1, {
                name: "Updated Product",
                description: "Update Description",
                price: "67",
                stockQuantity: 67,
            });
        });

        expect(navigateMock).toHaveBeenCalledWith("/products/home");
    });
});
