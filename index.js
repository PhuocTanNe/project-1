function myDialog(){
    let dialog = document.getElementById('myDialog');
    let openDialogBtn = document.getElementById('moYKien');
    let closeDialogBtn = document.getElementById('dongYKien');
    let result1 = document.getElementById('result1');
    let userNameInput = document.getElementById('userName');
    let result2 = document.getElementById('result2');
    let OpinionInput = document.getElementById('opinion');

    openDialogBtn.addEventListener('click', () => {
       dialog.showModal(); // Hiển thị hộp thoại dưới dạng modal
    });

    closeDialogBtn.addEventListener('click', () => {
        let userName = userNameInput.value; // Lấy giá trị người dùng nhập
        let opinion = OpinionInput.value;
        if(userName){
            result1.textContent = `Cảm ơn bạn, ${userName},`;
            if(opinion){
                result2.textContent = 'Đã đóng góp ý kiến!';
            } else{
                result2.textContent = `Bạn chưa ý kiến!`;
            }
        } else{
            result1.textContent = `Bạn chưa nhập tên!`;
        }
        dialog.close(); // Đóng hộp thoại
    });
}
 window.onload = myDialog;