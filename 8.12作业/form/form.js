//定义
let nameLabel = document.getElementsByClassName('name-label')[0];
let passwordLabel = document.getElementsByClassName('password-label')[0];
let decideLabel = document.getElementsByClassName('decide-label')[0];

let inputName = document.getElementsByClassName('name')[0];
let inputPassword = document.getElementsByClassName('password')[0];
let inputDecide = document.getElementsByClassName('decide')[0];

let btn = document.getElementsByClassName('btn')[0]

let nameResult = false;
let passwordResult = false;
let decideResult = false;

//功能
function checkName() {
    let nameValue = inputName.value;
    if (nameValue || nameValue == '') {
        let patten = /[a-zA-Z_-]{4,16}/;
        let flagN = patten.test(nameValue);
        let warning = document.getElementsByClassName('waringN')[0];

        let warningN = document.createElement('div');
        let warningTxt = '用户名输入错误';


        if (flagN) {
            if (warning) {
                warning.remove();
            }
        } else {
            if (warning) {
                warning.remove();
            }
            warningN.className = 'waringN';
            warningN.innerHTML = warningTxt;
            nameLabel.append(warningN)
            warningN.innerHTML = warningTxt;
        }
        nameResult = flagN;
        btnON()
    }

}

function checkPassword() {
    let passwordValue = inputPassword.value;
    if (passwordValue || passwordValue == '') {
        let patten = /\w{8,15}/;
        let flagP = patten.test(passwordValue);
        let warning = document.getElementsByClassName('waringP')[0];

        let warningP = document.createElement('div');
        let warningTxt = '密码输入错误';

        if (flagP) {
            if (warning) {
                warning.remove();
            }
        } else {
            if (warning) {
                warning.remove();
            }
            warningP.className = 'waringP';
            warningP.innerHTML = warningTxt;
            passwordLabel.append(warningP)
            warningP.innerHTML = warningTxt;
        }
        passwordResult = flagP;
        btnON()
    }

}

function checkDecide() {
    let passwordValue = inputPassword.value;
    let passwordTwoValue = inputDecide.value;

    console.log(passwordValue);
    console.log(passwordTwoValue);
    if (passwordTwoValue || passwordTwoValue == '') {
        let flagD = false;
        if (passwordValue === passwordTwoValue) {
            flagD = true;
        }
        let warning = document.getElementsByClassName('waringD')[0];

        let warningD = document.createElement('div');
        let warningTxt = '密码输入不一致';

        if (flagD) {
            if (warning) {
                warning.remove();
            }
        } else {
            if (warning) {
                warning.remove();
            }
            warningD.className = 'waringD';
            warningD.innerHTML = warningTxt;
            decideLabel.append(warningD)
            warningD.innerHTML = warningTxt;
        }
        decideResult = flagD;
        btnON()
    }
}

function checkBtn() {
    let passwordValue = inputPassword.value;
    let passwordTwoValue = inputDecide.value;
    let nameValue = inputName.value;
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/regist',
        data: {
            name: nameValue,
            password: passwordValue,
            decide: passwordTwoValue
        },
        success: function (result) {
            alert('注册成功')
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function btnON() {
    btn.disabled = !(nameResult && passwordResult && decideResult);

}
//事件
inputName.onblur = checkName;
inputPassword.onblur = checkPassword;
inputDecide.onblur = checkDecide;
btn.onclick = checkBtn;