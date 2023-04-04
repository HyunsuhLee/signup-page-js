// 1번째 3자리 입력 => 둘째칸으로 이동
const phoneFocus1 = () => {

    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

// 2번째 4자리 입력 => 셋째칸으로 이동
const phoneFocus2 = () => {

    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

// 3번째 4자리 입력 => "인증번호 전송" 버튼 활성화
const tokenButton3 = () => {
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    
    if( (phone1.length === 3) && (phone2.length === 4) && (phone3.length === 4) ) {
        document.getElementById("token__button").disabled = false
        document.getElementById("token__button").style =
        "color: #0068ff; cursor: pointer; border: 1px solid #d2d2d2"
    } else {
        document.getElementById("token__button").disabled = true
        document.getElementById("token__button").style = ""
    }
}

// 인증번호전송 버튼 => 토큰정보, 타이머 생성, 인증확인 버튼 활성화

const tokenButton = () => {  // "인증번호 전송" 버튼 누르면
    document.getElementById("token__button").disabled = true
    document.getElementById("token__button").style = "" // "인증번호 전송" 버튼 비활성화
    document.getElementById("check__button").disabled = false
    document.getElementById("check__button").style =
    "background-color: #0068ff; color: #ffffff; cursor: pointer; border: none;" // "인증확인" 버튼 활성화
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("token").innerText = token
    document.getElementById("token").style.color = "#0068ff" // 인증번호 랜덤 할당

    let time = 180 // 3분
    const timer = setInterval(function(){
            if(time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                document.getElementById("timer").style.color = "#0068ff"
                time = time - 1
                if(checked === true) {
                    document.getElementById("check__button").innerText = "인증완료"
                    document.getElementById("check__button").disabled = true
                    document.getElementById("check__button").style = ""
                    document.getElementById("token__button").disabled = true
                    document.getElementById("token__button").style = ""
                
                    document.getElementById("token").innerText = "000000"
                    document.getElementById("token").style.color = "#d2d2d2" // 인증번호 초기화
                    document.getElementById("timer").innerText = "3:00"
                    document.getElementById("timer").style.color = "#d2d2d2" // 시간 초기화
                
                    document.getElementById("signup").disabled = false
                    document.getElementById("signup").style = "border: 1px solid #0068ff; color: #0068ff; cursor: pointer;"
                    clearInterval(timer)
                }
            } else { // 3분 지나면
                document.getElementById("check__button").disabled = true
                document.getElementById("check__button").style = "" // "인증확인" 버튼 비활성화
                document.getElementById("token__button").disabled = false
                document.getElementById("token__button").style =
                "color: #0068ff; cursor: pointer; border: 1px solid #d2d2d2" // "인증번호 전송" 버튼 활성화
                document.getElementById("token").innerText = "000000"
                document.getElementById("token").style.color = "#d2d2d2" // 인증번호 초기화
                document.getElementById("timer").innerText = "3:00"
                document.getElementById("timer").style.color = "#d2d2d2" // 시간 초기화
                clearInterval(timer) // 타이머 초기화
            }
        }, 1000)
}

let checked = false // 인증완료 여부
const checkOK = () => { // 인증확인 버튼을 눌렀을 때
    alert("인증이 완료되었습니다.")
    checked = true
}

const signupButton = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let location = document.getElementById("location").value
    let gender = document.querySelector('input[name="gender"]').checked;
    isValid = true

    if(email.includes("@") === false) {
        document.getElementById("erroremail").innerText = "이메일이 올바르지 않습니다."
        document.getElementById("erroremail").style = "color: red; font-size: 5px;"
        isValid = false
    } else {
        document.getElementById("erroremail").innerText = ""
    }
    if(name === "") {
        document.getElementById("errorname").innerText = "이름이 올바르지 않습니다."
        document.getElementById("errorname").style = "color: red; font-size: 5px;"
        isValid = false
    } else {
        document.getElementById("errorname").innerText = ""
    }
    if(pw1 === "") {
        document.getElementById("errorpw1").innerText = "비밀번호를 입력해 주세요."
        document.getElementById("errorpw1").style = "color: red; font-size: 5px;"
        isValid = false
    } else {
        document.getElementById("errorpw1").innerText = ""
    }
    if (pw2 === "") {
        document.getElementById("errorpw2").innerText = "비밀번호를 다시 입력해 주세요."
        document.getElementById("errorpw2").style = "color: red; font-size: 5px;"
        isValid = false
    } else {
        document.getElementById("errorpw2").innerText = ""
    }

    if(pw1 !== pw2) {
        document.getElementById("errorpw1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("errorpw1").style = "color: red; font-size: 5px;"
        document.getElementById("errorpw2").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("errorpw2").style = "color: red; font-size: 5px;"
        isValid = false
    }

    if(location !== "서울" && location !== "경기" && location !== "인천") {
        document.getElementById("errorlocation").innerText = "지역을 선택해 주세요."
        document.getElementById("errorlocation").style = "color: red; font-size: 5px;"
        isValid = false
    } else {
        document.getElementById("errorlocation").innerText = ""
    }
    if(gender === false) {
        document.getElementById("errorgender").innerText = "성별을 선택해 주세요."
        document.getElementById("errorgender").style = "color: red; font-size: 5px;"
        isValid = false
    } else {
        document.getElementById("errorgender").innerText = ""
    }
    if(isValid === true) {
        alert("회원가입을 축하합니다!")
    }
}