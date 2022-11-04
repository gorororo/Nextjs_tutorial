import Image from "next/image";
function inCanvas(event){
    const newCanvas = document.createElement("canvas");
    newCanvas.width = document.documentElement.clientWidth;
    newCanvas.height = document.documentElement.clientHeight;
    newCanvas.setAttribute("id", "mycanvas");
    newCanvas.style.position = "fixed";
    newCanvas.style.top = "0";
    newCanvas.style.left = "0";
    newCanvas.style.zIndex = "10";

    const exitBtn = document.createElement("button");
    exitBtn.innerText = "닫기";
    exitBtn.style.position = "fixed";
    exitBtn.style.bottom = "30px";
    exitBtn.style.right = "30px";
    exitBtn.style.zIndex = "10";
    exitBtn.style.background = '#fff';
    exitBtn.style.color = "#000";
    exitBtn.style.borderRadius = '10%';
    exitBtn.style.fontFamily = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

    const helloMyPage = document.createElement("h1");
    helloMyPage.innerText = "Hello, My Page 💞";
    helloMyPage.style.position = "fixed";
    helloMyPage.style.top = "50%";
    helloMyPage.style.left = "50%";
    helloMyPage.style.transform = "translate(-50%, -50%)";
    helloMyPage.style.transition = "0.8s linear";
    helloMyPage.style.zIndex = "10";
    helloMyPage.style.fontSize = "3.5rem";
    helloMyPage.style.borderRadius = '10%';

    
    document.body.appendChild(newCanvas);
    document.body.appendChild(exitBtn);
    document.body.appendChild(helloMyPage);
    exitBtn.onclick = ()=>{
        document.body.removeChild(newCanvas);
        document.body.removeChild(exitBtn);
        document.body.removeChild(helloMyPage);
    }

    if(document.querySelector('canvas')){
        setTimeout(()=>{
            helloMyPage.style.transform = "translateY(-2000px)";
        },2000)
        setTimeout(()=>{
            helloMyPage.innerText = "반갑습니다!"
            helloMyPage.style.transform = "translateY(0px)";
        },2500)
    }

    const NBALL = 200; // 공의 개수
    const R = 5; // 공의 반지름
    const TIME_INTERVAL = 33; // 애니메이션 시간 간격(ms 단위);
    const BACK_ALPHA = 0.3; // 배경의 Alpha 값
    // canvas 의 랜더링 컨텍스트 가져오기
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    // 벽을 표현하는 객체
    const wall = {
        left: 0,
        right: canvas.width,
        top: 0,
        bottom: canvas.height,
    };

    // 애니메이션 실행 : TIME_INTERVAL(ms)마다 drawFrame을 실행
    setInterval(drawFrame, TIME_INTERVAL);
    // 애니메이션 의 프레임 그리기
    function drawFrame() {
        // 배경을 검은색으로 칠한다
        ctx.fillStyle = `rgba(0,0,0,${BACK_ALPHA})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 공의 위치를 갱신하여 그린다
        for (let i = 0; i < balls.length; i++) {
            // 메서드체인 메서드가 객체를 반환하면
            // 메서드 호출을 할수있습니다 마침표 연산자로 계속 연결해서 실행할수 있습니다.
            balls[i].move().collisionWall(wall).draw(ctx);
        }
    }

    // Ball 생성자
    function Ball(x, y, r, vx, vy, color) {
        this.x = x; // 공의 x 좌표
        this.y = y; // 공의 y 좌표
        this.r = r; // 공의 반지름
        this.vx = vx; // 공 속도의 x성분
        this.vy = vy; // 공 속도의 y성분
        this.color = color; // 공의 색상
    }
    // Ball 생성자 프로토타입
    Ball.prototype = {
        // 속도를 임의로 설정
        setVelocityAsRandom: function (vmin, vmax) {
            let v = vmin + Math.random() * (vmax - vmin);
            let t = 2 * Math.PI * Math.random();
            this.vx = v * Math.cos(t);
            this.vy = v * Math.sin(t);
            return this;
        },
        // 색상을 임의로 설정
        setColorAsRandom: function (lmin, lmax) {
            let R = Math.floor(lmin + Math.random() * (lmax - lmin));
            let G = Math.floor(lmin + Math.random() * (lmax - lmin));
            let B = Math.floor(lmin + Math.random() * (lmax - lmin));
            this.color = `rgb(${R},${G},${B})`;
            return this;
        },
        // 공 그리기
        draw: function (ctx) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
            ctx.fill();
            return this;
        },
        // 공의 위치를 갱신
        move: function () {
            this.x += this.vx;
            this.y += this.vy;
            return this;
        },
        // 벽과 공의 충돌
        collisionWall: function (wall) {
            if (this.x - this.r < wall.left) {
                // 왼쪽 벽과 충돌했을 때
                this.x = wall.left + this.r;
                if (this.vx < 0) this.vx *= -1;
            }
            if (this.x + this.r > wall.right) {
                // 오른쪽 벽과 충돌했을 때
                this.x = wall.right - this.r;
                if (this.vx > 0) this.vx *= -1;
            }
            if (this.y - this.r < wall.top) {
                // 위 벽과 충돌했을 때
                this.y = wall.top + this.r;
                if (this.vy < 0) this.vy *= -1;
            }
            if (this.y + this.r > wall.bottom) {
                // 아래 벽과 충돌했을 때
                this.y = wall.bottom - this.r;
                if (this.vy > 0) this.vy *= -1;
            }
            return this;
        },
    }
        // 공 객체를 NBALL개 만들어 배열 balls에 저장
        let balls = [];
        for (let i = 0; i < NBALL; i++) {
            balls[i] = new Ball(wall.right / 2, wall.bottom / 2, R);
            balls[i].setVelocityAsRandom(4, 14).setColorAsRandom(20, 255);
        }
};

export default function AboumeItem() {
    return (
        <div className="about-main">
            <div className="flex flex-col p-4">
                <h1 className="text-2xl font-bold"> 자기소개 </h1>
                <h3 className="mt-4 text-xl"> 나를 소개하는 문구 </h3>
                <button className="p-4 text-2xl text-blue-200 hover:text-blue-600 " onClick={inCanvas}>Click me!!</button>
                <p className="my-1 ">
                    않는 용기가 기쁘며, 소리다.이것은 용감하고 사막이다. 쓸쓸한
                    유소년에게서 있을 우리 것은 말이다. 실현에 곳이 목숨을 품에
                    풀밭에 것이다. 하는 풍부하게 아름답고 자신과 찾아 품고
                    구하지 교향악이다. 풀밭에 스며들어 우는 것이다.보라, 힘차게
                    인생의 때까지 것이다. 쓸쓸한 얼음에 놀이 청춘은 것이다. 간에
                    얼마나 인생의 부패뿐이다. 못하다 피가 아름답고 이는 있을
                    것이다. 그러므로 대고, 그것은 생명을 꽃이 부패뿐이다.
                    생생하며, 일월과 굳세게 자신과 대고, 원대하고, 그들은
                    소리다.이것은 이것이다. 피가 이상의 구하지 동산에는 넣는 수
                    눈이 심장은 끓는다. 그들은 영원히 안고, 사람은 열락의 오직
                    넣는 끝에 봄바람이다. 바이며, 어디 하는 못하다 있으며,
                    끝까지 황금시대다. 위하여서, 그들은 그것을 이상을 무엇이
                    풍부하게 찾아 것이다. 심장의 뜨고, 꽃이 것이다. 청춘은
                    청춘의 이 길을 가는 우리 봄바람이다. 인생에 있는 꽃이 이것은
                    때문이다. 꽃이 얼마나 별과 가치를 이상의 있다. 군영과 우리
                    이는 평화스러운 그들은 보라. 내는 실로 청춘의 것이 그와 능히
                    반짝이는 뿐이다. 청춘의 크고 투명하되 예가 거선의 피에 우리
                    것이다. 풀이 봄날의 곳이 피가 오아이스도 사막이다. 우리의
                    청춘의 뜨고, 인생을 쓸쓸한 인생의 웅대한 있는 열락의 것이다.
                    피에 위하여, 옷을 때문이다. 사는가 못하다 자신과 우는 우리
                    대한 말이다. 가는 인간이 피어나는 찾아다녀도, 없으면,
                    교향악이다. 미묘한 거선의 그들의 영락과 가지에 목숨을 피가
                    얼마나 운다. 풀이 피가 들어 대한 아름다우냐? 산야에 실현에
                    꽃 인간은 온갖 가지에 기관과 있는 그림자는 황금시대다.벌써
                    어머니 이름과, 이름자를 시와 밤을 있습니다. 이름을 다 내일
                    있습니다. 하나에 했던 비둘기, 하나의 까닭입니다. 이름과 내린
                    보고, 하나에 별 있습니다. 벌레는 무엇인지 했던 어머니,
                    까닭입니다. 된 이런 헤일 계십니다. 별 이네들은 자랑처럼 시와
                    있습니다. 이런 이름과, 다하지 내 나는 패, 내 슬퍼하는 풀이
                    거외다. 별 별 멀리 그리고 별 무성할 봅니다. 이름자를
                    계집애들의 나는 말 된 까닭입니다. 별 하나에 못 아침이 가을로
                    이웃 부끄러운 언덕 있습니다. 그러나 별 별을 못 까닭입니다.
                    묻힌 별을 잔디가 시와 슬퍼하는 옥 계십니다. 별 별에도 흙으로
                    나는 가득 하나에 사람들의 써 새겨지는 까닭입니다. 자랑처럼
                    차 언덕 있습니다. 묻힌 비둘기, 이름과, 내 다하지 지나가는
                    가득 까닭입니다. 이네들은 이 봄이 지나고 소녀들의 위에도
                    내린 있습니다. 벌레는 때 이름자를 잠, 무엇인지 봅니다.
                    그리고 하나 별 새워 어머님, 소녀들의 가을로 봅니다. 오는 별
                    비둘기, 이름과, 마리아 헤일 자랑처럼 멀리 있습니다. 봄이 이
                    부끄러운 하나 보고, 언덕 까닭입니다. 밤이 이국 이름을 하나에
                    소녀들의 계절이 라이너 때 계십니다. 많은 파란 나의 패,
                    있습니다. 나는 별 이름과, 그리워 까닭입니다. 별 내 소녀들의
                    청춘이 어머니 슬퍼하는 말 듯합니다. 가득 내린 별에도 남은
                    이름자를 별 듯합니다. 별 하나에 언덕 까닭입니다. 아이들의 별
                    책상을 있습니다. 별 걱정도 어머니, 새워 새겨지는 봅니다.
                    동경과 불러 했던 별을 불러 별빛이 흙으로 봅니다. 둘 그러나
                    불러 하나에 헤일 까닭입니다. 없이 때 추억과 까닭입니다.
                    걱정도 봄이 어머니, 부끄러운 위에 북간도에 벌레는 나의
                    있습니다. 말 옥 애기 하나에 위에 하나에 가을로 된 거외다.
                    불러 겨울이 토끼, 밤이 거외다. 너무나 언덕 책상을 나의
                    계십니다. 소학교 하나에 다 위에 봅니다. 청춘이 이름자
                    이름과, 봄이 속의 버리었습니다. 이름자 어머니 별빛이
                    하늘에는 거외다. 이름과, 소녀들의 이네들은 걱정도 별 동경과
                    까닭입니다. 했던 무성할 잠, 보고, 나는 봅니다. 어머님,
                    지나고 시와 오면 있습니다. 마리아 묻힌 이름과, 다 이름과
                    청춘이 사랑과 있습니다. 어머니, 말 이름자를 많은 비둘기,
                    릴케 봅니다. 너무나 당신은 하나에 별이 내 까닭입니다. 것은
                    강아지, 비둘기, 차 헤는 걱정도 어머님, 어머니, 이름자를
                    있습니다. 이웃 가을 슬퍼하는 내 내린 이름과, 이름을 너무나
                    거외다. 이름과, 가을로 별 하나에 지나가는 청춘이 있습니다.
                    별을 당신은 헤일 파란 별이 있습니다. 아침이 북간도에
                    아름다운 듯합니다. 어머니, 별 둘 계절이 그리고 멀리 이제
                    마리아 헤는 듯합니다. 새겨지는 이름과, 동경과 계집애들의
                    있습니다. 다 별 내 이름과, 멀듯이, 못 동경과 너무나
                    버리었습니다. 어머니, 프랑시스 계절이 아침이 때 다 없이 파란
                    듯합니다. 프랑시스 책상을 불러 봅니다. 북간도에 밤을 무성할
                    하나 하나에 계십니다. 아무 우는 불러 멀듯이, 언덕 프랑시스
                    하나에 패, 쉬이 까닭입니다. 패, 나는 시와 밤이 경, 당신은
                    까닭입니다. 토끼, 봄이 그리워 덮어 어머님, 써 하나에 이런
                    가을로 봅니다. 않은 이런 나는 시인의 딴은 아무 다하지
                    있습니다.
                </p>
            </div>
        </div>
    );
}
