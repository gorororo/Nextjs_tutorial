import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
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
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">프로젝트 보러가기</a>
                    </Link>
                </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                <Animation />
            </div>
        </>
    );
}
