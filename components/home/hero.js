import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 프론트엔드 최광락 입니다.
                    <br className="hidden lg:inline-block" />
                    오늘도 열심히!
                </h1>
                <p className="mb-8 leading-relaxed">
                    좋은 프로그래머는 자기 두뇌를 사용한다. 그러나 좋은
                    가이드라인은 모든 케이스를 고려해야만 하는 노력을 줄여준다.
                    (Francis Glassborow, 개발자)
                    <br className="hidden lg:inline-block" />
                    소프트웨어에는 사실 의미있는
                    것들이 거의 없다. 만일 그런 게 있다고 할지라도, 유일한
                    성공척도는 고객들이 뭐가 문제인지 몰라 갈팡질팡하는 걸
                    도와주었냐 하는 것이다. (Jeff Atwood, StackOverFlow의
                    창립자)
                    <br className="hidden lg:inline-block" />
                    우리 컴퓨터 프로그램의 슬픈 상태를 고려해보면
                    소프트웨어 개발은 아직은 어둠의 마법이다. 아직은
                    엔지니어링an engineering discipline이라고 부르기는 어렵다.
                    (Bill Clinton, 미국 대통령)
                    <br className="hidden lg:inline-block" />
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">프로젝트 보러가기</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
