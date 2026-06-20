import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "LOMF(한아름)가 rug.hanahreum.asia에서 개인정보를 수집·이용·제공·보호하는 방법을 안내합니다.",
  alternates: { canonical: "https://rug.hanahreum.asia/privacy/ko/" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "2026년 6월 20일";
const CONTACT_EMAIL = "nicknicksmart@gmail.com";

/* ── 표현용 헬퍼 (서버 컴포넌트, 일반 함수) ── */

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-display text-2xl md:text-3xl text-[var(--color-text-primary)] mb-5 mt-16 first:mt-0"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm tracking-[0.12em] text-[var(--color-accent-light)] mb-3 mt-8">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-4">
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-4 marker:text-[var(--color-accent-dark)]">
      {children}
    </ul>
  );
}

function S({ children }: { children: React.ReactNode }) {
  return <strong className="text-[var(--color-text-primary)] font-medium">{children}</strong>;
}

function Mail() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
    >
      {children}
    </a>
  );
}

const TOC: { id: string; label: string }[] = [
  { id: "collect", label: "1. 수집하는 개인정보 항목" },
  { id: "purpose", label: "2. 개인정보의 처리 목적" },
  { id: "cookies", label: "3. 쿠키·애널리틱스·맞춤형 광고" },
  { id: "thirdparty", label: "4. 제3자 제공 및 처리위탁" },
  { id: "overseas", label: "5. 개인정보의 국외 이전" },
  { id: "retention", label: "6. 보유 기간 및 파기" },
  { id: "rights", label: "7. 정보주체의 권리·행사 방법" },
  { id: "security", label: "8. 안전성 확보 조치" },
  { id: "children", label: "9. 아동의 개인정보" },
  { id: "officer", label: "10. 보호책임자 및 권익침해 구제" },
  { id: "changes", label: "11. 처리방침의 변경" },
];

export default function PrivacyKoPage() {
  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* 헤더 */}
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 pb-16 md:pt-48 md:pb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-accent)] mb-6">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[var(--color-text-primary)] mb-6">
            개인정보처리방침
          </h1>
          <p className="text-[15px] text-[var(--color-text-muted)] tracking-wide">
            최종 개정일: {LAST_UPDATED}
          </p>
          <p className="mt-4">
            <Link
              href="/privacy/"
              className="text-sm text-[var(--color-accent-light)] underline underline-offset-2 decoration-[var(--color-accent-dark)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              View in English →
            </Link>
          </p>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* 목차 */}
          <nav aria-label="목차" className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs tracking-[0.2em] text-[var(--color-text-muted)] mb-6">
                목차
              </p>
              <ul className="space-y-3">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* 본문 */}
          <article className="lg:col-span-8 xl:col-span-9 max-w-3xl">
            <P>
              <S>LOMF</S>(개인사업자, 사업자등록번호 774-14-01878, 이하
              &lsquo;회사&rsquo;)는 브랜드 <S>한아름(Hanahreum)</S>의 웹사이트{" "}
              <S>rug.hanahreum.asia</S>(이하 &lsquo;사이트&rsquo;)를 통해 처리하는
              이용자의 개인정보를 「개인정보 보호법」 등 관련 법령에 따라
              보호하기 위하여 본 개인정보처리방침을 수립·공개합니다. 본 방침은
              사이트에만 적용되며, 아마존 등 외부 마켓플레이스에서의 구매에는 해당
              플랫폼의 방침이 적용됩니다.
            </P>

            <H2 id="collect">1. 수집하는 개인정보 항목</H2>
            <H3>이용자가 직접 제공하는 정보</H3>
            <P>
              파트너십·문의 양식을 통해 <S>이름, 회사명(선택), 이메일 주소, 관심
              분야, 문의 내용</S>을 수집합니다. 해당 양식은 Google Forms(Google
              LLC)를 통해 처리되어 입력하신 정보가 Google에 전송·저장됩니다.
            </P>
            <H3>자동으로 수집되는 정보</H3>
            <UL>
              <li>
                <S>Google Analytics 4를 통한 이용·기기 정보</S> — IP 주소(통상
                일부 마스킹), 기기·브라우저 종류, 방문 페이지, 유입 경로, 대략적인
                위치, 이용 행태 등(쿠키 등 자동 수집 장치 이용).
              </li>
              <li>
                <S>Google 광고·리마케팅 서비스를 통한 행태정보</S>(Google Ads /
                Google Signals) — 광고 성과 측정 및 다른 웹사이트·앱에서의 맞춤형
                광고 노출에 이용.
              </li>
              <li>
                <S>서버·보안 로그</S> — 사이트는 GitHub Pages(GitHub, Inc.)에서
                호스팅되며, 전송·보안을 위해 IP 주소 등 기술 정보가 기록될 수
                있습니다.
              </li>
            </UL>
            <P>
              네이버 검색 사이트 소유확인 메타태그는 검색엔진 소유확인 용도로만
              사용되며 개인정보를 수집하지 않습니다. 회사는 사이트를 통해
              민감정보를 의도적으로 수집하지 않으며, 문의 내용란에 민감정보를
              입력하지 않도록 안내드립니다.
            </P>

            <H2 id="purpose">2. 개인정보의 처리 목적</H2>
            <UL>
              <li>문의 응대 및 사업·파트너십 관계의 검토·형성·관리</li>
              <li>사이트 성능·콘텐츠·이용경험의 측정 및 개선(애널리틱스)</li>
              <li>브랜드 마케팅(외부 플랫폼에서의 광고 및 리마케팅 포함)</li>
              <li>사이트 운영·보안, 부정 이용 방지, 기술적 안정성 유지</li>
              <li>관련 법령 준수 및 법적 청구의 대응</li>
            </UL>

            <H2 id="cookies">3. 쿠키·애널리틱스·맞춤형 광고(행태정보)</H2>
            <P>
              사이트는 <S>Google Analytics 4</S> 및 <S>Google 광고 서비스</S>(Google
              Ads / Google Signals)를 통해 쿠키 등 유사 기술을 사용합니다. 이러한
              기술은 브라우저·기기를 식별하고 이용 행태를 분석하여 맞춤형(교차맥락
              행태) 광고에 활용될 수 있습니다.
            </P>
            <H3>거부·차단 방법</H3>
            <P>
              이용자는 아래 도구로 언제든지 거부·차단할 수 있으며, 회사에 별도
              연락 없이 브라우저 또는 Google 계정에서 즉시 적용됩니다.
            </P>
            <UL>
              <li>
                <S>브라우저 설정</S> — 브라우저의 개인정보 설정에서 쿠키 차단·삭제.
              </li>
              <li>
                <S>Google 애널리틱스 차단 부가기능</S> —{" "}
                <Ext href="https://tools.google.com/dlpage/gaoptout">
                  tools.google.com/dlpage/gaoptout
                </Ext>
                .
              </li>
              <li>
                <S>Google 광고 설정(내 광고 센터)</S> —{" "}
                <Ext href="https://myadcenter.google.com/">myadcenter.google.com</Ext>{" "}
                에서 맞춤형 광고 해제.
              </li>
              <li>
                <S>문의</S> — <Mail /> 으로 요청하시면 이용자와 관련된 분석·광고
                처리를 중지합니다.
              </li>
            </UL>
            <P>
              Google의 데이터 처리에 관한 내용은{" "}
              <Ext href="https://policies.google.com/technologies/partner-sites">
                Google 서비스를 사용하는 사이트의 데이터 이용 안내
              </Ext>{" "}
              및{" "}
              <Ext href="https://policies.google.com/privacy">
                Google 개인정보처리방침
              </Ext>
              을 참고하시기 바랍니다.
            </P>

            <H2 id="thirdparty">4. 제3자 제공 및 처리위탁</H2>
            <P>
              회사는 이용자의 개인정보를 영리 목적으로 <S>판매하지 않습니다.</S>{" "}
              사이트 운영을 위하여 아래의 수탁자에게 처리를 위탁합니다.
            </P>
            <UL>
              <li>
                <S>Google LLC</S>(미국) — Google Forms(문의 접수), Google Analytics
                4(이용 정보), Google 광고 서비스(광고·리마케팅).
              </li>
              <li>
                <S>GitHub, Inc.</S>(미국) — 웹사이트 호스팅(GitHub Pages) 및 서버
                로그.
              </li>
            </UL>
            <P>
              사이트가 Google에 온라인 식별자를 제공하여 맞춤형 광고에 활용하는
              행위는 일부 국가의 법령상 &lsquo;제공·공유&rsquo;에 해당할 수
              있습니다. 거부 방법은 제3항을 참고하시기 바랍니다. 그 밖에 법령에
              근거하거나 회사의 권리 보호를 위해 필요한 경우 개인정보가 제공될 수
              있습니다.
            </P>

            <H2 id="overseas">5. 개인정보의 국외 이전</H2>
            <P>
              회사는 위 수탁자(Google LLC, GitHub, Inc.)를 통해 개인정보를{" "}
              <S>미국</S> 등 국외로 이전·처리합니다. 이전되는 정보는 본 방침에 기재된
              수집 항목이며, 이전 목적·보유 기간은 각 처리 목적에 따릅니다.
              이용자는 사이트 이용 및 문의 양식 제출을 통해 이러한 국외 이전을
              안내받게 됩니다.
            </P>
            <UL>
              <li><S>이전받는 자:</S> Google LLC, GitHub, Inc.</li>
              <li><S>이전 국가:</S> 미국(및 각 사업자의 데이터센터 소재 국가)</li>
              <li><S>이전 항목:</S> 제1항의 수집 항목</li>
              <li><S>이전 목적:</S> 제2항의 처리 목적</li>
            </UL>

            <H2 id="retention">6. 보유 기간 및 파기</H2>
            <UL>
              <li>
                <S>문의 양식 제출 정보</S> — 문의 응대 및 관계 유지에 필요한 기간
                동안 보유 후 파기(법령상 보존 의무가 있는 경우 해당 기간).
              </li>
              <li>
                <S>애널리틱스·광고 정보</S> — Google Analytics에 설정된 보존
                기간(기본 2~14개월) 및 Google 정책에 따름.
              </li>
              <li>
                <S>서버 로그</S> — 보안·운영 목적의 제한된 기간 동안 보유.
              </li>
            </UL>
            <P>
              보유 기간이 지났거나 처리 목적이 달성된 개인정보는 지체 없이
              파기합니다.
            </P>

            <H2 id="rights">7. 정보주체의 권리·의무 및 행사 방법</H2>
            <P>이용자는 회사에 대하여 다음 권리를 행사할 수 있습니다.</P>
            <UL>
              <li>개인정보 <S>열람</S> 요구</li>
              <li>오류 등에 대한 <S>정정·삭제</S> 요구</li>
              <li>개인정보 <S>처리정지</S> 요구</li>
              <li><S>동의 철회</S>(언제든지, 기존 처리에는 영향 없음)</li>
            </UL>
            <P>
              권리 행사는 <Mail /> 으로 요청하실 수 있으며, 회사는 법령이 정한 기간
              내에 조치합니다. 회사는 요청자가 본인 또는 정당한 대리인인지 확인할
              수 있습니다.
            </P>

            <H2 id="security">8. 안전성 확보 조치</H2>
            <P>
              회사는 개인정보의 무단 접근·분실·변경·유출을 방지하기 위하여 합리적인
              기술적·관리적 조치를 취하며, 신뢰할 수 있는 사업자(Google, GitHub)의
              보안 조치를 활용합니다. 다만 인터넷을 통한 전송·저장에 완전한 보안을
              보장할 수는 없습니다.
            </P>

            <H2 id="children">9. 아동의 개인정보</H2>
            <P>
              사이트는 사업자 및 성인을 대상으로 하며 아동을 대상으로 하지
              않습니다. 회사는 만 14세 미만 아동의 개인정보를 알면서 수집하지
              않으며, 수집 사실을 확인하는 경우 지체 없이 파기합니다.
            </P>

            <H2 id="officer">10. 개인정보 보호책임자 및 권익침해 구제</H2>
            <P>
              회사는 개인정보 처리에 관한 업무를 총괄하고 이용자의 문의·불만을
              처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </P>
            <UL>
              <li><S>개인정보 보호책임자:</S> 이예천 (Nick Yie)</li>
              <li><S>이메일:</S> <Mail /></li>
              <li><S>전화:</S> 010-7683-9905</li>
              <li>
                <S>주소:</S> 서울특별시 광진구 아차산로 599 (04968), 대한민국
              </li>
            </UL>
            <P>
              개인정보 침해에 대한 신고·상담이 필요하신 경우 아래 기관에 문의하실
              수 있습니다.
            </P>
            <UL>
              <li>
                개인정보침해 신고센터(KISA) — 국번 없이 118 /{" "}
                <Ext href="https://privacy.kisa.or.kr">privacy.kisa.or.kr</Ext>
              </li>
              <li>
                개인정보 분쟁조정위원회 —{" "}
                <Ext href="https://www.kopico.go.kr">kopico.go.kr</Ext> (1833-6972)
              </li>
              <li>
                개인정보보호위원회 —{" "}
                <Ext href="https://www.pipc.go.kr">pipc.go.kr</Ext>
              </li>
            </UL>

            <H2 id="changes">11. 개인정보처리방침의 변경</H2>
            <P>
              본 방침은 법령·정책의 변경에 따라 개정될 수 있으며, 개정 시 본
              페이지 상단의 &lsquo;최종 개정일&rsquo;을 갱신하고 변경 내용을
              반영합니다.
            </P>

            <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
              <Link
                href="/"
                className="text-sm tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                ← 홈으로
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
