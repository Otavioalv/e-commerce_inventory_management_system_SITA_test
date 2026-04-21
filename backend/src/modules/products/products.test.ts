import request from "supertest";
import app from "@/app";

import type { Product } from "@/shared/types/index"


describe("Products API testing", () => {

    describe("GET /products (status) - 200", () => {
        it("should return all products", async () => {
            const res = await request(app).get("/api/products");

            
            expect(res.status).toBe(200);
            expect(res.body).toMatchObject({
                message: "Products listed successfully",
                data: expect.any(Array)
            });
        });
    });

    describe("POST /products (status) - 201", () => {
        it("should create new product", async () => {
            const product: Omit<Product, "id"> = {
                description: "Product Description TESTING",
                name: "Product tungsahur TESTING",
                price: "49.67",
                stockQuantity: 40,
            }

            const res = await request(app).post("/api/products").send(product);

            expect(res.status).toBe(201);
            expect(res.body.data).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(String),
                stockQuantity: expect.any(Number),
            });

        });
    });


    describe("PUT /products/:id (status) - 200", () => {
        it("should update a product", async () => {
            const oldProduct: Omit<Product, "id"> = {
                name: "Old name",
                description: "Old description",
                price: "100.00",
                stockQuantity: 10,
            };

            // creating a new product
            const createRes = await request(app)
            .post("/api/products")
            .send(oldProduct);

            // expected
            expect(createRes.status).toBe(201);
            expect(createRes.body.data).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(String),
                description: expect.any(String),
                stockQuantity: expect.any(Number)
            });

            // update this product
            const productId = createRes.body.data.id;
            const newProduct: Omit<Product, "id"> = {
                name: "New name",
                description: "New description",
                price: "670.67",
                stockQuantity: 67,
            };

            const updateRes = await request(app)
                .put(`/api/products/${productId}`)
                .send(newProduct);
            
            
            expect(updateRes.status).toBe(200);

            expect(updateRes.body.data).toEqual(
                expect.objectContaining({
                    id: productId,
                    ...newProduct
                })
            );
        });
    });

    describe("DELETE /products/:id (status) - 200", () => {
        it("should delete product", async () => {
            // create a product
            const product: Omit<Product, "id"> = {
                description: "Product Description TESTING DELETE",
                name: "Product sigma TESTING DELETE",
                price: "67.67",
                stockQuantity: 67,
            }

            const createRes = await request(app).post("/api/products").send(product);
            expect(createRes.status).toBe(201);
            expect(createRes.body.data).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(String),
                description: product.description,
                stockQuantity: expect.any(Number)
            });

            // Delete this same product
            const productId = createRes.body.data.id;
            const deleteRes = await request(app).delete(`/api/products/${productId}`);

            expect(deleteRes.status).toBe(200);

            expect(deleteRes.body.data).toEqual(
                expect.objectContaining({
                    id: productId,
                    ...product
                })
            );
        });
    });
});

