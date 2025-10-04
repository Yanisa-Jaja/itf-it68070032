// ตัวแปร count ต้องประกาศนอกฟังก์ชันเพื่อให้ค่าคงอยู่
let count = 0;
//const ___ = document.getElementById('___').value; .valueคือเอาที่ที่อัพเดตแล้ว

function change() {
    const balance = document.getElementById('balance').value;
    const cash = document.getElementById('cash').value;

    count = count + 1;
    const outputMessage = (count + ", Current account balance: " +balance +", Current cash balance: "+ cash);

    // 3. ดึง Element Output และค่าเดิม
    const outputElement = document.getElementById('output');
    const existingOutput = outputElement.value;
    // และคั่นด้วยการขึ้นบรรทัดใหม่ (\n)
    outputElement.value = outputMessage + "\n" + existingOutput;
}

function proceed() {
    const cash = document.getElementById('cash');
    const balance = document.getElementById('balance');
    const operation = document.getElementById('operation');
    const se_operation = document.getElementById('se_operation');

    // 6. เพิ่มค่า count และ PREPEND ผลลัพธ์
    count = count + 1;
    const outputElement = document.getElementById('output');
    
    // 4. ตรรกะการฝาก (Deposit) หรือ ถอน (Withdraw) และ ได้ไม่ได้
    if (se_operation.value === "Deposit") {
        if  (Number(cash.value) < Number(operation.value)) {
                const outputMessage = (count + ", Couldn't deposit entered balance. (Insufficient cash balance)");
                const existingOutput = outputElement.value;
                outputElement.value = outputMessage + "\n" + existingOutput;
            } else {
                // ใช้ Element Object เพื่อกำหนดค่าใหม่
                balance.value = Number(balance.value) + Number(operation.value);
                cash.value = Number(cash.value) - Number(operation.value);
            
                const outputMessage = (count + ", Current account balance: " +balance.value +", Current cash balance: "+ cash.value);
                const existingOutput = outputElement.value;
                outputElement.value = outputMessage + "\n" + existingOutput;
        }

    } else if (se_operation.value === "Withdraw") {
        if (Number(balance.value) < Number(operation.value) ){
            const outputMessage = (count + ", Couldn't withdraw entered balance. (Insufficient account balance)");
            const existingOutput = outputElement.value;
            outputElement.value = outputMessage + "\n" + existingOutput;
        } else {
            // ใช้ Element Object เพื่อกำหนดค่าใหม่
            balance.value = Number(balance.value) - Number(operation.value);
            cash.value = Number(cash.value) + Number(operation.value);

            const outputMessage = (count + ", Current account balance: " +balance.value +", Current cash balance: "+ cash.value);
            const existingOutput = outputElement.value;
            outputElement.value = outputMessage + "\n" + existingOutput;
        }
    }
}