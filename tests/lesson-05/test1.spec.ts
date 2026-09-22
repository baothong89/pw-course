import { test } from '@playwright/test';

test('Test01:Bài học 1: Register Page', async({page}) => {
    await test.step("step1: Access material page", async() => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("step2:Access Register page", async() => {
        await page.getByRole("link", {name: "Bài học 1: Register Page (có đủ các element)"}).click();
    }); 
    
    await test.step("step3:Fill data for Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography", async() => {

        //fill user name data
        await page.getByRole("textbox",{name: "username"}).fill("Bthong");

        //fill email data
        await page.getByRole("textbox", {name: "email"}).fill("bthong@gmail.com");

        //check gender
        await page.getByRole("radio",{name:"Male", exact: true}).check();

        // check Hobibies 
        await page.getByRole("checkbox",{name: "cooking"}).check();
        await page.getByRole("checkbox",{name: "reading"}).check();

        //select  Interest 
        await page.getByRole("listbox",{name: "interests"}).selectOption(["music","art","technology","science","sports"]);

        //select country
        await page.getByRole("combobox",{name: "country"}).selectOption("Canada");

        //select date of birth
        await page.getByLabel("Date of Birth:").fill("2024-12-31");

        //select profile picture
        await page.getByLabel("profile").setInputFiles("tests/img/4.jpg")

        //fill bioraphy
        await page.getByRole("textbox",{name:"bio"}).fill("Hello word");
    }); 

    await test.step("step4: Click submit button", async() => {
        await page.getByRole("button",{name: "Register"}).click();
    });

});

