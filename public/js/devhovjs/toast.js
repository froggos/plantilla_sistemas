const Toast = (function() {
    let option = {
        animation: true,
        delay: 2000,
    }
    
    let toastElList = [].slice.call(document.querySelectorAll(".toast"));
    let toastList = toastElList.map((toastEl) => {
        return new bootstrap.Toast(toastEl, option);
    });
    
    return {
        ToastList: toastList
    }
})();

const toastTest = document.getElementById("doToastSuccessBottom");
toastTest.addEventListener("click", () => {
    Toast.ToastList[0].show();
});

const toastTop = document.getElementById("doToastSuccessTop");
toastTop.addEventListener("click", () => {
    Toast.ToastList[1].show();
});