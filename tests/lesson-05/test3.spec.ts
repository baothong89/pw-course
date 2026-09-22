import {test} from "@playwright/test";

test("Bài học 3: Todo page", async({page}) => {
    await test.step("Step1: access Home page ", async() => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step2: Access Todo page ", async() => {
        await page.getByRole("link", {name: "Bài học 3: Todo page"}).click();
    });

    await test.step("Step3: Create 10 todo tasks", async() => {
        for(let i=1; i<=10; i++){
            await page.getByPlaceholder("Enter a new task").fill(`Todo ${i}`);
            await page.getByRole("button", {name: "Add Task"}).click();
        };
    });

    await test.step("Step4: remove todo task ", async() => {
        page.on("dialog", dialog => dialog.accept());
        for(let i=10; i>=1; i--){
            if(i % 2 !=0){
                let deleteTarget = await page.locator(`button[onclick="deleteTask(${i-1})"]`).click();                   
            };
        };
    });
});