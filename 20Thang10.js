function myDialog(){
    let dialog = document.getElementById('myDialog');
    let openDialogBtn = document.getElementById('moThiep');
    let closeDialogBtn = document.getElementById('dongThiep');

    openDialogBtn.addEventListener('click', () => {
       dialog.showModal(); // Hiển thị hộp thoại dưới dạng modal
    });

    closeDialogBtn.addEventListener('click', () => {
        dialog.close(); // Đóng hộp thoại
    });
}
 window.onload = myDialog;
