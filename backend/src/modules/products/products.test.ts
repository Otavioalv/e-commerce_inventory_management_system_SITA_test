import app from "@/app";
import request from "supertest";
import {ApiResponse, Product} from "@/shared/types/index"


describe("Products API testing", () => {

    describe("GET /products", () => {
        it("should return all products", async () => {
            const res = await request(app).get("/api/products");

            
            expect(res.status).toBe(200);
            expect(res.body).toMatchObject({
                message: "Products listed successfully",
                data: expect.any(Array) 
            });
        });
    });

   

});


