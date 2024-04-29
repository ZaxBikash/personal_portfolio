var a = 0;
function mouseOver() {
    const name = document.forms['suForm']['name'].value;
    const email = document.forms['suForm']['email'].value;
    const phone = document.forms['suForm']['phone'].value;
    const subject = document.forms['suForm']['subject'].value;
    const sms = document.forms['suForm']['sms'].value;

    const tick = document.querySelector('#check');
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((name == "" || !email.match(emailCheck) || phone == "" || subject == "" || sms == "" || tick.checked == false) && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }
    if ((name == "" || !email.match(emailCheck) || phone == "" || subject == "" || sms == "" || tick.checked == false) && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }
    if ((name == "" || !email.match(emailCheck) || phone == "" || subject == "" || sms == "" || tick.checked == false) && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    }
    else {
        document.getElementById('submit-btn').style.cursor = 'pointer';
        return false;
    };
};

function buttonMoveLeft() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(-145%)';
};

function buttonMoveRight() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(145%)';
};

function resetBtn() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};