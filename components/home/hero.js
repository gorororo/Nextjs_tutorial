import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 최광락 입니다.
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩!
        </h1>
        <p className="mb-8 leading-relaxed">
          심장의 풍부하게 그들의 봄바람이다. 인생을 없으면, 이상의 유소년에게서
          불러 그들의 놀이 것이다. 청춘 그와 품으며, 작고 못할 우리는 불어
          위하여, 사막이다. 산야에 따뜻한 얼음이 꽃이 그들에게 뼈 열매를
          철환하였는가? 착목한는 살 생생하며, 두기 가지에 하여도 보라. 찬미를
          그들은 간에 때에, 심장은 동력은 온갖 것이다. 뭇 무엇을 못할 두손을
          대한 살았으며, 같이, 부패뿐이다. 이상의 이상의 꽃 있다. 두손을 내는
          설산에서 피에 낙원을 그러므로 열매를 품고 풍부하게 있으랴? 이상 고행을
          커다란 자신과 보라. 인도하겠다는 끓는 얼음 뜨거운지라, 아니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
