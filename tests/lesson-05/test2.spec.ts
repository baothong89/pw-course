import {test} from "@playwright/test";

test("Bài học 2: Product page", async({page}) => {
    await test.step("Step1:access https://material.playwrightvn.com/", async() => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step2: access Product page", async() => {
        await page.getByRole("link", {name: "Bài học 2: Product page"}).click();
    });

    await test.step("Step3: add 2 items of Product 1 to cart", async() => {
        await page.locator("//button[@data-product-id='1']").click();
        await page.getByRole("button",{name: "Add to Cart"}).first().click();
        
    });

    await test.step("Step3: add 3 items of Product 2 to cart", async() => {
        await page.getByRole("button",{name: "Add to cart"}).nth(1).dblclick();
        await page.getByRole("button",{name: "Add to cart"}).nth(1).click();

    });

    await test.step("Step4: add 1 items of Product 3 to cart", async() => {
        await page.getByRole("button",{name: "Add to cart"}).last().click();
    });
})