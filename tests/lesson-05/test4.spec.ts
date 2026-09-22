import {test} from "@playwright/test";

 const notes = [
            {title: "click", content: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"},
            {title: "fill", content: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"},
            {title: "type", content: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"},
            {title: "hover", content: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"},
            {title: "check", content: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"},
            {title: "uncheck", content: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"},
            {title: "selectOption", content: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"},
            {title: "press", content: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"},
            {title: "dbclick", content: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"},
            {title: "dragAndDrop", content: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"}
        ];

test("Bài học 4: Personal notes",async({page}) => {
    await test.step("Step1: Access Homepage ", async() => {
        await page.goto("https://material.playwrightvn.com/");
    });
            
    await test.step("Step2: Access Personal notes page ", async() => {
        await page.getByRole("link",{name: "Bài học 4: Personal notes"}).click();
    });

    await test.step("Step3:Create the note ", async() => {
        for(let i = 0; i <notes.length;i++){
        await page.getByPlaceholder("Enter note title").fill(notes[i].title);
        await page.getByPlaceholder("Enter note content").fill(notes[i].content);
        await page.getByRole("button", {name: "Add Note"}).click();
        };  
    });

    await test.step("Step4: Filter by “một hoặc nhiều” ", async() => {
        await page.getByPlaceholder("Search notes...").fill("một hoặc nhiều");  
    });
});