// ============================================================
// CHEAT SHEET - 시험 직전 요약 노트
// 주제별로 핵심만. 한 줄 룰 위주.
// ============================================================
const CHEAT_SHEET = [
{
id: "3", name: "IS Acquisition, Development & Implementation",
topics: [
{
  icon: "🧪", title: "Testing",
  table: {
    headers: ["테스트", "핵심", "수행자"],
    rows: [
      ["<strong>White Box</strong> (=Structural, Glass Box)", "코드 내부 논리 경로 검증", "개발자"],
      ["<strong>Black Box</strong> (=Functional)", "기능만 테스트, 내부 모름", "사용자/QA"],
      ["<strong>Sandbox</strong>", "격리/가상 환경 실행", "보안팀"],
      ["<strong>Compatibility</strong> (=Interface)", "시스템 간 연동", "개발/QA"],
      ["<strong>Stress</strong>", "성능 한계점 확인", "테스트팀"],
      ["<strong>Volume</strong>", "대량 데이터 처리", "테스트팀"],
      ["<strong>Load</strong>", "동시 사용자 부하", "테스트팀"]
    ]
  },
  rules: [
    '스트레스 테스트 = <strong>테스트 환경 + 실제 워크로드</strong> (운영환경 X, 테스트 데이터 X)',
    '테스트 순서: <strong>Unit → Integration → System → UAT → Stress/Performance</strong>',
    '시간 부족해도 <strong>UAT는 절대 생략 불가</strong>',
    '테스트 데이터 = <strong>질 > 양</strong> (유효+무효, 모든 조건 대표)',
    '무작위 샘플 ≠ 모든 조건 커버',
    '<strong>Top-down</strong> = 인터페이스 오류 조기 발견 / <strong>Bottom-up</strong> = 핵심 모듈 오류 조기 발견',
    '<strong>Regression</strong> = 변경 후 새 오류 확인 / <strong>Validation</strong> = 요구사항 충족 / <strong>Sociability</strong> = 환경 공존',
    '<strong>Integration</strong> = 모듈 간 연결 ("linked" 키워드)',
    '운영 데이터(Sanitized) 장점=실제 대표, 단점=<strong>모든 기능 커버 불가</strong>',
    '<strong>비운영 환경+계측 도구</strong> → 타이밍 변경 → <strong>Race Condition</strong> 놓침 (Heisenbug)',
    '<strong>Sociability</strong> = "기존 시스템에 악영향 없이 공존" 키워드 → 정답 / Integration과 구분!',
    '코딩 표준 미준수 + 코드 리뷰 부재 → <strong>Buffer Overflow</strong> 위험 증가 (코드 기반 취약점)',
    '<strong>Parallel</strong> = 신·구 동시 실행, 결과 비교 → 목적: <strong>사용자 요구사항 충족 확인</strong> (비용 효율 X)',
    '실패 영향: Unit < Integration < System < <strong>Acceptance(최대)</strong> — 늦을수록 영향 ↑',
    '테스트 환경+운영 데이터 = <strong>기밀성 리스크</strong> (개발자 특권 접근, 접근 통제 부족)',
    '<strong>Load</strong>=정상/피크 사용자 / <strong>Stress</strong>=비정상 과부하 / <strong>Volume</strong>=대량 레코드(데이터)',
    '운영 데이터 테스트 사용 = <strong>경영진 사전 승인</strong> 필수 (절대 금지 X, 무조건 허용 X)',
    '계산 정확성 검증 = <strong>시뮬레이션 거래(Test Deck)</strong> → 사전 결정 결과와 비교 (소스 코드 검토 X)',
    '미테스트 논리 식별 = <strong>Mapping</strong> / Snapshot=거래 흐름 / Tracing=명령어 추적',
    '참조: Unit=상세설계, <strong>Integration=아키텍처</strong>, System=기능요구, Acceptance=비즈니스요구',
    'CGI 스크립트 QC 미검증 최대 리스크 = <strong>비인가 접근</strong> (공개 인터넷 서버 실행 → 내부 침투)',
    '<strong>ITF</strong> = 가상 엔티티+운영 동시 처리 → 장점: <strong>별도 테스트 프로세스 불필요</strong> (테스트 데이터는 여전히 필요)',
    'SW 품질 평가 = <strong>최초 보고 MTBF</strong> (순수 결함) / MTTR·응답 시간 = 대응팀 성과',
    '<strong>Alpha</strong> = Beta 직전/내부(개발자) | <strong>Beta</strong> = 최종 단계/외부 사용자/UAT 형태',
    '시간 제한 테스트 → <strong>중요도+사용 빈도</strong> 기준 리스크 기반 우선순위 (자동화=효율성≠커버리지)',
    '결함 감소 비용 효율 최고 = <strong>공식 소프트웨어 검사(Inspection)</strong> — 조기 발견 → 전파 방지 → 재작업 최소',
    'QA+UAT 결합 최대 리스크 = <strong>부적절한 수용</strong> — 사용자 만족 시 QA 표준 미달도 수용 압력 (목적이 다른 테스트 분리 필수)'
  ]
},
{
  icon: "🔄", title: "개발 방법론",
  table: {
    headers: ["방법론", "특징", "주의점"],
    rows: [
      ["<strong>Waterfall</strong>", "순차적, 문서 중심", "변경 통제 용이"],
      ["<strong>Prototyping</strong>", "반복적, 빠른 수정", "<strong>변경 통제 어려움</strong> (문서화 안 됨)"],
      ["<strong>Agile</strong>", "짧은 스프린트, 점진적", "유연하지만 문서 부족 가능"],
      ["<strong>RAD</strong>", "빠른 개발, 도구 활용", "소규모 프로젝트에 적합"],
      ["<strong>Timebox</strong>", "시간/비용 경계 엄격 설정", "비용/납기 초과 방지, RAD에 적합"],
      ["<strong>Agile</strong>", "반복(Iteration), 일일 회의, Retrospective", "도구보다 팀 조화/소통, CMM과 반대"]
    ]
  },
  rules: [
    '<strong>Prototyping 장점</strong> = 시간·비용 절감 (유일한 장점)',
    'Prototyping 단점 = 내부 통제 약화, 변경 통제 복잡, scope creep, 미완성 운영 위험',
    '<strong>OOD(객체지향)</strong> 핵심 장점 = <strong>모듈 재사용</strong> (성능/통제 향상 X, SDLC 단축은 미래만)',
    'RAD 자원 부족 → FIRST = <strong>계획/접근법 검토</strong> (외부 인력은 내부 의사결정 대체 불가)',
    '<strong>CBD(Component-based)</strong> 주요 장점 = <strong>다중 개발 환경 지원</strong> (재사용 모듈 → 개발 속도↑)',
    '<strong>Waterfall 적합 조건</strong> = 요구사항 안정 + 환경 안정 + 변경 가능성 낮음 (불확실성 ↑ → 반복적/Agile)',
    '<strong>CMM</strong> = 프로세스 성숙도 평가 (예측 가능한 SW 프로세스 준수 확인) — 제품 보장·보안·효율성 평가 아님',
    '<strong>Agile Sprint</strong> = 반드시 동작하는(functional) 코드 생성 (PoC/미완성 코드 ✗) / 문서 축소·재계획·팀 자율 관리는 정상',
    'SW 품질: <strong>Functionality</strong>=기능 존재 / Reliability=성능 유지 / Efficiency=성능/자원 / Portability=환경 이전'
  ]
},
{
  icon: "📐", title: "프로젝트 관리 기법",
  table: {
    headers: ["기법", "목적"],
    rows: [
      ["<strong>PERT</strong>", "<strong>기간 추정</strong> (3점: 최악/최선/정상)"],
      ["<strong>CPM</strong>", "임계 경로 식별"],
      ["<strong>Gantt Chart</strong>", "일정/진행 시각화"],
      ["<strong>Function Point</strong>", "작업 크기 측정 (기간 X)"],
      ["<strong>COCOMO</strong>", "개발 비용 추정"],
      ["<strong>Earned Value</strong>", "비용 vs 일정 통합 추적 (비용 단독 평가 금지!)"]
    ]
  },
  rules: [
    '프로젝트 리스크 = <strong>시작 전/초기에 식별</strong> (\"아직 이르다\" = 틀린 주장)',
    '리스크 관리 = <strong>선제적(forward-looking)</strong>, 사후 대응 = 실패',
    '계획 이탈 식별 = <strong>Project Performance Criteria</strong> (Framework/Approach/Resource Plan X)',
    'QA/품질 관리 = <strong>프로젝트 전반 지속적</strong> 적용 → 결함 조기 발견 → 비용 최소화',
    '인력 추가 시 = <strong>크리티컬 패스 먼저 재검증</strong> (경로 변경 가능, slack 확인)',
    'SDLC 단계/산출물 결정 = <strong>초기 계획 단계</strong> (추적·자원 관리 위해, 리스크 전부 식별까지 기다릴 수 없음)',
    '<strong>Crashing</strong> = Slack 0 활동(Critical Path)에 프리미엄 투입 → 조기 완료',
    '일정 OK+예산 OK+<strong>대량 비계획 초과 근무</strong> = 계획 비현실적 징후 → 계획 정확성 조사',
    'EVA: <strong>Schedule Variance = EV - PV</strong> (음수=지연) / 소비 시간 ≠ 달성 가치 → 잔여 작업 vs 잔여 시간 비교'
  ]
},
{
  icon: "📝", title: "SDLC 단계별 산출물",
  rules: [
    '<strong>구현 계획(Implementation Plan)</strong> = 설계(Design) 단계에서 수립',
    '설계에서 수립 → 개발에서 업데이트 → 배포에서 실행',
    '구현 방법이 설계에 영향 → 미리 계획해야 함',
    '<strong>UAT 계획</strong> = 요구사항 정의(Requirements) 단계에서 준비 (구현 때 실행)',
    '"준비(prepare)"와 "실행(conduct)"을 구분!',
    '테스트 단계 감사인 검토 = <strong>오류 보고서(Error Reports)</strong> (개념설계=요구사항, 변경요청=구현후)',
    '<strong>타당성 조사(Feasibility)</strong> = 비용·리스크 영향 큰 항목 포함 (통신 프로토콜 등) / 상세 절차(암호화·통제·계약)는 제외'
  ]
},
{
  icon: "👥", title: "SDLC 단계별 참여자",
  table: {
    headers: ["단계", "참여자", "역할"],
    rows: [
      ["<strong>Initiation</strong>", "<strong>System Owner</strong>", "프로젝트 승인/예산"],
      ["Requirements", "System User", "요구사항 정의"],
      ["Design", "System Designer", "기술 솔루션 설계"],
      ["Build", "System Builder", "구축 (보통 Designer=Builder)"],
      ["Test", "System User", "UAT 수행"]
    ]
  },
  rules: [
    '<strong>Steering Committee</strong> = 감독+방향+<strong>산출물/비용/일정 궁극적 책임</strong>',
    'Sponsor = 자금+성공기준 / PM = 일일 관리 / Security Officer = 통제 확인',
    '사용자 적절 기능 = <strong>출력 테스트(Output Testing)</strong> / 구성·논리·튜닝 = SoD 위반',
    '<strong>산출물 검토/승인</strong> = User Management | 전체 방향/비용 = Steering Committee | 자원 승인 = Senior Mgmt'
  ]
},
{
  icon: "🔢", title: "데이터 통제",
  table: {
    headers: ["목적", "방법"],
    rows: [
      ["<strong>완전성(Completeness)</strong>", "순번 체크, 배치 합계, 레코드 카운트"],
      ["<strong>정확성(Accuracy)</strong>", "중복 체크, 해시 합계"],
      ["<strong>적시성(Timeliness)</strong>", "시간 스탬프, SLA"]
    ]
  },
  rules: [
    '전송 완전성 = <strong>순번 갭 확인</strong>이 정답',
    '중복 체크 = 정확성이지 완전성 아님',
    '데이터 마이그레이션 승인 = <strong>Data Owner</strong> (DBA/PM/감사인 X)',
    '트랜잭션 손실 방지 = <strong>Automated Systems Balancing</strong> (입력 총합 vs 출력 총합 자동 비교)',
    '<strong>Checksum</strong> = 무결성(Integrity) 보장 (변경 탐지). 인증/부인방지는 디지털 서명',
    'EFT 조정 = <strong>Tracing</strong> (원본→최종 순방향 추적) / Vouching=역방향(거래 중)',
    '통제 효과성 최대 리스크 = <strong>공모(Collusion)</strong> — SoD 등 잘 설계된 통제도 우회 + 탐지 어려움',
    '시스템 인터페이스 데이터 교환 최우선 = <strong>데이터 인증(Authentication)</strong> = 출처(Origin)+무결성(Integrity) (무결성은 인증의 하위 개념)',
    '비인가 입력 탐지 = <strong>Transaction Journal</strong> (모든 활동 기록 → 원본 대조) / 콘솔 로그·오류 보고서는 불충분',
    '시스템 통합 시 I/O 통제 = <strong>송신+수신 양쪽 모두</strong> 검토 (출력=입력, 인터페이스만으로 불충분)'
  ]
},
{
  icon: "🔀", title: "시스템 전환 전략",
  table: {
    headers: ["전략", "방식", "위험", "비용"],
    rows: [
      ["<strong>Direct Cutover</strong>", "한 번에 교체", "최고", "최저"],
      ["<strong>Pilot</strong>", "일부 사이트 먼저", "중간", "중간"],
      ["<strong>Phased</strong>", "모듈별 단계적", "중간", "중간"],
      ["<strong>Parallel Run</strong>", "구/신 동시 운영", "<strong>최저</strong>", "<strong>최고</strong>"]
    ]
  },
  rules: [
    '위험도와 비용은 <strong>반비례</strong>: 안전할수록 비싸다',
    '"redundancy/가장 안전" → <strong>Parallel Run</strong>',
    '데이터 마이그레이션 최우선 = <strong>Semantic(의미적) 일치</strong> (Arithmetic보다 상위)'
  ]
},
{
  icon: "📌", title: "구현/배포",
  rules: [
    '<strong>Post-implementation Review</strong> = 목표 달성 여부 전체 평가 (UAT 포함하는 상위 검토)',
    '"설계대로 작동?" → Post-implementation Review',
    '구현 후 감사 최우선 = <strong>접근 통제(Access Control) 설정 확인</strong>',
    'ERP/ERM = 벤더 패키지 → 상세 설계 문서 검토 불필요',
    '촉박한 일정에 기능 추가 금물 → <strong>Future Enhancement</strong>로',
    '<strong>Code Freeze</strong> 후에는 테스트만 수행',
    '<strong>Certification</strong> = 통제 준수 평가 / <strong>Accreditation</strong> = 운영 승인 (경영진 리스크 수용)',
    'Post-impl Review = 만능: 설계 검증 + 접근 통제 + <strong>가치/ROI 측정</strong> (ROI 재분석 = Post-impl 핵심 활동)',
    '<strong>Post-Incident Review</strong> = 사고 원인·대응 분석 → 교훈 → <strong>내부 통제 개선</strong> (네트워크 강화/교육 X)',
    'Post-impl Review 주목적 = <strong>비즈니스 요구사항 충족 확인</strong> (통제/기술/규제 준수는 부수적)',
    '패키지 SW 구현 최대 리스크 = <strong>파라미터 설정 오류</strong> (즉각적 침해·장애·미준수)',
    'Immediate Cutover 최대 우려 = <strong>Back-out Plan 부재</strong> (Parallel은 구 시스템이 자동 백업)',
    '분산 시스템 데이터 무결성 감사 FIRST = <strong>DFD 검토</strong> (데이터 흐름 이해 → 통제 위치 확인)',
    '전환 리스크: <strong>Parallel(최저)</strong> < Phased < <strong>Abrupt/Cutover(최고)</strong> | 리스크↓ = 비용↑',
    '테스트 시간 부족 → <strong>기능 축소 파일럿 릴리스</strong> (범위↓+사용자↓=리스크 감소, 개발팀 테스트 생략 X)',
    '벤더 SW 구현 핵심 = <strong>기본 계정/비밀번호 비활성화</strong> (공개된 자격 증명 = 즉각적 위협)',
    '시스템 타 부서 확장 시 최우선 = <strong>프로세스 소유자 식별</strong> (모니터링·승인 통제 책임 주체)',
    '시스템 교체 최대 리스크 = <strong>데이터 마이그레이션 오류</strong> (무결성 손실 → 업무 마비, 상용 ERP 표준 기능은 이미 검증)',
    '대규모·복잡 인프라 배포 = <strong>Phased(단계적)</strong> 접근이 최선 (일괄 배포=실패↑, 시뮬레이션=비현실적)'
  ]
},
{
  icon: "💾", title: "ACID (DB 트랜잭션)",
  table: {
    headers: ["속성", "의미", "키워드"],
    rows: [
      ["<strong>A</strong>tomicity", "전부 완료 or 전부 취소", "all or nothing"],
      ["<strong>C</strong>onsistency", "DB 무결성 조건 유지", "integrity"],
      ["<strong>I</strong>solation", "트랜잭션 간 간섭 X", "isolated"],
      ["<strong>D</strong>urability", "완료 후 영구 보존", "survive failure"]
    ]
  }
},
{
  icon: "🔍", title: "Input Validation / Override",
  rules: [
    '<strong>Initial Validation = 형식(format) + 존재(existence) 확인</strong>이 먼저',
    '비즈니스 로직(한도, 분실/도난)은 그 다음 단계',
    '"initial/first" 붙으면 → <strong>가장 기본적인 기술적 검증</strong>이 정답',
    '<strong>Override 통제 = 자동 로깅 + 독립적 검토</strong> (직무 분리)',
    '보상 통제를 "있을 것"이라고 <strong>가정 금지</strong>',
    '<strong>Check Digit</strong> = 전치(transposition)·전사(transcription) 오류 탐지에 효과적',
    'Range=범위, Validity=유효값, Duplicate=중복 → 전치/전사 탐지 불가',
    '원격 데이터 검증 = <strong>전송 전</strong> 원격 사이트에서 (소스에 가깝게)',
    '입력 오류→출력 오류 시 = <strong>Limit Check</strong>(입력 예방 통제) 권고 / Recalc·Run-to-run·Reconciliation은 출력 후 탐지'
  ]
},
{
  icon: "🎯", title: "Scope Management / Baseline",
  rules: [
    '기능 초과 + 예산 초과 = <strong>Scope Management 실패</strong>',
    '<strong>Scope Creep</strong> = 범위가 통제 없이 확대되는 현상',
    '<strong>Baseline</strong> = 설계/개발 기준점 (이후 변경은 공식 승인 필요)',
    'Baseline 부적절 → <strong>Scope Creep</strong> → 시간/예산 초과',
    '증상(예산 초과)이 아닌 <strong>근본 원인(범위 확대)</strong>을 찾아라',
    '<strong>Stop/Freezing Point</strong> = 변경 금지 X → 이후 변경의 <strong>비용 효과성 평가 의무화</strong>',
    '<strong>Out-of-scope</strong> 섹션 목적 = 프로젝트 <strong>경계(Boundaries)</strong> 명확화 (유연성은 변경 요청으로 관리)'
  ]
},
{
  icon: "📂", title: "Project / Program / Portfolio",
  table: {
    headers: ["용어", "범위"],
    rows: [
      ["<strong>Project</strong>", "단일 프로젝트"],
      ["<strong>Program</strong>", "관련 프로젝트 그룹"],
      ["<strong>Portfolio</strong>", "<strong>전체 프로젝트 총괄</strong>"]
    ]
  },
  rules: [
    '"복수 프로젝트 관리/통제 효과성" → <strong>Portfolio</strong>',
    '포트폴리오 최우선 = <strong>비즈니스 플랜과 정렬</strong> (예산/투자보다 상위)',
    'CISA 철칙: <strong>IT는 항상 비즈니스 목표에 정렬</strong>'
  ]
},
{
  icon: "⚠", title: "프로젝트 성공/실패",
  rules: [
    'IS 프로젝트 실패 #1 원인 = <strong>요구사항 단계에서 사용자 참여 부족</strong>',
    '요구 변경은 "증상", 참여 부족이 "원인"',
    '사용자만이 자신의 요구를 정의할 수 있다',
    '구현 성공 최대 요인 = <strong>전반적인 조직 환경</strong> (기술/방법론보다 상위)',
    '리엔지니어링 이슈 식별 → <strong>Gap Analysis</strong> (As-Is vs To-Be)',
    '비즈니스 케이스 유효성 상실 → <strong>업데이트 먼저</strong> → 시정 조치 식별 → 그 후 중단/계속 판단',
    '표준 위반 원인=시간/리소스 부족 → <strong>리소스 추가</strong>로 해결 (지연/처벌/사후 수정 X)',
    'Post-<strong>project</strong> Review = 교훈(Lessons Learned) | Post-<strong>implementation</strong> Review = 통제·목표 달성 검증',
    '테스트 데이터 = <strong>삭제 X → 회귀 테스트용 보존</strong>',
    '다단계 구현 1단계 실패 → 감사 초점 = <strong>1단계 변경이 나머지에 미치는 영향</strong> (통제 검증보다 우선)',
    '프로젝트 초기에 <strong>역할·책임 공식 정의</strong> 필수 — 초기 단계 오류 = 후속 단계 비용 최대',
    'Initiation 회의 감사 최우선 = <strong>복잡성·리스크 분석</strong> (자원 결정은 복잡성에 종속, 기술 산출물은 아직 이름)',
    '일정 달성 검증 = <strong>완료 작업 패키지 기반 외삽(Extrapolation)</strong> — 직접 관찰 > 보고서 > 인터뷰 (80:20 편향 주의)'
  ]
},
{
  icon: "🔧", title: "변경 통제 / 직무 분리",
  rules: [
    '직무 분리 불가 → <strong>자동화된 통제(Release Management SW)</strong>가 최선',
    '<strong>예방(Prevention) > 감지(Detection)</strong>',
    '회귀 테스트 = 기능 검증 (이관 통제 아님)',
    '승인 = 필요하지만 충분하지 않음',
    '<strong>CI/CD</strong> 주요 이점 = <strong>속도 향상</strong> (테스트 자동화=기능, 문서화/로깅=통제)',
    'CI/CD 최대 우려 = <strong>변경 미문서화</strong> (표준 유지보수 포함 모든 변경 문서화 필수)',
    'Config Mgmt: <strong>Check-in</strong> = 통제 환경으로 넣기 / <strong>Check-out</strong> = 꺼내기(변경 시, 양식 필요)',
    '유지보수 품질 평가 = <strong>코딩 표준(Coding Standards)</strong> (가독성·일관성 → 유지보수 효율, 버전 관리 ≠ 표준 적용 보장)'
  ]
},
{
  icon: "🛒", title: "소프트웨어 획득 (Acquisition)",
  rules: [
    '획득 감사 핵심 = <strong>계약서가 법률 자문(Legal Counsel) 검토/승인 받았는지</strong>',
    'Acquisition ≠ Development → 감사 포인트가 다름',
    '사용자 참여는 요구사항/UAT 단계 (획득 프로세스 X)',
    '<strong>Make vs Buy 결정</strong>: 조직 내 기술 역량(core competency)이 최우선 판단 기준',
    'Make: 내부 역량 충분 + 핵심 비즈니스 | Buy: 역량 부족 + 비핵심 + 검증 솔루션 존재',
    '개인정보·요구사항 불명확 등은 양쪽 동일 적용 → 차별적 결정 요인 아님',
    '획득 검토 핵심 = 제품이 <strong>현재/계획 OS와 호환</strong>되는지 (기존 OS 상태는 운영 이슈)',
    '오프쇼어 개발 성공 핵심 = <strong>상세 명세서</strong> (언어·거리 차이 → 의사소통 갭 → 명세 정확성 최우선)',
    '외부 계약 시 <strong>품질 계획(Quality Plan)</strong> = 계약 산출물에 반드시 포함 (모든 프로젝트 필수 요소)'
  ]
},
{
  icon: "☁", title: "Cloud / SaaS",
  table: {
    headers: ["모델", "제공 범위"],
    rows: [
      ["<strong>IaaS</strong>", "인프라 (서버, 스토리지)"],
      ["<strong>PaaS</strong>", "플랫폼 (개발 환경)"],
      ["<strong>SaaS</strong>", "소프트웨어 전체"]
    ]
  },
  rules: [
    'SaaS 최대 리스크 = <strong>인터넷 의존 → 속도/가용성</strong>',
    '라이선스 = 제공자 관리 / 비용 = 계약 고정 / HW = 호환성 높음'
  ]
},
{
  icon: "🗄", title: "Data Warehouse",
  rules: [
    'DW 설계 최우선 = <strong>메타데이터 품질</strong> (데이터의 목차)',
    'DW = <strong>분석/조회용</strong> (운영용 아님) → 트랜잭션 속도 무관',
    '<strong>OLTP</strong> = 운영용(속도) / <strong>DW</strong> = 분석용(메타데이터)'
  ]
},
{
  icon: "🔎", title: "IS 감사인 역할",
  rules: [
    '감사인 = <strong>발견 + 권고</strong> (직접 해결/구현 = 독립성 위반)',
    '문제 발견 시 → <strong>에스컬레이션 권고</strong>',
    '재량에 맡기기, 무시 = 부적절',
    '절차 이탈 발견 → 먼저 <strong>승인 여부 확인</strong> (기술 확인은 그 후)',
    '통제 사양 평가 = <strong>요구사항 단계</strong> (가장 빠른 시점에 참여 → 부적절 솔루션 방지)',
    '독립성 유지 = <strong>검토(Review)/평가</strong> ✅ | 훼손 = <strong>자문(Advise)/권고/추정</strong> ⚠ (구현 참여)',
    '<strong>통합 감사(Integrated Audit)</strong> = 자원 최적화 + 품질 개선 동시 달성 (여러 감사 유형 동시 수행·결과 공유)',
    '감사인 본업 = <strong>QC</strong>(감사·검토) / QA 개선 참여 시 = <strong>컨설턴트</strong> 역할',
    'BPR 시 감사인 최우선 = <strong>핵심 통제 적용 확인</strong> (SoD는 통제 중 하나일 뿐, 전체 통제 체계가 우선)',
    'BPR 완료 후 감사 초점 = <strong>Post-BPR 프로세스 흐름도</strong> (현재 상태 검토, 과거 X / 프로젝트 계획은 하위 단계)',
    '프로젝트 초과(시간/비용) → <strong>원인 파악 먼저</strong>(비즈니스 케이스+PM 검토) — 성급한 결론·교체 권고 금지'
  ]
},
{
  icon: "💡", title: "CISA 풀이 팁",
  rules: [
    '<strong>"BEST"</strong> = 가장 포괄적인 답',
    '<strong>"MOST important"</strong> = 절대 생략 불가한 것',
    '<strong>"initial/first"</strong> = 가장 기본적인 검증',
    '"환경"과 "데이터"를 <strong>분리해서 판단</strong> → 소거법',
    '"특성이 맞다"와 "그게 문제를 일으킨다"는 <strong>다른 질문</strong>',
    '획득/조달 감사 최우선 = <strong>비즈니스 케이스 승인</strong>',
    '비즈니스 케이스 평가 최우선 = <strong>ROI</strong> (TCO는 비용만, ROI는 비용 대비 혜택)',
    '비즈니스 케이스 준비 최우선 = <strong>타당성 입증(Feasibility)</strong> + 비용편익분석 → 경영진 의사결정 지원'
  ]
},
{
  icon: "🤖", title: "ML / AI / 신기술",
  rules: [
    '<strong>Overfitting</strong> = 훈련 데이터 OK, 새 데이터 실패 (노이즈 학습, 모델 과복잡)',
    '<strong>Underfitting</strong> = 모델 너무 단순 → 패턴 자체를 못 잡음',
    'Overfitting ≠ 데이터 부족 (별개 개념)',
    '<strong>NLP</strong> = 언어 이해·생성 / <strong>ML</strong> = 데이터 학습 / <strong>Robotics</strong> = 물리 환경 (구분!)',
    '전문가 시스템: <strong>Decision Tree</strong>=질문→선택→결론 / <strong>Rules</strong>=If-Then / <strong>Semantic Nets</strong>=노드+아크'
  ]
}
]
},
{
id: "4", name: "IS Operations & Business Resilience",
topics: [
{
  icon: "🏢", title: "데이터센터 / 물리적 통제",
  rules: [
    '예방 유지보수 핵심 = <strong>독립적 검증(Independent Verification)</strong> — 유지보수가 실제 수행되었는지 제3자 확인 (에스코트·백그라운드 체크는 기본)'
  ]
},
{
  icon: "🌐", title: "네트워크 보안 / 구성요소",
  rules: [
    '<strong>Firewall</strong> = 네트워크 세그먼트 간 비인가 트래픽 차단 (1차 보안 도구) / Router=패킷 필터링 가능하나 보안 목적 아님 / L2 Switch=MAC 기반 트래픽 분리(인가 판단 X) / VLAN=포트 간 트래픽 통제(인가/비인가 구분 불가)',
    '서버 OS 무결성 보장 = <strong>Hardening(강화)</strong> — 최신 패치+접근 권한 정의+불필요 서비스 제거+안전하지 않은 옵션 비활성화 (물리 보안·부트 암호=논리적 취약점 미해결, 로깅=탐지 통제)',
    'HW 유지보수 프로그램 감사 = <strong>벤더 사양(Vendor Specifications) 대비 검증</strong> — 비계획 유지보수는 예약 불가, 이력 추세·운영위원회 승인 불필요',
    '<strong>Web Services</strong> 최대 장점 = <strong>효율적 인터페이싱(Interoperability)</strong> — OS·프로그래밍 언어 무관하게 시스템 간 정보 교환 (보안·성능·문서화 향상 아님)',
    'OS 패치 운영 적용 최우선 = <strong>정보 자산 소유자(Information Asset Owner) 승인</strong> — 비즈니스 중단 방지 (벤더 테스트 전제, 보안 담당자 매번 승인 불필요)',
    '<strong>SCADA</strong> 리스크 기반 감사 최우선 = <strong>통신 아키텍처·연결 인터페이스 평가</strong> — 인터넷·USB 통한 악성코드 노출 리스크(Stuxnet) (센서/모니터·TCO·사용성은 하위 우선순위)',
    'OS 보안 구성 감사 = <strong>파라미터 설정(Parameter Settings)</strong> 검토 — 시스템 실행 방식 결정 (트랜잭션 로그=앱 수준, 인가 테이블=논리 접근, 라우팅 테이블=OS 무관)',
    'LAN 구현 검토 순서 = <strong>네트워크 다이어그램 FIRST</strong> → 노드 목록 → 수용 테스트 보고서 → 사용자 목록 (다이어그램으로 리스크·단일 장애점 먼저 식별)',
    '<strong>Protocol Analyzer</strong> = 네트워크 진단 도구(패킷 모니터링·기록) / Online Monitor=전송 정확성·완전성 / Downtime Report=가용성 추적 / Help Desk Report=운영 문제 보고'
  ]
},
{
  icon: "📞", title: "IT 운영 / 서비스 관리",
  rules: [
    '헬프데스크 주요 우려 = <strong>최종 사용자 확인 없이 인시던트 종료</strong> — 서비스 지향 조직이므로 사용자 통보 후 종결 필수 (미해결 콜=에스컬레이션으로 처리, 전용 회선·메신저 부재=부차적)',
    '비인가 SW 의심 시 FIRST = <strong>테스트로 사용 여부 검증</strong> — 경영진 진술만으로 불충분, 충분한 증거 확보 후 보고서 포함 (독립적 검증 원칙)',
    '비인가 SW 발견 시 = <strong>사용 보고 + 재발 방지 필요성 권고</strong> — 감사인은 직접 삭제 X(집행자 역할 X), 사용자 경고는 감사인 1차 책임 아님',
    '오픈소스 SW 최대 우려 = <strong>라이선스 조건 준수(License Compliance)</strong> — Viral License(GPL 등)=완성 제품도 동일 권리 부여 의무 → 지적재산권·법적 리스크 (무료·보안·신뢰성은 하위)',
    '데스크톱 SW 준수 검토 최대 우려 = <strong>승인 표준 목록에 없는 SW 설치</strong> — 정책 위반(보안·법적·재정 리스크) / 미문서화·미교육·라이선스 만료는 하위',
    '정책에 비인가 SW 언급 없을 때 = <strong>보안 정책 업데이트 권고</strong> — 정책이 기술 통제의 권한 근거 (IT 부서 통제 구현은 정책 후, 다운로드 차단만으론 CD/USB 미해결)'
  ]
},
{
  icon: "⏰", title: "작업 스케줄링 / 운영 통제",
  rules: [
    '작업 실행 로그 vs 스케줄 비교 최대 우려 = <strong>운영자가 작업을 오버라이드</strong> — 비인가 데이터·프로그램 변경 가능 (긴급 변경=문서화 시 허용, 미완료=조사 대상, 스케줄만 실행=정상)',
    'UAT 후 운영 코드 변조 → 완화 통제 = <strong>직무 분리(SoD)</strong> — 개발자는 개발 환경만 접근, 운영 접근 차단 (회귀 테스트·감사 추적·접근 검토는 근본 원인 해결 아님)',
    '운영 서버 보안 패치 검증 최선 = <strong>자동화 도구(Automated Tool)</strong> — 즉시 패치 적용·누락 보고서 제공 (자동 업데이트=적용 보장 X, 수동 샘플=비효율·감사 리스크, 변경 로그=최신 미반영 가능)',
    '데이터 처리 오류 <strong>탐지</strong> 최선 = <strong>Hash Totals</strong> — 데이터 무결성 오류 탐지 / Edit Check·입력 화면·SoD = <strong>예방</strong> 통제 (탐지 vs 예방 구분!)'
  ]
},
{
  icon: "🔗", title: "시스템 인터페이스 / 데이터 전송",
  rules: [
    'FTP 수동 암호화 최대 우려 = <strong>사용자가 암호화 잊을 수 있음</strong> — 미암호화 전송 시 민감 데이터 노출 (자격 증명 이메일 전송=암호화 시 도난해도 읽기 불가, 공유 ID=책임추적보다 데이터 보호가 우선)',
    '분산 시스템 컴포넌트 간 통신·조정 = <strong>API</strong> — 규칙·프로토콜 정의로 데이터 교환 / MQ=비동기 메시지(범용X) / RPC=원격 프로시저 호출(조정 특화X) / 통신 인프라=플랫폼↔인프라 인터페이스',
    '클라우드 인프라·서비스 접근 = <strong>API</strong> — 클라우드 서비스 통합·리소스 접근·작업 수행 (SNMP=네트워크 장치 모니터링, RPC=원격 함수 실행, 회선 게이트웨이=네트워크 전환)'
  ]
},
{
  icon: "👤", title: "Shadow IT / 최종 사용자 컴퓨팅",
  rules: [
    '업무 시간 네트워크 성능 저하 원인 = <strong>비인가 네트워크 활동(Unauthorized Activities)</strong> — 파일 공유·도박·대용량 개인 이메일 (맬웨어·방화벽·스팸은 업무 시간에만 제한되지 않음)',
    '개인 저장 장치(USB/사진 액자 등) 연결 최대 리스크 = <strong>맬웨어 감염</strong> — 공장 제조 시 감염 가능, 기업 전체 광범위·심각 피해 (데이터 유출·드라이버 충돌·부적절 콘텐츠는 하위)',
    '<strong>EUC(최종 사용자 컴퓨팅)</strong> 주요 리스크 = <strong>테스트·IT 일반 통제 미적용</strong> — 독립 검토 부재, 정식 개발 방법론 미사용, 표준·통제·QA·문서화 부족 (비용·시간은 오히려 감소, 유연성은 증가)'
  ]
},
{
  icon: "📊", title: "가용성 / 용량 관리 / 네트워크 관리",
  rules: [
    '네트워크 관리 핵심 구성요소 = <strong>구성·변경 관리(Configuration & Change Mgmt)</strong> — 내부·외부 동작 방식 결정, 기본 비밀번호 제거, 불필요 서비스 비활성화 (토폴로지 매핑=SPOF 식별, 모니터링·프록시=부분적)',
    'IT 자원 지속적 모니터링 최우선 초점 = <strong>정확한 가용성/용량 피드백</strong> — SLA 충족 확인·계획 데이터·예측보다 정확한 현황 파악이 핵심 (시스템 오프라인이어도 SLA 충족 가능)',
    'RTO 낮을수록 = <strong>복구 비용 증가</strong> — 허용 중단 시간↓ → 고가용성 전략 필요 → 비용↑ (RPO=데이터 손실, RTO=중단 시간)',
    'SW 업그레이드 실패 시 이전 상태 복원 = <strong>Back-out 절차</strong> — 변경 통제(Change Control) 프로세스의 핵심 요소 (문제관리=추적·분석, 인시던트관리=운영 오류 처리)',
    '대체 사이트(Hot/Warm/Cold) 계약 핵심 = <strong>동시 사용 가능 구독자 수</strong> — 총 구독자 수보다 동시 이용 제한이 핵심 (물리 보안·레퍼런스는 계약 조항 아님)',
    '기술 용량 모니터링 주 목적 = <strong>SLA(서비스 수준) 충족 보장</strong> — HW 조달·미래 예측·최적 운영은 부차적, IT의 1차 의무는 비즈니스 서비스 수준 요구 충족',
    'SaaS SLA 가용성 모니터링 최선 = <strong>자체 폴링 도구(내부 모니터링)</strong> — 벤더 보고서만으로 부족, 사용자 보고는 누락 가능, 제3자는 비용 비효율적',
    '웹 애플리케이션 무중단 접근 보장 = <strong>로드 밸런싱</strong> — 다중 서버 트래픽 분산 + 서버 장애 시 자동 리디렉션 (미러링·RAID=디스크만, DNS=가용성 무관)',
    '<strong>이중 IPF</strong> 실행 가능성 핵심 = <strong>주 사이트 워크로드 모니터링</strong> — 백업 용량 충분성 보장 (근접 위치=재해 동시 피해 위험, 최신 HW≠호환성, 설치 시 테스트만으로 부족→정기 테스트 필요)',
    '장애 유형별 대응: <strong>서버 장애=클러스터링</strong>(자동 인계) / 통신 장애=이중 경로·다이얼 백업 / 전원 장애=UPS·대기 전원 — 문제가 묻는 장애 유형 정확히 매칭!',
    '성능 우려 시 최우선 = <strong>Baseline 개발 + 모니터링</strong> — 실증 데이터 확보 후 판단 (즉시 변경 ✗, 대체 절차 ✗, 매뉴얼 ✗)',
    '시스템 파라미터 검토 PRIMARY = <strong>보안+성능 균형</strong> — 설정 자체가 올바라야 감사추적·승인·접근제한이 유효 (잘못된 설정+완벽한 통제=여전히 악영향)',
    '피크 시간 다운타임 위험 = <strong>물리 인프라 예방 정비</strong>(전기·냉각) — 사고 시 즉시 다운 / 데이터 마이그레이션=성능 저하(≠다운타임), 스테이징·대기 장비=영향 없음'
  ]
}
]
}
];

// ============================================================
// QUESTIONS DATABASE
// ============================================================

// CISA Study Hub - Questions Database
// Add new questions to this file. HTML will auto-load them.
// Format: { id, domain, ks, question, options[], correct, explanation, reference, keyConcepts[] }

const QUESTIONS = [

// ============================================================
// Q1 - Stress Testing
// ============================================================
{
id: 1,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `이상적으로, 스트레스 테스트는 다음 환경에서 수행되어야 한다:<br><small style="color:#94a3b8">Ideally, stress testing should be carried out in a:</small>`,
options: [
  "테스트 데이터를 사용하는 테스트 환경.",
  "실제 워크로드를 사용하는 운영 환경.",
  "실제 워크로드를 사용하는 테스트 환경.",
  "테스트 데이터를 사용하는 운영 환경."
],
correct: 2,
explanation: `
<p><strong>핵심: "스트레스 테스트는 어디서, 무엇으로?"</strong></p>
<p>두 가지 조건이 동시에 필요:</p>
<table>
<tr><th>조건</th><th>이유</th></tr>
<tr><td><strong>테스트 환경</strong></td><td>운영 환경에서 하면 서비스 장애 위험</td></tr>
<tr><td><strong>실제 워크로드</strong></td><td>가짜 데이터로는 실제 부하 패턴 재현 못 함</td></tr>
</table>
<p><strong style="color:#10b981">C만 두 조건을 모두 충족</strong></p>

<p style="margin-top:1.2rem"><strong>선지별 분석</strong></p>
<table>
<tr><th>선지</th><th>환경</th><th>데이터</th><th>판정</th></tr>
<tr><td>A</td><td>테스트 O</td><td>테스트 데이터 X</td><td>부하 재현 불충분</td></tr>
<tr><td>B</td><td>운영 X</td><td>실제 워크로드 O</td><td>서비스 장애 위험</td></tr>
<tr><td style="color:#10b981"><strong>C 정답</strong></td><td style="color:#10b981">테스트 O</td><td style="color:#10b981">실제 워크로드 O</td><td style="color:#10b981"><strong>정답</strong></td></tr>
<tr><td>D</td><td>운영 X</td><td>테스트 데이터 X</td><td>둘 다 부적절 (최악)</td></tr>
</table>

<div class="wp"><strong>A를 고르기 쉬운 함정:</strong> 테스트 환경은 맞지만 테스트 데이터만으로는 실제 운영의 트래픽 패턴, 데이터 크기, 동시 접속을 재현할 수 없음.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>테스트는 절대 운영 환경에서 하지 않는다</strong> — CISA 철칙</li>
<li><strong>스트레스 테스트 = 실제 워크로드 필수</strong></li>
<li><strong>"환경"과 "데이터"를 분리해서 판단</strong>하면 소거법으로 바로 풀림</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Systems Development Life Cycle, ISACA Review Manual - Testing Methodologies, ISACA QAE Database - Domain 3",
keyConcepts: [
  "Stress Testing (스트레스 테스트)|시스템의 성능 한계점(breaking point)을 찾는 테스트. 예상 최대 부하(peak load) 이상을 걸어서 시스템이 견디는지 확인. Volume Testing, Load Testing과 함께 '성능 테스트' 범주.",
  "Test Environment (테스트 환경)|운영 환경과 분리된 테스트 전용 환경. CISA 철칙: 모든 테스트는 반드시 테스트 환경에서 수행. 단, 운영 환경과 최대한 유사하게 구성해야 함.",
  "Live Workload (실제 워크로드)|운영에서 실제 발생하는 수준의 데이터와 트랜잭션. 테스트 데이터는 인위적이라 실제 부하 재현 못 할 수 있음. 스트레스 테스트에는 반드시 실제 워크로드 사용.",
  "SDLC 테스트 순서 (시험 빈출)|Unit(단위) > Integration(통합) > System(시스템) > UAT(사용자 수용) > Stress/Performance(스트레스/성능). 각 단계별 목적과 수행자 구분 필요.",
  "테스트 데이터 vs 실제 워크로드|테스트 데이터: 개발팀이 만든 인위적 데이터, 기능 검증용. 실제 워크로드: 운영 수준 트래픽/데이터, 성능/스트레스 검증용."
]
},

// ============================================================
// Q2 - White Box Testing
// ============================================================
{
id: 2,
domain: "3",
ks: "3B1 정보 시스템 구현",
question: `화이트 박스 테스트의 구체적인 장점은 다음과 같습니다.<br><small style="color:#94a3b8">A specific advantage of white-box testing is that it:</small>`,
options: [
  "프로그램이 시스템의 다른 부분과 성공적으로 연동하여 작동할 수 있는지 검증합니다.",
  "프로그램의 내부 구조와 관계없이 프로그램의 기능적 운영 효율성을 보장합니다.",
  "프로그램의 특정 논리 경로의 절차적 정확성 또는 조건을 결정합니다.",
  "호스트 시스템에 대한 접근이 제한된 엄격하게 통제된 환경 또는 가상 환경에서 프로그램을 실행하여 프로그램의 기능을 검사합니다."
],
correct: 2,
explanation: `
<p><strong>핵심: 화이트 박스 테스트 = 코드 내부를 들여다보고 테스트</strong></p>
<p>"화이트 박스"라는 이름 자체가 <strong>"상자를 열어서 안을 본다"</strong>는 뜻. 코드의 <strong>논리 경로(logic path)</strong>를 따라가며 정확한지 확인.</p>

<p style="margin-top:1.2rem"><strong>선지별 분석</strong></p>
<table>
<tr><th>선지</th><th>설명</th><th>실제 테스트 유형</th></tr>
<tr><td>A</td><td>다른 시스템과 연동 확인</td><td>호환성(Compatibility) 테스트</td></tr>
<tr><td>B</td><td>내부 구조 모르고 기능만 테스트</td><td>블랙박스(Black Box) 테스트</td></tr>
<tr><td style="color:#10b981"><strong>C 정답</strong></td><td style="color:#10b981">논리 경로의 절차적 정확성 확인</td><td style="color:#10b981"><strong>화이트박스 테스트</strong></td></tr>
<tr><td>D</td><td>격리/가상 환경에서 실행</td><td>샌드박스(Sandbox) 테스트</td></tr>
</table>

<p style="margin-top:1.2rem"><strong>테스트 유형 비교 (시험 빈출!)</strong></p>
<table>
<tr><th>테스트</th><th>별명</th><th>핵심</th><th>수행자</th></tr>
<tr><td><strong>White Box</strong></td><td>Structural, Glass Box</td><td>코드 내부 논리 경로 검증</td><td>개발자</td></tr>
<tr><td><strong>Black Box</strong></td><td>Functional</td><td>기능만 테스트, 내부 구조 모름</td><td>사용자/QA</td></tr>
<tr><td><strong>Sandbox</strong></td><td>-</td><td>격리된/가상 환경에서 실행</td><td>보안팀</td></tr>
<tr><td><strong>Compatibility</strong></td><td>Interface</td><td>다른 시스템과 연동 테스트</td><td>개발/QA</td></tr>
</table>

<div class="wp"><strong>번역체 함정:</strong> "절차적 정확성 또는 조건" = procedural accuracy or conditions = 쉽게 말하면 <strong>"코드 로직이 맞는지"</strong>. "논리 경로" = logic path = 코드에서 if/else 등 <strong>분기 흐름</strong>.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>White Box = 내부를 본다 = 코드 논리 경로 검증</strong></li>
<li><strong>Black Box = 외부만 본다 = 기능만 테스트</strong></li>
<li>선지에 "내부 구조 관계없이" 나오면 블랙박스</li>
<li>선지에 "논리 경로/로직" 나오면 화이트박스</li>
<li><strong>Sandbox = 격리 환경</strong>, Compatibility = 연동 테스트</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Testing Methodologies, Domain 3 - IS Acquisition Development and Implementation",
keyConcepts: [
  "White Box Testing (화이트박스 테스트)|프로그램 내부 코드/로직을 직접 보면서 테스트. Structural Test, Glass Box Test라고도 함. 논리 경로(logic path)의 정확성을 검증. 개발자가 수행.",
  "Black Box Testing (블랙박스 테스트)|프로그램 내부 구조를 모르는 상태에서 기능만 테스트. Functional Test라고도 함. 입력에서 출력이 기대대로 나오는지 확인. 사용자/QA가 수행.",
  "Sandbox Testing (샌드박스 테스트)|격리된 환경(가상 머신 등)에서 프로그램을 실행하여 안전하게 테스트. 악성코드 분석이나 보안 테스트에 주로 사용.",
  "Compatibility Testing (호환성 테스트)|프로그램이 다른 시스템/모듈과 연동하여 정상 작동하는지 확인하는 테스트. Interface Testing이라고도 함.",
  "Logic Path (논리 경로)|코드에서 if/else, switch, loop 등 분기 흐름을 의미. 화이트박스 테스트에서 이 경로들을 모두 커버하는지 확인함."
]
},

// ============================================================
// Q3 - Prototyping & Change Control
// ============================================================
{
id: 3,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `프로토타이핑을 사용하여 개발 중인 비즈니스 애플리케이션 시스템의 변경 통제는 다음으로 인해 복잡해질 수 있다:<br><small style="color:#94a3b8">Change control for business application systems being developed using prototyping can be complicated by the:</small>`,
options: [
  "프로토타이핑의 반복적 특성.",
  "요구사항과 설계 수정의 빠른 속도.",
  "보고서와 화면에 대한 강조.",
  "통합 도구의 부족."
],
correct: 1,
explanation: `
<p><strong>핵심: "프로토타이핑의 특성" vs "변경 통제에 악영향을 주는 것"을 구분!</strong></p>
<p>A, C, D 모두 프로토타이핑의 특성은 맞지만, <strong>변경 통제(Change Control)에 악영향</strong>을 주는 건 B뿐.</p>

<table>
<tr><th></th><th>프로토타이핑 특성?</th><th>변경 통제에 악영향?</th></tr>
<tr><td><strong>A. 반복적 특성</strong></td><td>O</td><td>X</td></tr>
<tr><td style="color:#10b981"><strong>B. 빠른 수정 속도 (정답)</strong></td><td style="color:#10b981">O</td><td style="color:#10b981"><strong>O - 이것만 해당</strong></td></tr>
<tr><td><strong>C. 보고서/화면 강조</strong></td><td>O</td><td>X</td></tr>
<tr><td><strong>D. 통합 도구 부족</strong></td><td>O</td><td>X</td></tr>
</table>

<p>프로토타이핑은 <strong>수정이 너무 빨리 일어나서</strong> 변경 사항이 <strong>문서화되지 않거나 승인 절차를 거치지 않는</strong> 문제가 생김.</p>

<div class="wp"><strong>함정:</strong> 4개 선지 모두 프로토타이핑의 "특성"은 맞음. "특성이 맞다"와 "그게 문제를 일으킨다"는 다른 질문!</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Prototyping</strong> = 빠르게 시제품 만들고 반복 수정하는 개발 방법</li>
<li><strong>Change Control</strong> = 변경사항을 공식적으로 문서화/승인/추적하는 절차</li>
<li>프로토타이핑의 문제: <strong>수정이 너무 빨라서 문서화/승인이 안 됨</strong></li>
<li>CISA 팁: 질문이 "특성"을 묻는지 "문제점"을 묻는지 구분하라!</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Prototyping, Domain 3",
keyConcepts: [
  "Prototyping (프로토타이핑)|빠르게 시제품을 만들고 사용자 피드백을 받아 반복적으로 수정하는 개발 방법. 장점: 빠른 피드백. 단점: 변경 통제 어려움, 문서화 부족.",
  "Change Control (변경 통제)|시스템 변경사항을 공식적으로 요청/승인/문서화/추적하는 절차. 변경관리위원회(CCB)가 승인. 프로토타이핑에서는 수정 속도가 빨라 이 절차가 무시되기 쉬움.",
  "SDLC 개발 방법론 비교|Waterfall: 순차적, 문서 중심. Prototyping: 반복적, 빠른 수정. Agile: 짧은 스프린트, 점진적. RAD: 빠른 개발, 도구 활용. 각 방법론의 장단점과 변경 통제 리스크 구분 필요."
]
}

// ============================================================
// Q4 - Post-implementation Review
// ============================================================
,{
id: 4,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `한 조직이 최근 자체 개발한 고객 관계 관리(CRM) 애플리케이션을 배포했다. 해당 애플리케이션이 설계된 대로 운영되는지 확인하기 위한 최선의 방법은 다음 중 무엇인가?<br><small style="color:#94a3b8">An organization recently deployed a customer relationship management application that was developed in-house. Which of the following is the BEST option to ensure that the application operates as designed?</small>`,
options: [
  "사용자 수용 테스트 (UAT)",
  "프로젝트 리스크 평가",
  "구현 후 검토 (Postimplementation Review)",
  "경영진의 시스템 승인"
],
correct: 2,
explanation: `
<p><strong>핵심: "설계대로 작동하는가?"를 가장 포괄적으로 확인하는 방법은?</strong></p>
<p>Post-implementation Review는 프로젝트 결과가 <strong>원래 목표/요구사항/산출물과 일치하는지 전체적으로 평가</strong>하는 활동. UAT, 경영진 승인 등을 모두 포함하는 상위 검토.</p>

<table>
<tr><th>활동</th><th>목적</th><th>범위</th><th>판정</th></tr>
<tr><td>A. UAT</td><td>사용자가 수용 가능한지</td><td>일부 기능 (subset)</td><td>부분적</td></tr>
<tr><td>B. Risk Assessment</td><td>리스크 식별</td><td>리스크만, 설계 검증 X</td><td>목적 불일치</td></tr>
<tr><td style="color:#10b981"><strong>C. Post-impl Review 정답</strong></td><td style="color:#10b981"><strong>설계 목표 달성 여부 전체 평가</strong></td><td style="color:#10b981"><strong>전체 (UAT 포함)</strong></td><td style="color:#10b981"><strong>가장 포괄적</strong></td></tr>
<tr><td>D. Management Approval</td><td>경영진 승인</td><td>축소 기능으로도 가능</td><td>불충분</td></tr>
</table>

<div class="wp"><strong>A(UAT)를 고르기 쉬운 함정:</strong> UAT도 "작동 확인"처럼 보이지만, UAT는 일부 기능만 테스트하는 것이고, "사용자 관점에서 쓸 만한가?"를 보는 것. "설계대로 되었나?"를 종합 평가하는 건 Post-implementation Review.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Post-implementation Review</strong> = 구현 후 전체 목표 달성 여부를 평가하는 최종 검토</li>
<li><strong>UAT는 Post-implementation Review의 일부</strong>일 뿐</li>
<li>CISA에서 <strong>"BEST"를 묻는 문제 = 가장 포괄적인 답</strong>을 고르라!</li>
<li>부분적인 답(UAT, 승인)보다 전체를 아우르는 답이 정답</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Post-implementation Review, Domain 3",
keyConcepts: [
  "Post-implementation Review (구현 후 검토)|시스템 구현 후 프로젝트 결과가 원래 목표/요구사항/산출물과 일치하는지 전체적으로 평가. 프로젝트 관리의 효과성도 평가. UAT, 경영진 승인 등을 모두 포함하는 상위 검토.",
  "UAT (사용자 수용 테스트)|최종 사용자가 시스템 기능을 수용할 수 있는지 확인하는 테스트. 전체가 아닌 일부 기능(subset)만 검증. Post-implementation Review의 한 부분.",
  "CISA 'BEST' 문제 풀이법|BEST/MOST를 묻는 문제에서는 가장 포괄적이고 상위 레벨의 답을 선택. 부분적인 답보다 전체를 아우르는 답이 정답일 확률 높음."
]
},

// ============================================================
// Q5 - Sequence Number / Completeness Control
// ============================================================
{
id: 5,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `한 조직이 자사의 보안 웹사이트에서 온라인으로 책과 음악을 판매한다. 거래는 매시간 회계 시스템과 배송 시스템으로 전송되어 처리된다. 보안 웹사이트에서 처리된 매출이 두 시스템 모두에 전송되었는지를 가장 잘 보장하는 통제는 다음 중 무엇인가?<br><small style="color:#94a3b8">An organization sells books and music online on its secure website. Transactions are transferred to the accounting and delivery systems every hour to be processed. Which of the following controls BEST ensures that sales processed on the secure website are transferred to both systems?</small>`,
options: [
  "거래 합계가 매일 판매 시스템에 기록된다. 일일 판매 시스템 합계는 집계되어 총계가 산출된다.",
  "거래에 자동으로 연속 번호가 부여된다. 순번을 확인하여 연속성의 갭을 파악한다.",
  "처리 시스템이 중복 거래 번호를 확인한다. 거래 번호가 중복(이미 존재)되면 거부된다.",
  "중앙 집중식 시간 서버를 사용하여 매시간 시스템 시간을 동기화한다. 모든 거래에는 날짜/시간 스탬프가 있다."
],
correct: 1,
explanation: `
<p><strong>핵심: "완전성(Completeness)" — 모든 거래가 빠짐없이 전송되었는가?</strong></p>
<p>순번(Sequence Number)을 자동으로 매기면: 1, 2, 3, <strong style="color:#ef4444">5</strong> → <strong>4가 빠졌다</strong>는 걸 바로 알 수 있음.</p>

<table>
<tr><th>통제</th><th>뭘 검증?</th><th>완전성?</th></tr>
<tr><td>A. 일일 합계</td><td>매출 시스템 내 합계</td><td>전송 여부 확인 X</td></tr>
<tr><td style="color:#10b981"><strong>B. 순번 + 갭 확인 (정답)</strong></td><td style="color:#10b981"><strong>누락 거래 식별</strong></td><td style="color:#10b981"><strong>완전성 검증 O</strong></td></tr>
<tr><td>C. 중복 체크</td><td>중복 방지 (정확성)</td><td>누락 감지 X</td></tr>
<tr><td>D. 시간 스탬프</td><td>시간 정확성</td><td>누락 감지 X</td></tr>
</table>

<div class="wp"><strong>C를 고르기 쉬운 함정:</strong> 중복 체크는 <strong>정확성(Accuracy)</strong> 통제이지, <strong>완전성(Completeness)</strong> 통제가 아님. "이미 있는 거래를 또 보내면 거부"하는 것이지, "안 보낸 거래가 있는지"는 모름.</div>

<p style="margin-top:1.2rem"><strong>데이터 전송 통제 유형 비교</strong></p>
<table>
<tr><th>통제 목적</th><th>통제 방법</th><th>키워드</th></tr>
<tr><td><strong>완전��(Completeness)</strong></td><td>순번 체크, 배치 합계, 레코드 카운트</td><td>gap, missing, all transactions</td></tr>
<tr><td><strong>정확성(Accuracy)</strong></td><td>중복 체크, 해시 합계</td><td>duplicate, hash total</td></tr>
<tr><td><strong>적시성(Timeliness)</strong></td><td>시간 스탬프, SLA</td><td>date/time, delay</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>완전성(Completeness) 확인 = 순번(Sequence) 체크</strong>가 핵심</li>
<li><strong>중복 체크 = 정확성(Accuracy)</strong>, 완전성 아님!</li>
<li>CISA에서 "전송 완전성"을 묻는 문제 → 순번 갭 확인이 거의 항상 정답</li>
<li>합계(total)는 같은 시스템 내 확인용, 시스템 간 전송 확인에는 부족</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Application Controls - Input/Processing/Output Controls, Domain 3",
keyConcepts: [
  "Completeness (완전성)|모든 거래가 빠짐없이 처리/전송되었는지 확인. 주요 통제: 순번 체크(sequence check), 배치 합계(batch total), 레코드 카운트(record count). 갭(gap)이 있으면 누락.",
  "Sequence Check (순번 체크)|거래에 자동으로 연속 번호를 부여하고 갭을 확인하는 통제. 완전성(Completeness) 검증의 핵심 방법. 1,2,3,5 → 4 누락 즉시 감지.",
  "Accuracy vs Completeness|정확성: 데이터가 올바른가? (중복 체크, 해시 합계). 완전성: 데이터가 빠짐없는가? (순번 체크, 레코드 카운트). CISA 시험에서 이 둘을 혼동하게 만드는 문제 자주 출제."
]
},

// ============================================================
// Q6 - Project Initiation / Stakeholders
// ============================================================
{
id: 6,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `일반적으로, 프로젝트의 착수(Initiation) 단계에서 참여시키는 것이 필수적인 이해관계자는 다음 중 누구인가?<br><small style="color:#94a3b8">Normally, it is essential to involve which of the following stakeholders in the initiation stage of a project?</small>`,
options: [
  "시스템 소유자 (System Owners)",
  "시스템 사용자 (System Users)",
  "시스템 설계자 (System Designers)",
  "시스템 구축자 (System Builders)"
],
correct: 0,
explanation: `
<p><strong>핵심: 착수(Initiation) = "이 프로젝트를 할 것인가? 예산은?" → 결정권자 = System Owner</strong></p>
<p>System Owner = 프로젝트 스폰서(후원자). 프로젝트를 <strong>승인하고 예산을 확보</strong>하는 사람.</p>

<p style="margin-top:1.2rem"><strong>SDLC 단계별 핵심 참여자</strong></p>
<table>
<tr><th>SDLC 단계</th><th>핵심 참여자</th><th>하는 일</th></tr>
<tr><td style="color:#10b981"><strong>Initiation (착수)</strong></td><td style="color:#10b981"><strong>System Owner</strong></td><td style="color:#10b981">프로젝트 승인, 예산 확보</td></tr>
<tr><td>Requirements (요구사항)</td><td>System User</td><td>요구사항 정의</td></tr>
<tr><td>Design (설계)</td><td>System Designer</td><td>기술 솔루션 설계</td></tr>
<tr><td>Build (구축)</td><td>System Builder</td><td>설계 기반 시스템 구축</td></tr>
<tr><td>Test (테스트)</td><td>System User</td><td>UAT 수행</td></tr>
</table>

<div class="wp"><strong>B(사용자)를 고르기 쉬운 함정:</strong> 사용자도 중요하지만, 착수 단계에서는 아직 요구사항을 논의하는 게 아님. "프로젝트를 시작할지 말지"를 결정하는 단계이므로 Owner가 핵심.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>System Owner</strong> = 스폰서, 프로젝트 착수/예산 책임</li>
<li><strong>System User</strong> = 요구사항 정의 + UAT 단계에서 핵심</li>
<li><strong>System Designer</strong> = 요구사항을 기술 솔루션으로 변환</li>
<li><strong>System Builder</strong> = 설계자 명세 기반 구축 (보통 Designer와 동일인)</li>
<li>SDLC 각 단계마다 <strong>누가 핵심 참여자인지</strong> 구분!</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Project Initiation, Domain 3",
keyConcepts: [
  "System Owner (시스템 소유자)|프로젝트 스폰서/후원자. 프로젝트를 착수(initiate)하고 예산을 확보(fund)하는 책임. 시스템 개발/운영/유지보수 전체의 최종 책임자.",
  "System User (시스템 사용자)|시스템을 사용하거나 영향을 받는 사람. 요구사항 정의, 설계 검증, UAT(사용자 수용 테스트) 단계에서 핵심 역할.",
  "SDLC 단계별 참여자|Initiation: Owner. Requirements: User. Design: Designer. Build: Builder. Test: User. 각 단계의 핵심 참여자를 구분하는 문제 자주 출제."
]
},

// ============================================================
// Q7 - Tight Timeline / UAT Priority
// ============================================================
{
id: 7,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `새로운 시스템을 짧은 기간 내에 구현해야 할 때, 가장 중요한 것은 다음 중 무엇인가?<br><small style="color:#94a3b8">When a new system is to be implemented within a short time frame, it is MOST important to:</small>`,
options: [
  "사용자 매뉴얼 작성을 완료한다.",
  "사용자 수용 테스트(UAT)를 수행한다.",
  "마지막 순간에 기능 개선 사항을 추가한다.",
  "코드가 문서화되고 검토되었는지 확인한다."
],
correct: 1,
explanation: `
<p><strong>핵심: 시간이 부족할 때 절대 생략 불가 = UAT</strong></p>
<p>UAT를 안 하면 시스템이 제대로 작동하는지 보장할 수 없음. 잘못된 시스템 배포 시 더 큰 비용.</p>

<table>
<tr><th>활동</th><th>생략 시 결과</th><th>나중에 보완?</th></tr>
<tr><td>A. 매뉴얼</td><td>사용자 불편</td><td>O</td></tr>
<tr><td style="color:#10b981"><strong>B. UAT (정답)</strong></td><td style="color:#10b981"><strong>시스템 오작동 위험</strong></td><td style="color:#10b981"><strong>X (배포 후엔 늦음)</strong></td></tr>
<tr><td>C. 기능 추가</td><td>기능 부족</td><td>O (다음 릴리즈)</td></tr>
<tr><td>D. 코드 문서화</td><td>유지보수 어려움</td><td>O</td></tr>
</table>

<div class="wp"><strong>C가 최악인 이유:</strong> 촉박한 일정에 기능 추가 시 code freeze 필요 + 추가 테스트 필요 = 일정 더 지연. 추가 기능은 future enhancement로.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>시간 부족 시 최우선 = UAT</strong> (시스템 정상 작동 확인)</li>
<li>매뉴얼, 문서화는 중요하지만 UAT보다 우선순위 낮음</li>
<li>촉박한 일정에 기능 추가는 금물 (future enhancement로)</li>
<li><strong>Code Freeze</strong> = 코드 변경 금지 후 테스트 수행</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Implementation / UAT, Domain 3",
keyConcepts: [
  "UAT 우선순위|시간이 부족해도 UAT는 절대 생략 불가. 시스템이 사용자 요구사항대로 작동하는지 확인하는 마지막 관문. 매뉴얼/문서화보다 우선.",
  "Code Freeze (코드 동결)|일정 시점 이후 코드 변경을 금지하는 것. 이후에는 테스트만 수행. 촉박한 일정에서 새 기능 추가는 code freeze를 깨는 행위.",
  "Future Enhancement|현재 일정에 포함하기 어려운 기능은 다음 릴리즈로 미루는 것. 촉박한 일정에서 기능 추가 대신 사용하는 전략."
]
},

// ============================================================
// Q8 - Initial Validation / Input Controls
// ============================================================
{
id: 8,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템(IS) 감사인이 신용카드 거래 캡처 애플리케이션에 초기 검증(Initial Validation) 통제를 프로그래밍하도록 권고한다. 초기 검증 프로세스는 가장 가능성 높게 다음을 수행한다:<br><small style="color:#94a3b8">An information systems (IS) auditor recommends that an initial validation control be programmed into a credit card transaction capture application. The initial validation process MOST likely:</small>`,
options: [
  "거래 유형이 카드 유형에 유효한지 확인한다.",
  "입력된 번호의 형식을 검증한 후 데이터베이스에서 해당 번호를 조회한다.",
  "입력된 거래가 카드 소유자의 신용 한도 내에 있는지 확인한다.",
  "카드가 마스터 파일에 분실 또는 도난으로 표시되지 않았는지 확인한다."
],
correct: 1,
explanation: `
<p><strong>핵심: "Initial(초기)"이 키워드 — 가장 먼저 하는 검증은 무엇인가?</strong></p>
<p>모든 후속 처리는 카드번호가 유효해야 의미가 있음. 따라서 <strong>번호 형식 검증 + DB 존재 확인</strong>이 초기 검증.</p>

<p><strong>처리 순서</strong></p>
<table>
<tr><th>순서</th><th>검증 내용</th><th>해당 선지</th></tr>
<tr><td style="color:#10b981"><strong>1. 초기</strong></td><td style="color:#10b981"><strong>카드번호 형식 검증 + DB 조회</strong></td><td style="color:#10b981"><strong>B (정답)</strong></td></tr>
<tr><td>2</td><td>분실/도난 여부 확인</td><td>D</td></tr>
<tr><td>3</td><td>신용 한도 확인</td><td>C</td></tr>
<tr><td>4</td><td>거래 유형 확인</td><td>A</td></tr>
</table>

<div class="wp"><strong>C, D를 고르기 쉬운 함정:</strong> 분실/도난 확인(D)이나 한도 확인(C)도 중요한 검증이지만, 카드번호가 유효한지 먼저 확인해야 이 검증들을 할 수 있음. "Initial"이 핵심.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Initial Validation = 입력 데이터의 형식/존재 여부</strong>부터 확인</li>
<li>비즈니스 로직(한도, 분실) 검증은 그 다음 단계</li>
<li>CISA에서 "initial/first" → <strong>가장 기본적인 검증(형식, 존재)</strong>이 정답</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Application Controls - Input Validation, Domain 3",
keyConcepts: [
  "Initial Validation (초기 검증)|입력된 데이터의 형식이 올바른지, DB에 존재하는지 먼저 확인. 비즈니스 로직 검증보다 선행. 신용카드면 번호 형식 + DB 조회가 최초.",
  "Input Validation Controls|입력 통제의 종류: 형식 검사(format check), 범위 검사(range check), 존재 검사(existence check), 합리성 검사(reasonableness check). 초기 검증은 형식+존재부터.",
  "검증 순서 원칙|형식/존재 확인 → 비즈니스 규칙 확인 → 승인. CISA에서 'initial/first'가 붙으면 가장 기본적인 기술적 검증이 정답."
]
},

// ============================================================
// Q9 - System Conversion Strategies
// ============================================================
{
id: 9,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `다음 시스템 및 데이터 전환 전략 중 가장 높은 이중화(redundancy)를 제공하는 것은 무엇인가?<br><small style="color:#94a3b8">Which of the following system and data conversion strategies provides the GREATEST redundancy?</small>`,
options: [
  "직접 전환 (Direct Cutover)",
  "파일럿 스터디 (Pilot Study)",
  "단계적 접근 (Phased Approach)",
  "병행 운영 (Parallel Run)"
],
correct: 3,
explanation: `
<p><strong>핵심: Parallel Run = 구/신 시스템 동시 운영 = 최대 이중화</strong></p>
<p>신 시스템이 실패해도 구 시스템이 돌아가고 있으니 바로 복구 가능. <strong>가장 안전하지만 가장 비쌈</strong> (이중 비용).</p>

<table>
<tr><th>전략</th><th>방식</th><th>위험도</th><th>비용</th></tr>
<tr><td>Direct Cutover</td><td>한 번에 교체</td><td><strong>최고</strong></td><td>최저</td></tr>
<tr><td>Pilot</td><td>일부 사이트 먼저</td><td>중간</td><td>중간</td></tr>
<tr><td>Phased</td><td>모듈별 단계적</td><td>중간</td><td>중간</td></tr>
<tr><td style="color:#10b981"><strong>Parallel Run (정답)</strong></td><td style="color:#10b981">구/신 동시 운영</td><td style="color:#10b981"><strong>최저</strong></td><td style="color:#10b981"><strong>최고</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li>위험도와 비용은 <strong>반비례</strong>: 안전할수록 비싸다</li>
<li><strong>가장 안전 = Parallel</strong> (비쌈) / <strong>가장 위험 = Direct Cutover</strong> (쌈)</li>
<li>Pilot과 Phased는 점진적이라 <strong>롤백이 어려움</strong></li>
<li>"redundancy/가장 안전" → Parallel Run</li>
</ul>
</div>`,
reference: "CRM Chapter 7: System Conversion Strategies, Domain 3",
keyConcepts: [
  "Parallel Run (병행 운영)|구/신 시스템을 동시에 운영하는 전환 전략. 가장 안전하지만 가장 비쌈. 이중화(redundancy) 최대. 신 시스템 실패 시 구 시스템으로 즉시 복구.",
  "Direct Cutover (직접 전환)|한 번에 구 시스템을 끄고 신 시스템으로 교체. 가장 위험하고 가장 저렴. 폴백 옵션 없음.",
  "System Conversion 위험도-비용 관계|안전할수록 비싸다. Parallel(최안전/최비쌈) > Phased > Pilot > Direct Cutover(최위험/최저렴). 시험에서 위험도 또는 비용 순서를 묻는 문제 자주 출제."
]
},

// ============================================================
// Q10 - Conversion Strategy / Greatest Risk
// ============================================================
{
id: 10,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `한 조직이 레거시 시스템을 대체하기 위해 새로운 시스템을 구현하고 있다. 다음 전환 방식 중 가장 큰 위험을 초래하는 것은 무엇인가?<br><small style="color:#94a3b8">An organization is implementing a new system to replace a legacy system. Which of the following conversion practices creates the GREATEST risk?</small>`,
options: [
  "파일럿 (Pilot)",
  "병행 운영 (Parallel)",
  "직접 전환 (Direct Cutover)",
  "단계적 접근 (Phased)"
],
correct: 2,
explanation: `
<p><strong>Q9의 반대 질문! Q9 = "가장 안전" → Parallel / Q10 = "가장 위험" → Direct Cutover</strong></p>

<table>
<tr><th>전략</th><th>위험도</th><th>비용</th><th>특징</th></tr>
<tr><td style="color:#ef4444"><strong>Direct Cutover (정답)</strong></td><td style="color:#ef4444"><strong>최고</strong></td><td>최저</td><td>한 번에 교체, 되돌릴 수 없음</td></tr>
<tr><td>Pilot</td><td>중간</td><td>중간</td><td>일부 사이트 먼저 → 전체 확대</td></tr>
<tr><td>Phased</td><td>중간</td><td>중간</td><td>모듈별 단계적, 한 영역씩</td></tr>
<tr><td>Parallel</td><td>최저</td><td>최고</td><td>구/신 동시 운영, 가장 안전</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li>"가장 위험/GREATEST risk" → <strong>Direct Cutover</strong></li>
<li>"가장 안전/GREATEST redundancy" → <strong>Parallel Run</strong></li>
<li><strong>이 두 문제는 세트로 외우기!</strong></li>
</ul>
</div>`,
reference: "CRM Chapter 7: System Conversion Strategies, Domain 3",
keyConcepts: [
  "Direct Cutover 위험성|한 번에 구 시스템을 끄고 신 시스템 가동. 문제 발생 시 구 시스템으로 복구 불가. 조직에 심각한 영향. 가장 위험하지만 가장 저렴.",
  "전환 전략 세트 문제|'가장 위험' = Direct Cutover / '가장 안전' = Parallel Run. CISA에서 같은 표를 반대로 묻는 문제가 자주 출제됨. 표 하나로 두 문제 해결."
]
},

// ============================================================
// Q11 - Post-implementation Review / Access Control
// ============================================================
{
id: 11,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `전사적 자원 관리(ERM) 시스템의 구현 후 검토(Postimplementation Review) 중에 정보시스템(IS) 감사인이 가장 가능성 높게 수행할 작업은 무엇인가?<br><small style="color:#94a3b8">During a postimplementation review of an enterprise resource management system, an information systems (IS) auditor is MOST likely to:</small>`,
options: [
  "접근 통제 설정을 검토한다.",
  "인터페이스 테스트를 평가한다.",
  "상세 설계 문서를 검토한다.",
  "시스템 테스트를 평가한다."
],
correct: 0,
explanation: `
<p><strong>핵심: Post-implementation = 이미 구현 완료. 테스트는 이미 끝난 단계.</strong></p>
<p>구현 후 감사인이 가장 먼저 확인하는 것 = <strong>"보안이 제대로 설정되었는가?"</strong> = 접근 통제 설정.</p>

<table>
<tr><th>선지</th><th>시점</th><th>판정</th></tr>
<tr><td style="color:#10b981"><strong>A. 접근 통제 검토 (정답)</strong></td><td style="color:#10b981">구현 후</td><td style="color:#10b981"><strong>보안 매핑 확인</strong></td></tr>
<tr><td>B. 인터페이스 테스트</td><td>구현 전</td><td>이미 끝남</td></tr>
<tr><td>C. 상세 설계 문서</td><td>설계 단계</td><td>ERM=벤더 패키지, 해당 없음</td></tr>
<tr><td>D. 시스템 테스트</td><td>구현 전</td><td>이미 끝남</td></tr>
</table>

<div class="wp"><strong>B, D를 고르기 쉬운 함정:</strong> 테스트 평가는 중요하지만, 구현 후에는 이미 끝난 활동. Post-implementation에서는 "지금 운영 중인 시스템의 통제"를 확인.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Post-implementation 감사</strong> = 보안/접근 통제가 제대로 설정되었는지 확인</li>
<li>테스트 평가(B, D)는 구현 전 활동</li>
<li>ERM/ERP = 벤더 패키지 → 상세 설계 문서 일반적으로 불필요</li>
<li>구현 후 감사 우선순위: <strong>접근 통제 > 기능 > 문서</strong></li>
</ul>
</div>`,
reference: "CRM Chapter 7: Post-implementation Review / Access Controls, Domain 3",
keyConcepts: [
  "Post-implementation 감사 포커스|구현 후 감사인은 보안/접근 통제 설정이 제대로 매핑되었는지 최우선 확인. 테스트 평가는 구현 전 활동이라 해당 안 됨.",
  "ERP/ERM 감사 특성|벤더 패키지이므로 상세 설계 문서 검토는 일반적으로 불필요. 설계와 기능 간 갭이 보일 때만 확인. 접근 통제 설정이 핵심 감사 포인트."
]
},

// ============================================================
// Q12 - Implementation Plan / Design Phase
// ============================================================
{
id: 12,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `모범 사례에 따르면, 새로운 정보시스템의 구현을 위한 공식적인 계획은 다음 단계에서 수립된다:<br><small style="color:#94a3b8">Following good practices, formal plans for implementation of new information systems are developed during the:</small>`,
options: [
  "개발(Development) 단계",
  "설계(Design) 단계",
  "테스트(Testing) 단계",
  "배포(Deployment) 단계"
],
correct: 1,
explanation: `
<p><strong>핵심: 구현 방법이 설계에 영향 → 설계 단계에서 미리 계획</strong></p>

<table>
<tr><th>단계</th><th>구현 계획과의 관계</th></tr>
<tr><td style="color:#10b981"><strong>Design (설계) - 정답</strong></td><td style="color:#10b981"><strong>최초 수립</strong></td></tr>
<tr><td>Development (개발)</td><td>업데이트/수정</td></tr>
<tr><td>Testing (테스트)</td><td>관계 없음 (테스트에만 집중)</td></tr>
<tr><td>Deployment (배포)</td><td>계획을 실행</td></tr>
</table>

<div class="wp"><strong>A(개발)를 고르기 쉬운 함정:</strong> 개발 중에 계획을 업데이트하긴 하지만, 최초 수립은 설계 단계. "developed(수립)"과 "updated(업데이트)"를 구분.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>구현 계획 = 설계(Design) 단계에서 수립</strong></li>
<li>설계에서 수립 → 개발에서 업데이트 → 배포에서 실행</li>
<li>구현 방법이 설계에 영향을 줄 수 있으므로 미리 계획</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Design Phase / Implementation Planning, Domain 3",
keyConcepts: [
  "Implementation Plan 수립 시점|설계(Design) 단계에서 최초 수립. 구현 방법이 설계에 영향을 줄 수 있으므로 실제 구현일보다 훨씬 앞서 계획. 개발 중 업데이트, 배포 시 실행.",
  "SDLC 단계별 산출물|각 단계에서 어떤 문서/계획이 만들어지는지 구분 필요. 구현 계획=설계, 테스트 계획=설계, 요구사항 정의서=요구사항 단계."
]
},

// ============================================================
// Q13 - PERT / Project Duration Estimation
// ============================================================
{
id: 13,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `많은 IT 프로젝트가 개발 시간 및/또는 자원 요구사항을 과소 추정하여 문제를 겪는다. 프로젝트 기간 추정을 수립하는 데 가장 큰 도움을 제공하는 기법은 다음 중 무엇인가?<br><small style="color:#94a3b8">Many IT projects experience problems because the development time and/or resource requirements are underestimated. Which of the following techniques provides the GREATEST assistance in developing an estimate of project duration?</small>`,
options: [
  "기능점 분석 (Function Point Analysis)",
  "프로그램 평가 검토 기법 (PERT) 차트",
  "신속 애플리케이션 개발 (Rapid Application Development)",
  "객체지향 시스템 개발"
],
correct: 1,
explanation: `
<p><strong>핵심: PERT = 3점 추정으로 프로젝트 기간을 산출하는 기법</strong></p>
<p>최악(Pessimistic), 최선(Optimistic), 정상(Most Likely) 3가지 시나리오 기반으로 기간 산출 + Critical Path 식별.</p>

<table>
<tr><th>기법</th><th>목적</th></tr>
<tr><td style="color:#10b981"><strong>PERT (정답)</strong></td><td style="color:#10b981"><strong>프로젝트 기간 추정 (3점 추정)</strong></td></tr>
<tr><td>Function Point</td><td>작업 크기 측정 (기간 X)</td></tr>
<tr><td>Gantt Chart</td><td>일정/진행 시각화</td></tr>
<tr><td>COCOMO</td><td>개발 비용 추정</td></tr>
<tr><td>CPM</td><td>임계 경로 식별</td></tr>
</table>

<div class="wp"><strong>A(Function Point) 함정:</strong> 작업의 "크기"를 측정하는 것이지 "기간"을 추정하는 게 아님. 겹치는 작업이 많아서 크기만으로는 기간을 알 수 없음.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>기간 추정 = PERT</strong> (3점: 최악/최선/정상)</li>
<li><strong>크기 측정 = Function Point</strong> (입력/출력/조회 기반)</li>
<li>RAD, 객체지향 = 개발 방법론이지 추정 기법 아님</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Project Management Techniques, Domain 3",
keyConcepts: [
  "PERT (Program Evaluation Review Technique)|3점 추정(최악/최선/정상)으로 프로젝트 기간을 산출. Critical Path(임계 경로) 식별. 어떤 활동이 지연되면 전체 프로젝트가 지연되는지 파악.",
  "Function Point Analysis (기능점 분석)|입력, 출력, 조회, 내부 파일 등의 기능점을 기반으로 작업 크기를 측정. 기간 추정이 아닌 크기 측정 도구.",
  "프로젝트 관리 기법 구분|PERT=기간 추정, Gantt=일정 시각화, Function Point=크기 측정, COCOMO=비용 추정, CPM=임계 경로. 각각의 목적을 구분하는 문제 자주 출제."
]
},

// ============================================================
// Q14 - IS Project Failure / User Participation
// ============================================================
{
id: 14,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템이 사용자 요구를 충족하지 못하는 가장 일반적인 이유는 다음 중 무엇인가?<br><small style="color:#94a3b8">The most common reason for the failure of information systems to meet the needs of users is that:</small>`,
options: [
  "사용자 요구사항이 끊임없이 변화한다.",
  "시스템 요구사항의 증가가 부정확하게 예측되었다.",
  "하드웨어 시스템이 동시 사용자 수를 제한한다.",
  "시스템 요구사항 정의에 사용자 참여가 부적절했다."
],
correct: 3,
explanation: `
<p><strong>핵심: IS 프로젝트 실패 #1 원인 = 요구사항 단계에서 사용자 참여 부족</strong></p>
<p>사용자만이 자신의 요구를 정의할 수 있음. 사용자 참여 없이 만든 시스템은 아무리 기술적으로 완벽해도 요구를 충족 못 함.</p>

<table>
<tr><th>선지</th><th>문제점</th><th>판정</th></tr>
<tr><td>A. 요구 변경</td><td>증상이지 근본 원인 아님</td><td>초기 요구사항이 잘못된 게 원인</td></tr>
<tr><td>B. 예측 부정확</td><td>변경 통제로 완화 가능</td><td>근본 원인 아님</td></tr>
<tr><td>C. 하드웨어 제한</td><td>요구사항이 맞으면 거의 발생 안 함</td><td>드문 경우</td></tr>
<tr><td style="color:#10b981"><strong>D. 사용자 참여 부족 (정답)</strong></td><td style="color:#10b981"><strong>근본 원인</strong></td><td style="color:#10b981"><strong>가장 일반적</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>프로젝트 실패 최대 원인 = 사용자 참여 부족</strong> (특히 요구사항 단계)</li>
<li>요구 변경(A)은 증상, 참여 부족(D)이 원인</li>
<li>사용자만이 자신의 요구를 정의할 수 있다</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Requirements Phase, Domain 3",
keyConcepts: [
  "IS 프로젝트 실패 원인|가장 일반적인 원인은 요구사항 정의 단계에서 사용자 참여 부족. 사용자만이 자신의 요구를 정의할 수 있으므로, 참여 없이는 시스템이 요구를 충족할 수 없음.",
  "요구사항 단계의 중요성|SDLC에서 가장 중요한 단계. 여기서 실패하면 이후 모든 단계가 잘못됨. 사용자 참여가 핵심 성공 요인."
]
},

// ============================================================
// Q15 - Project Portfolio Management
// ============================================================
{
id: 15,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템(IS) 감사인이 복수 프로젝트 관리에 대한 통제의 효과성을 파악하기 위해 검토해야 하는 것은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following should an information systems (IS) auditor review to gain an understanding of the effectiveness of controls over the management of multiple projects?</small>`,
options: [
  "프로젝트 정보",
  "정책 문서",
  "프로젝트 포트폴리오 정보",
  "프로그램 조직"
],
correct: 2,
explanation: `
<p><strong>핵심: "Multiple projects" = 포트폴리오</strong></p>

<table>
<tr><th>용어</th><th>범위</th></tr>
<tr><td>Project</td><td>단일 프로젝트</td></tr>
<tr><td>Program</td><td>관련 프로젝트 그룹</td></tr>
<tr><td style="color:#10b981"><strong>Portfolio (정답)</strong></td><td style="color:#10b981"><strong>전체 프로젝트 총괄 관리</strong></td></tr>
</table>

<p>포트폴리오 정보에는 소유자, 일정, 목표, 유형, 상태, 비용 등 <strong>모든 프로젝트의 데이터</strong>가 포함.</p>

<div class="wp"><strong>A(Project Info) 함정:</strong> 단일 프로젝트의 정보만 포함. "복수 프로젝트"를 보려면 포트폴리오가 필요.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Project</strong> = 단일 / <strong>Program</strong> = 그룹 / <strong>Portfolio</strong> = 전체</li>
<li>"복수 프로젝트 관리" → 포트폴리오</li>
<li>Policy = 방향 설정, Organization = 팀 구성 (통제 효과성 X)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Project Portfolio Management, Domain 3",
keyConcepts: [
  "Project vs Program vs Portfolio|Project=단일, Program=관련 프로젝트 그룹, Portfolio=전체 프로젝트 총괄. 복수 프로젝트 관리 = Portfolio Management.",
  "Project Portfolio Management|모든 프로젝트의 데이터(소유자, 일정, 목표, 상태, 비용)를 총괄 관리. 통제 효과성 파악에 가장 적합한 정보원."
]
},

// ============================================================
// Q16 - Auditor Role / Escalation
// ============================================================
{
id: 16,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `소프트웨어 개발의 테스트 단계 말미에 정보시스템(IS) 감사인은 간헐적인 소프트웨어 오류가 수정되지 않았음을 발견한다. 오류 해결을 위한 어떠한 조치도 취해지지 않은 상태이다. IS 감사인은 어떻게 해야 하는가?<br><small style="color:#94a3b8">At the end of the testing phase of software development, an information systems (IS) auditor observes that an intermittent software error has not been corrected. No action has been taken to resolve the error. The IS auditor should:</small>`,
options: [
  "오류를 발견사항으로 보고하고 추가 검토는 피감사인의 재량에 맡긴다.",
  "오류를 직접 해결한다.",
  "문제 해결을 에스컬레이션하도록 권고한다.",
  "소프트웨어 오류에 대한 객관적 증거를 얻을 수 없으므로 오류를 무시한다."
],
correct: 2,
explanation: `
<p><strong>핵심: 감사인 = 발견 + 권고. 직접 해결 X, 무시 X.</strong></p>

<table>
<tr><th>선지</th><th>문제점</th></tr>
<tr><td>A. 재량에 맡김</td><td>운영 환경으로 넘어갈 위험</td></tr>
<tr><td>B. 직접 해결</td><td>감사인에게 권한 없음 (독립성 위반)</td></tr>
<tr><td style="color:#10b981"><strong>C. 에스컬레이션 권고 (정답)</strong></td><td style="color:#10b981"><strong>적절한 조치 촉구</strong></td></tr>
<tr><td>D. 무시</td><td>감사인 의무 방기</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>감사인 = 발견 + 권고</strong> (직접 수정/구현 = 독립성 위반)</li>
<li>간헐적 오류도 운영 전 반드시 해결 필요</li>
<li>에스컬레이션 = 더 높은 레벨로 올려서 해결 촉구</li>
<li>무시, 재량에 맡기기 = 부적절</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Testing Phase / Auditor's Role, Domain 3",
keyConcepts: [
  "IS 감사인의 역할|발견(identify) + 권고(recommend). 직접 해결/구현하면 독립성 위반. 문제 발견 시 에스컬레이션 권고가 적절한 대응.",
  "에스컬레이션 (Escalation)|문제를 더 높은 관리 레벨로 올려서 해결을 촉구하는 것. 감사인이 직접 해결할 수 없을 때의 적절한 조치."
]
},

// ============================================================
// Q17 - ACID / Atomicity
// ============================================================
{
id: 17,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `온라인 트랜잭션 처리 시스템에서, 거래가 전체적으로 완료되거나 전혀 실행되지 않도록 보장함으로써 데이터 무결성이 유지된다. 이 데이터 무결성의 원칙은 무엇으로 알려져 있는가?<br><small style="color:#94a3b8">In an online transaction processing system, data integrity is maintained by ensuring that a transaction is either completed in its entirety or not at all. This principle of data integrity is known as:</small>`,
options: [
  "격리성 (Isolation)",
  "일관성 (Consistency)",
  "원자성 (Atomicity)",
  "지속성 (Durability)"
],
correct: 2,
explanation: `
<p><strong>핵심: "전부 완료 or 전부 취소" = Atomicity (원자성)</strong></p>
<p>오류/중단 발생 시 그 시점까지의 모든 변경을 되돌림(rollback).</p>

<p><strong>ACID 속성 비교</strong></p>
<table>
<tr><th>속성</th><th>의미</th><th>키워드</th></tr>
<tr><td style="color:#10b981"><strong>Atomicity (원자성)</strong></td><td style="color:#10b981"><strong>전부 완료 or 전부 취소</strong></td><td style="color:#10b981">all or nothing</td></tr>
<tr><td>Consistency (일관성)</td><td>DB 무결성 조건 유지</td><td>integrity conditions</td></tr>
<tr><td>Isolation (격리성)</td><td>트랜잭션 간 간섭 X</td><td>isolated, concurrent</td></tr>
<tr><td>Durability (지속성)</td><td>완료된 트랜잭션 영구 보존</td><td>survive failure</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>ACID 통째로 외우기</strong>: A=전부or전무, C=무결성유지, I=격리, D=영구보존</li>
<li>"all or nothing" → Atomicity</li>
<li>"survive failure" → Durability</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Database Controls / ACID Properties, Domain 3",
keyConcepts: [
  "ACID Properties|데이터베이스 트랜잭션의 4가지 속성. Atomicity(전부or전무), Consistency(무결성유지), Isolation(트랜잭션격리), Durability(완료후영구보존). 시험에서 각 속성의 정의를 구분하는 문제 자주 출제.",
  "Atomicity (원자성)|트랜잭션이 완전히 완료되거나 전혀 실행되지 않는 원칙. 오류 발생 시 rollback. 'all or nothing' 원칙."
]
},

// ============================================================
// Q18 - Scope Management / Scope Creep
// ============================================================
{
id: 18,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템(IS) 감사인이 일련의 완료된 프로젝트들을 검토한 결과, 구현된 기능이 요구사항을 초과하는 경우가 많았고 대부분의 프로젝트가 예산을 크게 초과하였음을 발견했다. 이 문제의 가장 가능성 높은 원인이 되는 조직의 프로젝트 관리 프로세스 영역은 다음 중 무엇인가?<br><small style="color:#94a3b8">An information systems (IS) auditor reviewing a series of completed projects finds that the implemented functionality often exceeded requirements and most of the projects ran significantly over budget. Which of these areas of the organization's project management process is the MOST likely cause of this issue?</small>`,
options: [
  "프로젝트 범위 관리 (Project Scope Management)",
  "프로젝트 시간 관리 (Project Time Management)",
  "프로젝트 리스크 관리 (Project Risk Management)",
  "프로젝트 조달 관리 (Project Procurement Management)"
],
correct: 0,
explanation: `
<p><strong>핵심: "기능이 요구사항 초과" = Scope Creep = 범위 관리 실패</strong></p>
<p>필요한 것보다 더 많은 기능 구현 → 예산 초과. Scope Management = <strong>필요한 작업만, 전부</strong> 포함하도록 관리.</p>

<table>
<tr><th>선지</th><th>관리 대상</th><th>판정</th></tr>
<tr><td style="color:#10b981"><strong>A. Scope (정답)</strong></td><td style="color:#10b981"><strong>프로젝트 범위/기능</strong></td><td style="color:#10b981"><strong>기능 초과 = 범위 관리 실패</strong></td></tr>
<tr><td>B. Time</td><td>일정</td><td>시간 초과 언급 없음</td></tr>
<tr><td>C. Risk</td><td>리스크</td><td>예산 초과는 증상, 원인 아님</td></tr>
<tr><td>D. Procurement</td><td>외부 조달</td><td>외부 구매 문제 아님</td></tr>
</table>

<div class="wp"><strong>C(Risk) 함정:</strong> 예산 초과는 리스크이지만 근본 원인은 기능을 너무 많이 넣은 것. "증상(예산 초과)" vs "원인(범위 확대)"을 구분!</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>기능 초과 + 예산 초과 = Scope Management 실패</strong></li>
<li><strong>Scope Creep</strong> = 범위가 통제 없이 확대되는 현상</li>
<li>증상(예산 초과)이 아닌 근본 원인(범위 확대)을 찾아라</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Project Management / Scope Management, Domain 3",
keyConcepts: [
  "Scope Management (범위 관리)|프로젝트에 필요한 작업만, 그리고 필요한 작업은 전부 포함하도록 관리. 범위 확대(Scope Creep) 방지가 핵심.",
  "Scope Creep (범위 확대)|프로젝트 범위가 통제 없이 확대되는 현상. 기능 초과 구현 → 예산/일정 초과의 주요 원인. 변경 통제(Change Control)로 방지."
]
},

// ============================================================
// Q19 - Software Acquisition / Legal Review
// ============================================================
{
id: 19,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `소프트웨어 획득(Acquisition) 프로세스를 감사하는 정보시스템(IS) 감사인은 다음을 확인할 것이다:<br><small style="color:#94a3b8">An information systems (IS) auditor who is auditing the software acquisition process will ensure that the:</small>`,
options: [
  "계약서가 서명되기 전에 법률 자문의 검토 및 승인을 받았다.",
  "요구사항이 현재 운영 중인 시스템으로는 충족될 수 없다.",
  "요구사항이 비즈니스에 중요한 것으로 확인되었다.",
  "프로세스에서 사용자 참여가 적절하게 이루어졌다."
],
correct: 0,
explanation: `
<p><strong>핵심: 소프트웨어 "획득" = 외부 구매 = 계약이 핵심</strong></p>
<p>계약서 서명 전 <strong>법률 자문(Legal Counsel)</strong>의 검토/승인은 획득 프로세스의 가장 중요한 단계.</p>

<table>
<tr><th>선지</th><th>문제점</th></tr>
<tr><td style="color:#10b981"><strong>A. 법률 자문 검토 (정답)</strong></td><td style="color:#10b981"><strong>획득의 핵심 통제</strong></td></tr>
<tr><td>B. 기존 시스템 불가</td><td>다른 이유로도 획득 가능</td></tr>
<tr><td>C. 요구사항 중요성</td><td>모든 요구가 critical일 필요 없음</td></tr>
<tr><td>D. 사용자 참여</td><td>획득 프로세스에는 필수 아님</td></tr>
</table>

<div class="wp"><strong>D(사용자 참여) 함정:</strong> 사용자 참여는 요구사항 정의 + UAT에서 중요. 획득(구매) 프로세스 자체에는 필수 아님.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>소프트웨어 획득 감사 = 계약서 + 법률 자문 검토 확인</strong></li>
<li>획득(Acquisition) ≠ 개발(Development) → 감사 포인트가 다름</li>
<li>사용자 참여 = 요구사항/UAT 단계 (획득 X)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Software Acquisition Process, Domain 3",
keyConcepts: [
  "Software Acquisition 감사|외부 소프트웨어 구매 시 계약서가 법률 자문(Legal Counsel)의 검토/승인을 받았는지가 핵심 감사 포인트. 서명 전 반드시 확인.",
  "Acquisition vs Development 감사 차이|Acquisition: 계약서, 법률 검토, 벤더 평가가 핵심. Development: 요구사항, 설계, 테스트, 사용자 참여가 핵심. 감사 포인트가 다름."
]
},

// ============================================================
// Q20 - Timebox Management
// ============================================================
{
id: 20,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `다음 중 타임박스 관리(Timebox Management)의 특성은 무엇인가?<br><small style="color:#94a3b8">Which of the following is a characteristic of timebox management?</small>`,
options: [
  "프로토타이핑이나 신속 애플리케이션 개발(RAD)에 적합하지 않다.",
  "품질 프로세스의 필요성을 제거한다.",
  "비용 초과와 납기 지연을 방지한다.",
  "시스템 테스트와 사용자 수용 테스트(UAT)를 분리한다."
],
correct: 2,
explanation: `
<p><strong>핵심: Timebox = 시간/비용 경계를 명확히 설정 → 초과 방지</strong></p>
<p>프로젝트를 작고 통제 가능한 시간 단위로 나눠서 각 구간마다 시간/비용을 엄격히 관리.</p>

<table>
<tr><th>선지</th><th>실제</th></tr>
<tr><td>A. 프로토타이핑/RAD에 부적합</td><td>오히려 <strong>매우 적합</strong></td></tr>
<tr><td>B. 품질 프로세스 불필요</td><td>여전히 <strong>필요</strong></td></tr>
<tr><td style="color:#10b981"><strong>C. 비용/납기 초과 방지 (정답)</strong></td><td style="color:#10b981"><strong>시간/비용 경계 설정</strong></td></tr>
<tr><td>D. 테스트와 UAT 분리</td><td>오히려 <strong>통합</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Timebox</strong> = 시간/비용 경계 → 초과 방지</li>
<li>프로토타이핑, RAD에 적합 / 테스트 통합 / 품질 프로세스 필요</li>
<li>A, D는 정반대로 서술된 함정</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Timebox Management / RAD, Domain 3",
keyConcepts: [
  "Timebox Management|프로젝트를 작은 시간 단위로 나누어 각 구간의 시간/비용 경계를 엄격히 관리. 비용 초과와 납기 지연 방지. 프로토타이핑/RAD에 적합. 테스트를 통합.",
  "Timebox와 RAD의 관계|Timebox는 RAD(Rapid Application Development)의 핵심 기법. 짧은 시간 내에 결과물을 만들어내는 반복적 개발에 적합."
]
},

// ============================================================
// Q21 - Override Controls / Logging
// ============================================================
{
id: 21,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `입력 통제를 검토하던 중 정보시스템(IS) 감사인은 기업 정책에 따라 절차상 감독자가 데이터 유효성 검사 편집을 재정의(Override)할 수 있음을 확인했다. IS 감사인은 어떻게 해야 하는가?<br><small style="color:#94a3b8">When reviewing input controls, an information systems (IS) auditor observes that, in accordance with corporate policy, procedures allow supervisory override of data validation edits. The IS auditor should:</small>`,
options: [
  "리스크를 완화할 다른 보상 통제가 있을 수 있으므로 우려하지 않는다.",
  "재정의가 자동으로 로깅되고 검토 대상이 되는지 확인한다.",
  "모든 재정의가 고위 경영진의 승인을 위해 회부되는지 검증한다.",
  "재정의를 허용하지 말도록 권고한다."
],
correct: 1,
explanation: `
<p><strong>핵심: Override 통제 = 자동 로깅 + 독립적 검토</strong></p>
<p>재정의 자체는 정책에 따라 허용될 수 있지만, 반드시 자동 로깅 + 재정의를 실행하지 않은 다른 관리자가 검토해야 함.</p>

<table>
<tr><th>선지</th><th>문제점</th></tr>
<tr><td>A. 보상 통제 가정</td><td>감사인은 보상 통제를 <strong>가정하면 안 됨</strong></td></tr>
<tr><td style="color:#10b981"><strong>B. 자동 로깅 + 검토 확인 (정답)</strong></td><td style="color:#10b981"><strong>적절한 통제 확인</strong></td></tr>
<tr><td>C. 고위 경영진 승인</td><td>다른 관리자 검토면 충분</td></tr>
<tr><td>D. 재정의 금지</td><td>정책 준수 override를 금지할 이유 없음</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Override = 자동 로깅 + 독립적 검토</strong> (직무 분리)</li>
<li>보상 통제를 "있을 것이다"라고 <strong>가정 금지</strong></li>
<li>정책 준수 override → 금지가 아닌 <strong>모니터링</strong></li>
</ul>
</div>`,
reference: "CRM Chapter 7: Input Controls / Override Controls, Domain 3",
keyConcepts: [
  "Override Control (재정의 통제)|감독자 재정의는 허용 가능하지만, 자동 로깅 + 재정의하지 않은 독립적 관리자의 검토가 필수. 직무 분리 원칙 적용.",
  "보상 통제 가정 금지|감사인은 다른 보상 통제가 있을 것이라고 가정하면 안 됨. 반드시 확인해야 함."
]
},

// ============================================================
// Q22 - Software Baselining / Scope Creep
// ============================================================
{
id: 22,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `부적절한 소프트웨어 프로젝트 베이스라이닝으로 인해 발생할 수 있는 리스크 유형은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following types of risk can result from inadequate software project baselining?</small>`,
options: [
  "승인 지연 (Sign-off delays)",
  "소프트웨어 무결성 위반",
  "범위 확대 (Scope Creep)",
  "부적절한 통제"
],
correct: 2,
explanation: `
<p><strong>핵심: Baseline = 설계/개발의 기준점. 부적절하면 → Scope Creep</strong></p>
<p>베이스라인 이후 변경은 공식 승인 필요. 베이스라인이 부적절하면 변경이 통제 없이 진행 → Scope Creep.</p>

<table>
<tr><th>선지</th><th>판정</th></tr>
<tr><td>A. 승인 지연</td><td>Scope Creep의 결과이지 직접적 리스크 아님</td></tr>
<tr><td>B. 무결성 위반</td><td>HW/SW 장애, 침입, 사용자 오류가 원인</td></tr>
<tr><td style="color:#10b981"><strong>C. Scope Creep (정답)</strong></td><td style="color:#10b981"><strong>베이스라인 부재 → 통제 없는 범위 확대</strong></td></tr>
<tr><td>D. 부적절한 통제</td><td>보안 미고려가 원인</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Baseline</strong> = 설계/개발 기준점 (이후 변경은 공식 승인 필요)</li>
<li><strong>Baseline 부적절 → Scope Creep</strong> → 시간/예산 초과</li>
<li>Q18과 연결: Scope Creep = 기능 초과 + 예산 초과의 근본 원인</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Software Baselining / Change Control, Domain 3",
keyConcepts: [
  "Software Baseline (소프트웨어 베이스라인)|설계/개발의 기준점(cutoff point). 이후 추가 요구사항이나 범위 변경은 공식 승인 절차(비용편익분석 포함) 필요. 부적절한 베이스라이닝 → Scope Creep.",
  "Baseline과 Scope Creep의 관계|Baseline이 없거나 부적절하면 변경이 통제 없이 진행 → Scope Creep → 시간/예산 초과. Baseline = Scope Creep 방지의 핵심 도구."
]
},

// ============================================================
// Q23 - Migration / Direct Cutover Risk
// ============================================================
{
id: 23,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `고객 관계 관리(CRM) 시스템 마이그레이션 프로젝트 감사를 수행하는 정보시스템(IS) 감사인에게 가장 큰 우려가 되는 것은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following is of GREATEST concern to an information systems (IS) auditor when performing an audit of a client relationship management system migration project?</small>`,
options: [
  "기술적 마이그레이션이 긴 주말 전 금요일로 계획되어 있으며, 모든 작업을 완료하기에 시간이 너무 부족하다.",
  "시스템을 파일럿 테스트하는 직원들이 새 시스템의 데이터 표현 방식이 기존 시스템과 완전히 다르다는 점을 우려하고 있다.",
  "단일 구현(Single Implementation)이 계획되어 있으며, 레거시 시스템을 즉시 폐기할 예정이다.",
  "목표 일자 5주 전, 새 시스템 소프트웨어의 인쇄 기능에 아직 다수의 결함이 존재한다."
],
correct: 2,
explanation: `
<p><strong>핵심: 레거시 즉시 폐기 = Direct Cutover = 폴백 전략 없음 = 최대 위험</strong></p>
<p>대규모 마이그레이션에서는 병행 운영이나 단계적 전환이 필요. 구 시스템 즉시 폐기 시 새 시스템 문제 발생하면 복구 불가.</p>

<table>
<tr><th>선지</th><th>왜 최대 우려가 아닌가</th></tr>
<tr><td>A. 주말 전 마이그레이션</td><td>주말이 시간 버퍼 역할</td></tr>
<tr><td>B. 데이터 표현 다름</td><td>교육/지원으로 해결 가능</td></tr>
<tr><td style="color:#10b981"><strong>C. 즉시 폐기 (정답)</strong></td><td style="color:#10b981"><strong>폴백 불가 = 최대 위험</strong></td></tr>
<tr><td>D. 인쇄 기능 결함</td><td>인쇄는 마지막에 테스트하는 기능 (정상)</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li>대규모 마이그레이션에서 <strong>즉시 폐기 = 최대 우려</strong></li>
<li>Q9/Q10과 연결: Direct Cutover = 최고 위험</li>
<li>인쇄 기능 = 비즈니스 이벤트 마지막 단계 → 마지막에 테스트</li>
</ul>
</div>`,
reference: "CRM Chapter 7: System Migration / Conversion Strategies, Domain 3",
keyConcepts: [
  "마이그레이션 폴백 전략|대규모 시스템 마이그레이션 시 반드시 병행 운영 또는 단계적 전환 필요. 레거시 즉시 폐기는 폴백 불가로 최대 리스크.",
  "인쇄 기능 테스트 시점|인쇄는 비즈니스 이벤트의 마지막 단계이므로 다른 모든 기능 테스트 후 마지막에 테스트/수정하는 것이 정상."
]
},

// ============================================================
// Q24 - Portfolio / Business Plan Alignment
// ============================================================
{
id: 24,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템(IS) 감사인이 기업의 프로젝트 포트폴리오를 검토할 때 가장 중요한 고려사항은 포트폴리오가 다음을 충족하는지 여부이다:<br><small style="color:#94a3b8">The MOST important point of consideration for an information systems (IS) auditor while reviewing an enterprise's project portfolio is that it:</small>`,
options: [
  "기존 IT 예산을 초과하지 않는다.",
  "투자 전략과 정렬되어 있다.",
  "IT 운영위원회의 승인을 받았다.",
  "비즈니스 플랜과 정렬되어 있다."
],
correct: 3,
explanation: `
<p><strong>핵심: IT는 항상 비즈니스 목표에 정렬 — CISA 철칙</strong></p>
<p>포트폴리오 관리는 전체 IT 전략을 총괄. IT 전략은 비즈니스 전략에 정렬. 비즈니스 플랜이 각 프로젝트의 정당성 제공.</p>

<table>
<tr><th>선지</th><th>중요도</th></tr>
<tr><td>A. IT 예산</td><td>중요하지만 최우선 아님</td></tr>
<tr><td>B. 투자 전략</td><td>중요하지만 비즈니스 플랜의 하위</td></tr>
<tr><td>C. IT 운영위 승인</td><td>모든 기업에 있진 않음</td></tr>
<tr><td style="color:#10b981"><strong>D. 비즈니스 플랜 (정답)</strong></td><td style="color:#10b981"><strong>최상위 — 모든 IT의 근거</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>포트폴리오 최우선 = 비즈니스 플랜과 정렬</strong></li>
<li>상위 순서: 비즈니스 플랜 > 투자 전략 > IT 예산</li>
<li>CISA 철칙: <strong>IT는 항상 비즈니스 목표에 정렬</strong></li>
</ul>
</div>`,
reference: "CRM Chapter 7: Project Portfolio Management, Domain 3",
keyConcepts: [
  "IT-비즈니스 정렬|IT 전략/포트폴리오는 항상 비즈니스 전략/플랜에 정렬되어야 함. CISA 시험의 핵심 원칙. 예산/투자보다 비즈니스 정렬이 우선.",
  "Portfolio Management 감사|포트폴리오가 비즈니스 플랜과 정렬되었는지가 최우선 확인 사항. 비즈니스 플랜이 각 프로젝트의 정당성(justification) 제공."
]
},

// ============================================================
// Q25 - PERT / Prioritization + Timeline
// ============================================================
{
id: 25,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `프로젝트 활동의 우선순위를 정하고 프로젝트의 타임라인을 결정하는 데 가장 도움이 되는 것은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following BEST helps to prioritize project activities and determine the timeline for a project?</small>`,
options: [
  "간트 차트 (Gantt Chart)",
  "획득 가치 분석 (Earned Value Analysis)",
  "프로그램 평가 검토 기법 (PERT)",
  "기능점 분석 (Function Point Analysis)"
],
correct: 2,
explanation: `
<p><strong>Q13과 같은 유형! PERT = 기간 추정 + Critical Path로 우선순위 결정</strong></p>

<table>
<tr><th>기법</th><th>우선순위?</th><th>타임라인?</th><th>실제 목적</th></tr>
<tr><td>A. Gantt</td><td>일부</td><td>O</td><td>일정/상태 시각화</td></tr>
<tr><td>B. Earned Value</td><td>X</td><td>X</td><td>비용 vs 산출물 추적</td></tr>
<tr><td style="color:#10b981"><strong>C. PERT (정답)</strong></td><td style="color:#10b981"><strong>O</strong></td><td style="color:#10b981"><strong>O</strong></td><td style="color:#10b981"><strong>3점 추정 + Critical Path</strong></td></tr>
<tr><td>D. Function Point</td><td>X</td><td>X</td><td>소프트웨어 크기 측정</td></tr>
</table>

<div class="wp"><strong>A(Gantt) 함정:</strong> Gantt는 일정을 시각화하는 도구이지, 우선순위를 결정하는 도구가 아님. PERT가 더 종합적.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>PERT = 기간 + 우선순위(Critical Path)</strong> → 가장 종합적</li>
<li><strong>Gantt = 시각화</strong> (결정이 아님)</li>
<li><strong>Earned Value = 비용 추적</strong></li>
<li>Q13과 세트: PERT는 기간/우선순위 모두 커버</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Project Management Techniques, Domain 3",
keyConcepts: [
  "PERT와 Critical Path|PERT는 3점 추정(최악/최선/정상)으로 타임라인 산출 + Critical Path 식별로 우선순위 결정. 기간과 우선순위 모두 커버하는 가장 종합적 기법.",
  "Earned Value Analysis (획득 가치 분석)|프로젝트 비용 대비 실제 산출물을 추적하는 기법. 비용 초과 조기 감지. 우선순위/타임라인 결정에는 부적합."
]
},

// ============================================================
// Q26 - Post-implementation Review / Value Measurement
// ============================================================
{
id: 26,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템(IS) 감사인이 새로 구현된 시스템의 가치를 평가하고 측정하는 데 가장 도움이 되는 것은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following BEST helps an information systems (IS) auditor assess and measure the value of a newly implemented system?</small>`,
options: [
  "비즈니스 요구사항 검토",
  "시스템 인증 (System Certification)",
  "구현 후 검토 (Postimplementation Review)",
  "시스템 인가 (System Accreditation)"
],
correct: 2,
explanation: `
<p><strong>Q4, Q11에 이어 세 번째 Post-implementation Review 문제. 이번엔 "가치 측정" 관점.</strong></p>
<p>Post-implementation Review의 핵심 목표 = <strong>비용편익(Cost-Benefit) / ROI 측정 평가</strong></p>

<table>
<tr><th>선지</th><th>목적</th><th>가치 측정?</th></tr>
<tr><td>A. 요구사항 검토</td><td>요구사항 확인</td><td>증거 제공 X</td></tr>
<tr><td>B. Certification</td><td>통제 준수 수준 평가</td><td>X</td></tr>
<tr><td style="color:#10b981"><strong>C. Post-impl Review (정답)</strong></td><td style="color:#10b981"><strong>목표 달성 + 가치 측정</strong></td><td style="color:#10b981"><strong>O</strong></td></tr>
<tr><td>D. Accreditation</td><td>운영 승인 (리스크 수용)</td><td>X</td></tr>
</table>

<div class="wp"><strong>Certification vs Accreditation 구분:</strong><br>Certification = 통제 <strong>준수 평가</strong> (기술적)<br>Accreditation = <strong>운영 승인</strong> (경영진 결정, 리스크 수용)</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>가치/ROI 측정 = Post-implementation Review</strong></li>
<li>Certification = 통제 준수 / Accreditation = 운영 승인</li>
<li>Post-impl Review = 만능: 목표 달성, 가치 측정, 통제 확인</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Post-implementation Review, Domain 3",
keyConcepts: [
  "Post-implementation Review 총정리|1) 설계대로 작동하는가 (Q4), 2) 접근 통제 확인 (Q11), 3) 가치/ROI 측정 (Q26). 세 가지 관점 모두 커버하는 종합 검토.",
  "Certification vs Accreditation|Certification: 통제가 표준/정책을 준수하는지 기술적 평가. Accreditation: 경영진이 리스크를 수용하고 운영을 공식 승인하는 결정."
]
},

// ============================================================
// Q27 - Data Warehouse / Metadata
// ============================================================
{
id: 27,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `데이터 웨어하우스 설계에서 가장 중요한 요소는 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following is the MOST important factor in the design of a data warehouse?</small>`,
options: [
  "메타데이터의 품질",
  "트랜잭션 처리 속도",
  "데이터의 휘발성",
  "시스템의 취약성"
],
correct: 0,
explanation: `
<p><strong>핵심: DW 설계 최우선 = 메타데이터 품질</strong></p>
<p>메타데이터 = 웨어하우스 저장 데이터를 설명하는 "데이터에 대한 데이터". 저장 정보의 <strong>목차(table of contents)</strong> 역할.</p>

<table>
<tr><th>선지</th><th>판정</th></tr>
<tr><td style="color:#10b981"><strong>A. 메타데이터 품질 (정답)</strong></td><td style="color:#10b981"><strong>데이터를 찾고 이해하는 핵심</strong></td></tr>
<tr><td>B. 트랜잭션 속도</td><td>DW는 분석용, 운영용 아님</td></tr>
<tr><td>C. 데이터 변동성</td><td>저장 용량 문제일 뿐</td></tr>
<tr><td>D. 시스템 취약성</td><td>보안 중요하지만 설계 최우선 아님</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>DW 설계 = 메타데이터 품질이 최우선</strong></li>
<li>DW = 분석/조회용 (운영용 아님) → 트랜잭션 속도 무관</li>
<li>OLTP = 운영용 (속도 중요) / DW = 분석용 (메타데이터 중요)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Data Warehouse Design, Domain 3",
keyConcepts: [
  "Data Warehouse (데이터 웨어하우스)|트랜잭션 데이터를 조회/분석용으로 구조화한 사본. 운영 시스템이 아닌 분석/연구 목적. 설계 시 메타데이터 품질이 가장 중요.",
  "Metadata (메타데이터)|데이터에 대한 데이터. DW에서 저장된 정보의 목차(table of contents) 역할. 메타데이터 없이는 원하는 데이터를 찾을 수 없음.",
  "OLTP vs DW|OLTP(Online Transaction Processing): 운영용, 트랜잭션 속도 중요. DW(Data Warehouse): 분석용, 메타데이터 품질 중요. 목적이 다름."
]
},

// ============================================================
// Q28 - Test Data Quality
// ============================================================
{
id: 28,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `새로운 또는 수정된 애플리케이션 시스템의 로직을 테스트하기 위한 데이터를 생성할 때 가장 중요한 것은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following is MOST critical when creating data for testing the logic in a new or modified application system?</small>`,
options: [
  "각 테스트 케이스에 충분한 데이터 양",
  "실제 처리에서 예상되는 조건을 대표하는 데이터",
  "일정에 맞춰 테스트를 완료하는 것",
  "실제 데이터의 무작위 샘플"
],
correct: 1,
explanation: `
<p><strong>핵심: 테스트 데이터 = 질(Quality) > 양(Quantity)</strong></p>
<p>유효(valid) + 무효(invalid) 데이터 모두 포함, 실제 처리 조건을 대표해야 함.</p>

<table>
<tr><th>선지</th><th>문제점</th></tr>
<tr><td>A. 충분한 양</td><td>양이 많아도 조건 못 다루면 무의미</td></tr>
<tr><td style="color:#10b981"><strong>B. 실제 조건 대표 (정답)</strong></td><td style="color:#10b981"><strong>모든 운영 조건 커버</strong></td></tr>
<tr><td>C. 일정 맞추기</td><td>적절한 데이터가 일정보다 중요</td></tr>
<tr><td>D. 무작위 샘플</td><td>모든 조건 커버 보장 불가</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>테스트 데이터 = 질 > 양</strong></li>
<li>유효 + 무효 데이터 모두 포함, 모든 운영 조건 대표</li>
<li>무작위 샘플 ≠ 모든 조건 커버</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Testing / Test Data, Domain 3",
keyConcepts: [
  "Test Data 품질|테스트 데이터는 양보다 질이 중요. 유효/무효 데이터 모두 포함하고 실제 처리의 모든 조건을 대표해야 함. 무작위 샘플로는 모든 조건 커버 불가.",
  "테스트 데이터 설계 원칙|1) 유효 데이터(정상 처리), 2) 무효 데이터(오류 처리), 3) 경계값(boundary), 4) 예외 조건을 의도적으로 설계해야 함."
]
},

// ============================================================
// Q29 - Top-down vs Bottom-up Testing
// ============================================================
{
id: 29,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `소프트웨어 테스트에 대한 하향식(Top-down) 접근법의 장점은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following is an advantage of the top-down approach to software testing?</small>`,
options: [
  "인터페이스 오류가 조기에 식별된다.",
  "모든 프로그램이 완성되기 전에 테스트를 시작할 수 있다.",
  "다른 테스트 접근법보다 더 효과적이다.",
  "핵심 모듈의 오류가 더 빨리 감지된다."
],
correct: 0,
explanation: `
<p><strong>핵심: Top-down = 상위부터 → 인터페이스 오류 조기 발견</strong></p>

<table>
<tr><th></th><th>Top-down</th><th>Bottom-up</th></tr>
<tr><td>방향</td><td>상위 → 하위</td><td>하위 → 상위</td></tr>
<tr><td>장점</td><td style="color:#10b981"><strong>인터페이스 오류 조기 발견</strong></td><td>핵심 모듈 오류 조기 발견, 일부 완성 전 테스트 가능</td></tr>
</table>

<div class="wp"><strong>B, D는 Bottom-up의 장점!</strong> 섞어서 출제하는 함정에 주의.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Top-down = 인터페이스(연결) 오류 조기 발견</strong></li>
<li><strong>Bottom-up = 핵심 모듈 오류 조기 발견</strong> + 일부 완성 전 테스트</li>
<li>"가장 효과적" 같은 절대적 표현 = 보통 오답</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Testing Approaches - Top-down vs Bottom-up, Domain 3",
keyConcepts: [
  "Top-down Testing|상위 모듈부터 하위로 테스트. 주요 기능/인터페이스를 먼저 테스트하므로 인터페이스 오류 조기 발견. 하위 모듈은 stub으로 대체.",
  "Bottom-up Testing|하위 모듈부터 상위로 테스트. 핵심 모듈 오류 조기 발견. 모든 프로그램 완성 전에 테스트 시작 가능. 상위 모듈은 driver로 대체.",
  "Top-down vs Bottom-up 비교|Top-down: 인터페이스 우선. Bottom-up: 핵심 모듈 우선. CISA에서 장점을 섞어서 출제하는 함정 자주 등장."
]
},

// ============================================================
// Q30 - Cost vs Schedule Performance
// ============================================================
{
id: 30,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `완료까지 18개월이 예정된 프로젝트의 프로젝트 관리자가 6개월 후 예산의 6분의 1만 지출했기 때문에 프로젝트의 재정 상태가 양호하다고 발표했다. 정보시스템(IS) 감사인이 가장 먼저 확인해야 할 것은 무엇인가?<br><small style="color:#94a3b8">A project manager for a project that is scheduled to take 18 months to complete announces that the project is in a healthy financial position because, after six months, only one-sixth of the budget has been spent. The information systems (IS) auditor should FIRST determine:</small>`,
options: [
  "프로젝트 일정 대비 달성된 진행 상황",
  "프로젝트 예산을 줄일 수 있는지 여부",
  "프로젝트를 일정보다 일찍 완료할 수 있는지 여부",
  "절감된 예산을 프로젝트 범위 확대에 활용할 수 있는지 여부"
],
correct: 0,
explanation: `
<p><strong>핵심: 예산 적게 사용 ≠ 건강. 진행이 늦어서 돈을 못 쓴 것일 수도!</strong></p>
<p>비용 성과(Cost)는 일정 성과(Schedule)와 <strong>함께</strong> 봐야 함. 단독 평가 불가.</p>

<table>
<tr><th>상황</th><th>해석</th></tr>
<tr><td>예산 적게 사용 + 일정 정상</td><td>효율적 → 긍정적</td></tr>
<tr><td style="color:#ef4444"><strong>예산 적게 사용 + 일정 지연</strong></td><td style="color:#ef4444"><strong>지연 때문에 못 쓴 것 → 위험</strong></td></tr>
</table>

<div class="wp"><strong>PM의 "건강한 재정"이 함정:</strong> 감사인은 PM의 판단을 그대로 받아들이지 않고, 일정 대비 진행률을 먼저 확인해야 함.</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>비용은 일정과 함께 평가</strong> — 단독 평가 금지</li>
<li>예산 적게 사용 = <strong>지연 가능성 의심</strong></li>
<li>감사인은 먼저 <strong>진행률(progress) 확인</strong></li>
</ul>
</div>`,
reference: "CRM Chapter 7: Project Cost Management / Earned Value, Domain 3",
keyConcepts: [
  "비용-일정 통합 평가|프로젝트 비용 성과는 일정 성과와 함께 평가해야 함. 예산을 적게 쓴 것이 효율 때문인지, 지연 때문인지 구분 필요. Earned Value Analysis의 핵심 원리.",
  "Earned Value 핵심 지표|PV(Planned Value): 계획된 가치, EV(Earned Value): 실제 달성 가치, AC(Actual Cost): 실제 비용. CPI=EV/AC(비용효율), SPI=EV/PV(일정효율)."
]
},

// ============================================================
// Q31 - Data Migration / Semantic Characteristics
// ============================================================
{
id: 31,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `한 조직이 레거시 시스템에서 전사적 자원 관리(ERP) 시스템으로 마이그레이션 중이다. 데이터 마이그레이션 활동을 검토하는 정보시스템(IS) 감사인에게 가장 중요한 관심사는 다음을 확인하는 것이다:<br><small style="color:#94a3b8">An organization is migrating from a legacy system to an enterprise resource planning system. While reviewing the data migration activity, the MOST important concern for the information systems (IS) auditor is to determine that there is a:</small>`,
options: [
  "두 시스템 간에 마이그레이션된 데이터의 의미적(Semantic) 특성의 상관관계",
  "두 시스템 간에 마이그레이션된 데이터의 산술적(Arithmetic) 특성의 상관관계",
  "두 시스템 간 프로세스의 기능적 특성의 상관관계",
  "두 시스템 간 프로세스의 상대적 효율성"
],
correct: 0,
explanation: `
<p><strong>핵심: 데이터 마이그레이션 = 데이터의 "의미"가 동일한지 확인</strong></p>
<p>두 시스템의 DB 스키마가 다를 수 있으므로, 데이터의 해석(의미)이 새 시스템에서도 동일한지가 최우선.</p>

<table>
<tr><th>특성</th><th>의미</th><th>중요도</th></tr>
<tr><td style="color:#10b981"><strong>Semantic (의미적)</strong></td><td style="color:#10b981"><strong>데이터가 무엇을 뜻하는가</strong></td><td style="color:#10b981"><strong>최우선</strong></td></tr>
<tr><td>Arithmetic (산술적)</td><td>데이터 구조/내부 정의</td><td>하위</td></tr>
<tr><td>Functional (기능적)</td><td>프로세스 기능</td><td>데이터 마이그레이션과 무관</td></tr>
<tr><td>Efficiency (효율)</td><td>프로세스 성능</td><td>데이터 마이그레이션과 무관</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>데이터 마이그레이션 = Semantic(의미) 일치 확인</strong></li>
<li>Arithmetic(산술) < Semantic(의미)</li>
<li>프로세스 기능/효율은 데이터 마이그레이션과 별개</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Data Migration / Conversion, Domain 3",
keyConcepts: [
  "Data Migration 감사 핵심|데이터 마이그레이션 시 가장 중요한 것은 데이터의 의미적(Semantic) 특성 일치. DB 스키마가 달라도 데이터의 해석/의미가 동일해야 함.",
  "Semantic vs Arithmetic|Semantic: 데이터가 무엇을 의미하는가 (해석). Arithmetic: 데이터의 구조/내부 정의. 마이그레이션에서는 Semantic이 더 중요."
]
},

// ============================================================
// Q32 - SaaS Risk / Internet Dependency
// ============================================================
{
id: 32,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `서비스형 소프트웨어(SaaS) 환경에서 가장 발생 가능성이 높은 리스크 유형은 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following types of risk is MOST likely encountered in a software as a service (SaaS) environment?</small>`,
options: [
  "소프트웨어 라이선스 계약 미준수",
  "인터넷 전달 방식으로 인한 성능 문제",
  "소프트웨어 라이선싱 요구사항으로 인한 높은 비용",
  "호환 가능한 하드웨어로 업데이트 필요로 인한 높은 비용"
],
correct: 1,
explanation: `
<p><strong>핵심: SaaS = 인터넷 의존 → 속도/가용성이 최대 리스크</strong></p>

<table>
<tr><th>선지</th><th>왜 아닌가</th></tr>
<tr><td>A. 라이선스 비준수</td><td>SaaS 제공자가 사용량 모니터링</td></tr>
<tr><td style="color:#10b981"><strong>B. 성능 문제 (정답)</strong></td><td style="color:#10b981"><strong>인터넷 의존 → 속도/가용성 리스크</strong></td></tr>
<tr><td>C. 높은 비용</td><td>서비스 계약으로 비용 고정</td></tr>
<tr><td>D. HW 비용</td><td>오픈 설계, 대부분 HW에서 실행</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>SaaS 최대 리스크 = 인터넷 의존 → 속도/가용성</strong></li>
<li>라이선스 = 제공자 관리, 비용 = 계약 고정, HW = 호환성 높음</li>
<li>IaaS(인프라) / PaaS(플랫폼) / SaaS(소프트웨어) 구분</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Cloud Computing / SaaS, Domain 3",
keyConcepts: [
  "SaaS 리스크|인터넷을 통해 소프트웨어를 제공하므로 속도(speed)와 가용성(availability)이 최대 리스크. 라이선스는 제공자 관리, 비용은 계약 고정.",
  "Cloud 서비스 모델|IaaS: 인프라(서버/스토리지). PaaS: 플랫폼(개발 환경). SaaS: 소프트웨어 전체. 모두 인터넷 의존이지만 SaaS가 가장 사용자에게 가까움."
]
},

// ============================================================
// Q33 - Agile Development / Retrospective
// ============================================================
{
id: 33,
domain: "3",
ks: "3A1 Project Governance and Management",
question: `정보시스템(IS) 감사인이 애자일(Agile) 소프트웨어 개발 접근법을 사용하는 프로젝트를 검토하고 있다. IS 감사인이 발견할 것으로 기대해야 하는 것은 무엇인가?<br><small style="color:#94a3b8">An information systems (IS) auditor is reviewing a project that is using an agile software development approach. Which of the following should the IS auditor expect to find?</small>`,
options: [
  "능력 성숙도 모델(CMM)의 사용.",
  "일정 대비 태스크 수준의 진행 상황에 대한 정기적 모니터링.",
  "팀 생산성을 극대화하기 위한 소프트웨어 개발 도구의 광범위한 사용.",
  "프로젝트에서 향후 활용을 위한 교훈을 도출하는 반복(Iteration) 후 검토."
],
correct: 3,
explanation: `
<p><strong>핵심: 애자일 = 반복적 학습 + 개선 (Retrospective)</strong></p>
<p>매 Iteration 끝에 "무엇이 잘 됐고, 무엇이 더 나을 수 있었는지" 검토 → 다음 반복에 개선 적용.</p>

<table>
<tr><th>선지</th><th>왜 아닌가</th></tr>
<tr><td>A. CMM</td><td>공식 프로세스 중심 → 애자일과 반대</td></tr>
<tr><td>B. 태스크 추적</td><td>일일 회의(Daily Standup)로 대체</td></tr>
<tr><td>C. 도구 광범위 사용</td><td>도구보다 팀 조화/소통이 더 중요</td></tr>
<tr><td style="color:#10b981"><strong>D. 반복 후 교훈 검토 (정답)</strong></td><td style="color:#10b981"><strong>Retrospective = 애자일 핵심</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li>애자일 핵심 = <strong>Retrospective(반복 후 교훈 검토)</strong></li>
<li>일일 회의 → 태스크 추적 불필요</li>
<li>도구보다 <strong>팀 조화/소통</strong>이 우선</li>
<li>CMM = 공식 프로세스 (애자일 반대)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Agile Development / Scrum, Domain 3",
keyConcepts: [
  "Agile 핵심 특성|반복(Iteration, 4~8주), 일일 회의(Daily Standup), Retrospective(교훈 검토), 비공식 소통 우선, 팀 조화 중시. 공식 문서/태스크 추적보다 소통과 학습 강조.",
  "Retrospective (회고)|매 Iteration 끝에 수행. 잘된 점/개선할 점 식별 → 다음 반복에 적용. 애자일의 핵심 학습 메커니즘.",
  "Agile vs Traditional|Agile: 비공식, 반복적, 학습 중심. Traditional(Waterfall): 공식 문서, 순차적, 계획 중심. CMM은 Traditional에 적합."
]
},

// ============================================================
// Q34 - Sanitized Live Data for Testing
// ============================================================
{
id: 34,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `테스트 데이터로 정제된(Sanitized) 실제 거래를 사용하는 장점은 다음과 같다:<br><small style="color:#94a3b8">An advantage of using sanitized live transactions for test data is that:</small>`,
options: [
  "모든 거래 유형이 포함된다.",
  "모든 오류 조건이 테스트될 가능성이 높다.",
  "결과를 평가하는 데 특별한 루틴이 필요 없다.",
  "테스트 거래가 실제 처리를 대표한다."
],
correct: 3,
explanation: `
<p><strong>핵심: Sanitized live data = 실제 처리를 대표하는 것이 핵심 장점</strong></p>
<p>실제 거래 기반이므로 실제 처리 패턴을 대표. 단, 민감 정보는 반드시 정제(sanitize).</p>

<table>
<tr><th>선지</th><th>판정</th></tr>
<tr><td>A. 모든 거래 유형 포함</td><td>실제 데이터에 모든 유형 있진 않음</td></tr>
<tr><td>B. 모든 오류 조건 테스트</td><td>특정 오류만 포함</td></tr>
<tr><td>C. 특별한 루틴 불필요</td><td>장점이긴 하나 핵심 아님</td></tr>
<tr><td style="color:#10b981"><strong>D. 실제 처리 대표 (정답)</strong></td><td style="color:#10b981"><strong>가장 큰 장점</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Sanitized live data = 실제 처리를 대표</strong> (핵심 장점)</li>
<li>단점: 모든 거래 유형/오류 조건 커버 못 할 수 있음</li>
<li><strong>민감 정보 반드시 정제</strong> → 데이터 유출 방지</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Test Data / Sanitized Data, Domain 3",
keyConcepts: [
  "Sanitized Live Data|실제 운영 데이터에서 민감 정보를 제거하여 테스트에 사용. 장점: 실제 처리 패턴 대표. 단점: 모든 거래 유형/오류 조건 보장 안 됨. 반드시 민감 정보 정제 필요.",
  "테스트 데이터 총정리|1) 설계된 테스트 데이터: 모든 조건 커버 가능하나 인위적. 2) Sanitized live data: 실제를 대표하나 모든 조건 커버 불확실. 둘 다 장단점 있음."
]
},

// ============================================================
// Q35 - Sequence Check / Duplicate Prevention
// ============================================================
{
id: 35,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `데이터 입력 중 바우처의 중복을 방지하는 데 도움이 되는 통제는 다음 중 무엇인가?<br><small style="color:#94a3b8">Which of the following controls helps prevent duplication of vouchers during data entry?</small>`,
options: [
  "범위 검사 (Range Check)",
  "전치 및 치환 (Transposition and Substitution)",
  "순번 검사 (Sequence Check)",
  "순환 중복 검사 (Cyclic Redundancy Check)"
],
correct: 2,
explanation: `
<p><strong>핵심: Sequence Check = 순번 순서 확인 → 중복 방지 + 완전성</strong></p>
<p>순번이 순서대로 증가해야 하므로 같은 번호가 다시 나오면 중복으로 감지.</p>

<table>
<tr><th>통제</th><th>목적</th><th>중복 방지?</th></tr>
<tr><td>Range Check</td><td>허용 범위 내 확인</td><td>X (범위 내면 중복도 통과)</td></tr>
<tr><td>Transposition</td><td>인코딩 기법</td><td>X</td></tr>
<tr><td style="color:#10b981"><strong>Sequence Check (정답)</strong></td><td style="color:#10b981"><strong>순번 순서 + 중복 확인</strong></td><td style="color:#10b981"><strong>O</strong></td></tr>
<tr><td>CRC</td><td>네트워크 전송 완전성</td><td>X</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Sequence Check 두 가지 용도:</strong> 1) 완전성(갭=누락), 2) 중복 방지</li>
<li>Q5와 세트: Q5=완전성, Q35=중복 방지</li>
<li>CRC = 네트워크용, 애플리케이션 검증에는 부적합</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Input Controls / Validation Checks, Domain 3",
keyConcepts: [
  "Sequence Check 두 가지 용도|1) 완전성: 갭 확인으로 누락 거래 감지 (Q5). 2) 중복 방지: 같은 번호 재사용 감지 (Q35). 순번을 순서대로 확인하는 통제.",
  "Input Validation 통제 유형|Range Check: 범위 내 확인. Validity Check: 유효한 코드/값. Check Digit: 숫자 오류 감지. Sequence Check: 순번/중복/완전성. CRC: 네트워크 전송."
]
},

// ============================================================
// Q36 - Software Acquisition Without RFP
// ============================================================
{
id: 36,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `획득한 소프트웨어 패키지를 감사하는 정보시스템(IS) 감사인은 해당 소프트웨어 구매가 제안 요청서(RFP)에 대한 응답이 아닌 인터넷을 통해 얻은 정보를 기반으로 이루어졌음을 발견했다. IS 감사인이 가장 먼저 해야 할 것은 무엇인가?<br><small style="color:#94a3b8">During the audit of an acquired software package, an information systems (IS) auditor finds that the software purchase was based on information obtained through the Internet, rather than from responses to a request for proposal. The IS auditor should FIRST:</small>`,
options: [
  "기존 하드웨어와의 호환성을 테스트한다.",
  "갭 분석을 수행한다.",
  "라이선스 정책을 검토한다.",
  "해당 절차가 승인되었는지 확인한다."
],
correct: 3,
explanation: `
<p><strong>핵심: 절차 이탈 발견 시 → 먼저 "승인 여부" 확인</strong></p>
<p>RFP 없이 구매 자체가 문제가 아닐 수 있음. 적절한 권한에 의해 승인된 대체 절차였는지가 핵심.</p>

<table>
<tr><th>선지</th><th>왜 먼저가 아닌가</th></tr>
<tr><td>A. 호환성 테스트</td><td>이미 사용 중이면 호환될 것</td></tr>
<tr><td>B. 갭 분석</td><td>RFP 없으면 기대 문서도 없음</td></tr>
<tr><td>C. 라이선스 검토</td><td>중요하지만 절차 확인이 먼저</td></tr>
<tr><td style="color:#10b981"><strong>D. 절차 승인 확인 (정답)</strong></td><td style="color:#10b981"><strong>절차 이탈의 적절성 먼저 확인</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>절차 이탈 → 먼저 승인 여부 확인</strong></li>
<li>기술적 확인(호환성, 라이선스)은 절차 확인 이후</li>
<li>Q19와 연결: 획득 감사 = 절차/계약이 핵심</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Software Acquisition Process, Domain 3",
keyConcepts: [
  "절차 이탈 시 감사 대응|정상 절차에서 벗어난 활동 발견 시 감사인은 먼저 해당 절차가 적절한 권한에 의해 승인되었는지 확인. 승인된 대체 절차면 OK, 미승인이면 발견사항.",
  "RFP (Request for Proposal)|소프트웨어/서비스 구매 시 벤더에게 제안을 요청하는 공식 문서. 요구사항, 평가 기준 등 포함. 없으면 갭 분석 기준도 없음."
]
},

// ============================================================
// Q37 - Release Management / Segregation of Duties
// ============================================================
{
id: 37,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `소규모 회사가 개발 프로세스와 변경 통제 기능 간의 직무 분리를 할 수 없습니다. 테스트된 코드가 운영 환경으로 이관되는 코드임을 보장하는 최선의 방법은 무엇입니까?<br><small style="color:#94a3b8">A small company cannot segregate duties between its development processes and its change control function. What is the BEST way to ensure that the tested code is the code that is moved into production?</small>`,
options: [
  "릴리즈 관리 소프트웨어 (Release management software)",
  "수동 코드 비교 (Manual code comparison)",
  "사전 운영 환경에서의 회귀 테스트 (Regression testing in preproduction)",
  "변경에 대한 경영진 승인 (Management approval of changes)"
],
correct: 0,
explanation: `
<p><strong>핵심: 직무 분리 불가 시 → 자동화된 통제가 최선</strong></p>
<p>릴리즈 관리 소프트웨어는 수동 개입 없이 자동으로 코드를 운영에 이관 → 비인가 변경 방지.</p>

<table>
<tr><th>선지</th><th>통제 유형</th><th>한계</th></tr>
<tr><td style="color:#10b981"><strong>A. Release Management SW (정답)</strong></td><td style="color:#10b981"><strong>예방(자동화)</strong></td><td style="color:#10b981"><strong>수동 개입 없이 비인가 변경 방지</strong></td></tr>
<tr><td>B. 수동 코드 비교</td><td>감지</td><td>사후 감지만 가능, 예방 X, 비효율</td></tr>
<tr><td>C. 회귀 테스트</td><td>기능 검증</td><td>코드 이관 통제가 아님</td></tr>
<tr><td>D. 경영진 승인</td><td>승인</td><td>필요하지만 미테스트 코드 이관 방지 불가</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>직무 분리 불가 → 자동화된 통제(Release Management SW)</strong></li>
<li>감지(Detection) < <strong>예방(Prevention)</strong></li>
<li>회귀 테스트 = 기능 검증이지 이관 통제 아님</li>
<li>승인 = 필요하지만 충분하지 않음</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Change Control / Release Management, Domain 3",
keyConcepts: [
  "Release Management Software|수동 개입 없이 자동으로 코드를 운영에 이관. 직무 분리가 불가한 환경에서 비인가 변경을 방지하는 최선의 보상 통제.",
  "직무 분리 불가 시 보상 통제|소규모 조직에서 직무 분리가 어려울 때 자동화된 통제(릴리즈 관리 SW), 로깅, 독립적 검토 등으로 보상. 예방 통제가 감지 통제보다 우선.",
  "Regression Testing (회귀 테스트)|변경이 기존 시스템 기능을 깨뜨리지 않는지 확인하는 테스트. 코드 이관 통제와는 별개의 목적."
]
},

// ============================================================
// Q38 - Regression Testing
// ============================================================
{
id: 38,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `회귀 테스트(Regression testing)는 주로 다음을 보장하기 위해 수행됩니다:<br><small style="color:#94a3b8">Regression testing is undertaken PRIMARILY to ensure that:</small>`,
options: [
  "시스템 기능이 고객 요구사항을 충족한다.",
  "새 시스템이 대상 환경에서 운영될 수 있다.",
  "해당 개발 표준이 유지되었다.",
  "적용된 변경이 새로운 오류를 도입하지 않았다."
],
correct: 3,
explanation: `
<p><strong>핵심: Regression Testing = 변경 후 새 오류 도입 여부 확인</strong></p>

<table>
<tr><th>테스트</th><th>목적</th></tr>
<tr><td style="color:#10b981"><strong>Regression (정답)</strong></td><td style="color:#10b981"><strong>변경 후 새 오류 도입 여부 확인</strong></td></tr>
<tr><td>Validation</td><td>고객 요구사항 충족 확인</td></tr>
<tr><td>Sociability</td><td>대상 환경에서 기존 시스템과 공존 가능 확인</td></tr>
<tr><td>Code Review/SQA</td><td>개발 표준 유지 확인</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>Regression = 변경 후 새 오류 확인</strong></li>
<li>Validation = 요구사항 충족 / Sociability = 환경 공존</li>
<li>Q37과 연결: 회귀 테스트는 기능 검증이지 이관 통제가 아님</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Testing Types, Domain 3",
keyConcepts: [
  "Regression Testing (회귀 테스트)|변경 적용 후 기존 기능이 깨지지 않았는지, 새로운 오류가 도입되지 않았는지 확인. 코드 이관 통제와는 별개.",
  "Sociability Testing (사회성 테스트)|새 시스템이 대상 환경에서 기존 시스템에 부정적 영향 없이 운영 가능한지 확인. 환경 호환성 테스트.",
  "Validation Testing (검증 테스트)|시스템 기능이 고객 요구사항을 충족하는지 확인. 소프트웨어 구축이 요구사항에 추적 가능한지 검증."
]
},

// ============================================================
// Q39 - System Acquisition / Business Case
// ============================================================
{
id: 39,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `새 컴퓨터 시스템의 획득 제안을 감사할 때, IS 감사인은 먼저 다음을 확인해야 합니다:<br><small style="color:#94a3b8">When auditing the proposed acquisition of a new computer system, an IS auditor should FIRST ensure that:</small>`,
options: [
  "명확한 비즈니스 케이스가 경영진의 승인을 받았다.",
  "기업 보안 표준이 충족될 것이다.",
  "사용자가 구현 계획에 참여할 것이다.",
  "새 시스템이 모든 필요한 사용자 기능을 충족할 것이다."
],
correct: 0,
explanation: `
<p><strong>핵심: 획득의 시작점 = 비즈니스 케이스 승인</strong></p>
<p>비즈니스 케이스가 승인되어야 보안, 사용자 참여, 기능 요구를 논할 수 있음. 조달 초기 단계에서 감사인의 첫 번째 관심사.</p>

<table>
<tr><th>선지</th><th>중요도</th><th>시점</th></tr>
<tr><td style="color:#10b981"><strong>A. 비즈니스 케이스 승인 (정답)</strong></td><td style="color:#10b981"><strong>최우선</strong></td><td style="color:#10b981"><strong>조달 시작 시</strong></td></tr>
<tr><td>B. 보안 표준</td><td>중요</td><td>조달 초기엔 이름</td></tr>
<tr><td>C. 사용자 참여</td><td>중요</td><td>구현 단계</td></tr>
<tr><td>D. 사용자 기능 충족</td><td>중요</td><td>비즈니스 케이스에 포함</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>획득/조달 감사 최우선 = 비즈니스 케이스 승인</strong></li>
<li>Q24와 연결: IT는 항상 비즈니스 정당성이 먼저</li>
<li>"FIRST" 문제 → 가장 상위/근본적인 것</li>
</ul>
</div>`,
reference: "CRM Chapter 7: System Acquisition / Business Case, Domain 3",
keyConcepts: [
  "Business Case (비즈니스 케이스)|시스템 획득의 정당성을 제시하는 문서. 비용편익 분석, 비즈니스 요구, ROI 등 포함. 경영진 승인이 획득 프로세스의 시작점.",
  "획득 감사 우선순위|1) 비즈니스 케이스 승인 → 2) 요구사항 정의 → 3) 벤더 선정/계약(법률 검토) → 4) 보안/기능 검증. 항상 비즈니스 정당성부터."
]
},

// ============================================================
// Q40 - UAT Plan / Requirements Phase
// ============================================================
{
id: 40,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `시스템 개발의 어느 단계에서 사용자 수용 테스트(UAT) 계획이 일반적으로 준비됩니까?<br><small style="color:#94a3b8">During which phase in system development are UAT plans normally prepared?</small>`,
options: [
  "타당성 조사 (Feasibility study)",
  "요구사항 정의 (Requirements definition)",
  "구현 계획 (Implementation planning)",
  "구현 후 검토 (Postimplementation review)"
],
correct: 1,
explanation: `
<p><strong>핵심: UAT 계획 "준비" = 요구사항 정의 단계 / "실행" = 구현 단계</strong></p>
<p>사용자가 요구사항을 정의하면서 동시에 어떻게 검증할지(UAT 계획)도 문서화.</p>

<table>
<tr><th>단계</th><th>UAT와의 관계</th></tr>
<tr><td>A. 타당성 조사</td><td>너무 이른 단계</td></tr>
<tr><td style="color:#10b981"><strong>B. 요구사항 정의 (정답)</strong></td><td style="color:#10b981"><strong>UAT 계획 준비</strong></td></tr>
<tr><td>C. 구현 계획</td><td>UAT 실행 단계 (계획은 이미 있어야 함)</td></tr>
<tr><td>D. 구현 후 검토</td><td>UAT는 구현 전에 완료</td></tr>
</table>

<div class="wp"><strong>C(구현 계획) 함정:</strong> 구현 단계에서 UAT를 "실행"하지, "준비"하는 것이 아님. "prepare"와 "conduct"를 구분!</div>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>UAT 계획 준비 = 요구사항 정의 단계</strong></li>
<li>UAT 실행 = 구현 단계</li>
<li>Q12와 비교: 구현 계획=설계 단계, UAT 계획=요구사항 단계</li>
</ul>
</div>`,
reference: "CRM Chapter 7: SDLC - Requirements Definition / UAT, Domain 3",
keyConcepts: [
  "UAT 계획 수립 시점|요구사항 정의(Requirements Definition) 단계에서 준비. 사용자가 요구사항을 정의하면서 검증 방법도 함께 문서화. 구현 단계에서는 실행만.",
  "SDLC 계획 수립 정리|UAT 계획=요구사항 단계, 구현 계획=설계 단계. 각 계획의 수립 시점과 실행 시점을 구분하는 문제 자주 출제."
]
},

// ============================================================
// Q41 - Business Case / ROI
// ============================================================
{
id: 41,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `새 회계 애플리케이션 획득을 위한 비즈니스 케이스를 평가할 때 가장 중요한 고려사항은 무엇입니까?<br><small style="color:#94a3b8">Which consideration is MOST important while evaluating a business case for acquisition of a new accounting application?</small>`,
options: [
  "애플리케이션의 총 소유 비용 (Total cost of ownership)",
  "구현에 필요한 자원 (Resources required for implementation)",
  "기업의 투자 수익률 (Return on investment, ROI)",
  "보안 요구사항의 비용과 복잡성 (Cost and complexity of security requirements)"
],
correct: 2,
explanation: `
<p><strong>핵심: 비즈니스 케이스의 최우선 = ROI (투자 대비 혜택)</strong></p>
<p>TCO, 구현 자원, 보안 비용 모두 중요하지만 최종 의사결정은 투자 대비 혜택 실현(Benefits Realization)에 기반.</p>

<table>
<tr><th>선지</th><th>관점</th><th>한계</th></tr>
<tr><td>A. TCO</td><td>비용만</td><td>혜택을 고려하지 않음</td></tr>
<tr><td>B. 구현 자원</td><td>자원만</td><td>혜택을 고려하지 않음</td></tr>
<tr><td style="color:#10b981"><strong>C. ROI (정답)</strong></td><td style="color:#10b981"><strong>비용 대비 혜택</strong></td><td style="color:#10b981"><strong>가장 포괄적</strong></td></tr>
<tr><td>D. 보안 비용</td><td>보안만</td><td>ROI 대비 평가해야</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>비즈니스 케이스 최우선 = ROI</strong></li>
<li>TCO = 비용만 / ROI = 비용 대비 혜택 (더 상위)</li>
<li>ROI는 시스템 전체 수명 주기로 평가</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Business Case / Feasibility Analysis, Domain 3",
keyConcepts: [
  "ROI (투자 수익률)|비즈니스 케이스의 가장 중요한 요소. 투자 대비 혜택이 달성 가능하고, 합리적 가정에 기반하며, 측정 가능한지 확인. 프로젝트 주기를 넘어 시스템 전체 수명으로 평가.",
  "TCO vs ROI|TCO(Total Cost of Ownership): 비용 관점만. ROI(Return on Investment): 비용 대비 혜택. 비즈니스 케이스 평가에서는 ROI가 TCO보다 상위 개념."
]
},

// ============================================================
// Q42 - Organizational Environment / Implementation Success
// ============================================================
{
id: 42,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `다음 중 애플리케이션 시스템 구현의 성공에 가장 큰 영향을 미치는 것은 무엇입니까?<br><small style="color:#94a3b8">Which has the MOST significant impact on the success of an application system implementation?</small>`,
options: [
  "프로토타이핑 애플리케이션 개발 방법론 (Prototyping application development methodology)",
  "해당 외부 요구사항 준수 (Compliance with applicable external requirements)",
  "전반적인 조직 환경 (Overall organizational environment)",
  "소프트웨어 리엔지니어링 기법 (Software reengineering technique)"
],
correct: 2,
explanation: `
<p><strong>핵심: 구현 성공 최대 요인 = 전반적인 조직 환경</strong></p>
<p>조직 환경 = IT-비즈니스 정렬 + 개발 프로세스 성숙도 + 변경 통제 + 프로젝트 관리 도구. 방법론이나 기법보다 포괄적이고 근본적.</p>

<table>
<tr><th>선지</th><th>영향 범위</th></tr>
<tr><td>A. 프로토타이핑</td><td>특정 방법론, 영향 제한적</td></tr>
<tr><td>B. 외부 요구사항 준수</td><td>영향 있지만 조직 환경보다 작음</td></tr>
<tr><td style="color:#10b981"><strong>C. 조직 환경 (정답)</strong></td><td style="color:#10b981"><strong>가장 포괄적, 근본적 성공 요인</strong></td></tr>
<tr><td>D. 리엔지니어링 기법</td><td>특정 기법, 영향 작음</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>구현 성공 = 조직 환경</strong> (기술/방법론보다 상위)</li>
<li>조직 환경 = IT-비즈니스 정렬 + 프로세스 성숙도 + 변경 통제</li>
<li>Q14와 연결: 조직/인적 요인이 기술보다 중요</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Implementation Success Factors, Domain 3",
keyConcepts: [
  "조직 환경과 구현 성공|구현 성공에 가장 큰 영향을 미치는 것은 전반적인 조직 환경. IT-비즈니스 정렬, 개발 프로세스 성숙도, 변경 통제, 프로젝트 관리 도구 사용을 포함.",
  "기술 vs 조직 요인|특정 방법론/기법의 영향은 제한적. 조직 환경(사람, 프로세스, 문화)이 기술보다 구현 성공에 더 큰 영향."
]
},

// ============================================================
// Q43 - Integration Testing / Module Linkage
// ============================================================
{
id: 43,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `제안된 ERP 시스템의 요구사항 정의 단계에서, 프로젝트 스폰서가 조달 모듈과 매입채무 모듈을 연결하도록 요청합니다. 수행하기에 가장 적합한 테스트 방법은 무엇입니까?<br><small style="color:#94a3b8">The project sponsor requests that the procurement and accounts payable modules be linked. Which test method is BEST to perform?</small>`,
options: [
  "단위 테스트 (Unit testing)",
  "통합 테스트 (Integration testing)",
  "사회성 테스트 (Sociability testing)",
  "품질 보증 테스트 (Quality assurance testing)"
],
correct: 1,
explanation: `
<p><strong>핵심: "두 모듈 연결" = Integration Testing</strong></p>
<p>통합 테스트는 두 개 이상의 컴포넌트 간 연결을 평가하고, 정보가 한 영역에서 다른 영역으로 전달되는지 확인.</p>

<table>
<tr><th>테스트</th><th>범위</th><th>모듈 간 연결?</th></tr>
<tr><td>Unit</td><td>단일 모듈 내부 로직</td><td>X</td></tr>
<tr><td style="color:#10b981"><strong>Integration (정답)</strong></td><td style="color:#10b981"><strong>두 개 이상 모듈 연결</strong></td><td style="color:#10b981"><strong>O</strong></td></tr>
<tr><td>Sociability</td><td>기존 시스템과 공존</td><td>X</td></tr>
<tr><td>QA</td><td>애플리케이션 로직 정확성</td><td>X</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>"연결(linked/connected)" → Integration Testing</strong></li>
<li>Unit = 단일 모듈 / Integration = 모듈 간 / System = 전체</li>
<li>Sociability = 환경 공존 (Q38에서도 등장)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Testing Types - Integration Testing, Domain 3",
keyConcepts: [
  "Integration Testing (통합 테스트)|두 개 이상의 컴포넌트 간 연결을 평가. 한 영역에서 다른 영역으로 정보 전달 확인. 단위 테스트된 모듈들을 설계에 따라 통합.",
  "테스트 범위 비교|Unit=단일 모듈, Integration=모듈 간 연결, System=전체 시스템, Sociability=환경 공존. '연결/인터페이스' 키워드 → Integration."
]
},

// ============================================================
// Q44 - Gap Analysis / Reengineering
// ============================================================
{
id: 44,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `IS 감사인이 IT 인프라 최적화를 목표로 하는 리엔지니어링 프로세스에 참여하고 있습니다. 다음 중 해결해야 할 이슈를 가장 잘 식별하는 것은 무엇입니까?<br><small style="color:#94a3b8">An IS auditor is involved in a reengineering process to optimize IT infrastructure. Which will BEST identify the issues to be resolved?</small>`,
options: [
  "자체 평가 (Self-assessment)",
  "역공학 (Reverse engineering)",
  "프로토타이핑 (Prototyping)",
  "갭 분석 (Gap analysis)"
],
correct: 3,
explanation: `
<p><strong>핵심: Gap Analysis = 현재 상태(As-Is) vs 목표 상태(To-Be) 비교 → 차이(Gap) 식별</strong></p>

<table>
<tr><th>선지</th><th>목적</th><th>한계</th></tr>
<tr><td>A. Self-assessment</td><td>현재 상태 파악</td><td>목표 상태 X, 주관적</td></tr>
<tr><td>B. Reverse Engineering</td><td>장치/프로그램 작동 분석</td><td>여기서는 부적절</td></tr>
<tr><td>C. Prototyping</td><td>사용자 요구사항 확인</td><td>이슈 식별용 아님</td></tr>
<tr><td style="color:#10b981"><strong>D. Gap Analysis (정답)</strong></td><td style="color:#10b981"><strong>현재 vs 목표 비교</strong></td><td style="color:#10b981"><strong>이슈 식별에 최적</strong></td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>이슈 식별/리엔지니어링 → Gap Analysis</strong></li>
<li>Gap Analysis = As-Is vs To-Be</li>
<li>Self-assessment = 현재만 (주관적) / Gap Analysis = 현재 vs 목표 (객관적)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Business Process Reengineering / Gap Analysis, Domain 3",
keyConcepts: [
  "Gap Analysis (갭 분석)|현재 상태(As-Is)와 목표 상태(To-Be)를 비교하여 차이(Gap)를 식별. 리엔지니어링/개선 프로세스에서 해결해야 할 이슈를 파악하는 최선의 방법.",
  "Self-assessment vs Gap Analysis|Self-assessment: 현재 상태만 파악, 주관적. Gap Analysis: 현재 vs 목표 비교, 객관적. 이슈 식별에는 Gap Analysis가 우월."
]
},

// ============================================================
// Q45 - Production Data in Testing / Coverage Risk
// ============================================================
{
id: 45,
domain: "3",
ks: "3A2 Business Case and Feasibility Analysis",
question: `프로젝트 개발팀이 테스트 덱에 운영 데이터를 사용하려 합니다. 팀은 테스트 환경에 로드하기 전에 민감한 데이터 요소를 제거했습니다. IS 감사인이 이 관행에 대해 가져야 할 추가 우려는 무엇입니까?<br><small style="color:#94a3b8">The team removed sensitive data before loading production data into test environment. Which additional concern should an IS auditor have?</small>`,
options: [
  "모든 기능이 테스트되지 않을 수 있다.",
  "운영 데이터가 테스트 환경에 도입된다.",
  "전문 교육이 필요하다.",
  "프로젝트가 예산을 초과할 수 있다."
],
correct: 0,
explanation: `
<p><strong>핵심: 운영 데이터의 한계 = 모든 기능/거래 유형을 커버하지 못할 수 있음</strong></p>
<p>민감 데이터는 이미 제거(scrubbed)했으므로 B는 우려 아님. 남은 추가 우려 = 테스트 커버리지 불완전성.</p>

<table>
<tr><th>선지</th><th>판정</th></tr>
<tr><td style="color:#10b981"><strong>A. 모든 기능 미테스트 (정답)</strong></td><td style="color:#10b981"><strong>운영 데이터에 모든 유형 없을 수 있음</strong></td></tr>
<tr><td>B. 운영 데이터 도입</td><td>민감 데이터 제거했으므로 OK</td></tr>
<tr><td>C. 전문 교육</td><td>특별한 지식 불필요</td></tr>
<tr><td>D. 예산 초과</td><td>이 관행과 무관</td></tr>
</table>

<div class="sbox">
<h4>이 문제로 외워야 할 것</h4>
<ul>
<li><strong>운영 데이터 테스트 한계 = 모든 기능/유형 커버 불가</strong></li>
<li>민감 데이터 제거 후 → 데이터 유출 우려 해소</li>
<li>Q34와 세트: 장점(실제 대표) + 단점(커버리지 불완전)</li>
</ul>
</div>`,
reference: "CRM Chapter 7: Test Data / Production Data Usage, Domain 3",
keyConcepts: [
  "운영 데이터 테스트 사용 리스크|운영 데이터에 모든 거래 유형이나 기능 시나리오가 포함되지 않을 수 있음. 민감 데이터 제거 후에도 커버리지 불완전성은 남음.",
  "테스트 데이터 총정리 (Q28+Q34+Q45)|Q28: 질>양, 모든 조건 대표. Q34: Sanitized live data 장점=실제 대표. Q45: 단점=모든 기능 커버 불가. 세 문제를 세트로 이해."
]
},
{
id:46, domain:"3", ks:"3A3 System Development Methodologies",
question:`대형 산업 조직이 노후화된 레거시 시스템을 교체하면서 맞춤 솔루션을 구매할지 자체 개발할지를 평가하고 있다. 다음 중 이 의사결정에 <b>가장 큰 영향</b>을 미치는 것은?<br><small style="color:#94a3b8">A large industrial organization is replacing an obsolete legacy system and evaluating whether to buy a custom solution or develop a system in-house. Which of the following will MOST likely influence the decision?</small>`,
options:[
"소싱 및 소프트웨어 개발과 관련된 조직 내 기술 역량과 지식<br><small style='color:#94a3b8'>Technical skills and knowledge within the organization related to sourcing and software development</small>",
"애플리케이션이 처리하는 데이터에 적용되는 개인정보 보호 요건<br><small style='color:#94a3b8'>Privacy requirements applied to the data processed by the application</small>",
"교체 대상 레거시 시스템이 자체 개발되었는지 여부<br><small style='color:#94a3b8'>Whether the legacy system being replaced was developed in-house</small>",
"사용자가 솔루션 기능 정의에 충분한 시간을 투입하지 않는 것<br><small style='color:#94a3b8'>The users not devoting reasonable time to defining the functionalities of the solution</small>"
],
correct:0,
explanation:`<p><b>Make vs Buy(자체 개발 vs 구매) 의사결정</b>에서 가장 중요한 요소는 <mark>조직 내부의 기술 역량과 핵심 역량(core competency)</mark>이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 조직 내 기술 역량 ✅</b></td><td>핵심 역량 보유 여부가 Make/Buy 최우선 판단 기준</td></tr>
<tr><td>B. 개인정보 보호 요건</td><td>두 방식 모두 동일하게 적용 → 결정 요인 아님</td></tr>
<tr><td>C. 레거시 자체개발 여부</td><td>기존 시스템 지식 ≠ 신규 구축 역량</td></tr>
<tr><td>D. 사용자 기능 정의 미흡</td><td>두 방식 모두에 동일 영향</td></tr></table>
<div class="sbox"><b>🔑 Make vs Buy 핵심:</b><br>
• <b>Make</b>: 내부 역량 충분 + 핵심 비즈니스 + 시장에 맞는 솔루션 없음<br>
• <b>Buy</b>: 내부 역량 부족 + 비핵심 업무 + 검증된 솔루션 존재<br>
• B/C/D는 두 방식 모두에 동일하게 적용되므로 차별적 결정 요인이 아님</div>`,
reference:"CRM Chapter 3: IS Acquisition — Make vs Buy Decision",
keyConcepts:[
"Make vs Buy 결정|조직의 핵심 역량(core competency)과 기술 역량이 최우선 판단 기준",
"Make 선택 조건|내부 기술 역량 충분, 핵심 비즈니스, 시장에 적합한 솔루션 부재",
"Buy 선택 조건|내부 역량 부족, 비핵심 업무, 시장에 검증된 솔루션 존재",
"동일 적용 요소|개인정보 요건, 불명확한 요구사항 등은 Make/Buy 모두에 해당하므로 결정 요인 아님"
]
},
{
id:47, domain:"3", ks:"3A3 System Development Methodologies",
question:`대형 결제 시스템의 IS 감사 중, 코드 커버리지 테스트 과정에서 QA 팀이 로깅 및 트레이싱 도구를 사용하여 <b>비운영 환경</b>을 분석한 것이 확인되었다. 이 조치로 인해 <b>가장 놓치기 쉬운</b> 코드 이슈는?<br><small style="color:#94a3b8">During the IS audit of large payment systems, it was noticed that during code coverage testing, the QA team analyzed a nonproduction environment using logging and tracing tools. Which code issue is MOST likely to be missed?</small>`,
options:[
"경쟁 상태(Race Condition)<br><small style='color:#94a3b8'>Race condition</small>",
"경계값 검사(Bounds Checking)<br><small style='color:#94a3b8'>Bounds checking</small>",
"입력 검증(Input Validation)<br><small style='color:#94a3b8'>Input validation</small>",
"포인터 조작(Pointer Manipulation)<br><small style='color:#94a3b8'>Pointer manipulation</small>"
],
correct:0,
explanation:`<p>로깅/트레이싱 도구를 삽입한 비운영 환경은 <mark>코드 실행 타이밍이 변경</mark>되므로, 운영 환경에서만 발생하는 <b>Race Condition(경쟁 상태)</b>을 놓칠 수 있다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. Race Condition ✅</b></td><td>계측 도구가 타이밍 변경 → 동시성 문제를 마스킹</td></tr>
<tr><td>B. Bounds Checking</td><td>코드 로직 문제 → 환경 무관</td></tr>
<tr><td>C. Input Validation</td><td>코드 로직 문제 → 환경 무관</td></tr>
<tr><td>D. Pointer Manipulation</td><td>코드 로직 문제 → 환경 무관</td></tr></table>
<div class="sbox"><b>🔑 핵심 개념:</b><br>
• <b>Heisenbug(하이젠버그)</b>: 관찰(디버깅 도구) 자체가 버그 동작을 바꾸는 현상<br>
• 계측 도구(instrumentation) 삽입 → 실행 속도 변화 → 타이밍 의존 버그 은폐<br>
• B/C/D는 순수 코드 로직 문제로 환경에 관계없이 발견 가능</div>`,
reference:"CRM Chapter 3: IS Development — Code Coverage Testing",
keyConcepts:[
"Race Condition|두 개 이상의 프로세스가 동시에 자원에 접근할 때 발생하는 타이밍 의존 버그",
"Heisenbug|디버깅/계측 도구 삽입이 버그의 동작을 변경시키는 현상 (관찰이 결과를 바꿈)",
"비운영 환경 테스트 한계|계측 도구가 타이밍을 변경하여 동시성 이슈를 마스킹할 수 있음",
"환경 의존 vs 코드 의존|Race condition=환경 의존, Bounds/Input/Pointer=코드 로직 의존"
]
},
{
id:48, domain:"3", ks:"3A3 System Development Methodologies",
question:`다음 중 <b>전치(transposition) 및 전사(transcription) 오류</b>를 탐지하는 데 효과적인 데이터 검증 편집은?<br><small style="color:#94a3b8">Which of the following data validation edits is effective in detecting transposition and transcription errors?</small>`,
options:[
"범위 검사(Range Check)<br><small style='color:#94a3b8'>Range check</small>",
"검사 숫자(Check Digit)<br><small style='color:#94a3b8'>Check digit</small>",
"유효성 검사(Validity Check)<br><small style='color:#94a3b8'>Validity check</small>",
"중복 검사(Duplicate Check)<br><small style='color:#94a3b8'>Duplicate check</small>"
],
correct:1,
explanation:`<p><b>Check Digit(검사 숫자)</b>는 데이터에 수학적으로 계산된 숫자를 추가하여 원본 데이터의 변조를 탐지한다. <mark>전치(transposition)·전사(transcription) 오류 탐지에 효과적</mark>이다.</p>
<table><tr><th>검증 방법</th><th>목적</th><th>전치/전사 탐지</th></tr>
<tr><td>Range Check</td><td>허용 범위 내 값인지</td><td>❌</td></tr>
<tr><td><b>Check Digit ✅</b></td><td>수학적 계산값 부가 → 원본 변조 탐지</td><td>✅</td></tr>
<tr><td>Validity Check</td><td>사전 정의 기준 부합 여부</td><td>❌</td></tr>
<tr><td>Duplicate Check</td><td>중복 입력 여부</td><td>❌</td></tr></table>
<div class="sbox"><b>🔑 오류 유형:</b><br>
• <b>전치(Transposition)</b>: 1234 → 1324 (순서 바뀜)<br>
• <b>전사(Transcription)</b>: 1234 → 1534 (잘못 입력)<br>
• Check Digit는 수학적 검증이므로 두 오류 모두 탐지 가능</div>`,
reference:"CRM Chapter 3: IS Development — Data Validation Controls",
keyConcepts:[
"Check Digit|데이터에 수학적 계산값을 추가하여 전치·전사 오류를 탐지하는 검증 방법",
"Transposition Error|숫자/문자의 순서가 뒤바뀌는 오류 (예: 1234→1324)",
"Transcription Error|잘못된 값으로 입력되는 오류 (예: 1234→1534)",
"데이터 검증 편집 유형|Range(범위), Check Digit(검사숫자), Validity(유효성), Duplicate(중복)"
]
},
{
id:49, domain:"3", ks:"3A3 System Development Methodologies",
question:`다음 중 프로토타이핑(Prototyping)의 <b>장점</b>은?<br><small style="color:#94a3b8">Which of the following is an advantage of prototyping?</small>`,
options:[
"완성된 시스템은 일반적으로 강력한 내부 통제를 갖추게 된다.<br><small style='color:#94a3b8'>The finished system normally has strong internal controls.</small>",
"프로토타입 시스템은 상당한 시간 및 비용 절감을 제공할 수 있다.<br><small style='color:#94a3b8'>Prototype systems can provide significant time and cost savings.</small>",
"프로토타입 시스템에서는 변경 통제가 덜 복잡하다.<br><small style='color:#94a3b8'>Change control is often less complicated with prototype systems.</small>",
"프로토타이핑은 의도하지 않은 기능이 추가되지 않도록 보장한다.<br><small style='color:#94a3b8'>Prototyping ensures that functions or extras are not added to the intended system.</small>"
],
correct:1,
explanation:`<p>프로토타이핑의 <b>유일한 장점</b>은 <mark>시간·비용 절감</mark>(사용자 상호작용 향상 + 변화하는 요구사항에 빠르게 적응)이다. 나머지는 모두 <b>단점</b>이다.</p>
<table><tr><th>선택지</th><th>장/단점</th><th>이유</th></tr>
<tr><td>A. 강력한 내부 통제</td><td>❌ 단점</td><td>기능 중심 → 보안/통제 약화</td></tr>
<tr><td><b>B. 시간·비용 절감 ✅</b></td><td>✅ 장점</td><td>사용자 피드백 빠름, 요구변화 적응</td></tr>
<tr><td>C. 변경 통제 덜 복잡</td><td>❌ 단점</td><td>오히려 더 복잡해짐</td></tr>
<tr><td>D. 불필요 기능 추가 방지</td><td>❌ 단점</td><td>오히려 scope creep 발생</td></tr></table>
<div class="sbox"><b>🔑 프로토타이핑 정리:</b><br>
• <b>장점</b>: 시간/비용 절감, 사용자 참여 증가, 빠른 피드백<br>
• <b>단점</b>: 내부 통제 약화, 변경 통제 복잡, 기능 비대화, 미완성 상태 운영 위험</div>`,
reference:"CRM Chapter 3: IS Development — Prototyping",
keyConcepts:[
"프로토타이핑 장점|시간·비용 절감, 사용자 상호작용 향상, 요구변화 빠른 적응",
"프로토타이핑 단점|내부 통제 약화, 변경 통제 복잡화, 불필요 기능 추가(scope creep), 미완성 운영 위험",
"프로토타이핑과 보안|기능에 집중하므로 보안/통제가 소홀해지는 경향"
]
},
{
id:50, domain:"3", ks:"3A3 System Development Methodologies",
question:`다음 중 머신러닝(ML)에서 <b>과적합(overfitting)</b> 개념을 가장 잘 설명하는 것은?<br><small style="color:#94a3b8">Which of the following BEST describes the concept of overfitting in machine learning (ML)?</small>`,
options:[
"모델이 훈련 데이터의 기본 패턴과 관계를 포착하지 못할 때 발생한다.<br><small style='color:#94a3b8'>Overfitting happens when a model fails to capture the underlying patterns and relationships in the training data.</small>",
"머신러닝에서 고급 알고리즘이 충분히 활용되지 않을 때 발생한다.<br><small style='color:#94a3b8'>Overfitting occurs when advanced algorithms are underused in ML.</small>",
"ML 모델을 효과적으로 훈련하기에 훈련 데이터가 불충분할 때 발생한다.<br><small style='color:#94a3b8'>Overfitting occurs when the training data are insufficient to train a ML model effectively.</small>",
"모델이 훈련 데이터에서는 잘 작동하지만 새로운 미지의 데이터에 일반화하지 못할 때 발생한다.<br><small style='color:#94a3b8'>Overfitting occurs when a model performs well on the training data but fails to generalize to new, unseen data.</small>"
],
correct:3,
explanation:`<p><b>Overfitting(과적합)</b>은 모델이 <mark>훈련 데이터에는 높은 성능</mark>을 보이지만, <mark>새로운 데이터에 일반화하지 못하는</mark> 현상이다. 모델이 너무 복잡해져서 노이즈까지 학습해버린 결과.</p>
<table><tr><th>선택지</th><th>실제 개념</th></tr>
<tr><td>A. 패턴 포착 실패</td><td><b>Underfitting</b> (모델이 너무 단순)</td></tr>
<tr><td>B. 고급 알고리즘 미활용</td><td>Overfitting과 무관</td></tr>
<tr><td>C. 훈련 데이터 부족</td><td>일반화 문제이긴 하나 overfitting 정의와 다름</td></tr>
<tr><td><b>D. 훈련 OK, 새 데이터 실패 ✅</b></td><td>Overfitting의 정확한 정의</td></tr></table>
<div class="sbox"><b>🔑 ML 핵심 개념:</b><br>
• <b>Overfitting</b>: 훈련 데이터 성능 ↑, 새 데이터 ↓ (노이즈 학습, 모델 과복잡)<br>
• <b>Underfitting</b>: 훈련·새 데이터 모두 ↓ (모델 너무 단순)<br>
• 좋은 모델 = 훈련 데이터와 새 데이터 모두에서 균형 잡힌 성능</div>`,
reference:"CRM Chapter 3: Emerging Technologies — Machine Learning",
keyConcepts:[
"Overfitting(과적합)|모델이 훈련 데이터의 노이즈까지 학습 → 새 데이터에 일반화 실패",
"Underfitting(과소적합)|모델이 너무 단순하여 데이터의 기본 패턴조차 포착하지 못함",
"Overfitting vs Underfitting|Over: 훈련 OK+새 데이터 실패 / Under: 둘 다 실패"
]
},
{
id:51, domain:"3", ks:"3A3 System Development Methodologies",
question:`조직이 ERP(전사적 자원 관리) 애플리케이션을 구현하고 있다. 다음 중 프로젝트가 계획에 따라 진행되고 기대 결과를 달성하는지 감독할 <b>주된 책임</b>이 있는 것은?<br><small style="color:#94a3b8">An organization is implementing an ERP application. Who is PRIMARILY responsible for overseeing the project to ensure that it is progressing in accordance with the project plan and that it will deliver the expected results?</small>`,
options:[
"프로젝트 스폰서(Project Sponsor)<br><small style='color:#94a3b8'>Project sponsor</small>",
"시스템 개발 프로젝트 팀(System Development Project Team)<br><small style='color:#94a3b8'>System development project team</small>",
"프로젝트 운영위원회(Project Steering Committee)<br><small style='color:#94a3b8'>Project steering committee</small>",
"사용자 프로젝트 팀(User Project Team)<br><small style='color:#94a3b8'>User project team</small>"
],
correct:2,
explanation:`<p><b>Project Steering Committee(프로젝트 운영위원회)</b>는 ERP 구현 프로젝트의 <mark>전체 방향을 제시하고 진행 상황을 검토</mark>하여 기대 결과 달성을 감독한다.</p>
<table><tr><th>역할</th><th>책임</th><th>감독?</th></tr>
<tr><td>Project Sponsor</td><td>자금 지원 + 성공 기준(CSF) 정의</td><td>❌</td></tr>
<tr><td>System Dev Team</td><td>할당된 작업 수행, PM 지시 따름</td><td>❌</td></tr>
<tr><td><b>Steering Committee ✅</b></td><td><b>전체 방향 + 진행 상황 검토 + 결과 감독</b></td><td><b>✅</b></td></tr>
<tr><td>User Project Team</td><td>할당된 작업 수행, 개발팀과 소통</td><td>❌</td></tr></table>
<div class="sbox"><b>🔑 역할 구분:</b><br>
• <b>Sponsor</b> = 돈 + 성공 기준 정의 (감독 X)<br>
• <b>Steering Committee</b> = 방향 + 진행 감독 + 결과 검토<br>
• <b>Dev Team / User Team</b> = 실무 수행 (감독 X)</div>`,
reference:"CRM Chapter 3: IS Development — Project Governance",
keyConcepts:[
"Project Steering Committee|프로젝트 전체 방향 제시 + 진행 상황 검토 + 기대 결과 달성 감독",
"Project Sponsor|자금 지원 + 성공 기준(CSF) 정의. 감독 역할은 아님",
"System Dev Team vs User Project Team|둘 다 할당된 작업 수행. Dev=PM 지시, User=개발팀과 소통"
]
},
{
id:52, domain:"3", ks:"3A3 System Development Methodologies",
question:`새로운 애플리케이션 소프트웨어 패키지 획득을 고려할 때, IS 감사인이 <b>통제 사양(control specifications)</b>을 평가하기에 가장 좋은 시점은?<br><small style="color:#94a3b8">The BEST time for an IS auditor to assess the control specifications of a new application software package being considered for acquisition is during:</small>`,
options:[
"내부 실험실 테스트 단계<br><small style='color:#94a3b8'>The internal lab testing phase</small>",
"테스트 단계, 사용자 수락 이전<br><small style='color:#94a3b8'>Testing and prior to user acceptance</small>",
"요구사항 수집 단계<br><small style='color:#94a3b8'>The requirements gathering phase</small>",
"구현 단계<br><small style='color:#94a3b8'>The implementation phase</small>"
],
correct:2,
explanation:`<p>IS 감사인이 통제 사양을 평가할 <b>최적 시점</b>은 <mark>요구사항 정의 단계</mark>이다. 가장 초기에 참여해야 벤더/제품 검토 기회가 최대화되고, 부적절한 솔루션에 대한 비즈니스 커밋을 방지할 수 있다.</p>
<table><tr><th>단계</th><th>감사인 역할</th><th>통제 사양 평가?</th></tr>
<tr><td><b>Requirements ✅</b></td><td><b>통제 요건 정의 + 벤더/제품 검토</b></td><td><b>✅ 최적</b></td></tr>
<tr><td>Lab Testing</td><td>보안 요건 충족 확인</td><td>❌ 이미 늦음</td></tr>
<tr><td>Testing (UAT 전)</td><td>테스트 결과 검증</td><td>❌</td></tr>
<tr><td>Implementation</td><td>통제 활성화 여부 확인</td><td>❌</td></tr></table>
<div class="sbox"><b>🔑 감사인 참여 원칙:</b><br>
• 통제 사양/요건 평가 = <b>요구사항 단계</b> (가장 빠른 시점)<br>
• 빨리 참여할수록 부적절한 솔루션 커밋 방지 가능<br>
• Testing/Implementation은 이미 정해진 통제가 제대로 작동하는지 확인하는 단계</div>`,
reference:"CRM Chapter 3: IS Acquisition — Auditor Involvement",
keyConcepts:[
"통제 사양 평가 최적 시점|요구사항 수집 단계 — 최대 검토 기회 + 부적절 솔루션 커밋 방지",
"감사인 조기 참여 원칙|가능한 한 가장 초기에 참여하여 통제 요건을 계약에 반영",
"단계별 감사인 역할|Requirements=통제 사양 평가, Testing=보안 충족 확인, Implementation=통제 활성화 확인"
]
},
{
id:53, domain:"3", ks:"3A3 System Development Methodologies",
question:`다음 중 새로운 또는 수정된 시스템이 대상 환경에서 <b>기존 시스템에 악영향을 주지 않고</b> 운영될 수 있는지를 판단하는 테스트 유형은?<br><small style="color:#94a3b8">Which type of testing determines whether a new or modified system can operate in its target environment without adversely impacting other existing systems?</small>`,
options:[
"병행 테스트(Parallel Testing)<br><small style='color:#94a3b8'>Parallel testing</small>",
"파일럿 테스트(Pilot Testing)<br><small style='color:#94a3b8'>Pilot testing</small>",
"인터페이스/통합 테스트(Interface/Integration Testing)<br><small style='color:#94a3b8'>Interface/integration testing</small>",
"공존성 테스트(Sociability Testing)<br><small style='color:#94a3b8'>Sociability testing</small>"
],
correct:3,
explanation:`<p><b>Sociability Testing(공존성 테스트)</b>은 새/수정된 시스템이 <mark>대상 환경에서 기존 시스템에 악영향 없이 공존</mark>할 수 있는지 확인한다. 플랫폼, 인터페이스, 데스크톱 변경 등을 포함.</p>
<table><tr><th>테스트</th><th>목적</th><th>기존 시스템 공존?</th></tr>
<tr><td>Parallel</td><td>신·구 시스템 동시 실행, 결과 비교</td><td>❌ 비교 목적</td></tr>
<tr><td>Pilot</td><td>한 장소에서 먼저 운영 후 확대</td><td>❌ 기존 시스템 비활성화 가능</td></tr>
<tr><td>Integration</td><td>모듈 간 연결/데이터 전달 확인</td><td>❌ 실제 운영 환경 아님</td></tr>
<tr><td><b>Sociability ✅</b></td><td><b>대상 환경에서 기존 시스템과 공존 확인</b></td><td><b>✅</b></td></tr></table>
<div class="sbox"><b>🔑 Sociability vs Integration:</b><br>
• <b>Integration</b> = 모듈 간 <b>연결/데이터 전달</b> 확인 ("linked" 키워드)<br>
• <b>Sociability</b> = 실제 운영 환경에서 <b>기존 시스템과 공존</b> 확인 ("adversely impact" 키워드)</div>`,
reference:"CRM Chapter 3: IS Development — Testing Types",
keyConcepts:[
"Sociability Testing|새/수정 시스템이 대상 환경에서 기존 시스템에 악영향 없이 공존 가능한지 확인",
"Parallel Testing|신·구 시스템 동시 실행하여 결과를 비교하는 테스트",
"Sociability vs Integration|Integration=모듈 간 연결 확인, Sociability=운영 환경에서 기존 시스템 공존 확인"
]
},
{
id:54, domain:"3", ks:"3A3 System Development Methodologies",
question:`웹 기반 소프트웨어 개발 프로젝트 검토 중, IS 감사인은 코딩 표준이 시행되지 않고 코드 리뷰가 거의 수행되지 않는다는 것을 발견했다. 이러한 문제는 다음 중 어떤 공격의 성공 가능성을 <b>가장 높이는가</b>?<br><small style="color:#94a3b8">During the review of a web-based software development project, an IS auditor realizes that coding standards are not enforced and code reviews are rarely carried out. These issues will MOST likely increase the likelihood of a successful:</small>`,
options:[
"버퍼 오버플로우(Buffer Overflow)<br><small style='color:#94a3b8'>Buffer overflow</small>",
"무차별 대입 공격(Brute Force Attack)<br><small style='color:#94a3b8'>Brute force attack</small>",
"분산 서비스 거부 공격(DDoS)<br><small style='color:#94a3b8'>Distributed denial of service (DDoS) attack</small>",
"워 다이얼링 공격(War Dialing Attack)<br><small style='color:#94a3b8'>War dialing attack</small>"
],
correct:0,
explanation:`<p>코딩 표준 미시행 + 코드 리뷰 부재 = <mark>코드 품질 저하</mark> → 웹 애플리케이션에서 <b>Buffer Overflow</b> 취약점이 악용될 가능성이 가장 높아진다.</p>
<table><tr><th>공격</th><th>코딩 표준 관련?</th><th>설명</th></tr>
<tr><td><b>Buffer Overflow ✅</b></td><td><b>✅ 직접 관련</b></td><td>불량 코드 → 메모리 경계 미검증 → 악용</td></tr>
<tr><td>Brute Force</td><td>❌</td><td>패스워드 크래킹 (코드 무관)</td></tr>
<tr><td>DDoS</td><td>❌</td><td>대량 패킷으로 서비스 마비 (코드 무관)</td></tr>
<tr><td>War Dialing</td><td>❌</td><td>모뎀/PBX 스캐닝 (코드 무관)</td></tr></table>
<div class="sbox"><b>🔑 코딩 표준의 보안 효과:</b><br>
• 코딩 표준 = 입력 검증, 메모리 관리, 경계 검사 등의 규칙 포함<br>
• 코드 리뷰 = 취약점을 사전에 발견하는 핵심 통제<br>
• 둘 다 없으면 → Buffer Overflow, SQL Injection, XSS 등 코드 기반 취약점 증가</div>`,
reference:"CRM Chapter 3: IS Development — Coding Standards & Security",
keyConcepts:[
"Buffer Overflow|메모리 경계를 초과하여 데이터 기록 → 코드 실행 가능. 코딩 표준 미준수 시 발생 위험 증가",
"코딩 표준과 보안|입력 검증, 메모리 관리, 경계 검사 규칙 → 코드 기반 취약점 방지",
"코드 리뷰|취약점을 사전 발견하는 핵심 통제. 미실시 시 보안 취약점 증가"
]
},
{
id:55, domain:"3", ks:"3A3 System Development Methodologies",
question:`다음 중 <b>병행 테스트(Parallel Testing)</b>를 수행하는 <b>주된 목적</b>은?<br><small style="color:#94a3b8">Which of the following is the PRIMARY purpose for conducting parallel testing?</small>`,
options:[
"시스템이 비용 효율적인지 판단하기 위해<br><small style='color:#94a3b8'>To determine whether the system is cost-effective</small>",
"포괄적인 단위 및 시스템 테스트를 가능하게 하기 위해<br><small style='color:#94a3b8'>To enable comprehensive unit and system testing</small>",
"파일과의 프로그램 인터페이스 오류를 발견하기 위해<br><small style='color:#94a3b8'>To highlight errors in the program interfaces with files</small>",
"새 시스템이 사용자 요구사항을 충족하는지 확인하기 위해<br><small style='color:#94a3b8'>To ensure the new system meets user requirements</small>"
],
correct:3,
explanation:`<p><b>Parallel Testing</b>의 주된 목적은 <mark>신·구 시스템을 동시 실행하여 결과를 비교</mark>함으로써 새 시스템이 사용자 요구사항을 충족하고 정확하게 처리하는지 확인하는 것이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 비용 효율성 판단</td><td>부수적 결과일 뿐, 주목적 아님</td></tr>
<tr><td>B. 단위/시스템 테스트</td><td>Parallel 이전에 이미 완료</td></tr>
<tr><td>C. 파일 인터페이스 오류</td><td>시스템 테스트에서 수행</td></tr>
<tr><td><b>D. 사용자 요구사항 충족 ✅</b></td><td><b>신·구 결과 비교 → 정확한 처리 확인</b></td></tr></table>
<div class="sbox"><b>🔑 Parallel Testing 정리:</b><br>
• 신·구 시스템에 같은 데이터 입력 → 결과 비교<br>
• 목적 = 새 시스템의 <b>정확성</b> + <b>사용자 요구사항 충족</b> 검증<br>
• Unit/System 테스트 완료 후 수행하는 최종 단계 검증</div>`,
reference:"CRM Chapter 3: IS Development — Parallel Testing",
keyConcepts:[
"Parallel Testing 목적|신·구 시스템 동시 실행 + 결과 비교 → 새 시스템의 사용자 요구사항 충족 확인",
"Parallel Testing 시점|Unit → Integration → System 테스트 완료 후 수행",
"Parallel vs Sociability|Parallel=신·구 결과 비교(정확성), Sociability=기존 시스템 공존(영향 없음)"
]
},
{
id:56, domain:"3", ks:"3A3 System Development Methodologies",
question:`사후 검토(Post-Incident Review)를 수행하는 <b>주된 목적</b>은?<br><small style="color:#94a3b8">The PRIMARY objective of performing a postincident review is that it presents an opportunity to:</small>`,
options:[
"내부 통제 프로세스를 개선한다.<br><small style='color:#94a3b8'>Improve the internal control process.</small>",
"업계 모범 사례에 맞게 네트워크를 강화한다.<br><small style='color:#94a3b8'>Harden the network to industry good practices.</small>",
"경영진에게 인시던트 대응 관리의 중요성을 강조한다.<br><small style='color:#94a3b8'>Highlight the importance of incident response management to management.</small>",
"인시던트 대응 프로세스에 대한 직원 인식을 향상시킨다.<br><small style='color:#94a3b8'>Improve employee awareness of the incident response process.</small>"
],
correct:0,
explanation:`<p><b>Post-Incident Review</b>는 사고의 원인과 대응을 분석하여 <mark>교훈(lessons learned)을 도출하고 내부 통제를 개선</mark>하는 것이 주된 목적이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 내부 통제 프로세스 개선 ✅</b></td><td>교훈 → 시정 통제(corrective control) 개선</td></tr>
<tr><td>B. 네트워크 강화</td><td>결과적으로 가능하나 주목적 아님</td></tr>
<tr><td>C. 경영진 중요성 강조</td><td>경영진 교육이 목적이 아님</td></tr>
<tr><td>D. 직원 인식 향상</td><td>부수적 효과일 뿐</td></tr></table>
<div class="sbox"><b>🔑 Post-Incident Review:</b><br>
• 사고 원인 + 대응 분석 → <b>Lessons Learned</b> 도출<br>
• 핵심 = <b>내부 통제(corrective control) 개선</b><br>
• 네트워크 강화, 경영진 교육, 직원 인식은 모두 부수적 효과</div>`,
reference:"CRM Chapter 3: IS Development — Post-Incident Review",
keyConcepts:[
"Post-Incident Review 목적|사고 원인·대응 분석 → 교훈 도출 → 내부 통제 프로세스 개선",
"Lessons Learned|사후 검토에서 도출한 교훈을 보안 프로그램에 반영하여 지속적 개선",
"Corrective Control|사고 후 개선되는 시정 통제 — Post-Incident Review의 핵심 산출물"
]
},
{
id:57, domain:"3", ks:"3A3 System Development Methodologies",
question:`프로젝트 개발 회의에 참석한 IS 감사인이 프로젝트 리스크가 문서화되지 않았음을 발견했다. 이 문제를 제기하자 PM은 리스크를 식별하기에 아직 이르며, 리스크가 프로젝트에 영향을 미치기 시작하면 리스크 매니저를 고용하겠다고 답했다. 감사인의 적절한 대응은?<br><small style="color:#94a3b8">An IS auditor invited to a project development meeting notes that no project risk has been documented. The project manager responds that it is too early to identify risk. The appropriate response of the IS auditor is to:</small>`,
options:[
"이 시점에서 리스크를 고려·문서화하고 비상 계획을 수립하는 것의 중요성을 강조한다.<br><small style='color:#94a3b8'>Stress the importance of spending time at this point to consider and document risk and to develop contingency plans.</small>",
"프로젝트 결과에 대해 PM이 책임지므로 PM의 입장을 수용한다.<br><small style='color:#94a3b8'>Accept the project manager's position because the PM is accountable for the outcome.</small>",
"리스크 매니저가 임명되면 협력하겠다고 제안한다.<br><small style='color:#94a3b8'>Offer to work with the risk manager when one is appointed.</small>",
"요구사항 정의 단계 완료 시 리스크 검토를 수행하겠다고 PM에게 알린다.<br><small style='color:#94a3b8'>Inform the PM that the IS auditor will conduct a review of the risk at the completion of the requirements definition phase.</small>"
],
correct:0,
explanation:`<p>프로젝트 리스크의 대부분은 <mark>프로젝트 시작 전에 식별 가능</mark>하며, 완화/회피 계획을 사전에 수립해야 한다. 리스크 관리는 <b>선제적(forward-looking)</b>이어야 한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 지금 리스크 문서화 강조 ✅</b></td><td>리스크는 가능한 한 빨리 식별 + 비상계획 수립</td></tr>
<tr><td>B. PM 입장 수용</td><td>PM은 리스크 수용 권한 없음. 리스크는 지속적 관리 필요</td></tr>
<tr><td>C. 리스크 매니저 임명 대기</td><td>위험한 지연. 리스크 관리는 선제적이어야</td></tr>
<tr><td>D. 요구사항 후 리스크 검토</td><td>감사인이 직접 리스크 검토 수행 → 독립성 손상</td></tr></table>
<div class="sbox"><b>🔑 프로젝트 리스크 관리 원칙:</b><br>
• 리스크는 <b>프로젝트 시작 전/초기</b>에 식별해야 함<br>
• 리스크 관리 = <b>선제적(forward-looking)</b>, 사후 대응이 아님<br>
• 감사인 역할 = 적절한 관리 실무를 <b>권고</b> (직접 수행 X → 독립성 유지)</div>`,
reference:"CRM Chapter 3: IS Development — Project Risk Management",
keyConcepts:[
"프로젝트 리스크 식별 시점|프로젝트 시작 전/초기에 대부분의 리스크 식별 가능",
"리스크 관리 원칙|선제적(forward-looking) + 지속적 관리. 사후 대응은 실패",
"감사인 독립성|감사인이 직접 리스크 검토를 수행하면 독립성 손상 → 권고만 해야 함"
]
},
{
id:58, domain:"3", ks:"3A3 System Development Methodologies",
question:`레거시 급여 애플리케이션이 새 애플리케이션으로 마이그레이션되었다. 운영 개시(go-live) 전 데이터의 <b>정확성과 완전성</b>을 검토하고 승인할 <b>주된 책임</b>이 있는 이해관계자는?<br><small style="color:#94a3b8">A legacy payroll application was migrated to a new application. Which stakeholder should be PRIMARILY responsible for reviewing and signing off on the accuracy and completeness of the data before going live?</small>`,
options:[
"IS 감사인(Information Systems Auditor)<br><small style='color:#94a3b8'>Information systems (IS) auditor</small>",
"데이터베이스 관리자(DBA)<br><small style='color:#94a3b8'>Database administrator (DBA)</small>",
"프로젝트 관리자(Project Manager)<br><small style='color:#94a3b8'>Project manager</small>",
"데이터 소유자(Data Owner)<br><small style='color:#94a3b8'>Data owner</small>"
],
correct:3,
explanation:`<p>데이터 변환/마이그레이션 단계에서 <b>Data Owner</b>가 <mark>데이터의 정확성·완전성·유효성을 검토하고 승인(sign-off)</mark>할 주된 책임을 진다.</p>
<table><tr><th>역할</th><th>책임</th><th>데이터 승인?</th></tr>
<tr><td>IS Auditor</td><td>Data Owner가 승인했는지 확인(감독)</td><td>❌</td></tr>
<tr><td>DBA</td><td>DB 무결성 유지 + 사용자 가용성</td><td>❌</td></tr>
<tr><td>Project Manager</td><td>일일 프로젝트 관리/리더십</td><td>❌</td></tr>
<tr><td><b>Data Owner ✅</b></td><td><b>데이터 정확성·완전성·유효성 검토 및 승인</b></td><td><b>✅</b></td></tr></table>
<div class="sbox"><b>🔑 데이터 마이그레이션 승인:</b><br>
• <b>Data Owner</b> = 데이터에 대한 최종 책임자 → 마이그레이션 데이터 승인<br>
• IS Auditor = Data Owner의 승인 여부를 <b>확인</b>하는 역할 (직접 승인 X)<br>
• DBA = 기술적 DB 관리 (데이터 내용 승인 X)</div>`,
reference:"CRM Chapter 3: IS Development — Data Migration & Conversion",
keyConcepts:[
"Data Owner 역할|데이터의 정확성·완전성·유효성에 대한 최종 책임자. 마이그레이션 시 sign-off 담당",
"IS Auditor vs Data Owner|Auditor=승인 여부 확인(감독), Owner=직접 검토·승인",
"데이터 마이그레이션 통제|변환 전후 데이터 비교, Data Owner sign-off, 감사인 검증"
]
},
{
id:59, domain:"3", ks:"3A3 System Development Methodologies",
question:`애플리케이션 소프트웨어 획득 제안을 검토하는 IS 감사인이 확인해야 할 사항은?<br><small style="color:#94a3b8">An IS auditor reviewing a proposed application software acquisition should ensure that the:</small>`,
options:[
"사용 중인 운영체제(OS)가 기존 하드웨어 플랫폼과 호환되는지<br><small style='color:#94a3b8'>Operating system (OS) being used is compatible with the existing hardware platform.</small>",
"계획된 OS 업데이트가 기업 요구에 부정적 영향을 최소화하도록 예정되었는지<br><small style='color:#94a3b8'>Planned OS updates have been scheduled to minimize negative impacts on enterprise needs.</small>",
"OS가 최신 버전과 업데이트를 갖추고 있는지<br><small style='color:#94a3b8'>OS has the latest versions and updates.</small>",
"제품이 현재 또는 계획된 OS와 호환되는지<br><small style='color:#94a3b8'>Product is compatible with the current or planned OS.</small>"
],
correct:3,
explanation:`<p>소프트웨어 획득 검토 시 감사인은 <mark>구매할 제품이 현재 또는 계획된 OS와 호환되는지</mark>를 확인해야 한다. 이미 설치·운영 중인 OS 관련 사항은 획득 시 고려 대상이 아니다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. OS-하드웨어 호환</td><td>이미 사용 중이면 호환됨 → 확인 불필요</td></tr>
<tr><td>B. OS 업데이트 일정</td><td>운영 관리 이슈, 획득과 무관</td></tr>
<tr><td>C. OS 최신 버전</td><td>이미 설치된 OS 문제, 획득과 무관</td></tr>
<tr><td><b>D. 제품-OS 호환 ✅</b></td><td><b>획득할 소프트웨어의 핵심 적합성 검토</b></td></tr></table>
<div class="sbox"><b>🔑 소프트웨어 획득 감사 포인트:</b><br>
• 획득 제품이 <b>현재/계획 OS와 호환</b>되는지가 핵심<br>
• 기존 OS/하드웨어 호환성은 이미 검증된 상태<br>
• OS 업데이트/버전 관리는 운영 단계의 관리 이슈</div>`,
reference:"CRM Chapter 3: IS Acquisition — Software Compatibility",
keyConcepts:[
"소프트웨어 획득 감사|구매 제품이 현재 또는 계획된 OS와 호환되는지 확인이 핵심",
"획득 vs 운영 구분|OS 업데이트/버전 관리는 운영 이슈, 획득 시에는 호환성이 핵심",
"호환성 검토 범위|현재 OS + 향후 계획된 OS 모두 포함"
]
},
{
id:60, domain:"3", ks:"3A3 System Development Methodologies",
question:`인공지능 분야에서 <b>자연어 처리(NLP)</b>의 <b>주된 목표</b>는?<br><small style="color:#94a3b8">What is the PRIMARY goal of natural language processing in the field of artificial intelligence?</small>`,
options:[
"인간의 인지 과정과 의사결정을 모방하는 알고리즘을 만든다.<br><small style='color:#94a3b8'>To create algorithms that mimic human cognitive processes and decision making</small>",
"데이터로부터 자율적으로 학습할 수 있는 지능형 시스템을 구축한다.<br><small style='color:#94a3b8'>To build intelligent systems capable of autonomously learning from data</small>",
"인간 언어를 이해하고 생성할 수 있는 기계를 개발한다.<br><small style='color:#94a3b8'>To develop machines capable of understanding and generating human language</small>",
"환경과 상호작용할 수 있는 로봇과 물리적 에이전트를 설계한다.<br><small style='color:#94a3b8'>To design robots and physical agents that can interact with the environment</small>"
],
correct:2,
explanation:`<p><b>NLP(자연어 처리)</b>의 주된 목표는 <mark>기계가 인간 언어를 이해·해석·생성</mark>할 수 있도록 하는 것이다. 번역, 감정 분석, 텍스트 요약, 음성 인식 등이 NLP의 주요 작업.</p>
<table><tr><th>선택지</th><th>실제 분야</th></tr>
<tr><td>A. 인지/의사결정 모방</td><td>AI 전반의 넓은 목표 (NLP 특정 X)</td></tr>
<tr><td>B. 데이터 자율 학습</td><td>Machine Learning</td></tr>
<tr><td><b>C. 인간 언어 이해·생성 ✅</b></td><td><b>NLP의 정확한 정의</b></td></tr>
<tr><td>D. 환경 상호작용 로봇</td><td>Robotics / Embodied AI</td></tr></table>
<div class="sbox"><b>🔑 AI 하위 분야 구분:</b><br>
• <b>NLP</b>: 언어 이해·생성 (번역, 감정분석, 요약, 음성인식)<br>
• <b>ML</b>: 데이터에서 자율 학습<br>
• <b>Robotics</b>: 물리적 환경 상호작용<br>
• <b>AI 전체</b>: 인간 인지/의사결정 모방 (상위 개념)</div>`,
reference:"CRM Chapter 3: Emerging Technologies — Artificial Intelligence",
keyConcepts:[
"NLP(자연어 처리)|기계가 인간 언어를 이해·해석·생성하도록 하는 AI 하위 분야",
"NLP 주요 작업|번역, 감정 분석, 텍스트 요약, 음성 인식",
"AI 하위 분야 구분|NLP=언어, ML=데이터 학습, Robotics=물리적 환경, AI=상위 개념"
]
},
{
id:61, domain:"3", ks:"3A3 System Development Methodologies",
question:`비즈니스 프로세스 자동화 프로젝트에 대한 <b>구현 후 검토(Post-Implementation Review)</b>를 수행하는 <b>주된 목적</b>은?<br><small style="color:#94a3b8">The PRIMARY objective of conducting a postimplementation review for a business process automation project is to:</small>`,
options:[
"프로젝트가 의도한 비즈니스 요구사항을 충족하는지 확인한다.<br><small style='color:#94a3b8'>Ensure that the project meets the intended business requirements.</small>",
"통제의 적절성을 평가한다.<br><small style='color:#94a3b8'>Evaluate the adequacy of controls.</small>",
"기술 표준 준수를 확인한다.<br><small style='color:#94a3b8'>Confirm compliance with technological standards.</small>",
"규제 요건 준수를 확인한다.<br><small style='color:#94a3b8'>Confirm compliance with regulatory requirements.</small>"
],
correct:0,
explanation:`<p><b>Post-Implementation Review</b>의 주된 목적은 <mark>프로젝트가 의도한 비즈니스 요구사항을 충족하는지 확인</mark>하는 것이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 비즈니스 요구사항 충족 ✅</b></td><td>Post-impl Review의 주된 목적</td></tr>
<tr><td>B. 통제 적절성 평가</td><td>일부 포함되나 주목적 아님</td></tr>
<tr><td>C. 기술 표준 준수</td><td>설계/개발 단계에서 다뤄야 함</td></tr>
<tr><td>D. 규제 요건 준수</td><td>설계/개발 단계에서 다뤄야 함</td></tr></table>
<div class="sbox"><b>🔑 Post-Implementation vs Post-Incident:</b><br>
• <b>Post-Implementation Review</b> = 비즈니스 요구사항 충족 확인 (Q11, Q26, Q61)<br>
• <b>Post-Incident Review</b> = 내부 통제 프로세스 개선 (Q56)<br>
• 기술/규제 준수는 <b>설계·개발 단계</b>에서 이미 확인해야 할 사항</div>`,
reference:"CRM Chapter 3: IS Development — Post-Implementation Review",
keyConcepts:[
"Post-Implementation Review 주목적|프로젝트가 의도한 비즈니스 요구사항을 충족하는지 확인",
"Post-Implementation vs Post-Incident|Implementation=비즈니스 요구 충족, Incident=내부 통제 개선",
"기술/규제 준수 확인 시점|설계·개발 단계에서 다뤄야 함 (Post-impl Review가 아님)"
]
},
{
id:62, domain:"3", ks:"3A3 System Development Methodologies",
question:`IS 감사인이 소프트웨어 개발 프로세스를 검토하고 있다. 다음 중 <b>최종 사용자</b>가 수행하기에 적절한 기능은?<br><small style="color:#94a3b8">An IS auditor is reviewing the software development process. Which of the following functions are appropriate for the end users to perform?</small>`,
options:[
"프로그램 출력 테스트(Program Output Testing)<br><small style='color:#94a3b8'>Program output testing</small>",
"시스템 구성(System Configuration)<br><small style='color:#94a3b8'>System configuration</small>",
"프로그램 논리 명세(Program Logic Specification)<br><small style='color:#94a3b8'>Program logic specification</small>",
"성능 튜닝(Performance Tuning)<br><small style='color:#94a3b8'>Performance tuning</small>"
],
correct:0,
explanation:`<p>최종 사용자가 수행할 수 있는 적절한 기능은 <mark>프로그램 출력 테스트</mark>이다. 입력 데이터와 시스템 출력을 비교하여 검증할 수 있다.</p>
<table><tr><th>기능</th><th>사용자 적절?</th><th>이유</th></tr>
<tr><td><b>Output Testing ✅</b></td><td><b>✅</b></td><td>입력 대비 출력 비교 — 사용자도 효과적 수행 가능</td></tr>
<tr><td>System Configuration</td><td>❌</td><td>기술적 + 보안/직무 분리(SoD) 이슈</td></tr>
<tr><td>Logic Specification</td><td>❌</td><td>프로그래머 역할 + SoD 이슈</td></tr>
<tr><td>Performance Tuning</td><td>❌</td><td>고도 기술 필요 + SoD 이슈</td></tr></table>
<div class="sbox"><b>🔑 사용자 역할 원칙:</b><br>
• 사용자 = <b>요구사항 정의 + 테스트(UAT/출력 검증)</b><br>
• 구성·논리·튜닝 = 기술 영역 → 사용자 수행 시 <b>SoD 위반</b><br>
• Output Testing은 프로그래머도 하지만 사용자도 효과적으로 가능</div>`,
reference:"CRM Chapter 3: IS Development — User Roles in SDLC",
keyConcepts:[
"사용자 적절 기능|프로그램 출력 테스트 — 입력 대비 출력 비교 검증",
"사용자 부적절 기능|시스템 구성, 프로그램 논리, 성능 튜닝 — 기술적 + SoD 위반",
"직무 분리(SoD)|사용자가 기술적 기능을 수행하면 직무 분리 원칙 위반"
]
},
{
id:63, domain:"3", ks:"3A3 System Development Methodologies",
question:`애플리케이션 개발 프로젝트의 <b>시스템 테스트 단계</b>에서 IS 감사인이 검토해야 할 것은?<br><small style="color:#94a3b8">During the system testing phase of an application development project, the IS auditor should review the:</small>`,
options:[
"개념 설계 명세(Conceptual Design Specifications)<br><small style='color:#94a3b8'>Conceptual design specifications</small>",
"벤더 계약(Vendor Contract)<br><small style='color:#94a3b8'>Vendor contract</small>",
"오류 보고서(Error Reports)<br><small style='color:#94a3b8'>Error reports</small>",
"프로그램 변경 요청(Program Change Requests)<br><small style='color:#94a3b8'>Program change requests</small>"
],
correct:2,
explanation:`<p>시스템 테스트 단계에서 IS 감사인은 <mark>오류 보고서(Error Reports)</mark>를 검토해야 한다. 잘못된 데이터를 정확히 인식하는지, 오류 해결 절차가 적절한지 확인.</p>
<table><tr><th>선택지</th><th>해당 단계</th><th>판단</th></tr>
<tr><td>A. 개념 설계 명세</td><td>요구사항 정의 단계</td><td>❌</td></tr>
<tr><td>B. 벤더 계약</td><td>소프트웨어 획득 단계</td><td>❌ (부수적)</td></tr>
<tr><td><b>C. 오류 보고서 ✅</b></td><td><b>시스템 테스트 단계</b></td><td><b>✅ 핵심 검토 대상</b></td></tr>
<tr><td>D. 프로그램 변경 요청</td><td>구현 후 단계</td><td>❌</td></tr></table>
<div class="sbox"><b>🔑 SDLC 단계별 감사인 검토 대상:</b><br>
• <b>요구사항</b>: 개념 설계 명세, 통제 사양<br>
• <b>획득</b>: 벤더 계약, OS 호환성<br>
• <b>테스트</b>: <b>오류 보고서</b> (오류 인식 정확성 + 해결 절차)<br>
• <b>구현 후</b>: 프로그램 변경 요청</div>`,
reference:"CRM Chapter 3: IS Development — System Testing Phase",
keyConcepts:[
"테스트 단계 감사인 검토|오류 보고서 — 잘못된 데이터 인식 정확성 + 오류 해결 절차 검토",
"SDLC 단계별 검토 문서|요구사항=설계명세, 획득=벤더계약, 테스트=오류보고서, 구현후=변경요청",
"시스템 테스트 목적|사용자 요구사항이 검증되었는지 확인하는 핵심 단계"
]
},
{
id:64, domain:"3", ks:"3A3 System Development Methodologies",
question:`설문지를 사용하여 결론에 도달할 때까지 일련의 선택을 안내하는 전문가 시스템의 지식 베이스는?<br><small style="color:#94a3b8">The knowledge base of an expert system that uses questionnaires to lead the user through a series of choices before a conclusion is reached is known as:</small>`,
options:[
"규칙(Rules)<br><small style='color:#94a3b8'>Rules</small>",
"의사결정 트리(Decision Trees)<br><small style='color:#94a3b8'>Decision trees</small>",
"의미 네트워크(Semantic Nets)<br><small style='color:#94a3b8'>Semantic nets</small>",
"데이터 흐름도(Dataflow Diagrams)<br><small style='color:#94a3b8'>Dataflow diagrams</small>"
],
correct:1,
explanation:`<p><b>Decision Tree(의사결정 트리)</b>는 설문지(질문)를 통해 <mark>일련의 선택을 안내하여 결론에 도달</mark>하는 지식 표현 방법이다.</p>
<table><tr><th>지식 표현</th><th>설명</th></tr>
<tr><td>Rules</td><td>If-Then 관계로 선언적 지식 표현</td></tr>
<tr><td><b>Decision Tree ✅</b></td><td><b>질문 → 선택 → 결론 순서로 사용자 안내</b></td></tr>
<tr><td>Semantic Nets</td><td>노드(객체) + 아크(관계)의 그래프 구조</td></tr>
<tr><td>Dataflow Diagrams</td><td>시스템 내 데이터 흐름, 로직, 오류 처리 매핑</td></tr></table>
<div class="sbox"><b>🔑 전문가 시스템 지식 표현:</b><br>
• <b>Decision Tree</b> = "questionnaire/choices/conclusion" 키워드<br>
• <b>Rules</b> = "If-Then" 키워드<br>
• <b>Semantic Nets</b> = "nodes/arcs/graph" 키워드</div>`,
reference:"CRM Chapter 3: IS Development — Expert Systems",
keyConcepts:[
"Decision Tree|질문을 통해 일련의 선택을 안내하여 결론에 도달하는 지식 표현 방법",
"Rules (전문가 시스템)|If-Then 관계로 선언적 지식을 표현",
"Semantic Nets|노드(객체)와 아크(관계)로 구성된 그래프 기반 지식 표현",
"Dataflow Diagram|시스템 내 데이터 흐름, 로직, 오류 처리를 매핑하는 도구"
]
},
{
id:65, domain:"3", ks:"3A3 System Development Methodologies",
question:`다음 중 어떤 테스트 단계에서 발견된 실패가 새 애플리케이션 소프트웨어 구현에 <b>가장 큰 영향</b>을 미치는가?<br><small style="color:#94a3b8">A failure discovered in which of the following testing stages would have the GREATEST impact on the implementation of new application software?</small>`,
options:[
"시스템 테스트(System Testing)<br><small style='color:#94a3b8'>System testing</small>",
"수락 테스트(Acceptance Testing)<br><small style='color:#94a3b8'>Acceptance testing</small>",
"통합 테스트(Integration Testing)<br><small style='color:#94a3b8'>Integration testing</small>",
"단위 테스트(Unit Testing)<br><small style='color:#94a3b8'>Unit testing</small>"
],
correct:1,
explanation:`<p><b>Acceptance Testing(수락 테스트)</b>은 소프트웨어 설치 직전의 <mark>최종 단계</mark>이므로, 이 단계에서의 실패는 <b>지연과 비용 초과</b>를 야기하여 구현에 가장 큰 영향을 미친다.</p>
<table><tr><th>테스트</th><th>시점</th><th>실패 영향</th></tr>
<tr><td>Unit</td><td>개별 모듈 (가장 초기)</td><td>낮음</td></tr>
<tr><td>Integration</td><td>모듈 통합</td><td>중간</td></tr>
<tr><td>System</td><td>통합 시스템 전체</td><td>높음 (그래도 수정 가능)</td></tr>
<tr><td><b>Acceptance ✅</b></td><td><b>구현 직전 최종</b></td><td><b>최대 — 지연+비용 초과</b></td></tr></table>
<div class="sbox"><b>🔑 테스트 단계와 실패 영향:</b><br>
• 테스트가 <b>늦을수록</b> 실패의 영향이 커짐<br>
• Unit → Integration → System → <b>Acceptance</b> 순서<br>
• Unit/Integration/System은 개발자 수행, Acceptance는 사용자 수행 (최종 관문)</div>`,
reference:"CRM Chapter 3: IS Development — Testing Stages",
keyConcepts:[
"Acceptance Testing 실패 영향|구현 직전 최종 단계 → 실패 시 지연+비용 초과로 가장 큰 영향",
"테스트 순서|Unit → Integration → System → Acceptance (늦을수록 실패 영향 ↑)",
"테스트 수행자|Unit/Integration/System=개발자, Acceptance=사용자"
]
},
{
id:66, domain:"3", ks:"3A3 System Development Methodologies",
question:`소프트웨어 테스트에서 상향식(Bottom-Up) 접근 방식을 하향식(Top-Down) 대신 사용하는 <b>장점</b>은?<br><small style="color:#94a3b8">An advantage of using a bottom-up versus a top-down approach to software testing is that:</small>`,
options:[
"인터페이스 오류가 더 일찍 발견된다.<br><small style='color:#94a3b8'>Interface errors are detected earlier.</small>",
"시스템에 대한 신뢰가 더 일찍 확보된다.<br><small style='color:#94a3b8'>Confidence in the system is achieved earlier.</small>",
"핵심 모듈의 오류가 더 일찍 발견된다.<br><small style='color:#94a3b8'>Errors in critical modules are detected earlier.</small>",
"주요 기능과 처리가 더 일찍 테스트된다.<br><small style='color:#94a3b8'>Major functions and processing are tested earlier.</small>"
],
correct:2,
explanation:`<p><b>Bottom-Up 테스트</b>는 개별 모듈(프로그램)부터 시작하여 위로 올라가므로, <mark>핵심 모듈의 오류를 조기에 발견</mark>할 수 있다.</p>
<table><tr><th>접근 방식</th><th>시작점</th><th>장점</th></tr>
<tr><td><b>Bottom-Up ✅</b></td><td>개별 모듈 → 위로</td><td><b>핵심 모듈 오류 조기 발견</b></td></tr>
<tr><td>Top-Down</td><td>상위 기능 → 아래로</td><td>인터페이스 오류 조기 발견, 주요 기능 조기 테스트</td></tr></table>
<div class="sbox"><b>🔑 Bottom-Up vs Top-Down:</b><br>
• <b>Bottom-Up</b>: 모듈 먼저 → 핵심 모듈 오류 조기 발견<br>
• <b>Top-Down</b>: 상위 먼저 → 인터페이스 오류 조기 발견 + 주요 기능 조기 테스트<br>
• 인터페이스 오류는 Bottom-Up에서는 통합/시스템 테스트까지 발견 안 됨</div>`,
reference:"CRM Chapter 3: IS Development — Testing Approaches",
keyConcepts:[
"Bottom-Up 테스트|개별 모듈부터 위로 → 핵심 모듈 오류 조기 발견",
"Top-Down 테스트|상위 기능부터 아래로 → 인터페이스 오류 조기 발견",
"Bottom-Up vs Top-Down|Bottom-Up=모듈 오류 조기, Top-Down=인터페이스 오류 조기"
]
},
{
id:67, domain:"3", ks:"3A3 System Development Methodologies",
question:`객체지향(Object-Oriented) 설계 및 개발 기법의 사용은 <b>가장 가능성이 높게</b>:<br><small style="color:#94a3b8">The use of object-oriented design and development techniques MOST likely:</small>`,
options:[
"모듈 재사용 능력을 촉진한다.<br><small style='color:#94a3b8'>Facilitates the ability to reuse modules.</small>",
"시스템 성능을 향상시킨다.<br><small style='color:#94a3b8'>Improves system performance.</small>",
"통제 효과성을 강화한다.<br><small style='color:#94a3b8'>Enhances control effectiveness.</small>",
"시스템 개발 생명주기(SDLC)를 단축한다.<br><small style='color:#94a3b8'>Speeds up the system development life cycle (SDLC).</small>"
],
correct:0,
explanation:`<p>객체지향 설계/개발의 <b>가장 큰 장점</b>은 <mark>모듈 재사용(reuse)</mark>이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 모듈 재사용 ✅</b></td><td>OOD의 핵심 이점</td></tr>
<tr><td>B. 시스템 성능 향상</td><td>OOD의 목적이 아님</td></tr>
<tr><td>C. 통제 효과성 강화</td><td>오히려 감소할 수 있음</td></tr>
<tr><td>D. SDLC 속도 향상</td><td>미래 프로젝트에서만 가능 (초기 프로젝트는 아님)</td></tr></table>
<div class="sbox"><b>🔑 객체지향(OOD) 핵심:</b><br>
• 핵심 장점 = <b>모듈 재사용(Reuse)</b><br>
• 캡슐화(Encapsulation), 상속(Inheritance), 다형성(Polymorphism)<br>
• 통제 효과성은 오히려 감소 가능 → 주의</div>`,
reference:"CRM Chapter 3: IS Development — Object-Oriented Design",
keyConcepts:[
"OOD 핵심 장점|모듈 재사용(Reuse) — 객체지향 설계/개발의 가장 큰 이점",
"OOD와 통제|통제 효과성은 오히려 감소할 수 있음 (장점이 아님)",
"OOD와 SDLC 속도|초기 프로젝트는 빨라지지 않음, 미래 프로젝트에서 재사용으로 단축 가능"
]
},
{
id:68, domain:"3", ks:"3A3 System Development Methodologies",
question:`내부 애플리케이션 <b>인터페이스 오류</b>를 가능한 한 빨리 식별하기 위해 <b>가장 적절한</b> 테스트 접근 방식은?<br><small style="color:#94a3b8">Which testing approach is MOST appropriate to ensure that internal application interface errors are identified as soon as possible?</small>`,
options:[
"상향식 테스트(Bottom-Up Testing)<br><small style='color:#94a3b8'>Bottom-up testing</small>",
"공존성 테스트(Sociability Testing)<br><small style='color:#94a3b8'>Sociability testing</small>",
"하향식 테스트(Top-Down Testing)<br><small style='color:#94a3b8'>Top-down testing</small>",
"시스템 테스트(System Testing)<br><small style='color:#94a3b8'>System testing</small>"
],
correct:2,
explanation:`<p><b>Top-Down Testing</b>은 상위 기능부터 아래로 진행하므로 <mark>인터페이스 오류를 조기에 발견</mark>할 수 있다.</p>
<table><tr><th>접근 방식</th><th>인터페이스 오류 조기?</th><th>이유</th></tr>
<tr><td>Bottom-Up</td><td>❌</td><td>개별 모듈부터 → 인터페이스는 나중에 발견</td></tr>
<tr><td>Sociability</td><td>❌</td><td>개발 후반부 단계</td></tr>
<tr><td><b>Top-Down ✅</b></td><td><b>✅</b></td><td><b>상위부터 → 인터페이스 연결 먼저 테스트</b></td></tr>
<tr><td>System</td><td>❌</td><td>개발 후반부 단계</td></tr></table>
<div class="sbox"><b>🔑 Q66 + Q68 세트 정리:</b><br>
• "인터페이스 오류 조기" → <b>Top-Down</b><br>
• "핵심 모듈 오류 조기" → <b>Bottom-Up</b><br>
• 이 두 문제는 세트로 출제됨!</div>`,
reference:"CRM Chapter 3: IS Development — Testing Approaches",
keyConcepts:[
"Top-Down 테스트 장점|상위부터 진행 → 인터페이스 오류 조기 발견 + 주요 기능 조기 테스트",
"Top-Down vs Bottom-Up 세트|인터페이스=Top-Down, 핵심 모듈=Bottom-Up (빈출 세트 문제)",
"Sociability/System 테스트 시점|개발 후반부에 수행 → 조기 발견 목적에 부적합"
]
},
{
id:69, domain:"3", ks:"3A3 System Development Methodologies",
question:`진행 중인 프로젝트를 검토하던 IS 감사인이 예상 혜택 감소와 비용 증가로 <b>비즈니스 케이스가 더 이상 유효하지 않음</b>을 발견했다. 감사인이 권고해야 할 사항은?<br><small style="color:#94a3b8">An IS auditor observed that the business case was no longer valid because of a reduction in anticipated benefits and increased costs. The IS auditor should recommend that the:</small>`,
options:[
"프로젝트를 중단한다.<br><small style='color:#94a3b8'>Project be discontinued.</small>",
"비즈니스 케이스를 업데이트하고 가능한 시정 조치를 식별한다.<br><small style='color:#94a3b8'>Business case be updated and possible corrective actions be identified.</small>",
"프로젝트를 프로젝트 스폰서에게 재승인을 위해 반환한다.<br><small style='color:#94a3b8'>Project be returned to the project sponsor for re-approval.</small>",
"프로젝트를 완료하고 비즈니스 케이스를 나중에 업데이트한다.<br><small style='color:#94a3b8'>Project be completed and the business case be updated later.</small>"
],
correct:1,
explanation:`<p>비즈니스 케이스가 유효하지 않을 때, 감사인은 <mark>비즈니스 케이스를 현행화하고 시정 조치를 식별</mark>할 것을 권고해야 한다. 비즈니스 케이스는 프로젝트 전체 기간 동안 의사결정의 핵심 입력이므로 항상 최신 상태를 유지해야 한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 프로젝트 중단</td><td>업데이트 전에 중단 판단 불가</td></tr>
<tr><td><b>B. 비즈니스 케이스 업데이트 + 시정 조치 ✅</b></td><td><b>먼저 현행화 → 그 후 판단</b></td></tr>
<tr><td>C. 스폰서에게 재승인 반환</td><td>업데이트 완료 후에야 가능</td></tr>
<tr><td>D. 완료 후 업데이트</td><td>업데이트 없이 진행 = 위험</td></tr></table>
<div class="sbox"><b>🔑 비즈니스 케이스 원칙:</b><br>
• 비즈니스 케이스 = 프로젝트 전 기간 의사결정의 <b>핵심 입력</b><br>
• 항상 <b>최신 상태 유지</b> 필요<br>
• 유효하지 않으면: 업데이트 먼저 → 시정 조치 식별 → 그 후 중단/계속/재승인 판단</div>`,
reference:"CRM Chapter 3: IS Development — Business Case Management",
keyConcepts:[
"비즈니스 케이스 현행화|프로젝트 전 기간 동안 최신 상태 유지 필요 — 의사결정의 핵심 입력",
"유효성 상실 시 절차|업데이트 먼저 → 시정 조치 식별 → 중단/계속/재승인 판단은 그 후",
"감사인 역할|중단/완료를 직접 결정하지 않고, 업데이트와 시정 조치를 권고"
]
},
{
id:70, domain:"3", ks:"3A3 System Development Methodologies",
question:`IT 개발 프로젝트에 사용된 비즈니스 케이스 문서는 언제까지 보존해야 하는가?<br><small style="color:#94a3b8">Documentation of a business case used in an IT development project should be retained until:</small>`,
options:[
"시스템 생명주기 종료 시<br><small style='color:#94a3b8'>The end of the system's life cycle.</small>",
"프로젝트 승인 시<br><small style='color:#94a3b8'>The project is approved.</small>",
"시스템의 사용자 수락 시<br><small style='color:#94a3b8'>User acceptance of the system.</small>",
"시스템이 운영에 들어갈 때<br><small style='color:#94a3b8'>The system is in production.</small>"
],
correct:0,
explanation:`<p>비즈니스 케이스는 <mark>시스템 생명주기 전체에 걸쳐</mark> 사용되므로 <b>생명주기 종료까지 보존</b>해야 한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 생명주기 종료 ✅</b></td><td>전체 기간 참조: 원래 의도, 추정 vs 실적 비교, 교훈</td></tr>
<tr><td>B. 프로젝트 승인</td><td>승인 후에도 검증·참조 필요</td></tr>
<tr><td>C. 사용자 수락</td><td>이후에도 참조 필요</td></tr>
<tr><td>D. 운영 시작</td><td>운영 후 비용/혜택 검증 필요</td></tr></table>
<div class="sbox"><b>🔑 비즈니스 케이스 보존 이유:</b><br>
• 새 관리자를 위한 <b>앵커(anchor)</b> 역할<br>
• "왜 이렇게 했지?", "원래 의도는?" 질문에 답변<br>
• <b>추정 vs 실적</b> 비교 → 미래 비즈니스 케이스 교훈<br>
• 운영 후에도 약속된 비용/혜택 검증에 필요</div>`,
reference:"CRM Chapter 3: IS Development — Business Case Retention",
keyConcepts:[
"비즈니스 케이스 보존 기간|시스템 생명주기 종료까지 — 전체 기간 참조용",
"보존 이유|새 관리자 앵커, 원래 의도 확인, 추정 vs 실적 비교, 교훈 도출",
"비즈니스 케이스 연속성|Q69: 유효성 상실→업데이트, Q70: 생명주기 종료까지 보존"
]
},
{
id:71, domain:"3", ks:"3A3 System Development Methodologies",
question:`새 시스템 설계에 중지점 또는 동결점(Stop/Freezing Point)을 설정하는 이유는?<br><small style="color:#94a3b8">The reason for establishing a stop or freezing point on the design of a new system is to:</small>`,
options:[
"진행 중인 프로젝트에 대한 추가 변경을 방지한다.<br><small style='color:#94a3b8'>Prevent further changes to a project in process.</small>",
"설계가 완료되어야 하는 시점을 표시한다.<br><small style='color:#94a3b8'>Indicate the point at which the design is to be completed.</small>",
"그 시점 이후의 변경에 대해 비용 효과성 평가를 요구한다.<br><small style='color:#94a3b8'>Require that changes after that point be evaluated for cost-effectiveness.</small>",
"프로젝트 관리팀에 프로젝트 설계에 대한 더 많은 통제권을 제공한다.<br><small style='color:#94a3b8'>Provide the project management team with more control over the project design.</small>"
],
correct:2,
explanation:`<p>프로젝트는 특히 요구사항 정의 단계에서 확장되기 쉽다. <b>Stop/Freezing Point</b>는 <mark>이후 변경에 대해 비용 효과성 평가를 의무화</mark>하여 scope creep을 통제한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 추가 변경 방지</td><td>변경을 막는 게 아니라 통제하는 것</td></tr>
<tr><td>B. 설계 완료 시점</td><td>인위적 완료점이 아님</td></tr>
<tr><td><b>C. 비용 효과성 평가 요구 ✅</b></td><td><b>변경을 금지하지 않고 평가를 의무화</b></td></tr>
<tr><td>D. PM 설계 통제권</td><td>요구사항 통제이지 설계 통제가 아님</td></tr></table>
<div class="sbox"><b>🔑 Stop/Freezing Point:</b><br>
• 변경 자체를 <b>금지하지 않음</b> → 변경의 <b>비용 효과성 평가를 의무화</b><br>
• Scope Creep 방지 메커니즘<br>
• 비용 혜택과 투자 회수 기간(payback period) 재검토</div>`,
reference:"CRM Chapter 3: IS Development — Project Control",
keyConcepts:[
"Stop/Freezing Point|이후 변경에 대해 비용 효과성 평가를 의무화하는 통제 메커니즘",
"변경 금지 vs 변경 통제|동결점은 변경을 막는 게 아니라 평가를 요구하는 것",
"Scope Creep 방지|동결점 설정으로 요구사항 확장을 통제 → 비용 초과 방지"
]
},
{
id:72, domain:"3", ks:"3A3 System Development Methodologies",
question:`제안된 트랜잭션 처리 애플리케이션은 다수의 데이터 캡처 소스와 종이·전자 형태의 출력을 가진다. 처리 중 트랜잭션이 손실되지 않도록 하기 위해 IS 감사인이 권고해야 할 통제는?<br><small style="color:#94a3b8">A proposed transaction processing application will have many data capture sources and outputs. To ensure that transactions are not lost during processing, an IS auditor should recommend the inclusion of:</small>`,
options:[
"검증 통제(Validation Controls)<br><small style='color:#94a3b8'>Validation controls</small>",
"내부 신뢰성 검사(Internal Credibility Checks)<br><small style='color:#94a3b8'>Internal credibility checks</small>",
"사무 통제 절차(Clerical Control Procedures)<br><small style='color:#94a3b8'>Clerical control procedures</small>",
"자동화된 시스템 밸런싱(Automated Systems Balancing)<br><small style='color:#94a3b8'>Automated systems balancing</small>"
],
correct:3,
explanation:`<p><b>Automated Systems Balancing</b>은 <mark>총 입력과 총 출력을 자동으로 비교</mark>하여 불균형 발생 시 조사·수정을 위해 보고한다. 트랜잭션 손실 방지에 가장 효과적.</p>
<table><tr><th>통제</th><th>손실 탐지?</th><th>이유</th></tr>
<tr><td>Validation Controls</td><td>❌</td><td>정확성/완전성 검증 (손실 탐지 X)</td></tr>
<tr><td>Internal Credibility Checks</td><td>❌</td><td>처리 오류 탐지 (손실 탐지 X)</td></tr>
<tr><td>Clerical Procedures</td><td>△</td><td>가능하나 수작업 → 오류 취약</td></tr>
<tr><td><b>Automated Balancing ✅</b></td><td><b>✅</b></td><td><b>입력 총합 vs 출력 총합 자동 비교</b></td></tr></table>
<div class="sbox"><b>🔑 트랜잭션 손실 방지:</b><br>
• <b>Automated Systems Balancing</b> = 입력/출력 총합 자동 비교 → 불균형 보고<br>
• Clerical도 가능하나 자동화가 오류에 덜 취약<br>
• Validation/Credibility는 데이터 품질 통제이지 손실 탐지가 아님</div>`,
reference:"CRM Chapter 3: IS Development — Transaction Processing Controls",
keyConcepts:[
"Automated Systems Balancing|입력 총합 vs 출력 총합 자동 비교 → 트랜잭션 손실 탐지·보고",
"Validation vs Balancing|Validation=데이터 품질, Balancing=트랜잭션 완전성(손실 탐지)",
"자동화 vs 수작업|Clerical도 손실 탐지 가능하나 자동화가 오류에 덜 취약"
]
},
{
id:73, domain:"3", ks:"3A3 System Development Methodologies",
question:`표준화된 인프라를 구현하는 <b>가장 가능성 높은 이점</b>은?<br><small style="color:#94a3b8">Which of the following is the MOST likely benefit of implementing a standardized infrastructure?</small>`,
options:[
"IT 서비스 제공 및 운영 지원의 비용 효율성 향상<br><small style='color:#94a3b8'>Improved cost-effectiveness of IT service delivery and operational support</small>",
"IT 서비스 제공 센터의 보안 강화<br><small style='color:#94a3b8'>Increased security of the IT service delivery center</small>",
"IT 인프라 투자 수준 감소<br><small style='color:#94a3b8'>Reduced level of investment in the IT infrastructure</small>",
"향후 애플리케이션 변경 테스트 필요성 감소<br><small style='color:#94a3b8'>Reduced need for testing future application changes</small>"
],
correct:0,
explanation:`<p>표준화된 IT 인프라는 일관된 플랫폼/OS를 제공하여 <mark>관리 부담 감소 + 운영 도구 구현 간소화</mark> → IT 서비스 비용 효율성이 향상된다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 비용 효율성 향상 ✅</b></td><td>다양한 플랫폼 관리 부담 ↓ + 도구 구현 간소화</td></tr>
<tr><td>B. 보안 강화</td><td>동질 환경 → 오히려 공격에 취약</td></tr>
<tr><td>C. 투자 감소</td><td>전환 비용이 비쌈 → 총 투자 감소 보장 X</td></tr>
<tr><td>D. 테스트 필요성 감소</td><td>간소화 가능하나 테스트 자체는 여전히 필요</td></tr></table>
<div class="sbox"><b>🔑 표준화된 인프라:</b><br>
• <b>장점</b>: 관리 간소화, 운영 도구 통합, 비용 효율성 ↑<br>
• <b>주의</b>: 동질 환경 = 보안 취약(한 가지 공격으로 전체 영향)<br>
• 전환 비용이 비쌀 수 있음 → 총 투자 감소 보장 아님</div>`,
reference:"CRM Chapter 3: IS Development — Standardized Infrastructure",
keyConcepts:[
"표준화 인프라 장점|관리 부담 감소 + 운영 도구 간소화 → IT 서비스 비용 효율성 향상",
"표준화 인프라 보안 주의|동질 환경 → 하나의 취약점이 전체에 영향 → 오히려 공격에 취약",
"표준화 vs 투자|전환 비용이 비쌀 수 있어 총 투자 수준 감소를 보장하지 않음"
]
},
{
id:74, domain:"3", ks:"3A3 System Development Methodologies",
question:`의료 조직의 시스템 개발 검토 중, IS 감사인은 프로그램 변경 테스트를 위해 <b>테스트 환경에서 운영 데이터</b>가 사용되고 있음을 발견했다. 이 상황에서 <b>가장 중대한</b> 잠재 리스크는?<br><small style="color:#94a3b8">An IS auditor notes that production data are used in the test environment to test program changes in a health care organization. What is the MOST significant potential risk?</small>`,
options:[
"테스트 환경에 데이터 정확성을 보장하는 적절한 통제가 없을 수 있다.<br><small style='color:#94a3b8'>The test environment may not have adequate controls to ensure data accuracy.</small>",
"운영 데이터 사용으로 테스트 환경이 부정확한 결과를 생성할 수 있다.<br><small style='color:#94a3b8'>The test environment may produce inaccurate results due to use of production data.</small>",
"테스트 환경의 하드웨어가 운영 환경과 동일하지 않을 수 있다.<br><small style='color:#94a3b8'>Hardware in the test environment may not be identical to the production environment.</small>",
"테스트 환경에 데이터 기밀성을 보장하는 적절한 접근 통제가 구현되지 않았을 수 있다.<br><small style='color:#94a3b8'>The test environment may not have adequate access controls implemented to ensure data confidentiality.</small>"
],
correct:3,
explanation:`<p>테스트 환경은 운영 환경과 동일한 접근 통제가 구성되지 않는 경우가 많다. 개발자가 테스트 목적으로 <b>특권 접근</b>을 가지므로, 운영 데이터 사용 시 <mark>무단 접근 및 데이터 유출 위험</mark>이 가장 크다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 데이터 정확성</td><td>운영 데이터가 대표적이면 문제 없음</td></tr>
<tr><td>B. 부정확한 결과</td><td>오히려 운영 데이터가 테스트 정확성 ↑</td></tr>
<tr><td>C. 하드웨어 불일치</td><td>운영 데이터 사용과 직접 무관</td></tr>
<tr><td><b>D. 접근 통제 부족 → 기밀성 ✅</b></td><td><b>개발자 특권 접근 + 민감 환자 데이터 노출</b></td></tr></table>
<div class="sbox"><b>🔑 테스트 환경 + 운영 데이터 리스크:</b><br>
• 테스트 환경 = 개발자 <b>특권 접근</b> (운영과 다른 접근 통제)<br>
• 운영 데이터 = 민감 정보 포함 → <b>기밀성 침해</b> 위험<br>
• 특히 의료 조직: 환자 데이터 보호 = 법적 의무 + 엄격한 처벌<br>
• Q34(Sanitized data 장점) + Q45(운영 데이터 단점) + Q74(기밀성 리스크) 세트</div>`,
reference:"CRM Chapter 3: IS Development — Test Environment Controls",
keyConcepts:[
"테스트 환경 운영 데이터 리스크|접근 통제 부족 → 개발자 특권 접근 → 데이터 기밀성 침해",
"테스트 환경 접근 통제|운영 환경과 다른 접근 권한 구성 → 민감 데이터 노출 위험",
"의료 데이터 특수성|환자 데이터 기밀성 = 법적 의무, 위반 시 엄격한 처벌"
]
},
{
id:75, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 새 시스템의 사용자 수락 테스트(UAT)가 개발자의 결함 수정으로 <b>반복적으로 중단</b>되고 있음을 발견했다. 감사인의 <b>최선의 권고</b>는?<br><small style="color:#94a3b8">An IS auditor finds that UAT of a new system is being repeatedly interrupted by defect fixes from developers. Which is the BEST recommendation?</small>`,
options:[
"별도 사용자 수락 환경의 타당성을 검토한다.<br><small style='color:#94a3b8'>Consider the feasibility of a separate user acceptance environment.</small>",
"사용자 테스트를 매일 특정 시간에 수행하도록 일정을 잡는다.<br><small style='color:#94a3b8'>Schedule user testing to occur at a given time each day.</small>",
"소스 코드 버전 관리 도구를 구현한다.<br><small style='color:#94a3b8'>Implement a source code version-control tool.</small>",
"고우선순위 결함만 재테스트한다.<br><small style='color:#94a3b8'>Only retest high-priority defects.</small>"
],
correct:0,
explanation:`<p>개발과 테스트 코드베이스를 <b>분리</b>해야 한다. <mark>별도 UAT 환경</mark>을 구축하면 결함 수정이 테스트를 중단시키지 않고, 통제된 방식으로 마이그레이션할 수 있다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 별도 UAT 환경 ✅</b></td><td>개발/테스트 분리 → 중단 없는 테스트</td></tr>
<tr><td>B. 시간 분리</td><td>같은 환경 공유 → 최적 생산성 불가</td></tr>
<tr><td>C. 버전 관리 도구</td><td>좋은 관행이나 환경 분리 문제 해결 X</td></tr>
<tr><td>D. 고우선순위만 재테스트</td><td>저우선순위도 의도치 않은 결과 위험</td></tr></table>
<div class="sbox"><b>🔑 환경 분리 원칙:</b><br>
• <b>개발/테스트/운영 환경 분리</b> = 기본 원칙<br>
• 결함 수정은 개발 환경 → 통제된 마이그레이션 → 테스트 환경<br>
• 별도 환경 = 회귀 테스트 관리 용이 + 운영 코드 무결성 보장</div>`,
reference:"CRM Chapter 3: IS Development — Test Environment Separation",
keyConcepts:[
"환경 분리 원칙|개발/테스트/운영 환경을 분리하여 코드 무결성 보장",
"UAT 중단 해결|별도 UAT 환경 구축 → 결함 수정이 테스트를 중단시키지 않음",
"통제된 마이그레이션|결함 수정 후 개발 환경에서 테스트 환경으로 통제된 이관"
]
},
{
id:76, domain:"3", ks:"3A4 Control Identification and Design",
question:`시스템 개발 프로젝트에서 <b>Scope Creep을 통제</b>하는 <b>최선의 방법</b>은?<br><small style="color:#94a3b8">Which of the following is the BEST method of controlling scope creep in a system development project?</small>`,
options:[
"요구사항 변경에 대한 페널티를 정의한다.<br><small style='color:#94a3b8'>Defining penalties for changes in requirements</small>",
"소프트웨어 베이스라인을 수립한다.<br><small style='color:#94a3b8'>Establishing a software baseline</small>",
"매트릭스 프로젝트 관리 구조를 채택한다.<br><small style='color:#94a3b8'>Adopting a matrix project management structure</small>",
"프로젝트의 크리티컬 패스를 식별한다.<br><small style='color:#94a3b8'>Identifying the critical path of the project</small>"
],
correct:1,
explanation:`<p><b>Software Baselining</b>은 설계 단계의 <mark>컷오프 포인트</mark>로, 사용자 요구사항에 대한 엄격한 검토 후 설정된다. 이후 모든 변경은 <b>엄격한 공식 변경 통제·승인 절차</b>를 거쳐야 한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 변경 페널티</td><td>도움 가능하나 최선 아님</td></tr>
<tr><td><b>B. Software Baseline ✅</b></td><td><b>컷오프 후 공식 변경 통제/승인 의무화</b></td></tr>
<tr><td>C. 매트릭스 구조</td><td>관리 권한 공유일 뿐, scope creep과 무관</td></tr>
<tr><td>D. 크리티컬 패스</td><td>시간 추적 도구, scope 통제 X</td></tr></table>
<div class="sbox"><b>🔑 Scope Creep 통제 세트 (Q18+Q22+Q71+Q76):</b><br>
• <b>Baseline</b> = 설계 단계 컷오프 → 이후 공식 변경 통제<br>
• <b>Freezing Point</b> = 이후 변경의 비용 효과성 평가 의무화<br>
• <b>Scope Creep</b> = 부적절한 요구사항 관리로 인한 통제 없는 변경</div>`,
reference:"CRM Chapter 3: IS Development — Scope Control & Baselining",
keyConcepts:[
"Software Baseline|설계 단계 컷오프 → 이후 변경은 공식 변경 통제·승인 절차 필수",
"Scope Creep 통제|Baseline 수립이 최선. 페널티는 보조적 수단",
"Baseline vs Freezing Point|Baseline=설계 기준점, Freezing Point=비용 효과성 평가 의무화"
]
},
{
id:77, domain:"3", ks:"3A4 Control Identification and Design",
question:`새로 개발된 시스템이 운영에 들어간 후 <b>실제로 사용될 것</b>이라는 <b>최선의 지표</b>는?<br><small style="color:#94a3b8">Which of the following is the BEST indicator that a newly developed system will be used after it is in production?</small>`,
options:[
"회귀 테스트(Regression Testing)<br><small style='color:#94a3b8'>Regression testing</small>",
"사용자 수락 테스트(User Acceptance Testing)<br><small style='color:#94a3b8'>User acceptance testing</small>",
"공존성 테스트(Sociability Testing)<br><small style='color:#94a3b8'>Sociability testing</small>",
"병행 테스트(Parallel Testing)<br><small style='color:#94a3b8'>Parallel testing</small>"
],
correct:1,
explanation:`<p><b>UAT(사용자 수락 테스트)</b>는 시스템이 의도대로 작동하는지 <mark>사용자가 직접 확인</mark>한다. UAT 결과가 좋으면 사용자 채택 가능성이 높아지고, 나쁘면 채택이 어렵다.</p>
<table><tr><th>테스트</th><th>사용자 채택 지표?</th><th>이유</th></tr>
<tr><td>Regression</td><td>❌</td><td>기존 기능 깨짐 확인 (사용자 경험 X)</td></tr>
<tr><td><b>UAT ✅</b></td><td><b>✅</b></td><td><b>사용자가 직접 의도대로 작동 확인</b></td></tr>
<tr><td>Sociability</td><td>❌</td><td>다른 시스템과 공존 확인</td></tr>
<tr><td>Parallel</td><td>❌</td><td>신·구 결과 비교 (사용자 만족 X)</td></tr></table>
<div class="sbox"><b>🔑 UAT의 다양한 출제 포인트:</b><br>
• 시간 부족해도 <b>UAT 절대 생략 불가</b> (Q7)<br>
• UAT 계획 = <b>요구사항 단계</b>에서 준비 (Q40)<br>
• UAT 성공 = 시스템 <b>사용자 채택</b>의 최선 지표 (Q77)<br>
• UAT 환경은 <b>개발 환경과 분리</b> (Q75)</div>`,
reference:"CRM Chapter 3: IS Development — User Acceptance Testing",
keyConcepts:[
"UAT와 사용자 채택|UAT 결과가 좋으면 사용자 채택 가능성 ↑, 나쁘면 채택 어려움",
"UAT 출제 포인트 총정리|생략 불가(Q7), 요구사항 단계 준비(Q40), 채택 지표(Q77), 환경 분리(Q75)",
"테스트별 목적 구분|Regression=기존 기능, UAT=사용자 확인, Sociability=공존, Parallel=비교"
]
},
{
id:78, domain:"3", ks:"3A4 Control Identification and Design",
question:`새 비즈니스 애플리케이션이 OS의 표준 구성에서 벗어나야 한다. IS 감사인이 보안 관리자에게 <b>첫 번째 대응</b>으로 권고해야 할 활동은?<br><small style="color:#94a3b8">A new business application requires deviation from the standard OS configuration. What should the IS auditor recommend as a FIRST response?</small>`,
options:[
"보안 정책에 반하므로 요청을 즉시 거부한다.<br><small style='color:#94a3b8'>Initial rejection of the request because it is against the security policy</small>",
"비즈니스 요구를 충족하기 위해 정책 예외를 승인한다.<br><small style='color:#94a3b8'>Approval of the exception to policy to meet business needs</small>",
"리스크를 평가하고 보상 통제를 식별한다.<br><small style='color:#94a3b8'>Assessment of the risk and identification of compensating controls</small>",
"OS 베이스라인 구성을 수정한다.<br><small style='color:#94a3b8'>Revision of the OS baseline configuration</small>"
],
correct:2,
explanation:`<p>보안 정책 일탈 요청 시 <b>첫 번째 대응</b>은 <mark>리스크 평가 + 보상 통제 식별</mark>이다. 이를 기반으로 예외 처리 프로세스에 따라 승인 여부를 결정한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 즉시 거부</td><td>보안 관리자가 거부할 권한 아님 (경영진 승인 가능)</td></tr>
<tr><td>B. 예외 승인</td><td>리스크 평가 없이 승인 불가</td></tr>
<tr><td><b>C. 리스크 평가 + 보상 통제 ✅</b></td><td><b>예외 승인 전 반드시 선행</b></td></tr>
<tr><td>D. 베이스라인 수정</td><td>일탈 요청 ≠ 베이스라인 변경</td></tr></table>
<div class="sbox"><b>🔑 보안 정책 예외 처리 순서:</b><br>
1. <b>리스크 평가</b> + <b>보상 통제 식별</b> (첫 번째)<br>
2. 정의된 예외 처리 프로세스에 따라 승인 요청<br>
3. 경영진이 리스크 수용 여부 결정<br>
• 즉시 거부/승인 모두 부적절</div>`,
reference:"CRM Chapter 3: IS Development — Security Policy Exception Handling",
keyConcepts:[
"보안 정책 예외 첫 번째 대응|리스크 평가 + 보상 통제 식별 → 그 후 예외 처리 프로세스",
"보상 통제(Compensating Controls)|원래 통제를 대체하여 리스크를 완화하는 대안 통제",
"예외 처리 원칙|즉시 거부/승인 모두 부적절 → 리스크 기반 판단 후 경영진 승인"
]
},
{
id:79, domain:"3", ks:"3A4 Control Identification and Design",
question:`구현 후 검토 결과, 사용자의 <b>75%만 동시 로그인</b>할 수 있는 것으로 나타났다. 이 약점을 <b>가장 잘 발견</b>할 수 있었던 테스트는?<br><small style="color:#94a3b8">Postimplementation review indicates only 75% of users can log in concurrently. Which testing could have BEST discovered this weakness?</small>`,
options:[
"부하 테스트(Load Testing)<br><small style='color:#94a3b8'>Load testing</small>",
"스트레스 테스트(Stress Testing)<br><small style='color:#94a3b8'>Stress testing</small>",
"복구 테스트(Recovery Testing)<br><small style='color:#94a3b8'>Recovery testing</small>",
"볼륨 테스트(Volume Testing)<br><small style='color:#94a3b8'>Volume testing</small>"
],
correct:0,
explanation:`<p><b>Load Testing</b>은 <mark>정상 및 피크 조건에서 소프트웨어 성능을 평가</mark>한다. 정상 수의 동시 사용자를 지원하지 못하는 것은 Load Testing이 부적절했음을 의미한다.</p>
<table><tr><th>테스트</th><th>목적</th><th>관련?</th></tr>
<tr><td><b>Load ✅</b></td><td><b>정상/피크 조건 성능 평가</b></td><td><b>✅ 정상 동시 사용자 미지원</b></td></tr>
<tr><td>Stress</td><td>비정상적 과부하 대처</td><td>❌ 정상 범위 내 문제</td></tr>
<tr><td>Recovery</td><td>장애 후 복구 능력</td><td>❌</td></tr>
<tr><td>Volume</td><td>대량 레코드(데이터) 처리</td><td>❌ 사용자 아닌 레코드</td></tr></table>
<div class="sbox"><b>🔑 성능 테스트 구분:</b><br>
• <b>Load</b> = 정상/피크 동시 <b>사용자</b> 성능<br>
• <b>Stress</b> = <b>비정상</b> 과부하 한계점 (Q1)<br>
• <b>Volume</b> = 대량 <b>레코드/데이터</b> 처리<br>
• Load vs Stress: "정상 범위" → Load / "한계 초과" → Stress</div>`,
reference:"CRM Chapter 3: IS Development — Performance Testing",
keyConcepts:[
"Load Testing|정상/피크 조건에서 동시 사용자 성능 평가",
"Load vs Stress|Load=정상/피크 조건, Stress=비정상 과부하 한계",
"Volume Testing|대량 레코드(데이터) 처리 평가 — 사용자가 아닌 데이터 기준"
]
},
{
id:80, domain:"3", ks:"3A4 Control Identification and Design",
question:`애플리케이션 개발이 오프쇼어 벤더에게 아웃소싱되었다. IS 감사인이 <b>가장 우려</b>해야 할 사항은?<br><small style="color:#94a3b8">The development of an application has been outsourced to an offshore vendor. Which should be of GREATEST concern to an IS auditor?</small>`,
options:[
"감사권 조항이 계약에 포함되지 않았다.<br><small style='color:#94a3b8'>The right to audit clause was not included in the contract.</small>",
"비즈니스 케이스가 수립되지 않았다.<br><small style='color:#94a3b8'>The business case was not established.</small>",
"소스 코드 에스크로 합의가 없었다.<br><small style='color:#94a3b8'>There was no source code escrow agreement.</small>",
"계약에 변경 관리 절차가 포함되지 않았다.<br><small style='color:#94a3b8'>The contract does not cover change management procedures.</small>"
],
correct:1,
explanation:`<p>비즈니스 케이스가 없으면 <mark>비즈니스 근거, 리스크, 완화 전략이 평가되지 않고</mark> 경영진의 공식 승인 없이 진행된 것이다. 이는 조직에 <b>가장 큰 리스크</b>를 제시한다.</p>
<table><tr><th>선택지</th><th>우려 수준</th></tr>
<tr><td>A. 감사권 조항 누락</td><td>리스크 있으나 최대 아님</td></tr>
<tr><td><b>B. 비즈니스 케이스 미수립 ✅</b></td><td><b>근거/리스크/완화 미평가 → 최대 리스크</b></td></tr>
<tr><td>C. 소스 코드 에스크로 없음</td><td>리스크 있으나 최대 아님</td></tr>
<tr><td>D. 변경 관리 절차 누락</td><td>리스크 있으나 최대 아님</td></tr></table>
<div class="sbox"><b>🔑 비즈니스 케이스 = 프로젝트의 출발점:</b><br>
• 비즈니스 케이스 없음 = 근거·리스크·완화 미평가 + 경영진 미승인<br>
• 감사권/에스크로/변경관리 = 중요하지만 비즈니스 케이스보다 하위<br>
• Q41(ROI), Q69(유효성 상실→업데이트), Q70(생명주기 종료까지 보존), Q80(미수립=최대 리스크)</div>`,
reference:"CRM Chapter 3: IS Acquisition — Outsourcing & Business Case",
keyConcepts:[
"비즈니스 케이스 미수립 리스크|근거/리스크/완화 미평가 + 경영진 미승인 → 최대 리스크",
"아웃소싱 계약 요소|감사권, 소스 코드 에스크로, 변경 관리 — 모두 중요하나 비즈니스 케이스가 최우선",
"비즈니스 케이스 총정리|ROI(Q41), 유효성→업데이트(Q69), 보존(Q70), 미수립=최대 리스크(Q80)"
]
},
{
id:81, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 새 데이터 센터 구축 프로젝트의 <b>타당성 조사(Feasibility Study)</b>를 검토하고 있다. 다음 중 <b>가장 우려</b>되는 발견 사항은?<br><small style="color:#94a3b8">An IS auditor reviewing a feasibility study for a critical project to build a new data center is MOST concerned about which finding?</small>`,
options:[
"프로젝트가 전체 프로젝트 포트폴리오에 어떻게 부합하는지 결정되지 않았다.<br><small style='color:#94a3b8'>How the project fits into the overall project portfolio has not been determined.</small>",
"프로젝트의 조직적 영향이 평가되지 않았다.<br><small style='color:#94a3b8'>The organizational impact of the project has not been assessed.</small>",
"모든 IT 이해관계자에게 의견 제공 기회가 주어지지 않았다.<br><small style='color:#94a3b8'>Not all IT stakeholders have been given an opportunity to provide input.</small>",
"데이터 센터의 환경 영향이 고려되지 않았다.<br><small style='color:#94a3b8'>The environmental impact of the data center has not been considered.</small>"
],
correct:1,
explanation:`<p><b>타당성 조사</b>는 프로젝트의 <b>전략적 혜택</b>을 결정한다. 따라서 <mark>조직적 영향(비용·혜택·리스크 비교)</mark>이 평가되지 않은 것이 가장 큰 우려.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 포트폴리오 위치 미결정</td><td>타당성 확인 후에 우선순위 배정</td></tr>
<tr><td><b>B. 조직적 영향 미평가 ✅</b></td><td><b>타당성 조사의 핵심 — 비용/혜택/리스크 비교</b></td></tr>
<tr><td>C. 모든 이해관계자 미참여</td><td>전체 참여 불필요 — 의사결정 가능자만</td></tr>
<tr><td>D. 환경 영향 미고려</td><td>포함되어야 하나 조직 영향보다 하위</td></tr></table>
<div class="sbox"><b>🔑 타당성 조사(Feasibility Study):</b><br>
• 핵심 = <b>조직적 영향 평가</b> (비용, 혜택, 리스크 비교 보고서)<br>
• 포트폴리오 우선순위 = 타당성 확인 <b>후</b>에 배정<br>
• 전체 이해관계자 참여 불필요 — 지식 있는 의사결정자만으로 충분</div>`,
reference:"CRM Chapter 3: IS Development — Feasibility Study",
keyConcepts:[
"타당성 조사 핵심|조직적 영향 평가 — 비용·혜택·리스크 비교가 핵심 목적",
"타당성 vs 포트폴리오|타당성 확인 후에 포트폴리오 내 우선순위 배정",
"타당성 조사 참여자|전체 IT 조직 참여 불필요 — 의사결정 가능한 지식 보유자"
]
},
{
id:82, domain:"3", ks:"3A4 Control Identification and Design",
question:`구현 후 검토(Post-Implementation Review)의 <b>주된 목적</b>은 다음을 확인하는 것이다:<br><small style="color:#94a3b8">The PRIMARY purpose of a postimplementation review is to ascertain that:</small>`,
options:[
"교훈이 문서화되었다.<br><small style='color:#94a3b8'>The lessons learned have been documented.</small>",
"향후 개선사항을 식별할 수 있다.<br><small style='color:#94a3b8'>Future enhancements can be identified.</small>",
"프로젝트가 시간과 예산 내에 전달되었다.<br><small style='color:#94a3b8'>The project has been delivered on time and budget.</small>",
"프로젝트 목표가 달성되었다.<br><small style='color:#94a3b8'>Project objectives have been met.</small>"
],
correct:3,
explanation:`<p><b>Post-Implementation Review</b>의 주된 목적은 <mark>프로젝트가 의도된 비즈니스 요구를 충족하고 목표를 달성했는지</mark> 확인하는 것이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 교훈 문서화</td><td>중요하나 목표 달성 확인보다 하위</td></tr>
<tr><td>B. 향후 개선사항</td><td>주목적 아님</td></tr>
<tr><td>C. 시간·예산 준수</td><td>중요하나 비즈니스 요구 충족보다 하위</td></tr>
<tr><td><b>D. 프로젝트 목표 달성 ✅</b></td><td><b>설계된 문제 해결 여부 확인</b></td></tr></table>
<div class="sbox"><b>🔑 Post-Implementation Review 빈출 세트:</b><br>
• Q11: 설계대로 작동? → Post-impl Review<br>
• Q26: 가치/ROI 측정 → Post-impl Review<br>
• Q61: 비즈니스 요구사항 충족 = 주목적<br>
• Q82: 프로젝트 목표 달성 = 주목적<br>
• 시간/예산/교훈/개선은 모두 <b>부수적</b></div>`,
reference:"CRM Chapter 3: IS Development — Post-Implementation Review",
keyConcepts:[
"Post-Implementation Review 주목적|프로젝트 목표 달성 여부 = 비즈니스 요구 충족 확인",
"부수적 목적|교훈 문서화, 향후 개선, 시간·예산 준수 — 모두 중요하나 주목적 아님",
"Post-impl Review 출제 패턴|항상 '비즈니스 요구/목표 달성'이 정답 (Q11, Q26, Q61, Q82)"
]
},
{
id:83, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 릴리스 후 애플리케이션의 <b>구현 후 검토(Post-Implementation Review)</b> 프로세스가 완료되었는지 확인하는 <b>주된 이유</b>는?<br><small style="color:#94a3b8">What is the PRIMARY reason that an IS auditor verifies that the process of postimplementation review of an application was completed after a release?</small>`,
options:[
"사용자가 적절히 교육받았는지 확인하기 위해<br><small style='color:#94a3b8'>To make sure that users are appropriately trained</small>",
"프로젝트가 예산 내에 있었는지 확인하기 위해<br><small style='color:#94a3b8'>To verify that the project was within budget</small>",
"프로젝트가 기대를 충족하는지 확인하기 위해<br><small style='color:#94a3b8'>To check that the project meets expectations</small>",
"적절한 통제가 구현되었는지 판단하기 위해<br><small style='color:#94a3b8'>To determine whether proper controls were implemented</small>"
],
correct:2,
explanation:`<p><b>Post-Implementation Review</b>의 목적은 시스템 구현이 <mark>계획된 목표를 달성했는지(비즈니스 목표 + 리스크 수용 기준 충족)</mark> 확인하는 것이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 사용자 교육 확인</td><td>PIR 목적 아님</td></tr>
<tr><td>B. 예산 준수</td><td>개발 중 모니터링 사항</td></tr>
<tr><td><b>C. 기대 충족 ✅</b></td><td><b>비즈니스 목표 + 리스크 기준 달성 확인</b></td></tr>
<tr><td>D. 통제 구현</td><td>중요하나 기대 충족보다 하위</td></tr></table>
<div class="sbox"><b>🔑 Post-Implementation Review 완전 정리:</b><br>
• Q11: 설계대로 작동? → PIR<br>
• Q26: 가치/ROI 측정 → PIR<br>
• Q61: 비즈니스 요구사항 충족 = 주목적<br>
• Q82: 프로젝트 목표 달성 = 주목적<br>
• Q83: 기대 충족 = 주목적<br>
• <b>정답 패턴: "목표/기대/요구사항 충족"</b></div>`,
reference:"CRM Chapter 3: IS Development — Post-Implementation Review",
keyConcepts:[
"PIR 주목적 반복 확인|프로젝트가 기대/목표를 충족하는지 확인 — 5번 출제(Q11,Q26,Q61,Q82,Q83)",
"PIR에서 확인하지 않는 것|사용자 교육은 PIR 목적 아님, 예산은 개발 중 모니터링",
"통제 vs 기대|통제 구현 확인도 중요하나 비즈니스 기대 충족이 항상 최우선"
]
},
{
id:84, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 조직의 <b>IT 프로젝트 포트폴리오</b>를 검토할 때 <b>주요 고려사항</b>은?<br><small style="color:#94a3b8">The MAJOR consideration for an IS auditor reviewing an organization's IT project portfolio is the:</small>`,
options:[
"IT 예산<br><small style='color:#94a3b8'>IT budget</small>",
"기존 IT 환경<br><small style='color:#94a3b8'>Existing IT environment</small>",
"비즈니스 계획<br><small style='color:#94a3b8'>Business plan</small>",
"투자 계획<br><small style='color:#94a3b8'>Investment plan</small>"
],
correct:2,
explanation:`<p>포트폴리오 관리는 IT 전략의 <b>전체적(holistic) 관점</b>을 취한다. 프로젝트 자금 배정의 가장 중요한 결정 요소는 <mark>프로젝트가 조직의 전략적 목표를 얼마나 잘 충족하는지</mark>이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. IT 예산</td><td>자원 활용 중요하나 비즈니스 계획보다 하위</td></tr>
<tr><td>B. 기존 IT 환경</td><td>Gap analysis용, 비즈니스 계획보다 하위</td></tr>
<tr><td><b>C. 비즈니스 계획 ✅</b></td><td><b>IT 전략 = 비즈니스 전략 정렬이 핵심</b></td></tr>
<tr><td>D. 투자 계획</td><td>우선순위 설정용, 비즈니스 계획보다 하위</td></tr></table>
<div class="sbox"><b>🔑 포트폴리오 관리 원칙:</b><br>
• IT 전략 = <b>비즈니스 전략에 정렬</b> (최우선)<br>
• 포트폴리오 = 전체적(holistic) 관점에서 IT 전략 검토<br>
• 예산/환경/투자는 중요하지만 비즈니스 계획(전략 목표)이 항상 최우선</div>`,
reference:"CRM Chapter 3: IS Development — IT Portfolio Management",
keyConcepts:[
"포트폴리오 검토 주요 고려사항|비즈니스 계획 — IT 전략이 비즈니스 전략과 정렬되는지",
"포트폴리오 관리|전체적(holistic) 관점에서 IT 전략 검토 + 자금 배정 결정",
"IT-비즈니스 정렬|프로젝트 자금 배정의 핵심 = 전략적 목표 충족 정도"
]
},
{
id:85, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 대기업의 IT 프로젝트를 검토하면서, 해당 연도에 수행된 프로젝트가 비즈니스에서 <b>가장 높은 우선순위</b>를 부여받고 <b>최대 비즈니스 가치</b>를 창출하는지 확인하려 한다. 가장 관련 있는 것은?<br><small style="color:#94a3b8">An IS auditor wants to determine whether IT projects are those assigned highest priority and will generate the greatest business value. Which is MOST relevant?</small>`,
options:[
"역량 성숙도 모델(CMM)<br><small style='color:#94a3b8'>Capability maturity model (CMM)</small>",
"포트폴리오 관리(Portfolio Management)<br><small style='color:#94a3b8'>Portfolio management</small>",
"구성 관리(Configuration Management)<br><small style='color:#94a3b8'>Configuration management</small>",
"프로젝트 관리 지식 체계(PMBOK)<br><small style='color:#94a3b8'>Project management body of knowledge</small>"
],
correct:1,
explanation:`<p><b>Portfolio Management</b>는 조직 내 <mark>프로젝트 집합의 정의·우선순위·승인·실행</mark>을 지원한다. 주어진 예산 내에서 최적의 프로젝트 세트를 식별.</p>
<table><tr><th>선택지</th><th>목적</th><th>포트폴리오 최적화?</th></tr>
<tr><td>CMM</td><td>IT 프로세스 성숙도 평가 (Level 0~5)</td><td>❌</td></tr>
<tr><td><b>Portfolio Management ✅</b></td><td><b>프로젝트 우선순위·승인·최적화</b></td><td><b>✅</b></td></tr>
<tr><td>Configuration Management</td><td>IT 시스템 구성/변경 관리</td><td>❌</td></tr>
<tr><td>PMBOK</td><td>개별 프로젝트 관리 방법론</td><td>❌</td></tr></table>
<div class="sbox"><b>🔑 Portfolio vs Project Management:</b><br>
• <b>Portfolio</b> = 어떤 프로젝트를 할지 (우선순위, 가치, 정렬)<br>
• <b>Project</b> = 선택된 프로젝트를 어떻게 할지 (일정, 자원, 품질)<br>
• CMM = 프로세스 성숙도 평가 (포트폴리오 최적화 도구 아님)</div>`,
reference:"CRM Chapter 3: IS Development — Portfolio Management",
keyConcepts:[
"Portfolio Management 목적|프로젝트 정의·우선순위·승인 → 예산 내 최적 프로젝트 세트 식별",
"Portfolio vs Project Management|Portfolio=어떤 프로젝트(what), Project=어떻게(how)",
"CMM vs Portfolio|CMM=프로세스 성숙도 평가, Portfolio=프로젝트 최적화 (구분!)"
]
},
{
id:86, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 기업의 시스템 개발 테스트 정책을 검토하고 있다. 테스트에 <b>운영 데이터 사용</b>에 관해 <b>가장 적절한</b> 진술은?<br><small style="color:#94a3b8">An IS auditor is reviewing a testing policy. Which statement concerning use of production data for testing would be MOST appropriate?</small>`,
options:[
"운영 데이터를 테스트에 사용하기 전에 IS 및 비즈니스 고위 경영진의 승인을 받아야 한다.<br><small style='color:#94a3b8'>Senior IS and business management must approve use before production data can be used for testing.</small>",
"운영 데이터를 보안 테스트 환경에 복사하면 사용할 수 있다.<br><small style='color:#94a3b8'>Production data can be used if they are copied to a secure test environment.</small>",
"운영 데이터는 절대 사용할 수 없다. 모든 테스트 데이터는 별도 개발해야 한다.<br><small style='color:#94a3b8'>Production data can never be used. All test data must be developed.</small>",
"기밀 유지 합의가 있으면 운영 데이터를 사용할 수 있다.<br><small style='color:#94a3b8'>Production data can be used if confidentiality agreements are in place.</small>"
],
correct:0,
explanation:`<p>운영 데이터 사용에는 기밀성 침해, 데이터 손상 등의 리스크가 있다. 그러나 일부 경우(레거시 인터페이스, MIS 등) 운영 데이터가 필요할 수 있으므로 <mark>경영진 승인 + 리스크 완화 조건 합의</mark>가 가장 적절.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 경영진 사전 승인 ✅</b></td><td><b>리스크 수용 + 마스킹 등 완화 조건 합의</b></td></tr>
<tr><td>B. 보안 환경 복사</td><td>좋은 관행이나 경영진 승인 없이 불가</td></tr>
<tr><td>C. 절대 사용 금지</td><td>이상적이나 현실적으로 항상 가능하지 않음</td></tr>
<tr><td>D. 기밀 합의만으로 OK</td><td>경영진 허가가 먼저, 기밀 합의는 그 후</td></tr></table>
<div class="sbox"><b>🔑 운영 데이터 테스트 사용 정리:</b><br>
• Q34: Sanitized live data 장점 = 실제 대표<br>
• Q45: 단점 = 모든 기능 커버 불가<br>
• Q74: 가장 큰 리스크 = 기밀성(접근 통제 부족)<br>
• Q86: 사용 조건 = <b>경영진 사전 승인</b> + 완화 조건(마스킹 등)</div>`,
reference:"CRM Chapter 3: IS Development — Test Data Policy",
keyConcepts:[
"운영 데이터 테스트 사용 조건|IS/비즈니스 경영진 사전 승인 + 리스크 완화 조건(마스킹 등) 합의",
"운영 데이터 사용 리스크|기밀성 침해, 데이터 손상, 법규 위반 가능",
"운영 데이터 테스트 세트|Q34(장점), Q45(단점), Q74(기밀성 리스크), Q86(경영진 승인)"
]
},
{
id:87, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 운영 1주 전인 새 웹 기반 주문 시스템을 검토 중, 고객 신용카드 정보 저장 관련 <b>핵심 통제가 누락</b>되었을 수 있음을 발견했다. 감사인이 <b>먼저</b> 해야 할 것은?<br><small style="color:#94a3b8">An IS auditor reviewing a new web-based order entry system identified that critical controls regarding credit card storage may be missing. The IS auditor should FIRST:</small>`,
options:[
"시스템 개발자가 적절한 보안 조치에 대해 교육받았는지 확인한다.<br><small style='color:#94a3b8'>Determine whether system developers have proper training on adequate security measures.</small>",
"시스템 관리자가 어떤 이유로 보안 통제를 비활성화했는지 확인한다.<br><small style='color:#94a3b8'>Determine whether system administrators have disabled security controls for any reason.</small>",
"프로젝트 계획에 보안 요구사항이 올바르게 명시되었는지 확인한다.<br><small style='color:#94a3b8'>Verify that security requirements have been properly specified in the project plan.</small>",
"보안 통제가 더 이상 유효하지 않은 요구사항에 기반하는지 검증한다.<br><small style='color:#94a3b8'>Validate whether security controls are based on requirements which are no longer valid.</small>"
],
correct:2,
explanation:`<p>핵심 통제가 누락된 경우, 첫 번째 질문은 <mark>프로젝트 계획에 보안 요구사항이 올바르게 포함되었는지</mark>이다. 요구사항 포함 여부에 따라 감사인의 권고가 달라진다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 개발자 보안 교육</td><td>중요하나 요구사항 확인이 먼저</td></tr>
<tr><td>B. 관리자 통제 비활성화</td><td>아직 구성 전 (운영 1주 전)</td></tr>
<tr><td><b>C. 프로젝트 계획 보안 요구사항 ✅</b></td><td><b>근본 원인(요구사항 누락?) 확인이 첫 번째</b></td></tr>
<tr><td>D. 요구사항 유효성</td><td>통제 누락 = 불완전한 요구사항 기반 설계 결함</td></tr></table>
<div class="sbox"><b>🔑 통제 누락 발견 시 접근 순서:</b><br>
1. <b>프로젝트 계획에 보안 요구사항 명시 여부 확인</b> (근본 원인)<br>
2. 요구사항 있었다면 → 구현 과정 문제 조사<br>
3. 요구사항 없었다면 → 요구사항 정의 프로세스 문제<br>
• 항상 <b>근본 원인(요구사항)</b>부터 확인!</div>`,
reference:"CRM Chapter 3: IS Development — Security Requirements Review",
keyConcepts:[
"통제 누락 시 첫 번째 조치|프로젝트 계획에 보안 요구사항이 올바르게 명시되었는지 확인",
"요구사항 기반 접근|요구사항 포함 여부에 따라 권고가 달라짐 — 근본 원인 파악이 우선",
"운영 전 보안 검토|구현 직전이라도 핵심 통제 누락은 반드시 확인·해결해야 함"
]
},
{
id:88, domain:"3", ks:"3A4 Control Identification and Design",
question:`금융 거래의 EDI 통신에서 금액 필드에 대한 <b>체크섬(Checksum)</b>의 목적은 다음을 보장하는 것이다:<br><small style="color:#94a3b8">The purpose of a checksum on an amount field in an EDI communication of financial transactions is to ensure:</small>`,
options:[
"무결성(Integrity)<br><small style='color:#94a3b8'>Integrity</small>",
"인증성(Authenticity)<br><small style='color:#94a3b8'>Authenticity</small>",
"권한 부여(Authorization)<br><small style='color:#94a3b8'>Authorization</small>",
"부인 방지(Nonrepudiation)<br><small style='color:#94a3b8'>Nonrepudiation</small>"
],
correct:0,
explanation:`<p>금액 필드의 <b>체크섬</b>은 EDI 통신 시 <mark>무단 변경을 탐지</mark>하여 <b>무결성(Integrity)</b>을 보장한다.</p>
<table><tr><th>보안 속성</th><th>체크섬?</th><th>보장 수단</th></tr>
<tr><td><b>Integrity ✅</b></td><td><b>✅</b></td><td>체크섬, 해시, CRC</td></tr>
<tr><td>Authenticity</td><td>❌</td><td>인증서, 디지털 서명 등</td></tr>
<tr><td>Authorization</td><td>❌</td><td>접근 통제, 권한 관리</td></tr>
<tr><td>Nonrepudiation</td><td>❌</td><td>디지털 서명</td></tr></table>
<div class="sbox"><b>🔑 보안 속성별 통제:</b><br>
• <b>Integrity</b> = 체크섬, 해시, CRC (변경 탐지)<br>
• <b>Authenticity</b> = 인증서, 디지털 서명 (신원 확인)<br>
• <b>Nonrepudiation</b> = 디지털 서명 (부인 방지)<br>
• <b>Authorization</b> = 접근 통제 (권한 확인)</div>`,
reference:"CRM Chapter 3: IS Development — EDI Controls",
keyConcepts:[
"Checksum 목적|데이터 무결성(Integrity) 보장 — 무단 변경 탐지",
"Integrity vs Authenticity|Integrity=변경 탐지, Authenticity=신원 확인 (별도 통제)",
"Nonrepudiation|디지털 서명으로 보장 — 체크섬만으로는 불가"
]
},
{
id:89, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인은 온라인 <b>전자 자금 이체(EFT) 조정 절차</b> 검토 시 다음을 포함하도록 해야 한다:<br><small style="color:#94a3b8">An IS auditor should ensure that review of online electronic funds transfer reconciliation procedures includes:</small>`,
options:[
"증빙 대조(Vouching)<br><small style='color:#94a3b8'>Vouching</small>",
"권한 부여(Authorizations)<br><small style='color:#94a3b8'>Authorizations</small>",
"수정(Corrections)<br><small style='color:#94a3b8'>Corrections</small>",
"추적(Tracing)<br><small style='color:#94a3b8'>Tracing</small>"
],
correct:3,
explanation:`<p><b>Tracing</b>은 거래를 원본 소스에서 최종 목적지까지 추적하는 조정 활동이다. EFT에서는 <mark>고객 영수증 → 시스템 감사 추적/로그 → 일일 거래 마스터 파일</mark> 순으로 추적한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>Vouching</td><td>자금 이체 중 수행 (조정 시 아님)</td></tr>
<tr><td>Authorizations</td><td>온라인에서 시스템이 자동 처리</td></tr>
<tr><td>Corrections</td><td>검토 대상이나 별도 인원이 수행</td></tr>
<tr><td><b>Tracing ✅</b></td><td><b>원본→최종 목적지 추적 = 조정의 핵심</b></td></tr></table>
<div class="sbox"><b>🔑 Tracing vs Vouching:</b><br>
• <b>Tracing</b> = 원본 → 최종 목적지 방향 (순방향 추적) — <b>조정(Reconciliation)</b>에 사용<br>
• <b>Vouching</b> = 최종 기록 → 원본 방향 (역방향 추적) — <b>거래 중</b> 수행<br>
• EFT 조정 = 영수증 → 감사 로그 → 마스터 파일 (Tracing)</div>`,
reference:"CRM Chapter 3: IS Development — EFT Reconciliation Controls",
keyConcepts:[
"Tracing|거래를 원본 소스에서 최종 목적지까지 순방향 추적 — 조정의 핵심",
"Tracing vs Vouching|Tracing=순방향(조정), Vouching=역방향(거래 중 검증)",
"EFT 조정 절차|고객 영수증 → 시스템 감사 추적/로그 → 일일 거래 마스터 파일"
]
},
{
id:90, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 새 비즈니스 인텔리전스 프로젝트에서 <b>시간 제약과 요구 확대</b>가 기업 데이터 정의 표준 위반의 근본 원인임을 발견했다. 감사인의 <b>가장 적절한</b> 제안은?<br><small style="color:#94a3b8">An IS auditor found time constraints and expanded needs to be root causes for violations of data definition standards. Which is the MOST appropriate suggestion?</small>`,
options:[
"프로젝트에 투입되는 리소스를 증가시켜 표준 정렬을 달성한다.<br><small style='color:#94a3b8'>Achieve standards alignment through an increase of resources devoted to the project.</small>",
"프로젝트 완료 후 데이터 정의 표준을 정렬한다.<br><small style='color:#94a3b8'>Align the data definition standards after completion of the project.</small>",
"표준 준수가 달성될 때까지 프로젝트를 지연한다.<br><small style='color:#94a3b8'>Delay the project until compliance with standards can be achieved.</small>",
"위반자에 대한 징벌 조치를 채택하여 표준 준수를 시행한다.<br><small style='color:#94a3b8'>Enforce standard compliance by adopting punitive measures against violators.</small>"
],
correct:0,
explanation:`<p>시간 제약이 근본 원인이므로, <mark>리소스를 추가하여 표준 정렬을 별도 작업 패키지로 할당</mark>하는 것이 가장 적절하다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 리소스 추가 ✅</b></td><td><b>근본 원인(시간 부족) 해결 + 프로젝트 계속</b></td></tr>
<tr><td>B. 완료 후 정렬</td><td>비표준 데이터 = 오류 리스크, 사후 변경 위험</td></tr>
<tr><td>C. 프로젝트 지연</td><td>비즈니스 요구 + 수익성 손상</td></tr>
<tr><td>D. 위반자 처벌</td><td>감사인 권한 밖, 원인 파악 전 부적절</td></tr></table>
<div class="sbox"><b>🔑 표준 위반 대응 원칙:</b><br>
• 근본 원인(시간/리소스 부족) 해결이 우선<br>
• 프로젝트 지연·사후 수정 = 비용/리스크 증가<br>
• 처벌 = 감사인 권한 밖 + 원인 파악이 먼저<br>
• 표준 정렬을 <b>별도 작업 패키지</b>로 추가 리소스에 할당</div>`,
reference:"CRM Chapter 3: IS Development — Data Standards Compliance",
keyConcepts:[
"표준 위반 대응|근본 원인(시간/리소스 부족) 해결 → 리소스 추가로 표준 정렬",
"사후 표준 정렬 리스크|비표준 데이터 = 오류 리스크 + 사후 변경 시 추가 위험",
"감사인 권한 범위|처벌 조치는 감사인 권한 밖 — 권고만 해야 함"
]
},
{
id:91, domain:"3", ks:"3A4 Control Identification and Design",
question:`IS 감사인이 IS 프로젝트의 <b>범위가 변경</b>되었으나 <b>영향 연구(Impact Study)가 수행되지 않았음</b>을 발견했다. 감사인의 <b>주된 우려</b>는?<br><small style="color:#94a3b8">An IS auditor discovers that the scope of an IS project has changed and an impact study has not been performed. What should be the PRIMARY concern?</small>`,
options:[
"변경으로 인한 시간 및 비용 영향<br><small style='color:#94a3b8'>Time and cost implications caused by the change</small>",
"회귀 테스트가 실패할 리스크<br><small style='color:#94a3b8'>Risk that regression tests will fail</small>",
"사용자가 변경에 동의하지 않을 것<br><small style='color:#94a3b8'>Users not agreeing with the change</small>",
"프로젝트 팀이 변경에 필요한 역량이 없을 것<br><small style='color:#94a3b8'>Project team not having the skills to make the necessary change</small>"
],
correct:0,
explanation:`<p>범위 변경은 프로젝트의 <mark>기간과 비용에 영향</mark>을 미칠 수 있으므로, 영향 연구를 통해 이를 파악하고 고객에게 알려야 한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td><b>A. 시간·비용 영향 ✅</b></td><td><b>영향 연구의 핵심 목적</b></td></tr>
<tr><td>B. 회귀 테스트 실패</td><td>범위 변경과 직접 연관 없음</td></tr>
<tr><td>C. 사용자 미동의</td><td>영향 연구로 판단하는 사항 아님</td></tr>
<tr><td>D. 팀 역량 부족</td><td>영향 연구의 일부이나 시간·비용의 하위</td></tr></table>
<div class="sbox"><b>🔑 범위 변경 + 영향 연구:</b><br>
• 영향 연구 핵심 = <b>일정(시간) + 비용</b>에 미치는 영향 파악<br>
• 팀 역량 부족은 일부이나, 전체 시간·비용 영향이 상위 개념<br>
• Q18(Scope Creep) + Q71(Freezing Point) + Q76(Baseline) + Q91(Impact Study) 세트</div>`,
reference:"CRM Chapter 3: IS Development — Change Impact Analysis",
keyConcepts:[
"영향 연구(Impact Study) 목적|범위 변경이 프로젝트 일정·비용에 미치는 영향 파악",
"범위 변경 주된 우려|시간·비용 영향 — 영향 연구 미수행 시 가장 큰 리스크",
"Scope 관련 세트|Scope Creep(Q18), Freezing Point(Q71), Baseline(Q76), Impact Study(Q91)"
]
},
{
id:92, domain:"3", ks:"3A4 Control Identification and Design",
question:`시스템 세금 계산의 <b>정확성을 확인</b>하는 <b>최선의 방법</b>은?<br><small style="color:#94a3b8">The BEST method of confirming the accuracy of a system tax calculation is by:</small>`,
options:[
"계산 프로그램의 소스 코드를 검토·분석한다.<br><small style='color:#94a3b8'>Review and analysis of the source code of the calculation programs.</small>",
"범용 감사 소프트웨어를 사용해 프로그램 논리를 재생성하여 월간 합계를 계산한다.<br><small style='color:#94a3b8'>Recreating program logic using generalized audit software to calculate monthly totals.</small>",
"시뮬레이션 거래를 준비하여 처리하고 결과를 사전 결정된 결과와 비교한다.<br><small style='color:#94a3b8'>Preparing simulated transactions for processing and comparing the results to predetermined results.</small>",
"계산 프로그램의 소스 코드를 자동 흐름도화하고 분석한다.<br><small style='color:#94a3b8'>Automatic flowcharting and analysis of the source code of the calculation programs.</small>"
],
correct:2,
explanation:`<p><b>시뮬레이션 거래</b>를 준비하여 처리하고 <mark>결과를 사전 결정된 결과와 비교</mark>하는 것이 세금 계산 정확성을 확인하는 최선의 방법이다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 소스 코드 검토</td><td>계산 정확성 확인에 효과적이지 않음</td></tr>
<tr><td>B. 논리 재생성+월간 합계</td><td>오류 가능 + 월간 합계로는 개별 정확성 불충분</td></tr>
<tr><td><b>C. 시뮬레이션 거래 비교 ✅</b></td><td><b>사전 결정 결과와 비교 = 가장 정확</b></td></tr>
<tr><td>D. 자동 흐름도+소스 분석</td><td>개별 계산 정확성 확인에 비효과적</td></tr></table>
<div class="sbox"><b>🔑 계산 정확성 검증:</b><br>
• <b>시뮬레이션 거래(Test Deck)</b> = 사전 결정 결과와 비교 → 가장 정확<br>
• 소스 코드 검토/흐름도 = 로직 이해에는 유용하나 정확성 검증에 비효과적<br>
• 월간 합계 = 개별 거래 정확성 검증 불충분</div>`,
reference:"CRM Chapter 3: IS Development — Calculation Verification",
keyConcepts:[
"계산 정확성 검증 최선|시뮬레이션 거래(Test Deck) → 사전 결정 결과와 비교",
"소스 코드 검토 한계|로직 이해에 유용하나 개별 계산 정확성 검증에 비효과적",
"Test Deck 방식|미리 결과를 알고 있는 거래를 입력 → 시스템 출력과 비교"
]
},
{
id:93, domain:"3", ks:"3A4 Control Identification and Design",
question:`다음 중 <b>프로젝트 계획으로부터의 이탈</b>을 식별하는 데 <b>가장 도움이 되는</b> 것은?<br><small style="color:#94a3b8">Which of the following BEST helps identify deviations from the project plan?</small>`,
options:[
"프로젝트 관리 프레임워크(Project Management Framework)<br><small style='color:#94a3b8'>Project management framework</small>",
"프로젝트 관리 접근 방식(Project Management Approach)<br><small style='color:#94a3b8'>Project management approach</small>",
"프로젝트 자원 계획(Project Resource Plan)<br><small style='color:#94a3b8'>Project resource plan</small>",
"프로젝트 성과 기준(Project Performance Criteria)<br><small style='color:#94a3b8'>Project performance criteria</small>"
],
correct:3,
explanation:`<p><b>Project Performance Criteria</b>는 <mark>프로젝트 계획 이탈을 식별하기 위한 베이스라인</mark>으로 설정되어야 한다. 프로젝트 계획의 성공적 완료 = 프로젝트 성공의 지표.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>Framework</td><td>범위/경계/방법 정의 — 성공 측정 기준 아님</td></tr>
<tr><td>Approach</td><td>프로세스/산출물 가이드라인 — 성공 측정 기준 아님</td></tr>
<tr><td>Resource Plan</td><td>팀 책임/권한 정의 — 전체 성공 측정 기준 아님</td></tr>
<tr><td><b>Performance Criteria ✅</b></td><td><b>베이스라인으로 이탈 식별 = 성공 측정 기준</b></td></tr></table>
<div class="sbox"><b>🔑 프로젝트 이탈 식별:</b><br>
• <b>Performance Criteria</b> = 베이스라인 설정 → 이탈 측정<br>
• Framework/Approach = 관리 구조·방법 (측정 기준 아님)<br>
• Resource Plan = 인적 자원 관리 (일부만 해당)</div>`,
reference:"CRM Chapter 3: IS Development — Project Performance Monitoring",
keyConcepts:[
"Project Performance Criteria|프로젝트 계획 이탈 식별을 위한 베이스라인 — 성공 측정 기준",
"Framework vs Approach vs Criteria|Framework=구조, Approach=방법, Criteria=측정 기준",
"프로젝트 이탈 식별|성과 기준 대비 실제 진행 비교 → 이탈 발견"
]
},
{
id:94, domain:"3", ks:"3A4 Control Identification and Design",
question:`프로젝트 운영위원회(Project Steering Committee)가 <b>궁극적으로 책임</b>지는 것은?<br><small style="color:#94a3b8">The project steering committee is ultimately responsible for the following:</small>`,
options:[
"프로젝트의 일일 관리 및 리더십<br><small style='color:#94a3b8'>Day-to-day management and leadership of the project</small>",
"프로젝트에 대한 자금 배분<br><small style='color:#94a3b8'>Allocating the funding for the project</small>",
"프로젝트 산출물, 비용 및 일정<br><small style='color:#94a3b8'>Project deliverables, costs and timetables</small>",
"시스템 통제가 갖추어져 있는지 확인<br><small style='color:#94a3b8'>Ensuring that system controls are in place</small>"
],
correct:2,
explanation:`<p><b>Project Steering Committee</b>는 전체 방향을 제시하고, 주요 이해관계자의 적절한 대표성을 보장하며, <mark>산출물·비용·일정에 대한 궁극적 책임</mark>을 진다.</p>
<table><tr><th>역할</th><th>책임</th></tr>
<tr><td>Project Manager</td><td>일일 관리 및 리더십</td></tr>
<tr><td>Project Sponsor</td><td>자금 배분(funding)</td></tr>
<tr><td><b>Steering Committee ✅</b></td><td><b>산출물, 비용, 일정에 궁극적 책임</b></td></tr>
<tr><td>Security Officer</td><td>시스템 통제 확인</td></tr></table>
<div class="sbox"><b>🔑 프로젝트 역할 총정리:</b><br>
• <b>Steering Committee</b>: 방향+감독+산출물/비용/일정 책임 (Q51, Q94)<br>
• <b>Sponsor</b>: 자금+성공기준(CSF) 정의<br>
• <b>PM</b>: 일일 관리/리더십<br>
• <b>Security Officer</b>: 시스템 통제 확인</div>`,
reference:"CRM Chapter 3: IS Development — Project Governance",
keyConcepts:[
"Steering Committee 궁극적 책임|산출물(deliverables), 비용(costs), 일정(timetables)",
"프로젝트 역할 구분|PM=일일관리, Sponsor=자금, Committee=산출물/비용/일정, Security=통제",
"Steering Committee 출제 세트|Q51: 진행 감독, Q94: 산출물/비용/일정 책임"
]
},
{
id:95, domain:"3", ks:"3A4 Control Identification and Design",
question:`소프트웨어 프로젝트의 <b>비용을 최소화</b>하기 위해 품질 관리 기법은 언제 적용해야 하는가?<br><small style="color:#94a3b8">To minimize the cost of a software project, quality management techniques should be applied:</small>`,
options:[
"작성 시점(발생 지점)에 가능한 한 가깝게<br><small style='color:#94a3b8'>As close to their writing (i.e., point of origination) as possible.</small>",
"주로 프로젝트 시작 시 조직 거버넌스 표준에 따라 수립되도록<br><small style='color:#94a3b8'>Primarily at project start to ensure establishment in accordance with governance standards.</small>",
"프로젝트 전반에 걸쳐 지속적으로, 테스트를 통한 결함 발견·수정에 중점을 두어<br><small style='color:#94a3b8'>Continuously throughout the project with emphasis on finding and fixing defects through testing.</small>",
"주로 프로젝트 종료 시 향후 프로젝트에 적용할 교훈을 수집하기 위해<br><small style='color:#94a3b8'>Mainly at project close-down to capture lessons learned.</small>"
],
correct:2,
explanation:`<p>품질 관리는 <mark>프로젝트 전반에 걸쳐 지속적으로</mark> 적용해야 한다. 재작업(rework)이 예상치 못한 비용의 주요 원인이며, 결함이 빨리 발생하고 늦게 발견될수록 수정 비용이 증가한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 작성 시점에 가깝게</td><td>빠른 시작 중요하나 전체 과정 필요</td></tr>
<tr><td>B. 프로젝트 시작 시만</td><td>이후 발생 문제 미탐지</td></tr>
<tr><td><b>C. 전반에 걸쳐 지속적으로 ✅</b></td><td><b>결함 조기 발견 → 비용 최소화</b></td></tr>
<tr><td>D. 프로젝트 종료 시</td><td>현재 프로젝트에는 너무 늦음</td></tr></table>
<div class="sbox"><b>🔑 품질 관리 원칙:</b><br>
• QA = <b>프로젝트 전체</b>에 걸쳐 지속적 적용<br>
• 재작업(rework) = 예상치 못한 비용의 주요 원인<br>
• 결함 발생이 빠르고 발견이 늦을수록 수정 비용 ↑<br>
• 테스트만 의존 = 상대적으로 비용 높고 덜 효과적</div>`,
reference:"CRM Chapter 3: IS Development — Quality Management",
keyConcepts:[
"품질 관리 적용 시점|프로젝트 전반에 걸쳐 지속적으로 — 조기 결함 발견이 비용 최소화",
"재작업(Rework)|소프트웨어 프로젝트 예상치 못한 비용의 주요 원인",
"결함 발견 시점과 비용|빨리 발생+늦게 발견 = 수정 비용 ↑ (요구사항 오류가 테스트에서 발견 시 최악)"
]
},
{
id:96, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`프로젝트 기간에 시간 제약을 부과하는 작업에 인력을 추가할 계획일 때, <b>먼저 재검증</b>해야 할 것은?<br><small style="color:#94a3b8">When planning to add personnel to tasks imposing time constraints on a project, which should be revalidated FIRST?</small>`,
options:[
"프로젝트 예산<br><small style='color:#94a3b8'>Project budget</small>",
"프로젝트의 크리티컬 패스<br><small style='color:#94a3b8'>Critical path for the project</small>",
"남은 작업의 기간<br><small style='color:#94a3b8'>Length of the remaining tasks</small>",
"다른 작업에 배정된 인력<br><small style='color:#94a3b8'>Personnel assigned to other tasks</small>"
],
correct:1,
explanation:`<p>리소스를 추가하면 <mark>크리티컬 패스의 경로가 변경</mark>될 수 있다. 추가 리소스가 프로젝트 기간을 실제로 단축하는지 확인하기 위해 크리티컬 패스를 먼저 재평가해야 한다.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 프로젝트 예산</td><td>중요하나 크리티컬 패스 확인 후</td></tr>
<tr><td><b>B. 크리티컬 패스 ✅</b></td><td><b>리소스 추가 → 경로 변경 가능 → 먼저 재검증</b></td></tr>
<tr><td>C. 남은 작업 기간</td><td>크리티컬 패스가 아닌 작업은 여유시간 있을 수 있음</td></tr>
<tr><td>D. 다른 작업 인력</td><td>역량 수준에 따라 효과 다름</td></tr></table>
<div class="sbox"><b>🔑 크리티컬 패스와 인력 추가:</b><br>
• 인력 추가 시 <b>크리티컬 패스 재평가가 최우선</b><br>
• 크리티컬 패스가 아닌 작업에는 여유시간(slack) 존재 가능<br>
• 리소스 추가가 반드시 기간 단축을 보장하지 않음</div>`,
reference:"CRM Chapter 3: IS Development — Critical Path Management",
keyConcepts:[
"인력 추가 시 최우선|크리티컬 패스 재검증 — 경로 변경 가능성 확인",
"크리티컬 패스|프로젝트 완료까지 가장 긴 경로 — 여유시간(slack) 없음",
"Slack Time|크리티컬 패스가 아닌 작업에 존재하는 여유시간"
]
},
{
id:97, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`IS 감사인이 <b>테스트되지 않은 특정 프로그램 논리</b>를 식별하기 위해 사용할 테스트 기법은?<br><small style="color:#94a3b8">Which test technique would the IS auditor use to identify specific program logic that has not been tested?</small>`,
options:[
"스냅샷(Snapshot)<br><small style='color:#94a3b8'>Snapshot</small>",
"추적 및 태깅(Tracing and Tagging)<br><small style='color:#94a3b8'>Tracing and tagging</small>",
"로깅(Logging)<br><small style='color:#94a3b8'>Logging</small>",
"매핑(Mapping)<br><small style='color:#94a3b8'>Mapping</small>"
],
correct:3,
explanation:`<p><b>Mapping</b>은 실행 중 프로그램을 분석하여 <mark>프로그램 문(statement)이 실행되었는지 여부를 표시</mark>하고, 테스트되지 않은 특정 논리를 식별한다.</p>
<table><tr><th>기법</th><th>목적</th></tr>
<tr><td>Snapshot</td><td>지정된 거래의 논리 경로 흐름 기록</td></tr>
<tr><td>Tracing & Tagging</td><td>실행된 명령어의 추적 경로 표시</td></tr>
<tr><td>Logging</td><td>특정 작업을 기록하여 향후 검토</td></tr>
<tr><td><b>Mapping ✅</b></td><td><b>실행/미실행 문 식별 → 미테스트 논리 발견</b></td></tr></table>
<div class="sbox"><b>🔑 감사 기법 구분:</b><br>
• <b>Mapping</b> = "테스트 안 된 논리" 키워드 → 정답<br>
• <b>Snapshot</b> = 거래 흐름 기록<br>
• <b>Tracing</b> = 실행 명령어 추적<br>
• <b>Logging</b> = 작업 기록</div>`,
reference:"CRM Chapter 3: IS Development — Audit Testing Techniques",
keyConcepts:[
"Mapping|실행 중 프로그램 분석 → 미테스트 프로그램 논리 식별",
"Snapshot|지정된 거래의 논리 경로 흐름을 기록",
"Tracing & Tagging|애플리케이션 실행 중 명령어 추적 경로 표시"
]
},
{
id:98, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`원격 사이트에서 입력된 데이터의 편집/검증은 <b>가장 효과적으로</b> 어디에서 수행되는가?<br><small style="color:#94a3b8">The editing/validation of data entered at a remote site is performed MOST effectively at the:</small>`,
options:[
"중앙 처리 사이트에서 애플리케이션 실행 후<br><small style='color:#94a3b8'>Central processing site after running the application system.</small>",
"중앙 처리 사이트에서 애플리케이션 실행 중<br><small style='color:#94a3b8'>Central processing site during the running of the application system.</small>",
"원격 처리 사이트에서 데이터를 중앙으로 전송한 후<br><small style='color:#94a3b8'>Remote processing site after transmission of data to the central site.</small>",
"원격 처리 사이트에서 데이터를 중앙으로 전송하기 전<br><small style='color:#94a3b8'>Remote processing site prior to transmission of data to the central site.</small>"
],
correct:3,
explanation:`<p>원격 사이트 데이터는 <mark>중앙으로 전송하기 전에 편집·검증</mark>하는 것이 가장 효과적이다. 잘못된 데이터가 전송·처리되는 것을 사전에 방지.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 중앙에서 실행 후</td><td>이미 잘못된 데이터 전송·처리됨</td></tr>
<tr><td>B. 중앙에서 실행 중</td><td>이미 잘못된 데이터 전송됨</td></tr>
<tr><td>C. 원격에서 전송 후</td><td>전송 후 검증은 유효한 통제 아님</td></tr>
<tr><td><b>D. 원격에서 전송 전 ✅</b></td><td><b>잘못된 데이터 전송 사전 방지</b></td></tr></table>
<div class="sbox"><b>🔑 데이터 검증 원칙:</b><br>
• 검증은 <b>가능한 한 데이터 입력 시점(소스)에 가깝게</b><br>
• 원격→중앙 전송 전 검증 = 잘못된 데이터 전송 방지<br>
• 중앙에서 재검증도 좋은 관행이나 최선은 아님</div>`,
reference:"CRM Chapter 3: IS Development — Data Validation Controls",
keyConcepts:[
"원격 데이터 검증 최적 시점|중앙 전송 전 원격 사이트에서 편집·검증",
"데이터 검증 원칙|가능한 한 소스(입력 시점)에 가깝게 검증",
"전송 전 검증 이유|잘못된 데이터의 전송·처리를 사전에 방지"
]
},
{
id:99, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`소프트웨어 애플리케이션 테스트의 어떤 단계에서 <b>아키텍처 설계 테스트</b>를 수행해야 하는가?<br><small style="color:#94a3b8">During which phase of software application testing should an organization perform the testing of architectural design?</small>`,
options:[
"수락 테스트(Acceptance Testing)<br><small style='color:#94a3b8'>Acceptance testing</small>",
"시스템 테스트(System Testing)<br><small style='color:#94a3b8'>System testing</small>",
"통합 테스트(Integration Testing)<br><small style='color:#94a3b8'>Integration testing</small>",
"단위 테스트(Unit Testing)<br><small style='color:#94a3b8'>Unit testing</small>"
],
correct:2,
explanation:`<p><b>Integration Testing</b>은 두 개 이상의 컴포넌트 간 연결을 평가하며, 단위 테스트된 모듈을 사용하여 <mark>설계에 따라 통합 구조를 구축</mark>한다. 아키텍처 설계 테스트에 해당.</p>
<table><tr><th>테스트</th><th>참조 대상</th><th>목적</th></tr>
<tr><td>Unit</td><td>상세 설계(Detailed Design)</td><td>개별 프로그램 내부 동작 확인</td></tr>
<tr><td><b>Integration ✅</b></td><td><b>아키텍처 설계</b></td><td><b>모듈 간 연결·통합 구조 확인</b></td></tr>
<tr><td>System</td><td>기능 요구사항</td><td>시스템 전체 기능 확인</td></tr>
<tr><td>Acceptance</td><td>비즈니스 요구사항</td><td>사용자 요구 충족 확인</td></tr></table>
<div class="sbox"><b>🔑 테스트 단계별 참조 대상:</b><br>
• <b>Unit</b> = 상세 설계 (내부 논리)<br>
• <b>Integration</b> = 아키텍처 설계 (모듈 연결)<br>
• <b>System</b> = 기능 요구사항<br>
• <b>Acceptance</b> = 비즈니스 요구사항</div>`,
reference:"CRM Chapter 3: IS Development — Testing Phases",
keyConcepts:[
"Integration Testing|아키텍처 설계 기반 — 모듈 간 연결·통합 구조 확인",
"테스트별 참조 대상|Unit=상세설계, Integration=아키텍처, System=기능요구, Acceptance=비즈니스요구",
"Integration vs System|Integration=모듈 연결(아키텍처), System=전체 기능(요구사항)"
]
},
{
id:100, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`애플리케이션 개발자가 볼륨 테스트를 위해 <b>어제의 운영 트랜잭션 파일 사본</b>을 사용하려 할 때 IS 감사인의 <b>주된 우려</b>는?<br><small style="color:#94a3b8">An IS auditor's PRIMARY concern when developers wish to use a copy of yesterday's production transaction file for volume tests is that:</small>`,
options:[
"사용자가 테스트에 인위적 데이터 사용을 선호할 수 있다.<br><small style='color:#94a3b8'>Users may prefer to use contrived data for testing.</small>",
"민감 데이터에 대한 무단 접근이 발생할 수 있다.<br><small style='color:#94a3b8'>Unauthorized access to sensitive data may result.</small>",
"오류 처리 및 신뢰성 검사가 완전히 검증되지 않을 수 있다.<br><small style='color:#94a3b8'>Error handling and credibility checks may not be fully proven.</small>",
"새 프로세스의 전체 기능이 반드시 테스트되지 않을 수 있다.<br><small style='color:#94a3b8'>The full functionality of the new process may not necessarily be tested.</small>"
],
correct:1,
explanation:`<p>데이터가 비식별화(sanitized)되지 않으면 <mark>민감 데이터 유출 리스크</mark>가 있다. 오류 처리 미검증이나 기능 미테스트보다 민감 데이터 무단 접근이 더 심각한 우려.</p>
<table><tr><th>선택지</th><th>판단</th></tr>
<tr><td>A. 인위적 데이터 선호</td><td>사용자 선호 문제 (주된 우려 아님)</td></tr>
<tr><td><b>B. 민감 데이터 무단 접근 ✅</b></td><td><b>비식별화 안 된 운영 데이터 = 유출 위험</b></td></tr>
<tr><td>C. 오류 처리 미검증</td><td>리스크 있으나 데이터 유출보다 덜 심각</td></tr>
<tr><td>D. 전체 기능 미테스트</td><td>리스크 있으나 데이터 유출보다 덜 심각</td></tr></table>
<div class="sbox"><b>🔑 운영 데이터 테스트 사용 총정리:</b><br>
• Q34: Sanitized data 장점 = 실제 대표<br>
• Q45: 단점 = 모든 기능 커버 불가<br>
• Q74: 의료 조직 = 기밀성(접근 통제 부족)<br>
• Q86: 사용 조건 = 경영진 사전 승인<br>
• Q100: 볼륨 테스트 = 민감 데이터 무단 접근 우려</div>`,
reference:"CRM Chapter 3: IS Development — Test Data Security",
keyConcepts:[
"운영 데이터 테스트 주된 우려|비식별화 안 된 민감 데이터에 대한 무단 접근 리스크",
"운영 데이터 테스트 세트|Q34(장점), Q45(단점), Q74(기밀성), Q86(경영진 승인), Q100(무단 접근)",
"Sanitization|운영 데이터 사용 전 민감 정보 제거/마스킹 필수"
]
},

{
id:101, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`다음 중 비즈니스 애플리케이션의 오프쇼어 개발 성공을 <b>가장 잘</b> 보장하는 것은?<br><small style="color:#94a3b8">Which of the following will BEST ensure the successful offshore development of business applications?</small>`,
options:[
"엄격한 계약 관리 관행<br><small style='color:#94a3b8'>Stringent contract management practices</small>",
"상세하고 적절하게 적용된 명세서<br><small style='color:#94a3b8'>Detailed and properly applied specifications</small>",
"문화적·정치적 차이에 대한 인식<br><small style='color:#94a3b8'>Awareness of cultural and political differences</small>",
"구현 후 검토<br><small style='color:#94a3b8'>Postimplementation review</small>"
],
correct:1,
explanation:`<p>오프쇼어 개발에서는 <mark>상세하고 정확한 명세서(Specification)</mark>가 성공의 핵심이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 계약 관리</td><td>중요하지만, 명세가 부정확하면 무의미</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 상세 명세서 ✔</b></td><td><b>언어 차이 + 물리적 거리 → 가정/수정이 전달 안 됨 → 명세 정확성이 최우선</b></td></tr>
<tr><td>C. 문화/정치 인식</td><td>중요하지만 제품 품질에 직접 영향 X</td></tr>
<tr><td>D. 구현 후 검토</td><td>이미 너무 늦음 (사후 조치)</td></tr></table>
<div class="sbox"><b>🌏 오프쇼어 개발 핵심 리스크:</b><br>
• 언어 차이 → 의사소통 갭<br>
• 물리적 거리 → 실시간 협의 어려움<br>
• 해결책 = <b>상세하고 명확한 명세서</b> (부정확하면 쉽게 교정 불가)</div>`,
reference:"CRM Chapter 3: IS Development — Offshore Development",
keyConcepts:[
"오프쇼어 개발 성공 핵심|상세하고 적절하게 적용된 명세서 (Detailed Specifications)",
"오프쇼어 리스크|언어 차이 + 물리적 거리 → 의사소통 갭 → 명세 정확성 필수",
"계약 관리 vs 명세서|계약 관리는 중요하나, 명세가 부정확하면 성공 보장 불가"
]
},

{
id:102, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`기업이 데이터베이스 소프트웨어의 신규 버전 업그레이드 전략을 수립 중이다. 다음 중 IS 감사 기능의 <b>객관성을 훼손하지 않고</b> IS 감사인이 수행할 수 있는 업무는?<br><small style="color:#94a3b8">An enterprise is developing a strategy to upgrade to a newer version of its database software. Which of the following tasks can an IS auditor perform without compromising the objectivity of the IS audit function?</small>`,
options:[
"신규 데이터베이스 소프트웨어에 대한 애플리케이션 통제 채택 자문<br><small style='color:#94a3b8'>Advise on the adoption of application controls to the new database software.</small>",
"프로젝트 팀에 향후 라이선스 비용 추정치 제공<br><small style='color:#94a3b8'>Provide future estimates of the licensing expenses to the project team.</small>",
"프로젝트 관리자에게 마이그레이션 효율성 개선 방안 권고<br><small style='color:#94a3b8'>Recommend to the project manager how to improve the efficiency of the migration.</small>",
"테스트 수행 전 인수 테스트 케이스 문서 검토<br><small style='color:#94a3b8'>Review the acceptance test case documentation before the tests are carried out.</small>"
],
correct:3,
explanation:`<p>IS 감사인의 <mark>독립성(Independence)</mark>을 유지하면서 수행 가능한 업무를 묻는 문제이다.</p>
<table><tr><th>선택지</th><th>독립성 훼손?</th><th>이유</th></tr>
<tr><td>A. 통제 채택 자문</td><td>⚠ 훼손</td><td>특정 통제 채택 권고 = 구현 참여</td></tr>
<tr><td>B. 비용 추정 제공</td><td>⚠ 훼손</td><td>비용 추정 → 경영진 승인 근거 → 나중에 감사 시 자기 검토</td></tr>
<tr><td>C. 효율성 개선 권고</td><td>⚠ 훼손</td><td>마이그레이션 실행에 직접 개입</td></tr>
<tr style="background:#e8f5e9"><td><b>D. 테스트 케이스 검토 ✔</b></td><td>✅ 유지</td><td><b>테스트 완전성 검토 = 감사 본연의 역할</b></td></tr></table>
<div class="sbox"><b>🔑 감사인 독립성 판단 기준:</b><br>
• <b>검토(Review) / 평가(Evaluate)</b> → 독립성 유지 ✅<br>
• <b>자문(Advise) / 권고(Recommend) / 추정(Estimate)</b> → 구현 참여 = 독립성 훼손 ⚠<br>
• 테스트 케이스 완전성 확인 = 감사 목적에 부합하는 적절한 활동</div>`,
reference:"CRM Chapter 3: IS Development — Auditor Independence",
keyConcepts:[
"감사인 독립성 유지 활동|테스트 케이스 문서 검토 (완전성 확인은 감사 본연의 역할)",
"감사인 독립성 훼손 활동|통제 채택 자문, 비용 추정 제공, 효율성 개선 권고 (구현 참여)",
"검토 vs 자문|Review/Evaluate = 독립성 유지, Advise/Recommend = 독립성 훼손 위험"
]
},

{
id:103, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`시스템 개발 수명주기(SDLC) 프로젝트의 단계와 산출물은 언제 결정되어야 하는가?<br><small style="color:#94a3b8">The phases and deliverables of a system development life cycle project should be determined:</small>`,
options:[
"프로젝트의 초기 계획 단계에서<br><small style='color:#94a3b8'>During the initial planning stages of the project.</small>",
"초기 계획 완료 후 작업 시작 전<br><small style='color:#94a3b8'>After early planning has been completed but before work has begun.</small>",
"리스크와 노출에 기반하여 작업 단계 전반에 걸쳐<br><small style='color:#94a3b8'>Throughout the work stages, based on risk and exposures.</small>",
"모든 리스크가 식별되고 IS 감사인이 적절한 통제를 권고한 후에만<br><small style='color:#94a3b8'>Only after all risk and exposures have been identified and the IS auditor has recommended appropriate controls.</small>"
],
correct:0,
explanation:`<p>SDLC 프로젝트의 단계와 산출물은 <mark>초기 계획 단계(Initial Planning)</mark>에서 결정되어야 한다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr style="background:#e8f5e9"><td><b>A. 초기 계획 단계 ✔</b></td><td><b>프로젝트 추적과 자원 관리를 위해 초기에 단계/산출물 확정 필수</b></td></tr>
<tr><td>B. 계획 완료 후 작업 전</td><td>산출물/일정 결정은 초기 계획 작업의 일부 (계획 완료 후가 아님)</td></tr>
<tr><td>C. 작업 단계 전반</td><td>요구사항은 변할 수 있으나, 초기 산출물은 처음부터 문서화</td></tr>
<tr><td>D. 모든 리스크 식별 후</td><td>리스크 관리는 끝나지 않는 프로세스 → 모든 리스크 식별까지 기다릴 수 없음</td></tr></table>
<div class="sbox"><b>📋 SDLC 계획 원칙:</b><br>
• 단계(Phases) + 산출물(Deliverables) = <b>초기 계획 단계에서 확정</b><br>
• 프로젝트 추적(Tracking) + 자원 관리(Resource Mgmt) 가능<br>
• 요구사항은 변경 가능하나, 초기 산출물은 처음부터 문서화 필수</div>`,
reference:"CRM Chapter 3: IS Development — SDLC Planning",
keyConcepts:[
"SDLC 단계/산출물 결정 시점|초기 계획 단계 (프로젝트 추적·자원 관리를 위해)",
"리스크 관리 특성|끝나지 않는 프로세스 → 모든 리스크 식별까지 기다릴 수 없음",
"초기 계획의 중요성|산출물·일정 결정은 계획 작업의 일부이지, 계획 완료 후가 아님"
]
},

{
id:104, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`시스템 개발 프로젝트 완료 시, 프로젝트 후 검토(Post-project Review)에 포함되어야 하는 것은?<br><small style="color:#94a3b8">At the completion of a system development project, a postproject review should include which of the following?</small>`,
options:[
"운영 릴리스 후 다운타임으로 이어질 수 있는 리스크 평가<br><small style='color:#94a3b8'>Assessing risk that may lead to downtime after the production release</small>",
"향후 프로젝트에 적용할 수 있는 교훈 식별<br><small style='color:#94a3b8'>Identifying lessons learned that may be applicable to future projects</small>",
"인도된 시스템의 통제가 작동하는지 검증<br><small style='color:#94a3b8'>Verifying that the controls in the delivered system are working</small>",
"테스트 데이터 삭제 확인<br><small style='color:#94a3b8'>Ensuring that test data are deleted</small>"
],
correct:1,
explanation:`<p><mark>Post-project Review</mark>와 <mark>Post-implementation Review</mark>를 구분하는 것이 핵심이다.</p>
<table><tr><th>검토 유형</th><th>초점</th><th>내용</th></tr>
<tr style="background:#e8f5e9"><td><b>Post-project Review</b></td><td><b>프로젝트 관리</b></td><td><b>교훈(Lessons Learned) 식별 → 미래 프로젝트에 반영</b></td></tr>
<tr><td>Post-implementation Review</td><td>시스템/제품</td><td>통제 작동 여부, 목표 달성 여부 검증</td></tr></table>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 다운타임 리스크</td><td>구현 전(운영팀과 사전 평가) 수행</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 교훈 식별 ✔</b></td><td><b>프로젝트 팀은 모든 프로젝트에서 교훈을 얻어야 함</b></td></tr>
<tr><td>C. 통제 작동 검증</td><td>인수 테스트 또는 Post-implementation Review 영역</td></tr>
<tr><td>D. 테스트 데이터 삭제</td><td>테스트 데이터는 향후 회귀 테스트용으로 보존</td></tr></table>
<div class="sbox"><b>📌 Post-project vs Post-implementation:</b><br>
• Post-<b>project</b> = 프로젝트 관리 관점 → <b>Lessons Learned</b><br>
• Post-<b>implementation</b> = 시스템 관점 → 통제·목표 달성 검증<br>
• 테스트 데이터는 <b>삭제 X → 회귀 테스트용 보존</b></div>`,
reference:"CRM Chapter 3: IS Development — Post-project Review",
keyConcepts:[
"Post-project Review|프로젝트 관리 관점에서 교훈(Lessons Learned) 식별 → 미래 프로젝트 반영",
"Post-implementation Review|시스템 관점에서 통제 작동·목표 달성 여부 검증",
"테스트 데이터 보존|삭제 X → 향후 회귀 테스트(Regression Testing)용으로 보존"
]
},

{
id:105, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`내부 감사 기능이 웹 애플리케이션용 내부 개발 CGI(Common Gateway Interface) 스크립트를 검토하고 있다. IS 감사인은 해당 스크립트가 품질 관리(QC) 기능에 의해 검토·테스트되지 않았음을 발견했다. <b>가장 우려되는</b> 리스크 유형은?<br><small style="color:#94a3b8">An internal audit function is reviewing an internally developed common gateway interface script for a web application. The IS auditor discovers that the script was not reviewed and tested by the quality control function. Which of the following types of risk is of GREATEST concern?</small>`,
options:[
"시스템 비가용성<br><small style='color:#94a3b8'>System unavailability</small>",
"악성코드 노출<br><small style='color:#94a3b8'>Exposure to malware</small>",
"비인가 접근<br><small style='color:#94a3b8'>Unauthorized access</small>",
"시스템 무결성<br><small style='color:#94a3b8'>System integrity</small>"
],
correct:2,
explanation:`<p>미검증 CGI 스크립트의 <b>가장 큰 우려</b>는 <mark>비인가 접근(Unauthorized Access)</mark>이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 시스템 비가용성</td><td>웹앱 손상 가능하나 전체 시스템 비가용성으로 이어질 가능성 낮음</td></tr>
<tr><td>B. 악성코드 노출</td><td>미검증 CGI가 직접적으로 악성코드 노출을 유발하지 않음</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 비인가 접근 ✔</b></td><td><b>CGI는 공개 인터넷 서버에서 실행 → 보안 취약점 → 내부 시스템 비인가 접근</b></td></tr>
<tr><td>D. 시스템 무결성</td><td>웹앱 손상 가능하나 시스템 무결성 영향은 제한적</td></tr></table>
<div class="sbox"><b>🌐 CGI 보안 핵심:</b><br>
• CGI = <b>공개 인터넷 서버</b>에서 실행되는 스크립트<br>
• 미검증 → 보안 취약점 존재 가능<br>
• 공개 서버 + 취약점 = <b>비인가 접근으로 내부 시스템 침투</b> 가능<br>
• QC 미검토 = 보안 검증 미완 → 접근 통제 리스크 최대</div>`,
reference:"CRM Chapter 3: IS Development — Web Application Security",
keyConcepts:[
"CGI 스크립트 미검증 최대 리스크|비인가 접근 (공개 인터넷 서버에서 실행 → 내부 시스템 침투)",
"CGI 특성|Common Gateway Interface, 웹 서버에서 실행되는 서버측 스크립트",
"QC 미검토 웹 스크립트|보안 취약점 → 비가용성/무결성보다 비인가 접근이 최대 우려"
]
},

{
id:106, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`경영진은 다단계 구현의 초기 단계가 일정 지연 및 예산 초과임을 확인했다. 다음 단계 착수 전, IS 감사인이 구현 후 검토에서 <b>가장 먼저</b> 제안해야 할 초점은?<br><small style="color:#94a3b8">Management observed that the initial phase of a multiphase implementation was behind schedule and over budget. Prior to commencing with the next phase, an IS auditor's PRIMARY suggestion for a postimplementation focus should be to:</small>`,
options:[
"계획된 비용 편익이 측정·분석·보고되고 있는지 평가<br><small style='color:#94a3b8'>Assess whether the planned cost benefits are being measured, analyzed and reported.</small>",
"통제 잔액을 검토하고 시스템이 데이터를 정확하게 처리하는지 검증<br><small style='color:#94a3b8'>Review control balances and verify that the system is processing data accurately.</small>",
"1단계에서의 프로그램 변경이 나머지 프로젝트에 미치는 영향 검토<br><small style='color:#94a3b8'>Review the impact of program changes made during the first phase on the remainder of the project.</small>",
"시스템의 목표가 달성되었는지 판단<br><small style='color:#94a3b8'>Determine whether the system's objectives were achieved.</small>"
],
correct:2,
explanation:`<p>다단계 구현에서 1단계가 일정 지연·예산 초과인 상황 → 다음 단계 전 <mark>1단계 문제가 나머지에 미치는 영향</mark>을 검토해야 한다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 비용 편익 측정</td><td>유효하나, 현재 문제의 원인/영향 파악이 우선</td></tr>
<tr><td>B. 통제·처리 정확성</td><td>유효하나, 프로젝트 관리 실패 원인 파악이 우선</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 1단계 변경의 영향 ✔</b></td><td><b>문제 유형·원인 파악 → 후속 단계 적절한 대비 여부 확인</b></td></tr>
<tr><td>D. 목표 달성 여부</td><td>중요하나, 계획 실패 원인·영향 분석이 더 급선무</td></tr></table>
<div class="sbox"><b>📋 다단계 구현 실패 시 감사 초점:</b><br>
• 1단계 문제(일정 지연·예산 초과) → <b>나머지 단계에 미치는 영향</b> 우선 검토<br>
• 문제 유형·원인 식별 → 후속 단계에서 IT가 적절히 대비했는지 확인<br>
• 통제 검증, 목표 달성은 모두 유효하나 <b>원인/영향 분석이 PRIMARY</b></div>`,
reference:"CRM Chapter 3: IS Development — Multiphase Implementation Review",
keyConcepts:[
"다단계 구현 1단계 실패 시|감사 초점 = 1단계 변경이 나머지 프로젝트에 미치는 영향 검토",
"Post-implementation 우선순위|프로젝트 관리 실패 시 → 원인/영향 분석이 통제 검증보다 우선",
"다단계 프로젝트 리스크|초기 단계 문제는 후속 단계에 연쇄 영향 → 선제적 검토 필수"
]
},

{
id:107, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`다음 중 조직이 감사 자원을 최적화하고 감사 품질을 개선하는 데 <b>가장 도움</b>이 되는 것은?<br><small style="color:#94a3b8">Which of the following BEST helps organizations in optimizing audit resources and improving the quality of audits?</small>`,
options:[
"감사 작업의 독립적 검토<br><small style='color:#94a3b8'>Independent review of audit work</small>",
"통합 감사 접근법<br><small style='color:#94a3b8'>Integrated audit approach</small>",
"글로벌 감사 표준<br><small style='color:#94a3b8'>Global auditing standards</small>",
"리스크 기반 감사 접근법<br><small style='color:#94a3b8'>Risk-based audit approach</small>"
],
correct:1,
explanation:`<p>문제가 요구하는 것: <b>자원 최적화 + 품질 개선</b> 둘 다 충족하는 답.</p>
<table><tr><th>선택지</th><th>자원 최적화</th><th>품질 개선</th><th>평가</th></tr>
<tr><td>A. 독립적 검토</td><td>❌</td><td>✅</td><td>품질만 개선</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 통합 감사 ✔</b></td><td><b>✅</b></td><td><b>✅</b></td><td><b>여러 감사 유형 통합 → 자원 절약 + 종합 보고서</b></td></tr>
<tr><td>C. 글로벌 표준</td><td>❌</td><td>✅</td><td>품질만 개선</td></tr>
<tr><td>D. 리스크 기반</td><td>△</td><td>✅</td><td>고위험 영역 집중 → 효과성↑ 이지만 자원 최적화와는 다름</td></tr></table>
<div class="sbox"><b>🔗 통합 감사(Integrated Audit)란?</b><br>
• 여러 유형의 감사(재무, IT, 운영 등)를 <b>동시에 수행</b><br>
• 각 감사 범위의 결과를 <b>공유</b> → 중복 제거 → 자원 절약<br>
• 다양한 관점 통합 → <b>집중적이고 고품질인 감사 보고서</b> 산출</div>`,
reference:"CRM Chapter 3: IS Development — Audit Approaches",
keyConcepts:[
"통합 감사(Integrated Audit)|여러 감사 유형 동시 수행 → 자원 최적화 + 품질 개선 동시 달성",
"리스크 기반 감사|고위험 영역에 자원 집중 → 효과성↑ (자원 최적화와는 구별)",
"감사 접근법 비교|독립적 검토·글로벌 표준 = 품질만 / 통합 감사 = 자원+품질 둘 다"
]
},

{
id:108, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`애플리케이션 소프트웨어 패키지를 구현할 때, 다음 중 <b>가장 큰 리스크</b>를 초래하는 것은?<br><small style="color:#94a3b8">When implementing an application software package, which of the following presents the GREATEST risk?</small>`,
options:[
"통제되지 않은 다중 소프트웨어 버전<br><small style='color:#94a3b8'>Uncontrolled multiple software versions</small>",
"오브젝트 코드와 동기화되지 않은 소스 프로그램<br><small style='color:#94a3b8'>Source programs that are not synchronized with object code</small>",
"잘못 설정된 파라미터<br><small style='color:#94a3b8'>Incorrectly set parameters</small>",
"프로그래밍 오류<br><small style='color:#94a3b8'>Programming errors</small>"
],
correct:2,
explanation:`<p>패키지 소프트웨어 구현 시 <mark>파라미터 설정 오류</mark>가 가장 큰 리스크이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 다중 버전</td><td>문제이나, 올바른 버전 구현 시 즉각적 위험 아님</td></tr>
<tr><td>B. 소스/오브젝트 비동기화</td><td>향후 유지보수 리스크 (구현 시점 최대 리스크 아님)</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 파라미터 설정 오류 ✔</b></td><td><b>즉각적 문제 → 시스템 침해, 장애, 규정 미준수 초래</b></td></tr>
<tr><td>D. 프로그래밍 오류</td><td>테스트 단계에서 발견되어야 함 (구현 시점 이슈 아님)</td></tr></table>
<div class="sbox"><b>⚙ 패키지 SW 구현 핵심:</b><br>
• 패키지 SW = 코드 수정 X → <b>파라미터(Configuration) 설정</b>으로 커스터마이징<br>
• 파라미터 오류 = <b>즉각적(Immediate)</b> 영향 → 보안 침해·시스템 장애·규정 미준수<br>
• 프로그래밍 오류는 테스트에서, 버전 관리는 릴리스에서, 소스 동기화는 유지보수에서 대응</div>`,
reference:"CRM Chapter 3: IS Development — Package Implementation",
keyConcepts:[
"패키지 SW 구현 최대 리스크|잘못 설정된 파라미터 (즉각적 침해·장애·미준수)",
"패키지 SW 특성|코드 수정 없이 파라미터로 커스터마이징 → 설정 정확성이 핵심",
"리스크 시점 구분|프로그래밍 오류=테스트, 소스 동기화=유지보수, 파라미터=구현"
]
},

{
id:109, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`IS 감사인이 미션 크리티컬 시스템 구현 프로젝트를 검토 중이며, 팀이 병행 구현 대신 즉시 전환(Immediate Cutover)을 선택했음을 확인했다. <b>가장 큰 우려</b>는?<br><small style="color:#94a3b8">An IS auditor is reviewing a project for the implementation of a mission-critical system and notes that, instead of parallel implementation, the team opted for an immediate cutover to the new system. Which of the following is the GREATEST concern?</small>`,
options:[
"구현 단계에 백아웃 계획(Back-out Plan)이 없다<br><small style='color:#94a3b8'>The implementation phase of the project has no back-out plan.</small>",
"사용자 인수 테스트가 적절히 문서화되지 않았다<br><small style='color:#94a3b8'>User acceptance testing was not properly documented.</small>",
"소프트웨어 기능 테스트는 완료했으나 스트레스 테스트는 미수행<br><small style='color:#94a3b8'>Software functionality tests were completed, but stress testing was not performed.</small>",
"Go-live 날짜가 핵심 IT 직원이 휴가 중인 공휴일 주말이다<br><small style='color:#94a3b8'>The go-live date is over a holiday weekend when key IT staff are on vacation.</small>"
],
correct:0,
explanation:`<p>즉시 전환(Immediate Cutover)에서는 <mark>백아웃 계획(Back-out Plan)</mark> 부재가 가장 큰 리스크이다.</p>
<table><tr><th>구현 방식</th><th>Back-out 방법</th></tr>
<tr><td><b>Parallel</b></td><td>기존 시스템이 자연스러운 Back-out Plan 역할</td></tr>
<tr><td><b>Immediate Cutover</b></td><td>기존 시스템 즉시 중단 → <b>별도 Back-out Plan 필수</b></td></tr></table>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr style="background:#e8f5e9"><td><b>A. Back-out Plan 부재 ✔</b></td><td><b>복구에 막대한 시간·비용 → 미션 크리티컬 시스템에서 치명적</b></td></tr>
<tr><td>B. UAT 문서화 미흡</td><td>중요하나, Back-out Plan 부재보다 덜 심각</td></tr>
<tr><td>C. 스트레스 테스트 미수행</td><td>중요하나, Back-out Plan 부재보다 덜 심각</td></tr>
<tr><td>D. 공휴일 Go-live</td><td>지연 가능하나, PM이 직원 확보로 대응 가능</td></tr></table>
<div class="sbox"><b>🔙 Immediate Cutover + Back-out Plan:</b><br>
• Parallel = 구 시스템이 자동 백업 역할<br>
• Cutover = 구 시스템 중단 → <b>Back-out Plan 없으면 복구 불가</b><br>
• 미션 크리티컬 + Cutover + No Back-out = <b>최대 리스크</b></div>`,
reference:"CRM Chapter 3: IS Development — Implementation Strategies",
keyConcepts:[
"Immediate Cutover 최대 리스크|Back-out Plan 부재 (복구에 막대한 시간·비용)",
"Parallel vs Cutover|Parallel = 구 시스템이 자연적 Back-out / Cutover = 별도 Back-out Plan 필수",
"Back-out Plan|구현 실패 시 이전 상태로 복구하는 계획 (미션 크리티컬 시스템에서 필수)"
]
},

{
id:110, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`IS 감사인은 개발 중인 시스템이 12개의 연결된 모듈과 항목당 최대 10개의 정의 가능한 속성 필드를 가지며, 연간 수백만 건의 거래를 처리함을 확인했다. 개발 규모를 추정하기 위해 사용할 수 있는 기법은?<br><small style="color:#94a3b8">An IS auditor finds that a system under development has 12 linked modules and each item of data can carry up to 10 definable attribute fields. The system handles several million transactions a year. Which of the following techniques can an IS auditor use to estimate the size of the development effort?</small>`,
options:[
"PERT(프로그램 평가 검토 기법)<br><small style='color:#94a3b8'>Program evaluation review technique (PERT)</small>",
"기능점 분석(Function Point Analysis)<br><small style='color:#94a3b8'>Function point analysis</small>",
"소스 코드 라인 수 측정<br><small style='color:#94a3b8'>Counting source lines of code</small>",
"화이트 박스 테스트<br><small style='color:#94a3b8'>White box testing</small>"
],
correct:1,
explanation:`<p><mark>기능점 분석(Function Point Analysis)</mark>은 입력·출력·조회·논리적 내부 사이트 등 기능점을 기반으로 개발 규모를 추정하는 기법이다.</p>
<table><tr><th>선택지</th><th>목적</th><th>평가</th></tr>
<tr><td>A. PERT</td><td>기간 추정 (3점 추정)</td><td>프로젝트 관리 기법, 규모 추정 X</td></tr>
<tr style="background:#e8f5e9"><td><b>B. Function Point ✔</b></td><td><b>개발 크기/규모 측정</b></td><td><b>모듈·속성·거래량 등 복잡성 반영</b></td></tr>
<tr><td>C. 소스 라인 수(SLOC)</td><td>프로그램 크기 직접 측정</td><td>복잡성(연결 모듈, 다양한 I/O) 반영 못 함</td></tr>
<tr><td>D. White Box Testing</td><td>코드 내부 논리 검증</td><td>QA 기법, 규모 추정 X</td></tr></table>
<div class="sbox"><b>📏 Function Point Analysis:</b><br>
• 입력(Inputs), 출력(Outputs), 조회(Inquiries), 논리적 내부 파일, 외부 인터페이스<br>
• 모듈 수·속성 필드·거래량 등 <b>복잡성을 반영</b>한 규모 추정<br>
• SLOC는 단순 크기만 측정 → 복잡성 반영 불가</div>`,
reference:"CRM Chapter 3: IS Development — Function Point Analysis",
keyConcepts:[
"Function Point Analysis|입력·출력·조회·내부 파일 기반으로 개발 규모 추정 (복잡성 반영)",
"SLOC vs Function Point|SLOC = 단순 크기, Function Point = 복잡성 포함 규모",
"PERT vs Function Point|PERT = 기간 추정, Function Point = 크기/규모 추정"
]
},

{
id:111, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`프리미엄 비용을 지불하여 프로젝트를 조기 완료하려 할 때, 선택해야 하는 활동은?<br><small style="color:#94a3b8">When identifying an earlier project completion time, which is to be accomplished by paying a premium for early completion, the activities that should be selected are those:</small>`,
options:[
"활동 시간의 합이 가장 짧은 것<br><small style='color:#94a3b8'>Whose sum of activity time is the shortest.</small>",
"여유 시간(Slack)이 0인 것<br><small style='color:#94a3b8'>That have zero slack time.</small>",
"가장 긴 완료 시간을 제공하는 것<br><small style='color:#94a3b8'>That give the longest possible completion time.</small>",
"여유 시간의 합이 가장 짧은 것<br><small style='color:#94a3b8'>Whose sum of slack time is the shortest.</small>"
],
correct:1,
explanation:`<p>프로젝트 조기 완료(Crashing)를 위해서는 <mark>Slack이 0인 활동(= Critical Path 상의 활동)</mark>을 단축해야 한다.</p>
<table><tr><th>개념</th><th>설명</th></tr>
<tr><td><b>Critical Path</b></td><td>네트워크에서 가장 긴 경로 → 프로젝트 최소 완료 시간 결정</td></tr>
<tr><td><b>Slack = 0</b></td><td>Critical Path 상의 활동 = 여유 시간 없음</td></tr>
<tr><td><b>Crashing</b></td><td>프리미엄 비용 지불 → Critical Path 활동 시간 단축</td></tr></table>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 활동 시간 합 최단</td><td>Critical Path는 최장 경로이므로 무관</td></tr>
<tr style="background:#e8f5e9"><td><b>B. Slack = 0 ✔</b></td><td><b>Critical Path 활동 = Slack 0 → Crashing 대상</b></td></tr>
<tr><td>C. 최장 완료 시간</td><td>개별 활동의 최장 시간이 아님</td></tr>
<tr><td>D. Slack 합 최단</td><td>Critical Path 활동은 Slack이 0 (합이 아님)</td></tr></table>
<div class="sbox"><b>⏱ Crashing 핵심:</b><br>
• Critical Path = 가장 긴 경로 = 프로젝트 최소 완료 기간<br>
• Slack 0 = Critical Path 활동 ↔ Critical Path 활동 = Slack 0<br>
• 조기 완료 → <b>Slack 0 활동에 프리미엄 투입</b>하여 시간 단축</div>`,
reference:"CRM Chapter 3: IS Development — Critical Path & Crashing",
keyConcepts:[
"Crashing|프리미엄 비용 지불로 Critical Path 활동 시간을 단축하는 기법",
"Slack = 0|Critical Path 상의 활동 특성 (여유 시간 없음 = 지연 시 프로젝트 지연)",
"Critical Path|네트워크 다이어그램에서 가장 긴 경로 → 프로젝트 최소 완료 시간 결정"
]
},

{
id:112, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`전자 데이터 웨어하우스 솔루션의 필요성을 뒷받침하는 비즈니스 케이스를 준비할 때, 경영진의 의사결정을 지원하기 위해 <b>가장 중요한</b> 것은?<br><small style="color:#94a3b8">When preparing a business case to support the need of an electronic data warehouse solution, which of the following choices is the MOST important to assist management in the decision-making process?</small>`,
options:[
"단일 솔루션을 논의한다<br><small style='color:#94a3b8'>Discuss a single solution.</small>",
"보안 통제를 고려한다<br><small style='color:#94a3b8'>Consider security controls.</small>",
"타당성을 입증한다<br><small style='color:#94a3b8'>Demonstrate feasibility.</small>",
"감사 부서와 상의한다<br><small style='color:#94a3b8'>Consult the audit department.</small>"
],
correct:2,
explanation:`<p>비즈니스 케이스에서 <mark>타당성 입증(Feasibility)</mark>이 가장 중요하다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 단일 솔루션</td><td>❌ 모든 가능한 솔루션 논의 필요 (프로젝트 미추진 옵션 포함)</td></tr>
<tr><td>B. 보안 통제</td><td>상황에 따라 중요하나, 타당성보다 우선하지 않음</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 타당성 입증 ✔</b></td><td><b>Feasibility Study + 비용편익분석 → 경영진 정보 기반 의사결정</b></td></tr>
<tr><td>D. 감사 부서 상의</td><td>상황적이며, 비즈니스 케이스에 반드시 필요하지 않음</td></tr></table>
<div class="sbox"><b>📊 비즈니스 케이스 핵심 구성:</b><br>
• <b>Feasibility Study</b> (타당성 연구) — 기술적·경제적·운영적 실현 가능성<br>
• <b>Cost-Benefit Analysis</b> — 비용 대비 편익<br>
• 모든 가능한 솔루션 + 미추진 옵션 포함</div>`,
reference:"CRM Chapter 3: IS Development — Business Case",
keyConcepts:[
"비즈니스 케이스 최우선|타당성 입증(Feasibility) + 비용편익분석 → 경영진 의사결정 지원",
"비즈니스 케이스 원칙|모든 가능한 솔루션 논의 (단일 솔루션 X, 미추진 옵션도 포함)",
"Feasibility Study|기술적·경제적·운영적 실현 가능성을 평가하는 연구"
]
},

{
id:113, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`다음 중 통합 테스트 시설(ITF)의 장점은?<br><small style="color:#94a3b8">Which of the following is an advantage of an integrated test facility?</small>`,
options:[
"실제 마스터 파일 또는 더미를 사용하며, IS 감사인이 거래 출처를 검토할 필요가 없다<br><small style='color:#94a3b8'>It uses actual master files or dummies, and the IS auditor does not have to review the source of the transaction.</small>",
"주기적 테스트에 별도의 테스트 프로세스가 필요하지 않다<br><small style='color:#94a3b8'>Periodic testing does not require separate test processes.</small>",
"애플리케이션 시스템을 검증하고 시스템의 올바른 운영을 보장한다<br><small style='color:#94a3b8'>It validates application systems and ensures the correct operation of the system.</small>",
"테스트 데이터 준비 필요성이 제거된다<br><small style='color:#94a3b8'>The need to prepare test data is eliminated.</small>"
],
correct:1,
explanation:`<p><mark>ITF(Integrated Test Facility)</mark>의 핵심 장점은 <b>별도 테스트 프로세스 없이</b> 주기적 테스트가 가능하다는 것이다.</p>
<table><tr><th>ITF 특징</th><th>설명</th></tr>
<tr><td>원리</td><td>DB에 <b>가상 엔티티(Fictitious Entity)</b> 생성 → 실제 입력과 동시에 테스트 거래 처리</td></tr>
<tr><td>장점</td><td><b>별도 테스트 프로세스 불필요</b> (운영과 동시 수행)</td></tr>
<tr><td>주의</td><td>테스트 데이터를 운영 데이터에서 <b>분리</b> 필요</td></tr></table>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 거래 출처 검토 불필요</td><td>ITF는 거래 출처 검토와 무관</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 별도 테스트 프로세스 불필요 ✔</b></td><td><b>운영 흐름에 통합 → 주기적 테스트 용이</b></td></tr>
<tr><td>C. 시스템 올바른 운영 보장</td><td>거래 처리 검증은 하나, 시스템 운영 보장은 아님</td></tr>
<tr><td>D. 테스트 데이터 불필요</td><td>❌ 테스트 데이터는 여전히 필요</td></tr></table>
<div class="sbox"><b>🔬 감사 테스트 기법 비교:</b><br>
• <b>ITF</b> = 가상 엔티티 + 실제 운영과 동시 처리 → 별도 프로세스 불필요<br>
• <b>Test Deck</b> = 사전 정의된 테스트 데이터 → 기대 결과와 비교<br>
• <b>Parallel Simulation</b> = 감사인 프로그램으로 동일 데이터 재처리</div>`,
reference:"CRM Chapter 3: IS Development — Integrated Test Facility",
keyConcepts:[
"ITF(Integrated Test Facility)|DB에 가상 엔티티 생성 → 실제 운영과 동시에 테스트 거래 처리",
"ITF 장점|주기적 테스트에 별도 테스트 프로세스 불필요 (운영 흐름에 통합)",
"ITF 주의점|테스트 데이터를 운영 데이터에서 분리 필요, 테스트 데이터는 여전히 필요"
]
},

{
id:114, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`오류 발생 시에만 사용되는 경로를 포함하여 모든 코드 경로를 테스트하기 위한 완전한 코드 커버리지를 보장하려면 어떤 테스트 환경이 필요한가?<br><small style="color:#94a3b8">Which testing environment is required to ensure complete code coverage to test every code path in software testing, including those that will only be used when an error occurs?</small>`,
options:[
"화이트 박스<br><small style='color:#94a3b8'>White box</small>",
"그레이 박스<br><small style='color:#94a3b8'>Gray box</small>",
"블랙 박스<br><small style='color:#94a3b8'>Black box</small>",
"동적 테스트<br><small style='color:#94a3b8'>Dynamic</small>"
],
correct:0,
explanation:`<p><mark>White Box 테스트</mark>만이 모든 코드 경로(오류 경로 포함)를 완전히 커버할 수 있다.</p>
<table><tr><th>테스트</th><th>코드 가시성</th><th>완전 커버리지</th></tr>
<tr style="background:#e8f5e9"><td><b>White Box ✔</b></td><td>코드 내부 완전 공개</td><td><b>✅ 모든 경로 (오류 포함) 테스트 가능</b></td></tr>
<tr><td>Gray Box</td><td>부분 공개</td><td>❌ 일부 코드 누락 가능</td></tr>
<tr><td>Black Box</td><td>비공개 (기능만)</td><td>❌ 내부 경로 확인 불가</td></tr>
<tr><td>Dynamic</td><td>실행 코드 대상</td><td>❌ 일반 사용에 노출 안 된 코드 누락</td></tr></table>
<div class="sbox"><b>🔍 코드 커버리지 키워드:</b><br>
• "모든 코드 경로" / "완전한 코드 커버리지" / "오류 경로 포함" → <b>White Box</b><br>
• White Box = Structural Test = Glass Box = 개발자가 코드 내부 논리 검증</div>`,
reference:"CRM Chapter 3: IS Development — Testing Types",
keyConcepts:[
"완전한 코드 커버리지|White Box 테스트만 가능 (모든 코드 경로 + 오류 경로 포함)",
"White Box = Structural = Glass Box|코드 내부 완전 공개 → 논리 경로별 테스트",
"Gray Box|부분적 코드 가시성 → 완전 커버리지 불가"
]
},

{
id:115, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`새 ERP 시스템 구현에 RAD(Rapid Application Development) 방법론이 선택되었다. 내부 직원이 불가하여 모든 프로젝트 활동이 계약 컨설팅 벤더에 배정되었다. 자원 부족을 보완하기 위한 IS 감사인의 <b>첫 번째</b> 조치는?<br><small style="color:#94a3b8">A rapid application development methodology has been selected to implement a new ERP system. All project activities have been assigned to the contracted consulting vendor because internal employees are unavailable. What is the IS auditor's FIRST step to compensate for the lack of resources?</small>`,
options:[
"프로젝트 계획과 접근법을 검토한다<br><small style='color:#94a3b8'>Review the project plan and approach.</small>",
"벤더에 추가 외부 인력 제공을 요청한다<br><small style='color:#94a3b8'>Ask the vendor to provide additional external staff.</small>",
"조직에 더 많은 인력 채용을 권고한다<br><small style='color:#94a3b8'>Recommend that the organization hire more people.</small>",
"모든 인적 자원이 확보될 때까지 프로젝트를 중단한다<br><small style='color:#94a3b8'>Stop the project until all human resources are available.</small>"
],
correct:0,
explanation:`<p>RAD 방법론에서 내부 자원 부족 시, 감사인의 <b>첫 번째 조치</b>는 <mark>프로젝트 계획과 접근법 검토</mark>이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr style="background:#e8f5e9"><td><b>A. 계획/접근법 검토 ✔</b></td><td><b>내부 사용자 부재를 보완하기 위한 적절한 변경 사항 파악</b></td></tr>
<tr><td>B. 외부 인력 추가</td><td>외부 인력은 내부 사용자(비즈니스) 대신 의사결정 불가</td></tr>
<tr><td>C. 신규 채용 권고</td><td>시간 소요 + 신규 인력의 즉각적 의사결정 역량 미보장</td></tr>
<tr><td>D. 프로젝트 중단</td><td>가능한 옵션이나, 먼저 계획 검토 후 판단해야 함</td></tr></table>
<div class="sbox"><b>⚡ RAD + 자원 부족 핵심:</b><br>
• RAD = 짧은 기간 + 전문 자원 + 빠른 의사결정 필수<br>
• 내부 직원 부재 = 비즈니스 의사결정자 부재<br>
• <b>FIRST = 계획/접근법 검토</b> → 보완 방안 도출 → 그 후 중단 등 판단<br>
• 외부 인력 추가 ≠ 해결 (내부 사용자 의사결정 대체 불가)</div>`,
reference:"CRM Chapter 3: IS Development — RAD Methodology",
keyConcepts:[
"RAD 자원 부족 시 첫 조치|프로젝트 계획과 접근법 검토 (보완 방안 도출)",
"RAD 특성|짧은 기간·전문 자원·빠른 의사결정 필수 → 자원 부재 시 리스크 큼",
"외부 인력 한계|내부 비즈니스 사용자의 의사결정을 대체할 수 없음"
]
},

{
id:116, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`IS 감사인이 새 ERP 시스템으로의 전환을 검토 중이다. 전환 최종 단계에서 조직은 신·구 시스템을 30일간 병행 운영한 후 신규 시스템을 단독 운영했다. 이 전략의 <b>가장 중요한 장점</b>은?<br><small style="color:#94a3b8">The IS auditor is reviewing a recently completed conversion to a new ERP system. In the final stage of the conversion process, the organization ran the old and new systems in parallel for 30 days before allowing the new system to run on its own. What is the MOST significant advantage to the organization by using this strategy?</small>`,
options:[
"다른 테스트 접근법 대비 상당한 비용 절감<br><small style='color:#94a3b8'>Significant cost savings over other testing approaches</small>",
"새 하드웨어가 신규 시스템과 호환되는지 보장<br><small style='color:#94a3b8'>Assurance that new, faster hardware is compatible with the new system</small>",
"신규 시스템이 기능적 요구사항을 충족하는지 보장<br><small style='color:#94a3b8'>Assurance that the new system meets functional requirements</small>",
"병행 처리 기간 동안 복원력 증가<br><small style='color:#94a3b8'>Increased resiliency during the parallel processing time</small>"
],
correct:2,
explanation:`<p>병행 운영(Parallel Operation)의 <b>가장 중요한 장점</b>은 <mark>신규 시스템이 기능적 요구사항을 충족하는지 보장</mark>하는 것이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 비용 절감</td><td>❌ 병행 운영은 가장 비싼 테스트 (이중 입력·HW·유지보수·백업)</td></tr>
<tr><td>B. HW 호환성</td><td>전환 초기 단계에서 확인해야 할 사항 (병행 운영 목적 X)</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 기능 요구사항 충족 ✔</b></td><td><b>구 시스템 결과와 비교 → 신 시스템 정상 작동 확인 + 실패 시 구 시스템 사용 가능</b></td></tr>
<tr><td>D. 복원력 증가</td><td>일시적·부수적 이점일 뿐, 핵심 장점 아님</td></tr></table>
<div class="sbox"><b>🔄 Parallel Operation 정리:</b><br>
• <b>최대 장점</b> = 기능 요구사항 충족 보장 (가장 안전한 전환 방식)<br>
• <b>최대 단점</b> = 비용 (이중 운영 → 가장 비쌈)<br>
• 실패 시 구 시스템으로 즉시 복귀 가능 (자연적 Back-out)</div>`,
reference:"CRM Chapter 3: IS Development — Parallel Operation",
keyConcepts:[
"Parallel Operation 최대 장점|신규 시스템이 기능적 요구사항 충족하는지 보장 (가장 안전한 전환)",
"Parallel Operation 최대 단점|가장 비싼 테스트 방식 (이중 입력·HW·유지보수·백업)",
"Parallel vs Cutover|Parallel = 안전+비쌈 / Cutover = 빠름+Back-out Plan 필수"
]
},

{
id:117, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`새 비즈니스 시스템 애플리케이션의 성공적 완료와 구현을 위해, 시스템 산출물이 정의·달성될 때 이를 검토하고 승인해야 하는 주체는?<br><small style="color:#94a3b8">Who should review and approve system deliverables as they are defined and accomplished, to ensure the successful completion and implementation of a new business system application?</small>`,
options:[
"사용자 관리자(User Management)<br><small style='color:#94a3b8'>User management</small>",
"프로젝트 운영위원회<br><small style='color:#94a3b8'>Project steering committee</small>",
"경영진<br><small style='color:#94a3b8'>Senior management</small>",
"품질 보증(QA) 직원<br><small style='color:#94a3b8'>Quality assurance (QA) staff</small>"
],
correct:0,
explanation:`<p>시스템 산출물의 검토·승인은 <mark>사용자 관리자(User Management)</mark>의 역할이다.</p>
<table><tr><th>역할</th><th>책임</th></tr>
<tr style="background:#e8f5e9"><td><b>User Management</b></td><td><b>프로젝트 소유권 + 요구사항 정의 + 산출물 검토/승인 + UAT + 교육</b></td></tr>
<tr><td>Steering Committee</td><td>전체 방향 제시 + 이해관계자 대표 + 진행 검토 + 비용/일정 최종 책임</td></tr>
<tr><td>Senior Management</td><td>프로젝트 약속(Commitment) + 필요 자원 승인</td></tr>
<tr><td>QA Staff</td><td>각 단계 결과/산출물의 표준·요구사항 준수 확인</td></tr></table>
<div class="sbox"><b>👥 SDLC 참여자 역할 구분:</b><br>
• <b>산출물 검토/승인</b> → User Management<br>
• <b>전체 방향/비용/일정</b> → Steering Committee<br>
• <b>자원 승인/약속</b> → Senior Management<br>
• <b>표준 준수 확인</b> → QA Staff</div>`,
reference:"CRM Chapter 3: IS Development — SDLC Roles",
keyConcepts:[
"User Management 역할|프로젝트 소유권, 요구사항 정의, 산출물 검토/승인, UAT, 교육",
"Steering Committee 역할|전체 방향, 이해관계자 대표, 진행 검토, 비용/일정 최종 책임",
"산출물 검토/승인 주체|User Management (Steering Committee는 전체 방향/비용/일정)"
]
},

{
id:118, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`다음 중 애플리케이션 시스템 통제의 효과성에 대한 <b>가장 큰 리스크</b>는?<br><small style="color:#94a3b8">Which of the following is the GREATEST risk to the effectiveness of application system controls?</small>`,
options:[
"수작업 처리 단계 제거<br><small style='color:#94a3b8'>Removal of manual processing steps</small>",
"부적절한 절차 매뉴얼<br><small style='color:#94a3b8'>Inadequate procedure manuals</small>",
"직원 간 공모<br><small style='color:#94a3b8'>Collusion between employees</small>",
"미해결된 규제 준수 문제<br><small style='color:#94a3b8'>Unresolved regulatory compliance issues</small>"
],
correct:2,
explanation:`<p>애플리케이션 통제 효과성에 대한 최대 리스크는 <mark>직원 간 공모(Collusion)</mark>이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 수작업 제거</td><td>자동화는 바람직 (수동 보안 통제가 자동화 없이 제거되면 문제)</td></tr>
<tr><td>B. 부적절한 매뉴얼</td><td>문제이나, 대부분 심각한 리스크는 아님</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 직원 공모 ✔</b></td><td><b>직무 분리 등 잘 설계된 통제도 우회 가능 + 식별 어려움</b></td></tr>
<tr><td>D. 규제 미준수</td><td>리스크이나 통제 효과성 측정과 무관</td></tr></table>
<div class="sbox"><b>🤝 Collusion(공모)이 최대 리스크인 이유:</b><br>
• 직무 분리(SoD) = 가장 강력한 통제 수단<br>
• 공모 = 여러 직원이 협력하여 SoD 등 통제를 <b>우회</b><br>
• 잘 설계된 통제도 무력화 + <b>탐지가 매우 어려움</b></div>`,
reference:"CRM Chapter 3: IS Development — Application Controls",
keyConcepts:[
"애플리케이션 통제 최대 리스크|직원 간 공모(Collusion) — SoD 등 통제 우회 + 탐지 어려움",
"Collusion|직원들이 협력하여 직무 분리 등 내부 통제를 의도적으로 우회하는 행위",
"통제 효과성 vs 규제 준수|규제 미준수는 리스크이나, 통제 효과성 측정과는 별개"
]
},

{
id:119, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`조직이 새 클라이언트-서버 ERP 시스템을 구현했다. 지역 지점이 고객 주문을 중앙 제조 시설로 전송한다. 주문이 정확히 처리되고 해당 제품이 생산되도록 <b>가장 잘</b> 보장하는 것은?<br><small style="color:#94a3b8">An organization implemented a new client-server ERP system. Local branches transmit customer orders to a central manufacturing facility. Which of the following BEST ensures that the orders are processed accurately and the corresponding products are produced?</small>`,
options:[
"고객 주문의 생산 검증<br><small style='color:#94a3b8'>Verifying production of customer orders</small>",
"ERP 시스템에 모든 고객 주문 로깅<br><small style='color:#94a3b8'>Logging all customer orders in the ERP system</small>",
"주문 전송 과정에서 해시 합계 사용<br><small style='color:#94a3b8'>Using hash totals in the order transmitting process</small>",
"생산 전 생산 감독자의 주문 승인<br><small style='color:#94a3b8'>Approving (production supervisor) orders prior to production</small>"
],
correct:0,
explanation:`<p><mark>생산된 제품이 주문과 일치하는지 검증</mark>하는 것이 정확한 처리를 가장 잘 보장한다.</p>
<table><tr><th>선택지</th><th>보장 범위</th><th>평가</th></tr>
<tr style="background:#e8f5e9"><td><b>A. 생산 검증 ✔</b></td><td><b>처리 + 생산 정확성</b></td><td><b>생산 결과 ↔ 주문 대조 = End-to-End 검증</b></td></tr>
<tr><td>B. 주문 로깅</td><td>기록만</td><td>부정확 탐지 가능하나 정확 처리 보장 X</td></tr>
<tr><td>C. 해시 합계</td><td>전송 정확성만</td><td>전송은 보장하나 중앙 처리 정확성 X</td></tr>
<tr><td>D. 감독자 승인</td><td>수동 통제</td><td>시간 소모 + 적절한 통제 보장 X</td></tr></table>
<div class="sbox"><b>✅ 처리 정확성 보장 핵심:</b><br>
• 해시 합계 = <b>전송</b> 정확성 (입력→전달)<br>
• 로깅 = <b>기록</b> (탐지용)<br>
• 생산 검증 = <b>출력</b> 정확성 (주문→제품 대조) = End-to-End</div>`,
reference:"CRM Chapter 3: IS Development — Processing Controls",
keyConcepts:[
"처리 정확성 보장|생산된 제품과 주문 대조 (End-to-End 검증이 가장 효과적)",
"해시 합계 한계|전송 정확성만 보장, 중앙 처리 정확성은 보장 X",
"로깅 한계|부정확 탐지는 가능하나 정확한 처리를 보장하지 않음"
]
},

{
id:120, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`조직이 분산 회계 시스템을 구현했고, IS 감사인이 데이터 무결성 통제에 대한 보증을 제공하기 위해 구현 후 검토를 수행 중이다. 감사인이 <b>가장 먼저</b> 수행해야 하는 것은?<br><small style="color:#94a3b8">An organization implemented a distributed accounting system, and the IS auditor is conducting a post-implementation review to provide assurance of the data integrity controls. Which of the following choices should the auditor perform FIRST?</small>`,
options:[
"사용자 접근 검토<br><small style='color:#94a3b8'>Review user access.</small>",
"변경 요청 프로세스 평가<br><small style='color:#94a3b8'>Evaluate the change request process.</small>",
"조정 통제(Reconciliation Controls) 평가<br><small style='color:#94a3b8'>Evaluate the reconciliation controls.</small>",
"데이터 흐름도(DFD) 검토<br><small style='color:#94a3b8'>Review the data flow diagram.</small>"
],
correct:3,
explanation:`<p>데이터 무결성 통제 감사 시 <b>가장 먼저</b> <mark>데이터 흐름도(DFD)</mark>를 검토해야 한다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 사용자 접근 검토</td><td>중요하나, 데이터 흐름 이해가 선행되어야 함</td></tr>
<tr><td>B. 변경 요청 프로세스</td><td>무결성에 영향 가능하나, 먼저 시스템 문서화/이해 필요</td></tr>
<tr><td>C. 조정 통제 평가</td><td>무결성 보장에 유효하나, 통제가 올바른 위치에 있는지 먼저 확인 필요</td></tr>
<tr style="background:#e8f5e9"><td><b>D. DFD 검토 ✔</b></td><td><b>데이터 흐름 이해 → 통제 설계/효과성 평가의 기초</b></td></tr></table>
<div class="sbox"><b>📊 데이터 무결성 감사 순서:</b><br>
1️⃣ <b>DFD 검토</b> → 데이터가 어디로 흐르는지 이해<br>
2️⃣ 조정 통제가 올바른 위치에 있는지 확인<br>
3️⃣ 접근 통제, 변경 관리 등 세부 통제 평가<br>
• 분산 시스템 = 데이터가 여러 시스템으로 흐름 → DFD 이해가 최우선</div>`,
reference:"CRM Chapter 3: IS Development — Data Integrity Controls",
keyConcepts:[
"데이터 무결성 감사 FIRST|데이터 흐름도(DFD) 검토 → 데이터 흐름 이해 후 통제 평가",
"DFD 검토 이유|분산 시스템에서 데이터가 다른 시스템으로 흐르는지 파악 → 통제 위치 확인",
"감사 순서|DFD 이해 → 조정 통제 위치 확인 → 접근 통제/변경 관리 평가"
]
},

{
id:121, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`IS 감사인이 대규모 소프트웨어 개발 프로젝트를 검토 중이다. 프로젝트는 일정 내이고 예산 미만이지만, 개발자들이 상당한 양의 계획되지 않은 초과 근무를 했다. IS 감사인은 어떻게 해야 하는가?<br><small style="color:#94a3b8">An IS auditor performing a review of a major software development project finds that it is on schedule and under budget even though the software developers have worked considerable amounts of unplanned overtime. The IS auditor should:</small>`,
options:[
"일정이 충족되고 있으므로 프로젝트가 계획대로 진행 중이라고 결론 내린다<br><small style='color:#94a3b8'>Conclude that the project is progressing as planned because dates are being met.</small>",
"초과 근무 비용이 정확히 추적되고 있는지 프로젝트 관리자에게 추가 질문한다<br><small style='color:#94a3b8'>Question the project manager further to identify whether overtime costs are being tracked accurately.</small>",
"프로그래머들이 추가 수당을 위해 의도적으로 느리게 일하고 있다고 결론 내린다<br><small style='color:#94a3b8'>Conclude that the programmers are intentionally working slowly to earn extra overtime pay.</small>",
"프로젝트 계획이 정확하지 않을 수 있는지 추가 조사한다<br><small style='color:#94a3b8'>Investigate further to determine whether the project plan may not be accurate.</small>"
],
correct:3,
explanation:`<p>일정·예산 충족이지만 <b>대량의 계획되지 않은 초과 근무</b> → <mark>프로젝트 계획 자체의 정확성</mark>을 조사해야 한다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 계획대로 진행 결론</td><td>❌ 비계획 초과 근무 = 문제 징후 무시</td></tr>
<tr><td>B. 초과 근무 비용 추적 확인</td><td>일부 유효하나, 근본 문제는 계획의 현실성</td></tr>
<tr><td>C. 의도적 태업 결론</td><td>가능하나, 일정 충족을 위한 초과 근무라면 비현실적 계획이 더 가능성 높음</td></tr>
<tr style="background:#e8f5e9"><td><b>D. 계획 정확성 조사 ✔</b></td><td><b>비계획 초과 근무 = 일정/기대가 비현실적일 수 있다는 징후</b></td></tr></table>
<div class="sbox"><b>⚠ 프로젝트 계획 적신호:</b><br>
• 일정 OK + 예산 OK + <b>대량 비계획 초과 근무</b> = 계획이 비현실적<br>
• 연봉제(Salaried) 직원은 초과 근무 비용이 직접 기록 안 될 수 있음<br>
• 감사인 = 표면적 지표(일정/예산)만 보지 말고 <b>근본 원인 조사</b></div>`,
reference:"CRM Chapter 3: IS Development — Project Plan Review",
keyConcepts:[
"비계획 초과 근무 의미|프로젝트 계획이 비현실적일 수 있다는 징후 → 계획 정확성 조사 필요",
"표면적 지표 함정|일정 OK + 예산 OK라도 비정상적 초과 근무 = 근본 문제 존재 가능",
"감사인 접근법|표면적 성과만 보지 말고 이면의 근본 원인을 조사"
]
},

{
id:122, domain:"3", ks:"3B1 System Readiness and Implementation Testing",
question:`컴포넌트 기반 개발(Component-based Development) 접근법의 <b>주요 장점</b>은?<br><small style="color:#94a3b8">The MAJOR advantage of a component-based development approach is the:</small>`,
options:[
"제한 없는 다양한 데이터 유형 관리 능력<br><small style='color:#94a3b8'>Ability to manage an unrestricted variety of data types.</small>",
"복잡한 관계 모델링 지원<br><small style='color:#94a3b8'>Provision for modeling complex relationships.</small>",
"변화하는 환경의 요구에 대응하는 역량<br><small style='color:#94a3b8'>Capacity to meet the demands of a changing environment.</small>",
"다중 개발 환경 지원<br><small style='color:#94a3b8'>Support of multiple development environments.</small>"
],
correct:3,
explanation:`<p>컴포넌트 기반 개발의 주요 장점은 <mark>다중 개발 환경 지원</mark>이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 다양한 데이터 유형</td><td>각 컴포넌트 내에서 정의해야 하며, 보장 X</td></tr>
<tr><td>B. 복잡한 관계 모델링</td><td>다른 방법론과 비교 시 특별한 이점 없음</td></tr>
<tr><td>C. 변화 대응</td><td>효과적이나 주요 장점/목적은 아님</td></tr>
<tr style="background:#e8f5e9"><td><b>D. 다중 개발 환경 지원 ✔</b></td><td><b>재사용 모듈 → 개발 속도↑ → 개발자는 비즈니스 로직에 집중</b></td></tr></table>
<div class="sbox"><b>🧩 Component-based Development:</b><br>
• <b>재사용 가능한 모듈(컴포넌트)</b>에 의존<br>
• 다양한 개발 환경에서 컴포넌트 활용 가능<br>
• 개발 속도 증가 + 개발자는 비즈니스 로직에 집중<br>
• OOD의 모듈 재사용과 유사한 개념</div>`,
reference:"CRM Chapter 3: IS Development — Component-based Development",
keyConcepts:[
"Component-based Development 주요 장점|다중 개발 환경 지원 (재사용 모듈 → 개발 속도↑)",
"CBD vs OOD|둘 다 재사용 모듈 기반, CBD = 다중 환경 지원이 핵심 장점",
"CBD 특성|재사용 컴포넌트 → 개발자가 비즈니스 로직에 집중 가능"
]
},

{
id:123, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`CI/CD(지속적 통합/지속적 배포) 변경 관리를 구현한 기업의 <b>주요 이점</b>은?<br><small style="color:#94a3b8">Which is the MAIN benefit for an enterprise that has implemented continuous integration and continuous deployment (CICD) change management?</small>`,
options:[
"모든 변경 사항이 문서화되도록 보장<br><small style='color:#94a3b8'>Ensures that all changes are documented</small>",
"소프트웨어 생성 및 전달 속도 향상<br><small style='color:#94a3b8'>Increases speed with which software is created and delivered</small>",
"통합의 성공 또는 실패를 감지하기 위한 테스트 자동화<br><small style='color:#94a3b8'>Automates testing to detect success or failure of an integration</small>",
"개발자가 수행한 모든 작업 로깅<br><small style='color:#94a3b8'>Logs all actions taken by developers</small>"
],
correct:1,
explanation:`<p>CI/CD의 <b>주요 이점(Main Benefit)</b>은 <mark>소프트웨어 생성·전달 속도 향상</mark>이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 변경 문서화</td><td>CI/CD의 핵심 통제이나, 주요 이점은 아님</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 속도 향상 ✔</b></td><td><b>CI/CD 구현의 핵심 목표 = 빠른 소프트웨어 생성·전달</b></td></tr>
<tr><td>C. 테스트 자동화</td><td>CI/CD의 핵심 기능(Feature)이나, 이점(Benefit)과 구별</td></tr>
<tr><td>D. 개발자 행동 로깅</td><td>핵심 통제이나, 주요 이점은 아님</td></tr></table>
<div class="sbox"><b>🔄 CI/CD 구분:</b><br>
• <b>주요 이점(Benefit)</b> = 소프트웨어 생성·전달 <b>속도 향상</b><br>
• <b>핵심 기능(Feature)</b> = 테스트 자동화<br>
• <b>핵심 통제(Control)</b> = 변경 문서화, 개발자 행동 로깅<br>
• 나머지는 CI/CD 구현을 위한 <b>구성 요소</b>이지 목표가 아님</div>`,
reference:"CRM Chapter 3: IS Development — CI/CD",
keyConcepts:[
"CI/CD 주요 이점|소프트웨어 생성·전달 속도 향상 (핵심 목표)",
"CI/CD 기능 vs 이점|테스트 자동화 = 기능, 문서화/로깅 = 통제, 속도 향상 = 이점",
"CI/CD|Continuous Integration/Continuous Deployment — 코드 통합·테스트·배포 자동화 파이프라인"
]
},

{
id:124, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`시스템 개발 프로젝트에서 프로세스 소유권(Process Ownership) 할당이 필수적인 이유는?<br><small style="color:#94a3b8">Assignment of process ownership is essential in system development projects because it:</small>`,
options:[
"개발 완료 비율 추적을 가능하게 한다<br><small style='color:#94a3b8'>Enables the tracking of the development completion percentage.</small>",
"사용자 인수 테스트 케이스 설계 비용을 최적화한다<br><small style='color:#94a3b8'>Optimizes the design cost of user acceptance test cases.</small>",
"요구사항과 기능 간의 갭을 최소화한다<br><small style='color:#94a3b8'>Minimizes the gaps between requirements and functionalities.</small>",
"시스템 설계가 비즈니스 요구에 기반하도록 보장한다<br><small style='color:#94a3b8'>Ensures that system design is based on business needs.</small>"
],
correct:3,
explanation:`<p>프로세스 소유권 할당의 핵심 이유는 <mark>시스템 설계가 비즈니스 요구에 기반</mark>하도록 보장하는 것이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 완료율 추적</td><td>프로세스 소유권은 완료율 추적 기능이 아님</td></tr>
<tr><td>B. 테스트 비용 최적화</td><td>간접적 기여 가능하나, 테스트 설계에는 다른 요인이 더 많음</td></tr>
<tr><td>C. 요구/기능 갭 최소화</td><td>요구사항 분석 프레임워크 영역 (소유권만으로 불충분)</td></tr>
<tr style="background:#e8f5e9"><td><b>D. 비즈니스 요구 기반 설계 ✔</b></td><td><b>프로세스 소유자 참여 → 비즈니스 프로세스 요구 반영 + 설계 Sign-off</b></td></tr></table>
<div class="sbox"><b>👤 Process Ownership 핵심:</b><br>
• 프로세스 소유자 = 비즈니스 프로세스를 가장 잘 아는 사람<br>
• 참여 → 시스템이 비즈니스 요구에 맞게 설계<br>
• 개발 시작 전 프로세스 소유자의 <b>설계 Sign-off</b>가 필수</div>`,
reference:"CRM Chapter 3: IS Development — Process Ownership",
keyConcepts:[
"Process Ownership 필수 이유|시스템 설계가 비즈니스 요구에 기반하도록 보장",
"프로세스 소유자 역할|비즈니스 프로세스 요구 반영 + 설계 Sign-off (개발 전 필수)",
"소유권 vs 갭 분석|소유권 = 비즈니스 요구 반영, 갭 최소화 = 요구사항 분석 프레임워크"
]
},

{
id:125, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`다음 중 IS 감사인이 새로 개발·구현된 소프트웨어의 <b>품질을 평가</b>하는 데 도움이 되는 것은?<br><small style="color:#94a3b8">Which of the following helps an IS auditor evaluate the quality of new software that is developed and implemented?</small>`,
options:[
"시간 경과에 따른 평균 고장 간격(MTBF) 보고<br><small style='color:#94a3b8'>Reporting of the mean time between failures over time</small>",
"전체 평균 고장 수리 시간(MTTR)<br><small style='color:#94a3b8'>Overall mean time to repair failures</small>",
"최초 보고된 평균 고장 간격(MTBF)<br><small style='color:#94a3b8'>First report of the mean time between failures</small>",
"고장 수정까지의 전체 응답 시간<br><small style='color:#94a3b8'>Overall response time to correct failures</small>"
],
correct:2,
explanation:`<p><mark>최초 보고된 MTBF</mark>가 소프트웨어 품질 평가에 가장 적합하다.</p>
<table><tr><th>지표</th><th>측정 대상</th><th>평가</th></tr>
<tr><td>A. 반복 MTBF</td><td>수리 후 재발 포함</td><td>대응팀 성과 반영 (SW 품질 X)</td></tr>
<tr><td>B. MTTR</td><td>수리 소요 시간</td><td>대응팀/헬프데스크 성과</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 최초 보고 MTBF ✔</b></td><td><b>운영 환경에서 최초 발견된 결함</b></td><td><b>SW 자체의 결함 = 품질 지표</b></td></tr>
<tr><td>D. 응답 시간</td><td>대응 민첩성</td><td>대응팀 성과</td></tr></table>
<div class="sbox"><b>📏 SW 품질 평가 핵심:</b><br>
• <b>최초 보고 MTBF</b> = 운영 환경 사용자가 최초 발견한 결함 → <b>SW 자체 품질</b> 반영<br>
• 반복 MTBF / MTTR / 응답 시간 = <b>대응팀 성과</b> (SW 품질과 별개)<br>
• "최초 보고(First Report)" = 수리 비효율 제외 → 순수 SW 결함만 측정</div>`,
reference:"CRM Chapter 3: IS Development — Software Quality Metrics",
keyConcepts:[
"SW 품질 평가 지표|최초 보고 MTBF (운영 환경 사용자가 최초 발견한 결함 = SW 자체 품질)",
"MTBF vs MTTR|MTBF = 고장 간격(품질), MTTR = 수리 시간(대응팀 성과)",
"최초 보고 vs 반복 보고|최초 보고 = SW 결함, 반복 보고 = 수리 비효율 포함"
]
},

{
id:126, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`새로 개발된 시스템에 통제를 구현하기 전, 경영진이 <b>가장 먼저</b> 확인해야 하는 것은 해당 통제가:<br><small style="color:#94a3b8">Before implementing controls in a newly developed system, management should PRIMARILY ensure that the controls:</small>`,
options:[
"리스크 대응 요구를 충족한다<br><small style='color:#94a3b8'>Satisfy a requirement in addressing a risk.</small>",
"생산성을 저하시키지 않는다<br><small style='color:#94a3b8'>Do not reduce productivity.</small>",
"최소 비용 분석에 기반한다<br><small style='color:#94a3b8'>Are based on a minimized cost analysis.</small>",
"탐지적 또는 교정적이다<br><small style='color:#94a3b8'>Are detective or corrective.</small>"
],
correct:0,
explanation:`<p>통제의 근본 목적은 <mark>리스크 완화</mark>이므로, 식별된 리스크를 효과적으로 대응하는지가 최우선이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr style="background:#e8f5e9"><td><b>A. 리스크 대응 ✔</b></td><td><b>통제 목적 = 리스크 완화 → 최우선 확인 사항</b></td></tr>
<tr><td>B. 생산성 미저하</td><td>고려 필요하나, 통제 이점과 균형 판단 (최우선 X)</td></tr>
<tr><td>C. 최소 비용</td><td>비용편익분석 기반이지, 최저 비용 선택이 아님</td></tr>
<tr><td>D. 탐지/교정적</td><td>좋은 통제 환경 = 예방+탐지+교정 모두 포함</td></tr></table>
<div class="sbox"><b>🎯 통제 선택 원칙:</b><br>
• <b>최우선</b> = 식별된 리스크를 효과적으로 완화하는가<br>
• 비용 = 비용편익분석(Cost-Benefit), 최저 비용이 아님<br>
• 유형 = 예방+탐지+교정 모두 필요 (하나만 X)<br>
• 생산성 = 통제 이점과 균형 고려</div>`,
reference:"CRM Chapter 3: IS Development — Control Implementation",
keyConcepts:[
"통제 구현 최우선 확인|해당 통제가 식별된 리스크를 효과적으로 완화하는지",
"통제 선택 기준|비용편익분석 기반 (최저 비용 X), 리스크 대응이 핵심",
"좋은 통제 환경|예방(Preventive) + 탐지(Detective) + 교정(Corrective) 모두 포함"
]
},

{
id:127, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`IS 감사인이 CI/CD 구현을 검토할 때 <b>가장 우려</b>되는 것은?<br><small style="color:#94a3b8">Which of the following would be of MOST concern for an IS auditor reviewing continuous integration and continuous deployment (CICD) implementation?</small>`,
options:[
"지원 문서가 배포 전에 항상 업데이트되지 않았다<br><small style='color:#94a3b8'>Supporting documentation was not always updated prior to deployment.</small>",
"개발자가 변경 로그에 쓰기 권한이 없다<br><small style='color:#94a3b8'>Developers do not have write access to change logs.</small>",
"표준 유지보수 변경 사항이 문서화되지 않았다<br><small style='color:#94a3b8'>Standard maintenance changes were not documented.</small>",
"변경 로그에 대한 보존 정책이 정의되지 않았다<br><small style='color:#94a3b8'>Retention policies were not defined for change logs.</small>"
],
correct:2,
explanation:`<p>CI/CD에서 <mark>모든 변경의 문서화</mark>는 핵심 통제이므로, 표준 유지보수 변경이 문서화되지 않은 것이 가장 큰 우려이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 지원 문서 미업데이트</td><td>중요하나 최대 우려 아님</td></tr>
<tr><td>B. 개발자 로그 쓰기 권한 없음</td><td>✅ 올바른 통제 (개발자가 자신의 로그 수정 불가해야 함)</td></tr>
<tr style="background:#e8f5e9"><td><b>C. 변경 미문서화 ✔</b></td><td><b>모든 변경 문서화 = CI/CD 핵심 통제 → 위반 시 최대 우려</b></td></tr>
<tr><td>D. 보존 정책 미정의</td><td>우려 사항이나, 문서화 자체 부재보다 덜 심각</td></tr></table>
<div class="sbox"><b>📝 CI/CD 변경 관리 필수 문서화:</b><br>
• <b>모든 변경</b>(표준 유지보수 포함) = 최소한의 문서화 필수<br>
• 필수 항목: 변경 설명, 성공 기준, 리스크, 롤백 절차<br>
• 개발자 = 변경 로그 쓰기 권한 없어야 함 (정상 통제)</div>`,
reference:"CRM Chapter 3: IS Development — CI/CD Change Management",
keyConcepts:[
"CI/CD 최대 우려|표준 유지보수 변경 미문서화 (모든 변경 문서화 = 핵심 통제)",
"CI/CD 필수 문서화 항목|변경 설명, 성공 기준, 리스크, 롤백 절차",
"변경 로그 접근 통제|개발자는 변경 로그에 쓰기 권한이 없어야 함 (정상)"
]
},

{
id:128, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`레거시 애플리케이션에서 새 애플리케이션으로 전환 시 장애 관리에 있어 <b>가장 낮은 리스크</b>를 수반하는 것은?<br><small style="color:#94a3b8">Which of the following carries the LOWEST risk when managing failures while transitioning from legacy applications to new applications?</small>`,
options:[
"단계적 전환(Phased Changeover)<br><small style='color:#94a3b8'>Phased changeover</small>",
"즉시 전환(Abrupt Changeover)<br><small style='color:#94a3b8'>Abrupt changeover</small>",
"롤백 절차(Rollback Procedure)<br><small style='color:#94a3b8'>Rollback procedure</small>",
"병행 전환(Parallel Changeover)<br><small style='color:#94a3b8'>Parallel changeover</small>"
],
correct:3,
explanation:`<p><mark>병행 전환(Parallel Changeover)</mark>이 장애 관리 시 가장 낮은 리스크이다.</p>
<table><tr><th>전환 방식</th><th>설명</th><th>리스크</th></tr>
<tr><td>Phased</td><td>단계적으로 전환 (동시에 양쪽 완전 운영 X)</td><td>중간</td></tr>
<tr><td>Abrupt (Cutover)</td><td>특정 시점에 즉시 전환, 구 시스템 중단</td><td><b>최고</b></td></tr>
<tr><td>Rollback</td><td>이전 상태로 복원하는 절차</td><td>유효하나 Parallel보다 열위</td></tr>
<tr style="background:#e8f5e9"><td><b>Parallel ✔</b></td><td><b>신·구 동시 운영 → 신뢰 확보 후 전환</b></td><td><b>최저</b></td></tr></table>
<div class="sbox"><b>🔄 전환 방식 리스크 순위:</b><br>
• <b>Parallel</b> = 최저 리스크 (구 시스템이 백업, 가장 안전) → 가장 비쌈<br>
• <b>Phased</b> = 중간 리스크 (부분적 전환)<br>
• <b>Abrupt/Cutover</b> = 최고 리스크 (구 시스템 즉시 중단)<br>
• 리스크 ↓ = 비용 ↑ (반비례 관계)</div>`,
reference:"CRM Chapter 3: IS Development — System Changeover Methods",
keyConcepts:[
"전환 리스크 순위|Parallel(최저) < Phased(중간) < Abrupt/Cutover(최고)",
"Parallel Changeover|신·구 동시 운영 → 신뢰 확보 후 전환 (가장 안전, 가장 비쌈)",
"리스크 vs 비용|리스크 낮을수록 비용 높음 (Parallel = 최저 리스크 + 최고 비용)"
]
},

{
id:129, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`테스트의 최종 단계로 간주되며, 일반적으로 개발팀 외부의 사용자가 참여하는 소프트웨어 테스트는?<br><small style="color:#94a3b8">What kind of software application testing is considered the final stage of testing and typically includes users outside of the development team?</small>`,
options:[
"알파 테스트<br><small style='color:#94a3b8'>Alpha testing</small>",
"화이트 박스 테스트<br><small style='color:#94a3b8'>White box testing</small>",
"회귀 테스트<br><small style='color:#94a3b8'>Regression testing</small>",
"베타 테스트<br><small style='color:#94a3b8'>Beta testing</small>"
],
correct:3,
explanation:`<p><mark>베타 테스트(Beta Testing)</mark>는 테스트의 최종 단계이며 외부 사용자가 참여한다.</p>
<table><tr><th>테스트</th><th>시점</th><th>참여자</th></tr>
<tr><td>White Box</td><td>초기 (SDLC 초반)</td><td>개발자 (코드 내부 검증)</td></tr>
<tr><td>Alpha</td><td>Beta 직전</td><td>프로그래머 + 비즈니스 분석가 (내부)</td></tr>
<tr style="background:#e8f5e9"><td><b>Beta ✔</b></td><td><b>최종 단계</b></td><td><b>개발팀 외부 사용자 (제한된 수)</b></td></tr>
<tr><td>Regression</td><td>변경 후 수시</td><td>테스트팀 (새 오류 확인)</td></tr></table>
<div class="sbox"><b>🔬 Alpha vs Beta:</b><br>
• <b>Alpha</b> = Beta 직전 / 내부(프로그래머·분석가) / 버그 식별 후 수정<br>
• <b>Beta</b> = <b>최종 단계</b> / 외부 사용자 / UAT의 한 형태<br>
• 순서: White Box → Alpha → <b>Beta(최종)</b></div>`,
reference:"CRM Chapter 3: IS Development — Testing Stages",
keyConcepts:[
"Beta Testing|테스트 최종 단계, 개발팀 외부 사용자 참여, UAT의 한 형태",
"Alpha Testing|Beta 직전 단계, 내부(프로그래머·분석가) 참여, 버그 수정 목적",
"테스트 순서|White Box(초기) → Alpha(내부) → Beta(외부, 최종)"
]
},

{
id:130, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`운영 릴리스에서 실수로 누락된 코드가 이후 정상 변경 절차를 우회하여 운영 환경으로 이동되었다. 구현 후 검토를 수행하는 IS 감사인에게 <b>가장 우려</b>되는 것은?<br><small style="color:#94a3b8">Code erroneously excluded from a production release was subsequently moved into the production environment, bypassing normal change procedures. Which of the following choices is of MOST concern to the IS auditor performing a postimplementation review?</small>`,
options:[
"최초 구현 시 코드가 누락되었다<br><small style='color:#94a3b8'>The code was missed during the initial implementation.</small>",
"변경이 변경 관리 승인을 받지 않았다<br><small style='color:#94a3b8'>The change did not have change management approval.</small>",
"오류가 구현 후 검토에서 발견되었다<br><small style='color:#94a3b8'>The error was discovered during the postimplementation review.</small>",
"릴리스 팀이 동일한 변경 주문 번호를 사용했다<br><small style='color:#94a3b8'>The release team used the same change order number.</small>"
],
correct:1,
explanation:`<p>가장 큰 우려는 <mark>변경 관리 승인 없이</mark> 운영 환경에 코드가 반영된 것이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 코드 누락</td><td>프로세스 결함이나, 승인 없는 변경보다 덜 심각</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 변경 관리 승인 미획득 ✔</b></td><td><b>비인가 변경 = 시스템 장애/사기 리스크 → 최대 우려</b></td></tr>
<tr><td>C. 구현 후 검토에서 발견</td><td>대부분의 릴리스 오류는 이 시점에 발견됨 (정상)</td></tr>
<tr><td>D. 동일 변경 번호 사용</td><td>관련 우려 아님</td></tr></table>
<div class="sbox"><b>⚠ 변경 관리 핵심 원칙:</b><br>
• <b>모든 변경 = 변경 관리 승인 필수</b> (긴급 상황이라도)<br>
• 승인 없는 변경 = 비인가 변경 → 시스템 장애·사기 리스크<br>
• 코드 누락보다 <b>절차 우회(승인 미획득)</b>가 더 심각한 우려</div>`,
reference:"CRM Chapter 3: IS Development — Change Management",
keyConcepts:[
"변경 관리 최대 우려|승인 없이 운영 환경에 변경 반영 (비인가 변경 리스크)",
"변경 관리 원칙|모든 변경은 변경 관리 승인 필수 (긴급 상황 포함)",
"코드 누락 vs 절차 우회|누락 = 프로세스 결함, 절차 우회 = 통제 실패 (더 심각)"
]
},

{
id:131, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`항공사가 예약 시스템을 재설계 중이다. 구성 팀이 고객 등록 프로세스를 구성하고 통제 환경(Controlled Environment)으로 이동시켰다. 어떤 단계를 수행한 것인가?<br><small style="color:#94a3b8">An airline is currently redesigning its reservation system. The configuration team has configured the customer registration process and moved it to the controlled environment. What step did they execute?</small>`,
options:[
"체크인(Checking in)<br><small style='color:#94a3b8'>Checking in</small>",
"베이스라인 기록(Recording the baseline)<br><small style='color:#94a3b8'>Recording the baseline</small>",
"구성 항목 변경 등록<br><small style='color:#94a3b8'>Registering configuration item changes</small>",
"체크아웃(Checking out)<br><small style='color:#94a3b8'>Checking out</small>"
],
correct:0,
explanation:`<p><mark>Checking in</mark>은 항목을 통제 환경(Controlled Environment)으로 이동시키는 프로세스이다.</p>
<table><tr><th>용어</th><th>설명</th></tr>
<tr style="background:#e8f5e9"><td><b>Check-in ✔</b></td><td><b>항목을 통제 환경으로 이동 (구성 완료 → 통제 하에 배치)</b></td></tr>
<tr><td>Check-out</td><td>통제 환경에서 항목을 꺼냄 (변경 필요 시, 변경 통제 양식 필요)</td></tr>
<tr><td>Baseline 기록</td><td>구성 관리 도구 사용의 이점 (릴리스 관련)</td></tr>
<tr><td>구성 항목 변경 등록</td><td>구성 관리 도구 사용의 이점 (릴리스 관련)</td></tr></table>
<div class="sbox"><b>🔄 Configuration Management: Check-in vs Check-out</b><br>
• <b>Check-in</b> = 통제 환경으로 <b>넣기</b> (구성 완료 후)<br>
• <b>Check-out</b> = 통제 환경에서 <b>꺼내기</b> (변경 필요 시 + 변경 통제 양식)<br>
• Check-out = 동시 코드 편집 방지/관리 목적</div>`,
reference:"CRM Chapter 3: IS Development — Configuration Management",
keyConcepts:[
"Check-in|항목을 통제 환경(Controlled Environment)으로 이동시키는 프로세스",
"Check-out|변경 필요 시 통제 환경에서 항목을 꺼내는 프로세스 (변경 통제 양식 필요)",
"Configuration Management|구성 항목의 Check-in/Check-out으로 변경 통제 및 동시 편집 방지"
]
},

{
id:132, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`진행 중인 프로젝트를 검토하면서, IS 감사인은 개발팀이 첫째 날 8시간의 활동을 소비했음을 확인했다(예산: 3일간 24시간). 나머지 활동 완료 예상 시간은 20시간이다. IS 감사인은 프로젝트가:<br><small style="color:#94a3b8">While reviewing an ongoing project, the IS auditor notes that the development team has spent eight hours of activity on the first day against a budget of 24 hours (over three days). The projected time to complete the remainder of the activity is 20 hours. The IS auditor should report that the project:</small>`,
options:[
"일정 지연 상태이다<br><small style='color:#94a3b8'>Is behind schedule.</small>",
"일정 앞선 상태이다<br><small style='color:#94a3b8'>Is ahead of schedule.</small>",
"일정대로 진행 중이다<br><small style='color:#94a3b8'>Is on schedule.</small>",
"활동이 완료될 때까지 평가할 수 없다<br><small style='color:#94a3b8'>Cannot be evaluated until the activity is completed.</small>"
],
correct:0,
explanation:`<p><mark>Earned Value Analysis(EVA)</mark>를 적용하면 프로젝트는 일정 지연 상태이다.</p>
<table><tr><th>항목</th><th>값</th></tr>
<tr><td>총 예산(BAC)</td><td>24시간 (3일)</td></tr>
<tr><td>소비 시간</td><td>8시간 (1일차)</td></tr>
<tr><td>잔여 작업 예상</td><td>20시간</td></tr>
<tr><td>잔여 가용 시간</td><td>24 - 8 = <b>16시간</b></td></tr>
<tr><td><b>문제</b></td><td><b>16시간에 20시간 작업 필요 = 4시간 부족</b></td></tr></table>
<p><b>EVA 관점:</b> 8시간 소비했지만 실제 달성한 가치(Earned Value)는 24-20 = <b>4시간</b>에 불과 → 일정 지연</p>
<div class="sbox"><b>📊 EVA 핵심 계산:</b><br>
• <b>Earned Value(EV)</b> = 실제 완료된 작업의 가치 = 24 - 20 = 4시간<br>
• <b>Planned Value(PV)</b> = 계획상 1일차 완료 예정 = 8시간<br>
• <b>Schedule Variance = EV - PV = 4 - 8 = -4</b> (음수 = 지연)<br>
• 잔여 16시간에 20시간 작업 → 명확한 일정 지연</div>`,
reference:"CRM Chapter 3: IS Development — Earned Value Analysis",
keyConcepts:[
"EVA(Earned Value Analysis)|실제 완료 가치 vs 계획 가치 비교 → 일정/비용 상태 평가",
"Schedule Variance|EV - PV: 음수 = 지연, 양수 = 앞섬",
"EVA 핵심|소비 시간 ≠ 달성 가치 → 잔여 작업과 잔여 시간 비교로 판단"
]
},

{
id:133, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`프로젝트 계획의 범위 외(Out-of-scope) 섹션을 평가할 때, IS 감사인은 해당 섹션이:<br><small style="color:#94a3b8">While evaluating the out-of-scope section in a project plan, an IS auditor should ascertain whether the section:</small>`,
options:[
"비공식 프로젝트 목표를 효과적으로 기술하는지<br><small style='color:#94a3b8'>Effectively describes unofficial project objectives.</small>",
"프로젝트의 경계를 효과적으로 기술하는지<br><small style='color:#94a3b8'>Effectively describes the project's boundaries.</small>",
"프로젝트의 있으면 좋은(Nice-to-have) 목표를 명확히 기술하는지<br><small style='color:#94a3b8'>Clearly states the project's nice-to-have objectives.</small>",
"프로젝트 팀에 필요한 유연성을 제공하는지<br><small style='color:#94a3b8'>Provides the necessary flexibility to the project team.</small>"
],
correct:1,
explanation:`<p>Out-of-scope 섹션의 목적은 <mark>프로젝트 경계(Boundaries)</mark>를 명확히 하는 것이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 비공식 목표</td><td>비공식 목표는 존재해선 안 됨 (수용 또는 거부)</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 프로젝트 경계 ✔</b></td><td><b>이해관계자가 In-scope vs Out-of-scope를 이해하도록 경계 명확화</b></td></tr>
<tr><td>C. Nice-to-have 목표</td><td>Nice-to-have는 프로젝트 목표에 포함될 수 있음 (Out-of-scope X)</td></tr>
<tr><td>D. 팀 유연성</td><td>유연성은 변경 요청 프로세스로 관리 (Out-of-scope 섹션 목적 X)</td></tr></table>
<div class="sbox"><b>📋 Out-of-scope 섹션 목적:</b><br>
• 프로젝트 목표가 <b>아닌 것</b>을 명확히 기술<br>
• 모든 이해관계자가 <b>In-scope vs Out-of-scope</b> 이해<br>
• <b>Scope Creep 방지</b>의 핵심 도구<br>
• 유연성은 <b>변경 요청 프로세스(Change Request)</b>로 관리</div>`,
reference:"CRM Chapter 3: IS Development — Scope Management",
keyConcepts:[
"Out-of-scope 섹션 목적|프로젝트 경계 명확화 → 이해관계자의 In/Out-of-scope 이해",
"Scope 관리|Out-of-scope = 경계 정의, 유연성 = 변경 요청 프로세스로 관리",
"Scope Creep 방지|Out-of-scope 명확 정의 + 변경 요청 프로세스가 핵심"
]
},

{
id:134, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`품질 보증(QA) 개선에서 IS 감사인의 역할을 <b>가장 잘</b> 설명하는 것은?<br><small style="color:#94a3b8">Which of the following BEST describes the role of an IS auditor in improving quality assurance?</small>`,
options:[
"내부 감사인<br><small style='color:#94a3b8'>Internal auditor</small>",
"검토자<br><small style='color:#94a3b8'>Reviewer</small>",
"워크숍 퍼실리테이터<br><small style='color:#94a3b8'>Workshop facilitator</small>",
"컨설턴트<br><small style='color:#94a3b8'>Consultant</small>"
],
correct:3,
explanation:`<p>QA <b>개선</b>에서 IS 감사인의 역할은 <mark>컨설턴트</mark>이다.</p>
<table><tr><th>역할</th><th>활동 유형</th><th>평가</th></tr>
<tr><td>내부 감사인</td><td>Quality <b>Control</b> (감사 수행)</td><td>QA 개선이 아닌 QC 활동</td></tr>
<tr><td>검토자</td><td>Quality <b>Control</b> (검토 수행)</td><td>QC 활동</td></tr>
<tr><td>워크숍 퍼실리테이터</td><td>컨설턴트 활동의 일부</td><td>컨설턴트 역할 내 수행 가능</td></tr>
<tr style="background:#e8f5e9"><td><b>컨설턴트 ✔</b></td><td><b>Quality Assurance 개선</b></td><td><b>통제 효과성에 대한 가이드 제공</b></td></tr></table>
<div class="sbox"><b>🔍 QA vs QC 구분:</b><br>
• <b>Quality Assurance(QA)</b> = 프로세스 개선 (계획 활동, 예방적)<br>
• <b>Quality Control(QC)</b> = 결과물 검증 (감사, 검토, 테스트)<br>
• 감사인 본업 = QC / QA 개선 시 = <b>컨설턴트</b> 역할</div>`,
reference:"CRM Chapter 3: IS Development — Quality Assurance",
keyConcepts:[
"감사인의 QA 개선 역할|컨설턴트 (통제 효과성에 대한 가이드 제공)",
"QA vs QC|QA = 프로세스 개선(예방적), QC = 결과물 검증(감사·검토·테스트)",
"감사인 본업|QC 활동 (감사, 검토) / QA 개선 참여 시 = 컨설턴트 역할"
]
},

{
id:135, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`IS 감사인이 내부 소프트웨어 개발 프로젝트의 프로젝트 관리 프로세스를 평가 중이다. 소프트웨어 기능에 대해 IS 감사인은 누구의 승인(Sign-off)을 확인해야 하는가?<br><small style="color:#94a3b8">An IS auditor assesses the project management process for an internal software development project. Concerning the software functionality, the IS auditor should look for sign-off by:</small>`,
options:[
"프로젝트 관리자<br><small style='color:#94a3b8'>The project manager.</small>",
"시스템 개발 관리자<br><small style='color:#94a3b8'>Systems development management.</small>",
"비즈니스 부서 관리자<br><small style='color:#94a3b8'>Business unit management.</small>",
"품질 보증(QA) 팀<br><small style='color:#94a3b8'>The quality assurance team.</small>"
],
correct:2,
explanation:`<p>소프트웨어 기능에 대한 Sign-off는 <mark>비즈니스 부서 관리자(Business Unit Management)</mark>가 해야 한다.</p>
<table><tr><th>역할</th><th>책임</th><th>Sign-off 가능?</th></tr>
<tr><td>프로젝트 관리자</td><td>일일 관리·리더십, 활동 조율</td><td>❌ (SoD 위반)</td></tr>
<tr><td>시스템 개발 관리자</td><td>HW/SW 환경 기술 지원</td><td>❌ (기술 지원 역할)</td></tr>
<tr style="background:#e8f5e9"><td><b>비즈니스 부서 관리자 ✔</b></td><td><b>프로젝트 소유권 + 인수 테스트 + 기능 확인</b></td><td><b>✅</b></td></tr>
<tr><td>QA 팀</td><td>SDLC 준수 여부 측정·테스트</td><td>❌ (품질 확인만)</td></tr></table>
<div class="sbox"><b>✍ 기능 Sign-off 원칙:</b><br>
• <b>비즈니스 부서 관리자</b> = 프로젝트·시스템 소유자<br>
• 인수 테스트 책임 + 필요 기능 확인<br>
• PM이 기능 Sign-off하면 = <b>SoD 위반</b></div>`,
reference:"CRM Chapter 3: IS Development — Project Sign-off",
keyConcepts:[
"소프트웨어 기능 Sign-off|비즈니스 부서 관리자 (프로젝트 소유자, 인수 테스트 책임)",
"PM Sign-off 제한|PM이 요구사항/기능 Sign-off하면 SoD 위반",
"역할 구분|PM=일일 관리, 개발 관리자=기술 지원, QA=품질 측정, 비즈니스=소유권+Sign-off"
]
},

{
id:136, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`새 조달 시스템 개발이 일정 지연되어 테스트 기간 단축이 제안되었다. PM이 IS 감사인에게 테스트 축소 관련 리스크 완화 방안을 요청했다. 적절한 리스크 완화 전략은?<br><small style="color:#94a3b8">An enterprise is developing a new procurement system that is behind schedule. As a result, the time originally planned for the test phase is proposed to be shortened. The project manager asks the IS auditor for recommendations to mitigate the risk associated with reduced testing. Which of the following is a suitable risk mitigation strategy?</small>`,
options:[
"기능을 축소하여 파일럿을 테스트·릴리스한다<br><small style='color:#94a3b8'>Test and release a pilot with reduced functionality.</small>",
"가장 심각도 높은 기능 결함만 수정·재테스트한다<br><small style='color:#94a3b8'>Fix and retest the highest-severity functional defects.</small>",
"개발팀 테스트를 제거하고 바로 인수 테스트로 진행한다<br><small style='color:#94a3b8'>Eliminate planned testing by the development team and proceed straight to acceptance testing.</small>",
"결함 추적 자동화 도구를 구현한다<br><small style='color:#94a3b8'>Implement a test tool to automate defect tracking.</small>"
],
correct:0,
explanation:`<p>테스트 시간 부족 시 <mark>기능 축소 파일럿 릴리스</mark>가 가장 적절한 리스크 완화 전략이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr style="background:#e8f5e9"><td><b>A. 기능 축소 파일럿 ✔</b></td><td><b>테스트 케이스↓ + 결함↓ + 회귀 테스트↓ + 제한된 사용자 = 다중 리스크 감소</b></td></tr>
<tr><td>B. 고심각도 결함만 수정</td><td>사용성·보안·성능 등 다른 중요 측면 무시 위험</td></tr>
<tr><td>C. 개발팀 테스트 제거</td><td>❌ 저수준 결함 다수 → UAT 시간 오히려 증가</td></tr>
<tr><td>D. 결함 추적 도구</td><td>테스트 효율↑ 이나, 테스트 축소의 근본 리스크 미해결</td></tr></table>
<div class="sbox"><b>🧪 테스트 시간 부족 시 전략:</b><br>
• <b>기능 축소 파일럿</b> = 범위↓ + 사용자↓ = 리스크 다중 감소<br>
• 파일럿 사용자 피드백 → 전체 릴리스에 반영<br>
• 개발팀 테스트 생략 = ❌ (UAT에 저수준 결함 대량 유입)<br>
• UAT는 <b>절대 생략 불가</b>, 개발팀 테스트도 생략 부적절</div>`,
reference:"CRM Chapter 3: IS Development — Test Risk Mitigation",
keyConcepts:[
"테스트 시간 부족 완화|기능 축소 파일럿 릴리스 (범위↓ + 사용자↓ = 다중 리스크 감소)",
"개발팀 테스트 생략 위험|저수준 결함 대량 → UAT 시간 오히려 증가",
"파일럿 릴리스 이점|제한된 기능/사용자 + 실사용자 피드백 → 전체 릴리스 품질 향상"
]
},

{
id:137, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`PM이 프로젝트 진행 상황을 어떻게 모니터링했는지 평가하는 IS 감사인에게 <b>가장 관련성</b>이 높은 것은?<br><small style="color:#94a3b8">Which of the following is MOST relevant to an IS auditor evaluating how the project manager has monitored the progress of the project?</small>`,
options:[
"크리티컬 패스 다이어그램<br><small style='color:#94a3b8'>Critical path diagrams</small>",
"PERT 다이어그램<br><small style='color:#94a3b8'>Program evaluation review technique diagrams</small>",
"기능점 분석<br><small style='color:#94a3b8'>Function point analysis</small>",
"간트 차트<br><small style='color:#94a3b8'>Gantt charts</small>"
],
correct:3,
explanation:`<p><mark>간트 차트(Gantt Chart)</mark>가 프로젝트 진행 상황 모니터링에 가장 적합하다.</p>
<table><tr><th>기법</th><th>목적</th><th>진행 모니터링?</th></tr>
<tr><td>Critical Path</td><td>최소 완료 시간 결정</td><td>❌ (경로 식별용)</td></tr>
<tr><td>PERT</td><td>기간 추정 (3점 추정)</td><td>❌ (추정용)</td></tr>
<tr><td>Function Point</td><td>개발 크기 측정</td><td>❌ (규모 측정용)</td></tr>
<tr style="background:#e8f5e9"><td><b>Gantt Chart ✔</b></td><td><b>일정/진행 시각화</b></td><td><b>✅ 베이스라인 대비 조기/지연 식별</b></td></tr></table>
<div class="sbox"><b>📊 Gantt Chart = 진행 모니터링 도구:</b><br>
• 활동별 완료 상태를 베이스라인과 <b>비교</b><br>
• 프로젝트 전체가 지연/앞섬/정상인지 <b>한눈에 파악</b><br>
• PM이 "어떻게 모니터링했는가" → Gantt Chart</div>`,
reference:"CRM Chapter 3: IS Development — Project Monitoring",
keyConcepts:[
"프로젝트 진행 모니터링|Gantt Chart (베이스라인 대비 진행 상태 시각적 비교)",
"Gantt Chart 특성|활동별 일정·진행 시각화, 조기/지연 식별, 전체 상태 파악",
"기법 구분|CPM=경로 식별, PERT=기간 추정, FP=규모 측정, Gantt=진행 모니터링"
]
},

{
id:138, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`IS 감사인이 대규모 조직의 CRM 시스템 구현을 검토 중이다. 프로젝트가 심각한 예산 초과와 scope creep으로 주요 일정을 놓쳤다. 향후 프로젝트를 위해 IS 감사인이 권고해야 하는 것은?<br><small style="color:#94a3b8">An IS auditor is asked to review implementing a CRM system for a large organization. The IS auditor discovers that the project incurred significant over-budget expenses, and scope creep caused the project to miss key dates. Which of the following should the IS auditor recommend for future projects?</small>`,
options:[
"프로젝트 관리 교육<br><small style='color:#94a3b8'>Project management training</small>",
"소프트웨어 베이스라인<br><small style='color:#94a3b8'>A software baseline</small>",
"균형 성과표(BSC)<br><small style='color:#94a3b8'>A balanced scorecard</small>",
"자동화된 요구사항 소프트웨어<br><small style='color:#94a3b8'>Automated requirements software</small>"
],
correct:1,
explanation:`<p>Scope creep으로 인한 예산 초과·일정 지연 → <mark>소프트웨어 베이스라인(Software Baseline)</mark>이 해결책이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. PM 교육</td><td>좋은 관행이나, 베이스라인 없이는 scope creep 방지 불가</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 소프트웨어 베이스라인 ✔</b></td><td><b>설계 기준점 제공 → scope creep 없이 일정대로 진행</b></td></tr>
<tr><td>C. BSC(균형 성과표)</td><td>성과 측정 도구, scope creep 방지와 무관</td></tr>
<tr><td>D. 자동화 요구사항 SW</td><td>scope creep 리스크 감소에 기여하지 않음</td></tr></table>
<div class="sbox"><b>📌 Baseline과 Scope Creep:</b><br>
• <b>Baseline</b> = 설계/개발의 기준점(Cut-off Point)<br>
• 이후 변경 = <b>공식 변경 요청 프로세스</b> 통해서만 가능<br>
• Baseline 없음 → Scope Creep → 예산 초과 + 일정 지연<br>
• 예산 초과 + Scope Creep → 권고 = <b>Baseline</b></div>`,
reference:"CRM Chapter 3: IS Development — Software Baseline",
keyConcepts:[
"Scope Creep 해결책|소프트웨어 베이스라인 (설계 기준점 + 공식 변경 프로세스)",
"Software Baseline|설계/개발의 Cut-off Point, 이후 변경은 공식 승인 필요",
"Scope Creep 원인|베이스라인 부재 + 변경 통제 미흡 → 범위 무제한 확대"
]
},

{
id:139, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`소프트웨어 개발에서 구성 및 릴리스 관리의 <b>모범 사례</b>는?<br><small style="color:#94a3b8">Which of the following is the BEST practice of configuration and release management in software development?</small>`,
options:[
"비정형 소프트웨어 배포<br><small style='color:#94a3b8'>Ad hoc software deployments</small>",
"자동화된 배포 파이프라인<br><small style='color:#94a3b8'>Automated deployment pipelines</small>",
"버전 관리 부재<br><small style='color:#94a3b8'>Lack of version control</small>",
"구성 변경의 수동 추적<br><small style='color:#94a3b8'>Manual tracking of configuration changes</small>"
],
correct:1,
explanation:`<p><mark>자동화된 배포 파이프라인</mark>이 구성·릴리스 관리의 모범 사례이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 비정형 배포</td><td>❌ 비계획적 → 불일치, 버전 충돌, 추적 곤란</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 자동화 파이프라인 ✔</b></td><td><b>일관성 + 수동 오류↓ + 빈번한 릴리스 + 빠른 롤백</b></td></tr>
<tr><td>C. 버전 관리 부재</td><td>❌ 치명적 (Git 등 VCS는 변경 추적·협업에 필수)</td></tr>
<tr><td>D. 수동 추적</td><td>❌ 인적 오류, 시간 소모, 비효율 (Ansible/Puppet 등 자동화 도구 사용)</td></tr></table>
<div class="sbox"><b>🔧 자동화 배포 파이프라인 이점:</b><br>
• 빌드·테스트·배포 <b>자동화</b> → 일관성 보장<br>
• 수동 오류 감소 + 빈번하고 효율적인 릴리스<br>
• 배포 프로세스 <b>가시성</b> 제공<br>
• 문제 발생 시 <b>빠른 롤백</b> 가능</div>`,
reference:"CRM Chapter 3: IS Development — Configuration & Release Management",
keyConcepts:[
"구성/릴리스 관리 모범 사례|자동화된 배포 파이프라인 (일관성 + 오류↓ + 빠른 롤백)",
"자동화 배포 이점|빌드·테스트·배포 자동화, 가시성, 빈번한 릴리스, 롤백 용이",
"구성 관리 도구|Ansible, Puppet 등 → 수동 추적 대체, 환경 간 일관성 유지"
]
},

{
id:140, domain:"3", ks:"3B2 Implementation Configuration and Release Management",
question:`벤더로부터 새 애플리케이션을 구매하여 구현하려 한다. 구현 시 <b>핵심 고려사항</b>은?<br><small style="color:#94a3b8">A new application has been purchased from a vendor and is about to be implemented. Which of the following choices is a key consideration when implementing the application?</small>`,
options:[
"구현 과정에서 소스 코드 침해 방지<br><small style='color:#94a3b8'>Preventing the compromise of the source code during the implementation process.</small>",
"벤더 기본 계정과 비밀번호가 비활성화되었는지 확인<br><small style='color:#94a3b8'>Ensuring that vendor default accounts and passwords have been disabled.</small>",
"혼란 방지를 위해 에스크로에서 이전 프로그램 복사본 제거<br><small style='color:#94a3b8'>Removing the old copies of the program from escrow to avoid confusion.</small>",
"벤더가 지원 및 유지보수 계약을 이행하는지 확인<br><small style='color:#94a3b8'>Verifying that the vendor is meeting support and maintenance agreements.</small>"
],
correct:1,
explanation:`<p>벤더 애플리케이션 구현 시 <mark>기본 계정·비밀번호 비활성화</mark>가 핵심 고려사항이다.</p>
<table><tr><th>선택지</th><th>평가</th></tr>
<tr><td>A. 소스 코드 보호</td><td>소스 코드보다 실행/오브젝트 코드 보호가 중요</td></tr>
<tr style="background:#e8f5e9"><td><b>B. 기본 계정/비밀번호 비활성화 ✔</b></td><td><b>보안의 핵심 — 기본 자격 증명은 공개적으로 알려져 있어 즉각적 위협</b></td></tr>
<tr><td>C. 에스크로 이전 복사본 제거</td><td>신규 애플리케이션이므로 이전 버전 없음 (해당 없음)</td></tr>
<tr><td>D. 지원/유지보수 계약 이행</td><td>중요하나 초기 구현 단계의 핵심 고려사항은 아님</td></tr></table>
<div class="sbox"><b>🔐 벤더 SW 구현 보안 핵심:</b><br>
• <b>기본 계정/비밀번호 비활성화</b> = 구현 시 최우선 보안 조치<br>
• 기본 자격 증명은 공개적으로 알려져 있음 → 즉각적 보안 위협<br>
• 보호 대상 = 실행(Object) 코드 (소스 코드가 아님)</div>`,
reference:"CRM Chapter 3: IS Development — Vendor Application Implementation",
keyConcepts:[
"벤더 SW 구현 핵심|기본 계정·비밀번호 비활성화 (공개적으로 알려진 자격 증명 = 즉각적 위협)",
"코드 보호 대상|실행/오브젝트 코드 보호 (소스 코드만 보호하는 것은 불충분)",
"구현 vs 운영|기본 자격 증명 = 구현 시 핵심, 유지보수 계약 = 운영 시 핵심"
]
},
{
id:141, domain:"3", ks:"3B3",
question:`폭포수(Waterfall) 생명주기 모델이 가장 적절하게 사용되는 경우는?<br><small style="color:#94a3b8">The waterfall life cycle model of software development is MOST appropriately used when:</small>`,
options:[
"요구사항이 잘 정의되어 있고 안정적일 것으로 예상되며, 시스템이 운영될 비즈니스 환경도 안정적인 경우<br><small style='color:#94a3b8'>requirements are well understood and are expected to remain stable, like the business environment in which the system will operate.</small>",
"요구사항이 잘 정의되어 있고 프로젝트가 시간 압박을 받고 있는 경우<br><small style='color:#94a3b8'>requirements are well understood and the project is subject to time pressures.</small>",
"프로젝트가 객체지향 설계 및 프로그래밍 접근 방식을 적용하려는 경우<br><small style='color:#94a3b8'>the project intends to apply an object-oriented design and programming approach.</small>",
"프로젝트에 신기술이 사용될 경우<br><small style='color:#94a3b8'>the project will involve the use of new technology.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 요구사항이 안정적이고 비즈니스 환경도 안정적인 경우</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">적합성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 안정적 요구사항 + 안정적 환경 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>Waterfall의 핵심 전제 — 변경이 적어야 순차적 진행 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 시간 압박</td><td style="padding:8px;border:1px solid #ddd">시간 압박 시 → RAD/Agile이 더 적합 (빠른 반복 개발)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 객체지향 설계</td><td style="padding:8px;border:1px solid #ddd">설계/프로그래밍 접근법 ≠ SDLC 선택 결정 요인</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 신기술 사용</td><td style="padding:8px;border:1px solid #ddd">불확실성 ↑ → Agile/반복적 개발이 적합</td></tr></table>
<div class="sbox"><b>🔑 Waterfall vs 반복적 개발 선택 기준:</b><br>
• <b>Waterfall</b> = 요구사항 안정 + 환경 안정 + 변경 가능성 낮음<br>
• <b>반복적/Agile</b> = 불확실성 높음, 신기술, 시간 압박, 요구사항 변동<br>
• 설계 방법론(OOD 등)은 SDLC 선택과 무관</div>`,
reference:"CRM Chapter 3: IS Development — System Development Life Cycle",
keyConcepts:[
"Waterfall 적합 조건|요구사항 안정적 + 비즈니스 환경 안정적 (변경 가능성 낮을 때)",
"반복적 개발 적합 조건|불확실성 높음, 신기술, 시간 압박, 요구사항 변동 가능성 높을 때",
"설계 방법론 vs SDLC|객체지향(OOD) 등 설계 접근법은 SDLC 유형 선택의 결정 요인이 아님"
]
},
{
id:142, domain:"3", ks:"3B3",
question:`기업 개발팀이 일반적으로 인정된 SDLC 관행을 따르지 않습니다. 다음 중 소프트웨어 개발 프로젝트에 문제를 일으킬 가능성이 가장 높은 것은?<br><small style="color:#94a3b8">An enterprise development team does not follow generally accepted system development life cycle practices. Which of the following is MOST likely to cause problems for software development projects?</small>`,
options:[
"프로토타입의 기능 검증이 최종 사용자에게 할당됨<br><small style='color:#94a3b8'>Functional verification of the prototypes is assigned to end users.</small>",
"사용자 수용 테스트에서 경미한 이슈가 미해결 상태로 프로젝트가 구현됨<br><small style='color:#94a3b8'>The project is implemented while minor issues from user acceptance testing are open.</small>",
"프로젝트 초기에 프로젝트 책임이 공식적으로 정의되지 않음<br><small style='color:#94a3b8'>Project responsibilities are not formally defined at the beginning of a project.</small>",
"프로그램 문서화가 부적절함<br><small style='color:#94a3b8'>Program documentation is inadequate.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 프로젝트 초기에 책임이 공식 정의되지 않음</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 프로토타입 검증 → 사용자</td><td style="padding:8px;border:1px solid #ddd">정상적 관행 — 프로토타입은 사용자가 검증하는 것이 맞음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 경미한 이슈 미해결 상태 구현</td><td style="padding:8px;border:1px solid #ddd">UAT가 100% 완벽할 수 없음 — 치명적이지 않으면 구현 후 수정 가능</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 초기에 책임 미정의 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>초기 단계 오류 → 후속 단계에서 비용 큰 오류/비효율 야기</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 문서화 부적절</td><td style="padding:8px;border:1px solid #ddd">우려 사항이나, 초기 책임 미정의보다 리스크 낮음</td></tr></table>
<div class="sbox"><b>📌 SDLC 핵심 원칙:</b><br>
• <b>초기 단계 오류 = 비용 최대</b> — 계획 단계에서 역할·책임 공식 정의 필수<br>
• 프로토타입 검증 = 사용자 담당 (정상)<br>
• UAT 경미한 이슈 = 구현 후 수정 가능 (치명적이지 않으면)</div>`,
reference:"CRM Chapter 3: IS Development — System Development Life Cycle Practices",
keyConcepts:[
"초기 단계 오류 영향|프로젝트 초기 오류·누락 → 후속 단계에서 비용 큰 오류와 비효율 초래",
"프로토타입 검증|최종 사용자가 기능 검증하는 것이 정상적 관행",
"UAT 미해결 이슈|경미한(non-critical) 이슈는 구현 후 수정 가능 — 사용에 심각한 영향 없음"
]
},
{
id:143, domain:"3", ks:"3B3",
question:`조직 개편으로 인해 비즈니스 애플리케이션 시스템이 다른 부서로 확장됩니다. IS 감사인에게 가장 큰 우려 사항은?<br><small style="color:#94a3b8">Due to a reorganization, a business application system will be extended to other departments. Which of the following should be of the GREATEST concern for an IS auditor?</small>`,
options:[
"프로세스 소유자가 식별되지 않음<br><small style='color:#94a3b8'>Process owners have not been identified.</small>",
"청구 비용 배분 방법이 결정되지 않음<br><small style='color:#94a3b8'>The billing cost allocation method has not been determined.</small>",
"다수의 애플리케이션 소유자가 존재함<br><small style='color:#94a3b8'>Multiple application owners exist.</small>",
"교육 프로그램이 존재하지 않음<br><small style='color:#94a3b8'>A training program does not exist.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 프로세스 소유자 미식별</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 프로세스 소유자 미식별 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>모니터링·승인 통제에 직접적 영향 — 소유자 없으면 통제 책임 공백</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 비용 배분 방법 미결정</td><td style="padding:8px;border:1px solid #ddd">재무 보고 목적 — 통제 이슈보다 중요도 낮음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 다수 애플리케이션 소유자</td><td style="padding:8px;border:1px solid #ddd">프로세스 소유자만 식별되면 문제 없음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 교육 프로그램 없음</td><td style="padding:8px;border:1px solid #ddd">경미한 우려 — 프로세스 소유권보다 중요도 낮음</td></tr></table>
<div class="sbox"><b>👤 프로세스 소유자(Process Owner) 핵심:</b><br>
• 시스템 확장 시 가장 중요 = <b>프로세스 소유자 식별</b><br>
• 프로세스 소유자 = 모니터링·승인 통제의 책임자<br>
• 애플리케이션 소유자 ≠ 프로세스 소유자 (프로세스 소유자가 특정 프로세스 책임)</div>`,
reference:"CRM Chapter 3: IS Development — System Migration & Deployment",
keyConcepts:[
"프로세스 소유자|시스템 확장 시 반드시 식별 — 모니터링·승인 통제의 책임 주체",
"애플리케이션 소유자 vs 프로세스 소유자|다수 앱 소유자는 문제 아님, 프로세스 소유자 식별이 핵심",
"시스템 확장 시 우선순위|프로세스 소유자 > 교육 > 비용 배분"
]
},
{
id:144, domain:"3", ks:"3B3",
question:`엄격한 마감일과 고정된 테스트 시간이 있는 프로젝트에서 충분한 테스트 커버리지를 확보하기 위한 최선의 접근 방식은?<br><small style="color:#94a3b8">Which of the following is the BEST approach to ensure that sufficient test coverage will be achieved for a project with a strict end date and a fixed time to perform testing?</small>`,
options:[
"요구사항을 중요도와 사용 빈도 기준으로 테스트해야 한다<br><small style='color:#94a3b8'>Requirements should be tested in terms of importance and frequency of use.</small>",
"테스트 커버리지를 기능적 요구사항으로만 제한해야 한다<br><small style='color:#94a3b8'>Test coverage should be restricted to functional requirements.</small>",
"스크립팅을 사용한 자동화 테스트를 수행해야 한다<br><small style='color:#94a3b8'>Automated tests should be performed using scripting.</small>",
"결함 수정분만 재테스트하여 필요 테스트 횟수를 줄여야 한다<br><small style='color:#94a3b8'>The number of required test runs should be reduced by retesting only defect fixes.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 중요도·사용 빈도 기준 우선순위 테스트</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 중요도 + 사용 빈도 기준 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>리스크 기반 우선순위 — 가장 중요한 영역에 집중, 결함 리스크 최대화 방지</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 기능 요구사항만</td><td style="padding:8px;border:1px solid #ddd">비기능(보안, 사용성 등) 무시 → 전체 품질 저하</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 자동화 테스트</td><td style="padding:8px;border:1px solid #ddd">효율성 향상이나, 테스트 대상 선정(커버리지)과는 별개</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 결함 수정만 재테스트</td><td style="padding:8px;border:1px solid #ddd">회귀 테스트 생략 위험 — 수정이 다른 부분에 새 결함 유발 가능</td></tr></table>
<div class="sbox"><b>🧪 시간 제한 테스트 전략:</b><br>
• <b>리스크 기반 우선순위</b> = 중요도 + 사용 빈도 + 기술 복잡도 순으로 테스트<br>
• 자동화 = 효율성(속도) ≠ 커버리지(대상 선정)<br>
• 결함 수정 후 반드시 <b>회귀 테스트</b> 필요 (수정 부분만 재테스트 ✗)</div>`,
reference:"CRM Chapter 3: IS Development — Testing Strategies",
keyConcepts:[
"시간 제한 테스트|중요도·사용 빈도 기준 리스크 기반 우선순위로 테스트 커버리지 극대화",
"자동화 vs 커버리지|자동화 = 실행 효율성, 커버리지 대상 선정과는 별개 문제",
"회귀 테스트 필요성|결함 수정 후 반드시 회귀 테스트 — 수정이 기존 정상 기능에 새 결함 유발 가능"
]
},
{
id:145, domain:"3", ks:"3B3",
question:`시스템 인터페이스를 통해 데이터를 교환하는 상업 기업에 가장 중요한 것은?<br><small style="color:#94a3b8">Which of the following is MOST critical for commercial enterprises that are exchanging data through system interfaces?</small>`,
options:[
"데이터 무결성(Data integrity)<br><small style='color:#94a3b8'>Data integrity</small>",
"데이터 기밀성(Data confidentiality)<br><small style='color:#94a3b8'>Data confidentiality</small>",
"데이터 인증(Data authentication)<br><small style='color:#94a3b8'>Data authentication</small>",
"데이터 가용성(Data availability)<br><small style='color:#94a3b8'>Data availability</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 데이터 인증(Data Authentication)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 데이터 무결성</td><td style="padding:8px;border:1px solid #ddd">정확성·완전성·일관성 — 중요하나 인증의 일부(하위 개념)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 데이터 기밀성</td><td style="padding:8px;border:1px solid #ddd">비인가 접근 방지 — 최우선 순위 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 데이터 인증 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>출처(Origin) + 무결성(Integrity) = 상위 개념, 인터페이스 교환에서 가장 중요</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 데이터 가용성</td><td style="padding:8px;border:1px solid #ddd">데이터 접근 가능성 — 최우선 순위 아님</td></tr></table>
<div class="sbox"><b>🔐 데이터 인증(Authentication) 핵심:</b><br>
• 데이터 인증 = <b>출처 확인(Origin)</b> + <b>무결성 확인(Integrity)</b><br>
• 무결성은 인증의 <b>일부(하위 개념)</b> → 인증이 더 포괄적<br>
• 시스템 인터페이스 간 데이터 교환 시 = 출처·무결성 모두 신뢰 필요</div>`,
reference:"CRM Chapter 3: IS Development — Data Exchange & System Interfaces",
keyConcepts:[
"데이터 인증|출처(Origin) + 무결성(Integrity) 확인 — 시스템 간 데이터 교환에서 가장 중요",
"인증 vs 무결성|무결성은 인증의 하위 개념 — 인증이 출처까지 포함하는 상위 개념",
"상업 기업 데이터 교환|금융 거래 등에서 데이터의 출처와 무결성 신뢰가 핵심"
]
},
{
id:146, domain:"3", ks:"3B3",
question:`조직이 자체 개발 시스템을 대체하기 위해 외부 컨설팅 회사와 상용 재무 시스템 구현 계약을 체결했습니다. 제안된 개발 접근법을 검토할 때 가장 큰 우려 사항은?<br><small style="color:#94a3b8">An organization has contracted with an external consulting firm to implement a commercial financial system to replace its existing system. In reviewing the proposed development approach, which of the following is of GREATEST concern?</small>`,
options:[
"수용 테스트가 사용자에 의해 관리됨<br><small style='color:#94a3b8'>Acceptance testing is to be managed by users.</small>",
"품질 계획이 계약 산출물에 포함되지 않음<br><small style='color:#94a3b8'>A quality plan is not part of the contracted deliverables.</small>",
"초기 구현 시 모든 비즈니스 기능이 제공되지는 않음<br><small style='color:#94a3b8'>Not all business functions will be available on initial implementation.</small>",
"시스템이 비즈니스 요구사항을 충족하는지 확인하기 위해 프로토타이핑 사용<br><small style='color:#94a3b8'>Prototyping is being used to confirm that the system meets business requirements.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 품질 계획(Quality Plan) 미포함</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. UAT 사용자 관리</td><td style="padding:8px;border:1px solid #ddd">정상 — 수용 테스트는 사용자가 관리하는 것이 맞음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 품질 계획 미포함 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>품질 계획은 모든 프로젝트의 필수 요소 — 계약 산출물에 반드시 포함</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 모든 기능 미제공</td><td style="padding:8px;border:1px solid #ddd">대규모 시스템의 단계적(Phased) 구현은 합리적 접근</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 프로토타이핑 사용</td><td style="padding:8px;border:1px solid #ddd">요구사항 충족 확인의 유효한 방법</td></tr></table>
<div class="sbox"><b>📋 품질 계획(Quality Plan) 핵심:</b><br>
• <b>모든 프로젝트에 필수</b> — 특히 외부 계약 시 계약 산출물에 반드시 포함<br>
• 포괄 범위: 전체 개발 단계 + 포함 기능 + 일정<br>
• UAT는 사용자 관리 = 정상 / 단계적 구현 = 합리적</div>`,
reference:"CRM Chapter 3: IS Development — Software Acquisition & Quality Management",
keyConcepts:[
"품질 계획(Quality Plan)|모든 프로젝트의 필수 요소 — 외부 계약 시 산출물에 반드시 포함",
"외부 계약 시 핵심|공급자에게 품질 계획 요구 필수 — 전 개발 단계 포괄해야 함",
"단계적 구현|대규모 시스템에서 모든 기능을 초기에 제공하지 않는 것은 합리적 접근"
]
},
{
id:147, domain:"3", ks:"3B3",
question:`조직이 고객 대상 신규 직접 마케팅 접근 방식을 지원하기 위해 비즈니스 프로세스 리엔지니어링(BPR) 프로젝트를 수행합니다. 새로운 프로세스에 대한 IS 감사인의 주요 관심사는?<br><small style="color:#94a3b8">An organization undertakes a business process reengineering project in support of a new and direct marketing approach to its customers. Which of the following is an IS auditor's main concern about the new process?</small>`,
options:[
"자산과 정보 자원을 보호하기 위한 핵심 통제가 적용되어 있는지<br><small style='color:#94a3b8'>Whether key controls are in place to protect assets and information resources</small>",
"시스템이 기업 고객 요구사항을 다루는지<br><small style='color:#94a3b8'>Whether the system addresses corporate customer requirements</small>",
"시스템이 성능 목표를 달성할 수 있는지<br><small style='color:#94a3b8'>Whether the system can meet the performance goals</small>",
"시스템이 직무 분리(SoD)를 지원하는지<br><small style='color:#94a3b8'>Whether the system supports segregation/separation of duties (SoD)</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 핵심 통제(Key Controls)가 적용되어 있는지</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 핵심 통제 적용 여부 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>IS 감사인의 주 역할 — 자산·정보 보호 통제 확인 후 구현</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 기업 고객 요구사항</td><td style="padding:8px;border:1px solid #ddd">모든 고객 요구 충족 필요, 기업 고객만이 아님 — 감사 주 관심사 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 성능 목표 달성</td><td style="padding:8px;border:1px solid #ddd">중요하나 통제보다 부차적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. SoD 지원</td><td style="padding:8px;border:1px solid #ddd">SoD는 핵심 통제 중 하나일 뿐 — A가 더 포괄적</td></tr></table>
<div class="sbox"><b>🔎 BPR과 IS 감사인 역할:</b><br>
• BPR 시 감사인 최우선 = <b>핵심 통제 포함 권고 + 구현 전 통제 확인</b><br>
• SoD는 핵심 통제의 <b>일부</b> → 개별 통제 < 전체 통제 체계<br>
• 성능·요구사항은 중요하나 감사인의 <b>주</b> 관심사는 통제</div>`,
reference:"CRM Chapter 3: IS Development — Business Process Reengineering",
keyConcepts:[
"BPR 시 감사인 역할|핵심 통제 포함 권고 + 구현 전 통제 적용 확인이 주 관심사",
"포괄적 vs 개별 통제|SoD는 핵심 통제 중 하나 — 전체 통제 체계 확인이 더 중요",
"감사 우선순위|통제 > 성능 > 특정 고객 요구사항"
]
},
{
id:148, domain:"3", ks:"3B3",
question:`사용자 워크스테이션에서의 비인가 입력을 탐지하기 위한 정보는 다음 중 무엇에서 가장 잘 제공되는가?<br><small style="color:#94a3b8">Information for detecting unauthorized input from a user workstation is BEST provided by the:</small>`,
options:[
"콘솔 로그 출력물(Console log printout)<br><small style='color:#94a3b8'>console log printout.</small>",
"트랜잭션 저널(Transaction journal)<br><small style='color:#94a3b8'>transaction journal.</small>",
"자동화된 보류 파일 목록(Automated suspense file listing)<br><small style='color:#94a3b8'>automated suspense file listing.</small>",
"사용자 오류 보고서(User error report)<br><small style='color:#94a3b8'>user error report.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 트랜잭션 저널(Transaction Journal)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 콘솔 로그</td><td style="padding:8px;border:1px solid #ddd">특정 터미널의 활동을 기록하지 않음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 트랜잭션 저널 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>모든 트랜잭션 활동 기록 → 승인 원본과 비교하여 비인가 입력 식별</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 보류 파일 목록</td><td style="padding:8px;border:1px solid #ddd">편집 오류 발생 트랜잭션만 기록 (비인가 입력 탐지 불충분)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 사용자 오류 보고서</td><td style="padding:8px;border:1px solid #ddd">편집 오류만 기록 — 부적절 입력(오류 아닌 비인가 입력)은 미기록</td></tr></table>
<div class="sbox"><b>📋 비인가 입력 탐지 로그 비교:</b><br>
• <b>Transaction Journal</b> = 모든 활동 기록 → 원본 대조로 비인가 식별 (가장 포괄적)<br>
• Console Log = 특정 터미널 미추적<br>
• Suspense File / Error Report = 오류만 기록 (정상 처리된 비인가 입력 놓침)</div>`,
reference:"CRM Chapter 3: IS Development — Input Controls & Detection",
keyConcepts:[
"트랜잭션 저널|모든 트랜잭션 활동 기록 — 승인 원본과 비교하여 비인가 입력 탐지",
"콘솔 로그 한계|특정 터미널/워크스테이션 활동을 기록하지 않음",
"보류 파일·오류 보고서 한계|편집 오류만 기록 — 정상 처리된 비인가 입력은 탐지 불가"
]
},
{
id:149, domain:"3", ks:"3B3",
question:`조직이 모든 핵심 운영의 비즈니스 프로세스 리엔지니어링(BPR)을 완료한 후, IS 감사인이 가장 먼저 검토할 대상은?<br><small style="color:#94a3b8">After an organization finishes the business process reengineering (BPR) of all its critical operations, an IS auditor is MOST likely to focus on a review of:</small>`,
options:[
"BPR 이전 프로세스 흐름도<br><small style='color:#94a3b8'>pre-business process reengineering (BPR) process flowcharts.</small>",
"BPR 이후 프로세스 흐름도<br><small style='color:#94a3b8'>post-BPR process flowcharts.</small>",
"BPR 프로젝트 계획<br><small style='color:#94a3b8'>BPR project plans.</small>",
"지속적 개선 및 모니터링 계획<br><small style='color:#94a3b8'>continuous improvement and monitoring plans.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. BPR 이후(Post-BPR) 프로세스 흐름도</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. BPR 이전 흐름도</td><td style="padding:8px;border:1px solid #ddd">과거 프로세스 — 현재 상태 검토가 우선</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. BPR 이후 흐름도 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>현재 프로세스에 핵심 통제가 포함되었는지 확인</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. BPR 프로젝트 계획</td><td style="padding:8px;border:1px solid #ddd">BPR 프로젝트 내 하위 단계일 뿐</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 지속적 개선/모니터링 계획</td><td style="padding:8px;border:1px solid #ddd">BPR 프로젝트 내 하위 단계일 뿐</td></tr></table>
<div class="sbox"><b>🔄 BPR 완료 후 감사 포인트:</b><br>
• 감사인 = <b>현재(Post-BPR) 프로세스</b> 검토 (과거가 아닌 현재)<br>
• 목적 = 리엔지니어링된 프로세스에 <b>핵심 통제가 포함</b>되었는지 확인<br>
• 프로젝트 계획·개선 계획은 BPR의 하위 단계</div>`,
reference:"CRM Chapter 3: IS Development — Business Process Reengineering",
keyConcepts:[
"BPR 후 감사 초점|Post-BPR 프로세스 흐름도 검토 — 현재 상태에서 핵심 통제 포함 확인",
"감사 원칙|과거(As-Was)가 아닌 현재(As-Is) 프로세스를 검토",
"BPR 하위 단계|프로젝트 계획, 지속적 개선 계획은 BPR 프로젝트의 일부 단계"
]
},
{
id:150, domain:"3", ks:"3B3",
question:`조직이 자체 개발한 급여 프로그램을 상용 ERP 시스템의 해당 하위 시스템으로 교체합니다. 가장 높은 잠재적 리스크는?<br><small style="color:#94a3b8">An organization is replacing a payroll program that it developed in-house, with the relevant subsystem of a commercial ERP system. Which of the following represents the HIGHEST potential risk?</small>`,
options:[
"일부 프로젝트 변경의 미문서화된 승인<br><small style='color:#94a3b8'>Undocumented approval of some project changes</small>",
"구 시스템에서 신 시스템으로의 과거 데이터 마이그레이션 오류<br><small style='color:#94a3b8'>Faulty migration of historical data from the old system to the new system</small>",
"ERP 하위 시스템의 표준 기능에 대한 불완전한 테스트<br><small style='color:#94a3b8'>Incomplete testing of the standard functionality of the ERP subsystem</small>",
"신규 ERP 하위 시스템에서 기존 급여 권한의 중복<br><small style='color:#94a3b8'>Duplication of existing payroll permissions on the new ERP subsystem</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 과거 데이터 마이그레이션 오류</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 미문서화 변경 승인</td><td style="padding:8px;border:1px solid #ddd">스코프 크리프 리스크이나 데이터 무결성보다 낮음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 데이터 마이그레이션 오류 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>데이터 무결성 손실 → 급여 지급 오류 + 과거 기록 부정확 = 최대 리스크</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 불완전한 테스트</td><td style="padding:8px;border:1px solid #ddd">상용 ERP = 이미 충분히 테스트된 제품 → 리스크 상대적 낮음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 권한 중복</td><td style="padding:8px;border:1px solid #ddd">리스크 있으나 데이터 마이그레이션보다 낮음</td></tr></table>
<div class="sbox"><b>🔄 시스템 교체 시 최대 리스크:</b><br>
• <b>데이터 마이그레이션 = 최대 리스크</b> — 무결성 손실 시 업무 마비<br>
• 급여 시스템: 정확·적시 지급 불가 + 과거 지급 기록 오류<br>
• 상용 ERP 표준 기능 = 이미 검증됨 → 테스트 리스크 상대적 낮음</div>`,
reference:"CRM Chapter 3: IS Development — System Migration & Data Conversion",
keyConcepts:[
"시스템 교체 최대 리스크|데이터 마이그레이션 오류 — 데이터 무결성 손실이 가장 큰 위험",
"급여 시스템 마이그레이션|정확·적시 지급 불가 + 과거 기록 부정확 → 직접적 업무 영향",
"상용 ERP 테스트|이미 시장에서 검증된 제품 → 표준 기능 테스트 리스크는 상대적 낮음"
]
},
{
id:151, domain:"3", ks:"3B3",
question:`IS 감사인이 향후 유지보수 역량과 관련된 프로그래밍 활동의 품질을 평가하는 데 가장 도움이 되는 것은?<br><small style="color:#94a3b8">Which of the following BEST helps an IS auditor evaluate the quality of programming activities related to future maintenance capabilities?</small>`,
options:[
"프로그래밍 언어<br><small style='color:#94a3b8'>Programming language</small>",
"개발 환경<br><small style='color:#94a3b8'>Development environment</small>",
"버전 관리 시스템<br><small style='color:#94a3b8'>Version control system</small>",
"프로그램 코딩 표준<br><small style='color:#94a3b8'>Program coding standards</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 프로그램 코딩 표준(Program Coding Standards)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 프로그래밍 언어</td><td style="padding:8px;border:1px solid #ddd">비주류 언어는 우려이나 코딩 표준보다 덜 중요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 개발 환경</td><td style="padding:8px;border:1px solid #ddd">개발 효율성 관련 — 향후 유지보수와 직접 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 버전 관리 시스템</td><td style="padding:8px;border:1px solid #ddd">코드 리비전 관리 — 코딩 표준 일관 적용 보장은 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 코딩 표준 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>효율적 유지보수·수정의 필수 요소 — 코드 가독성·일관성 보장</b></td></tr></table>
<div class="sbox"><b>📝 코딩 표준과 유지보수:</b><br>
• <b>코딩 표준</b> = 코드 작성·읽기·이해를 명확하게 → 설계 명세 없이도 이해 가능<br>
• 향후 유지보수 품질 평가 시 가장 중요한 지표<br>
• 버전 관리 = 리비전 관리 도구 (표준 적용 보장 ≠)</div>`,
reference:"CRM Chapter 3: IS Development — Programming Standards & Maintenance",
keyConcepts:[
"코딩 표준|효율적 프로그램 유지보수·수정의 필수 요소 — 코드 가독성·일관성 보장",
"버전 관리 vs 코딩 표준|버전 관리 = 리비전 관리, 코딩 표준 일관 적용 보장은 아님",
"유지보수 품질 평가|코딩 표준 적용 여부가 향후 유지보수 역량의 핵심 지표"
]
},
{
id:152, domain:"3", ks:"3B3",
question:`소프트웨어 개발 프로젝트의 요구사항 정의 단계에서 소프트웨어 테스트 측면을 다루기 위해 개발해야 하는 것은?<br><small style="color:#94a3b8">Which of the following should be developed during the requirements definition phase of a software development project to address aspects of software testing?</small>`,
options:[
"핵심 애플리케이션을 다루는 테스트 데이터<br><small style='color:#94a3b8'>Test data covering critical applications</small>",
"상세 테스트 계획<br><small style='color:#94a3b8'>Detailed test plans</small>",
"품질 보증(QA) 테스트 명세<br><small style='color:#94a3b8'>Quality assurance (QA) test specifications</small>",
"사용자 수용 테스트(UAT) 명세<br><small style='color:#94a3b8'>User acceptance test (UAT) specifications</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 사용자 수용 테스트(UAT) 명세</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">작성 시점</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 테스트 데이터</td><td style="padding:8px;border:1px solid #ddd">시스템 테스트 단계에서 생성</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 상세 테스트 계획</td><td style="padding:8px;border:1px solid #ddd">시스템 테스트 단계에서 생성</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. QA 테스트 명세</td><td style="padding:8px;border:1px solid #ddd">개발 프로세스 후반에 설정</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. UAT 명세 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>요구사항 정의 단계 — 사용자 참여 시점에서 작성</b></td></tr></table>
<div class="sbox"><b>📋 SDLC 단계별 테스트 산출물:</b><br>
• <b>요구사항 정의</b> → UAT 명세 (사용자가 비즈니스 요구 기반 작성)<br>
• <b>시스템 테스트 단계</b> → 테스트 데이터, 상세 테스트 계획<br>
• <b>개발 후반</b> → QA 테스트 명세<br>
• 핵심: UAT = 비즈니스 요구 충족 확인 → 요구사항 단계에서 정의</div>`,
reference:"CRM Chapter 3: IS Development — Requirements Definition & Testing",
keyConcepts:[
"요구사항 단계 테스트 산출물|UAT 명세 — 사용자가 비즈니스 요구사항 기반으로 작성",
"테스트 데이터·상세 계획|시스템 테스트 단계에서 생성 (요구사항 단계 아님)",
"UAT 목적|개발 소프트웨어가 비즈니스 목표·사용자 요구를 충족하는지 확인"
]
},
{
id:153, domain:"3", ks:"3B4",
question:`IS 감사인이 핵심 프로젝트의 프로젝트 착수(Initiation) 회의에 참여하도록 요청받았습니다. IS 감사인의 주요 관심사는?<br><small style="color:#94a3b8">An IS auditor is asked to participate in project initiation meetings for a critical project. The IS auditor's MAIN concern should be that the:</small>`,
options:[
"프로젝트와 관련된 복잡성과 리스크가 분석되었는지<br><small style='color:#94a3b8'>complexity and risk associated with the project have been analyzed.</small>",
"프로젝트 전반에 필요한 자원이 결정되었는지<br><small style='color:#94a3b8'>resources needed throughout the project have been determined.</small>",
"기술적 산출물이 식별되었는지<br><small style='color:#94a3b8'>technical deliverables have been identified.</small>",
"프로젝트에 참여하는 외부 당사자와의 계약이 완료되었는지<br><small style='color:#94a3b8'>contract for external parties involved in the project has been completed.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 복잡성과 리스크 분석 여부</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 복잡성·리스크 분석 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>프로젝트 성공의 핵심 — 착수 시 리스크 이해·관리 계획 필수</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 자원 결정</td><td style="padding:8px;border:1px solid #ddd">복잡성 분석에 의존 — 리스크 분석이 선행되어야 함</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 기술 산출물 식별</td><td style="padding:8px;border:1px solid #ddd">착수 단계에서는 너무 이른 시점</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 외부 계약 완료</td><td style="padding:8px;border:1px solid #ddd">모든 프로젝트에 외부 당사자가 필요한 것은 아님</td></tr></table>
<div class="sbox"><b>🚀 프로젝트 착수(Initiation) 시 감사 포인트:</b><br>
• 최우선 = <b>복잡성·리스크 분석</b> (이후 모든 의사결정의 기반)<br>
• 자원 = 복잡성 분석 결과에 따라 결정 (종속적)<br>
• 기술 산출물 = 후속 단계에서 식별</div>`,
reference:"CRM Chapter 3: IS Development — Project Initiation",
keyConcepts:[
"프로젝트 착수 시 최우선|복잡성·리스크 분석 — 프로젝트 전반의 의사결정 기반",
"자원 vs 리스크|자원 결정은 복잡성 분석에 종속 — 리스크 분석이 선행",
"착수 단계 범위|기술 산출물 식별은 너무 이름, 외부 계약은 항상 필요하지 않음"
]
},
{
id:154, domain:"3", ks:"3B4",
question:`리스크 관리 관점에서, 대규모·복잡한 IT 인프라를 구현할 때 가장 좋은 접근 방식은?<br><small style="color:#94a3b8">From a risk management point of view, the BEST approach when implementing a large and complex IT infrastructure is:</small>`,
options:[
"개념 증명(PoC) 후 대규모 배포<br><small style='color:#94a3b8'>a major deployment after proof of concept.</small>",
"프로토타이핑과 단일 단계 배포<br><small style='color:#94a3b8'>prototyping and a one-phase deployment.</small>",
"순차적 단계에 기반한 배포 계획<br><small style='color:#94a3b8'>a deployment plan based on sequenced phases.</small>",
"배포 전 신규 인프라 시뮬레이션<br><small style='color:#94a3b8'>to simulate the new infrastructure before deployment.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 순차적 단계별(Phased) 배포 계획</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. PoC 후 대규모 배포</td><td style="padding:8px;border:1px solid #ddd">대규모 일괄 배포 = 높은 구현 실패 리스크</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 프로토타이핑 + 단일 배포</td><td style="padding:8px;border:1px solid #ddd">프로토타이핑은 개발 실패 감소, 대규모 환경은 단계적 접근 필요</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 순차적 단계별 배포 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>단계별로 전체 시스템 통합 → 품질 보증 극대화</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 배포 전 시뮬레이션</td><td style="padding:8px;border:1px solid #ddd">대규모·복잡 인프라 시뮬레이션은 현실적으로 불가능</td></tr></table>
<div class="sbox"><b>📐 대규모 인프라 배포 원칙:</b><br>
• <b>Phased(단계적) 접근</b> = 리스크 최소화 + 품질 보증<br>
• 대규모 일괄 배포 = 실패 리스크 최고<br>
• 대규모 인프라 시뮬레이션 = 비현실적</div>`,
reference:"CRM Chapter 3: IS Development — Infrastructure Deployment",
keyConcepts:[
"대규모 인프라 배포|순차적 단계별(Phased) 접근이 리스크 관리 최선",
"대규모 일괄 배포 리스크|한 번에 전체 배포 = 구현 실패 리스크 최고",
"시뮬레이션 한계|대규모·복잡 IT 인프라는 배포 전 시뮬레이션이 현실적으로 불가능"
]
},
{
id:155, domain:"3", ks:"3B4",
question:`소프트웨어 개발 프로젝트에서 결함 수를 줄이기 위한 가장 비용 효율적인 권고사항은?<br><small style="color:#94a3b8">Which of the following is the MOST cost-effective recommendation for reducing the number of defects encountered during software development projects?</small>`,
options:[
"시스템 테스트에 할당된 시간 증가<br><small style='color:#94a3b8'>Increase the time allocated for system testing.</small>",
"공식적 소프트웨어 검사(Inspection) 구현<br><small style='color:#94a3b8'>Implement formal software inspections.</small>",
"개발 인력 증가<br><small style='color:#94a3b8'>Increase the development staff.</small>",
"모든 프로젝트 산출물에 대한 서명(Sign-off) 요구<br><small style='color:#94a3b8'>Require the sign-off of all project deliverables.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 공식적 소프트웨어 검사(Inspection)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 테스트 시간 증가</td><td style="padding:8px;border:1px solid #ddd">더 많은 결함 발견 가능하나, 원인 파악 불가 + 늦은 발견 = 수정 비용 ↑</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 소프트웨어 검사 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>코드·설계 단계에서 조기 발견 → 전파 방지 → 재작업 최소화 = 비용 효율적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 개발 인력 증가</td><td style="padding:8px;border:1px solid #ddd">비용↑ + 혼란↑, 품질 관리 프로세스 없으면 품질 보장 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 산출물 서명</td><td style="padding:8px;border:1px solid #ddd">검토 깊이 부족 + 시점이 늦을 수 있음 → 비용 효율 낮음</td></tr></table>
<div class="sbox"><b>🔍 소프트웨어 검사(Inspection) 핵심:</b><br>
• 코드·설계의 <b>공식적 동료 검토</b> = 검증된 품질 기법<br>
• 결함을 <b>SDLC 초기에 발견</b> → 전파 방지 → 재작업(Rework) 최소화<br>
• <b>초기 발견 = 비용 최소</b> (늦을수록 수정 비용 기하급수적 증가)</div>`,
reference:"CRM Chapter 3: IS Development — Software Quality & Inspections",
keyConcepts:[
"소프트웨어 검사(Inspection)|코드·설계 공식 검토 — 조기 결함 발견으로 비용 효율 극대화",
"조기 발견 원칙|SDLC 초기 결함 발견 = 수정 비용 최소, 후기 발견 = 비용 기하급수적 증가",
"테스트 시간 증가 한계|결함 발견은 가능하나 원인 파악 불가 + 늦은 시점 = 비용 비효율"
]
},
{
id:156, domain:"3", ks:"3B4",
question:`전자 데이터 교환(EDI) 프로세스 구현 프로젝트의 타당성 조사(Feasibility Study)에 포함되어야 하는 것은?<br><small style="color:#94a3b8">Which of the following should be included in a feasibility study for a project to implement an electronic data interchange (EDI) process?</small>`,
options:[
"암호화 알고리즘 형식<br><small style='color:#94a3b8'>Encryption algorithm format</small>",
"상세 내부 통제 절차<br><small style='color:#94a3b8'>Detailed internal control procedures</small>",
"필요한 통신 프로토콜<br><small style='color:#94a3b8'>Necessary communication protocols</small>",
"제안된 신뢰할 수 있는 제3자 계약<br><small style='color:#94a3b8'>Proposed trusted third-party agreement</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 필요한 통신 프로토콜</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 암호화 알고리즘</td><td style="padding:8px;border:1px solid #ddd">타당성 조사에는 너무 상세 — 개요만 포함</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 상세 내부 통제 절차</td><td style="padding:8px;border:1px solid #ddd">타당성 조사에는 너무 상세 — 개요만 포함</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 통신 프로토콜 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>HW/SW 비용 영향 + 신기술 리스크 영향 → 타당성 평가에 필수</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 제3자 계약</td><td style="padding:8px;border:1px solid #ddd">타당성 조사에는 너무 상세 — 개요만 포함</td></tr></table>
<div class="sbox"><b>📋 타당성 조사(Feasibility Study) 범위:</b><br>
• 타당성 조사 = <b>비용·리스크 영향이 큰 항목</b> 포함<br>
• 통신 프로토콜 = 새 HW/SW 필요 시 비용↑ + 신기술 리스크↑<br>
• 암호화·통제 절차·제3자 계약 = 너무 상세 → 개요 수준만 포함</div>`,
reference:"CRM Chapter 3: IS Development — Feasibility Study & EDI",
keyConcepts:[
"타당성 조사 포함 기준|비용·리스크에 큰 영향을 미치는 항목 (상세 절차는 후속 단계)",
"EDI 통신 프로토콜|HW/SW 비용 영향 + 신기술 리스크 → 타당성 평가에 필수 포함",
"타당성 조사 제외 항목|암호화 상세, 내부 통제 절차, 제3자 계약 = 너무 상세 (개요만)"
]
},
{
id:157, domain:"3", ks:"3B4",
question:`IS 감사인이 기업 네트워크의 구현 후 검토(Post-implementation Review)를 수행하고 있습니다. 가장 우려되는 발견사항은?<br><small style="color:#94a3b8">An IS auditor is conducting a postimplementation review of an enterprise's network. Which of the following findings would be of MOST concern?</small>`,
options:[
"무선 모바일 장치가 비밀번호로 보호되지 않음<br><small style='color:#94a3b8'>Wireless mobile devices are not password-protected.</small>",
"네트워크 장비 설치 시 기본 비밀번호가 변경되지 않음<br><small style='color:#94a3b8'>Default passwords are not changed when installing network devices.</small>",
"아웃바운드 웹 프록시가 존재하지 않음<br><small style='color:#94a3b8'>An outbound web proxy does not exist.</small>",
"모든 통신 링크가 암호화를 사용하지 않음<br><small style='color:#94a3b8'>All communication links do not use encryption.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 네트워크 장비 기본 비밀번호 미변경</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 모바일 비밀번호 미보호</td><td style="padding:8px;border:1px solid #ddd">리스크이나 네트워크 장비보다 영향 범위 작음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 기본 비밀번호 미변경 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>누구나 네트워크 장비 설정 변경 가능 = 가장 심각한 리스크</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 웹 프록시 부재</td><td style="padding:8px;border:1px solid #ddd">좋은 관행이나 기업에 따라 필수 아닐 수 있음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 전체 암호화 미사용</td><td style="padding:8px;border:1px solid #ddd">모든 링크 암호화는 비용·복잡도 문제로 비현실적</td></tr></table>
<div class="sbox"><b>🔐 네트워크 기본 비밀번호 리스크:</b><br>
• 공장 기본 비밀번호 = <b>공개적으로 알려져 있음</b> → 누구나 접근 가능<br>
• 네트워크 장비 설정 변경 = <b>전체 인프라 영향</b><br>
• Q140과 동일 원칙: 기본 자격 증명 비활성화/변경 = 구현 시 최우선</div>`,
reference:"CRM Chapter 3: IS Development — Post-Implementation Review, Network Security",
keyConcepts:[
"기본 비밀번호 리스크|공장 기본 비밀번호 미변경 → 누구나 네트워크 장비 설정 변경 가능",
"네트워크 vs 모바일|네트워크 장비 = 전체 인프라 영향, 모바일 = 개별 장치 리스크",
"모든 링크 암호화|비용·복잡도 문제로 모든 통신에 암호화 적용은 비현실적"
]
},
{
id:158, domain:"3", ks:"3B4",
question:`두 개 이상의 시스템이 통합될 때, IS 감사인은 입출력 통제를 어디에서 검토해야 하는가?<br><small style="color:#94a3b8">When two or more systems are integrated, the IS auditor must review input/output controls in the:</small>`,
options:[
"다른 시스템의 출력을 수신하는 시스템<br><small style='color:#94a3b8'>systems receiving the output of other systems.</small>",
"다른 시스템에 출력을 보내는 시스템<br><small style='color:#94a3b8'>systems sending output to other systems.</small>",
"데이터를 송수신하는 시스템 모두<br><small style='color:#94a3b8'>systems sending and receiving data.</small>",
"두 시스템 간의 인터페이스<br><small style='color:#94a3b8'>interfaces between the two systems.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 데이터를 송수신하는 시스템 모두</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 수신 시스템만</td><td style="padding:8px;border:1px solid #ddd">수신만으로는 송신 측 출력 오류 방지 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 송신 시스템만</td><td style="padding:8px;border:1px solid #ddd">송신 확인만으로는 전송 오류 방지 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 송수신 모두 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>한 시스템의 출력 = 다른 시스템의 입력 → 양쪽 모두 검토 필수</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 인터페이스</td><td style="padding:8px;border:1px solid #ddd">인터페이스 설정·오류 통제는 중요하나 송신 전·수신 후 데이터 검토도 필요</td></tr></table>
<div class="sbox"><b>🔗 시스템 통합 시 입출력 통제:</b><br>
• <b>송신 시스템</b> = 출력 데이터 정확성 검토 (오염 방지)<br>
• <b>수신 시스템</b> = 입력 데이터 검증 (전송 오류·오염 탐지)<br>
• 양쪽 모두 검토 = 상류→하류 오염 방지의 완전한 통제</div>`,
reference:"CRM Chapter 3: IS Development — System Integration & I/O Controls",
keyConcepts:[
"시스템 통합 I/O 통제|송신·수신 양쪽 모두 검토 — 한 시스템의 출력 = 다른 시스템의 입력",
"상류→하류 오염 방지|송신 측 출력 검토 + 수신 측 입력 검증 = 완전한 통제",
"인터페이스 vs 시스템 통제|인터페이스 설정도 중요하나 데이터 송수신 전후 검토가 우선"
]
},
{
id:159, domain:"3", ks:"3B4",
question:`능력 성숙도 모델(CMM)에 대해 애플리케이션 개발 프로젝트를 평가함으로써, IS 감사인은 무엇을 확인할 수 있는가?<br><small style="color:#94a3b8">By evaluating application development projects against the capability maturity model, an IS auditor should be able to verify that:</small>`,
options:[
"신뢰할 수 있는 제품이 보장됨<br><small style='color:#94a3b8'>reliable products are guaranteed.</small>",
"프로그래머의 효율성이 향상됨<br><small style='color:#94a3b8'>programmers' efficiency is improved.</small>",
"보안 요구사항이 설계됨<br><small style='color:#94a3b8'>security requirements are designed.</small>",
"예측 가능한 소프트웨어 프로세스가 따르고 있는지<br><small style='color:#94a3b8'>predictable software processes are followed.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 예측 가능한 소프트웨어 프로세스 준수</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 신뢰 제품 보장</td><td style="padding:8px;border:1px solid #ddd">성숙한 프로세스도 제품 신뢰성을 보장하지는 않음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 프로그래머 효율성</td><td style="padding:8px;border:1px solid #ddd">CMM은 기술적 프로세스(프로그래밍 효율) 평가 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 보안 요구사항 설계</td><td style="padding:8px;border:1px solid #ddd">CMM은 보안 요구사항·애플리케이션 통제 평가 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 예측 가능한 프로세스 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>CMM = 안정적·예측 가능한 SW 개발 프로세스 준수 여부 확인</b></td></tr></table>
<div class="sbox"><b>📊 CMM(능력 성숙도 모델) 핵심:</b><br>
• CMM 평가 대상 = <b>프로세스 성숙도</b> (제품 품질·보안·효율성 아님)<br>
• 목적 = 조직이 <b>안정적·예측 가능한 SW 개발 프로세스</b>를 따르는지 확인<br>
• 성숙 프로세스 ≠ 제품 보장 (성공 가능성↑ but 보장 X)</div>`,
reference:"CRM Chapter 3: IS Development — Capability Maturity Model",
keyConcepts:[
"CMM 평가 대상|소프트웨어 개발 프로세스의 성숙도 — 안정적·예측 가능한 프로세스 준수 확인",
"CMM 평가 범위 아닌 것|제품 신뢰성 보장 X, 프로그래밍 효율 X, 보안 요구사항 X",
"프로세스 성숙 vs 제품 품질|성숙한 프로세스 = 성공 가능성 증가, but 제품 신뢰성 보장은 아님"
]
},
{
id:160, domain:"3", ks:"3B4",
question:`레거시 시스템을 대체하는 새로운 ERP 급여 시스템의 성공적인 사용자 테스트 및 수용을 촉진하기 위한 최선의 방법은?<br><small style="color:#94a3b8">What is the BEST method to facilitate successful user testing and acceptance of a new enterprise resource planning payroll system that replaces an existing legacy system?</small>`,
options:[
"다중 테스트(Multiple testing)<br><small style='color:#94a3b8'>Multiple testing</small>",
"병행 테스트(Parallel testing)<br><small style='color:#94a3b8'>Parallel testing</small>",
"통합 테스트(Integration testing)<br><small style='color:#94a3b8'>Integration testing</small>",
"프로토타입 테스트(Prototype testing)<br><small style='color:#94a3b8'>Prototype testing</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 병행 테스트(Parallel Testing)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 다중 테스트</td><td style="padding:8px;border:1px solid #ddd">신·구 시스템 결과 비교 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 병행 테스트 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>신·구 동시 운영 → 결과 비교 → 레거시 폐기 전 검증 + 사용자 수용도↑</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 통합 테스트</td><td style="padding:8px;border:1px solid #ddd">시스템 간 상호작용 평가 — 최종 사용자가 수행하는 테스트 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 프로토타입 테스트</td><td style="padding:8px;border:1px solid #ddd">설계·개발 중 사용 — 획득 시스템/UAT에는 부적합</td></tr></table>
<div class="sbox"><b>🔄 Parallel Testing 장점:</b><br>
• 신·구 시스템 <b>동시 운영 + 결과 비교</b> → 데이터 정확성 검증<br>
• 레거시 폐기 전 충분한 검증 기간 제공<br>
• <b>사용자 수용도(Adoption) 향상</b> — 신뢰 구축</div>`,
reference:"CRM Chapter 3: IS Development — Testing & System Transition",
keyConcepts:[
"Parallel Testing 목적|신·구 동시 운영으로 결과 비교 → 레거시 폐기 전 검증 + 사용자 수용도 향상",
"Integration Testing|시스템 간 상호작용 평가 — 최종 사용자가 수행하는 UAT와 다름",
"Prototype Testing 한계|설계·개발 중 사용자 입력 확인용 — 획득 시스템이나 UAT에는 부적합"
]
},
{
id:161, domain:"3", ks:"3B4",
question:`IS 감사인이 조직 시스템의 구현 후 검토를 수행하면서 회계 애플리케이션 내 출력 오류를 식별했습니다. 이것이 입력 오류에 의해 발생했음을 확인했습니다. 감사인이 경영진에게 권고해야 할 통제는?<br><small style="color:#94a3b8">An IS auditor is performing a postimplementation review and identifies output errors within an accounting application caused by input errors. Which of the following controls should the IS auditor recommend?</small>`,
options:[
"재계산(Recalculations)<br><small style='color:#94a3b8'>Recalculations</small>",
"한도 점검(Limit checks)<br><small style='color:#94a3b8'>Limit checks</small>",
"연속 합계(Run-to-run totals)<br><small style='color:#94a3b8'>Run-to-run totals</small>",
"조정(Reconciliations)<br><small style='color:#94a3b8'>Reconciliations</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 한도 점검(Limit Checks)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">유형/시점</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 재계산</td><td style="padding:8px;border:1px solid #ddd">출력 후 수행 — 처리 정확성 확인 (입력 오류 방지 X)</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. Limit Checks ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>입력 단계 예방 통제 — 사전 설정 한도 초과 시 입력 거부</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. Run-to-run Totals</td><td style="padding:8px;border:1px solid #ddd">출력 후 수행 — 처리 단계 간 데이터 검증</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 조정</td><td style="padding:8px;border:1px solid #ddd">출력 후 수행 — 파일 총계 정기 조정</td></tr></table>
<div class="sbox"><b>🛡 입력 오류 → 입력 단계 통제로 해결:</b><br>
• 원칙: 통제는 <b>데이터 입력 지점에 가장 가까이</b> 구현<br>
• <b>Limit Check</b> = 예방 통제 (사전 한도 → 잘못된 데이터 입력 차단)<br>
• Recalculation·Run-to-run·Reconciliation = 모두 출력 후(탐지 통제)</div>`,
reference:"CRM Chapter 3: IS Development — Input/Output Controls",
keyConcepts:[
"입력 오류 통제|Limit Check = 입력 단계 예방 통제 (사전 한도 초과 시 입력 거부)",
"통제 배치 원칙|데이터 입력 지점에 가장 가까이 통제 구현 — 입력 오류는 입력 통제로 해결",
"탐지 vs 예방|Recalculation·Run-to-run·Reconciliation = 출력 후 탐지 통제, Limit Check = 입력 예방 통제"
]
},
{
id:162, domain:"3", ks:"3B4",
question:`IS 감사인이 애자일 방법론을 채택한 조직의 소프트웨어 개발 역량을 검토하고 있습니다. 감사인이 가장 우려할 사항은?<br><small style="color:#94a3b8">An IS auditor is reviewing the software development capabilities of an organization that has adopted the agile methodology. The IS auditor would be the MOST concerned if:</small>`,
options:[
"특정 프로젝트 반복(Iteration)이 개념 증명(PoC) 산출물과 미완성 코드를 생성함<br><small style='color:#94a3b8'>certain project iterations produce proof-of-concept deliverables and unfinished code.</small>",
"애플리케이션 기능과 개발 프로세스가 광범위하게 문서화되지 않음<br><small style='color:#94a3b8'>application features and development processes are not extensively documented.</small>",
"소프트웨어 개발팀이 주요 프로젝트의 각 단계를 지속적으로 재계획함<br><small style='color:#94a3b8'>software development teams continually re-plan each step of their major projects.</small>",
"프로젝트 관리자가 프로젝트 자원을 관리하지 않고 팀원에게 맡김<br><small style='color:#94a3b8'>project managers do not manage project resources, leaving that to project team members.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 반복(Sprint)이 PoC/미완성 코드를 생성</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. PoC/미완성 코드 생성 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>Agile 핵심 위반 — 각 Sprint는 반드시 동작하는(functional) 코드 생성해야 함</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 문서화 부족</td><td style="padding:8px;border:1px solid #ddd">Agile 정상 특성 — 팀 지식 의존 + 코드 내 문서화</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 지속적 재계획</td><td style="padding:8px;border:1px solid #ddd">Agile 핵심 구성 요소 — Sprint 후 재계획은 정상</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 팀원이 자원 관리</td><td style="padding:8px;border:1px solid #ddd">Agile 정상 — 관리자=퍼실리테이터, 팀 자율 관리</td></tr></table>
<div class="sbox"><b>🏃 Agile 핵심 원칙:</b><br>
• 각 Sprint = <b>동작하는(functional) 코드</b> 생성 필수 (PoC/데모용 코드 ✗)<br>
• 다음 Sprint가 이전 Sprint 코드 위에 빌드 → 미완성 코드는 연쇄 문제<br>
• 문서화 축소, 지속적 재계획, 팀 자율 관리 = 모두 Agile 정상 특성</div>`,
reference:"CRM Chapter 3: IS Development — Agile Development Methodology",
keyConcepts:[
"Agile Sprint 원칙|각 반복(Sprint)은 반드시 동작하는(functional) 코드를 생성해야 함",
"PoC 코드 위험|데모용 미완성 코드 → 후속 Sprint 빌드 기반이 불안정해짐",
"Agile 정상 특성|문서화 축소, 지속적 재계획, 팀 자율 자원 관리 = 모두 정상"
]
},
{
id:163, domain:"3", ks:"3B4",
question:`다음 중 소프트웨어가 실제 운영 환경에서 어떻게 수행될지에 대해 가장 좋은 피드백을 제공하는 테스트 방법은?<br><small style="color:#94a3b8">Which of the following software testing methods provides the BEST feedback on how the software will perform in the live environment?</small>`,
options:[
"알파 테스트(Alpha testing)<br><small style='color:#94a3b8'>Alpha testing</small>",
"회귀 테스트(Regression testing)<br><small style='color:#94a3b8'>Regression testing</small>",
"베타 테스트(Beta testing)<br><small style='color:#94a3b8'>Beta testing</small>",
"화이트 박스 테스트(White box testing)<br><small style='color:#94a3b8'>White box testing</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 베타 테스트(Beta Testing)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. Alpha</td><td style="padding:8px;border:1px solid #ddd">내부 사용자 + 전체 기능 미포함 + 시뮬레이션 가능 → 실제 환경 피드백 부족</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. Regression</td><td style="padding:8px;border:1px solid #ddd">변경 후 기존 기능 오류 확인 — 운영 환경 수행 피드백 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. Beta ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>실제 환경 + 외부 사용자 참여 = 운영 환경 수행 최적 피드백</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. White Box</td><td style="padding:8px;border:1px solid #ddd">프로그램 논리 효과성 평가 — 운영 환경 수행과 무관</td></tr></table>
<div class="sbox"><b>🧪 Alpha vs Beta 비교:</b><br>
• <b>Alpha</b> = 내부(개발 조직) + 전체 기능 미포함 가능 + 시뮬레이션<br>
• <b>Beta</b> = 외부 사용자 + 실제 환경 노출 + 테스트 최종 단계<br>
• 운영 환경 피드백 = Beta가 가장 적합</div>`,
reference:"CRM Chapter 3: IS Development — Software Testing Methods",
keyConcepts:[
"Beta Testing|외부 사용자 + 실제 환경 노출 — 운영 환경 수행에 대한 최적 피드백",
"Alpha vs Beta|Alpha = 내부/시뮬레이션, Beta = 외부/실제 환경 (Alpha → Beta 순서)",
"Regression Testing|변경 후 기존 기능에 새 오류 발생 여부 확인 (운영 환경 피드백 아님)"
]
},
{
id:164, domain:"3", ks:"3B4",
question:`기능성(Functionality)은 소프트웨어 제품의 품질을 평가하는 특성으로, 다음 중 무엇에 적용되는 속성 집합으로 가장 잘 설명되는가?<br><small style="color:#94a3b8">Functionality is a characteristic associated with evaluating the quality of software products and is BEST described as the set of attributes that apply to the:</small>`,
options:[
"일련의 기능과 그 지정된 속성의 존재<br><small style='color:#94a3b8'>existence of a set of functions and their specified properties.</small>",
"소프트웨어를 한 환경에서 다른 환경으로 이전할 수 있는 능력<br><small style='color:#94a3b8'>ability of the software to be transferred from one environment to another.</small>",
"명시된 조건에서 성능 수준을 유지하는 소프트웨어의 능력<br><small style='color:#94a3b8'>capability of software to maintain its level of performance under stated conditions.</small>",
"소프트웨어 성능과 사용된 자원 양 간의 관계<br><small style='color:#94a3b8'>relationship between the performance of the software and the amount of resources used.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 기능과 그 지정된 속성의 존재</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">품질 특성</th><th style="padding:8px;border:1px solid #ddd">정의</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>Functionality (기능성) ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>기능 집합과 그 속성의 존재 — 비즈니스 요구 지원 작업·운영·목적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Portability (이식성)</td><td style="padding:8px;border:1px solid #ddd">한 환경에서 다른 환경으로 이전 능력</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Reliability (신뢰성)</td><td style="padding:8px;border:1px solid #ddd">명시 조건에서 성능 수준 유지 능력</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Efficiency (효율성)</td><td style="padding:8px;border:1px solid #ddd">성능 대비 자원 사용량 관계</td></tr></table>
<div class="sbox"><b>📊 SW 품질 특성 (ISO 9126 기반):</b><br>
• <b>Functionality</b> = 기능 존재 + 속성 (무엇을 하는가)<br>
• <b>Reliability</b> = 성능 유지 (얼마나 안정적인가)<br>
• <b>Efficiency</b> = 성능/자원 비율 (얼마나 효율적인가)<br>
• <b>Portability</b> = 환경 이전 (얼마나 이식 가능한가)</div>`,
reference:"CRM Chapter 3: IS Development — Software Quality Characteristics",
keyConcepts:[
"Functionality|기능 집합과 그 속성의 존재 — 시스템의 작업·운영·목적 (비즈니스 요구 지원)",
"Portability|환경 간 이전 능력 / Reliability|명시 조건 성능 유지 / Efficiency|성능 대비 자원 사용",
"ISO 9126 품질 모델|Functionality, Reliability, Usability, Efficiency, Maintainability, Portability"
]
},
{
id:165, domain:"3", ks:"3B4",
question:`IS 감사인이 80% 이상 완료되었지만 시간 10%, 비용 25% 초과한 소프트웨어 개발 프로젝트를 감사하도록 배정되었습니다. 감사인이 취해야 할 조치는?<br><small style="color:#94a3b8">An IS auditor is assigned to audit a software development project that is more than 80 percent complete but has already overrun time by 10 percent and costs by 25 percent. Which of the following actions should the IS auditor take?</small>`,
options:[
"조직이 효과적인 프로젝트 관리를 갖추지 못했다고 보고<br><small style='color:#94a3b8'>Report that the organization does not have effective project management.</small>",
"프로젝트 관리자 교체를 권고<br><small style='color:#94a3b8'>Recommend that the project manager be changed.</small>",
"IT 거버넌스 구조를 검토<br><small style='color:#94a3b8'>Review the IT governance structure.</small>",
"비즈니스 케이스와 프로젝트 관리를 검토<br><small style='color:#94a3b8'>Review the business case and project management.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 비즈니스 케이스와 프로젝트 관리 검토</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. PM 비효과적 보고</td><td style="padding:8px;border:1px solid #ddd">효과적인 PM이 있어도 초과 발생 가능 — 성급한 결론</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. PM 교체 권고</td><td style="padding:8px;border:1px solid #ddd">원인 파악 없이 교체 권고는 부적절</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. IT 거버넌스 검토</td><td style="padding:8px;border:1px solid #ddd">건전한 거버넌스에서도 초과 발생 가능 — 직접적 관련 낮음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 비즈니스 케이스 + PM 검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>원인 파악 우선 — 초과 요인을 이해한 후 권고</b></td></tr></table>
<div class="sbox"><b>📌 프로젝트 초과 시 감사인 접근:</b><br>
• <b>원인 파악 먼저</b> → 권고는 그 다음 (성급한 결론 금지)<br>
• 비즈니스 케이스 검토 = 프로젝트 타당성 재확인<br>
• PM 프로세스 검토 = 초과 기여 요인 분석</div>`,
reference:"CRM Chapter 3: IS Development — Project Management & Audit",
keyConcepts:[
"프로젝트 초과 감사|원인 파악(비즈니스 케이스+PM 검토) 우선 — 성급한 결론·권고 금지",
"감사인 원칙|효과적 PM·건전한 거버넌스에서도 초과 발생 가능 — 원인 분석이 먼저",
"비즈니스 케이스 검토|프로젝트 타당성·목표 대비 현 상태 평가"
]
},
{
id:166, domain:"3", ks:"3B4",
question:`애플리케이션 개발 중 품질 보증(QA) 테스트와 사용자 수용 테스트(UAT)가 결합되었습니다. 프로젝트를 검토하는 IS 감사인의 주요 우려사항은?<br><small style="color:#94a3b8">During the development of an application, quality assurance (QA) testing and user acceptance testing (UAT) were combined. The MAJOR concern for an IS auditor reviewing the project is:</small>`,
options:[
"유지보수 증가<br><small style='color:#94a3b8'>increased maintenance.</small>",
"테스트의 부적절한 문서화<br><small style='color:#94a3b8'>improper documentation of testing.</small>",
"프로그램의 부적절한 수용<br><small style='color:#94a3b8'>improper acceptance of a program.</small>",
"문제 해결의 지연<br><small style='color:#94a3b8'>delays in problem resolution.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 프로그램의 부적절한 수용</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 유지보수 증가</td><td style="padding:8px;border:1px solid #ddd">테스트 방법이 유지보수에 직접 영향 없음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 문서화 부적절</td><td style="padding:8px;border:1px solid #ddd">QA+UAT 결합이 문서화에 영향 없음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 부적절한 수용 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>사용자가 QA 표준 미충족 프로그램도 수용 압력 가할 수 있음</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 문제 해결 지연</td><td style="padding:8px;border:1px solid #ddd">테스트 방법이 문제 해결 일정에 영향 없음</td></tr></table>
<div class="sbox"><b>⚠ QA + UAT 결합 리스크:</b><br>
• 사용자 요구 충족 → QA 표준 미달이어도 <b>수용 압력</b> 발생<br>
• QA = 품질 표준 충족 / UAT = 사용자 요구 충족 → <b>목적이 다른 테스트</b><br>
• 결합 시 QA 기준이 사용자 만족에 밀릴 위험</div>`,
reference:"CRM Chapter 3: IS Development — Testing & Quality Assurance",
keyConcepts:[
"QA+UAT 결합 리스크|사용자가 자신의 요구 충족 시 QA 표준 미달도 수용 압력 가능",
"QA vs UAT 목적|QA = 품질 표준 충족, UAT = 사용자 비즈니스 요구 충족 (서로 다른 목적)",
"테스트 분리 원칙|QA와 UAT는 별도 수행해야 각 목적에 맞는 독립적 판단 가능"
]
},
{
id:167, domain:"3", ks:"3B4",
question:`주요 애플리케이션 구현 2개월 후, 프로젝트가 잘 진행되었다고 가정하는 경영진이 IS 감사인에게 완료된 프로젝트 검토를 요청합니다. IS 감사인의 주요 초점은?<br><small style="color:#94a3b8">Two months after a major application implementation, management, which assumes that the project went well, requests that an IS auditor perform a review. The IS auditor's PRIMARY focus should be to:</small>`,
options:[
"시스템에 대한 사용자 피드백이 문서화되었는지 확인<br><small style='color:#94a3b8'>determine whether user feedback on the system has been documented.</small>",
"계획된 비용 편익이 측정·분석·보고되고 있는지 평가<br><small style='color:#94a3b8'>assess whether the planned cost benefits are being measured, analyzed and reported.</small>",
"시스템에 내장된 통제가 설계대로 작동하는지 검토<br><small style='color:#94a3b8'>review controls built into the system to assure that they are operating as designed.</small>",
"후속 프로그램 변경 요청을 검토<br><small style='color:#94a3b8'>review subsequent program change requests.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 시스템 내장 통제가 설계대로 작동하는지 검토</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 사용자 피드백 문서화</td><td style="padding:8px;border:1px solid #ddd">확인 필요하나 최우선 영역 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 비용 편익 측정</td><td style="padding:8px;border:1px solid #ddd">프로젝트 효과성 평가이나 통제보다 부차적</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 통제 작동 확인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>경영진이 "잘 됐다" 가정 → 감사인은 통제 실제 작동 여부 검증</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 변경 요청 검토</td><td style="padding:8px;border:1px solid #ddd">문제 인식 시 더 중요 — 현재는 "잘 됐다" 가정</td></tr></table>
<div class="sbox"><b>🔍 Post-Implementation Review 핵심:</b><br>
• 경영진 가정 ≠ 사실 → 감사인은 <b>통제가 설계대로 작동하는지 독립 검증</b><br>
• 구현 후 운영 환경의 <b>적절한 통제</b>가 최우선 관심사<br>
• 비용 편익·사용자 피드백·변경 요청은 부차적</div>`,
reference:"CRM Chapter 3: IS Development — Post-Implementation Review",
keyConcepts:[
"Post-Implementation 감사 초점|시스템 내장 통제가 설계대로 작동하는지 검증이 최우선",
"경영진 가정 vs 감사|경영진이 성공 가정해도 감사인은 독립적으로 통제 검증",
"통제 우선순위|통제 작동 확인 > 비용 편익 > 사용자 피드백 > 변경 요청"
]
},
{
id:168, domain:"3", ks:"3B4",
question:`IS 감사인이 프로젝트가 목표 날짜를 달성할 수 있는지 합리적 확신을 얻기 위해 가장 유용한 기법은?<br><small style="color:#94a3b8">Which of the following techniques BEST helps an IS auditor gain reasonable assurance that a project can meet its target date?</small>`,
options:[
"상태 보고서의 완료 비율과 예상 소요 시간을 기반으로 한 실제 종료일 추정<br><small style='color:#94a3b8'>Estimation of the actual end date based on the completion percentages and estimated time to complete, taken from status reports</small>",
"프로젝트 산출물 완료에 참여한 경험 있는 관리자·직원 인터뷰를 통한 목표일 확인<br><small style='color:#94a3b8'>Confirmation of the target date based on interviews with experienced managers and staff involved in the completion of the project deliverables</small>",
"완료된 작업 패키지와 현재 자원을 기반으로 한 전체 종료일 외삽(Extrapolation)<br><small style='color:#94a3b8'>Extrapolation of the overall end date based on completed work packages and current resources</small>",
"현재 자원과 남은 프로젝트 예산을 기반으로 한 예상 종료일 계산<br><small style='color:#94a3b8'>Calculation of the expected end date based on current resources and remaining available project budget</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 완료된 작업 패키지 + 현재 자원 기반 외삽</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 상태 보고서 기반 추정</td><td style="padding:8px;border:1px solid #ddd">상태 보고서 데이터 정확성 보장 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 인터뷰 기반 확인</td><td style="padding:8px;border:1px solid #ddd">유용하나 참여자 편향 — 80:20 법칙(완료율 과대추정)</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 완료 작업 기반 외삽 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>실제 결과 직접 관찰 — 추정·인터뷰보다 객관적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 잔여 예산 기반 계산</td><td style="padding:8px;border:1px solid #ddd">프로젝트 진행 속도를 고려하지 않음</td></tr></table>
<div class="sbox"><b>📐 프로젝트 일정 검증 원칙:</b><br>
• <b>직접 관찰(실제 완료 결과)</b> > 추정/정성적 정보(보고서·인터뷰)<br>
• 80:20 법칙: PM·직원은 완료율 과대추정 + 소요 시간 과소추정 경향<br>
• 외삽(Extrapolation) = 실제 완료 작업 기반 → 가장 객관적</div>`,
reference:"CRM Chapter 3: IS Development — Project Progress Monitoring",
keyConcepts:[
"일정 검증 최적 기법|완료된 작업 패키지 기반 외삽(Extrapolation) — 실제 결과 직접 관찰",
"80:20 법칙|PM·직원은 완료율 과대추정, 소요 시간 과소추정 경향",
"증거 계층|직접 관찰 > 상태 보고서 > 인터뷰 > 예산 기반 계산"
]
},
{
id:169, domain:"3", ks:"3B4",
question:`구현 후 검토(Post-Implementation Review) 동안 수행해야 하는 활동은?<br><small style="color:#94a3b8">During a postimplementation review, which of the following activities should be performed?</small>`,
options:[
"사용자 수용 테스트(UAT)<br><small style='color:#94a3b8'>User acceptance testing (UAT)</small>",
"투자 수익률(ROI) 분석<br><small style='color:#94a3b8'>Return on investment (ROI) analysis</small>",
"감사 추적(Audit Trail) 활성화<br><small style='color:#94a3b8'>Activation of audit trails</small>",
"엔터프라이즈 아키텍처(EA) 다이어그램 업데이트<br><small style='color:#94a3b8'>Updates of the state of enterprise architecture (EA) diagrams</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. ROI 분석</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">시점/평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. UAT</td><td style="padding:8px;border:1px solid #ddd">구현 전(개발 단계) 수행 — 구현 후가 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. ROI 분석 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>구현 후 비즈니스 케이스 편익 달성·가치 창출 여부 재검증</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. Audit Trail 활성화</td><td style="padding:8px;border:1px solid #ddd">구현 시 활성화 — Post-impl Review 시점이 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. EA 다이어그램 업데이트</td><td style="padding:8px;border:1px solid #ddd">좋은 관행이나 Post-impl Review의 정식 활동 아님</td></tr></table>
<div class="sbox"><b>📊 Post-Implementation Review 활동:</b><br>
• <b>ROI/비용-편익 재분석</b> = 원래 비즈니스 케이스 편익 달성 확인<br>
• UAT = 구현 <b>전</b> / Audit Trail 활성화 = 구현 <b>시</b><br>
• Post-impl = 구현 <b>후</b> 가치·통제·목표 달성 검증</div>`,
reference:"CRM Chapter 3: IS Development — Post-Implementation Review",
keyConcepts:[
"Post-Implementation Review 활동|ROI/비용-편익 재분석 — 비즈니스 케이스 편익 달성 확인",
"시점 구분|UAT = 구현 전, Audit Trail 활성화 = 구현 시, ROI 분석 = 구현 후",
"Post-impl 목적|비즈니스 가치 창출 + 통제 작동 + 목표 달성 여부 검증"
]
},

{
id:170, domain:"4", ks:"4A1",
question:`데이터센터의 예방 유지보수 프로세스를 검토할 때, 모든 핵심 컴퓨팅·전력·냉각 시스템에 적절한 유지보수가 수행되고 있음을 보장하기 위해 IS 감사인에게 가장 중요한 관행은?<br><small style="color:#94a3b8">When reviewing an enterprise's preventive maintenance process for systems at a data center, what is the MOST important practice that should be in place for an IS auditor to ensure adequate maintenance is being performed on all critical computing, power and cooling systems?</small>`,
options:[
"모든 서비스 인력에 대해 적절한 신원 조회가 수행된다.<br><small style='color:#94a3b8'>Proper background checks on all service personnel are conducted.</small>",
"서비스 인력은 작업 수행 시 항상 에스코트된다.<br><small style='color:#94a3b8'>Service personnel are escorted at all times when performing their work.</small>",
"유지보수는 비핵심 처리 시간에 예약된다.<br><small style='color:#94a3b8'>Maintenance is scheduled during noncritical processing times.</small>",
"유지보수 수행 여부가 독립적으로 검증된다.<br><small style='color:#94a3b8'>Verification of maintenance being performed is done independently.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 독립적 검증</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 신원 조회</td><td style="padding:8px;border:1px solid #ddd">서비스 제공업체 책임 — 고객이 아닌 업체가 수행</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 에스코트</td><td style="padding:8px;border:1px solid #ddd">일반적 관행이나, 유지보수 품질 보장과는 별개</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 비핵심 시간 예약</td><td style="padding:8px;border:1px solid #ddd">중요하지만 유지보수 "수행 여부" 자체를 보장하지 않음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 독립적 검증 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>문서화된 유지보수 활동의 실효성 확인 + 갭/결함 탐지</b></td></tr></table>
<div class="sbox"><b>🏢 예방 유지보수 감사 포인트:</b><br>
• <b>독립적 검증</b> = 유지보수가 실제로 수행되었는지 제3자가 확인<br>
• 에스코트·신원 조회 = 보안 관행 (유지보수 품질과 별개)<br>
• 비핵심 시간 예약 = 운영 리스크 감소 (유지보수 수행 보장 아님)</div>`,
reference:"CRM Chapter 4: IS Operations — Preventive Maintenance",
keyConcepts:[
"예방 유지보수 검증|독립적 제3자 검증으로 유지보수 실효성 확인 + 갭/결함 탐지",
"에스코트 vs 검증|에스코트=보안 관행, 독립 검증=유지보수 품질 보장 (목적이 다름)",
"IS 감사인 관점|'수행되었는가'보다 '수행이 검증되었는가'가 더 중요"
]
},

{
id:171, domain:"4", ks:"4A1",
question:`다음 중 네트워크의 서로 다른 세그먼트 간 비인가 트래픽을 방지하기 위한 보안 수단으로 주로 설정되는 네트워크 구성요소는?<br><small style="color:#94a3b8">Which of the following network components is PRIMARILY set up to serve as a security measure by preventing unauthorized traffic between different segments of the network?</small>`,
options:[
"방화벽(Firewalls)<br><small style='color:#94a3b8'>Firewalls</small>",
"라우터(Routers)<br><small style='color:#94a3b8'>Routers</small>",
"레이어 2 스위치(Layer 2 switches)<br><small style='color:#94a3b8'>Layer 2 switches</small>",
"가상 근거리 통신망(VLANs)<br><small style='color:#94a3b8'>Virtual local area networks (VLANs)</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 방화벽(Firewalls)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">구성요소</th><th style="padding:8px;border:1px solid #ddd">기능</th><th style="padding:8px;border:1px solid #ddd">보안 목적?</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>Firewall ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>네트워크 간 비인가 접근 차단</b></td><td style="padding:8px;border:1px solid #ddd"><b>✅ 1차 보안 도구</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Router</td><td style="padding:8px;border:1px solid #ddd">패킷 필터링 가능 (소스 주소 등)</td><td style="padding:8px;border:1px solid #ddd">❌ 보안이 주 목적 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">L2 Switch</td><td style="padding:8px;border:1px solid #ddd">MAC 주소 기반 트래픽 분리</td><td style="padding:8px;border:1px solid #ddd">❌ 인가/비인가 판단 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">VLAN</td><td style="padding:8px;border:1px solid #ddd">같은 물리 LAN 내 포트 간 트래픽 통제</td><td style="padding:8px;border:1px solid #ddd">❌ 인가/비인가 구분 불가</td></tr></table>
<div class="sbox"><b>🌐 네트워크 보안 핵심:</b><br>
• <b>Firewall</b> = "비인가 트래픽 차단" 키워드 → 정답<br>
• Router = 라우팅이 주 기능, 필터링은 부가<br>
• L2 Switch/VLAN = 트래픽 분리·통제, 보안 판단(인가 여부) 불가</div>`,
reference:"CRM Chapter 4: IS Operations — Network Security",
keyConcepts:[
"Firewall|네트워크 세그먼트 간 비인가 접근 차단 — 1차 보안 도구",
"Router vs Firewall|Router=패킷 필터링 가능하나 보안 목적 아님, Firewall=보안 전용",
"L2 Switch vs VLAN|둘 다 트래픽 분리/통제하지만 인가·비인가 트래픽 구분 불가"
]
},

{
id:172, domain:"4", ks:"4A1",
question:`다음 중 서버 운영 체제의 무결성을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Which of the following BEST ensures the integrity of a server's operating system?</small>`,
options:[
"서버를 안전한 장소에 보호한다.<br><small style='color:#94a3b8'>Protecting the server in a secure location</small>",
"부트 암호를 설정한다.<br><small style='color:#94a3b8'>Setting a boot password</small>",
"서버 구성을 강화(Hardening)한다.<br><small style='color:#94a3b8'>Hardening the server configuration</small>",
"활동 로깅을 구현한다.<br><small style='color:#94a3b8'>Implementing activity logging</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 서버 구성 강화(Hardening)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th><th style="padding:8px;border:1px solid #ddd">통제 유형</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 안전한 장소</td><td style="padding:8px;border:1px solid #ddd">물리 보안 — 논리적 취약점 악용 방지 불가</td><td style="padding:8px;border:1px solid #ddd">물리적 예방</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 부트 암호</td><td style="padding:8px;border:1px solid #ddd">부팅 보호 — 논리적 취약점 악용 방지 불가</td><td style="padding:8px;border:1px solid #ddd">물리적 예방</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. Hardening ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>패치+권한 정의+불필요 서비스 제거 → OS 무결성 보장</b></td><td style="padding:8px;border:1px solid #ddd"><b>논리적 예방</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 활동 로깅</td><td style="padding:8px;border:1px solid #ddd">탐지 통제 — 특권 접근자가 로그 수정/비활성화 가능</td><td style="padding:8px;border:1px solid #ddd">논리적 탐지</td></tr></table>
<div class="sbox"><b>🔒 서버 Hardening 구성요소:</b><br>
• 최신 보안 패치 설치<br>
• 사용자/관리자 접근 권한 적절히 정의<br>
• 안전하지 않은 옵션 비활성화<br>
• 미사용 서비스 제거<br>
→ 비특권 사용자의 <b>특권 명령 실행 방지</b> = OS 무결성 보호</div>`,
reference:"CRM Chapter 4: IS Operations — Server Hardening",
keyConcepts:[
"Hardening|최신 패치+접근 권한 정의+불필요 서비스 제거+안전하지 않은 옵션 비활성화 → OS 무결성",
"물리 vs 논리 통제|물리 보안(장소·부트 암호)은 논리적 취약점 악용 방지 불가",
"로깅의 한계|탐지 통제(예방 아님) + 특권 접근자가 로그 수정·비활성화 가능"
]
},

{
id:173, domain:"4", ks:"4A1",
question:`하드웨어 유지보수 프로그램을 검토할 때, IS 감사인은 다음 중 무엇을 평가해야 하는가?<br><small style="color:#94a3b8">When reviewing a hardware maintenance program, an IS auditor should assess whether:</small>`,
options:[
"모든 비계획 유지보수의 일정이 유지되고 있다.<br><small style='color:#94a3b8'>The schedule of all unplanned maintenance is maintained.</small>",
"이력 추세와 일치하고 있다.<br><small style='color:#94a3b8'>It is in line with historical trends.</small>",
"IS 운영위원회의 승인을 받았다.<br><small style='color:#94a3b8'>It has been approved by the IS steering committee.</small>",
"벤더 사양에 대해 검증되었다.<br><small style='color:#94a3b8'>The program is validated against vendor specifications.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 벤더 사양 대비 검증</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 비계획 유지보수 일정</td><td style="padding:8px;border:1px solid #ddd">비계획(Unplanned) 유지보수는 예약 자체가 불가능 — 모순</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 이력 추세</td><td style="padding:8px;border:1px solid #ddd">과거 추세와 반드시 일치할 필요 없음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 운영위원회 승인</td><td style="padding:8px;border:1px solid #ddd">유지보수 일정은 일반적으로 운영위원회 승인 대상 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 벤더 사양 검증 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>벤더 제공 사양 기준으로 유지보수 적정성 확인</b></td></tr></table>
<div class="sbox"><b>🔧 HW 유지보수 감사 핵심:</b><br>
• 유지보수 일정 = <b>벤더 사양(Vendor Specifications)</b> 기준으로 검증<br>
• 복잡성·성능 워크로드에 따라 유지보수 요구사항이 다름<br>
• 비계획 유지보수 ≠ 예약 가능 / 이력 추세 = 참고 사항일 뿐</div>`,
reference:"CRM Chapter 4: IS Operations — Hardware Maintenance",
keyConcepts:[
"HW 유지보수 검증|벤더 사양(Vendor Specifications) 대비 유지보수 적정성 확인",
"비계획 유지보수|Unplanned maintenance는 예약(schedule) 자체가 불가능 — 함정 선택지",
"유지보수 승인|운영위원회가 아닌 운영팀 수준에서 관리"
]
},

{
id:174, domain:"4", ks:"4A1",
question:`두 시스템 간 정보 교환을 위해 웹 서비스를 사용하는 가장 큰 장점은?<br><small style="color:#94a3b8">The GREATEST advantage of using web services for the exchange of information between two systems is:</small>`,
options:[
"안전한 통신<br><small style='color:#94a3b8'>Secure communication</small>",
"향상된 성능<br><small style='color:#94a3b8'>Improved performance</small>",
"효율적인 인터페이싱<br><small style='color:#94a3b8'>Efficient interfacing</small>",
"강화된 문서화<br><small style='color:#94a3b8'>Enhanced documentation</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 효율적인 인터페이싱</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 안전한 통신</td><td style="padding:8px;border:1px solid #ddd">웹 서비스 사용이 반드시 보안을 향상시키지 않음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 향상된 성능</td><td style="padding:8px;border:1px solid #ddd">성능 향상을 보장하지 않음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 효율적 인터페이싱 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>OS·언어 무관 상호운용성(Interoperability) 제공</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 강화된 문서화</td><td style="padding:8px;border:1px solid #ddd">문서화 측면의 이점 없음</td></tr></table>
<div class="sbox"><b>🌐 Web Services 핵심:</b><br>
• 최대 장점 = <b>상호운용성(Interoperability)</b><br>
• OS, 프로그래밍 언어에 <b>관계없이</b> 시스템 간 정보 교환 가능<br>
• 보안·성능·문서화는 웹 서비스 고유 장점이 아님</div>`,
reference:"CRM Chapter 4: IS Operations — Web Services",
keyConcepts:[
"Web Services 장점|효율적 인터페이싱 — OS·프로그래밍 언어 무관 상호운용성(Interoperability)",
"Web Services ≠ 보안|웹 서비스 자체가 보안·성능·문서화를 보장하지 않음",
"Interoperability|이기종 시스템 간 표준화된 정보 교환 가능"
]
},

{
id:175, domain:"4", ks:"4A1",
question:`운영 체제(OS) 패치를 운영 환경에 적용할 때 가장 중요한 것은?<br><small style="color:#94a3b8">Which of the following is MOST important when an operating system (OS) patch is to be applied to a production environment?</small>`,
options:[
"개발자에 의한 성공적인 회귀 테스트<br><small style='color:#94a3b8'>Successful regression testing by the developer</small>",
"정보 자산 소유자의 승인<br><small style='color:#94a3b8'>Approval from the information asset owner</small>",
"보안 담당자의 승인<br><small style='color:#94a3b8'>Approval from the security officer</small>",
"대체 사이트에 패치 설치<br><small style='color:#94a3b8'>Patch installation at alternate sites</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 정보 자산 소유자 승인</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 회귀 테스트</td><td style="padding:8px;border:1px solid #ddd">중요하나, OS 벤더가 이미 테스트 후 릴리스 (조직은 시스템 테스트 수행)</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 자산 소유자 승인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>운영 시스템 변경 → 비즈니스 중단 방지를 위해 소유자 승인 최우선</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 보안 담당자 승인</td><td style="padding:8px;border:1px solid #ddd">모든 OS 패치에 대해 보안 담당자 승인 불필요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 대체 사이트 설치</td><td style="padding:8px;border:1px solid #ddd">일관된 배포 필요하나, 소유자 승인이 더 중요</td></tr></table>
<div class="sbox"><b>🔄 패치 관리 핵심:</b><br>
• 운영 환경 변경 = <b>정보 자산 소유자(Information Asset Owner)</b> 승인 최우선<br>
• 벤더 테스트 완료 전제 → 조직은 <b>시스템 테스트</b>로 영향 확인<br>
• 보안 담당자 = 모든 패치 승인 대상 아님 (보안 관련 패치만 관여)</div>`,
reference:"CRM Chapter 4: IS Operations — Patch Management",
keyConcepts:[
"패치 운영 적용|정보 자산 소유자(Information Asset Owner) 승인이 최우선 — 비즈니스 중단 방지",
"벤더 vs 조직 테스트|벤더=릴리스 전 테스트 완료 전제, 조직=시스템 테스트로 환경 영향 확인",
"보안 담당자 역할|모든 OS 패치 승인 불필요 — 보안 관련 패치에만 관여"
]
},

{
id:176, domain:"4", ks:"4A1",
question:`자동화 제조 시설의 분산 제어 SCADA 시스템에 대한 리스크 기반 감사를 수행할 때, 감사인의 최우선 과업은?<br><small style="color:#94a3b8">An IS auditor has been tasked by an automated manufacturing facility for the risk-based audit of its distributed control SCADA systems. Which of the following should be the PRIMARY task for the auditor?</small>`,
options:[
"통신 아키텍처 및 연결 인터페이스 평가<br><small style='color:#94a3b8'>Evaluation of communication architecture and connectivity interfaces</small>",
"모니터링 터미널, 센서 및 액추에이터의 기능 평가<br><small style='color:#94a3b8'>Evaluation of functioning of monitoring terminals, sensors and actuators</small>",
"SCADA 시스템의 총소유비용(TCO) 평가<br><small style='color:#94a3b8'>Assessment of total cost of ownership (TCO) for the SCADA systems</small>",
"엔터프라이즈 엔지니어를 위한 자동화 통제의 사용성 평가<br><small style='color:#94a3b8'>Evaluation of usability of automated controls for enterprise engineers</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 통신 아키텍처 및 연결 인터페이스 평가</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 통신 아키텍처 평가 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>인터넷·USB 인터페이스 → 악성코드 노출 리스크 (Stuxnet 사례)</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 센서/액추에이터 기능</td><td style="padding:8px;border:1px solid #ddd">리스크 기반 감사에서 통신보다 중요도 낮음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. TCO 평가</td><td style="padding:8px;border:1px solid #ddd">비용 효율성은 악성코드 노출 대비 하위 우선순위</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 사용성 평가</td><td style="padding:8px;border:1px solid #ddd">리스크 기반 감사에서 가장 낮은 우선순위</td></tr></table>
<div class="sbox"><b>⚙️ SCADA 리스크 기반 감사:</b><br>
• 최대 리스크 = <b>통신 채널·연결 인터페이스</b> 통한 악성코드 침투<br>
• Stuxnet 사례: USB 통해 에어갭(Air-gapped) 시스템도 감염<br>
• 센서·TCO·사용성은 보안 리스크 대비 하위 우선순위</div>`,
reference:"CRM Chapter 4: IS Operations — SCADA Systems",
keyConcepts:[
"SCADA 감사 최우선|통신 아키텍처·연결 인터페이스 — 악성코드 노출 리스크가 최대",
"Stuxnet|USB 통해 에어갭 SCADA 시스템 감염 — 물리적 격리만으로 안전 보장 불가",
"리스크 기반 우선순위|통신 > 센서/모니터 > TCO > 사용성"
]
},

{
id:177, domain:"4", ks:"4A1",
question:`운영 체제(OS)의 보안 구성을 검사하는 IS 감사인은 무엇을 검토해야 하는가?<br><small style="color:#94a3b8">An IS auditor examining the security configuration of an operating system (OS) should review the:</small>`,
options:[
"트랜잭션 로그<br><small style='color:#94a3b8'>Transaction logs</small>",
"인가 테이블<br><small style='color:#94a3b8'>Authorization tables</small>",
"파라미터 설정<br><small style='color:#94a3b8'>Parameter settings</small>",
"라우팅 테이블<br><small style='color:#94a3b8'>Routing tables</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 파라미터 설정(Parameter Settings)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 트랜잭션 로그</td><td style="padding:8px;border:1px solid #ddd">애플리케이션/인터페이스 수준 추적 — OS 감사 주 증거 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 인가 테이블</td><td style="padding:8px;border:1px solid #ddd">논리적 접근 통제 검증용 — OS 통제 기능 검토에 부적합</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 파라미터 설정 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>시스템 실행 방식 결정 — 워크로드·통제 환경에 적합해야 함</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 라우팅 테이블</td><td style="padding:8px;border:1px solid #ddd">OS 정보 미포함 — 통제 평가에 도움 안 됨</td></tr></table>
<div class="sbox"><b>⚙️ OS 파라미터 설정 감사:</b><br>
• 표준 SW를 다양한 환경에 맞게 <b>커스터마이징</b>하는 구성 값<br>
• 부적절한 설정 → <b>미탐지 오류, 데이터 손상, 비인가 접근, 부정확한 로깅</b><br>
• 조직의 워크로드·통제 환경에 적합한지 검증 필수</div>`,
reference:"CRM Chapter 4: IS Operations — OS Configuration",
keyConcepts:[
"OS 보안 구성 감사|파라미터 설정(Parameter Settings) — 시스템 실행 방식·통제 수준 결정",
"부적절한 파라미터 리스크|미탐지 오류·데이터 손상·비인가 접근·부정확한 시스템 사용 로깅",
"구분|트랜잭션 로그=앱 수준, 인가 테이블=접근 통제, 라우팅 테이블=네트워크(OS 무관)"
]
},

{
id:178, domain:"4", ks:"4A1",
question:`근거리 통신망(LAN) 구현을 검토할 때, IS 감사인이 가장 먼저 검토해야 하는 것은?<br><small style="color:#94a3b8">When reviewing the implementation of a local area network, an IS auditor should FIRST review the:</small>`,
options:[
"노드 목록<br><small style='color:#94a3b8'>Node list</small>",
"수용 테스트 보고서<br><small style='color:#94a3b8'>Acceptance test report</small>",
"네트워크 다이어그램<br><small style='color:#94a3b8'>Network diagram</small>",
"사용자 목록<br><small style='color:#94a3b8'>Users list</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 네트워크 다이어그램</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">순서</th><th style="padding:8px;border:1px solid #ddd">검토 항목</th><th style="padding:8px;border:1px solid #ddd">목적</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>1st ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>네트워크 다이어그램</b></td><td style="padding:8px;border:1px solid #ddd"><b>리스크·단일 장애점(SPOF) 식별</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">2nd</td><td style="padding:8px;border:1px solid #ddd">노드 목록</td><td style="padding:8px;border:1px solid #ddd">다이어그램 대비 노드 검증</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">3rd</td><td style="padding:8px;border:1px solid #ddd">수용 테스트 보고서</td><td style="padding:8px;border:1px solid #ddd">테스트 결과 확인</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">4th</td><td style="padding:8px;border:1px solid #ddd">사용자 목록</td><td style="padding:8px;border:1px solid #ddd">접근 권한 검토</td></tr></table>
<div class="sbox"><b>🌐 LAN 구현 검토 순서:</b><br>
• <b>네트워크 다이어그램</b> = 전체 구조 파악 → 리스크·SPOF 식별이 최우선<br>
• 전체 그림(Big Picture)을 먼저 이해한 후 세부 검증 진행<br>
• CISA 원칙: <b>"FIRST" = 가장 기본적·포괄적인 것부터</b></div>`,
reference:"CRM Chapter 4: IS Operations — LAN Implementation Review",
keyConcepts:[
"LAN 검토 순서|네트워크 다이어그램 → 노드 목록 → 수용 테스트 → 사용자 목록",
"네트워크 다이어그램|전체 구조 파악 + 리스크·단일 장애점(SPOF) 식별 = FIRST",
"CISA FIRST 원칙|전체 그림(Big Picture)부터 시작 → 세부 검증으로 진행"
]
},

{
id:179, domain:"4", ks:"4A2",
question:`헬프데스크 활동 검토 시 주요 우려 사항은?<br><small style="color:#94a3b8">Which of the following is a MAJOR concern during a review of help desk activities?</small>`,
options:[
"헬프데스크 팀이 특정 콜을 해결하지 못했다.<br><small style='color:#94a3b8'>The help desk team could not resolve certain calls.</small>",
"헬프데스크 팀에 전용 회선이 할당되지 않았다.<br><small style='color:#94a3b8'>A dedicated line is not assigned to the help desk team.</small>",
"해결된 인시던트가 최종 사용자 확인 없이 종료되었다.<br><small style='color:#94a3b8'>Resolved incidents are closed without reference to end users.</small>",
"헬프데스크 인스턴트 메시징이 6개월 이상 중단되었다.<br><small style='color:#94a3b8'>The help desk instant messaging has been down for more than six months.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 최종 사용자 확인 없이 인시던트 종료</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 미해결 콜</td><td style="padding:8px;border:1px solid #ddd">예상 가능 — 에스컬레이션 절차로 처리</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 전용 회선 없음</td><td style="padding:8px;border:1px solid #ddd">이상적이나, 일방적 종결만큼 심각하지 않음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 사용자 확인 없이 종료 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>서비스 지향 조직 → 사용자 통보 후 종결 필수</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 메신저 6개월 중단</td><td style="padding:8px;border:1px solid #ddd">부가 기능 — 콜 가능하면 주요 우려 아님</td></tr></table>
<div class="sbox"><b>📞 헬프데스크 핵심 원칙:</b><br>
• 헬프데스크 = <b>서비스 지향(Service-oriented)</b> 조직<br>
• 인시던트 종결 전 반드시 <b>최종 사용자에게 통보·확인</b><br>
• 기술팀이 일방적으로 종결 = <b>주요 통제 위반</b></div>`,
reference:"CRM Chapter 4: IS Operations — Help Desk Management",
keyConcepts:[
"헬프데스크 인시던트 종결|최종 사용자 확인·통보 후 종결 필수 — 일방적 종결은 주요 우려",
"미해결 콜 처리|에스컬레이션 절차(Problem Escalation)로 상위 레벨에 전달",
"헬프데스크 본질|서비스 지향 조직 — 사용자 만족이 핵심 목표"
]
},

{
id:180, domain:"4", ks:"4A2",
question:`경영진이 달리 진술했음에도, IS 감사인이 조직이 라이선스 없는 소프트웨어를 사용하고 있다고 믿을 이유가 있는 경우 가장 먼저 해야 할 것은?<br><small style="color:#94a3b8">Although management has stated otherwise, an IS auditor has reasons to believe that the organization is using software that is not licensed. In this situation, the IS auditor should FIRST:</small>`,
options:[
"경영진의 진술을 감사 보고서에 포함한다.<br><small style='color:#94a3b8'>Include the statement from management in the audit report.</small>",
"테스트를 통해 해당 소프트웨어가 사용 중인지 검증한다.<br><small style='color:#94a3b8'>Verify that the software is in use through testing.</small>",
"해당 사항을 감사 보고서에 포함한다.<br><small style='color:#94a3b8'>Include the item in the audit report.</small>",
"조직에 부정적 영향을 미칠 수 있으므로 고위 경영진과 논의한다.<br><small style='color:#94a3b8'>Discuss the issue with senior management because it could have a negative impact on the organization.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 테스트를 통해 사용 여부 검증</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 경영진 진술 포함</td><td style="padding:8px;border:1px solid #ddd">독립적 검증 없이 진술만 포함 = 불충분</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 테스트로 검증 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>충분한 증거 확보 후 보고서에 포함 — 독립적 검증 원칙</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 보고서에 포함</td><td style="padding:8px;border:1px solid #ddd">증거 없이 보고서에 포함 = 부적절</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 고위 경영진 논의</td><td style="padding:8px;border:1px solid #ddd">검증 후 수행 — 먼저 사실 확인 필요</td></tr></table>
<div class="sbox"><b>🔎 감사인 증거 수집 원칙:</b><br>
• 의심 사항 → <b>FIRST = 테스트로 독립적 검증</b><br>
• 경영진 진술(Management Representation)은 독립적으로 검증 불가 시 불충분<br>
• <b>충분한 증거 확보 → 보고서 포함 → 경영진 논의</b> 순서</div>`,
reference:"CRM Chapter 4: IS Operations — Software License Management",
keyConcepts:[
"비인가 SW 의심|FIRST = 테스트로 사용 여부 독립 검증 — 경영진 진술만으로 불충분",
"감사 증거 원칙|충분한 증거 확보 후 보고서 포함 (의심만으로 보고 부적절)",
"순서|검증(테스트) → 보고서 포함 → 경영진 논의"
]
},

{
id:181, domain:"4", ks:"4A2",
question:`다음 중 네트워크 정보를 모니터링하고 기록하는 네트워크 진단 도구는?<br><small style="color:#94a3b8">Which of the following is a network diagnostic tool that monitors and records network information?</small>`,
options:[
"온라인 모니터<br><small style='color:#94a3b8'>Online monitor</small>",
"다운타임 보고서<br><small style='color:#94a3b8'>Downtime report</small>",
"헬프데스크 보고서<br><small style='color:#94a3b8'>Help desk report</small>",
"프로토콜 분석기<br><small style='color:#94a3b8'>Protocol analyzer</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 프로토콜 분석기(Protocol Analyzer)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">도구/보고서</th><th style="padding:8px;border:1px solid #ddd">목적</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Online Monitor</td><td style="padding:8px;border:1px solid #ddd">통신 전송의 정확성·완전성 측정</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Downtime Report</td><td style="padding:8px;border:1px solid #ddd">통신 회선·회로의 가용성 추적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Help Desk Report</td><td style="padding:8px;border:1px solid #ddd">IS 운영 중 발생한 문제 보고</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>Protocol Analyzer ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>네트워크 패킷 모니터링·기록 — 진단 도구</b></td></tr></table>
<div class="sbox"><b>🌐 네트워크 모니터링 도구 구분:</b><br>
• <b>Protocol Analyzer</b> = 패킷 레벨 모니터링·기록 (네트워크 진단)<br>
• Online Monitor = 전송 품질 측정 (정확성·완전성)<br>
• Downtime Report = 가용성 추적 (회선·회로)<br>
• Help Desk Report = 운영 문제 기록 (인력 기반)</div>`,
reference:"CRM Chapter 4: IS Operations — Network Monitoring Tools",
keyConcepts:[
"Protocol Analyzer|네트워크 패킷 모니터링·기록하는 진단 도구 (링크에 연결하여 패킷 분석)",
"Online Monitor|통신 전송의 정확성·완전성 측정 (진단 도구 아님)",
"Downtime Report|통신 회선·회로의 가용성 추적"
]
},

{
id:182, domain:"4", ks:"4A2",
question:`소프트웨어 사용 및 라이선스 검토 중 다수의 PC에서 비인가 소프트웨어를 발견한 IS 감사인이 취해야 할 조치는?<br><small style="color:#94a3b8">An IS auditor conducting a review of software usage and licensing discovers that numerous PCs contain unauthorized software. Which of the following actions should the IS auditor take?</small>`,
options:[
"비인가 소프트웨어의 모든 사본을 삭제한다.<br><small style='color:#94a3b8'>Delete all copies of the unauthorized software.</small>",
"소프트웨어 라이선스 준수를 모니터링하는 자동화된 프로세스를 권고한다.<br><small style='color:#94a3b8'>Recommend an automated process to monitor for compliance with software licensing.</small>",
"비인가 소프트웨어 사용을 보고하고 재발 방지의 필요성을 알린다.<br><small style='color:#94a3b8'>Report the use of the unauthorized software and the need to prevent recurrence.</small>",
"최종 사용자에게 불법 소프트웨어 사용의 위험을 경고한다.<br><small style='color:#94a3b8'>Warn the end users about the risk of using illegal software.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 사용 보고 + 재발 방지 필요성 보고</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 직접 삭제</td><td style="padding:8px;border:1px solid #ddd">감사인 = 집행자(Enforcer) 역할 아님 — 직접 조치 부적절</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 자동화 모니터링 권고</td><td style="padding:8px;border:1px solid #ddd">탐지에 도움되나, 모든 경우에 최선의 솔루션은 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 보고 + 재발 방지 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>경영진에 중대 발견 사항 보고 → 조치는 경영진 책임</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 사용자 경고</td><td style="padding:8px;border:1px solid #ddd">사용자 리스크 고지는 감사인의 1차 책임이 아님</td></tr></table>
<div class="sbox"><b>🔎 감사인 역할 원칙:</b><br>
• 감사인 = <b>발견 + 보고 + 권고</b> (직접 실행·집행 X)<br>
• 중대 발견 사항 → <b>경영진에 보고</b> → 조치는 경영진 책임<br>
• SW 불법 복제 = 벌금·법적 노출 리스크 → 재발 방지 필수</div>`,
reference:"CRM Chapter 4: IS Operations — Software License Compliance",
keyConcepts:[
"비인가 SW 발견|감사인은 사용 보고 + 재발 방지 필요성 경영진에 보고",
"감사인 역할|발견+보고+권고 (직접 삭제·집행 = 독립성 위반)",
"SW 불법 복제 리스크|법적 노출·벌금 → 경영진이 리스크 제거 조치"
]
},

{
id:183, domain:"4", ks:"4A2",
question:`소프트웨어 개발 관행 평가 중, 클라이언트용 애플리케이션에 오픈소스 소프트웨어 컴포넌트가 사용된 것을 발견했다. 오픈소스 소프트웨어 사용에 대한 감사인의 가장 큰 우려는?<br><small style="color:#94a3b8">During an assessment of software development practices, an IS auditor finds that open-source software components were used in an application designed for a client. What is the GREATEST concern about the use of open-source software?</small>`,
options:[
"클라이언트가 오픈소스 소프트웨어 컴포넌트에 대해 비용을 지불하지 않았다.<br><small style='color:#94a3b8'>The client did not pay for the open-source software components.</small>",
"조직과 클라이언트가 오픈소스 소프트웨어 라이선스 조건을 준수해야 한다.<br><small style='color:#94a3b8'>The organization and client must comply with open-source software license terms.</small>",
"오픈소스 소프트웨어에는 보안 취약점이 있다.<br><small style='color:#94a3b8'>Open-source software has security vulnerabilities.</small>",
"오픈소스 소프트웨어는 상업적 사용에 신뢰할 수 없다.<br><small style='color:#94a3b8'>Open-source software is unreliable for commercial use.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 오픈소스 라이선스 조건 준수</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 비용 미지불</td><td style="padding:8px;border:1px solid #ddd">오픈소스 = 무료가 장점 — 비용은 우려 대상 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 라이선스 준수 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>Viral License → 완성 제품도 동일 권리 부여 의무 → 지적재산권·법적 리스크</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 보안 취약점</td><td style="padding:8px;border:1px solid #ddd">모든 SW에 해당 — SDLC 내 테스트로 해결, 라이선스보다 하위</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 상업적 신뢰성 부족</td><td style="padding:8px;border:1px solid #ddd">오픈소스 ≠ 품질 부족 — SDLC 테스트로 검증</td></tr></table>
<div class="sbox"><b>📜 오픈소스 라이선스 핵심:</b><br>
• <b>Viral License</b>(GPL 등) = 오픈소스 사용 시 완성 제품도 동일 권리 부여 의무<br>
• 영리 목적 판매 시 라이선스 위반 가능 → <b>지적재산권·법적 리스크</b><br>
• 보안·신뢰성 = 일반 SDLC 프로세스로 테스트 (오픈소스 고유 문제 아님)</div>`,
reference:"CRM Chapter 4: IS Operations — Open Source Software Licensing",
keyConcepts:[
"오픈소스 최대 우려|라이선스 조건 준수(License Compliance) — 지적재산권·법적 리스크",
"Viral License|GPL 등 — 오픈소스 사용 시 완성 제품도 동일 권리 부여 의무 (영리 판매 위반 가능)",
"오픈소스 ≠ 취약·불신|보안·신뢰성은 모든 SW 공통 — SDLC 테스트로 검증"
]
},

{
id:184, domain:"4", ks:"4A2",
question:`조직의 데스크톱 소프트웨어 준수를 검토할 때, IS 감사인이 가장 우려해야 하는 경우는 설치된 소프트웨어가:<br><small style="color:#94a3b8">When reviewing the desktop software compliance of an organization, the IS auditor should be MOST concerned if the installed software:</small>`,
options:[
"설치되었으나 IT 부서 기록에 문서화되지 않았다.<br><small style='color:#94a3b8'>Is installed, but not documented in the IT department records.</small>",
"적절한 교육을 받지 않은 사용자가 사용하고 있다.<br><small style='color:#94a3b8'>Is being used by users not properly trained in its use.</small>",
"승인된 소프트웨어 표준 문서에 나열되지 않았다.<br><small style='color:#94a3b8'>Is not listed in the approved software standards document.</small>",
"15일 내에 라이선스가 만료될 예정이다.<br><small style='color:#94a3b8'>Has a license that will expire in the next 15 days.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 승인 표준 목록에 없는 SW 설치</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. IT 기록 미문서화</td><td style="padding:8px;border:1px solid #ddd">중요하나, 미승인 SW 설치만큼 심각하지 않음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 미교육 사용자</td><td style="padding:8px;border:1px solid #ddd">일반적 상황 — 도움말·팁으로 학습 가능</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 승인 목록 미포함 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>정책 위반 = 보안·법적·재정 리스크 → 최대 우려</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 15일 내 라이선스 만료</td><td style="padding:8px;border:1px solid #ddd">갱신 프로세스 있으면 리스크 아님</td></tr></table>
<div class="sbox"><b>💻 SW 준수 검토 핵심:</b><br>
• <b>승인 표준 목록(Approved Software Standards)</b>에 없는 SW = 정책 위반<br>
• 보안 리스크(악성코드), 법적 리스크(라이선스 위반), 재정 리스크(벌금)<br>
• 정책 준수 여부 = SW 준수 검토의 <b>최우선 확인 사항</b></div>`,
reference:"CRM Chapter 4: IS Operations — Software Compliance",
keyConcepts:[
"SW 준수 최대 우려|승인 표준 목록에 없는 SW 설치 — 정책 위반(보안·법적·재정 리스크)",
"승인 SW 목록|허용된 SW를 표준 목록으로 관리 → 정책 준수 = 첫 번째 검토 사항",
"라이선스 만료|갱신 프로세스 존재 시 리스크 아님 — 미승인 SW보다 하위 우려"
]
},

{
id:185, domain:"4", ks:"4A2",
question:`일부 사용자가 개인 소프트웨어를 PC에 설치한 것을 발견했으나, 보안 정책에 이를 명시적으로 금지하는 내용이 없다. IS 감사인의 최선의 접근법은?<br><small style="color:#94a3b8">An IS auditor discovers that some users installed personal software on their PCs. This is not explicitly forbidden by the security policy. The BEST approach for an IS auditor is to recommend that the:</small>`,
options:[
"IT 부서가 비인가 소프트웨어 설치를 방지하는 통제 메커니즘을 구현한다.<br><small style='color:#94a3b8'>IT department implement control mechanisms to prevent unauthorized software installation.</small>",
"비인가 소프트웨어에 관한 구체적 문구를 포함하도록 보안 정책을 업데이트한다.<br><small style='color:#94a3b8'>Security policy be updated to include the specific language regarding unauthorized software.</small>",
"IT 부서가 비인가 소프트웨어의 다운로드를 금지한다.<br><small style='color:#94a3b8'>IT department prohibit the download of unauthorized software.</small>",
"사용자가 비표준 소프트웨어 설치 전에 IS 관리자의 승인을 받는다.<br><small style='color:#94a3b8'>Users obtain approval from an IS manager before installing nonstandard software.</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. 보안 정책 업데이트 권고</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. IT 통제 구현</td><td style="padding:8px;border:1px solid #ddd">정책 없이 기술 통제 구현 → 권한 근거 부재</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 정책 업데이트 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>정책 = 기술 통제의 권한 근거 → 먼저 정책 수립</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 다운로드 금지</td><td style="padding:8px;border:1px solid #ddd">불완전 — CD/USB 통한 설치 미해결</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. IS 관리자 승인</td><td style="padding:8px;border:1px solid #ddd">예외 처리 통제 — 예방 통제(정책) 없이는 비효과적</td></tr></table>
<div class="sbox"><b>📋 정책 우선 원칙:</b><br>
• <b>정책(Policy)</b> = 모든 통제의 권한 근거·출발점<br>
• 정책 부재 → IT 부서에 통제 구현 권한 없음<br>
• 순서: <b>정책 수립 → 기술 통제 구현 → 예외 처리 절차</b><br>
• 다운로드 차단만으론 CD·USB 경로 미해결</div>`,
reference:"CRM Chapter 4: IS Operations — Software Policy",
keyConcepts:[
"정책 우선 원칙|정책 = 기술 통제의 권한 근거 — 정책 먼저 수립 후 통제 구현",
"관리적 통제 약점|비인가 SW 관련 구체적 문구 부재 = 정책의 관리적 통제 약점",
"다운로드 차단 한계|CD·USB 등 물리 매체 경로 미해결 — 포괄적 정책이 필요"
]
},

{
id:186, domain:"4", ks:"4A3",
question:`작업 실행 로그를 컴퓨터 작업 스케줄과 비교하는 테스트를 수행할 때, IS 감사인에게 가장 큰 우려가 되는 관찰은?<br><small style="color:#94a3b8">An IS auditor has been assigned to conduct a test that compares job run logs to computer job schedules. Which of the following observations would be the GREATEST concern?</small>`,
options:[
"긴급 변경의 수가 증가하고 있다.<br><small style='color:#94a3b8'>There are a growing number of emergency changes.</small>",
"일부 작업이 정시에 완료되지 않은 사례가 있었다.<br><small style='color:#94a3b8'>There were instances when some jobs were not completed on time.</small>",
"일부 작업이 컴퓨터 운영자에 의해 오버라이드된 사례가 있었다.<br><small style='color:#94a3b8'>There were instances when some jobs were overridden by computer operators.</small>",
"예약된 작업만 실행되었다는 증거가 있다.<br><small style='color:#94a3b8'>Evidence shows that only scheduled jobs were run.</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. 운영자에 의한 작업 오버라이드</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 긴급 변경 증가</td><td style="padding:8px;border:1px solid #ddd">적절히 문서화되면 허용 — 프로세스의 일부</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 정시 미완료</td><td style="padding:8px;border:1px solid #ddd">조사 대상이나 통제 위반은 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 운영자 오버라이드 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비인가 데이터·프로그램 변경 가능 → 통제 우려 항상 심각</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 스케줄된 작업만 실행</td><td style="padding:8px;border:1px solid #ddd">정상 — 예외는 문서화되어야 하지만 위반 아님</td></tr></table>
<div class="sbox"><b>⏰ 작업 스케줄링 감사 핵심:</b><br>
• <b>운영자 오버라이드</b> = 비인가 변경 가능 → 항상 심각한 통제 우려<br>
• 긴급 변경 = 문서화 시 허용 가능<br>
• 작업 미완료 = 운영 이슈 (통제 위반 아님)<br>
• 스케줄 작업만 실행 = 정상 상태</div>`,
reference:"CRM Chapter 4: IS Operations — Job Scheduling",
keyConcepts:[
"운영자 오버라이드|작업 처리 오버라이드 → 비인가 데이터·프로그램 변경 가능 = 항상 심각한 통제 우려",
"긴급 변경|적절한 문서화가 있으면 프로세스의 일부로 허용",
"작업 로그 vs 스케줄|예약된 작업만 실행 + 예외 문서화 = 정상"
]
},

{
id:187, domain:"4", ks:"4A3",
question:`배치 트랜잭션 작업이 운영 환경에서 실패했으나, UAT에서는 문제가 없었다. 분석 결과 UAT 후 운영 배치 작업이 변조된 것으로 확인되었다. 이 리스크에 대한 완화 통제는?<br><small style="color:#94a3b8">A batch transaction job failed in production; however, the same job returned no issues during UAT. Analysis indicates it was altered after UAT. What control provides a mitigation for this risk?</small>`,
options:[
"회귀 테스트 케이스를 개선한다.<br><small style='color:#94a3b8'>Improve regression test cases.</small>",
"릴리스 후 제한된 기간 동안 감사 추적을 활성화한다.<br><small style='color:#94a3b8'>Activate audit trails for a limited period after release.</small>",
"애플리케이션 사용자 접근 검토를 수행한다.<br><small style='color:#94a3b8'>Conduct an application user access review.</small>",
"직무 분리(SoD) 정책을 구현한다.<br><small style='color:#94a3b8'>Implement a segregation/separation of duties (SoD) policy.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 직무 분리(SoD) 정책 구현</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 회귀 테스트 개선</td><td style="padding:8px;border:1px solid #ddd">테스트 품질 문제 아님 — 핵심은 개발자의 운영 접근</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 감사 추적 활성화</td><td style="padding:8px;border:1px solid #ddd">유용하나, 탐지 통제 — 근본 원인(운영 접근) 미해결</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 사용자 접근 검토</td><td style="padding:8px;border:1px solid #ddd">개발자의 코드 접근은 사용자 검토에 포함되지 않음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. SoD 정책 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>개발자 = 개발 환경만 접근, 운영 접근 차단 → 근본 원인 해결</b></td></tr></table>
<div class="sbox"><b>🔧 UAT 후 코드 변조 방지:</b><br>
• 근본 원인 = <b>개발자가 운영 환경에 접근</b> 가능<br>
• 해결 = <b>SoD</b> — 개발자는 개발 환경만, 운영 접근 차단<br>
• UAT 후 코드 수정 필요 시 → <b>개발 환경에서 다시 시작</b><br>
• 테스트 개선·감사 추적 = 근본 원인 해결 아님</div>`,
reference:"CRM Chapter 4: IS Operations — Segregation of Duties",
keyConcepts:[
"UAT 후 코드 변조|근본 원인 = 개발자의 운영 환경 접근 → SoD로 차단",
"SoD 원칙|개발자 = 개발 환경만 접근, 운영 배포 = 별도 담당자",
"UAT 후 수정 절차|운영에서 수정 X → 개발 환경에서 프로세스 재시작"
]
},

{
id:188, domain:"4", ks:"4A3",
question:`핵심 운영 서버가 벤더의 최신 보안 업데이트를 실행하고 있는지 검증하는 최선의 방법은?<br><small style="color:#94a3b8">Which of the following is the BEST method for an IS auditor to verify that critical production servers are running the latest security updates released by the vendor?</small>`,
options:[
"핵심 운영 서버에서 자동 업데이트가 활성화되어 있는지 확인한다.<br><small style='color:#94a3b8'>Ensure that automatic updates are enabled on critical production servers.</small>",
"운영 서버 샘플에서 패치가 적용되었는지 수동으로 확인한다.<br><small style='color:#94a3b8'>Verify manually that the patches are applied on a sample of production servers.</small>",
"핵심 운영 서버의 변경 관리 로그를 검토한다.<br><small style='color:#94a3b8'>Review the change management log for critical production servers.</small>",
"운영 서버의 보안 패치를 검증하는 자동화 도구를 실행한다.<br><small style='color:#94a3b8'>Run an automated tool to verify the security patches on production servers.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 자동화 도구 실행</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 자동 업데이트 활성화</td><td style="padding:8px;border:1px solid #ddd">패치 관리 방법일 뿐 — 모든 서버 적용 보장 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 수동 샘플 확인</td><td style="padding:8px;border:1px solid #ddd">비효율적 + 감사 리스크 큼 (시간 소모, 전수 불가)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 변경 관리 로그</td><td style="padding:8px;border:1px solid #ddd">최신 미반영 가능 — 실제 서버 상태와 불일치 리스크</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 자동화 도구 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>즉시 패치 적용·누락 현황 보고서 제공 — 가장 효과적</b></td></tr></table>
<div class="sbox"><b>🔄 패치 검증 방법 비교:</b><br>
• <b>자동화 도구</b> = 즉시·정확·전수 검증 → 최선의 방법<br>
• 자동 업데이트 = 프로세스 관리 (적용 보장 ≠ 검증)<br>
• 수동 샘플 = 비효율·감사 리스크·시간 소모<br>
• 변경 로그 = 간접 증거 (실제 상태 미반영 가능)</div>`,
reference:"CRM Chapter 4: IS Operations — Patch Verification",
keyConcepts:[
"패치 검증 최선|자동화 도구 — 즉시 적용·누락 현황 보고서 제공 (직접 검증)",
"자동 업데이트 vs 검증|자동 업데이트=관리 방법, 자동화 도구=검증 방법 (목적이 다름)",
"변경 로그 한계|최신 미반영·실제 서버 상태와 불일치 가능 — 직접 검증이 우선"
]
},

{
id:189, domain:"4", ks:"4A3",
question:`다음 중 데이터 처리 오류를 탐지하는 데 가장 도움이 되는 것은?<br><small style="color:#94a3b8">Which of the following BEST helps to detect errors in data processing?</small>`,
options:[
"프로그래밍된 편집 검사(Programmed edit checks)<br><small style='color:#94a3b8'>Programmed edit checks</small>",
"잘 설계된 데이터 입력 화면<br><small style='color:#94a3b8'>Well-designed data entry screens</small>",
"직무 분리(Separation of duties)<br><small style='color:#94a3b8'>Separation of duties</small>",
"해시 합계(Hash totals)<br><small style='color:#94a3b8'>Hash totals</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 해시 합계(Hash Totals)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">통제 유형</th><th style="padding:8px;border:1px solid #ddd">목적</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. Edit Checks</td><td style="padding:8px;border:1px solid #ddd">예방 통제</td><td style="padding:8px;border:1px solid #ddd">입력 시 오류 방지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 입력 화면 설계</td><td style="padding:8px;border:1px solid #ddd">예방 통제</td><td style="padding:8px;border:1px solid #ddd">입력 오류 방지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. SoD</td><td style="padding:8px;border:1px solid #ddd">예방 통제</td><td style="padding:8px;border:1px solid #ddd">비인가 거래 방지</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. Hash Totals ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>탐지 통제</b></td><td style="padding:8px;border:1px solid #ddd"><b>데이터 무결성 오류 탐지</b></td></tr></table>
<div class="sbox"><b>🔢 탐지 vs 예방 통제:</b><br>
• <b>탐지(Detective)</b>: Hash Totals, 감사 추적, 조정(Reconciliation)<br>
• <b>예방(Preventive)</b>: Edit Checks, 입력 화면 설계, SoD<br>
• "detect(탐지)" 키워드 → 예방 통제는 오답!</div>`,
reference:"CRM Chapter 4: IS Operations — Data Processing Controls",
keyConcepts:[
"Hash Totals|데이터 처리 오류 탐지에 가장 효과적 — 데이터 무결성 오류 표시",
"탐지 vs 예방|Edit Checks·입력 화면·SoD = 예방 / Hash Totals = 탐지",
"키워드 구분|'detect' = 탐지 통제 / 'prevent' = 예방 통제"
]
},

{
id:190, domain:"4", ks:"4A4",
question:`컨설팅 회사가 재무 데이터를 수신하기 위해 FTP 사이트를 만들고, 사이트 주소·사용자 ID·비밀번호를 별도 이메일로 전송했다. 기업은 수동으로 데이터를 암호화한 후 FTP 사이트에 전송해야 한다. 이 프로세스에 대한 IS 감사인의 가장 큰 우려는?<br><small style="color:#94a3b8">A consulting firm created an FTP site for receiving financial data and communicated credentials via separate emails. The enterprise is to transmit data after manually encrypting it. The IS auditor's GREATEST concern is that:</small>`,
options:[
"사용자가 전송 전 데이터를 수동으로 암호화하는 것을 잊을 수 있다.<br><small style='color:#94a3b8'>The users may not remember to manually encrypt the data before transmission.</small>",
"사이트 자격 증명이 이메일로 전송되었다.<br><small style='color:#94a3b8'>The site credentials were sent to the financial services enterprise via email.</small>",
"컨설팅 회사 직원이 민감한 데이터에 접근할 수 있다.<br><small style='color:#94a3b8'>Personnel at the consulting firm may obtain access to sensitive data.</small>",
"FTP 사이트에 공유 사용자 ID를 사용하여 사용자 책임추적이 불가하다.<br><small style='color:#94a3b8'>The use of a shared user ID does not allow for user accountability.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 사용자가 수동 암호화를 잊을 수 있음</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 수동 암호화 누락 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>미암호화 전송 → 비인가 외부자가 민감 데이터 다운로드 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 이메일로 자격 증명 전송</td><td style="padding:8px;border:1px solid #ddd">데이터가 암호화되어 있으면 도난해도 읽기 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 컨설팅 직원 접근</td><td style="padding:8px;border:1px solid #ddd">컨설팅 회사 내부 보호 절차로 관리</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 공유 ID 책임추적 불가</td><td style="padding:8px;border:1px solid #ddd">민감 데이터 보호 대비 최소 우려</td></tr></table>
<div class="sbox"><b>🔗 수동 통제의 약점:</b><br>
• <b>수동 암호화</b> = 사람에 의존 → 실수·누락 리스크 높음<br>
• 미암호화 전송 = <b>민감 재무 데이터 노출</b> (최대 리스크)<br>
• 자격 증명 노출보다 <b>데이터 자체 보호</b>가 더 중요<br>
• 자동 암호화가 수동보다 항상 안전</div>`,
reference:"CRM Chapter 4: IS Operations — Data Transmission Security",
keyConcepts:[
"수동 암호화 리스크|사용자 의존 → 실수·누락 가능 → 민감 데이터 미암호화 전송 위험",
"데이터 보호 우선순위|자격 증명 노출 < 데이터 자체 보호 (암호화 시 자격 증명 도난해도 안전)",
"자동 vs 수동|자동 암호화가 수동보다 항상 안전 — 인적 오류 제거"
]
},

{
id:191, domain:"4", ks:"4A4",
question:`분산 시스템에서 서로 다른 컴포넌트나 모듈이 통신하고 활동을 조정할 수 있게 하는 가장 적합한 것은?<br><small style="color:#94a3b8">In a distributed system, which of the following BEST allows different components or modules to communicate and coordinate their activities?</small>`,
options:[
"메시지 큐 인터페이스<br><small style='color:#94a3b8'>Message queue interface</small>",
"애플리케이션 프로그래밍 인터페이스(API)<br><small style='color:#94a3b8'>Application programming interface (API)</small>",
"원격 프로시저 호출(RPC)<br><small style='color:#94a3b8'>Remote procedure call</small>",
"통신 인프라 인터페이스<br><small style='color:#94a3b8'>Communication infrastructure interface</small>"
],
correct:1,
explanation:`<p><b>✅ 정답: B. API (Application Programming Interface)</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Message Queue</td><td style="padding:8px;border:1px solid #ddd">비동기 메시지 통신</td><td style="padding:8px;border:1px solid #ddd">범용 인터페이스 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>API ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>규칙·프로토콜 정의 → 데이터 교환·활동 조정</b></td><td style="padding:8px;border:1px solid #ddd"><b>범용 — 가장 적합</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">RPC</td><td style="padding:8px;border:1px solid #ddd">원격 프로시저/함수 실행</td><td style="padding:8px;border:1px solid #ddd">활동 조정에 특화되지 않음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">통신 인프라 인터페이스</td><td style="padding:8px;border:1px solid #ddd">플랫폼↔인프라 연결</td><td style="padding:8px;border:1px solid #ddd">컴포넌트 간 통신 아님</td></tr></table>
<div class="sbox"><b>🔗 분산 시스템 인터페이스 구분:</b><br>
• <b>API</b> = 규칙·프로토콜 집합 → 컴포넌트 간 상호작용·데이터 교환 표준화<br>
• Message Queue = 비동기 특화 (범용 아님)<br>
• RPC = 원격 함수 실행 (조정보다 실행에 초점)<br>
• 통신 인프라 = 하위 레벨 (앱 플랫폼↔인프라)</div>`,
reference:"CRM Chapter 4: IS Operations — System Interfaces",
keyConcepts:[
"API|분산 시스템 컴포넌트 간 통신·활동 조정의 범용 인터페이스 — 규칙·프로토콜 정의",
"Message Queue vs API|MQ=비동기 메시지 특화, API=범용 통신·조정",
"RPC vs API|RPC=원격 함수 실행 프로토콜, API=상호작용·데이터 교환 표준화"
]
},

{
id:192, domain:"4", ks:"4A4",
question:`다음 중 소프트웨어 시스템이나 애플리케이션이 클라우드 기반 인프라 또는 서비스 제공업체에 접근하고 상호작용할 수 있게 하는 것은?<br><small style="color:#94a3b8">Which of the following allows software systems or applications to access and interact with a cloud-based infrastructure or service provider?</small>`,
options:[
"간이 네트워크 관리 프로토콜(SNMP)<br><small style='color:#94a3b8'>Simple Network Management Protocol (SNMP)</small>",
"원격 프로시저 호출(RPC)<br><small style='color:#94a3b8'>Remote procedure call</small>",
"회선 레벨 게이트웨이<br><small style='color:#94a3b8'>Circuit-level gateway</small>",
"애플리케이션 프로그래밍 인터페이스(API)<br><small style='color:#94a3b8'>Application programming interface (API)</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. API</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">목적</th><th style="padding:8px;border:1px solid #ddd">클라우드 접근?</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">SNMP</td><td style="padding:8px;border:1px solid #ddd">네트워크 장치 모니터링·관리</td><td style="padding:8px;border:1px solid #ddd">❌</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">RPC</td><td style="padding:8px;border:1px solid #ddd">원격 프로시저/함수 실행</td><td style="padding:8px;border:1px solid #ddd">❌</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">Circuit-level Gateway</td><td style="padding:8px;border:1px solid #ddd">네트워크 간 데이터 전환</td><td style="padding:8px;border:1px solid #ddd">❌</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>API ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>클라우드 서비스 통합·리소스 접근·작업 수행</b></td><td style="padding:8px;border:1px solid #ddd"><b>✅</b></td></tr></table>
<div class="sbox"><b>☁️ 클라우드 접근 = API:</b><br>
• API = 규칙·프로토콜 → 앱과 클라우드 서비스 <b>통합</b><br>
• 리소스 접근, 다양한 작업 수행 가능<br>
• SNMP/RPC/Gateway = 각각 특정 목적 (클라우드 특화 X)</div>`,
reference:"CRM Chapter 4: IS Operations — Cloud Interfaces",
keyConcepts:[
"클라우드 접근 인터페이스|API — 클라우드 서비스 통합·리소스 접근·작업 수행",
"SNMP|네트워크 장치 모니터링·관리 프로토콜 (클라우드 접근 아님)",
"Circuit-level Gateway|네트워크 간 데이터 전환용 게이트웨이 (클라우드 특화 아님)"
]
},

{
id:193, domain:"4", ks:"4A5",
question:`업무 시간 동안 성능 저하로 인터넷 대역폭 증가를 고려하는 조직의 네트워크 성능을 평가할 때, 성능 저하의 가장 유력한 원인은?<br><small style="color:#94a3b8">An IS auditor is evaluating network performance for an organization considering increasing Internet bandwidth due to performance degradation during business hours. Which is MOST likely the cause?</small>`,
options:[
"서버의 맬웨어<br><small style='color:#94a3b8'>Malware on servers</small>",
"방화벽 잘못된 구성<br><small style='color:#94a3b8'>Firewall misconfiguration</small>",
"이메일 서버의 스팸 증가<br><small style='color:#94a3b8'>Increased spam received by the email server</small>",
"비인가 네트워크 활동<br><small style='color:#94a3b8'>Unauthorized network activities</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 비인가 네트워크 활동</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">업무 시간 한정?</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 맬웨어</td><td style="padding:8px;border:1px solid #ddd">❌ 24시간 영향 — 업무 시간 한정 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 방화벽 오설정</td><td style="padding:8px;border:1px solid #ddd">❌ 24시간 영향 — 업무 시간 한정 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 스팸</td><td style="padding:8px;border:1px solid #ddd">❌ 24시간 수신 — 업무 시간 한정 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 비인가 활동 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✅ 직원 활동 = 업무 시간에만 발생</b></td></tr></table>
<div class="sbox"><b>👤 비인가 네트워크 활동 예:</b><br>
• 파일/음악 공유 사이트, 온라인 도박, 대용량 개인 이메일<br>
• <b>업무 시간에만</b> 성능 저하 = 직원 활동이 원인<br>
• 맬웨어·방화벽·스팸 = 시간에 관계없이 24시간 영향</div>`,
reference:"CRM Chapter 4: IS Operations — Network Performance",
keyConcepts:[
"업무 시간 성능 저하|비인가 네트워크 활동 — 직원이 업무 시간에 개인 용도로 대역폭 사용",
"시간 패턴 분석|업무 시간 한정 = 사용자 활동 / 24시간 = 시스템 문제(맬웨어·방화벽·스팸)",
"Shadow IT|비인가 활동 = Shadow IT의 한 형태 — 조직이 인지·통제하지 못하는 IT 사용"
]
},

{
id:194, domain:"4", ks:"4A5",
question:`직원이 선물로 받은 디지털 사진 액자를 업무 PC에 연결하여 사진을 전송했다. 이 시나리오가 유발하는 주요 리스크는?<br><small style="color:#94a3b8">An employee received a digital photo frame as a gift and connected it to his/her work PC to transfer digital photos. The PRIMARY risk that this scenario introduces is that:</small>`,
options:[
"사진 액자의 저장 매체가 기업 데이터를 훔치는 데 사용될 수 있다.<br><small style='color:#94a3b8'>The photo frame storage media can be used to steal enterprise data.</small>",
"사진 액자 드라이버가 호환되지 않아 PC가 충돌할 수 있다.<br><small style='color:#94a3b8'>The drivers for the photo frame may be incompatible and crash the user's PC.</small>",
"직원이 부적절한 사진을 사무실로 가져올 수 있다.<br><small style='color:#94a3b8'>The employee may bring inappropriate photographs into the office.</small>",
"사진 액자가 맬웨어에 감염되어 있을 수 있다.<br><small style='color:#94a3b8'>The photo frame can be infected with malware.</small>"
],
correct:3,
explanation:`<p><b>✅ 정답: D. 맬웨어 감염</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">리스크 수준</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 데이터 유출</td><td style="padding:8px;border:1px solid #ddd">가능하나, 맬웨어의 기업 전체 피해보다 제한적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 드라이버 충돌</td><td style="padding:8px;border:1px solid #ddd">개별 PC 문제 — 기업 전체 영향 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 부적절 사진</td><td style="padding:8px;border:1px solid #ddd">HR 이슈 — 기술적 리스크 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 맬웨어 감염 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>기업 전체 광범위·심각 피해 가능 — 최대 리스크</b></td></tr></table>
<div class="sbox"><b>🦠 외부 저장 장치 리스크:</b><br>
• 모든 저장 장치 = <b>맬웨어 전파 매체</b> 가능<br>
• 공장 제조 과정에서 이미 감염된 사례 존재<br>
• 맬웨어 = <b>광범위·심각</b> (개인 PC 넘어 기업 전체 영향)<br>
• 통제: 직원의 개인 저장 매체 <b>연결 금지 정책</b> 필요</div>`,
reference:"CRM Chapter 4: IS Operations — Removable Media Risk",
keyConcepts:[
"외부 저장 장치 최대 리스크|맬웨어 감염 — 기업 전체 광범위·심각 피해 (공장 감염 사례 존재)",
"리스크 비교|맬웨어(전사 피해) > 데이터 유출(제한적) > 드라이버 충돌(개별 PC) > 부적절 콘텐츠(HR)",
"통제|개인 저장 매체의 기업 PC 연결 금지 정책 수립"
]
},

{
id:195, domain:"4", ks:"4A5",
question:`최종 사용자 컴퓨팅(EUC) 애플리케이션 개발에서 가장 만연한 리스크는?<br><small style="color:#94a3b8">Which of the following is a prevalent risk in the development of end-user computing applications?</small>`,
options:[
"애플리케이션이 테스트 및 IT 일반 통제의 적용을 받지 않을 수 있다.<br><small style='color:#94a3b8'>Applications may not be subject to testing and IT general controls.</small>",
"개발 및 유지보수 비용이 증가할 수 있다.<br><small style='color:#94a3b8'>Development and maintenance costs may be increased.</small>",
"애플리케이션 개발 시간이 증가할 수 있다.<br><small style='color:#94a3b8'>Application development time may be increased.</small>",
"정보 요청에 대한 응답성 저하로 의사결정이 손상될 수 있다.<br><small style='color:#94a3b8'>Decision-making may be impaired due to diminished responsiveness to requests for information.</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 테스트·IT 일반 통제 미적용</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 테스트·통제 미적용 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>독립 검토 부재, 정식 방법론·표준·QA·문서화 부족</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 비용 증가</td><td style="padding:8px;border:1px solid #ddd">❌ EUC = 오히려 비용 감소</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 개발 시간 증가</td><td style="padding:8px;border:1px solid #ddd">❌ EUC = 오히려 개발 주기 단축</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 응답성 저하</td><td style="padding:8px;border:1px solid #ddd">❌ EUC = 오히려 유연성·응답성 증가</td></tr></table>
<div class="sbox"><b>👤 EUC 리스크 vs 장점:</b><br>
<b>리스크:</b> 테스트·통제·QA·문서화 부족, 독립 검토 부재<br>
<b>장점:</b> 비용↓, 개발 시간↓, 유연성·응답성↑<br>
• 경영진이 EUC 앱을 전통적 앱만큼 의존할 수 있음 → <b>통제 부재가 최대 위험</b></div>`,
reference:"CRM Chapter 4: IS Operations — End-User Computing",
keyConcepts:[
"EUC 주요 리스크|테스트·IT 일반 통제 미적용 — 독립 검토 부재, 표준·QA·문서화 부족",
"EUC 장점|비용 감소, 개발 주기 단축, 유연성·응답성 증가 (함정 선택지)",
"EUC 위험|경영진이 EUC 앱을 전통적 앱만큼 의존 → 통제 부재 시 리스크 증폭"
]
},

{
id:196, domain:"4", ks:"4A6",
question:`다음 중 네트워킹 관리의 핵심 구성요소로 널리 인정되는 것은?<br><small style="color:#94a3b8">Which of the following is widely accepted as one of the critical components in networking management?</small>`,
options:[
"구성 및 변경 관리<br><small style='color:#94a3b8'>Configuration and change management</small>",
"토폴로지 매핑<br><small style='color:#94a3b8'>Topological mappings</small>",
"모니터링 도구 적용<br><small style='color:#94a3b8'>Application of monitoring tools</small>",
"프록시 서버 문제 해결<br><small style='color:#94a3b8'>Proxy server troubleshooting</small>"
],
correct:0,
explanation:`<p><b>✅ 정답: A. 구성 및 변경 관리</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 구성·변경 관리 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>네트워크 내부·외부 동작 방식 결정 + 변경 적절성 보장</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 토폴로지 매핑</td><td style="padding:8px;border:1px solid #ddd">구성요소·연결 파악 — 중요하나 최핵심은 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 모니터링 도구</td><td style="padding:8px;border:1px solid #ddd">네트워크 관리의 핵심 부분은 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 프록시 서버 문제 해결</td><td style="padding:8px;border:1px solid #ddd">네트워크 관리의 소규모 부분에 불과</td></tr></table>
<div class="sbox"><b>🔧 구성·변경 관리가 핵심인 이유:</b><br>
• <b>구성 관리</b> = 네트워크 내부·외부 동작 방식 결정 + 성능 모니터링<br>
• <b>변경 관리</b> = 네트워크 설정·관리의 적절성 보장<br>
• 기본 비밀번호 제거, 불필요 서비스 비활성화(Hardening) 포함<br>
• 토폴로지 = SPOF·격리 파악용 (구성 관리의 하위)</div>`,
reference:"CRM Chapter 4: IS Operations — Network Management",
keyConcepts:[
"네트워크 관리 핵심|구성·변경 관리 — 네트워크 동작 방식 결정 + 변경 적절성 보장",
"구성 관리 범위|내부·외부 기능 설정, 성능 모니터링, Hardening(기본 PW 제거·서비스 비활성화)",
"토폴로지 매핑|네트워크 구성요소·연결 파악, SPOF·격리 확인 — 중요하나 최핵심은 아님"
]
},

{
id:197, domain:"4", ks:"4A6",
question:`IT 자원의 용량 및 성능에 대한 지속적 모니터링 프로세스를 검토할 때, IS 감사인은 이 프로세스가 주로 무엇에 초점을 맞추고 있는지 확인해야 하는가?<br><small style="color:#94a3b8">While reviewing the process for continuous monitoring of the capacity and performance of IT resources, an IS auditor should PRIMARILY ensure that the process is focused on which of the following?</small>`,
options:[
"IT 자원 및 서비스의 서비스 수준을 적절히 모니터링한다.<br><small style='color:#94a3b8'>Adequately monitoring service levels of IT resources and services</small>",
"용량 및 성능 요구사항의 적시 계획을 위한 데이터를 제공한다.<br><small style='color:#94a3b8'>Providing data to enable timely planning for capacity and performance requirements</small>",
"IT 자원 용량에 대한 정확한 피드백을 제공한다.<br><small style='color:#94a3b8'>Providing accurate feedback on IT resource capacity</small>",
"IT 자원의 성능, 용량 및 처리량을 적절히 예측한다.<br><small style='color:#94a3b8'>Properly forecasting performance, capacity and throughput of IT resources</small>"
],
correct:2,
explanation:`<p><b>✅ 정답: C. IT 자원 용량에 대한 정확한 피드백</b></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ddd">선택지</th><th style="padding:8px;border:1px solid #ddd">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. SLA 모니터링</td><td style="padding:8px;border:1px solid #ddd">SLA 충족 확인 도움 — 시스템 오프라인이어도 SLA 충족 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 계획 데이터 제공</td><td style="padding:8px;border:1px solid #ddd">모니터링 데이터는 계획의 입력값이나 주 초점 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 정확한 용량 피드백 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>지속적 모니터링의 핵심 = 정확한 가용성·용량 현황 파악</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 성능·용량 예측</td><td style="padding:8px;border:1px solid #ddd">예측 도움 — 정확한 현황 파악이 더 핵심</td></tr></table>
<div class="sbox"><b>📊 지속적 모니터링 핵심:</b><br>
• 주 초점 = <b>정확한 가용성·용량 피드백</b> (현재 상태 정확히 파악)<br>
• SLA 충족 확인 = 부수적 (오프라인이어도 SLA 충족 가능한 맹점)<br>
• 계획·예측 = 모니터링 데이터의 <b>활용</b>이지 주 초점 아님</div>`,
reference:"CRM Chapter 4: IS Operations — Capacity & Performance Monitoring",
keyConcepts:[
"지속적 모니터링 초점|정확한 IT 자원 가용성·용량 피드백 — 현황 파악이 최우선",
"SLA 모니터링 한계|시스템 오프라인이어도 SLA 충족 가능 → 정확한 가용성 모니터링이 더 중요",
"모니터링 vs 계획|모니터링 데이터는 계획의 입력값 — 주 초점은 정확한 현황 피드백"
]
},

// ============================================================
// Q198 - RTO와 비용의 관계
// ============================================================
{
id: 198,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `낮은 복구 시간 목표(RTO)는 다음을 초래한다:<br><small style="color:#94a3b8">A lower recovery time objective (RTO) results in:</small>`,
options: [
  "더 높은 재해 허용 범위.<br><small style='color:#94a3b8'>Higher disaster tolerance.</small>",
  "더 높은 비용.<br><small style='color:#94a3b8'>Higher cost.</small>",
  "시스템 중단 감소.<br><small style='color:#94a3b8'>Reduced system interruptions.</small>",
  "더 관대한 데이터 손실.<br><small style='color:#94a3b8'>More permissive data loss.</small>"
],
correct: 1,
explanation: `<p><b>RTO(복구 시간 목표)</b>는 업무 중단 시 허용 가능한 다운타임을 의미합니다. <b>RTO가 낮을수록 더 빠른 복구가 필요</b>하므로, 핫사이트·실시간 복제 등 고비용 복구 전략이 필요합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">개념</th><th style="padding:8px;border:1px solid #334155">의미</th><th style="padding:8px;border:1px solid #334155">낮을수록</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd"><b>RTO</b></td><td style="padding:8px;border:1px solid #ddd">허용 가능한 <b>중단 시간</b></td><td style="padding:8px;border:1px solid #ddd">복구 빨라야 함 → <b>비용↑</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd"><b>RPO</b></td><td style="padding:8px;border:1px solid #ddd">허용 가능한 <b>데이터 손실</b></td><td style="padding:8px;border:1px solid #ddd">백업 주기 짧아야 함 → <b>비용↑</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd"><b>재해 허용 범위</b></td><td style="padding:8px;border:1px solid #ddd">중단 허용 <b>기간</b></td><td style="padding:8px;border:1px solid #ddd">중단 윈도우 좁음 → RTO↓ 필요</td></tr>
</table>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선택지</th><th style="padding:8px;border:1px solid #334155">판단</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 높은 재해 허용 범위</td><td style="padding:8px;border:1px solid #ddd">반대 — 재해 허용 범위가 <b>높으면</b> 긴 중단 허용 → RTO 높아짐</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 높은 비용 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>RTO↓ → 빠른 복구 전략(핫사이트 등) → 비용↑</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 시스템 중단 감소</td><td style="padding:8px;border:1px solid #ddd">RTO는 중단 <b>복구 목표</b>이지, 중단 자체를 줄이는 것이 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 관대한 데이터 손실</td><td style="padding:8px;border:1px solid #ddd">데이터 손실은 <b>RPO</b> 관련 — RTO와 무관</td></tr>
</table>
<div class="sbox"><b>💡 RTO vs RPO 암기:</b><br>
• <b>RTO</b> = Recovery <b>Time</b> → 얼마나 <b>빨리</b> 복구? → 낮을수록 비용↑<br>
• <b>RPO</b> = Recovery <b>Point</b> → 얼마나 <b>데이터 보존</b>? → 낮을수록 비용↑<br>
• 둘 다 낮을수록 = 더 엄격한 요구 = <b>더 높은 비용</b></div>`,
reference:"CRM Chapter 4: IS Operations — Business Continuity & Disaster Recovery",
keyConcepts:[
"RTO|허용 가능한 중단 시간 — 낮을수록 빠른 복구 필요 → 비용 증가",
"RPO|허용 가능한 데이터 손실량 — 낮을수록 잦은 백업 필요 → 비용 증가",
"재해 허용 범위|중단 허용 기간 — 높을수록 긴 중단 허용 → RTO 높아짐"
]
},

// ============================================================
// Q199 - Back-out 절차 (변경 통제)
// ============================================================
{
id: 199,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `정보시스템(IS) 감사인은 소프트웨어 애플리케이션을 업그레이드 이전 상태로 복원하는 데 사용된 절차를 검토해야 한다. 따라서 감사인은 다음을 평가해야 한다:<br><small style="color:#94a3b8">An information systems (IS) auditor needs to review the procedures used to restore a software application to its state prior to an upgrade. Therefore, the auditor needs to assess the following:</small>`,
options: [
  "문제 관리 절차.<br><small style='color:#94a3b8'>Problem management procedures</small>",
  "소프트웨어 개발 절차.<br><small style='color:#94a3b8'>Software development procedures</small>",
  "백아웃(Back-out) 절차.<br><small style='color:#94a3b8'>Back-out procedures</small>",
  "인시던트 관리 절차.<br><small style='color:#94a3b8'>Incident management procedures</small>"
],
correct: 2,
explanation: `<p><b>Back-out 절차</b>는 시스템을 이전 상태로 복원하는 절차로, <b>변경 통제(Change Control) 프로세스</b>의 핵심 요소입니다. SW 업그레이드 실패 시 이전 상태로 되돌리는 폴백(fallback) 계획입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">절차</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">관련 프로세스</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>Back-out 절차 ✔</b></td><td style="padding:8px;border:1px solid #ddd">시스템을 <b>이전 상태로 복원</b></td><td style="padding:8px;border:1px solid #ddd"><b>변경 통제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">문제 관리</td><td style="padding:8px;border:1px solid #ddd">사용자 피드백·이슈 <b>추적·분석</b></td><td style="padding:8px;border:1px solid #ddd">운영 관리</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">소프트웨어 개발</td><td style="padding:8px;border:1px solid #ddd">SW <b>생성·획득</b> 관리 (SDLC)</td><td style="padding:8px;border:1px solid #ddd">개발 생명주기</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">인시던트 관리</td><td style="padding:8px;border:1px solid #ddd">시스템 운영 <b>오류·문제</b> 처리</td><td style="padding:8px;border:1px solid #ddd">헬프데스크/서비스</td></tr>
</table>
<div class="sbox"><b>🔄 Back-out 절차 핵심:</b><br>
• 변경 통제 프로세스의 필수 구성 요소<br>
• SW 업그레이드 실패 시 → <b>이전 상태로 롤백</b><br>
• 인시던트 관리에도 폴백 계획이 있을 수 있으나, 직접적인 복원 절차는 Back-out</div>`,
reference:"CRM Chapter 4: IS Operations — Change Management & Back-out Procedures",
keyConcepts:[
"Back-out 절차|시스템을 이전 상태로 복원 — 변경 통제 프로세스의 핵심 요소",
"문제 관리|사용자 피드백·이슈 추적 및 트렌드 분석 — 복원 절차와 무관",
"인시던트 관리|운영 오류·문제 처리 절차 — 헬프데스크 활용, 폴백 계획 포함 가능하나 직접 복원은 아님"
]
},

// ============================================================
// Q200 - 대체 사이트 계약 핵심 조항
// ============================================================
{
id: 200,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `핫, 웜 또는 콜드 사이트에 대한 계약 조항은 주로 다음 중 어떤 고려사항을 다루어야 하는가?<br><small style="color:#94a3b8">Contractual provisions for a hot, warm or cold site should PRIMARILY cover which of the following considerations?</small>`,
options: [
  "물리적 보안 조치.<br><small style='color:#94a3b8'>Physical security measures</small>",
  "총 구독자 수.<br><small style='color:#94a3b8'>Total number of subscribers</small>",
  "동시에 사이트를 사용할 수 있는 구독자 수.<br><small style='color:#94a3b8'>Number of subscribers permitted to use a site at one time</small>",
  "다른 사용자의 레퍼런스.<br><small style='color:#94a3b8'>References by other users</small>"
],
correct: 2,
explanation: `<p><b>대체 사이트 계약</b>에서 가장 중요한 조항은 <b>동시에 사이트를 사용할 수 있는 구독자 수</b>입니다. 재해 발생 시 여러 구독자가 동시에 사이트를 필요로 할 수 있으므로, 동시 사용 제한이 핵심입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선택지</th><th style="padding:8px;border:1px solid #334155">판단</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 물리적 보안 조치</td><td style="padding:8px;border:1px solid #ddd">사이트 선택 시 중요하나, 항상 계약 조항에 포함되진 않음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 총 구독자 수</td><td style="padding:8px;border:1px solid #ddd">고려사항이지만, <b>동시 사용 제한</b>이 더 중요</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 동시 사용 구독자 수 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>재해 시 동시 이용 → 사용 가능 여부가 계약의 핵심</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 다른 사용자 레퍼런스</td><td style="padding:8px;border:1px solid #ddd">계약 <b>전</b> 고려사항 — 계약 조항이 아님</td></tr>
</table>
<div class="sbox"><b>🏢 대체 사이트 계약 핵심:</b><br>
• 핵심 조항 = <b>동시 사용 가능 구독자 수</b> (특정 구독자 우선권 부여 가능)<br>
• 총 구독자 수 = 부차적 (경쟁사 포함 여부도 확인 필요)<br>
• 물리 보안·레퍼런스 = 사이트 <b>선택</b> 시 고려, 계약 <b>조항</b>은 아님</div>`,
reference:"CRM Chapter 4: IS Operations — Business Continuity & Disaster Recovery Sites",
keyConcepts:[
"대체 사이트 계약 핵심|동시 사용 가능 구독자 수 — 재해 시 여러 구독자 동시 필요 가능",
"총 구독자 vs 동시 사용|총 수보다 동시 이용 제한이 핵심 — 경쟁사 포함 여부도 확인",
"계약 전 vs 계약 조항|레퍼런스·물리 보안은 선택 시 고려사항, 계약 조항과 구별"
]
},

// ============================================================
// Q201 - 기술 용량 모니터링의 주 목적
// ============================================================
{
id: 201,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `IT 관리자가 기술 용량을 모니터링하는 주된 이점은 다음과 같다:<br><small style="color:#94a3b8">The PRIMARY benefit of an IT manager monitoring technical capacity is to:</small>`,
options: [
  "새로운 하드웨어 및 스토리지 조달 필요성을 파악한다.<br><small style='color:#94a3b8'>Identify the need for new hardware and storage procurement.</small>",
  "사용량을 기반으로 미래 용량 필요를 결정한다.<br><small style='color:#94a3b8'>Determine the future capacity need based on usage.</small>",
  "서비스 수준 요구사항이 충족되도록 보장한다.<br><small style='color:#94a3b8'>Ensure that the service level requirements are met.</small>",
  "시스템이 최적 용량으로 운영되도록 보장한다.<br><small style='color:#94a3b8'>Ensure that systems operate at optimal capacity.</small>"
],
correct: 2,
explanation: `<p><b>기술 용량 모니터링</b>의 주된 목적은 <b>서비스 수준 요구사항(SLA) 충족</b>입니다. IT 관리자의 1차 의무는 비즈니스가 기대하는 서비스 수준을 IT가 충족하는 것입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선택지</th><th style="padding:8px;border:1px solid #334155">판단</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. HW·스토리지 조달 파악</td><td style="padding:8px;border:1px solid #ddd">모니터링의 이점 중 하나 — 주 목적은 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 미래 용량 예측</td><td style="padding:8px;border:1px solid #ddd">확실한 이점이지만 부차적 목적</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 서비스 수준 요구 충족 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>IT의 1차 의무 = 비즈니스 SLA 충족 보장</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 최적 용량 운영</td><td style="padding:8px;border:1px solid #ddd">관심 사항이지만, SLA 충족이 더 상위 목표</td></tr>
</table>
<div class="sbox"><b>📊 용량 모니터링 우선순위:</b><br>
• <b>1순위</b> = 서비스 수준(SLA) 충족 보장 — IT의 근본 의무<br>
• 2순위 = 최적 운영, 미래 예측, HW 조달 등<br>
• 핵심: 기술적 목표보다 <b>비즈니스 서비스 수준</b>이 항상 우선</div>`,
reference:"CRM Chapter 4: IS Operations — Capacity & Performance Management",
keyConcepts:[
"용량 모니터링 주 목적|서비스 수준 요구사항(SLA) 충족 — IT의 1차 의무는 비즈니스 기대 충족",
"용량 모니터링 부차적 이점|HW 조달 파악, 미래 용량 예측, 최적 운영 — 모두 SLA 충족보다 후순위",
"IT 관리자 1차 의무|비즈니스 서비스 수준 기대 충족 — 기술적 최적화보다 상위 목표"
]
},

// ============================================================
// Q202 - SaaS SLA 가용성 모니터링
// ============================================================
{
id: 202,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `조직이 SaaS(Software as a Service) 운영 모델을 사용하여 온라인 고객 헬프데스크 애플리케이션을 구현했다. IS 감사인은 SaaS 벤더와의 가용성 관련 SLA를 모니터링하기 위한 최선의 통제를 권고하도록 요청받았다. IS 감사인이 제공할 수 있는 최선의 권고는?<br><small style="color:#94a3b8">An organization implemented an online customer help desk application using a SaaS operating model. An IS auditor is asked to recommend the best control to monitor the SLA with the SaaS vendor regarding availability. What is the BEST recommendation?</small>`,
options: [
  "SaaS 벤더에게 주간 애플리케이션 가동 시간 보고서를 제공하도록 요청한다.<br><small style='color:#94a3b8'>Ask the SaaS vendor to provide a weekly report on application uptime.</small>",
  "온라인 폴링 도구를 구현하여 애플리케이션을 모니터링하고 장애를 기록한다.<br><small style='color:#94a3b8'>Implement an online polling tool to monitor the application and record outages.</small>",
  "사용자가 보고한 모든 장애를 기록하고 주간 장애 시간을 집계한다.<br><small style='color:#94a3b8'>Log all application outages reported by users and aggregate the outage time weekly.</small>",
  "독립 제3자와 계약하여 주간 가동 시간 보고서를 제공받는다.<br><small style='color:#94a3b8'>Contract an independent third party to provide weekly reports on application uptime.</small>"
],
correct: 1,
explanation: `<p><b>자체 온라인 폴링 도구</b>를 구현하여 SaaS 애플리케이션의 가용성을 직접 모니터링하는 것이 최선입니다. 내부 보고서와 벤더 SLA 보고서를 비교하여 정확성을 검증할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선택지</th><th style="padding:8px;border:1px solid #334155">판단</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 벤더 주간 보고서</td><td style="padding:8px;border:1px solid #ddd">벤더 관점만 반영 — 내부 모니터링 없이 부정확성 입증 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 자체 폴링 도구 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>내부 독립 모니터링 → 벤더 보고서와 비교 검증 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 사용자 보고 기록</td><td style="padding:8px;border:1px solid #ddd">간헐적 장애 누락 가능 — 완전한 그림 제공 못함</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 제3자 계약</td><td style="padding:8px;border:1px solid #ddd">비용 비효율적 + 벤더 대신 제3자를 모니터링해야 하는 문제 발생</td></tr>
</table>
<div class="sbox"><b>🔍 SLA 모니터링 원칙:</b><br>
• <b>내부 독립 모니터링</b>이 최선 — 벤더 자체 보고만 의존하면 검증 불가<br>
• 사용자 보고 = 수동적·불완전 (간헐적 장애 누락)<br>
• 제3자 위탁 = 비용↑ + 모니터링 대상만 바뀜 (벤더→제3자)</div>`,
reference:"CRM Chapter 4: IS Operations — SaaS & Cloud Service Level Monitoring",
keyConcepts:[
"SaaS SLA 모니터링|자체 폴링 도구로 독립 모니터링 — 벤더 보고서와 비교 검증이 핵심",
"벤더 자체 보고 한계|벤더 관점만 반영 — 내부 데이터 없이 부정확성 입증 불가",
"사용자 보고 한계|간헐적 장애 누락 가능 — 완전한 가용성 그림 제공 못함"
]
},

// ============================================================
// Q203 - 웹 애플리케이션 무중단 가용성
// ============================================================
{
id: 203,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `다음 중 사용자가 중요하고 많이 사용되는 웹 기반 애플리케이션에 중단 없이 접근할 수 있도록 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Which of the following BEST ensures that users have uninterrupted access to a critical, heavily used web-based application?</small>`,
options: [
  "디스크 미러링.<br><small style='color:#94a3b8'>Disk mirroring</small>",
  "RAID(Redundant Array of Inexpensive Disks).<br><small style='color:#94a3b8'>Redundant array of inexpensive disks (RAID)</small>",
  "동적 DNS(Domain Name System).<br><small style='color:#94a3b8'>Dynamic domain name system (DNS)</small>",
  "로드 밸런싱.<br><small style='color:#94a3b8'>Load balancing</small>"
],
correct: 3,
explanation: `<p><b>로드 밸런싱</b>은 트래픽을 다중 서버에 분산하여 무중단 가용성과 일관된 응답 시간을 보장합니다. 서버 장애 시 기능하는 서버로 자동 리디렉션합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">기술</th><th style="padding:8px;border:1px solid #334155">보호 범위</th><th style="padding:8px;border:1px solid #334155">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">디스크 미러링</td><td style="padding:8px;border:1px solid #ddd">디스크 실시간 복제</td><td style="padding:8px;border:1px solid #ddd">서버 크래시 시 가용성 보장 못함</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">RAID</td><td style="padding:8px;border:1px solid #ddd">디스크 복원력 향상</td><td style="padding:8px;border:1px solid #ddd">NIC·CPU 장애 보호 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">동적 DNS</td><td style="padding:8px;border:1px solid #ddd">동적 IP에 호스트명 할당</td><td style="padding:8px;border:1px solid #ddd">가용성과 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>로드 밸런싱 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>다중 서버 트래픽 분산</b></td><td style="padding:8px;border:1px solid #ddd"><b>서버 장애 시 자동 리디렉션</b></td></tr>
</table>
<div class="sbox"><b>⚖️ 가용성 기술 비교:</b><br>
• <b>로드 밸런싱</b> = 서버 레벨 가용성 (트래픽 분산 + 장애 전환)<br>
• 미러링/RAID = <b>디스크 레벨</b>만 보호 (서버·NIC·CPU 장애 무방비)<br>
• 동적 DNS = IP 관리 기술, 가용성 보장과 무관</div>`,
reference:"CRM Chapter 4: IS Operations — Availability & Load Balancing",
keyConcepts:[
"로드 밸런싱|다중 서버 트래픽 분산 + 장애 시 자동 리디렉션 — 웹 앱 무중단 가용성 최선",
"디스크 미러링 vs RAID|디스크 레벨 보호만 — 서버·NIC·CPU 장애 시 가용성 보장 못함",
"동적 DNS|동적 IP에 호스트명 할당 기술 — 가용성 보장과 직접 관련 없음"
]
},

// ============================================================
// Q204 - Duplicate IPF Viability
// ============================================================
{
id: 204,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `다음 중 이중 정보처리시설(Duplicate IPF)의 실행 가능성을 보장하기 위해 반드시 존재해야 하는 것은?<br><small style="color:#94a3b8">Which of the following must exist to ensure the viability of a duplicate information processing facility (IPF)?</small>`,
options: [
  "신속하고 효율적인 복구를 위해 주 사이트 근처에 위치해야 한다.<br><small style='color:#94a3b8'>The site is near the primary site to ensure quick and efficient recovery.</small>",
  "사이트에 가용한 가장 최신 하드웨어가 구비되어야 한다.<br><small style='color:#94a3b8'>The site contains the most advanced hardware available.</small>",
  "적절한 백업이 가능하도록 주 사이트의 워크로드를 모니터링해야 한다.<br><small style='color:#94a3b8'>The workload of the primary site is monitored to ensure adequate backup is available.</small>",
  "하드웨어가 설치 시 테스트되어 정상 작동이 확인되어야 한다.<br><small style='color:#94a3b8'>The hardware is tested when it is installed to ensure it is working properly.</small>"
],
correct: 2,
explanation: `<p><b>주 사이트의 워크로드 모니터링</b>은 이중 IPF의 실행 가능성을 보장하는 핵심 요소입니다. 자원 가용성이 확보되어야 비상 시 백업 사이트가 실제로 기능할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 주 사이트 근처 위치</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">동일 자연재해 노출 위험 — 근접성은 장점이자 위험</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 최신 하드웨어</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">합리적 호환성이 핵심 — 최신이 반드시 적합하지 않음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 워크로드 모니터링 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>자원 가용성 확보 — 백업 용량 충분성 보장</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 설치 시 하드웨어 테스트</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">초기 테스트는 필수이나 정기적 백업 데이터 테스트가 더 중요</td></tr>
</table>
<div class="sbox"><b>🏢 이중 IPF 핵심 원칙:</b><br>
• <b>워크로드 모니터링</b> = 백업 사이트 용량 충분성 지속 확인<br>
• 위치 = 동일 재해 권역 회피 (근접 ≠ 무조건 좋음)<br>
• 하드웨어 = <b>합리적 호환성</b> > 최신 사양<br>
• 테스트 = 설치 시 1회가 아닌 <b>정기적 백업 데이터 테스트</b> 필요</div>`,
reference:"CRM Chapter 4: IS Operations — Duplicate IPF & Backup Facilities",
keyConcepts:[
"이중 IPF 워크로드 모니터링|주 사이트 워크로드 모니터링으로 백업 사이트 자원 충분성 보장 — 실행 가능성의 핵심",
"백업 사이트 위치|주 사이트와 동일 자연재해 권역 회피 — 근접성은 장단점 모두 존재",
"백업 하드웨어 호환성|최신 하드웨어가 아닌 합리적 호환성(HW/SW)이 백업 기반",
"백업 테스트|설치 시 1회 테스트 부족 — 실제 백업 데이터의 정기적 테스트 필수"
]
},

// ============================================================
// Q205 - Server Failure in Distributed Environment
// ============================================================
{
id: 205,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `다음 중 분산 환경에서 서버 장애의 영향을 가장 잘 제한하는 것은?<br><small style="color:#94a3b8">Which of the following BEST limits the impact of server failures in a distributed environment?</small>`,
options: [
  "이중 경로(Redundant pathways).<br><small style='color:#94a3b8'>Redundant pathways</small>",
  "클러스터링(Clustering).<br><small style='color:#94a3b8'>Clustering</small>",
  "다이얼 백업 회선(Dial backup lines).<br><small style='color:#94a3b8'>Dial backup lines</small>",
  "대기 전원(Standby power).<br><small style='color:#94a3b8'>Standby power</small>"
],
correct: 1,
explanation: `<p><b>클러스터링</b>은 두 대 이상의 서버가 하나의 단위로 작동하여 한 서버가 장애 시 다른 서버가 자동으로 인계받는 기술입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">보호 대상</th><th style="padding:8px;border:1px solid #334155">서버 장애 대응</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">이중 경로</td><td style="padding:8px;border:1px solid #ddd">통신 채널 장애</td><td style="padding:8px;border:1px solid #ddd">✗ 서버 장애와 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>클러스터링 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>서버 장애</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 장애 서버 → 다른 서버 자동 인계</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">다이얼 백업 회선</td><td style="padding:8px;border:1px solid #ddd">통신 채널 장애</td><td style="padding:8px;border:1px solid #ddd">✗ 서버 장애와 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">대기 전원</td><td style="padding:8px;border:1px solid #ddd">전원 장애</td><td style="padding:8px;border:1px solid #ddd">✗ 서버 자체 장애와 무관</td></tr>
</table>
<div class="sbox"><b>🖥️ 장애 유형별 대응 기술:</b><br>
• <b>서버 장애</b> → 클러스터링 (다중 서버 자동 인계)<br>
• <b>통신 장애</b> → 이중 경로 / 다이얼 백업 회선<br>
• <b>전원 장애</b> → 대기 전원 / UPS<br>
• 각 기술은 <b>특정 장애 유형</b>에만 효과적 — 문제가 묻는 장애 유형을 정확히 파악!</div>`,
reference:"CRM Chapter 4: IS Operations — Server Clustering & High Availability",
keyConcepts:[
"클러스터링|다중 서버가 하나의 단위로 작동 — 장애 시 자동 인계(Failover)로 서버 가용성 보장",
"이중 경로 vs 다이얼 백업|통신 채널 장애 대응 기술 — 서버 장애와는 무관",
"장애 유형별 대응|서버=클러스터링, 통신=이중 경로, 전원=UPS/대기 전원 — 유형 매칭이 핵심"
]
},

// ============================================================
// Q206 - System Performance Concerns
// ============================================================
{
id: 206,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `비즈니스 부서가 새로 구현된 시스템의 성능에 대해 우려하고 있다. IS 감사인이 권고해야 할 사항은?<br><small style="color:#94a3b8">Business units are concerned about the performance of a newly implemented system. Which of the following should an information systems (IS) auditor recommend?</small>`,
options: [
  "기준선(Baseline)을 개발하고 시스템 사용량을 모니터링한다.<br><small style='color:#94a3b8'>Develop a baseline and monitor system usage.</small>",
  "대체 처리 절차를 정의한다.<br><small style='color:#94a3b8'>Define alternate processing procedures.</small>",
  "유지보수 매뉴얼을 준비한다.<br><small style='color:#94a3b8'>Prepare the maintenance manual.</small>",
  "사용자가 제안한 변경사항을 구현한다.<br><small style='color:#94a3b8'>Implement the changes users have suggested.</small>"
],
correct: 0,
explanation: `<p><b>성능 기준선(Baseline) 개발 및 모니터링</b>이 최우선입니다. 실증적 데이터를 기반으로 시스템 수정 여부를 판단해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 기준선 개발 + 모니터링 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>실증 데이터 기반 의사결정 — 원인 파악 후 조치</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 대체 처리 절차</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">성능 자체를 개선하지 않음, 원인 미파악 상태</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 유지보수 매뉴얼</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">성능 문제와 무관한 문서 작업</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 사용자 제안 변경 구현</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">원인 모른 채 변경 → 효과 불확실, 오히려 악화 가능</td></tr>
</table>
<div class="sbox"><b>📊 성능 문제 대응 원칙:</b><br>
• <b>1단계: 측정(Baseline)</b> → 2단계: 모니터링 → 3단계: 분석 → 4단계: 조치<br>
• "우려"만으로 즉시 변경 금지 — <b>실증 데이터(Empirical Data)</b> 확보가 선행<br>
• 감사인 역할 = 체계적·객관적 접근 권고 (사용자 요청 즉시 수용 ✗)</div>`,
reference:"CRM Chapter 4: IS Operations — Performance Monitoring & Capacity Management",
keyConcepts:[
"성능 기준선(Baseline)|시스템 성능 측정 기준점 설정 — 이후 모니터링·비교·의사결정의 기반",
"실증 데이터 기반 접근|성능 우려 시 즉시 변경 금지 — 측정→모니터링→분석→조치 순서 준수",
"감사인 권고 원칙|주관적 불만이 아닌 객관적 데이터 기반 판단 — 사용자 제안 무조건 수용 ✗"
]
},

// ============================================================
// Q207 - Authentication Server Performance
// ============================================================
{
id: 207,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `CRM 애플리케이션 감사 중 IS 감사인은 피크 시간대에 사용자 로그온 시간이 현저히 길어지는 것을 관찰했다. 로그온 후 평균 응답 시간은 허용 범위 내이다. IS 감사인이 권고해야 할 사항은?<br><small style="color:#94a3b8">While conducting an audit on the CRM application, the IS auditor observes that it takes a significantly long time for users to log on during peak hours. After logged on, the average response time is within acceptable limits. Which should the IS auditor recommend?</small>`,
options: [
  "시스템이 현재 비즈니스 요구사항을 충족하므로 조치 불필요.<br><small style='color:#94a3b8'>No action should be taken because the system meets current business requirements.</small>",
  "IT가 네트워크 대역폭을 증가시켜 성능을 개선해야 한다.<br><small style='color:#94a3b8'>IT should increase the network bandwidth to improve performance.</small>",
  "사용자에게 시스템 사용법에 대한 상세 매뉴얼을 제공해야 한다.<br><small style='color:#94a3b8'>Users should be provided with detailed manuals to use the system properly.</small>",
  "인증 서버에 대한 성능 측정 기준을 수립해야 한다.<br><small style='color:#94a3b8'>Establish performance measurement criteria for the authentication servers.</small>"
],
correct: 3,
explanation: `<p><b>인증 서버 성능 측정 기준 수립</b>이 정답입니다. 로그온만 느리고 로그온 후 정상이라면 문제는 인증 서버에 있으며, 측정 기준을 통해 원인을 정량화하고 개선할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 조치 불필요</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">느린 로그온 = 직원 생산성 저하 — 무시 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 네트워크 대역폭 증가</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">로그온 후 응답 정상 → 네트워크가 원인이 아닐 수 있음 (원인 미확인 상태 조치)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 사용자 매뉴얼 제공</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">로그온 문제 ≠ 사용법 문제 — 교육으로 해결 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 인증 서버 성능 기준 수립 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>허용 임계값 정량화 → 측정 → 원인 파악 → 개선</b></td></tr>
</table>
<div class="sbox"><b>🔍 성능 문제 진단 키워드 분석:</b><br>
• <b>로그온만 느림</b> + 로그온 후 정상 → 병목 = <b>인증 서버</b> (네트워크·애플리케이션 아님)<br>
• <b>피크 시간대만</b> → 용량/부하 관련 문제 시사<br>
• 감사인 접근: 원인 추정으로 즉시 조치 ✗ → <b>성능 기준 수립 후 체계적 진단</b></div>`,
reference:"CRM Chapter 4: IS Operations — Authentication & Performance Management",
keyConcepts:[
"인증 서버 성능 기준|로그온만 느린 경우 인증 서버 병목 — 성능 임계값 정량화로 체계적 진단",
"증상 기반 원인 특정|로그온 느림+응답 정상 → 네트워크 아닌 인증 서버 문제 — 증상으로 범위 좁히기",
"원인 미확인 시 조치 금지|대역폭 증가 등 추정 기반 조치 ✗ — 측정 기준 수립이 선행"
]
},

// ============================================================
// Q208 - Optimal Server Configuration
// ============================================================
{
id: 208,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `서버가 처리 요구사항을 지원하도록 최적으로 구성되어 있는지 확인하기 위해 IS 감사인이 검토해야 할 것은?<br><small style="color:#94a3b8">Which of the following should the IS auditor review to ensure that servers are optimally configured to support processing requirements?</small>`,
options: [
  "벤치마크 테스트 결과.<br><small style='color:#94a3b8'>Benchmark test results</small>",
  "서버 로그.<br><small style='color:#94a3b8'>Server logs</small>",
  "다운타임 보고서.<br><small style='color:#94a3b8'>Downtime reports</small>",
  "서버 이용률 데이터.<br><small style='color:#94a3b8'>Server utilization data</small>"
],
correct: 3,
explanation: `<p><b>서버 이용률 데이터</b>는 과소/과다 사용 서버를 식별하고 최적 구성 여부를 판단하는 데 가장 적합한 자료입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">제공 정보</th><th style="padding:8px;border:1px solid #334155">최적 구성 판단</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">벤치마크 테스트</td><td style="padding:8px;border:1px solid #ddd">표준 기준 대비 성능 비교</td><td style="padding:8px;border:1px solid #ddd">✗ 조직 특화 최적 구성 데이터 부족</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">서버 로그</td><td style="padding:8px;border:1px solid #ddd">수행된 활동 기록</td><td style="padding:8px;border:1px solid #ddd">✗ 이용률 데이터 미포함</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">다운타임 보고서</td><td style="padding:8px;border:1px solid #ddd">장애로 인한 비가동 시간</td><td style="padding:8px;border:1px solid #ddd">✗ 구성 최적화와 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>서버 이용률 데이터 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>CPU·메모리·디스크 사용률</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 과소/과다 사용 식별 → ROI 최적화</b></td></tr>
</table>
<div class="sbox"><b>📈 서버 최적 구성 검토 포인트:</b><br>
• <b>이용률 모니터링</b> = 과소 사용 서버 식별 → 비용 효율성 저하 방지<br>
• 벤치마크 = 표준화된 비교 도구 (조직 특화 ✗)<br>
• 서버 로그 = 활동 기록 (이용률 ≠ 활동)<br>
• 핵심: <b>"최적 구성"</b> = 자원 이용률 최적화 = <b>ROI 극대화</b></div>`,
reference:"CRM Chapter 4: IS Operations — Server Utilization & Capacity Planning",
keyConcepts:[
"서버 이용률 데이터|CPU·메모리·디스크 사용률 모니터링 — 과소/과다 사용 식별로 최적 구성 판단",
"벤치마크 vs 이용률|벤치마크=표준 기준 비교, 이용률=실제 조직 환경 사용량 — 최적 구성은 이용률이 핵심",
"이용률과 ROI|과소 사용 서버 = 비용 효율성 저하 — 이용률 비율 제고로 투자 수익 극대화"
]
},

// ============================================================
// Q209 - System Parameters Review
// ============================================================
{
id: 209,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `시스템 매개변수(파라미터)를 검토할 때 IS 감사인의 주된 관심사(PRIMARY concern)는?<br><small style="color:#94a3b8">When reviewing system parameters, an IS auditor's PRIMARY concern should be that:</small>`,
options: [
  "보안과 성능 요구사항 모두를 충족하도록 설정되어 있다.<br><small style='color:#94a3b8'>They are set to meet both security and performance requirements.</small>",
  "변경사항이 감사 추적에 기록되고 주기적으로 검토된다.<br><small style='color:#94a3b8'>Changes are recorded in an audit trail and periodically reviewed.</small>",
  "변경사항이 승인되고 적절한 문서로 뒷받침된다.<br><small style='color:#94a3b8'>Changes are authorized and supported by appropriate documents.</small>",
  "시스템 매개변수에 대한 접근이 제한되어 있다.<br><small style='color:#94a3b8'>Access to parameters in the system is restricted.</small>"
],
correct: 0,
explanation: `<p><b>보안과 성능 요구사항의 균형</b>이 시스템 매개변수의 1차적 관심사입니다. 매개변수가 올바르게 설정되지 않으면 다른 통제(감사 추적, 승인, 접근 제한)가 있어도 부정적 영향을 방지할 수 없습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">판정</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 보안+성능 충족 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>예방적 (설정 자체)</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 파라미터의 근본 목적 — 올바른 설정이 최우선</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 감사 추적 + 주기 검토</td><td style="padding:8px;border:1px solid #ddd">탐지적</td><td style="padding:8px;border:1px solid #ddd">✗ 잘못된 설정 하에서는 모니터링도 무효</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 승인 + 문서화</td><td style="padding:8px;border:1px solid #ddd">탐지적</td><td style="padding:8px;border:1px solid #ddd">✗ 승인·문서가 있어도 설정 자체가 잘못이면 영향 불변</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 접근 제한</td><td style="padding:8px;border:1px solid #ddd">예방적 (접근)</td><td style="padding:8px;border:1px solid #ddd">✗ 접근 통제해도 잘못된 값이면 악영향 지속</td></tr>
</table>
<div class="sbox"><b>⚙️ 시스템 파라미터 검토 원칙:</b><br>
• <b>PRIMARY = 설정 값의 적정성</b> (보안 ↔ 성능 균형)<br>
• B·C·D는 모두 "파라미터가 올바르게 설정된 후"에 의미 있는 보조 통제<br>
• 핵심 논리: <b>잘못된 설정 + 완벽한 통제 = 여전히 부정적 영향</b></div>`,
reference:"CRM Chapter 4: IS Operations — System Parameters & Configuration",
keyConcepts:[
"시스템 파라미터 PRIMARY|보안과 성능의 균형이 최우선 — 설정 자체가 올바라야 다른 통제가 유효",
"통제 우선순위|설정 적정성(예방) > 감사 추적·승인(탐지) > 접근 제한 — 근본 설정이 최우선",
"잘못된 설정의 영향|승인·문서화·접근 제한이 있어도 파라미터가 부적절하면 영향 불가피"
]
},

// ============================================================
// Q210 - Storage Capacity Management
// ============================================================
{
id: 210,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `IT 인프라를 검토하는 중 IS 감사인은 스토리지 자원이 지속적으로 추가되고 있음을 발견했다. IS 감사인이 해야 할 조치는?<br><small style="color:#94a3b8">While reviewing the IT infrastructure, an IS auditor notices that storage resources are continuously being added. The IS auditor should:</small>`,
options: [
  "디스크 미러링 사용을 권고한다.<br><small style='color:#94a3b8'>Recommend the use of disk mirroring.</small>",
  "원격지 저장소의 적절성을 검토한다.<br><small style='color:#94a3b8'>Review the adequacy of offsite storage.</small>",
  "용량 관리 프로세스를 검토한다.<br><small style='color:#94a3b8'>Review the capacity management process.</small>",
  "압축 알고리즘 사용을 권고한다.<br><small style='color:#94a3b8'>Recommend the use of a compression algorithm.</small>"
],
correct: 2,
explanation: `<p><b>용량 관리(Capacity Management) 프로세스 검토</b>가 정답입니다. 스토리지가 지속 추가되는 것은 체계적 용량 계획 부재를 시사하며, 해결책 제시 전 근본 원인 파악이 선행되어야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 디스크 미러링</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">스토리지 요구량을 오히려 증가시킴 — 용량 계획 없이 부적절</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 원격지 저장소 검토</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">백업/재해복구 관련 — 스토리지 증가 문제와 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 용량 관리 프로세스 검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>전략적 관점에서 자원 계획·예측·효율적 사용 보장</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 압축 알고리즘</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">성능 저하 가능 — 원인 조사 전 해결책 제시는 부적절</td></tr>
</table>
<div class="sbox"><b>💾 용량 관리(Capacity Management) 핵심:</b><br>
• 정의: IT 자원의 <b>계획·모니터링</b>으로 효율적·효과적 사용 보장<br>
• <b>전략적 관점</b> — 수요 예측 + 계획적 장비 구매<br>
• 감사인 원칙: <b>해결책(미러링·압축) 전에 프로세스(용량 관리) 검토가 선행</b><br>
• Q206~209 공통 패턴: 문제 발견 → <b>즉시 해결책 ✗ → 프로세스/측정/모니터링 우선</b></div>`,
reference:"CRM Chapter 4: IS Operations — Capacity Management & Storage Planning",
keyConcepts:[
"용량 관리 프로세스|IT 자원의 전략적 계획·모니터링 — 효율적 사용과 계획적 확장 보장",
"스토리지 지속 추가 징후|체계적 용량 계획 부재 시사 — 해결책 전 프로세스 검토 선행",
"해결책 vs 프로세스|미러링·압축 등 기술적 해결책은 원인 파악 후 — 감사인은 프로세스 적정성을 먼저 검토"
]
},

// ============================================================
// Q211 - Peak Hours Unexpected Downtime
// ============================================================
{
id: 211,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `다음 중 피크 운영 시간대에 수행할 경우 예상치 못한 다운타임을 초래할 수 있는 것은?<br><small style="color:#94a3b8">Doing which of the following during peak production hours can result in unexpected downtime?</small>`,
options: [
  "데이터 마이그레이션 수행.<br><small style='color:#94a3b8'>Performing data migration</small>",
  "전기 시스템 예방 정비 수행.<br><small style='color:#94a3b8'>Performing preventive maintenance on electrical systems</small>",
  "개발 환경에서 스테이징 환경으로 애플리케이션 이관.<br><small style='color:#94a3b8'>Promoting applications from development to the staging environment</small>",
  "데이터 센터의 대기 라우터 재구성.<br><small style='color:#94a3b8'>Reconfiguring a standby router in the data center</small>"
],
correct: 1,
explanation: `<p><b>전기 시스템 예방 정비</b>는 유지보수 작업자의 실수나 사고로 인해 계획되지 않은 다운타임을 유발할 수 있습니다. 예방 정비는 반드시 비피크 시간대 또는 유지보수 윈도우에 예약해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">피크 시간 영향</th><th style="padding:8px;border:1px solid #334155">다운타임 가능성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 데이터 마이그레이션</td><td style="padding:8px;border:1px solid #ddd">성능 저하 가능</td><td style="padding:8px;border:1px solid #ddd">✗ 다운타임은 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 전기 시스템 예방 정비 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>물리적 사고 위험</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 실수 시 전원 차단 → 예상치 못한 다운타임</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 개발→스테이징 이관</td><td style="padding:8px;border:1px solid #ddd">운영 환경과 무관</td><td style="padding:8px;border:1px solid #ddd">✗ 스테이징 ≠ 운영</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 대기 라우터 재구성</td><td style="padding:8px;border:1px solid #ddd">비운영 장비</td><td style="padding:8px;border:1px solid #ddd">✗ 대기(Standby) 상태 → 트래픽 영향 없음</td></tr>
</table>
<div class="sbox"><b>⚡ 피크 시간대 작업 위험도 판단 키:</b><br>
• <b>물리적 인프라 작업</b>(전기·냉각·배선) = 사고 시 <b>즉시 다운타임</b> → 비피크/유지보수 윈도우 필수<br>
• 데이터 마이그레이션 = 성능 영향 O, 다운타임 ✗<br>
• 비운영 환경(스테이징) / 비운영 장비(대기 라우터) = 운영 영향 ✗<br>
• 핵심 구분: <b>"성능 저하" ≠ "다운타임"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Maintenance Scheduling & Availability",
keyConcepts:[
"예방 정비 스케줄링|전기 시스템 등 물리 인프라 정비는 비피크/유지보수 윈도우에 수행 — 피크 시 사고=다운타임",
"성능 저하 vs 다운타임|데이터 마이그레이션=성능 영향, 전기 정비 사고=다운타임 — 두 개념 구분 필수",
"비운영 자원|스테이징 환경·대기 라우터는 운영 트래픽과 격리 — 피크 시간 영향 없음"
]
},

// ============================================================
// Q212 - Network Performance Monitoring Tools
// ============================================================
{
id: 212,
domain: "4",
ks: "4A6 Systems Availability and Capacity Management",
question: `다음 중 네트워크 성능 모니터링 도구에 의해 가장 직접적으로 영향을 받는 것은?<br><small style="color:#94a3b8">Which of the following is MOST directly affected by network performance monitoring tools?</small>`,
options: [
  "무결성(Integrity).<br><small style='color:#94a3b8'>Integrity</small>",
  "가용성(Availability).<br><small style='color:#94a3b8'>Availability</small>",
  "완전성(Completeness).<br><small style='color:#94a3b8'>Completeness</small>",
  "기밀성(Confidentiality).<br><small style='color:#94a3b8'>Confidentiality</small>"
],
correct: 1,
explanation: `<p><b>가용성(Availability)</b>이 네트워크 모니터링 도구의 가장 직접적인 영향 대상입니다. 네트워크 문제를 관찰하고 시정 조치를 취함으로써 네트워크가 필요 시 사용 가능하도록 보장합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">속성</th><th style="padding:8px;border:1px solid #334155">모니터링 도구와의 관계</th><th style="padding:8px;border:1px solid #334155">직접 영향</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">무결성</td><td style="padding:8px;border:1px solid #ddd">네트워크 오류 전파 감지 가능</td><td style="padding:8px;border:1px solid #ddd">간접적 — 주 목적 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>가용성 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>성능 관찰 → 문제 감지 → 시정 조치</b></td><td style="padding:8px;border:1px solid #ddd"><b>가장 직접적 — 네트워크 신뢰성·가용성 보장</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">완전성</td><td style="padding:8px;border:1px solid #ddd">통신 완전성은 종단점이 측정</td><td style="padding:8px;border:1px solid #ddd">✗ 모니터링 도구 범위 밖</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">기밀성</td><td style="padding:8px;border:1px solid #ddd">비암호화 트래픽 관찰 가능</td><td style="padding:8px;border:1px solid #ddd">오히려 위협 — 기밀성 침해 가능</td></tr>
</table>
<div class="sbox"><b>🌐 네트워크 모니터링 도구 정리:</b><br>
• <b>주 목적</b> = 네트워크 신뢰성(Reliability) → <b>가용성</b> 보장<br>
• 부수 효과: 오류 감지(무결성 간접 기여), 트래픽 관찰(<b>기밀성 위협</b> 가능)<br>
• 완전성 = 종단점(End-point)에서 측정 — 모니터링 도구와 무관<br>
• 주의: 모니터링 도구 자체가 <b>기밀성 침해 수단</b>이 될 수 있음 → 사용 정책·보호 필요</div>`,
reference:"CRM Chapter 4: IS Operations — Network Monitoring & Availability",
keyConcepts:[
"네트워크 모니터링 주 목적|성능 관찰·문제 감지·시정 조치 → 가용성(Availability)에 가장 직접적 영향",
"모니터링과 기밀성|비암호화 트래픽 관찰 가능 → 기밀성 침해 위험 — 사용 정책·보호 필수",
"완전성 측정|통신 완전성은 종단점(End-point)이 측정 — 네트워크 모니터링 도구 범위 밖"
]
},

// ============================================================
// Q213 - RTO Increase Impact
// ============================================================
{
id: 213,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `복구 시간 목표(RTO)가 증가하면:<br><small style="color:#94a3b8">If the recovery time objective (RTO) increases:</small>`,
options: [
  "재해 허용도(Disaster Tolerance)가 증가한다.<br><small style='color:#94a3b8'>The disaster tolerance increases.</small>",
  "복구 비용이 증가한다.<br><small style='color:#94a3b8'>The cost of recovery increases.</small>",
  "콜드 사이트를 사용할 수 없다.<br><small style='color:#94a3b8'>A cold site cannot be used.</small>",
  "데이터 백업 빈도가 증가한다.<br><small style='color:#94a3b8'>The data backup frequency increases.</small>"
],
correct: 0,
explanation: `<p><b>RTO 증가 = 재해 허용도 증가</b>입니다. RTO가 길어지면 업무 중단을 더 오래 감내할 수 있으므로 재해 허용도가 높아지고, 복구 비용은 오히려 낮아집니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 재해 허용도 증가 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>RTO↑ = 허용 중단 시간↑ = 재해 허용도↑</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 복구 비용 증가</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">RTO↑ → 복구 비용↓ (긴급성 낮아짐)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 콜드 사이트 사용 불가</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">오히려 RTO↑ → 콜드 사이트 사용 가능해짐</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 백업 빈도 증가</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">백업 빈도는 RPO와 관련 — RTO와 무관</td></tr>
</table>
<div class="sbox"><b>⏱️ RTO vs RPO 핵심 관계:</b><br>
• <b>RTO↑</b> = 허용 중단 시간↑ = 재해 허용도↑ = 복구 비용↓ = 콜드 사이트 가능<br>
• <b>RTO↓</b> = 허용 중단 시간↓ = 재해 허용도↓ = 복구 비용↑ = 핫 사이트 필요<br>
• <b>RPO</b> = 데이터 손실 허용량 → 백업 빈도와 관련 (RTO와 구분!)<br>
• RTO와 비용은 <b>반비례</b> 관계</div>`,
reference:"CRM Chapter 4: IS Operations — RTO, RPO & Disaster Tolerance",
keyConcepts:[
"RTO와 재해 허용도|RTO↑ = 허용 중단 시간↑ = 재해 허용도↑ — 비례 관계",
"RTO와 복구 비용|RTO↑ = 복구 비용↓ (반비례) — RTO↓일수록 고가용성 전략 필요 → 비용↑",
"RTO vs RPO|RTO=중단 시간(복구 속도), RPO=데이터 손실(백업 빈도) — 혼동 주의",
"RTO와 사이트 유형|RTO 짧음→핫 사이트, RTO 길음→콜드 사이트 가능"
]
},

// ============================================================
// Q214 - Recovery Strategy for High RTO
// ============================================================
{
id: 214,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `높은 복구 시간 목표(RTO)를 가진 민감(Sensitive) 시스템에 가장 적절한 복구 전략은?<br><small style="color:#94a3b8">Which of the following would be the MOST appropriate recovery strategy for a sensitive system with a high recovery time objective (RTO)?</small>`,
options: [
  "웜 사이트(Warm site).<br><small style='color:#94a3b8'>Warm site</small>",
  "핫 사이트(Hot site).<br><small style='color:#94a3b8'>Hot site</small>",
  "콜드 사이트(Cold site).<br><small style='color:#94a3b8'>Cold site</small>",
  "이동형 복구 사이트(Mobile recovery site).<br><small style='color:#94a3b8'>Mobile recovery site</small>"
],
correct: 2,
explanation: `<p><b>콜드 사이트</b>가 정답입니다. 높은 RTO = 복구에 시간 여유 있음 → 가장 비용 효율적인 콜드 사이트가 적절합니다. 민감(Sensitive) 시스템은 수작업으로 허용 가능한 비용 내에서 장기간 운영 가능합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">사이트 유형</th><th style="padding:8px;border:1px solid #334155">복구 시간</th><th style="padding:8px;border:1px solid #334155">비용</th><th style="padding:8px;border:1px solid #334155">적합 대상</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">핫 사이트</td><td style="padding:8px;border:1px solid #ddd">수 분~수 시간</td><td style="padding:8px;border:1px solid #ddd">최고</td><td style="padding:8px;border:1px solid #ddd">Critical 시스템 (낮은 RTO)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">웜 사이트</td><td style="padding:8px;border:1px solid #ddd">수 시간~수 일</td><td style="padding:8px;border:1px solid #ddd">중간</td><td style="padding:8px;border:1px solid #ddd">중간 RTO — 가능하나 비용 대비 부적절</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>콜드 사이트 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>수 일~수 주</b></td><td style="padding:8px;border:1px solid #ddd"><b>최저</b></td><td style="padding:8px;border:1px solid #ddd"><b>Sensitive 시스템 (높은 RTO)</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">이동형 사이트</td><td style="padding:8px;border:1px solid #ddd">가변적</td><td style="padding:8px;border:1px solid #ddd">콜드보다 高</td><td style="padding:8px;border:1px solid #ddd">높은 RTO에 비용 대비 부적절</td></tr>
</table>
<div class="sbox"><b>🏗️ 시스템 분류와 복구 사이트 매칭:</b><br>
• <b>Critical</b>(핵심) + 낮은 RTO → <b>핫 사이트</b><br>
• <b>Vital</b>(중요) + 중간 RTO → <b>웜 사이트</b><br>
• <b>Sensitive</b>(민감) + 높은 RTO → <b>콜드 사이트</b> (수작업 대체 가능)<br>
• 핵심 원칙: <b>RTO가 높을수록 저비용 솔루션이 적절</b> — 과도한 투자 회피</div>`,
reference:"CRM Chapter 4: IS Operations — Recovery Site Selection & RTO",
keyConcepts:[
"콜드 사이트|최저 비용 복구 사이트 — 높은 RTO·Sensitive 시스템에 가장 적절",
"시스템 분류별 사이트|Critical→핫, Vital→웜, Sensitive→콜드 — RTO와 비용의 균형",
"RTO와 사이트 선택|RTO↑ → 저비용 사이트(콜드) 적절 / RTO↓ → 고비용 사이트(핫) 필요",
"웜 사이트 함정|높은 RTO에도 가능하나 콜드 대비 비용 과다 → MOST appropriate 아님"
]
},

// ============================================================
// Q215 - Maintenance Vendor Change
// ============================================================
{
id: 215,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `IS 감사인은 IT 관리자가 비용 절감을 위해 핵심 컴퓨터 시스템 유지보수 벤더를 최근 변경했음을 확인했다. 새 벤더는 저렴하지만 인시던트 해결 시간이 기존과 다르다. IS 감사인의 가장 큰 우려사항은?<br><small style="color:#94a3b8">An IS auditor determined that the IT manager recently changed the vendor responsible for maintenance on critical systems to cut costs. The new contract specifies a change in incident resolution time. Which should be the GREATEST concern?</small>`,
options: [
  "재해복구계획(DRP)이 무효화되어 수정이 필요할 수 있다.<br><small style='color:#94a3b8'>Disaster recovery plans (DRPs) may be invalid and need to be revised.</small>",
  "시스템 장애 시 거래 비즈니스 데이터가 손실될 수 있다.<br><small style='color:#94a3b8'>Transactional business data may be lost in the event of system failure.</small>",
  "새 유지보수 벤더가 조직의 정책에 익숙하지 않다.<br><small style='color:#94a3b8'>The new maintenance vendor is not familiar with the organization's policies.</small>",
  "애플리케이션 소유자가 변경 사항을 통보받지 못했다.<br><small style='color:#94a3b8'>Application owners were not informed of the change.</small>"
],
correct: 3,
explanation: `<p><b>애플리케이션 소유자 미통보</b>가 가장 큰 우려입니다. 핵심 시스템의 인시던트 해결 시간 변경은 비즈니스 프로세스에 직접 영향을 미치므로, 해결 시간이 비즈니스 요구에 부합하는지 애플리케이션 소유자가 확인해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. DRP 무효화</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">DRP 수정은 필요할 수 있으나, 더 큰 위험은 소유자 미인지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 데이터 손실</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">데이터 손실은 백업 빈도(RPO) 문제 — 유지보수 벤더 변경과 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 벤더 정책 미숙지</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">계약 조건에 정책 준수 포함 가능 — 소유자 미통보보다 낮은 위험</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 애플리케이션 소유자 미통보 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>해결 시간 변경이 비즈니스 요구와 불일치 가능 — 핵심 프로세스 악영향</b></td></tr>
</table>
<div class="sbox"><b>👤 애플리케이션 소유자(Application Owner) 역할:</b><br>
• 비즈니스 요구사항의 <b>최종 결정권자</b> — IT 변경이 비즈니스에 미치는 영향 판단<br>
• 인시던트 해결 시간 = <b>비즈니스 요구</b>에 부합해야 함 (비용만으로 결정 ✗)<br>
• 핵심 시스템 변경 시 소유자 미통보 = <b>비즈니스-IT 정렬 실패</b><br>
• CISA 원칙: IT 결정은 항상 <b>비즈니스 요구</b>에 의해 주도되어야 함</div>`,
reference:"CRM Chapter 4: IS Operations — Vendor Management & Incident Resolution",
keyConcepts:[
"애플리케이션 소유자 통보|핵심 시스템 변경 시 소유자 미통보 = 최대 위험 — 비즈니스 요구 정렬 실패",
"인시던트 해결 시간|비용 절감으로 해결 시간 변경 시 비즈니스 영향 평가 필수 — 소유자 확인 선행",
"비즈니스-IT 정렬|IT 결정(벤더·비용)은 비즈니스 요구에 의해 주도 — 비용만으로 결정 불가"
]
},

// ============================================================
// Q216 - Problem Management First Step
// ============================================================
{
id: 216,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `문제 관리(Problem Management) 메커니즘 실행의 첫 번째 단계는?<br><small style="color:#94a3b8">The FIRST step in the execution of a problem management mechanism should be:</small>`,
options: [
  "이슈 분석(Issue analysis).<br><small style='color:#94a3b8'>Issue analysis</small>",
  "예외 순위 지정(Exception ranking).<br><small style='color:#94a3b8'>Exception ranking</small>",
  "예외 보고(Exception reporting).<br><small style='color:#94a3b8'>Exception reporting</small>",
  "근본 원인 분석(Root cause analysis).<br><small style='color:#94a3b8'>Root cause analysis</small>"
],
correct: 2,
explanation: `<p><b>예외 보고(Exception Reporting)</b>가 문제 관리의 첫 번째 단계입니다. 운영 이슈를 보고(로깅)해야 이후 순위 지정, 분석, 근본 원인 분석이 가능합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">순서</th><th style="padding:8px;border:1px solid #334155">단계</th><th style="padding:8px;border:1px solid #334155">설명</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>1️⃣</b></td><td style="padding:8px;border:1px solid #ddd"><b>예외 보고 (Reporting) ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>운영 이슈 식별·기록 — 모든 후속 단계의 전제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">2️⃣</td><td style="padding:8px;border:1px solid #ddd">예외 순위 지정 (Ranking)</td><td style="padding:8px;border:1px solid #ddd">보고된 예외의 우선순위·심각도 분류</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">3️⃣</td><td style="padding:8px;border:1px solid #ddd">이슈 분석 (Analysis)</td><td style="padding:8px;border:1px solid #ddd">문제 상세 분석·해결 방안 도출</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">4️⃣</td><td style="padding:8px;border:1px solid #ddd">근본 원인 분석 (RCA)</td><td style="padding:8px;border:1px solid #ddd">재발 방지를 위한 근본 원인 규명</td></tr>
</table>
<div class="sbox"><b>📋 문제 관리 프로세스 순서:</b><br>
• <b>보고(Report)</b> → 순위(Rank) → 분석(Analyze) → 근본 원인(RCA) → 해결(Resolve)<br>
• 핵심 논리: 보고 없이는 순위 지정 불가, 식별 없이는 분석 불가<br>
• "FIRST step" 문제 = <b>선행 조건 없이 수행 가능한 단계</b>를 찾기</div>`,
reference:"CRM Chapter 4: IS Operations — Problem Management Process",
keyConcepts:[
"예외 보고|문제 관리의 첫 단계 — 운영 이슈 식별·기록이 모든 후속 활동의 전제",
"문제 관리 순서|보고→순위→분석→RCA→해결 — 각 단계는 이전 단계 완료가 전제",
"근본 원인 분석(RCA)|예외 식별·분류 후 수행 — 문제 관리의 첫 단계 아님"
]
},

// ============================================================
// Q217 - Medical Transcription Backup Concerns
// ============================================================
{
id: 217,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `의료 전사(Medical Transcription) 서비스를 제공하는 소규모 조직의 감사에서 IS 감사인이 백업·복원 프로세스 관련 여러 문제를 발견했다. 감사인의 가장 큰 우려사항은?<br><small style="color:#94a3b8">During an audit of a small organization that provides medical transcription services, an IS auditor observes several issues related to the backup and restore process. Which should be the auditor's GREATEST concern?</small>`,
options: [
  "백업 매체의 복원 테스트가 수행되지 않으나, 모든 데이터 복원 요청은 성공적이었다.<br><small style='color:#94a3b8'>Restoration testing is not performed; however, all data restore requests have been successful.</small>",
  "데이터 백업 및 보존 정책이 3년간 비즈니스 소유자에 의해 검토되지 않았다.<br><small style='color:#94a3b8'>The policy for data backup and retention has not been reviewed by the business owner for the past three years.</small>",
  "조직이 제3자 서비스 제공자를 통해 전사 백업 매체를 원격지에 보관하며, 해당 제공자는 연 1회 재고 조사를 수행한다.<br><small style='color:#94a3b8'>The organization stores transcription backup media offsite using a third-party provider that inventories backups annually.</small>",
  "마케팅 부서 데이터 파일의 백업 실패 알림이 IT 관리자에 의해 후속 처리되지 않는다.<br><small style='color:#94a3b8'>Failed backup alerts for marketing department data files are not followed up on by the IT administrator.</small>"
],
correct: 2,
explanation: `<p><b>제3자 보관 + 연 1회 재고 조사</b>가 가장 큰 우려입니다. 의료 전사 데이터는 기밀 환자 정보를 포함하며, 백업 매체 분실은 개인정보보호법 위반·과징금·평판 손상을 초래합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">위험</th><th style="padding:8px;border:1px solid #334155">판정</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 복원 테스트 미수행</td><td style="padding:8px;border:1px solid #ddd">가용성 위험</td><td style="padding:8px;border:1px solid #ddd">실제 복원 성공으로 일부 완화됨</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 정책 3년간 미검토</td><td style="padding:8px;border:1px solid #ddd">정책 적정성 위험</td><td style="padding:8px;border:1px solid #ddd">우려 사항이나 정보 유출 위험은 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 제3자 보관 + 연 1회 재고 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>기밀성·규정 준수 위험</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 기밀 환자 데이터 유출 → 법적 제재·평판 손상</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 마케팅 백업 실패 미처리</td><td style="padding:8px;border:1px solid #ddd">가용성 위험 (비핵심)</td><td style="padding:8px;border:1px solid #ddd">마케팅 데이터 ≠ 규제 대상 의료 데이터</td></tr>
</table>
<div class="sbox"><b>🏥 의료 데이터 백업 보관 핵심:</b><br>
• <b>의료 전사 데이터</b> = 기밀 환자 정보 → 개인정보보호법(HIPAA 등) 적용<br>
• 제3자 보관 시 <b>빈번한 물리적 재고 조사</b> + 제공자 통제 평가 필수<br>
• 연 1회 재고 = <b>매체 분실 감지 지연</b> → 최대 11개월간 미인지 가능<br>
• 핵심 판단: <b>기밀성·규정 준수 위험 > 가용성 위험</b> (특히 규제 산업)</div>`,
reference:"CRM Chapter 4: IS Operations — Backup Media Management & Data Privacy",
keyConcepts:[
"제3자 백업 매체 보관|기밀 데이터의 제3자 보관 시 빈번한 재고 조사·통제 평가 필수 — 연 1회는 부족",
"의료 데이터 기밀성|환자 정보 포함 매체 분실 = 개인정보보호법 위반·과징금·평판 손상",
"위험 우선순위|규제 산업에서 기밀성·규정 준수 위험 > 가용성·정책 위험",
"보상 통제 판단|복원 테스트 미수행이나 실제 성공 = 위험 일부 완화 (보상 통제 인정)"
]
},

// ============================================================
// Q218 - Preventing Critical IT System Failures
// ============================================================
{
id: 218,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `다음 중 핵심 IT 시스템 장애의 재발을 방지하는 가장 좋은 방법은?<br><small style="color:#94a3b8">Which of the following is the BEST method to ensure that critical IT system failures do not reoccur?</small>`,
options: [
  "이중화 시스템에 투자한다.<br><small style='color:#94a3b8'>Invest in redundant systems.</small>",
  "후속 감사를 수행한다.<br><small style='color:#94a3b8'>Conduct a follow-up audit.</small>",
  "시스템 성능을 모니터링한다.<br><small style='color:#94a3b8'>Monitor system performance.</small>",
  "근본 원인 분석(RCA)을 수행한다.<br><small style='color:#94a3b8'>Perform root cause analysis.</small>"
],
correct: 3,
explanation: `<p><b>근본 원인 분석(Root Cause Analysis)</b>은 인시던트 발생의 핵심 이유를 규명하여 적절한 시정 조치를 가능하게 하고, 재발을 방지합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 이중화 시스템</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">해결책 중 하나일 수 있으나 원인 파악 없이 가정하는 것 — 근본 문제 미해결</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 후속 감사</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">감사는 운영 문제의 해결책이 아님 — IT 일상 프로세스로 소유해야 함</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 성능 모니터링</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">데이터 수집 수단 — RCA에 기여하나 단독으로 재발 방지 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 근본 원인 분석(RCA) ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>발생 원인 규명 → 적절한 시정 조치 → 재발 방지</b></td></tr>
</table>
<div class="sbox"><b>🔍 RCA vs 다른 접근법:</b><br>
• <b>RCA</b> = 문제의 <b>근원(Origin)</b>을 찾아 해결 → 재발 방지의 핵심<br>
• 이중화 = 증상 대응(Symptom Treatment) — 원인 불명 시 동일 장애 반복 가능<br>
• 모니터링 = 데이터 수집 도구 — RCA의 <b>입력(Input)</b>이지 해결책 아님<br>
• 감사 = 통제 평가 도구 — 운영 문제는 <b>IT 부서가 소유</b>해야 함</div>`,
reference:"CRM Chapter 4: IS Operations — Root Cause Analysis & Problem Management",
keyConcepts:[
"근본 원인 분석(RCA)|인시던트의 핵심 원인 규명 → 적절한 시정 조치 → 재발 방지의 최선 방법",
"RCA vs 이중화|이중화=증상 대응(가정 기반), RCA=원인 해결(근거 기반) — RCA가 선행되어야 함",
"모니터링과 RCA 관계|모니터링=데이터 수집(RCA 입력) — 단독으로 재발 방지 불가",
"운영 문제 소유권|운영 장애 해결은 IT 일상 프로세스 — 감사에 의존 ✗"
]
},

// ============================================================
// Q219 - Security Log Management
// ============================================================
{
id: 219,
domain: "4",
ks: "4A7 Problem and Incident Management",
question: `다음 중 효과적인 보안 로그 관리에 가장 유용한 것은?<br><small style="color:#94a3b8">Which of the following is MOST useful for effective security log management?</small>`,
options: [
  "로그를 수집, 분석, 보존하는 자동화 도구를 구현한다.<br><small style='color:#94a3b8'>Implementing automated tools to collect, analyze and retain logs</small>",
  "역사적 데이터 가용성을 위해 로그를 무기한 보관·저장한다.<br><small style='color:#94a3b8'>Archiving and storing logs indefinitely to ensure historical data availability</small>",
  "모든 시스템, 데이터베이스, 장치, 도구에서 모든 로그를 수집한다.<br><small style='color:#94a3b8'>Collecting all logs from all systems, databases, devices and tools</small>",
  "보안 관리자가 매일 로그를 검토하여 보안 인시던트를 탐지·대응한다.<br><small style='color:#94a3b8'>Security manager reviewing logs daily to detect and respond to security incidents</small>"
],
correct: 0,
explanation: `<p><b>자동화 도구</b>가 효과적인 보안 로그 관리의 핵심입니다. 다양한 소스의 로그를 중앙 집중화하고, 실시간 분석으로 이상 패턴을 식별하며, 규제 요구에 맞게 보존합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 자동화 도구 구현 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>수집+분석+보존 자동화 — 대량 처리·실시간 알림·패턴 식별</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 무기한 보관</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">스토리지 한계 + 규제 데이터 보존 정책과 불일치</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 모든 로그 수집</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">수집 대상 로그의 유형·성격 선별이 필요 — 전수 수집은 비실용적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 보안 관리자 매일 검토</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">대량 로그의 수동 검토는 지루하고 비실용적 — 인간 분석가가 놓칠 수 있음</td></tr>
</table>
<div class="sbox"><b>📊 자동화 로그 관리의 장점:</b><br>
• <b>대량 처리</b> — 인간이 놓치는 이상 패턴·의심 활동 식별<br>
• <b>실시간 알림</b> — 잠재적 보안 인시던트 즉시 감지<br>
• <b>중앙 집중화</b> — 다양한 소스의 로그 통합 관리<br>
• <b>규제 준수</b> — 적절한 보존 기간 자동 적용 (무기한 ✗)<br>
• 핵심: "모든" 로그가 아닌 <b>적절한 유형·소스</b>의 로그 선별 수집</div>`,
reference:"CRM Chapter 4: IS Operations — Security Log Management & SIEM",
keyConcepts:[
"자동화 로그 관리|수집·분석·보존 자동화 — 대량 처리·실시간 탐지·패턴 식별로 효과적 관리",
"로그 보존 정책|무기한 보관 ✗ — 규제·컴플라이언스 요구에 맞는 적절한 기간 설정",
"로그 수집 범위|모든 로그 전수 수집 ✗ — 유형·성격·소스 기반 선별 수집이 적절",
"수동 vs 자동 검토|대량 로그의 수동 일일 검토는 비실용적 — 자동화 도구가 보완"
]
},

// ============================================================
// Q220 - DBA Separation of Duties
// ============================================================
{
id: 220,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `데이터베이스 환경을 감사할 때, IS 감사인이 데이터베이스 관리자(DBA)가 수행하는 다음 기능 중 가장 우려하는 것은?<br><small style="color:#94a3b8">When auditing a database environment, an IS auditor will be MOST concerned if the DBA is performing which of the following functions?</small>`,
options: [
  "변경 관리 절차에 따라 데이터베이스 변경을 수행한다.<br><small style='color:#94a3b8'>Performing database changes according to change management procedures</small>",
  "운영 체제에 패치 또는 업그레이드를 설치한다.<br><small style='color:#94a3b8'>Installing patches or upgrades to the operating system</small>",
  "테이블 공간 크기 조정 및 테이블 조인 제한에 대해 자문한다.<br><small style='color:#94a3b8'>Sizing table space and consulting on table join limitations</small>",
  "백업 및 복구 절차를 수행한다.<br><small style='color:#94a3b8'>Performing backup and recovery procedures</small>"
],
correct: 1,
explanation: `<p><b>OS 패치/업그레이드 설치</b>는 시스템 관리자(SA)의 역할이며, DBA가 수행 시 <b>직무 분리(SoD) 위반</b>입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">기능</th><th style="padding:8px;border:1px solid #334155">적정 수행자</th><th style="padding:8px;border:1px solid #334155">DBA 수행 시</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">DB 변경 (변경관리 준수)</td><td style="padding:8px;border:1px solid #ddd">DBA ✔</td><td style="padding:8px;border:1px solid #ddd">정상 — 절차 준수</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>OS 패치/업그레이드 설치</b></td><td style="padding:8px;border:1px solid #ddd"><b>시스템 관리자(SA)</b></td><td style="padding:8px;border:1px solid #ddd"><b>✗ 직무 분리 위반 — 최대 우려</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">테이블 공간/조인 자문</td><td style="padding:8px;border:1px solid #ddd">DBA ✔</td><td style="padding:8px;border:1px solid #ddd">정상 — DB 설계·유지보수 역할</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">백업 및 복구</td><td style="padding:8px;border:1px solid #ddd">DBA ✔</td><td style="padding:8px;border:1px solid #ddd">정상 — DB 운영 역할</td></tr>
</table>
<div class="sbox"><b>👥 DBA vs 시스템 관리자(SA) 역할 구분:</b><br>
• <b>DBA 정상 역할:</b> DB 변경, 테이블 설계·크기 조정, DB 백업/복구, DB 성능 튜닝<br>
• <b>SA 역할:</b> OS 패치/업그레이드, OS 구성, 서버 관리<br>
• DBA가 OS 접근 → <b>DB 수준을 넘어 시스템 수준 권한</b> 획득 → 통제 우회 위험<br>
• 핵심: <b>직무 분리(SoD)</b> = 한 사람이 DB + OS 모두 통제하면 안 됨</div>`,
reference:"CRM Chapter 4: IS Operations — DBA Roles & Separation of Duties",
keyConcepts:[
"DBA와 직무 분리|DBA가 OS 패치 설치 = 시스템 관리자 역할 겸임 → 직무 분리(SoD) 위반",
"DBA 정상 역할|DB 변경·테이블 관리·백업/복구·성능 튜닝 — 모두 DB 범위 내 정상 기능",
"DBA vs SA 구분|DBA=데이터베이스 수준, SA=운영체제 수준 — 역할 겸임 시 통제 우회 위험"
]
},

// ============================================================
// Q221 - Change Management & System Availability
// ============================================================
{
id: 221,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 조직의 변경 관리 프로세스 효과성을 평가한다. 시스템 가용성을 보장하기 위해 IS 감사인이 찾아야 할 가장 중요한 통제는?<br><small style="color:#94a3b8">An IS auditor evaluates the effectiveness of the change management process. What is the MOST important control to ensure system availability?</small>`,
options: [
  "변경사항이 항상 IT 관리자에 의해 승인된다.<br><small style='color:#94a3b8'>Changes are authorized by IT managers at all times.</small>",
  "사용자 수용 테스트(UAT)가 수행되고 적절히 문서화된다.<br><small style='color:#94a3b8'>User acceptance testing (UAT) is performed and properly documented.</small>",
  "테스트 계획 및 절차가 존재하고 철저히 준수된다.<br><small style='color:#94a3b8'>Test plans and procedures exist and are closely followed.</small>",
  "각 개발 프로젝트의 일부로 용량 계획이 수행된다.<br><small style='color:#94a3b8'>Capacity planning is performed as part of each development project.</small>"
],
correct: 2,
explanation: `<p><b>테스트 계획 및 절차의 존재와 준수</b>가 변경 관리에서 시스템 가용성을 보장하는 가장 중요한 통제입니다. 체계적 테스트로 변경이 시스템 안정성에 미치는 영향을 사전 검증합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. IT 관리자 승인</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">승인자는 BA·CCB·기타 권한자 — 반드시 IT 관리자일 필요 없음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. UAT 수행·문서화</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">중요하나 가용성보다 기능 요구사항 충족에 초점</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 테스트 계획·절차 준수 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>변경의 시스템 영향 사전 검증 → 가용성 보장의 핵심 통제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 용량 계획</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">가용성 보장 불가 + 변경 통제 프로세스의 일부 아님</td></tr>
</table>
<div class="sbox"><b>🔄 변경 관리와 가용성 핵심:</b><br>
• <b>테스트 계획·절차</b> = 변경이 운영 환경에 미치는 영향을 사전 검증 → 장애 예방<br>
• UAT = 비즈니스 요구 충족 확인 (가용성보다 <b>기능</b> 초점)<br>
• 승인 = IT 관리자 한정 ✗ → <b>CCB(변경통제위원회)</b> 등 적절한 권한자<br>
• 용량 계획 = 개발 프로젝트 범위 — 변경 통제와 별개</div>`,
reference:"CRM Chapter 4: IS Operations — Change Management & Testing Controls",
keyConcepts:[
"변경 관리 테스트 통제|테스트 계획·절차 존재+준수 — 시스템 가용성 보장의 가장 중요한 통제",
"UAT vs 테스트 계획|UAT=기능 요구 충족, 테스트 계획=시스템 안정성·가용성 검증 — 목적 구분",
"변경 승인 권한|IT 관리자 한정 ✗ — BA·CCB·기타 권한 대표자가 승인 가능"
]
},

// ============================================================
// Q222 - Change Control Design Effectiveness Testing
// ============================================================
{
id: 222,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `변경 통제 프로세스의 설계 효과성을 테스트하는 가장 효율적이고 충분히 신뢰할 수 있는 방법은?<br><small style="color:#94a3b8">Which of the following is the MOST efficient and sufficiently reliable way to test the design effectiveness of a change control process?</small>`,
options: [
  "변경 요청의 표본 모집단을 테스트한다.<br><small style='color:#94a3b8'>Test a sample population of change requests.</small>",
  "승인된 변경의 표본을 테스트한다.<br><small style='color:#94a3b8'>Test a sample of authorized changes.</small>",
  "변경 통제 프로세스 담당자를 인터뷰한다.<br><small style='color:#94a3b8'>Interview personnel in charge of the change control process.</small>",
  "프로세스의 전체 워크스루(End-to-end walk-through)를 수행한다.<br><small style='color:#94a3b8'>Perform an end-to-end walk-through of the process.</small>"
],
correct: 3,
explanation: `<p><b>전체 워크스루(End-to-end Walk-through)</b>가 설계 효과성 테스트에 가장 효율적이고 신뢰할 수 있는 방법입니다. 관찰을 통해 프로세스가 효과적으로 설계되었는지 전체 흐름을 검증합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">테스트 유형</th><th style="padding:8px;border:1px solid #334155">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 변경 요청 표본 테스트</td><td style="padding:8px;border:1px solid #ddd">준수성·운영 효과성 테스트</td><td style="padding:8px;border:1px solid #ddd">설계 효과성 테스트 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 승인된 변경 표본 테스트</td><td style="padding:8px;border:1px solid #ddd">부분적 운영 테스트</td><td style="padding:8px;border:1px solid #ddd">승인 절차 미검증 + 우회 변경 미탐지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 담당자 인터뷰</td><td style="padding:8px;border:1px solid #ddd">지식 확인</td><td style="padding:8px;border:1px solid #ddd">알고 있어도 따르지 않을 수 있음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 전체 워크스루 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>설계 효과성 테스트</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 관찰을 통한 전체 프로세스 흐름 검증</b></td></tr>
</table>
<div class="sbox"><b>🔍 설계 효과성 vs 운영 효과성 구분:</b><br>
• <b>설계 효과성(Design)</b> = 프로세스가 올바르게 <b>설계</b>되었는가? → <b>워크스루</b><br>
• <b>운영 효과성(Operating)</b> = 프로세스가 실제로 <b>작동</b>하는가? → <b>표본 테스트(샘플링)</b><br>
• 인터뷰 = 지식 확인만 가능 — "알지만 따르지 않음" 탐지 불가<br>
• 승인된 변경만 테스트 = <b>선택 편향</b> — 통제 우회 변경 미포함</div>`,
reference:"CRM Chapter 4: IS Operations — Change Control Testing Methods",
keyConcepts:[
"워크스루|End-to-end 프로세스 관찰 — 설계 효과성 테스트의 가장 효율적·신뢰할 수 있는 방법",
"설계 vs 운영 효과성|설계=프로세스 설계 적정성(워크스루), 운영=실제 작동 여부(샘플 테스트)",
"인터뷰의 한계|지식 확인만 가능 — 실제 준수 여부 검증 불가 (알지만 미준수 가능)",
"승인 변경 표본 편향|승인된 것만 테스트 → 승인 절차·통제 우회 변경 미검증"
]
},

// ============================================================
// Q223 - Change Management Audit Scope
// ============================================================
{
id: 223,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 모든 IT 운영 시스템의 변경 관리 프로세스를 감사하도록 요청받았다. 감사 프로젝트의 범위 정의에 가장 도움이 되는 문서는?<br><small style="color:#94a3b8">An IS auditor is asked to audit the change management process for all IT operational systems. Which document will BEST aid the auditor in defining the scope for the audit project?</small>`,
options: [
  "엔터프라이즈 아키텍처(EA).<br><small style='color:#94a3b8'>Enterprise architecture (EA)</small>",
  "통제 카탈로그(Control catalog).<br><small style='color:#94a3b8'>Control catalog</small>",
  "위험 등록부(Risk register).<br><small style='color:#94a3b8'>Risk register</small>",
  "IT 조직도(IT organizational chart).<br><small style='color:#94a3b8'>IT organizational chart</small>"
],
correct: 0,
explanation: `<p><b>엔터프라이즈 아키텍처(EA)</b>는 IT 환경 전체에 대한 정보를 제공하여 "모든 IT 운영 시스템"의 변경 관리 감사 범위를 정의하는 데 가장 적합합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">문서</th><th style="padding:8px;border:1px solid #334155">용도</th><th style="padding:8px;border:1px solid #334155">범위 정의 적합성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>EA ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>IT 환경 전체 구조·시스템 목록</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ "모든 IT 시스템" 파악 → 범위 정의 최적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">통제 카탈로그</td><td style="padding:8px;border:1px solid #ddd">통제 테스트 계획</td><td style="padding:8px;border:1px solid #ddd">범위 정의 후 다음 단계 — 통제 테스트 시 활용</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">위험 등록부</td><td style="padding:8px;border:1px solid #ddd">감사 대상 시스템 우선순위</td><td style="padding:8px;border:1px solid #ddd">감사 계획에 유용하나 범위 정의와 다름</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">IT 조직도</td><td style="padding:8px;border:1px solid #ddd">프로세스 흐름·인력 이해</td><td style="padding:8px;border:1px solid #ddd">감사 계획에 유용하나 범위 정의와 다름</td></tr>
</table>
<div class="sbox"><b>📐 감사 단계별 문서 활용:</b><br>
• <b>1단계 — 범위 정의:</b> EA (IT 환경·시스템 전체 파악)<br>
• <b>2단계 — 감사 계획:</b> 위험 등록부 (우선순위), IT 조직도 (프로세스 흐름)<br>
• <b>3단계 — 통제 테스트:</b> 통제 카탈로그 (테스트 대상 통제 식별)<br>
• 핵심: "모든 IT 시스템" 키워드 → <b>전체 IT 환경 조감도 = EA</b></div>`,
reference:"CRM Chapter 4: IS Operations — Change Management Audit & Enterprise Architecture",
keyConcepts:[
"EA와 감사 범위|EA는 IT 환경 전체 구조 제공 — 모든 IT 시스템 대상 감사 범위 정의에 최적",
"감사 단계별 문서|범위=EA, 계획=위험등록부·조직도, 테스트=통제카탈로그 — 단계별 용도 구분",
"통제 카탈로그 시점|범위 정의 후 통제 테스트 계획 시 활용 — 범위 정의 단계 아님"
]
},

// ============================================================
// Q224 - Software Release Baselines
// ============================================================
{
id: 224,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 소프트웨어 릴리스의 기준선(Baseline) 기록을 지원하기 위해 권고해야 할 프로세스는?<br><small style="color:#94a3b8">Which process should an IS auditor recommend to assist in the recording of baselines for software releases?</small>`,
options: [
  "사용자 수용 테스트(UAT).<br><small style='color:#94a3b8'>User acceptance testing (UAT)</small>",
  "백업 및 복구.<br><small style='color:#94a3b8'>Backup and recovery</small>",
  "인시던트 관리.<br><small style='color:#94a3b8'>Incident management</small>",
  "구성 관리(Configuration management).<br><small style='color:#94a3b8'>Configuration management</small>"
],
correct: 3,
explanation: `<p><b>구성 관리(Configuration Management)</b>는 소프트웨어 릴리스 기준선의 자동화된 기록을 제공합니다. 새 릴리스 실패 시 기준선이 복귀 지점(Rollback point)을 제공합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. UAT</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">기준선 설정 후 수행되는 검증 단계 — 기록과 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 백업 및 복구</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">구성의 백업은 중요하나 기준선 생성 자체가 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 인시던트 관리</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">이상 이벤트 대응 — 기준선 구성 기록과 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 구성 관리 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>SW 릴리스 기준선 자동 기록 + 실패 시 복귀 지점 제공</b></td></tr>
</table>
<div class="sbox"><b>⚙️ 구성 관리(Configuration Management) 핵심:</b><br>
• <b>기준선(Baseline) 기록</b> = SW 릴리스의 알려진 정상 상태 스냅샷<br>
• 자동화 도구로 릴리스별 구성 항목(CI) 자동 기록<br>
• 릴리스 실패 시 → 기준선으로 <b>롤백(Rollback)</b> 가능<br>
• 관련 개념: <b>CMDB</b>(구성 관리 데이터베이스) = 모든 CI 정보 중앙 저장소</div>`,
reference:"CRM Chapter 4: IS Operations — Configuration Management & Release Baselines",
keyConcepts:[
"구성 관리와 기준선|SW 릴리스 기준선의 자동화된 기록 — 실패 시 롤백 지점 제공",
"기준선 vs 백업|기준선=알려진 정상 구성 상태, 백업=데이터 복사본 — 기준선 생성은 구성 관리 영역",
"UAT와 기준선 순서|기준선 설정 후 UAT 수행 — UAT는 검증 단계이지 기준선 기록 아님"
]
},

// ============================================================
// Q225 - Emergency Change Control Process
// ============================================================
{
id: 225,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `조직이 긴급 변경 통제 프로세스를 사용하여 애플리케이션에 긴급 변경을 구현하는 가장 가능성 높은 이유는?<br><small style="color:#94a3b8">Which of the following is the MOST likely reason an organization implements an emergency change using the emergency change control process?</small>`,
options: [
  "애플리케이션 소유자가 새 기능을 요청했다.<br><small style='color:#94a3b8'>The application owner requested new functionality.</small>",
  "변경이 애자일 방법론을 사용하여 개발되었다.<br><small style='color:#94a3b8'>Changes are developed using an agile methodology.</small>",
  "운영에 중대한 영향을 미칠 가능성이 높다.<br><small style='color:#94a3b8'>There is a high probability of a significant impact on operations.</small>",
  "운영 체제 벤더가 보안 패치를 릴리스했다.<br><small style='color:#94a3b8'>The operating system vendor has released a security patch.</small>"
],
correct: 2,
explanation: `<p><b>운영에 중대한 영향(Significant Impact on Operations)</b>이 긴급 변경의 핵심 사유입니다. 긴급 릴리스는 심각한 사용자 다운타임을 방지하기 위한 긴급 수정(Urgent Fix)입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 새 기능 요청</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">일반적으로 정상 변경 통제 절차 — 비즈니스 영향 없으면 긴급 불필요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 애자일 방법론</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">애자일 반복(Iteration) ≠ 긴급 릴리스 — 운영 영향 없으면 정상 절차</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 운영 중대 영향 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>심각한 다운타임 방지를 위한 긴급 수정 — 긴급 변경의 핵심 사유</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. OS 보안 패치</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">테스트 후 적용 — 긴급 릴리스 불필요</td></tr>
</table>
<div class="sbox"><b>🚨 긴급 변경(Emergency Change) 핵심:</b><br>
• <b>트리거</b> = 운영에 중대한 영향 / 심각한 사용자 다운타임 위험<br>
• <b>목적</b> = 긴급 수정(Urgent Fix)으로 서비스 연속성 보장<br>
• 정상 변경 vs 긴급 변경: <b>운영 영향의 심각도와 긴급성</b>이 구분 기준<br>
• 보안 패치 = 테스트 후 정상 절차로 적용 (즉시 적용 ✗)<br>
• 긴급 변경도 <b>사후 문서화·승인</b> 필수 — 절차 생략 ≠ 통제 생략</div>`,
reference:"CRM Chapter 4: IS Operations — Emergency Change Control Process",
keyConcepts:[
"긴급 변경 트리거|운영에 중대한 영향·심각한 다운타임 위험 — 긴급 변경의 핵심 사유",
"긴급 vs 정상 변경|운영 영향 심각도·긴급성이 구분 기준 — 새 기능·패치는 정상 절차",
"긴급 변경 통제|절차 간소화되나 사후 문서화·승인 필수 — 통제 자체를 생략하는 것 아님",
"보안 패치 적용|테스트 후 정상 절차 적용 — 긴급 릴리스 절차 불필요"
]
},

// ============================================================
// Q226 - Emergency Changes Bypassing Normal Process
// ============================================================
{
id: 226,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `정상적인 변경 통제 프로세스를 우회하는 긴급 변경이 가장 수용 가능한 경우는?<br><small style="color:#94a3b8">Emergency changes that bypass the normal change control process are MOST acceptable if:</small>`,
options: [
  "경영진이 변경 발생 후 검토하고 승인한다.<br><small style='color:#94a3b8'>Management reviews and approves the changes after they have occurred.</small>",
  "변경 시점에 동료(Peer)가 변경을 검토한다.<br><small style='color:#94a3b8'>The changes are reviewed by a peer at the time of the change.</small>",
  "운영 부서가 변경 통제 시스템에 변경을 문서화한다.<br><small style='color:#94a3b8'>The changes are documented in the change control system by the operations department.</small>",
  "경영진이 모든 긴급 변경을 사전 승인한다.<br><small style='color:#94a3b8'>Management has preapproved all emergency changes.</small>"
],
correct: 0,
explanation: `<p><b>경영진의 사후 검토·승인</b>이 긴급 변경 우회 시 가장 수용 가능한 통제입니다. 시스템 장애 시 경영진이 항상 가용하지 않으므로, 합리적 시간 내 사후 검토·승인이 허용됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 경영진 사후 검토·승인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>합리적 시간 내 사후 승인 — 책임성+통제 유지</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 동료 검토</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">일부 책임성 제공하나 경영진 검토·승인을 대체 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 운영부서 문서화</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">문서화만으로는 검토·승인 프로세스를 대체 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 경영진 사전 포괄 승인</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">경영진 책임 회피 — 비인가 변경이 경영진 모르게 발생 가능</td></tr>
</table>
<div class="sbox"><b>🚨 긴급 변경 통제 원칙:</b><br>
• <b>사전 승인 불가 시 → 사후 검토·승인</b> (합리적 시간 내)<br>
• 문서화만으로 부족 — <b>검토+승인</b>이 반드시 수반되어야 함<br>
• 사전 포괄 승인 = 통제 무력화 (경영진 책임 포기)<br>
• Q225 연결: 긴급 변경도 <b>통제 자체를 생략하는 것 아님</b> — 절차만 간소화</div>`,
reference:"CRM Chapter 4: IS Operations — Emergency Change Control & Post-Implementation Review",
keyConcepts:[
"긴급 변경 사후 승인|경영진의 사후 검토·승인이 가장 수용 가능한 보상 통제 — 합리적 시간 내 수행",
"사전 포괄 승인 위험|모든 긴급 변경 사전 승인 = 경영진 책임 회피 → 비인가 변경 위험",
"문서화 vs 승인|문서화만으로 검토·승인 프로세스 대체 불가 — 둘 다 필요",
"긴급 변경 통제 원칙|절차 간소화 ≠ 통제 생략 — 사후라도 경영진 검토·승인 필수"
]
},

// ============================================================
// Q227 - Testing Program Changes
// ============================================================
{
id: 227,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 ERP 애플리케이션의 변경 관리 프로세스를 검토하고 있다. 프로그램 변경을 테스트하는 가장 좋은 방법은?<br><small style="color:#94a3b8">An IS auditor is reviewing the change management process for an ERP application. Which is the BEST method for testing program changes?</small>`,
options: [
  "변경 티켓 표본을 선택하여 승인 여부를 검토한다.<br><small style='color:#94a3b8'>Select a sample of change tickets and review them for authorization.</small>",
  "프로그램 변경을 처음부터 끝까지 추적하여 워크스루를 수행한다.<br><small style='color:#94a3b8'>Perform a walk-through by tracing a program change from start to finish.</small>",
  "수정된 프로그램 표본을 변경 티켓으로 역추적한다.<br><small style='color:#94a3b8'>Trace a sample of modified programs to support change tickets.</small>",
  "쿼리 소프트웨어를 사용하여 모든 변경 티켓의 누락 필드를 분석한다.<br><small style='color:#94a3b8'>Use query software to analyze all change tickets for missing fields.</small>"
],
correct: 2,
explanation: `<p><b>수정된 프로그램에서 변경 티켓으로 역추적</b>이 가장 좋은 방법입니다. 이 방법은 변경 티켓 없이 수행된 미문서화 변경(Undocumented Changes)을 탐지할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">방법</th><th style="padding:8px;border:1px solid #334155">추적 방향</th><th style="padding:8px;border:1px solid #334155">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 티켓→승인 검토</td><td style="padding:8px;border:1px solid #ddd">티켓 → 승인</td><td style="padding:8px;border:1px solid #ddd">티켓 없는 변경 미탐지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 워크스루</td><td style="padding:8px;border:1px solid #ddd">프로세스 이해</td><td style="padding:8px;border:1px solid #ddd">모든 변경의 정상 절차 준수 확인 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 프로그램→티켓 역추적 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>프로그램 → 티켓</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 미문서화·비인가 변경 탐지 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 쿼리로 누락 필드 분석</td><td style="padding:8px;border:1px solid #ddd">티켓 완전성</td><td style="padding:8px;border:1px solid #ddd">티켓 없는 변경 미탐지</td></tr>
</table>
<div class="sbox"><b>🔄 추적 방향의 중요성:</b><br>
• <b>티켓 → 프로그램</b> (순방향) = 승인·문서화 확인 가능, But 티켓 없는 변경 놓침<br>
• <b>프로그램 → 티켓</b> (역방향) = <b>비인가·미문서화 변경 탐지</b> — 가장 효과적<br>
• Q222 워크스루 = 설계 효과성 테스트 / 여기서는 <b>운영 효과성(실제 준수)</b> 테스트<br>
• 핵심: 감사 시 <b>"실제 발생한 것 → 통제로 역추적"</b>이 우회 탐지에 최적</div>`,
reference:"CRM Chapter 4: IS Operations — Change Management Testing & Audit Techniques",
keyConcepts:[
"역추적(프로그램→티켓)|수정된 프로그램에서 변경 티켓으로 역추적 — 미문서화·비인가 변경 탐지 최적",
"추적 방향 원칙|순방향(티켓→프로그램)=승인 확인, 역방향(프로그램→티켓)=우회 탐지 — 역방향이 더 효과적",
"워크스루 vs 표본 테스트|워크스루=설계 효과성(Q222), 표본 역추적=운영 효과성 — 목적별 구분"
]
},

// ============================================================
// Q228 - IPF Recovery Procedures Basis
// ============================================================
{
id: 228,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `정보처리시설(IPF)의 복구 절차는 무엇에 기반하는 것이 가장 적절한가?<br><small style="color:#94a3b8">Recovery procedures for an information processing facility (IPF) are BEST based on:</small>`,
options: [
  "복구 시간 목표(RTO).<br><small style='color:#94a3b8'>Recovery time objective (RTO)</small>",
  "복구 시점 목표(RPO).<br><small style='color:#94a3b8'>Recovery point objective (RPO)</small>",
  "최대 허용 중단 시간(MTO).<br><small style='color:#94a3b8'>Maximum tolerable outage (MTO)</small>",
  "정보 보안 정책.<br><small style='color:#94a3b8'>Information security policy</small>"
],
correct: 0,
explanation: `<p><b>RTO(복구 시간 목표)</b>가 IPF 복구 절차의 기반입니다. RTO는 MTO에 기반한 <b>목표 복구 시간</b>으로, 가용한 복구 대안을 고려하여 설정됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">개념</th><th style="padding:8px;border:1px solid #334155">정의</th><th style="padding:8px;border:1px solid #334155">복구 절차 기반</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>RTO ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>목표 복구 시간 — MTO 기반 + 가용 복구 대안 고려</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 복구 절차의 직접적 기준</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">RPO</td><td style="padding:8px;border:1px solid #ddd">허용 데이터 손실량 — 백업 전략에 영향</td><td style="padding:8px;border:1px solid #ddd">데이터 복구 전략 기반 (절차 전체 아님)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">MTO</td><td style="padding:8px;border:1px solid #ddd">최대 허용 중단 시간 — 초과 시 조직 생존 위협</td><td style="padding:8px;border:1px solid #ddd">RTO의 상위 기준 (절차의 직접 기반 아님)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">정보 보안 정책</td><td style="padding:8px;border:1px solid #ddd">보안 원칙·기준 문서</td><td style="padding:8px;border:1px solid #ddd">✗ 복구 절차와 무관</td></tr>
</table>
<div class="sbox"><b>⏱️ MTO → RTO → 복구 절차 관계:</b><br>
• <b>MTO</b> = 조직이 감내할 수 있는 <b>최대 중단 시간</b> (초과 시 생존 위협)<br>
• <b>RTO</b> = MTO 내에서 설정하는 <b>목표 복구 시간</b> (RTO ≤ MTO)<br>
• <b>복구 절차</b> = RTO를 충족하도록 설계 (사이트 유형·자원·단계 결정)<br>
• <b>RPO</b> = 데이터 손실 허용량 → <b>백업 빈도·전략</b>에 영향 (복구 절차와 구분)<br>
• 관계: MTO(상한) → RTO(목표) → 복구 절차(실행) / RPO → 백업 전략</div>`,
reference:"CRM Chapter 4: IS Operations — RTO, MTO & Recovery Planning",
keyConcepts:[
"RTO와 복구 절차|RTO는 복구 절차의 직접적 기준 — MTO 기반 + 가용 복구 대안 고려하여 설정",
"MTO vs RTO|MTO=최대 허용 중단(생존 한계), RTO=목표 복구 시간(RTO≤MTO) — MTO는 RTO의 상한",
"RPO의 역할|RPO=데이터 손실 허용량 → 백업 빈도·전략 결정 — 복구 절차 전체의 기반 아님",
"복구 계획 흐름|MTO 결정 → RTO 설정 → 복구 전략·절차 설계 → RPO로 백업 전략 결정"
]
},

// ============================================================
// Q229 - Change Control Compliance Testing
// ============================================================
{
id: 229,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 수행하는 다음 테스트 중 조직의 변경 통제 절차 준수 여부를 판단하는 데 가장 효과적인 것은?<br><small style="color:#94a3b8">Which test performed by an IS auditor is the MOST effective in determining compliance with organizational change control procedures?</small>`,
options: [
  "소프트웨어 이관 기록을 검토하고 승인을 확인한다.<br><small style='color:#94a3b8'>Review software migration records and verify approvals.</small>",
  "발생한 변경을 식별하고 승인을 확인한다.<br><small style='color:#94a3b8'>Identify changes that have occurred and verify approvals.</small>",
  "변경 통제 문서를 검토하고 승인을 확인한다.<br><small style='color:#94a3b8'>Review change control documentation and verify approvals.</small>",
  "적절한 직원만 변경을 운영 환경에 이관할 수 있도록 보장한다.<br><small style='color:#94a3b8'>Ensure that only appropriate staff can migrate changes into production.</small>"
],
correct: 1,
explanation: `<p><b>실제 발생한 변경을 식별한 후 승인을 확인</b>하는 것이 가장 효과적입니다. 로그·수정 일자 등으로 실제 변경을 파악하면 문서화되지 않은 변경도 탐지할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">출발점</th><th style="padding:8px;border:1px solid #334155">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 이관 기록 → 승인</td><td style="padding:8px;border:1px solid #ddd">이관 기록(문서)</td><td style="padding:8px;border:1px solid #ddd">기록에 누락된 변경 미탐지</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 실제 변경 식별 → 승인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>실제 시스템(로그·수정일)</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 미문서화 변경 포함 — 가장 포괄적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 변경 통제 문서 → 승인</td><td style="padding:8px;border:1px solid #ddd">변경 통제 문서</td><td style="padding:8px;border:1px solid #ddd">문서에 누락된 변경 미탐지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 이관 권한 확인</td><td style="padding:8px;border:1px solid #ddd">접근 통제</td><td style="padding:8px;border:1px solid #ddd">핵심 통제이나 단독으로 준수 확인 불가</td></tr>
</table>
<div class="sbox"><b>🔍 변경 통제 감사 — 추적 방향 원칙:</b><br>
• <b>Q227과 동일 원칙:</b> 실제 발생(프로그램/시스템) → 문서로 역추적이 최적<br>
• A·C = 문서 기반 출발 → 문서에 없는 변경 놓침 (선택 편향)<br>
• <b>B = 실제 시스템 기반 출발</b> → 모든 변경 포착 가능 (미문서화 포함)<br>
• 핵심: <b>"실제 무엇이 변경되었는가?"</b>가 출발점이어야 가장 효과적</div>`,
reference:"CRM Chapter 4: IS Operations — Change Control Compliance Testing",
keyConcepts:[
"실제 변경 식별 우선|로그·수정일로 실제 변경 파악 후 승인 확인 — 미문서화 변경 탐지 가능",
"문서 기반 한계|이관 기록·변경 통제 문서 = 문서에 없는 변경 놓침 — 선택 편향 위험",
"역추적 원칙|Q227 연결: 실제 발생 → 문서 역추적이 우회·미문서화 탐지에 최적"
]
},

// ============================================================
// Q230 - Open-Source Software Patching
// ============================================================
{
id: 230,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `오픈소스 소프트웨어를 사용하는 조직의 애플리케이션 시스템에 패치를 제공하는 단일 인정된 개발자가 없다. 오픈소스 소프트웨어를 업데이트하는 가장 안전한 방법은?<br><small style="color:#94a3b8">The application systems using open-source software have no single recognized developer producing patches. Which is the MOST secure way of updating open-source software?</small>`,
options: [
  "패치를 재작성하여 적용한다.<br><small style='color:#94a3b8'>Rewrite the patches and apply them.</small>",
  "가용한 패치의 코드와 적용 사항을 검토한다.<br><small style='color:#94a3b8'>Review the code and application of available patches.</small>",
  "자체 패치를 개발한다.<br><small style='color:#94a3b8'>Develop in-house patches.</small>",
  "적합한 패치를 식별하고 적용 전 테스트한다.<br><small style='color:#94a3b8'>Identify and test suitable patches before applying them.</small>"
],
correct: 3,
explanation: `<p><b>적합한 패치 식별 + 적용 전 테스트</b>가 가장 안전한 방법입니다. 기존 개발자들이 제공하는 패치 중 적합한 것을 선별하고, 철저한 테스트 후 적용합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 패치 재작성</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">숙련 인력·시간 필요 — 비실용적·비안전</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 코드 검토만</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">코드 검토 가능하나 적용 전 철저한 테스트가 필수</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 자체 패치 개발</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">IT 부서의 기술·자원 부족 시 오히려 불안전</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 식별 + 테스트 후 적용 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>적합한 패치 선별 → 테스트 → 안전한 적용</b></td></tr>
</table>
<div class="sbox"><b>🔓 오픈소스 패치 관리 원칙:</b><br>
• 단일 개발자 없음 → 다수 커뮤니티 패치 중 <b>적합한 것 선별</b>이 핵심<br>
• <b>식별(Identify)</b> → <b>테스트(Test)</b> → 적용(Apply) 순서 준수<br>
• 코드 검토만으로 부족 — <b>실행 환경 테스트</b>가 반드시 수반<br>
• 재작성·자체 개발 = 자원 집약적 + 기술 부족 시 위험 증가</div>`,
reference:"CRM Chapter 4: IS Operations — Open-Source Patch Management",
keyConcepts:[
"오픈소스 패치 관리|적합한 패치 식별→테스트→적용이 가장 안전 — 단일 개발자 없는 환경의 최선",
"코드 검토 vs 테스트|코드 검토만으로 부족 — 실행 환경 테스트가 반드시 수반되어야 함",
"자체 개발 위험|IT 부서 기술·자원 부족 시 자체 패치 개발은 오히려 불안전"
]
},

// ============================================================
// Q231 - Patch Installation System Crash
// ============================================================
{
id: 231,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `현장 감사 중 IS 감사인은 보안 패치 설치로 인한 시스템 크래시를 경험했다. 이 사건의 재발 방지를 합리적으로 보장하기 위해 IS 감사인이 확인해야 할 사항은?<br><small style="color:#94a3b8">During fieldwork, an IS auditor experienced a system crash caused by a security patch installation. To ensure this event will not recur, the IS auditor should ensure that:</small>`,
options: [
  "시스템 관리자만 비업무 시간에 패치 프로세스를 수행한다.<br><small style='color:#94a3b8'>Only systems administrators perform the patch process during nonbusiness hours.</small>",
  "고객의 변경 관리 및 패치 프로세스에 적절한 통제가 있다.<br><small style='color:#94a3b8'>The client's change management and patching processes have proper controls.</small>",
  "패치가 운영 환경에서 병행 테스트를 통해 검증된다.<br><small style='color:#94a3b8'>Patches are validated using parallel testing in production.</small>",
  "위험 평가를 포함한 패치 승인 프로세스가 개발된다.<br><small style='color:#94a3b8'>An approval process of the patch, including a risk assessment, is developed.</small>"
],
correct: 1,
explanation: `<p><b>변경 관리 및 패치 프로세스의 적절한 통제</b>를 확인하는 것이 가장 포괄적인 해결책입니다. 테스트, 비운영 시간 구현, 백아웃 계획 등을 포함하는 전체 프로세스가 필요합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. SA + 비업무 시간</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">부분적 — 공식 절차(테스트·백아웃 등)가 더 중요</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 변경 관리·패치 프로세스 통제 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>테스트+스케줄링+백아웃+승인 포함 — 가장 포괄적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 운영 환경 병행 테스트</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">모든 패치 철저 테스트 불가능 — 비운영 시간 적용+백아웃이 더 중요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 승인+위험 평가 프로세스</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">승인만으로 사고 방지 불가 — 전체 변경 관리 프로세스가 필요</td></tr>
</table>
<div class="sbox"><b>🔧 패치 관리의 완전한 통제 체계:</b><br>
• <b>변경 관리 프로세스</b> = 테스트 + 스케줄링 + 승인 + 백아웃 계획 = 포괄적 통제<br>
• 부분적 통제(A·C·D)만으로는 재발 방지 불충분<br>
• 모든 패치의 철저한 테스트는 현실적 불가능 → <b>비운영 시간 적용 + 백아웃 계획</b>이 보상<br>
• 핵심: 개별 통제보다 <b>프로세스 전체의 적절성</b> 확인이 감사인의 역할</div>`,
reference:"CRM Chapter 4: IS Operations — Patch Management & Change Control",
keyConcepts:[
"패치 관리 통제|변경 관리 프로세스(테스트+스케줄링+승인+백아웃) 전체의 적절한 통제가 핵심",
"백아웃 계획|모든 패치 완벽 테스트 불가능 — 비운영 시간 적용+백아웃 계획이 보상 통제",
"부분 vs 전체 통제|승인만·시간만·테스트만 = 부분적 — 전체 프로세스 통제가 재발 방지의 핵심"
]
},

// ============================================================
// Q232 - Vendor Security Patches
// ============================================================
{
id: 232,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `벤더들이 소프트웨어 보안 결함을 수정하는 패치를 릴리스했다. IS 감사인이 권고해야 할 사항은?<br><small style="color:#94a3b8">Vendors have released patches fixing security flaws in their software. Which should an IS auditor recommend?</small>`,
options: [
  "설치 전 패치의 영향을 평가한다.<br><small style='color:#94a3b8'>Assess the impact of patches prior to installation.</small>",
  "벤더에게 모든 수정이 포함된 새 소프트웨어 버전을 요청한다.<br><small style='color:#94a3b8'>Ask the vendors for a new software version with all fixes included.</small>",
  "보안 패치를 즉시 설치한다.<br><small style='color:#94a3b8'>Install the security patch immediately.</small>",
  "향후 이 벤더와의 거래를 중단한다.<br><small style='color:#94a3b8'>Decline to deal with these vendors in the future.</small>"
],
correct: 0,
explanation: `<p><b>설치 전 패치 영향 평가</b>가 최우선입니다. 한 벤더의 패치가 다른 시스템에 영향을 미치는 경우가 다수 있으므로, 가능한 한 테스트 후 조직 전체에 배포해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 영향 평가 후 설치 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>패치 영향 평가 → 테스트 → 적절한 시점 배포</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 새 버전 요청</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">항상 가용하지 않음 + 전체 설치는 시간 소모적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 즉시 설치</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">영향 미파악 시 문제 유발 + 가용성 영향 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 벤더 거래 중단</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">결함 미해결 + 서비스 옵션 제한</td></tr>
</table>
<div class="sbox"><b>🩹 패치 관리 프로세스 원칙:</b><br>
• <b>평가(Assess)</b> → 테스트(Test) → 스케줄(Schedule) → 적용(Apply)<br>
• 보안 패치라도 <b>즉시 설치 ✗</b> — 다른 시스템 영향·가용성 문제 가능<br>
• 비즈니스에 수용 가능한 시점에 배포 (가용성 고려)<br>
• Q225(긴급 변경)와 구분: 보안 패치 = <b>정상 절차</b> / 운영 중대 영향 = 긴급 변경<br>
• Q231 연결: 패치로 인한 크래시 방지 = 사전 영향 평가+테스트가 핵심</div>`,
reference:"CRM Chapter 4: IS Operations — Patch Management & Impact Assessment",
keyConcepts:[
"패치 사전 영향 평가|설치 전 영향 평가 필수 — 한 벤더 패치가 다른 시스템에 영향 가능",
"보안 패치 즉시 설치 ✗|보안 패치도 테스트+비즈니스 적합 시점 배포 — 즉시 설치는 위험",
"패치 관리 순서|평가→테스트→스케줄→적용 — 보안 긴급성과 안정성의 균형"
]
},

// ============================================================
// Q233 - Change Request Separation of Duties
// ============================================================
{
id: 233,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `자체 개발 애플리케이션 검토 중 IS 감사인에게 가장 큰 우려가 되는 것은?<br><small style="color:#94a3b8">During the review of an in-house developed application, the GREATEST concern to an IS auditor is if a:</small>`,
options: [
  "사용자가 변경 요청을 제기하고 테스트 환경에서 테스트한다.<br><small style='color:#94a3b8'>A user raises a change request and tests it in the test environment.</small>",
  "프로그래머가 개발 환경에서 변경을 코딩하고 테스트 환경에서 테스트한다.<br><small style='color:#94a3b8'>A programmer codes a change in development and tests it in the test environment.</small>",
  "관리자가 변경 요청을 승인한 후 운영 환경에서 검토한다.<br><small style='color:#94a3b8'>A manager approves a change request and then reviews it in production.</small>",
  "관리자가 변경 요청을 시작(발의)하고 이후 이를 승인한다.<br><small style='color:#94a3b8'>A manager initiates a change request and subsequently approves it.</small>"
],
correct: 3,
explanation: `<p><b>동일인이 변경을 발의하고 승인</b>하는 것은 직무 분리(SoD) 원칙 위반입니다. 자신의 요청을 스스로 승인해서는 안 됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 사용자: 요청+테스트</td><td style="padding:8px;border:1px solid #ddd">✔ 정상</td><td style="padding:8px;border:1px solid #ddd">사용자 테스트 참여는 일반적 관행</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 프로그래머: 코딩+테스트</td><td style="padding:8px;border:1px solid #ddd">✔ 정상</td><td style="padding:8px;border:1px solid #ddd">개발 환경 코딩 + 별도 테스트 환경 = 좋은 관행</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 관리자: 승인+운영 검토</td><td style="padding:8px;border:1px solid #ddd">✔ 수용 가능</td><td style="padding:8px;border:1px solid #ddd">승인 후 운영 환경 확인 = 적절한 검토</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 관리자: 발의+승인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✗ SoD 위반</b></td><td style="padding:8px;border:1px solid #ddd"><b>자신의 요청을 스스로 승인 = 직무 분리 위반</b></td></tr>
</table>
<div class="sbox"><b>👥 변경 관리 직무 분리 원칙:</b><br>
• <b>발의(Initiate) ≠ 승인(Approve)</b> — 동일인 수행 시 SoD 위반<br>
• Q220(DBA+OS 패치)와 동일 원칙: <b>역할 간 견제와 균형</b>이 핵심<br>
• 사용자 테스트 참여, 프로그래머 개발+테스트, 관리자 검토 = 모두 정상<br>
• 핵심: <b>"자신의 요청을 자신이 승인"</b> = CISA 시험 단골 SoD 위반 패턴</div>`,
reference:"CRM Chapter 4: IS Operations — Change Management & Separation of Duties",
keyConcepts:[
"변경 요청 SoD|발의자 ≠ 승인자 — 동일인이 발의+승인 시 직무 분리 위반",
"변경 관리 정상 관행|사용자 테스트·프로그래머 개발+테스트·관리자 운영 검토 = 모두 수용 가능",
"SoD 핵심 원칙|자신의 요청을 스스로 승인 금지 — 견제·균형의 기본"
]
},

// ============================================================
// Q234 - CMDB Maintenance Concern
// ============================================================
{
id: 234,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `대규모 다국적 조직의 애플리케이션 변경 관리 프로세스를 검토하는 IS 감사인이 가장 우려해야 할 상황은?<br><small style="color:#94a3b8">An IS auditor reviewing the application change management process for a large multinational organization should be MOST concerned when:</small>`,
options: [
  "테스트 시스템이 운영 시스템과 다른 구성으로 실행된다.<br><small style='color:#94a3b8'>Test systems run different configurations than production systems.</small>",
  "변경 관리 기록이 종이 기반이다.<br><small style='color:#94a3b8'>Change management records are paper based.</small>",
  "구성 관리 데이터베이스(CMDB)가 유지 관리되지 않는다.<br><small style='color:#94a3b8'>The configuration management database is not maintained.</small>",
  "테스트 환경이 운영 서버에 설치되어 있다.<br><small style='color:#94a3b8'>The test environment is installed on the production server.</small>"
],
correct: 2,
explanation: `<p><b>CMDB 미유지 관리</b>가 가장 큰 우려입니다. CMDB는 구성 항목(CI)과 그 간의 의존성을 추적하며, 최신 상태가 아니면 잘못된 승인이나 테스트 단계에서 핵심 의존성 누락이 발생합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 테스트≠운영 구성</td><td style="padding:8px;border:1px solid #ddd">△</td><td style="padding:8px;border:1px solid #ddd">이상적이지 않으나 사유가 있을 수 있음 — CMDB보다 낮은 우려</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 종이 기반 기록</td><td style="padding:8px;border:1px solid #ddd">△</td><td style="padding:8px;border:1px solid #ddd">비효율적이나 적절히 유지 시 통제 관점 문제 없음</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. CMDB 미유지 관리 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>잘못된 승인 + 핵심 의존성 누락 → 변경 관리 통제 실패</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 테스트=운영 서버</td><td style="padding:8px;border:1px solid #ddd">△</td><td style="padding:8px;border:1px solid #ddd">이상적이지 않으나 환경이 분리되면 동일 서버 허용 가능</td></tr>
</table>
<div class="sbox"><b>📦 CMDB(구성 관리 데이터베이스) 핵심:</b><br>
• <b>CI(구성 항목)</b>와 <b>의존성(Dependencies)</b> 추적<br>
• 최신 상태 유지 필수 — 미유지 시:<br>
  &nbsp;&nbsp;→ 잘못된 승인 (영향 범위 오판)<br>
  &nbsp;&nbsp;→ 테스트 시 핵심 의존성 누락<br>
• 특히 <b>대규모 다국적 조직</b>에서 CMDB 미유지 = 연쇄 영향 파악 불가<br>
• Q224(구성 관리·기준선)와 연결: 구성 관리의 핵심 도구 = CMDB</div>`,
reference:"CRM Chapter 4: IS Operations — CMDB & Configuration Management",
keyConcepts:[
"CMDB 유지 관리|CI와 의존성 추적 — 미유지 시 잘못된 승인·의존성 누락으로 변경 관리 실패",
"CMDB와 대규모 조직|다국적 조직에서 CMDB 미유지 = 연쇄 영향 파악 불가 → 최대 우려",
"테스트·운영 환경 분리|동일 서버에 설치 가능 — 환경(논리적)이 분리되면 통제 문제 아님",
"종이 기반 기록|비효율적이나 적절히 유지 시 통제 관점 문제 없음 — 형태보다 관리가 핵심"
]
},

// ============================================================
// Q235 - Detecting Unauthorized Production Code Changes
// ============================================================
{
id: 235,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `운영 코드에 비인가 변경이 이루어졌는지 판단하는 가장 효과적인 감사 절차는?<br><small style="color:#94a3b8">The MOST effective audit procedure in determining if unauthorized changes have been made to production code is to:</small>`,
options: [
  "변경 통제 시스템 기록을 검토하고 오브젝트 코드 파일로 순방향 추적한다.<br><small style='color:#94a3b8'>Examine change control system records and trace them forward to object code files.</small>",
  "운영 프로그램 라이브러리의 접근 통제 권한을 검토한다.<br><small style='color:#94a3b8'>Review access control permissions operating within the production program libraries.</small>",
  "오브젝트 코드를 검사하여 변경 사례를 찾고 변경 통제 기록으로 역추적한다.<br><small style='color:#94a3b8'>Examine object code to find instances of changes and trace them back to change control records.</small>",
  "변경 통제 시스템 내 변경 승인 지정을 검토한다.<br><small style='color:#94a3b8'>Review change approved designations established within the change control system.</small>"
],
correct: 2,
explanation: `<p><b>오브젝트 코드에서 변경을 식별한 후 변경 통제 기록으로 역추적</b>하는 것이 가장 효과적입니다. 이는 비인가 코드 변경 위험을 직접 다루는 실증적 테스트(Substantive Test)입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">추적 방향</th><th style="padding:8px;border:1px solid #334155">비인가 변경 탐지</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 기록 → 코드 (순방향)</td><td style="padding:8px;border:1px solid #ddd">변경 기록 → 오브젝트 코드</td><td style="padding:8px;border:1px solid #ddd">✗ 기록에 없는 변경 미탐지</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 접근 통제 검토</td><td style="padding:8px;border:1px solid #ddd">예방적 통제 확인</td><td style="padding:8px;border:1px solid #ddd">✗ 이미 발생한 변경 탐지 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 코드 → 기록 (역추적) ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>오브젝트 코드 → 변경 기록</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 기록 없는 변경 = 비인가 변경 탐지</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 승인 지정 검토</td><td style="padding:8px;border:1px solid #ddd">승인된 변경만 확인</td><td style="padding:8px;border:1px solid #ddd">✗ 비인가 변경 직접 탐지 불가</td></tr>
</table>
<div class="sbox"><b>🔄 역추적 원칙 — 3문제 연속 출제 패턴:</b><br>
• <b>Q227:</b> 수정된 프로그램 → 변경 티켓 역추적 (프로그램 변경 테스트)<br>
• <b>Q229:</b> 실제 발생 변경 식별 → 승인 확인 (준수 테스트)<br>
• <b>Q235:</b> 오브젝트 코드 → 변경 통제 기록 역추적 (비인가 변경 탐지)<br>
• <b>공통 원칙:</b> 실제 발생한 것에서 출발 → 문서로 역추적 = 우회·미문서화 탐지 최적<br>
• 순방향(문서→실제) = 문서에 없는 것을 놓침 (선택 편향)</div>`,
reference:"CRM Chapter 4: IS Operations — Change Control Audit & Substantive Testing",
keyConcepts:[
"역추적으로 비인가 변경 탐지|오브젝트 코드 변경 → 변경 통제 기록 역추적 = 가장 효과적 실증 테스트",
"순방향 vs 역방향 추적|순방향=기록→코드(기록 누락 놓침), 역방향=코드→기록(비인가 변경 탐지)",
"접근 통제의 한계|예방적 통제 — 이미 발생한 비인가 변경 탐지 불가",
"CISA 역추적 패턴|Q227·Q229·Q235 공통: 실제 발생 → 문서 역추적이 우회 탐지 최적"
]
},

// ============================================================
// Q236 - Privileged Account Configuration Changes
// ============================================================
{
id: 236,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `기업이 미션 크리티컬 애플리케이션의 구성 변경을 처리하기 위해 특권 계정을 사용한다. 이 상황에서 위험을 제한하는 가장 적절한 통제는?<br><small style="color:#94a3b8">An enterprise uses privileged accounts to process configuration changes for mission-critical applications. Which is the BEST control to limit the risk?</small>`,
options: [
  "감사 추적이 정확하고 구체적인지 확인한다.<br><small style='color:#94a3b8'>Ensure that audit trails are accurate and specific.</small>",
  "직원이 적절한 교육을 받았는지 확인한다.<br><small style='color:#94a3b8'>Ensure that personnel have adequate training.</small>",
  "핵심 인력에 대해 신원 조회가 수행되는지 확인한다.<br><small style='color:#94a3b8'>Ensure that personnel background checks are performed for critical personnel.</small>",
  "핵심 변경에 대해 상급자 승인 및 검토가 수행되는지 확인한다.<br><small style='color:#94a3b8'>Ensure that supervisory approval and review are performed for critical changes.</small>"
],
correct: 3,
explanation: `<p><b>상급자 승인 및 검토</b>가 가장 적절한 통제입니다. 책임 있는 관리자의 승인·검토는 비인가 변경을 예방·탐지하고, 직무 분리를 보장합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 감사 추적</td><td style="padding:8px;border:1px solid #ddd">탐지적</td><td style="padding:8px;border:1px solid #ddd">특권 접근자가 변경·삭제 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 적절한 교육</td><td style="padding:8px;border:1px solid #ddd">예방적 (간접)</td><td style="padding:8px;border:1px solid #ddd">억제 효과 있으나 비인가 변경 방지 불충분</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 신원 조회</td><td style="padding:8px;border:1px solid #ddd">예방적 (기본)</td><td style="padding:8px;border:1px solid #ddd">매우 기본적 통제 — 오류·부정 방지·탐지 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 상급자 승인·검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>예방+탐지</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ SoD 보장 + 비인가 변경 예방·탐지</b></td></tr>
</table>
<div class="sbox"><b>🔑 특권 계정 통제 핵심:</b><br>
• <b>특권 계정</b> = 감사 추적 변경 가능 → 감사 추적만으로 부족<br>
• <b>상급자 승인·검토</b> = 예방(사전 승인) + 탐지(사후 검토) 이중 통제<br>
• 교육·신원 조회 = 보조적 통제 — 단독으로 비인가 변경 방지 불가<br>
• 핵심: 특권 접근 환경에서 <b>독립적 감독(Supervisory Oversight)</b>이 최선</div>`,
reference:"CRM Chapter 4: IS Operations — Privileged Access & Change Control",
keyConcepts:[
"상급자 승인·검토|특권 계정 환경에서 최선의 통제 — 예방(승인)+탐지(검토) 이중 기능",
"감사 추적의 한계|특권 접근자가 감사 추적 변경·삭제 가능 — 단독 통제로 불충분",
"특권 계정 위험|구성 변경+감사 추적 변경 가능 → 독립적 감독(SoD)이 핵심 보상 통제"
]
},

// ============================================================
// Q237 - Auditor Role in Patch Crash Prevention
// ============================================================
{
id: 237,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `조직이 최근 보안 패치를 설치했으나 운영 서버가 크래시되었다. 이 재발 확률을 최소화하기 위해 IS 감사인이 해야 할 것은?<br><small style="color:#94a3b8">An organization recently installed a security patch that crashed the production server. To minimize the probability of this occurring again, an IS auditor should:</small>`,
options: [
  "패치 릴리스 노트에 따라 패치를 적용한다.<br><small style='color:#94a3b8'>Apply the patch according to the patch's release notes.</small>",
  "적절한 변경 관리 프로세스가 마련되어 있는지 확인한다.<br><small style='color:#94a3b8'>Ensure that a good change management process is in place.</small>",
  "운영 환경에 배포하기 전에 패치를 철저히 테스트한다.<br><small style='color:#94a3b8'>Thoroughly test the patch before sending it to production.</small>",
  "위험 평가 후 패치를 승인한다.<br><small style='color:#94a3b8'>Approve the patch after doing a risk assessment.</small>"
],
correct: 1,
explanation: `<p><b>변경 관리 프로세스의 적절성 확인</b>이 IS 감사인의 역할입니다. 감사인은 프로세스를 검토하고 적절한 통제가 있는지 확인하며, 직접 패치를 적용·테스트·승인하지 않습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">수행 주체</th><th style="padding:8px;border:1px solid #334155">감사인 역할?</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 패치 적용</td><td style="padding:8px;border:1px solid #ddd">시스템 관리자</td><td style="padding:8px;border:1px solid #ddd">✗ 감사인 역할 아님</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 변경 관리 프로세스 확인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>IS 감사인</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 프로세스 검토·통제 확인·제안</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 패치 테스트</td><td style="padding:8px;border:1px solid #ddd">개발/운영 지원팀</td><td style="padding:8px;border:1px solid #ddd">✗ 감사인 역할 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 패치 승인</td><td style="padding:8px;border:1px solid #ddd">운영위원회/CCB</td><td style="padding:8px;border:1px solid #ddd">✗ 감사인 역할 아님</td></tr>
</table>
<div class="sbox"><b>👨‍💼 IS 감사인 역할 경계:</b><br>
• <b>감사인 역할:</b> 프로세스 검토 → 통제 적절성 확인 → 개선 제안<br>
• <b>감사인이 하지 않는 것:</b> 패치 적용(SA), 테스트(개발팀), 승인(CCB)<br>
• Q231과 비교: 동일 시나리오지만 <b>주어(Subject)가 다름</b><br>
  &nbsp;&nbsp;→ Q231 "감사인이 확인해야 할 것" = B(프로세스 통제)<br>
  &nbsp;&nbsp;→ Q237 "감사인이 해야 할 것" = B(프로세스 확인) — 직접 행동 ✗<br>
• 핵심: <b>감사인 = 독립적 평가자</b>, 운영 활동 직접 수행 금지</div>`,
reference:"CRM Chapter 4: IS Operations — Auditor Role in Patch & Change Management",
keyConcepts:[
"감사인 역할 경계|프로세스 검토·통제 확인·제안이 역할 — 패치 적용·테스트·승인은 감사인 역할 아님",
"변경 관리 프로세스 확인|패치 크래시 재발 방지 = 프로세스 적절성 검토가 감사인의 최선 조치",
"감사인 독립성|운영 활동(적용·테스트·승인) 직접 수행 시 독립성 훼손 — 평가자 역할 유지"
]
},

// ============================================================
// Q238 - System Configuration Review Evidence
// ============================================================
{
id: 238,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 시스템 구성 검토를 수행하고 있다. 현재 시스템 구성 설정을 뒷받침하는 가장 좋은 증거는?<br><small style="color:#94a3b8">An IS auditor is carrying out a system configuration review. Which is the BEST evidence in support of the current system configuration settings?</small>`,
options: [
  "시스템 관리자가 스프레드시트로 가져온 시스템 구성 값.<br><small style='color:#94a3b8'>System configuration values imported to a spreadsheet by the system administrator</small>",
  "IS 감사인이 시스템에서 직접 조회한 구성 값의 표준 보고서.<br><small style='color:#94a3b8'>Standard report with configuration values retrieved from the system by the IS auditor</small>",
  "시스템 관리자가 제공한 시스템 구성 설정의 날짜가 기재된 스크린샷.<br><small style='color:#94a3b8'>Dated screenshot of the system configuration settings made available by the system administrator</small>",
  "비즈니스 소유자에 의한 승인된 시스템 구성 값의 연간 검토.<br><small style='color:#94a3b8'>Annual review of approved system configuration values by the business owner</small>"
],
correct: 1,
explanation: `<p><b>IS 감사인이 시스템에서 직접 조회한 표준 보고서</b>가 가장 신뢰할 수 있는 증거입니다. 감사인은 감사 결과에 이해관계가 없으므로 직접 획득한 증거가 가장 신뢰성이 높습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">증거 출처</th><th style="padding:8px;border:1px solid #334155">신뢰성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. SA가 스프레드시트 가져오기</td><td style="padding:8px;border:1px solid #ddd">SA 제공 (가공 가능)</td><td style="padding:8px;border:1px solid #ddd">✗ 제시 전 수정 가능</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 감사인 직접 조회 보고서 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>감사인 직접 획득</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 가장 높은 신뢰성 — 이해관계 없음</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. SA 제공 스크린샷</td><td style="padding:8px;border:1px solid #ddd">SA 제공 (변경 가능)</td><td style="padding:8px;border:1px solid #ddd">✗ 촬영 전 설정 변경 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 소유자 연간 검토</td><td style="padding:8px;border:1px solid #ddd">비즈니스 소유자</td><td style="padding:8px;border:1px solid #ddd">✗ 현재 정보 미반영 가능</td></tr>
</table>
<div class="sbox"><b>📋 감사 증거 신뢰성 원칙:</b><br>
• <b>감사인 직접 획득</b> > 피감사자 제공 — 이해관계 없는 독립적 증거<br>
• <b>시스템 생성(System-generated)</b> > 수동 가공 — 변조 위험 낮음<br>
• 현재 시점 조회 > 과거 검토(연간) — 최신성 보장<br>
• SA 제공 증거(스프레드시트·스크린샷) = 제시 전 <b>수정·변조 가능</b><br>
• 핵심: <b>"누가 획득했는가" + "어떻게 생성되었는가"</b>가 신뢰성 판단 기준</div>`,
reference:"CRM Chapter 4: IS Operations — Audit Evidence & Configuration Review",
keyConcepts:[
"감사 증거 신뢰성|감사인 직접 획득 > 피감사자 제공 — 이해관계 없는 독립적 증거가 가장 신뢰",
"시스템 생성 증거|표준 보고서(시스템 생성) > 스프레드시트·스크린샷(수동 가공) — 변조 위험 낮음",
"SA 제공 증거 한계|스프레드시트·스크린샷은 제시 전 수정 가능 — 감사인 직접 조회가 우선"
]
},

// ============================================================
// Q239 - Patch Testing Under Resource Strain
// ============================================================
{
id: 239,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `벤더가 최근 몇 달간 여러 중요 보안 패치를 릴리스하여 관리자의 테스트·배포 역량에 부담이 되고 있다. 관리자가 패치 테스트를 줄여도 되는지 물었다. 조직이 취해야 할 접근법은?<br><small style="color:#94a3b8">A vendor released several critical security patches recently, straining administrators' ability to keep patches tested and deployed timely. Administrators asked to reduce testing. What approach should the organization take?</small>`,
options: [
  "현재의 테스트 및 패치 적용 프로세스를 계속 유지한다.<br><small style='color:#94a3b8'>Continue the current process of testing and applying patches.</small>",
  "테스트를 줄이고 적절한 백아웃 계획을 마련한다.<br><small style='color:#94a3b8'>Reduce testing and ensure that an adequate back-out plan is in place.</small>",
  "테스트 자원이 확보될 때까지 패치를 지연한다.<br><small style='color:#94a3b8'>Delay patching until resources for testing are available.</small>",
  "벤더의 패치 테스트에 의존한다.<br><small style='color:#94a3b8'>Rely on the vendor's testing of the patches.</small>"
],
correct: 0,
explanation: `<p><b>현재 프로세스 유지</b>가 정답입니다. 보안 패치의 신속한 적용과 철저한 테스트 모두 필수적이며, 단기간 다수 패치 릴리스는 일시적 문제일 수 있으므로 프로세스 변경 전 관찰이 적절합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 현재 프로세스 유지 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>테스트+적시 적용 모두 유지 — 일시적 문제일 수 있음</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 테스트 축소+백아웃</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">테스트 축소 = 운영 중단 위험↑ — 백아웃은 보상이나 사전 테스트가 우선</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 패치 지연</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">보안 패치 지연 = 취약점 노출 → 보안 침해 위험↑</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 벤더 테스트 의존</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">벤더 테스트 ≠ 조직 환경 적합성 — 호환성 문제 미검증</td></tr>
</table>
<div class="sbox"><b>🩹 패치 관리 — 테스트 vs 적시성 균형:</b><br>
• <b>테스트 축소</b> = 호환성 문제·운영 중단 위험 증가<br>
• <b>패치 지연</b> = 보안 취약점 노출 기간 증가<br>
• <b>벤더 테스트</b> = 조직 고유 환경·시스템 간 영향 미검증<br>
• 일시적 부담 → 정책·절차 변경 전 <b>상황 관찰</b>이 적절<br>
• 핵심: 보안과 안정성 <b>둘 다 타협하지 않는</b> 접근이 최선</div>`,
reference:"CRM Chapter 4: IS Operations — Patch Management & Testing Requirements",
keyConcepts:[
"패치 테스트 유지|자원 부담에도 테스트+적시 적용 프로세스 유지 — 보안·안정성 모두 타협 불가",
"테스트 축소 위험|호환성 미검증 → 운영 중단 위험 — 백아웃은 보상이나 사전 테스트가 우선",
"패치 지연 위험|보안 패치 지연 = 취약점 노출 기간 증가 → 보안 침해 위험",
"벤더 테스트 한계|벤더 환경 ≠ 조직 환경 — 조직 고유 호환성 테스트 불가"
]
},

// ============================================================
// Q240 - Developer Access to Production Command Line
// ============================================================
{
id: 240,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 개발자들이 운영 환경 OS의 명령줄(Command Line)에 운영자 접근 권한을 가지고 있음을 발견했다. 운영 환경에 대한 미탐지·비인가 프로그램 변경 위험을 가장 잘 완화하는 통제는?<br><small style="color:#94a3b8">An IS auditor discovers that developers have operator access to the command line of a production environment OS. Which control would BEST mitigate the risk of undetected and unauthorized program changes?</small>`,
options: [
  "명령줄에 입력된 명령어가 로깅된다.<br><small style='color:#94a3b8'>Commands typed on the command line are logged.</small>",
  "프로그램의 해시 키를 주기적으로 계산하여 최근 승인된 버전의 해시 키와 비교한다.<br><small style='color:#94a3b8'>Hash keys are calculated periodically for programs and matched against hash keys for the most recent authorized versions.</small>",
  "접근 제한 도구를 통해 사전 승인된 권한으로 OS 명령줄 접근이 부여된다.<br><small style='color:#94a3b8'>Access to the OS command line is granted through an access restriction tool with preapproved rights.</small>",
  "소프트웨어 개발 도구와 컴파일러가 운영 환경에서 제거되었다.<br><small style='color:#94a3b8'>Software development tools and compilers have been removed from the production environment.</small>"
],
correct: 1,
explanation: `<p><b>해시 키 주기적 비교</b>가 가장 효과적입니다. 프로그램 파일의 해시 값을 최근 승인 버전과 대조하여 모든 변경(인가·비인가)을 탐지할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">한계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 명령어 로깅</td><td style="padding:8px;border:1px solid #ddd">탐지적 (부분)</td><td style="padding:8px;border:1px solid #ddd">로그만으로는 통제 아님 — 로그 검토가 동반되어야 함</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 해시 키 비교 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>탐지적 (포괄)</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 모든 파일 변경 탐지 — 변경 수단 무관</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 접근 제한 도구</td><td style="padding:8px;border:1px solid #ddd">예방적</td><td style="padding:8px;border:1px solid #ddd">이미 명령줄 접근 있음 → 우회 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 개발 도구·컴파일러 제거</td><td style="padding:8px;border:1px solid #ddd">예방적 (부분)</td><td style="padding:8px;border:1px solid #ddd">변경 능력 제한하나 다른 수단 가능 + 미탐지 변경 미해결</td></tr>
</table>
<div class="sbox"><b>#️⃣ 해시 키 무결성 검증:</b><br>
• <b>해시 키</b> = 파일의 고유 디지털 지문 — 1비트라도 변경 시 해시 값 변경<br>
• 승인 버전의 해시 vs 현재 파일 해시 비교 → <b>모든 변경 탐지</b><br>
• 변경 수단(명령줄·도구·외부) 무관하게 결과(파일 변경) 탐지<br>
• "로그만 있으면 된다" 함정: <b>로그 존재 ≠ 통제</b> — 로그 검토가 반드시 수반<br>
• Q235(역추적)과 보완: 해시=파일 레벨 탐지, 역추적=프로세스 레벨 탐지</div>`,
reference:"CRM Chapter 4: IS Operations — File Integrity Monitoring & Hash Verification",
keyConcepts:[
"해시 키 무결성 검증|프로그램 해시를 승인 버전과 주기적 비교 — 모든 파일 변경 탐지 가능",
"로그 vs 통제|로그 존재만으로는 통제 아님 — 로그 검토·분석이 동반되어야 유효한 통제",
"개발자 운영 접근 위험|개발자의 운영 명령줄 접근 = SoD 위반 — 보상 통제로 해시 검증 최적",
"개발 도구 제거 한계|도구 제거는 변경 능력 제한하나 다른 수단 가능 + 미탐지 변경 미해결"
]
},

// ============================================================
// Q241 - Programmer Production Access in Small Enterprise
// ============================================================
{
id: 241,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `소규모 기업에서 애플리케이션 프로그래머가 운영 환경으로 프로그램을 이동할 수 있도록 허용되는 경우, 내부 부정 위험을 줄이기 위해 구현할 수 있는 통제는?<br><small style="color:#94a3b8">Which control can be implemented to reduce risk of internal fraud if application programmers are allowed to move programs into the production environment in a small enterprise?</small>`,
options: [
  "구현 후 기능 테스트(Post-implementation functional testing).<br><small style='color:#94a3b8'>Post-implementation functional testing</small>",
  "변경 사항의 등록 및 검토(Registration and review of changes).<br><small style='color:#94a3b8'>Registration and review of changes</small>",
  "사용자 요구사항의 검증(Validation of user requirements).<br><small style='color:#94a3b8'>Validation of user requirements</small>",
  "사용자 수용 테스트(UAT).<br><small style='color:#94a3b8'>User acceptance testing (UAT)</small>"
],
correct: 1,
explanation: `<p><b>변경 사항의 등록 및 독립적 검토</b>가 가장 효과적인 보상 통제입니다. 운영 환경 프로그램 변경의 독립적 검토를 통해 프로그래머가 투입한 비인가 변경·버전·기능을 식별할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">탐지 대상</th><th style="padding:8px;border:1px solid #334155">미문서화 기능 탐지</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 구현 후 기능 테스트</td><td style="padding:8px;border:1px solid #ddd">기능 작동 여부</td><td style="padding:8px;border:1px solid #ddd">✗ 미문서화 기능 탐지 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 변경 등록·검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>모든 변경 사항</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 비인가 변경·버전·기능 식별</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 사용자 요구사항 검증</td><td style="padding:8px;border:1px solid #ddd">요구사항 충족</td><td style="padding:8px;border:1px solid #ddd">✗ 요구 충족해도 미문서화 기능 포함 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. UAT</td><td style="padding:8px;border:1px solid #ddd">사용자 수용</td><td style="padding:8px;border:1px solid #ddd">✗ 수용되어도 미문서화 기능 미탐지</td></tr>
</table>
<div class="sbox"><b>🏢 소규모 기업 SoD 보상 통제:</b><br>
• 소규모 기업 = 인력 부족 → SoD(개발자/운영자 분리) 어려움<br>
• <b>보상 통제(Compensating Control):</b> 변경 등록 + 독립적 검토<br>
• 핵심: 기능 테스트·UAT는 <b>"의도된 기능"</b>만 검증 → <b>"숨겨진 기능"</b> 탐지 불가<br>
• 변경 등록·검토 = 모든 변경 내역 가시화 → 부정·악의적 코드 식별<br>
• Q220·Q233·Q236 연결: 직무 분리 부재 시 <b>독립적 검토</b>가 핵심 보상</div>`,
reference:"CRM Chapter 4: IS Operations — Compensating Controls & Small Enterprise SoD",
keyConcepts:[
"변경 등록·검토|소규모 기업의 SoD 부재 시 핵심 보상 통제 — 비인가 변경·미문서화 기능 식별",
"기능 테스트의 한계|의도된 기능만 검증 — 프로그래머가 숨긴 미문서화 기능 탐지 불가",
"소규모 기업 보상 통제|개발자/운영자 분리 어려운 경우 독립적 변경 검토가 핵심 보상",
"UAT vs 변경 검토|UAT=사용자 수용 여부, 변경 검토=모든 변경 내역 — 부정 탐지는 변경 검토가 효과적"
]
},

// ============================================================
// Q242 - Substantive Testing After Compliance Testing
// ============================================================
{
id: 242,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IT 환경의 통제를 감사하는 감사인이 구현된 통제에 대한 실증적 테스트(Substantive Test)를 수행하는 시점은?<br><small style="color:#94a3b8">An auditor conducting an audit of controls in an IT environment will perform substantive tests for the controls implemented after:</small>`,
options: [
  "통제가 기술 도구를 사용하여 자동화된 후.<br><small style='color:#94a3b8'>The control is automated using technical tools.</small>",
  "원래의 통제 설계가 구현 중에 변경된 후.<br><small style='color:#94a3b8'>The original control design has been changed during implementation.</small>",
  "통제가 위험을 완화하도록 설계되었음을 확인한 후.<br><small style='color:#94a3b8'>Confirming the control is designed to mitigate risk.</small>",
  "통제가 설계된 대로 구현되었음을 확인한 후.<br><small style='color:#94a3b8'>Confirming the control is implemented as designed.</small>"
],
correct: 3,
explanation: `<p><b>통제가 설계된 대로 구현되었음을 확인한 후</b> 실증적 테스트를 수행합니다. 실증적 테스트는 준수 테스트(Compliance Test) 통과 후 수행되며, 준수 테스트 실패 시 실증적 테스트는 의미가 없습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">단계</th><th style="padding:8px;border:1px solid #334155">테스트 유형</th><th style="padding:8px;border:1px solid #334155">목적</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">1️⃣ 설계 평가</td><td style="padding:8px;border:1px solid #ddd">설계 효과성 (워크스루)</td><td style="padding:8px;border:1px solid #ddd">통제가 위험 완화하도록 설계되었는가?</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">2️⃣ 준수 테스트</td><td style="padding:8px;border:1px solid #ddd">Compliance Test</td><td style="padding:8px;border:1px solid #ddd">통제가 설계대로 구현·작동하는가?</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>3️⃣ 실증적 테스트 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>Substantive Test</b></td><td style="padding:8px;border:1px solid #ddd"><b>거래·잔액의 정확성 검증 (준수 테스트 통과 후)</b></td></tr>
</table>
<div class="sbox"><b>📊 준수 테스트 vs 실증적 테스트:</b><br>
• <b>준수 테스트(Compliance):</b> 통제가 설계대로 작동하는가? — <b>통제 자체</b> 평가<br>
• <b>실증적 테스트(Substantive):</b> 거래·잔액·자산의 정확성 — <b>결과</b> 평가<br>
• <b>순서:</b> 설계 평가 → 준수 테스트 → (통과 시) 실증적 테스트<br>
• 준수 테스트 실패 시 → 통제 신뢰 불가 → 실증적 테스트 확대 필요<br>
• 핵심: <b>"통제 작동 확인 → 결과 검증"</b> 순서</div>`,
reference:"CRM Chapter 4: IS Operations — Audit Testing Methodology",
keyConcepts:[
"실증적 테스트 시점|준수 테스트 통과(통제 설계대로 구현 확인) 후 수행 — 순서 중요",
"준수 vs 실증적 테스트|준수=통제 작동 확인, 실증=거래·결과 정확성 — 목적과 순서 구분",
"테스트 단계 순서|설계 평가 → 준수 테스트 → 실증적 테스트 — 각 단계 통과가 다음 단계 전제",
"준수 테스트 실패 영향|통제 신뢰 불가 → 실증적 테스트 확대 필요 — 감사 범위 증가"
]
},

// ============================================================
// Q243 - Delayed Patch Installation Audit Response
// ============================================================
{
id: 243,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인은 미션 크리티컬 시스템의 최신 보안 관련 SW 패치가 2개월 전에 릴리스되었으나 IT 인력이 아직 설치하지 않았음을 관찰했다. IS 감사인은:<br><small style="color:#94a3b8">The IS auditor observes that the latest security patches for a mission-critical system were released two months ago, but IT personnel have not yet installed them. The IS auditor should:</small>`,
options: [
  "패치 관리 정책을 검토하고 이 상황과 관련된 위험을 파악한다.<br><small style='color:#94a3b8'>Review the patch management policy and determine the risk associated with this condition.</small>",
  "IT 시스템 인력에게 패치를 테스트하고 즉시 설치하도록 권고한다.<br><small style='color:#94a3b8'>Recommend that IT systems personnel test and then install the patches immediately.</small>",
  "매월 또는 릴리스 즉시 패치를 적용하도록 권고한다.<br><small style='color:#94a3b8'>Recommend that patches be applied every month or immediately upon release.</small>",
  "패치 관리 IT 프로세스가 적절해 보이므로 조치를 취하지 않는다.<br><small style='color:#94a3b8'>Take no action, because the IT processes related to patch management appear to be adequate.</small>"
],
correct: 0,
explanation: `<p><b>패치 관리 정책 검토 + 위험 파악</b>이 정답입니다. IT가 시스템 안정성 위험과 보안 위험을 비교하여 의도적으로 지연했을 수 있으므로, 정책 준수 여부와 관련 위험을 먼저 평가해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="파딩:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 정책 검토 + 위험 파악 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>정책 적정성·준수·위험 평가 — 감사인 본연 역할</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 즉시 테스트·설치 권고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">IT의 의도적 지연 사유(안정성) 미파악 상태 권고</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 정확한 일정 권고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">테스트 부족 시 더 큰 문제 — 일률적 일정은 부적절</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 조치 없음</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">프로세스 적절해도 시간 지연은 보고 대상</td></tr>
</table>
<div class="sbox"><b>🔍 감사인의 패치 지연 대응 원칙:</b><br>
• <b>1단계:</b> 정책 검토 (조직의 패치 정책이 무엇을 요구하는가?)<br>
• <b>2단계:</b> 준수 평가 (IT가 정책을 따르고 있는가?)<br>
• <b>3단계:</b> 위험 파악 (지연으로 인한 보안 위험 vs 안정성 위험)<br>
• Q237·Q239 연결: 감사인은 <b>평가자</b> — 직접 권고/지시 전 사실관계 파악<br>
• 핵심: IT의 지연이 <b>의도적</b>(안정성 위험 평가)일 수 있음 → 사유 확인 우선</div>`,
reference:"CRM Chapter 4: IS Operations — Patch Management Audit",
keyConcepts:[
"패치 지연 감사 대응|정책 검토 + 위험 파악 → 의도적 지연(안정성) 사유 확인 후 평가",
"감사인 평가자 역할|즉시 권고/지시 전 정책·사유·위험 평가 — 사실관계 우선",
"정책 vs 일률적 일정|조직 정책에 따른 평가 — 일률적 매월/즉시 적용 권고는 부적절",
"보고 의무|프로세스 적절해도 관찰된 지연은 보고 대상 — 무시 ✗"
]
},

// ============================================================
// Q244 - Emergency Change Accountability
// ============================================================
{
id: 244,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인이 예산이 제한된 조직의 긴급 변경 통제 절차 설계를 지원하고 있다. 시스템 지원 인력의 책임 추적성(Accountability)을 확립하는 데 가장 도움이 되는 권고는?<br><small style="color:#94a3b8">An IS auditor is assisting in the design of emergency change control procedures for an organization with a limited budget. Which recommendation BEST helps to establish accountability for the system support personnel?</small>`,
options: [
  "필요 시 개별 지원 ID에 운영 환경 접근 권한이 부여된다.<br><small style='color:#94a3b8'>Production access is granted to the individual support ID when needed.</small>",
  "개발자가 파이어파이터(Firefighter) ID를 사용하여 코드를 운영 환경에 이관한다.<br><small style='color:#94a3b8'>Developers use a firefighter ID to promote code to production.</small>",
  "전담 사용자가 긴급 변경을 운영 환경에 이관한다.<br><small style='color:#94a3b8'>A dedicated user promotes emergency changes to production.</small>",
  "긴급 변경이 이관 전에 승인된다.<br><small style='color:#94a3b8'>Emergency changes are authorized prior to promotion.</small>"
],
correct: 0,
explanation: `<p><b>개별 지원 ID에 필요 시 운영 접근 권한 부여</b>가 가장 좋은 책임 추적성 확립 방법입니다. 정보 보안팀이 운영 지원 그룹을 만들고, 필요 시 사용자 ID를 추가하여 변경을 이관하고, 완료 후 제거합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">책임 추적성</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 개별 ID + 임시 권한 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>완전 (개인 식별)</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 활동이 특정 개인 ID와 연결 — 감사 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 파이어파이터 ID</td><td style="padding:8px;border:1px solid #ddd">제한적 (공유 ID)</td><td style="padding:8px;border:1px solid #ddd">일반/공유 ID — 누가 변경했는지 파악 어려움</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 전담 사용자</td><td style="padding:8px;border:1px solid #ddd">완전</td><td style="padding:8px;border:1px solid #ddd">이상적이나 비용 비효율적 — 예산 제약 시 비현실적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 사전 승인</td><td style="padding:8px;border:1px solid #ddd">N/A</td><td style="padding:8px;border:1px solid #ddd">긴급 변경은 사후 승인이 일반 — 책임 추적성과 무관</td></tr>
</table>
<div class="sbox"><b>🔥 긴급 변경 책임 추적성 모델:</b><br>
• <b>운영 지원 그룹(Production Support Group)</b> 운영<br>
&nbsp;&nbsp;1. 긴급 시 개인 ID를 그룹에 추가<br>
&nbsp;&nbsp;2. 해당 ID로 변경 이관<br>
&nbsp;&nbsp;3. 완료 후 ID를 그룹에서 제거<br>
• <b>장점:</b> 모든 활동이 개인 ID에 귀속 → 감사 추적 가능<br>
• 파이어파이터 ID = 공유 ID → 누가 사용했는지 불명확<br>
• Q226·Q236 연결: 긴급 변경에서도 <b>책임 추적성</b>이 핵심 통제</div>`,
reference:"CRM Chapter 4: IS Operations — Emergency Change & Production Access Control",
keyConcepts:[
"개별 ID 임시 권한|운영 지원 그룹에 개인 ID 임시 추가/제거 — 책임 추적성 확립의 최선",
"파이어파이터 ID 한계|공유 ID로 사용자 식별 어려움 — 흔히 사용되나 개별 ID가 더 나음",
"전담 사용자 비용|이상적이나 예산 제약 시 비현실적 — 비용 효율성 고려 필요",
"긴급 변경 사후 승인|긴급 변경은 일반적으로 이관 후 승인 — 책임 추적성과 별개"
]
},

// ============================================================
// Q245 - Version Control Systems Key Benefit
// ============================================================
{
id: 245,
domain: "3",
ks: "3B2 Implementation Configuration and Release Management",
question: `구성 및 릴리스 관리에서 버전 통제 시스템(Version Control System) 사용의 핵심 이점은?<br><small style="color:#94a3b8">Which of the following is a KEY benefit of using version control systems in configuration and release management?</small>`,
options: [
  "코드 관리의 복잡성을 관리한다.<br><small style='color:#94a3b8'>Manages complexity in code management</small>",
  "다수 개발자와의 협업을 용이하게 한다.<br><small style='color:#94a3b8'>Eases collaboration with multiple developers</small>",
  "개발자의 접근성을 제한한다.<br><small style='color:#94a3b8'>Limits accessibility for developers</small>",
  "변경을 추적하고 되돌릴 수 있는 능력을 제공한다.<br><small style='color:#94a3b8'>Provides ability to track and revert changes</small>"
],
correct: 3,
explanation: `<p><b>변경 추적 및 되돌리기(Track and Revert) 능력</b>이 핵심 이점입니다. 누가, 언제, 무엇을 변경했는지 추적하고, 필요 시 이전 버전으로 복귀할 수 있어 구성·릴리스 관리에 필수적입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">기능</th><th style="padding:8px;border:1px solid #334155">핵심 이점?</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 복잡성 관리</td><td style="padding:8px;border:1px solid #ddd">구조·조직 제공</td><td style="padding:8px;border:1px solid #ddd">부수적 이점</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 협업 용이</td><td style="padding:8px;border:1px solid #ddd">동시 개발·브랜칭·머지</td><td style="padding:8px;border:1px solid #ddd">중요하나 핵심 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 접근성 제한</td><td style="padding:8px;border:1px solid #ddd">접근 통제</td><td style="padding:8px;border:1px solid #ddd">보완적 — 추적 기능과 함께</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 추적·되돌리기 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>변경 이력·롤백</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 운영 이슈 시 이전 버전 복귀 — 핵심 이점</b></td></tr>
</table>
<div class="sbox"><b>📚 버전 통제 시스템(VCS) 핵심 기능:</b><br>
• <b>WHO·WHEN·WHAT</b> 추적: 누가, 언제, 무엇을 변경했는가<br>
• <b>롤백(Revert):</b> 운영 이슈 발견 시 이전 버전으로 복귀<br>
• 부수 기능: 협업, 브랜칭, 머지, 접근 통제<br>
• Q224(구성 관리·기준선) 연결: VCS = 기준선의 자동 기록·관리 도구<br>
• 핵심: 다른 이점들은 모두 <b>"추적"</b>이라는 핵심 기능 위에 구축됨</div>`,
reference:"CRM Chapter 3: SDLC — Version Control & Configuration Management",
keyConcepts:[
"VCS 핵심 이점|변경 추적(WHO·WHEN·WHAT) + 롤백 능력 — 구성·릴리스 관리의 핵심",
"VCS 부수 기능|협업·복잡성 관리·접근 통제는 모두 추적 기능 위에 구축되는 부수적 이점",
"VCS와 기준선|Q224 연결: VCS는 SW 릴리스 기준선의 자동 기록·관리 도구"
]
},

// ============================================================
// Q246 - Risk Assessment for Skipped Patch
// ============================================================
{
id: 246,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인은 애플리케이션에 새 패치가 가용함을 발견했으나, IT 부서는 다른 보안 통제가 있어 패치가 필요 없다고 결정했다. IS 감사인이 권고해야 할 사항은?<br><small style="color:#94a3b8">An IS auditor discovered a new patch is available, but the IT department decided the patch is not needed because other security controls are in place. What should the IS auditor recommend?</small>`,
options: [
  "철저한 테스트 후에만 패치를 적용한다.<br><small style='color:#94a3b8'>Apply the patch only after it has been thoroughly tested.</small>",
  "호스트 기반 침입 탐지 시스템(IDS)을 구현한다.<br><small style='color:#94a3b8'>Implement a host-based intrusion detection system (IDS).</small>",
  "방화벽 규칙을 수정하여 애플리케이션 서버를 추가로 보호한다.<br><small style='color:#94a3b8'>Modify the firewall rules to further protect the application server.</small>",
  "전체 위험을 평가한 후 패치 배포 여부를 권고한다.<br><small style='color:#94a3b8'>Assess the overall risk, then recommend whether to deploy the patch.</small>"
],
correct: 3,
explanation: `<p><b>전체 위험 평가 후 권고</b>가 정답입니다. 취약점 악용 가능성·확률을 평가하여, 기존 보안 통제 우회 위험이 패치 배포를 정당화할 만큼 큰 경우에만 패치를 적용합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 테스트 후 적용</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">위험 평가 없이 적용 = 미션 크리티컬 아닐 시 자원 낭비</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 호스트 기반 IDS</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">유효한 통제이나 애플리케이션 내부 취약점 미해결</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 방화벽 규칙 수정</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">완화 도움되나 패치 위험 평가가 우선</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 위험 평가 후 권고 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>악용 가능성 평가 → 기존 통제 충분성 판단 → 권고</b></td></tr>
</table>
<div class="sbox"><b>⚖️ 패치 배포 의사결정 프레임워크:</b><br>
• <b>위험 평가 요소:</b><br>
&nbsp;&nbsp;1. 취약점의 악용 가능성·확률<br>
&nbsp;&nbsp;2. 자산의 미션 크리티컬 여부<br>
&nbsp;&nbsp;3. 기존 보상 통제의 효과성<br>
• 위험 < 기존 통제 → IT 결정 정당 (패치 불필요)<br>
• 위험 > 기존 통제 → 패치 권고<br>
• Q232·Q239·Q243 연결: 패치 의사결정은 항상 <b>위험 기반</b><br>
• 핵심: 감사인은 IT의 결정을 무조건 부정·긍정 ✗ → <b>객관적 위험 평가</b></div>`,
reference:"CRM Chapter 4: IS Operations — Patch Risk Assessment",
keyConcepts:[
"패치 배포 위험 평가|악용 가능성·미션 크리티컬·기존 통제 효과성 평가 후 결정 — 위험 기반 접근",
"감사인 객관성|IT의 패치 미적용 결정을 무조건 부정 ✗ — 위험 평가로 객관적 판단",
"보상 통제 인정|기존 보안 통제가 위험을 충분히 완화 시 패치 미적용도 정당 — 위험-통제 균형"
]
},

// ============================================================
// Q247 - Elevated Access Exception Process
// ============================================================
{
id: 247,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `IS 감사인은 사용자가 때때로 시스템 데이터를 변경할 권한을 부여받는 것을 관찰했다. 이 상승된 시스템 접근은 비즈니스 운영의 원활한 기능을 위해 필요하다. 장기적 해결을 위해 IS 감사인이 가장 권고할 통제는?<br><small style="color:#94a3b8">An IS auditor observed that users are occasionally granted authority to change system data. This elevated access is required for smooth functioning. Which control does the IS auditor MOST likely recommend for long-term resolution?</small>`,
options: [
  "데이터 인가 관련 통제를 재설계한다.<br><small style='color:#94a3b8'>Redesign the controls related to data authorization.</small>",
  "추가적인 직무 분리 통제를 구현한다.<br><small style='color:#94a3b8'>Implement additional separation of duties controls.</small>",
  "공식적인 예외 프로세스가 필요한지 정책을 검토한다.<br><small style='color:#94a3b8'>Review policy to see if a formal exception process is required.</small>",
  "추가 로깅 통제를 구현한다.<br><small style='color:#94a3b8'>Implement additional logging controls.</small>"
],
correct: 2,
explanation: `<p><b>정책 검토 후 공식 예외 프로세스 필요성 판단</b>이 정답입니다. 데이터 인가 통제는 정책에 의해 주도되어야 하며, 변경이 드물게 발생한다면 예외 프로세스가 더 적절합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 통제 재설계</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">드문 변경 시 재설계는 과잉 — 예외 프로세스가 효율적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. SoD 추가 통제</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">중요하나 정책 검토가 선행 — 임시 접근 정책 확인 우선</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 정책 검토 + 예외 프로세스 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>정책 기반 공식 프로세스 — 장기적 해결책</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 로깅 통제 추가</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">필요하나 첫 단계 아님 — 프로세스 설계 후 보완</td></tr>
</table>
<div class="sbox"><b>📋 예외 프로세스(Exception Process) 핵심:</b><br>
• <b>정상 통제로 처리 어려운 비즈니스 필요 사항</b>에 대한 공식 절차<br>
• 예외 요청 → 승인 → 임시 권한 → 모니터링 → 권한 회수<br>
• <b>장점:</b> 정상 통제 유지 + 예외 상황 통제된 처리<br>
• 정책 우선 원칙: 기존 정책 없으면 → 새로 설계 / 있으면 → 준수 확인<br>
• Q231·Q237·Q243 연결: 감사인 권고는 항상 <b>"정책 → 프로세스 → 통제"</b> 순서</div>`,
reference:"CRM Chapter 4: IS Operations — Exception Process & Policy Review",
keyConcepts:[
"예외 프로세스|드문 임시 권한 부여 = 공식 예외 프로세스가 장기 해결책 — 통제 재설계보다 효율",
"정책 우선 원칙|감사인 권고는 정책 검토 우선 — 정책 부재 시 설계, 존재 시 준수 확인",
"임시 권한 통제|예외 요청→승인→임시 부여→모니터링→회수 — 정상 통제 유지하며 예외 처리"
]
},

// ============================================================
// Q248 - Transaction Logs for Exception Investigation
// ============================================================
{
id: 248,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `데이터 파일 변경 관리 통제 검토 중, 예외 사항 조사에 필요한 연구 시간을 감소시키는 데 가장 도움이 되는 것은?<br><small style="color:#94a3b8">During the review of data file change management controls, which of the following BEST helps to decrease the research time needed to investigate exceptions?</small>`,
options: [
  "1대1 체크(One-for-one checking).<br><small style='color:#94a3b8'>One-for-one checking</small>",
  "데이터 파일 보안.<br><small style='color:#94a3b8'>Data file security</small>",
  "거래 로그(Transaction logs).<br><small style='color:#94a3b8'>Transaction logs</small>",
  "파일 업데이트 및 유지보수 인가.<br><small style='color:#94a3b8'>File updating and maintenance authorization</small>"
],
correct: 2,
explanation: `<p><b>거래 로그(Transaction Logs)</b>가 정답입니다. 입력 일자·시간, 사용자 ID, 단말기 위치 등의 상세 목록을 제공하여 감사 추적을 생성하고, 전체 거래 파일이 아닌 로그만 검토하여 조사 시간을 단축합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">기능</th><th style="padding:8px;border:1px solid #334155">조사 시간 단축</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 1대1 체크</td><td style="padding:8px;border:1px solid #ddd">개별 문서 ↔ 처리 목록 대조</td><td style="padding:8px;border:1px solid #ddd">✗ 시간 매우 오래 걸림</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 데이터 파일 보안</td><td style="padding:8px;border:1px solid #ddd">비인가 접근 방지</td><td style="padding:8px;border:1px solid #ddd">✗ 거래 식별 도움 안 됨</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 거래 로그 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>날짜·시간·사용자·단말기 기록</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 로그만 검토 → 시간 단축</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 업데이트 인가</td><td style="padding:8px;border:1px solid #ddd">업데이트 권한 통제</td><td style="padding:8px;border:1px solid #ddd">✗ 게시 거래 식별에 비효과적</td></tr>
</table>
<div class="sbox"><b>📜 거래 로그의 조사 효율성:</b><br>
• <b>기록 항목:</b> 날짜·시간·사용자 ID·단말기 위치·거래 내용<br>
• <b>장점:</b> 전체 거래 파일 검색 ✗ → 로그만 검토 (효율적)<br>
• <b>활용:</b><br>
&nbsp;&nbsp;- 특정 계정에 게시된 거래 식별<br>
&nbsp;&nbsp;- 특정 사용자의 활동 추적<br>
&nbsp;&nbsp;- 특정 기간의 거래 분석<br>
• 핵심: 로그 = <b>"누가, 언제, 무엇을"</b>의 압축된 인덱스 역할<br>
• Q240·Q244 연결: 로그는 책임 추적성·조사 효율성의 기본 도구</div>`,
reference:"CRM Chapter 4: IS Operations — Transaction Logs & Audit Trails",
keyConcepts:[
"거래 로그|날짜·시간·사용자·단말기 기록 → 예외 조사 시간 단축의 핵심 도구",
"로그 vs 전체 검색|로그만 검토 vs 전체 거래 파일 검색 — 로그가 압도적으로 효율적",
"1대1 체크 한계|개별 문서 대조는 정확하나 시간 매우 오래 걸림 — 효율성 ✗",
"로그 활용|특정 계정·사용자·기간별 거래 식별 — 책임 추적성과 조사 효율성 동시 제공"
]
},

// ============================================================
// Q249 - Purpose of Code Signing
// ============================================================
{
id: 249,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `코드 서명(Code Signing)의 목적은 무엇을 보장하는 것인가?<br><small style="color:#94a3b8">The purpose of code signing is to provide assurance that:</small>`,
options: [
  "소프트웨어가 이후에 수정되지 않았다.<br><small style='color:#94a3b8'>The software has not been subsequently modified.</small>",
  "애플리케이션이 다른 서명된 애플리케이션과 안전하게 인터페이스할 수 있다.<br><small style='color:#94a3b8'>The application can safely interface with another signed application.</small>",
  "애플리케이션의 서명자가 신뢰된다.<br><small style='color:#94a3b8'>The signer of the application is trusted.</small>",
  "서명자의 개인 키가 손상되지 않았다.<br><small style='color:#94a3b8'>The private key of the signer has not been compromised.</small>"
],
correct: 0,
explanation: `<p><b>코드 서명은 소프트웨어가 서명 이후 수정되지 않았음을 보장</b>합니다. 실행 코드가 신뢰할 수 있는 출처에서 왔으며, 서명 이후 변경되지 않았음을 검증하는 무결성 통제입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 미수정 보장 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>출처 + 무결성 보장 — 코드 서명의 핵심 목적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 안전한 인터페이스</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">코드 서명 ≠ 통합 보장 — 호환성과 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 서명자 신뢰</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">출처 확인은 가능하나 출처 신뢰성 보장은 별개</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 개인 키 미손상</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">개인 키 손상 시 신뢰 상실 — 코드 서명의 목적 아님</td></tr>
</table>
<div class="sbox"><b>✍️ 코드 서명(Code Signing) 핵심:</b><br>
• <b>목적:</b> 코드의 <b>출처 확인 + 무결성 검증</b><br>
• <b>메커니즘:</b> 개발자가 개인 키로 코드 해시 서명 → 사용자가 공개 키로 검증<br>
• <b>제공 보장:</b><br>
&nbsp;&nbsp;1. 서명 이후 코드 미수정 (무결성)<br>
&nbsp;&nbsp;2. 서명자 신원 확인 (출처)<br>
• <b>제공하지 않는 보장:</b><br>
&nbsp;&nbsp;1. 서명자가 "신뢰할 만한" 사람인지 (출처 ≠ 신뢰)<br>
&nbsp;&nbsp;2. 다른 SW와의 호환성·통합<br>
• Q240(해시 키) 연결: 코드 서명 = 해시 + 디지털 서명 결합</div>`,
reference:"CRM Chapter 4: IS Operations — Code Signing & Software Integrity",
keyConcepts:[
"코드 서명 목적|소프트웨어 출처 확인 + 서명 이후 미수정(무결성) 보장 — 핵심 목적",
"코드 서명 메커니즘|개인 키로 해시 서명 → 공개 키로 검증 — 디지털 서명 기술 활용",
"코드 서명 한계|서명자 신뢰성 보장 ✗, 호환성 보장 ✗ — 출처 확인과 신뢰는 별개",
"해시 vs 코드 서명|해시=무결성만, 코드 서명=무결성+출처 — 코드 서명이 더 강력"
]
},

// ============================================================
// Q250 - Small Enterprise IS Director Superuser
// ============================================================
{
id: 250,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `소규모 기업 감사 중, IS 감사인은 IS 디렉터가 애플리케이션 접근 역할(접근 유형) 변경 요청을 처리할 수 있는 슈퍼유저 권한 접근을 가지고 있음을 확인했다. IS 감사인이 권고해야 할 사항은?<br><small style="color:#94a3b8">During an audit of a small enterprise, the IS auditor noted that the IS director has superuser-privilege access allowing the director to process requests for application access role changes. Which should the IS auditor recommend?</small>`,
options: [
  "애플리케이션 역할 변경 요청에 대한 적절히 문서화된 프로세스를 구현한다.<br><small style='color:#94a3b8'>Implement a properly documented process for application role change requests.</small>",
  "추가 직원을 고용하여 애플리케이션 역할 변경에 대한 직무 분리를 제공한다.<br><small style='color:#94a3b8'>Hire additional staff to provide a separation of duties for application role changes.</small>",
  "애플리케이션 역할 변경을 위한 자동화된 프로세스를 구현한다.<br><small style='color:#94a3b8'>Implement an automated process for changing application roles.</small>",
  "현재 절차를 상세히 문서화하고 기업 인트라넷에서 사용 가능하게 한다.<br><small style='color:#94a3b8'>Document the current procedure in detail and make it available on the enterprise intranet.</small>"
],
correct: 0,
explanation: `<p><b>적절히 문서화된 변경 요청 프로세스 구현</b>이 정답입니다. 역할 변경 요청은 비즈니스 소유자에 의해 시작·승인된 후, IS 디렉터가 변경을 수행하도록 프로세스를 구축해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 문서화된 프로세스 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비즈니스 소유자 시작·승인 → IS 디렉터 변경 — 부적절 변경 방지·탐지</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 추가 직원 고용</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">이상적이나 소규모 기업에서 항상 가능 ✗ — 대안 프로세스 필요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 자동화 프로세스</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">최고 권한자(IS 디렉터)의 부적절 변경 방지에 비실용적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 인트라넷 게시</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">시스템 보호 가치 없음 — 단순 게시는 통제 아님</td></tr>
</table>
<div class="sbox"><b>📑 소규모 기업 SoD 보상 통제 패턴:</b><br>
• <b>1단계:</b> 비즈니스 소유자의 요청·승인 (개시·인가)<br>
• <b>2단계:</b> IS 디렉터의 변경 수행 (실행)<br>
• <b>3단계:</b> 문서화 + 사후 검토 (탐지)<br>
• Q241(소규모 기업 프로그래머 운영 접근) 연결: 동일 패턴<br>
• 핵심: SoD가 어려운 소규모 기업 → <b>프로세스 기반 보상 통제</b><br>
• "변경 자체를 막을 수 없다면 → 인가 흐름을 분리"가 원칙</div>`,
reference:"CRM Chapter 4: IS Operations — Small Enterprise SoD & Process Controls",
keyConcepts:[
"소규모 기업 SoD|문서화된 프로세스로 보상 — 비즈니스 소유자 승인 → IT 실행으로 인가 흐름 분리",
"슈퍼유저 통제|최고 권한자 통제 = 자동화 ✗, 프로세스 기반 인가 흐름 분리가 핵심",
"인력 추가 한계|이상적이나 소규모 기업에서 비현실적 — 대안 프로세스 권고가 감사인 역할",
"문서화 vs 게시|적절한 프로세스 구현 ≠ 단순 인트라넷 게시 — 통제 메커니즘이어야 함"
]
},

// ============================================================
// Q251 - Out-of-Range Rate Change Authorization
// ============================================================
{
id: 251,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `사무원이 마스터 파일의 대출 이자율을 변경했다. 입력된 이율은 해당 대출의 정상 범위를 벗어났다. 변경이 인가되었음을 합리적으로 보장하는 가장 효과적인 통제는?<br><small style="color:#94a3b8">A clerk changed the interest rate for a loan on a master file. The rate entered is outside the normal range. Which control is MOST effective in providing reasonable assurance that the change was authorized?</small>`,
options: [
  "사무원의 관리자가 승인 코드를 입력하여 변경을 확인하기 전에는 시스템이 변경을 처리하지 않는다.<br><small style='color:#94a3b8'>The system will not process the change until the clerk's manager confirms by entering an approval code.</small>",
  "시스템이 모든 이율 예외 사항을 나열한 주간 보고서를 생성하고 사무원의 관리자가 검토한다.<br><small style='color:#94a3b8'>The system generates a weekly report listing all rate exceptions and the report is reviewed by the clerk's manager.</small>",
  "시스템이 사무원에게 승인 코드 입력을 요구한다.<br><small style='color:#94a3b8'>The system requires the clerk to enter an approval code.</small>",
  "시스템이 사무원에게 경고 메시지를 표시한다.<br><small style='color:#94a3b8'>The system displays a warning message to the clerk.</small>"
],
correct: 0,
explanation: `<p><b>관리자 승인 코드 입력 후에만 처리</b>가 가장 효과적인 예방 통제입니다. 비인가 이율 사용을 사전에 방지하거나 즉시 탐지합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 시점</th><th style="padding:8px;border:1px solid #334155">효과성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 관리자 사전 승인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>예방 (실시간)</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 비인가 변경 처리 자체 차단</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 주간 예외 보고서</td><td style="padding:8px;border:1px solid #ddd">탐지 (사후)</td><td style="padding:8px;border:1px solid #ddd">사후 — 검토 전까지 비인가 거래 발생 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 사무원 승인 코드</td><td style="padding:8px;border:1px solid #ddd">예방 (자기 승인)</td><td style="padding:8px;border:1px solid #ddd">SoD 위반 — 사무원이 스스로 승인</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 경고 메시지</td><td style="padding:8px;border:1px solid #ddd">알림</td><td style="padding:8px;border:1px solid #ddd">실수 방지에만 도움 — 비인가 변경 차단 ✗</td></tr>
</table>
<div class="sbox"><b>🔐 예외 거래 인가 통제 — 효과성 순서:</b><br>
• <b>최선:</b> 예방 + 실시간 + SoD = 관리자 사전 승인 (A)<br>
• 차선: 탐지 + 사후 = 예외 보고서 검토 (B) — 간극 발생<br>
• 부적절: 자기 승인 (C) = SoD 위반<br>
• 최약: 단순 알림 (D) = 강제력 없음<br>
• 핵심 원칙: <b>예방 > 탐지</b>, <b>실시간 > 사후</b>, <b>독립 승인 > 자기 승인</b><br>
• Q233·Q236·Q244 연결: 인가 통제는 항상 <b>독립적 승인자</b>가 핵심</div>`,
reference:"CRM Chapter 4: IS Operations — Authorization Controls & Exception Handling",
keyConcepts:[
"실시간 사전 승인|관리자 승인 코드 입력 전까지 처리 차단 — 예방 통제의 최선",
"예방 vs 탐지|예방(사전 차단) > 탐지(사후 발견) — 비인가 거래 자체를 막는 것이 우선",
"자기 승인 SoD 위반|사무원 본인의 승인 코드 = SoD 위반 — 독립적 승인자 필요",
"경고 메시지 한계|단순 알림은 강제력 없음 — 실수 방지 도움되나 비인가 차단 ✗"
]
},

// ============================================================
// Q252 - Small Org Emergency Changes by Developers
// ============================================================
{
id: 252,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `소규모 조직에서 개발자가 긴급 변경을 운영 환경에 직접 릴리스할 수 있다. 이 상황의 위험을 가장 잘 통제하는 방법은?<br><small style="color:#94a3b8">In a small organization, developers may release emergency changes directly to production. Which will BEST control the risk in this situation?</small>`,
options: [
  "릴리스 직후 신속하게 긴급 변경을 승인하고 문서화한다.<br><small style='color:#94a3b8'>Approve and document the emergency changes promptly after release.</small>",
  "운영 환경 접근을 위한 분리된 환경을 구현하고 특정 시간대 외에는 개발자 접근을 제한한다.<br><small style='color:#94a3b8'>Implement a segregated environment for production access and restrict developer access outside of specific time frames.</small>",
  "2차 승인을 포함하는 정의된 긴급 변경 관리 프로세스를 구현한다.<br><small style='color:#94a3b8'>Implement a defined emergency change management process that includes secondary approval.</small>",
  "비인가 변경 방지를 위해 운영 머신에 엄격한 접근 통제와 권한을 구현한다.<br><small style='color:#94a3b8'>Implement strict access controls and permissions on the production machine to prevent unauthorized changes.</small>"
],
correct: 0,
explanation: `<p><b>릴리스 직후 신속한 승인 및 문서화</b>가 정답입니다. 긴급 상황에서 사후 문서화·승인은 프로그래머의 긴급 변경을 허용하면서도 적절한 통제를 유지합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 사후 신속 승인·문서화 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>긴급 상황 대응 + 사후 통제 — 가장 실용적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 환경 분리 + 시간 제한</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">일부 통제이나 비인가 긴급 변경 위험 직접 해결 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 2차 승인 포함 프로세스</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">긴급 시 사전 2차 승인은 비현실적 — 사후 문서화가 더 중요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 엄격한 접근 통제</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">긴급 변경 위험과 직접 관련 ✗ — 변경 관리와 병행 필요</td></tr>
</table>
<div class="sbox"><b>🚨 긴급 변경 통제 원칙 (소규모 조직):</b><br>
• <b>긴급 상황 = 사전 승인 비현실적</b> → 사후 통제로 전환<br>
• <b>핵심 통제:</b> 즉시 문서화 + 신속한 사후 승인<br>
• Q226(긴급 변경 사후 검토) 연결: 동일 원칙<br>
• Q244(긴급 변경 책임 추적성)와 보완: 사후 승인 + 개인 ID 추적<br>
• 핵심: 긴급 변경 통제는 <b>"방지"보다 "추적·검증"</b>에 초점<br>
• 소규모 조직에서 SoD·2차 승인 강제 = 운영 마비 위험</div>`,
reference:"CRM Chapter 4: IS Operations — Emergency Change Management in Small Organizations",
keyConcepts:[
"긴급 변경 사후 통제|릴리스 직후 신속한 승인·문서화 — 긴급성 + 통제 균형의 최선",
"긴급 변경 통제 원칙|방지보다 추적·검증 — 사전 통제 비현실적 시 사후 통제로 전환",
"소규모 조직 SoD 한계|사전 2차 승인은 비현실적 — 사후 문서화·승인이 실용적 대안",
"Q226·Q244 연결|긴급 변경: 사후 검토(Q226) + 책임 추적(Q244) + 신속 문서화(Q252)"
]
},

// ============================================================
// Q253 - Log Management Implementation Challenge
// ============================================================
{
id: 253,
domain: "4",
ks: "4A9 Operational Log Management",
question: `로그 관리 시스템 구현에서 주요 도전 과제는?<br><small style="color:#94a3b8">Which of the following is a MAJOR challenge in implementing a log management system?</small>`,
options: [
  "IT 인프라의 복잡성.<br><small style='color:#94a3b8'>Complexity of the IT infrastructure</small>",
  "수집되는 로그의 다양한 형식.<br><small style='color:#94a3b8'>Multiple formats of logs collected</small>",
  "로그 양으로 인한 스토리지 비용.<br><small style='color:#94a3b8'>Cost of storage due to the volume of logs</small>",
  "오탐지(False Positive) 알림 처리.<br><small style='color:#94a3b8'>Addressing false-positive alerts</small>"
],
correct: 0,
explanation: `<p><b>IT 인프라 복잡성</b>이 주요 도전 과제입니다. 많은 자원이 로깅 활성화 시 성능이 저하되므로, 각 자원에서 캡처할 로그 유형을 결정해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">도전 정도</th><th style="padding:8px;border:1px solid #334155">해결 방법</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. IT 인프라 복잡성 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>주요 도전</b></td><td style="padding:8px;border:1px solid #ddd"><b>로깅 시 성능 저하 + 자원별 로그 유형 결정 필요</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 다양한 로그 형식</td><td style="padding:8px;border:1px solid #ddd">중간</td><td style="padding:8px;border:1px solid #ddd">파싱(Parsing) 기법으로 해결 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 스토리지 비용</td><td style="padding:8px;border:1px solid #ddd">상대적 작음</td><td style="padding:8px;border:1px solid #ddd">예산 + 보존 기간으로 관리 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 오탐지 알림</td><td style="padding:8px;border:1px solid #ddd">초기 단계</td><td style="padding:8px;border:1px solid #ddd">단계별 도구 구현으로 해결 가능</td></tr>
</table>
<div class="sbox"><b>📊 로그 관리 구현 도전 과제 분석:</b><br>
• <b>인프라 복잡성</b>의 핵심 문제:<br>
&nbsp;&nbsp;1. 다양한 자원(서버·네트워크·앱·DB) 별 로깅 방식 차이<br>
&nbsp;&nbsp;2. 로깅 활성화 시 <b>성능 저하</b> → 비즈니스 영향<br>
&nbsp;&nbsp;3. 각 자원에서 어떤 로그를 캡처할지 결정 어려움<br>
• 다른 도전(B·C·D)은 모두 <b>기술적·관리적 해결책 존재</b><br>
• Q219(보안 로그 관리) 연결: 자동화 도구로 일부 도전 해결<br>
• 핵심: 로그 관리는 <b>"무엇을 로깅할 것인가"</b>가 가장 어려운 결정</div>`,
reference:"CRM Chapter 4: IS Operations — Log Management Implementation Challenges",
keyConcepts:[
"IT 인프라 복잡성|다양한 자원의 로깅 방식 차이 + 성능 저하 + 로그 유형 결정 — 주요 도전",
"로그 관리 도전 우선순위|복잡성 > 형식·비용·오탐지 — 다른 도전은 기술·관리적 해결 가능",
"로깅과 성능|로깅 활성화 시 성능 저하 — 캡처할 로그 유형 신중 결정 필요",
"Q219 연결|보안 로그 관리 = 자동화 도구로 일부 도전 해결 가능 (형식·오탐지)"
]
},

// ============================================================
// Q254 - Verifying Correct Data File Version
// ============================================================
{
id: 254,
domain: "4",
ks: "4A9 Operational Log Management",
question: `프로덕션 실행에 올바른 버전의 데이터 파일이 사용되었는지 확인하기 위해 IS 감사인이 검토해야 할 것은?<br><small style="color:#94a3b8">Which of the following should the IS auditor review to ensure the correct version of a data file is used for a production run?</small>`,
options: [
  "프로덕션 실행과 관련된 인시던트 또는 오류 보고서.<br><small style='color:#94a3b8'>Incident or error reports related to the production run</small>",
  "운영자가 수행한 작업을 상세히 기재한 일정.<br><small style='color:#94a3b8'>Schedules detailing the tasks performed by operators</small>",
  "관련 시스템 활동 및 이벤트가 포함된 로그.<br><small style='color:#94a3b8'>Logs containing relevant system activity and events</small>",
  "생산된 출력물의 배포를 문서화한 보고서.<br><small style='color:#94a3b8'>Reports documenting the distribution of the produced output</small>"
],
correct: 2,
explanation: `<p><b>시스템 활동 및 이벤트 로그</b>를 검토하는 것이 정답입니다. 시스템 로그와 분석 프로그램은 프로덕션 실행에 올바른 파일 버전이 사용되었는지 확인하는 데 사용됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">제공 정보</th><th style="padding:8px;border:1px solid #334155">파일 버전 검증</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 인시던트·오류 보고서</td><td style="padding:8px;border:1px solid #ddd">실행 중 오류·이슈</td><td style="padding:8px;border:1px solid #ddd">간접적 — 문제 발생 후에만 단서</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 운영자 작업 일정</td><td style="padding:8px;border:1px solid #ddd">예정된 작업 목록</td><td style="padding:8px;border:1px solid #ddd">✗ 파일 버전 검증과 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 시스템 활동 로그 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>실제 사용 파일·버전·시간</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 어떤 파일 버전이 사용되었는지 직접 확인</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 출력 배포 보고서</td><td style="padding:8px;border:1px solid #ddd">출력물 배포 추적</td><td style="padding:8px;border:1px solid #ddd">✗ 입력 파일 버전 검증 ✗</td></tr>
</table>
<div class="sbox"><b>📜 시스템 로그의 역할 — 데이터 파일 검증:</b><br>
• <b>로그 기록 항목:</b> 사용된 파일명·버전·접근 시간·작업 ID<br>
• <b>분석 프로그램</b>으로 로그 검토 → 실제 사용 파일 식별<br>
• Q248(거래 로그) 연결: 로그 = 실제 발생 활동의 신뢰할 수 있는 증거<br>
• 핵심: <b>"실제 무엇이 사용되었는가?"</b>는 로그가 가장 정확한 증거<br>
• 일정·보고서는 <b>계획·결과</b>이지 <b>실제 실행</b> 증거 아님</div>`,
reference:"CRM Chapter 4: IS Operations — System Logs & File Version Verification",
keyConcepts:[
"시스템 로그 검증|실제 사용 파일·버전·시간 기록 — 데이터 파일 버전 검증의 직접적 증거",
"로그 vs 일정·보고서|로그=실제 실행, 일정=계획, 보고서=결과 — 검증은 실제 실행 증거가 핵심",
"Q248 일관성|로그는 항상 '실제 발생한 것'의 가장 신뢰할 수 있는 증거"
]
},

// ============================================================
// Q255 - DBA Activities Requiring Separation
// ============================================================
{
id: 255,
domain: "4",
ks: "4A9 Operational Log Management",
question: `데이터베이스 관리자(DBA)가 수행하는 다음 활동 중 다른 사람이 수행해야 할 것은?<br><small style="color:#94a3b8">Which of the following activities performed by a database administrator (DBA) should be performed by a different person?</small>`,
options: [
  "데이터베이스 활동 로그 삭제.<br><small style='color:#94a3b8'>Deleting database activity logs</small>",
  "데이터베이스 최적화 도구 구현.<br><small style='color:#94a3b8'>Implementing database optimization tools</small>",
  "데이터베이스 사용량 모니터링.<br><small style='color:#94a3b8'>Monitoring database usage</small>",
  "백업 및 복구 절차 정의.<br><small style='color:#94a3b8'>Defining backup and recovery procedures</small>"
],
correct: 0,
explanation: `<p><b>데이터베이스 활동 로그 삭제</b>는 DBA가 아닌 다른 사람이 수행해야 합니다. 활동 로그가 DBA의 활동을 기록하므로, DBA가 직접 삭제하면 자신의 활동을 은폐할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">DBA 정상 역할?</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. DB 활동 로그 삭제 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✗ 다른 사람</b></td><td style="padding:8px;border:1px solid #ddd"><b>로그가 DBA 활동 기록 → 자기 활동 은폐 위험</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 최적화 도구 구현</td><td style="padding:8px;border:1px solid #ddd">✔ 정상</td><td style="padding:8px;border:1px solid #ddd">DBA의 일반 직무 기능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. DB 사용량 모니터링</td><td style="padding:8px;border:1px solid #ddd">✔ 정상</td><td style="padding:8px;border:1px solid #ddd">DBA의 일반 직무 기능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 백업·복구 절차 정의</td><td style="padding:8px;border:1px solid #ddd">✔ 정상</td><td style="padding:8px;border:1px solid #ddd">DBA의 일반 직무 기능</td></tr>
</table>
<div class="sbox"><b>👥 DBA SoD 보상 통제 — 활동 로그:</b><br>
• <b>핵심 원칙:</b> 자신의 활동을 기록하는 로그를 자신이 삭제 ✗<br>
• <b>보상 통제:</b> 로그 삭제는 별도 인력(보안 관리자·운영자) 수행<br>
• Q220(DBA OS 패치) 연결: DBA SoD 위반 패턴<br>
&nbsp;&nbsp;- Q220: DBA가 OS 패치 설치 (역할 경계 위반)<br>
&nbsp;&nbsp;- Q255: DBA가 자신 활동 로그 삭제 (감사 추적 무력화)<br>
• 핵심: DBA = DB 운영 OK, 그러나 <b>자기 통제 메커니즘은 별도 인력</b><br>
• Q236(특권 계정) 연결: 특권자의 감사 추적 변경 가능 → 별도 통제 필요</div>`,
reference:"CRM Chapter 4: IS Operations — DBA SoD & Audit Log Protection",
keyConcepts:[
"DBA 로그 삭제 금지|DBA 활동 로그를 DBA가 삭제 = 자기 활동 은폐 — 별도 인력 수행 필요",
"DBA 정상 역할|최적화·모니터링·백업 절차 정의 = DBA 일반 직무 — 정상 수행",
"감사 추적 보호|자기 활동을 기록하는 로그는 자신이 통제 ✗ — SoD 핵심 원칙",
"Q220·Q236 연결|특권자의 감사 추적 변경/삭제 가능 → 보상 통제로 별도 인력 필수"
]
},

// ============================================================
// Q256 - Application Maintenance Audit Log Review
// ============================================================
{
id: 256,
domain: "4",
ks: "4A9 Operational Log Management",
question: `애플리케이션 유지보수 감사를 수행하는 IS 감사인이 프로그램 변경 로그를 검토하는 목적은?<br><small style="color:#94a3b8">An IS auditor performing an application maintenance audit would review the log of program changes for the:</small>`,
options: [
  "프로그램 변경의 인가(Authorization).<br><small style='color:#94a3b8'>Authorization of program changes</small>",
  "현재 오브젝트 모듈의 생성 일자.<br><small style='color:#94a3b8'>Creation date of a current object module</small>",
  "실제로 이루어진 프로그램 변경 횟수.<br><small style='color:#94a3b8'>Number of program changes actually made</small>",
  "현재 소스 프로그램의 생성 일자.<br><small style='color:#94a3b8'>Creation date of a current source program</small>"
],
correct: 0,
explanation: `<p><b>프로그램 변경의 인가 확인</b>이 정답입니다. 감사인은 인가된 변경만 이루어졌음을 보장하기 위해, 모든 변경이 승인되었는지 변경 로그를 검토합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">제공 정보</th><th style="padding:8px;border:1px solid #334155">감사 가치</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 변경 인가 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>승인 여부</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 비인가 변경 탐지 — 핵심 감사 목적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 오브젝트 모듈 생성 일자</td><td style="padding:8px;border:1px solid #ddd">최근 컴파일 일자</td><td style="padding:8px;border:1px solid #ddd">이전 변경 이력 미제공</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 변경 횟수</td><td style="padding:8px;border:1px solid #ddd">변경 빈도</td><td style="padding:8px;border:1px solid #ddd">횟수만으로는 인가 여부 불명</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 소스 프로그램 생성 일자</td><td style="padding:8px;border:1px solid #ddd">파일 생성 시점</td><td style="padding:8px;border:1px solid #ddd">이전 변경 이력 미제공</td></tr>
</table>
<div class="sbox"><b>📋 변경 로그 감사의 핵심 목적:</b><br>
• <b>주요 질문:</b> "모든 변경이 인가되었는가?"<br>
• 변경 횟수·일자는 <b>사실(Facts)</b> — 인가 여부 판단 불가<br>
• 인가 확인 = <b>통제 작동</b> 검증<br>
• Q229·Q235 연결: 변경 감사 = 실제 변경 + 인가 여부 매칭<br>
• 핵심 흐름:<br>
&nbsp;&nbsp;1. 변경 식별 (로그)<br>
&nbsp;&nbsp;2. 인가 확인 (승인 문서 매칭)<br>
&nbsp;&nbsp;3. 비인가 변경 탐지 → 후속 조치</div>`,
reference:"CRM Chapter 4: IS Operations — Application Maintenance Audit",
keyConcepts:[
"변경 로그 감사 목적|모든 프로그램 변경의 인가 확인 — 비인가 변경 탐지가 핵심",
"인가 vs 사실|변경 횟수·일자=사실, 인가=통제 검증 — 감사는 통제 작동 확인이 목적",
"Q229·Q235 일관성|변경 감사: 실제 변경 식별 → 인가 여부 매칭 → 비인가 탐지"
]
},

// ============================================================
// Q257 - Detecting Application Execution Problems
// ============================================================
{
id: 257,
domain: "4",
ks: "4A10 IT Service Level Management",
question: `IT 운영 중 애플리케이션 실행에서 발생한 문제를 IS 감사인이 탐지하는 데 가장 도움이 되는 것은?<br><small style="color:#94a3b8">Which of the following BEST helps an IS auditor to detect the problems encountered by application executions during IT operations?</small>`,
options: [
  "운영 체제 로그.<br><small style='color:#94a3b8'>Operating system logs</small>",
  "인시던트 보고서.<br><small style='color:#94a3b8'>Incident reports</small>",
  "예외 보고서.<br><small style='color:#94a3b8'>Exception reports</small>",
  "컴퓨터 운영자 로그.<br><small style='color:#94a3b8'>Computer operator logs</small>"
],
correct: 2,
explanation: `<p><b>예외 보고서(Exception Reports)</b>가 정답입니다. 예외 보고서는 애플리케이션이 실행 중 발생한 문제를 나열하는 자동화된 보고서입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">기록 대상</th><th style="padding:8px;border:1px solid #334155">애플리케이션 문제 탐지</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. OS 로그</td><td style="padding:8px;border:1px solid #ddd">OS 수준 이벤트</td><td style="padding:8px;border:1px solid #ddd">애플리케이션 문제 미보고</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 인시던트 보고서</td><td style="padding:8px;border:1px solid #ddd">중요 중단 이벤트</td><td style="padding:8px;border:1px solid #ddd">중대한 경우만 — 사소한 문제 누락</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 예외 보고서 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>애플리케이션 실행 문제</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 자동화된 애플리케이션 문제 목록</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 운영자 로그</td><td style="padding:8px;border:1px solid #ddd">수동 입력 운영 활동</td><td style="padding:8px;border:1px solid #ddd">애플리케이션 문제 식별 불확실</td></tr>
</table>
<div class="sbox"><b>📊 로그·보고서 유형별 용도:</b><br>
• <b>예외 보고서:</b> 애플리케이션 실행 중 자동 감지된 문제<br>
• <b>OS 로그:</b> 운영 체제 수준 이벤트·오류<br>
• <b>인시던트 보고서:</b> 중요한 중단 이벤트 (임계값 이상)<br>
• <b>운영자 로그:</b> 수동 기록된 운영 활동<br>
• Q216 연결: 문제 관리 첫 단계 = 예외 보고 (Exception Reporting)<br>
• 핵심: <b>"애플리케이션 문제"</b>는 예외 보고서가 가장 직접적·포괄적</div>`,
reference:"CRM Chapter 4: IS Operations — Exception Reports & Application Monitoring",
keyConcepts:[
"예외 보고서|애플리케이션 실행 중 발생 문제의 자동 목록 — 애플리케이션 문제 탐지의 최선",
"로그 유형별 범위|OS 로그=OS 수준, 예외 보고서=앱 수준, 인시던트=중대한 경우만 — 범위 구분",
"Q216 연결|문제 관리 첫 단계=예외 보고 — 예외 보고서가 모든 후속 활동의 기반"
]
},

// ============================================================
// Q258 - Automated Data Conversion Verification
// ============================================================
{
id: 258,
domain: "4",
ks: "4A8 IT Change, Configuration, and Patch Management",
question: `구 시스템에서 신 시스템으로의 자동화된 데이터 변환이 성공적으로 완료되었는지 IS 감사인이 확인하는 데 가장 도움이 되는 것은?<br><small style="color:#94a3b8">Which of the following BEST helps an IS auditor in ensuring that automated data conversion from an old system to a new system has been completed successfully?</small>`,
options: [
  "운영자 보고서.<br><small style='color:#94a3b8'>Operator reports</small>",
  "예외 보고서.<br><small style='color:#94a3b8'>Exception reports</small>",
  "통제 합계(Control totals).<br><small style='color:#94a3b8'>Control totals</small>",
  "애플리케이션 로그.<br><small style='color:#94a3b8'>Application logs</small>"
],
correct: 1,
explanation: `<p><b>예외 보고서(Exception Reports)</b>가 정답입니다. 처리 중 발생한 오류와 자동 변환되지 않은 거래를 식별하는 자동화된 보고서입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">제공 정보</th><th style="padding:8px;border:1px solid #334155">변환 검증</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 운영자 보고서</td><td style="padding:8px;border:1px solid #ddd">수동 오류 로그</td><td style="padding:8px;border:1px solid #ddd">자동 변환 검증에 부적합</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 예외 보고서 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>변환 오류·미변환 거래</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 구체적 미변환 레코드 식별 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 통제 합계</td><td style="padding:8px;border:1px solid #ddd">전체 합계 일치</td><td style="padding:8px;border:1px solid #ddd">완전성 확인하나 특정 누락 레코드 식별 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 애플리케이션 로그</td><td style="padding:8px;border:1px solid #ddd">실행 중 오류</td><td style="padding:8px;border:1px solid #ddd">실행 오류만 — 변환 누락 식별 부족</td></tr>
</table>
<div class="sbox"><b>🔄 데이터 변환 검증 — 통제 합계 vs 예외 보고서:</b><br>
• <b>통제 합계:</b> 전체 일치 여부 확인 — "총량은 맞는가?"<br>
&nbsp;&nbsp;→ 한계: 어떤 레코드가 누락되었는지 식별 불가<br>
• <b>예외 보고서:</b> 미변환·오류 레코드 자동 목록<br>
&nbsp;&nbsp;→ 장점: 구체적 누락·오류 레코드 식별 + 후속 조치 가능<br>
• Q257 연결: 예외 보고서 = 자동화된 문제 식별의 핵심 도구<br>
• 핵심: "성공적 완료 확인" = <b>"문제가 없음을 입증"</b> = 예외 보고서로 가능</div>`,
reference:"CRM Chapter 4: IS Operations — Data Conversion Verification & Exception Reports",
keyConcepts:[
"예외 보고서 변환 검증|미변환·오류 레코드 자동 식별 — 데이터 변환 검증의 최선",
"예외 보고서 vs 통제 합계|예외=구체적 누락 식별, 합계=전체 일치만 — 예외가 더 정밀",
"Q257 일관성|예외 보고서 = 자동화된 문제 식별의 핵심 도구 (Q257·Q258 모두 정답)"
]
},

// ============================================================
// Q259 - Detecting Unauthorized Production Modifications
// ============================================================
{
id: 259,
domain: "4",
ks: "4A9 Operational Log Management",
question: `IS 감사인이 운영 프로그램에 비인가 수정이 이루어졌는지 판단하는 데 사용할 수 있는 것은?<br><small style="color:#94a3b8">Which of the following would an IS auditor use to determine if unauthorized modifications were made to production programs?</small>`,
options: [
  "시스템 로그 분석.<br><small style='color:#94a3b8'>System log analysis</small>",
  "준수 테스트(Compliance testing).<br><small style='color:#94a3b8'>Compliance testing</small>",
  "포렌식 분석.<br><small style='color:#94a3b8'>Forensic analysis</small>",
  "분석적 검토(Analytical review).<br><small style='color:#94a3b8'>Analytical review</small>"
],
correct: 1,
explanation: `<p><b>준수 테스트(Compliance Testing)</b>가 정답입니다. 운영 프로그램에 인가된 수정만 이루어졌는지 판단하려면 변경 관리 프로세스의 일관된 적용 여부를 검증하는 준수 테스트가 필요합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">비인가 수정 탐지</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 시스템 로그 분석</td><td style="padding:8px;border:1px solid #ddd">변경·활동 식별</td><td style="padding:8px;border:1px solid #ddd">변경 식별만 — 인가 여부 판단 불가</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 준수 테스트 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>변경 관리 프로세스 준수 검증</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 문서적 증거 추적 → 인가 확인</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 포렌식 분석</td><td style="padding:8px;border:1px solid #ddd">범죄 수사 기법</td><td style="padding:8px;border:1px solid #ddd">특수 상황 — 일반 감사 부적합</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 분석적 검토</td><td style="padding:8px;border:1px solid #ddd">전반적 통제 환경 평가</td><td style="padding:8px;border:1px solid #ddd">일반적 평가 — 특정 비인가 수정 식별 ✗</td></tr>
</table>
<div class="sbox"><b>🔍 준수 테스트(Compliance Testing) 핵심:</b><br>
• <b>목적:</b> 통제(변경 관리 프로세스)가 일관되게 적용되었는지 검증<br>
• <b>방법:</b> 변경 식별 → 문서적 증거(승인) 추적 → 매칭<br>
• Q242 연결: 준수 테스트 = 통제 작동 검증 (실증적 테스트의 전제)<br>
• Q227·Q229·Q235 연결: 변경 → 인가 매칭 = 준수 테스트 일종<br>
• <b>시스템 로그 분석</b>은 준수 테스트의 <b>일부 도구</b>이지 단독으로 인가 여부 판단 불가<br>
• 핵심: <b>"비인가 수정 탐지" = 통제 준수 검증 = Compliance Testing</b></div>`,
reference:"CRM Chapter 4: IS Operations — Compliance Testing & Change Audit",
keyConcepts:[
"준수 테스트|변경 관리 프로세스 일관 적용 검증 — 비인가 수정 탐지의 핵심 감사 기법",
"로그 분석 한계|시스템 로그=변경 식별만, 인가 여부 판단 ✗ — 준수 테스트의 일부 도구",
"준수 vs 분석적 검토|준수=특정 통제 작동, 분석적=전반적 환경 평가 — 목적 구분",
"Q242 연결|준수 테스트 = 통제 작동 검증 (실증적 테스트의 전제)"
]
},

// ============================================================
// Q260 - Audit Trail Reliability
// ============================================================
{
id: 260,
domain: "4",
ks: "4A9 Operational Log Management",
question: `애플리케이션 시스템의 감사 추적(Audit Trail) 신뢰성이 의심스러울 수 있는 경우는?<br><small style="color:#94a3b8">The reliability of an application system's audit trail may be questionable if:</small>`,
options: [
  "사용자 ID가 감사 추적에 기록된다.<br><small style='color:#94a3b8'>User IDs are recorded in the audit trail.</small>",
  "보안 관리자가 감사 파일에 읽기 전용 권한을 갖는다.<br><small style='color:#94a3b8'>The security administrator has read-only rights to the audit file.</small>",
  "조치가 발생할 때 날짜 및 시간 스탬프가 기록된다.<br><small style='color:#94a3b8'>Date and time stamps are recorded when an action occurs.</small>",
  "사용자가 시스템 오류 수정 시 감사 추적 기록을 수정할 수 있다.<br><small style='color:#94a3b8'>Users can amend audit trail records when correcting system errors.</small>"
],
correct: 3,
explanation: `<p><b>사용자가 감사 추적 기록을 수정할 수 있는 경우</b> 신뢰성이 의심스럽습니다. 감사 추적의 세부 사항을 수정할 수 있다면 추적의 효과는 사라집니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">신뢰성 영향</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 사용자 ID 기록</td><td style="padding:8px;border:1px solid #ddd">책임 추적성 확립</td><td style="padding:8px;border:1px solid #ddd">✔ 정상 — 감사 추적의 필수 요소</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 보안 관리자 읽기 전용</td><td style="padding:8px;border:1px solid #ddd">감사 파일 변조 방지</td><td style="padding:8px;border:1px solid #ddd">✔ 정상 — 무결성 보호</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 날짜·시간 스탬프</td><td style="padding:8px;border:1px solid #ddd">이벤트 재구성 가능</td><td style="padding:8px;border:1px solid #ddd">✔ 정상 — 시간 기반 분석 가능</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 사용자 수정 가능 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>무결성 파괴</b></td><td style="padding:8px;border:1px solid #ddd"><b>✗ 수정 가능 = 추적의 효과 무효</b></td></tr>
</table>
<div class="sbox"><b>📜 감사 추적 신뢰성 핵심 요소:</b><br>
• <b>필수 요소:</b><br>
&nbsp;&nbsp;1. 사용자 ID (책임 추적성)<br>
&nbsp;&nbsp;2. 날짜·시간 스탬프 (시간 순서)<br>
&nbsp;&nbsp;3. 활동 내역<br>
• <b>무결성 보호:</b> 감사 추적은 <b>읽기 전용</b>이어야 함 (수정 ✗)<br>
• <b>"오류 수정"이라도 직접 수정 ✗</b> → 별도 정정 거래로 처리<br>
• Q255 연결: DBA도 자기 활동 로그 삭제 ✗ (동일 원칙)<br>
• 핵심: <b>감사 추적의 가치 = 변경 불가능성(Immutability)</b><br>
• 수정 가능한 감사 추적 = 신뢰할 수 없는 감사 추적</div>`,
reference:"CRM Chapter 4: IS Operations — Audit Trail Integrity",
keyConcepts:[
"감사 추적 무결성|사용자가 감사 기록 수정 가능 = 신뢰성 파괴 — 변경 불가능성이 핵심",
"감사 추적 필수 요소|사용자 ID + 날짜·시간 스탬프 + 활동 내역 — 책임 추적성 확립",
"오류 수정 원칙|감사 추적 직접 수정 ✗ — 별도 정정 거래로 처리해야 함",
"Q255 일관성|특권자(DBA)도 자기 활동 로그 통제 ✗ — 감사 추적 무결성 보호 원칙"
]
},

// ============================================================
// Q261 - Main Benefit of Monitoring Operational Logs
// ============================================================
{
id: 261,
domain: "4",
ks: "4A9 Operational Log Management",
question: `운영 로그 모니터링의 주요 이점은?<br><small style="color:#94a3b8">Which of the following is a MAIN benefit of monitoring operational logs?</small>`,
options: [
  "위험 현실화에 대한 조기 경고를 제공한다.<br><small style='color:#94a3b8'>It provides early warnings of possible risk materialization.</small>",
  "운영 중 발생한 문제를 IS 감사인이 탐지하는 데 도움을 준다.<br><small style='color:#94a3b8'>It helps IS auditors in detecting problems encountered during operations.</small>",
  "IT 인프라의 상태 및 성능에 대한 통찰을 제공한다.<br><small style='color:#94a3b8'>It gives insight into the health and performance of the IT infrastructure.</small>",
  "운영 중 처리된 거래의 감사 추적을 제공한다.<br><small style='color:#94a3b8'>It provides audit trails for transactions processed during operations.</small>"
],
correct: 2,
explanation: `<p><b>IT 인프라의 상태 및 성능 통찰</b>이 주요 이점입니다. 운영 로그 모니터링은 CPU 성능, 스토리지 용량, 네트워크 대역폭, 최대 거래 수 등 다양한 IT 자원의 성능 메트릭 데이터를 제공합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">제공 가치</th><th style="padding:8px;border:1px solid #334155">주요성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 조기 경고</td><td style="padding:8px;border:1px solid #ddd">위험 사전 감지</td><td style="padding:8px;border:1px solid #ddd">일부 로그만 제공 — 모든 로그 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 감사인 문제 탐지</td><td style="padding:8px;border:1px solid #ddd">샘플링 검토</td><td style="padding:8px;border:1px solid #ddd">제한적 — 식별된 영역만</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. IT 인프라 통찰 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>성능 메트릭 데이터</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 운영 로그 모니터링의 주요 목적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 감사 추적</td><td style="padding:8px;border:1px solid #ddd">거래 처리 추적</td><td style="padding:8px;border:1px solid #ddd">처리 적정성 보장 — 문제 식별 ✗</td></tr>
</table>
<div class="sbox"><b>📈 운영 로그 모니터링의 핵심 목적:</b><br>
• <b>주 목적:</b> IT 인프라 상태·성능 통찰<br>
• <b>제공 메트릭:</b><br>
&nbsp;&nbsp;1. CPU 성능<br>
&nbsp;&nbsp;2. 스토리지 용량 사용량<br>
&nbsp;&nbsp;3. 네트워크 대역폭 사용량<br>
&nbsp;&nbsp;4. 최대 거래 수<br>
• <b>활용:</b> 용량 계획·성능 튜닝·자원 최적화<br>
• Q212(네트워크 모니터링→가용성) 연결: 모니터링 = 가용성 보장<br>
• 감사 추적 vs 운영 로그 구분:<br>
&nbsp;&nbsp;- 감사 추적: 거래·활동 책임 추적<br>
&nbsp;&nbsp;- 운영 로그: 시스템 상태·성능 모니터링</div>`,
reference:"CRM Chapter 4: IS Operations — Operational Log Monitoring & Performance Metrics",
keyConcepts:[
"운영 로그 주 목적|IT 인프라 상태·성능 통찰 — 성능 메트릭 데이터 수집의 핵심",
"운영 로그 vs 감사 추적|운영=시스템 상태/성능, 감사 추적=거래/활동 책임 — 목적 구분",
"성능 메트릭 항목|CPU·스토리지·네트워크·거래 수 — 용량 계획·튜닝의 기반 데이터",
"Q212 연결|네트워크 모니터링 = 가용성 보장 — 운영 로그 모니터링의 핵심 가치"
]
},

// ============================================================
// Q262 - Reciprocal Agreement Risk Mitigation
// ============================================================
{
id: 262,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `복구 대안으로 상호 협정(Reciprocal Agreement)을 사용하는 데 따르는 위험을 가장 잘 완화하는 것은?<br><small style="color:#94a3b8">Which of the following BEST mitigates the risk arising from using reciprocal agreements as a recovery alternative?</small>`,
options: [
  "재해복구 훈련을 매년 수행한다.<br><small style='color:#94a3b8'>Perform disaster recovery exercises annually.</small>",
  "협력 조직이 지리적으로 분리되어 있도록 한다.<br><small style='color:#94a3b8'>Ensure that partnering organizations are separated geographically.</small>",
  "비즈니스 영향 분석(BIA)을 정기적으로 수행한다.<br><small style='color:#94a3b8'>Regularly perform a business impact analysis (BIA).</small>",
  "유사한 시스템을 가진 협력 조직을 선택한다.<br><small style='color:#94a3b8'>Select a partnering organization with similar systems.</small>"
],
correct: 1,
explanation: `<p><b>지리적 분리(Geographic Separation)</b>가 가장 효과적입니다. 협력 조직이 지리적으로 가까우면 동일한 환경 재해(지진 등)에 함께 영향을 받을 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 매년 DR 훈련</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">중요하나 상호 협정에서 수행 어려움 — 지리적 위험이 더 큼</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 지리적 분리 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>동일 자연재해 동시 영향 회피 — 핵심 위험 완화</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. BIA 정기 수행</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">핵심 앱 식별 도움 — 분리가 더 중요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 유사 시스템 협력</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">호환성 좋으나 분리가 더 우선</td></tr>
</table>
<div class="sbox"><b>🤝 상호 협정(Reciprocal Agreement) 핵심:</b><br>
• <b>정의:</b> 두 조직이 재해 시 서로의 시설을 사용하기로 합의<br>
• <b>장점:</b> 저비용·유연성<br>
• <b>핵심 위험:</b><br>
&nbsp;&nbsp;1. 지리적 근접 → 동일 재해 동시 영향 (가장 큰 위험)<br>
&nbsp;&nbsp;2. 시스템 호환성 부족<br>
&nbsp;&nbsp;3. DR 훈련 어려움<br>
&nbsp;&nbsp;4. 동시 사용 시 자원 부족<br>
• Q204(이중 IPF 실행 가능성) 연결: 백업 사이트는 동일 재해 권역 회피 필수<br>
• 핵심: 상호 협정은 <b>"지리적 분리 + 시스템 호환성"</b>이 양대 필수 조건</div>`,
reference:"CRM Chapter 4: IS Operations — Reciprocal Agreements & Disaster Recovery",
keyConcepts:[
"상호 협정 핵심 위험|지리적 근접 → 동일 재해 동시 영향 — 분리가 위험 완화의 최선",
"상호 협정 정의|두 조직이 재해 시 시설 상호 사용 합의 — 저비용·유연하나 위험 존재",
"Q204 일관성|백업 사이트는 동일 재해 권역 회피 — 상호 협정도 동일 원칙",
"상호 협정 양대 조건|지리적 분리 + 시스템 호환성 — 둘 다 필수"
]
},

// ============================================================
// Q263 - SLA Review Major Concern
// ============================================================
{
id: 263,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `서비스 수준 협약(SLA)을 검토하는 IS 감사인에게 다음 중 어느 이슈가 주요 우려사항이 되어야 하는가?<br><small style="color:#94a3b8">Which of the following issues should be a MAJOR concern to an IS auditor who is reviewing a service level agreement (SLA)?</small>`,
options: [
  "예외 보고서로 인한 서비스 조정에 하루가 걸렸다.<br><small style='color:#94a3b8'>A service adjustment resulting from an exception report took a day to implement.</small>",
  "서비스 모니터링에 사용된 애플리케이션 로그의 복잡성으로 검토가 어려웠다.<br><small style='color:#94a3b8'>The complexity of application logs used for service monitoring made the review difficult.</small>",
  "핵심 성과 지표(KPI)가 SLA에 포함되어 있지 않았다.<br><small style='color:#94a3b8'>Key performance indicators (KPIs) were not included in the SLA.</small>",
  "문서가 연 1회 기준으로 업데이트된다.<br><small style='color:#94a3b8'>The document is updated on an annual basis.</small>"
],
correct: 2,
explanation: `<p><b>KPI 미포함</b>이 가장 큰 우려입니다. KPI 같은 서비스 측정 지표가 없으면 IT 서비스의 효율성·효과성을 측정할 수 없습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">SLA 관련성</th><th style="padding:8px;border:1px solid #334155">우려 정도</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 조정에 하루 소요</td><td style="padding:8px;border:1px solid #ddd">운영 이슈</td><td style="padding:8px;border:1px solid #ddd">SLA 조건 따라 수용 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 로그 복잡성</td><td style="padding:8px;border:1px solid #ddd">운영 이슈</td><td style="padding:8px;border:1px solid #ddd">SLA와 직접 관련 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. KPI 미포함 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>SLA 핵심 요소</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 서비스 측정 불가 — 최대 우려</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 연간 업데이트</td><td style="padding:8px;border:1px solid #ddd">문서 관리</td><td style="padding:8px;border:1px solid #ddd">계약 기간 따라 적절할 수 있음</td></tr>
</table>
<div class="sbox"><b>📊 SLA의 핵심 요소 — KPI:</b><br>
• <b>일반적 SLA KPI:</b><br>
&nbsp;&nbsp;1. 응답 시간 (Response Time)<br>
&nbsp;&nbsp;2. 가동 시간 (Uptime)<br>
&nbsp;&nbsp;3. 서비스 신뢰성 (Service Reliability)<br>
&nbsp;&nbsp;4. 처리량 (Throughput)<br>
• <b>KPI의 역할:</b> 서비스 효율성·효과성 측정 → 합의 이행 검증<br>
• KPI 없음 = SLA의 본질적 목적 상실 → "측정할 수 없으면 관리할 수 없다"<br>
• Q228(RTO), Q261(성능 메트릭) 연결: 모든 IT 관리는 측정 가능 지표 기반</div>`,
reference:"CRM Chapter 4: IS Operations — SLA & Key Performance Indicators",
keyConcepts:[
"SLA KPI 필수|KPI 없는 SLA = 서비스 측정 불가 → SLA 본질적 목적 상실 — 최대 우려",
"일반 SLA KPI|응답 시간·가동 시간·신뢰성·처리량 — 서비스 측정의 표준 지표",
"측정 가능성 원칙|측정할 수 없으면 관리할 수 없다 — IT 서비스 관리의 기본 원칙",
"Q228·Q261 연결|모든 IT 관리는 측정 가능 지표 기반 (RTO·성능 메트릭·KPI)"
]
},

// ============================================================
// Q264 - New IT Service Provider Audit Priority
// ============================================================
{
id: 264,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `조직이 새 IT 서비스 제공자를 사용하는 것을 고려하고 있다. 감사 관점에서 검토해야 할 가장 중요한 항목은?<br><small style="color:#94a3b8">An organization is considering using a new IT service provider. From an audit perspective, which is the MOST important item to review?</small>`,
options: [
  "다른 고객으로부터의 서비스 제공자 추천서.<br><small style='color:#94a3b8'>References from other clients for the service provider</small>",
  "서비스 제공자 사이트의 물리적 보안.<br><small style='color:#94a3b8'>The physical security of the service provider site</small>",
  "서비스 제공자와의 제안된 서비스 수준 협약(SLA).<br><small style='color:#94a3b8'>The proposed service level agreement (SLA) with the service provider</small>",
  "서비스 제공자 직원의 신원 조회.<br><small style='color:#94a3b8'>Background checks of the service provider's employees</small>"
],
correct: 2,
explanation: `<p><b>제안된 SLA</b>가 가장 중요합니다. SLA는 요구되는 구체적 성능 수준을 정의하고, 제공자가 약속한 것을 이행할 계약상 의무를 만듭니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">실사 활동</th><th style="padding:8px;border:1px solid #334155">계약 구속력</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 추천서</td><td style="padding:8px;border:1px solid #ddd">실사(Due Diligence)</td><td style="padding:8px;border:1px solid #ddd">참고용 — 강제력 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 물리적 보안</td><td style="padding:8px;border:1px solid #ddd">실사</td><td style="padding:8px;border:1px solid #ddd">현황 확인 — 강제력 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. SLA ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>계약</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 성능·보안 요구의 계약상 의무화</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 직원 신원 조회</td><td style="padding:8px;border:1px solid #ddd">실사</td><td style="padding:8px;border:1px solid #ddd">현황 확인 — 강제력 ✗</td></tr>
</table>
<div class="sbox"><b>📜 SLA의 우선순위 — 계약 vs 실사:</b><br>
• <b>SLA(계약):</b> 법적 구속력 + 성능·보안 요구 명시<br>
• <b>실사(추천서·물리 보안·신원 조회):</b> 좋은 관행이나 <b>참고용</b><br>
• 핵심 원리: <b>"계약에 없으면 강제할 수 없다"</b><br>
• SLA 검토 포인트:<br>
&nbsp;&nbsp;1. 성능 지표(KPI) 명확성 (Q263 연결)<br>
&nbsp;&nbsp;2. 보안 요구사항<br>
&nbsp;&nbsp;3. 위반 시 제재·종료 조항<br>
&nbsp;&nbsp;4. 감사권(Right to Audit)<br>
• Q263 연결: SLA에 KPI 없음 = 측정 불가 / Q264: SLA 자체 = 가장 중요 검토 대상</div>`,
reference:"CRM Chapter 4: IS Operations — SLA & Vendor Selection",
keyConcepts:[
"SLA 우선순위|계약(SLA)이 실사(추천서·보안·신원조회)보다 우선 — 계약 구속력이 핵심",
"SLA 검토 포인트|KPI·보안 요구·제재·감사권 — 모든 요구사항 계약 명시 필요",
"실사 vs 계약|실사=참고용, 계약=강제력 — 계약에 없으면 강제 불가",
"Q263 연결|Q263: SLA 내용(KPI), Q264: SLA 자체 우선 — SLA는 IT 서비스 관리의 핵심"
]
},

// ============================================================
// Q265 - Healthcare Cloud Provider Contract Risk
// ============================================================
{
id: 265,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `의료 조직의 IS 감사인이 환자 건강 정보를 호스팅할 제3자 클라우드 제공자의 계약 조건을 검토하고 있다. 다음 계약 조건 중 고객 조직에 가장 큰 위험은?<br><small style="color:#94a3b8">An IS auditor of a healthcare organization is reviewing contractual terms of a third-party cloud provider being considered to host patient health information. Which contractual term is the GREATEST risk?</small>`,
options: [
  "데이터 소유권은 고객 조직에 의해 유지된다.<br><small style='color:#94a3b8'>Data ownership is retained by the customer organization.</small>",
  "제3자 제공자가 특정 작업 수행을 위해 데이터에 접근할 권리를 보유한다.<br><small style='color:#94a3b8'>The third-party provider reserves the right to access data to perform certain operations.</small>",
  "대량 데이터 인출 메커니즘이 정의되지 않았다.<br><small style='color:#94a3b8'>Bulk data withdrawal mechanisms are undefined.</small>",
  "고객 조직이 백업, 아카이빙 및 복원에 대한 책임이 있다.<br><small style='color:#94a3b8'>The customer organization is responsible for backup, archiving and restoration.</small>"
],
correct: 1,
explanation: `<p><b>제3자 제공자의 데이터 접근 권리 보유</b>가 가장 큰 위험입니다. 환자 건강 정보(PHI)는 규제로 인해 접근이 제한될 수 있으며, 제3자 접근은 규정 위반과 데이터 보안 통제 부족으로 이어질 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">위험 정도</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 고객 데이터 소유권 유지</td><td style="padding:8px;border:1px solid #ddd">유리</td><td style="padding:8px;border:1px solid #ddd">고객에게 유리 — 위험 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 제3자 데이터 접근 권리 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>최대 위험</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ PHI 규제 위반·기밀성 침해 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 대량 인출 메커니즘 미정의</td><td style="padding:8px;border:1px solid #ddd">전환 위험</td><td style="padding:8px;border:1px solid #ddd">서비스 종료 시 문제 — 사전 명확화 필요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 고객 백업·복원 책임</td><td style="padding:8px;border:1px solid #ddd">관리 부담</td><td style="padding:8px;border:1px solid #ddd">고객 자체 수행 가능 시 위험 ✗</td></tr>
</table>
<div class="sbox"><b>🏥 의료 클라우드 — PHI 규제 환경:</b><br>
• <b>PHI(Protected Health Information):</b> HIPAA 등 엄격한 규제<br>
• <b>제3자 접근 위험:</b><br>
&nbsp;&nbsp;1. 규정 위반 가능성<br>
&nbsp;&nbsp;2. 기밀성 침해<br>
&nbsp;&nbsp;3. 데이터 보안 통제 미흡 가능<br>
• <b>검토 포인트:</b><br>
&nbsp;&nbsp;1. 접근 사유·범위 명확성<br>
&nbsp;&nbsp;2. 접근 통제·로깅<br>
&nbsp;&nbsp;3. 규제 준수 보장<br>
• Q217(의료 전사 백업) 연결: 의료 데이터 = 규제·기밀성 최우선<br>
• 핵심: <b>규제 산업 + 제3자 접근 = 가장 큰 위험</b></div>`,
reference:"CRM Chapter 4: IS Operations — Cloud Provider & Healthcare Data",
keyConcepts:[
"제3자 데이터 접근 위험|PHI 환경에서 제3자 접근 = 규제 위반·기밀성 침해 — 최대 위험",
"의료 데이터 규제|HIPAA 등 엄격 규제 — 제3자 접근은 명확한 사유·통제·로깅 필요",
"클라우드 계약 검토|데이터 소유권·접근권·인출 메커니즘·백업 책임 — 모두 검토 필수",
"Q217 일관성|의료 데이터 = 규제·기밀성 최우선 — 가용성보다 기밀성·규제 우선"
]
},

// ============================================================
// Q266 - ISP SLA Compliance Verification
// ============================================================
{
id: 266,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `IS 감사인이 ISP가 외주 통신 서비스 가용성에 대한 기업 SLA를 준수해 왔는지 검증하기 위한 정보 출처로 가장 적절한 보고서는?<br><small style="color:#94a3b8">Which report is the MOST appropriate source of information for an IS auditor to validate that an ISP has been complying with an enterprise SLA for outsourced telecommunication services availability?</small>`,
options: [
  "ISP가 생성한 통신 서비스 다운타임 보고서.<br><small style='color:#94a3b8'>Downtime reports on the telecommunication services generated by the ISP</small>",
  "기업이 생성한 자동 페일오버(Failover) 서비스 사용률 보고서.<br><small style='color:#94a3b8'>A utilization report of automatic failover services generated by the enterprise</small>",
  "ISP가 제공한 대역폭 사용률 보고서.<br><small style='color:#94a3b8'>A bandwidth utilization report provided by the ISP</small>",
  "기업이 생성한 통신 서비스 다운타임 보고서.<br><small style='color:#94a3b8'>Downtime reports on the telecommunication services generated by the enterprise</small>"
],
correct: 3,
explanation: `<p><b>기업이 생성한 다운타임 보고서</b>가 가장 적절합니다. 기업은 내부 생성 보고서로 ISP 서비스를 모니터링하고, 가용 시 ISP 제공 보고서와 비교해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">출처</th><th style="padding:8px;border:1px solid #334155">신뢰성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. ISP 생성 다운타임</td><td style="padding:8px;border:1px solid #ddd">피감사자(ISP)</td><td style="padding:8px;border:1px solid #ddd">자기 모니터링 — 편향·오류 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 기업 페일오버 사용률</td><td style="padding:8px;border:1px solid #ddd">기업</td><td style="padding:8px;border:1px solid #ddd">간접 증거 — 사용 여부만</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. ISP 대역폭 사용률</td><td style="padding:8px;border:1px solid #ddd">ISP</td><td style="padding:8px;border:1px solid #ddd">대역폭 측정 — 가동 시간 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 기업 생성 다운타임 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>독립적 출처</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 가용성 직접 측정 + 독립성 보장</b></td></tr>
</table>
<div class="sbox"><b>📡 SLA 준수 검증 — 출처 신뢰성 원칙:</b><br>
• <b>독립적 출처 > 피감사자 출처</b> — Q238(시스템 구성 검토)와 동일 원칙<br>
• ISP 생성 보고서 = 자기 보고 → 편향 가능<br>
• 기업 생성 보고서 = 독립적 측정 → 객관적 증거<br>
• <b>최선:</b> 양쪽 보고서 비교 검증<br>
• 보고서 유형별 적합성:<br>
&nbsp;&nbsp;- 다운타임 보고서 = 가용성 직접 측정 ✔<br>
&nbsp;&nbsp;- 페일오버 사용률 = 간접 증거<br>
&nbsp;&nbsp;- 대역폭 사용률 = 사용량 (가용성 ✗)<br>
• Q263·Q264 연결: SLA = 측정 가능 + 독립적 검증 가능해야 함</div>`,
reference:"CRM Chapter 4: IS Operations — SLA Compliance Verification",
keyConcepts:[
"독립적 출처 우선|기업 생성 다운타임 보고서 = 독립적·객관적 증거 — ISP 자기 보고보다 신뢰성 높음",
"보고서 유형 적합성|다운타임=가용성 직접 측정, 페일오버=간접, 대역폭=사용량 — SLA 가용성은 다운타임",
"Q238 일관성|감사 증거 신뢰성 = 독립적 출처 > 피감사자 제공 (SLA·구성 검토 모두 동일)",
"양방 검증|기업+ISP 보고서 비교 = 최선의 검증 — 한쪽만으로는 편향 위험"
]
},

// ============================================================
// Q267 - BCP Process After BIA
// ============================================================
{
id: 267,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `한 조직이 비즈니스 연속성 계획의 일부로 비즈니스 영향 분석(BIA)을 완료했다. 프로세스의 다음 단계는 무엇을 개발하는 것인가?<br><small style="color:#94a3b8">An organization completed a business impact analysis (BIA) as part of business continuity planning. The NEXT step in the process is to develop:</small>`,
options: [
  "비즈니스 연속성 전략(Business Continuity Strategy).<br><small style='color:#94a3b8'>A business continuity strategy</small>",
  "테스트 및 훈련 계획.<br><small style='color:#94a3b8'>A test and exercise plan</small>",
  "사용자 교육 프로그램.<br><small style='color:#94a3b8'>A user training program</small>",
  "비즈니스 연속성 계획(BCP).<br><small style='color:#94a3b8'>The business continuity plan (BCP)</small>"
],
correct: 0,
explanation: `<p><b>비즈니스 연속성 전략</b>이 BIA의 다음 단계입니다. 전략은 복구 최선 방법을 식별하며, 이 단계에서 비즈니스 프로세스 중요도, 비용, 복구 시간, 보안을 고려합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">단계</th><th style="padding:8px;border:1px solid #334155">활동</th><th style="padding:8px;border:1px solid #334155">산출물</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">1️⃣</td><td style="padding:8px;border:1px solid #ddd">위험 평가</td><td style="padding:8px;border:1px solid #ddd">위협·취약점 식별</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">2️⃣</td><td style="padding:8px;border:1px solid #ddd">BIA 수행</td><td style="padding:8px;border:1px solid #ddd">중요 프로세스·RTO·RPO 식별</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>3️⃣</b></td><td style="padding:8px;border:1px solid #ddd"><b>연속성 전략 개발 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>복구 방안·비용·시간 고려</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">4️⃣</td><td style="padding:8px;border:1px solid #ddd">BCP 개발</td><td style="padding:8px;border:1px solid #ddd">상세 절차 문서화</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">5️⃣</td><td style="padding:8px;border:1px solid #ddd">교육·테스트</td><td style="padding:8px;border:1px solid #ddd">훈련 + 검증</td></tr>
</table>
<div class="sbox"><b>📚 BCP 개발 프로세스 순서:</b><br>
• <b>위험 평가 → BIA → 전략 → BCP → 교육·테스트 → 유지보수</b><br>
• <b>BIA의 산출물:</b> 중요 프로세스 + RTO + RPO + 영향 분석<br>
• <b>전략의 역할:</b> BIA 결과를 바탕으로 복구 방법 결정<br>
&nbsp;&nbsp;- 핫/웜/콜드 사이트 선택 (Q214 연결)<br>
&nbsp;&nbsp;- 상호 협정 검토 (Q262 연결)<br>
&nbsp;&nbsp;- 비용·복구 시간·보안 고려<br>
• 전략 → BCP → 교육·테스트 순서 준수<br>
• 핵심: <b>"무엇을 보호할지(BIA) → 어떻게 보호할지(전략) → 상세 절차(BCP)"</b></div>`,
reference:"CRM Chapter 4: IS Operations — BCP Development Process",
keyConcepts:[
"BCP 프로세스 순서|위험 평가 → BIA → 전략 → BCP → 교육·테스트 — 단계별 산출물 의존",
"BIA 다음 단계|연속성 전략 개발 — BIA 결과(중요도·RTO) 기반 복구 방법 결정",
"전략의 역할|복구 방안·비용·시간·보안 고려 — BCP의 기본 방향 설정",
"Q214·Q262 연결|전략 단계에서 사이트 유형(Q214)·상호 협정(Q262) 결정"
]
},

// ============================================================
// Q268 - Main Purpose of Service Level Management
// ============================================================
{
id: 268,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `서비스 수준 관리(SLM)의 주요 목적은?<br><small style="color:#94a3b8">The MAIN purpose of service level management (SLM) is to:</small>`,
options: [
  "사용자와 제공자 사이의 기대치를 설정한다.<br><small style='color:#94a3b8'>Set expectations between users and providers.</small>",
  "달성 가능한 최고 수준의 가용성을 제공하도록 서비스를 관리한다.<br><small style='color:#94a3b8'>Ensure that services are managed to deliver the highest achievable level of availability.</small>",
  "모든 서비스 관련 비용을 최소로 유지한다.<br><small style='color:#94a3b8'>Keep the costs associated with any service at a minimum.</small>",
  "법적 미준수를 모니터링하고 비즈니스 경영진에 보고한다.<br><small style='color:#94a3b8'>Monitor and report any legal noncompliance to business management.</small>"
],
correct: 0,
explanation: `<p><b>사용자와 제공자 간 기대치 설정</b>이 SLM의 주요 목적입니다. SLM의 목적은 고객이 요구하는 방식으로 서비스를 협상·문서화·관리(제공·모니터링)하는 것입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 기대치 설정 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>협상·문서화·관리 — SLM의 근본 목적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 최고 가용성</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">일률적 최고 가용성 ✗ — 서비스별로 다름</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 비용 최소화</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">비용은 고객 요구에 따라 결정 — 무조건 최소 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 법적 미준수 보고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">SLM의 1차 목적 아님</td></tr>
</table>
<div class="sbox"><b>🤝 서비스 수준 관리(SLM) 핵심:</b><br>
• <b>SLM 4단계:</b><br>
&nbsp;&nbsp;1. <b>협상(Negotiate)</b> — 기대치 합의<br>
&nbsp;&nbsp;2. <b>문서화(Document)</b> — SLA 작성<br>
&nbsp;&nbsp;3. <b>제공(Deliver)</b> — 합의된 수준 이행<br>
&nbsp;&nbsp;4. <b>모니터링(Monitor)</b> — KPI 측정·보고<br>
• <b>핵심 통찰:</b> SLM ≠ "최고 서비스" → SLM = <b>"합의된 서비스"</b><br>
• 서비스 수준은 비용·중요도·요구에 따라 다름<br>
• Q263·Q264·Q266 연결: SLA = SLM의 산출물 + 핵심 도구<br>
• 핵심: SLM = <b>"기대치 = 실제 제공"의 일치 보장</b></div>`,
reference:"CRM Chapter 4: IS Operations — Service Level Management",
keyConcepts:[
"SLM 주 목적|사용자·제공자 간 기대치 설정 — 협상·문서화·관리·모니터링",
"SLM 4단계|협상 → 문서화(SLA) → 제공 → 모니터링 — 기대치 일치 보장",
"SLM ≠ 최고 서비스|최고 가용성·최저 비용 ✗ — 합의된 수준 제공이 핵심",
"Q263·Q264·Q266 연결|SLA = SLM의 산출물·도구 — KPI(Q263)·SLA 우선(Q264)·검증(Q266)"
]
},

// ============================================================
// Q269 - Acceptable Recovery Time Period
// ============================================================
{
id: 269,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `핵심 비즈니스 프로세스의 재개를 위한 허용 가능한 시간을 결정할 때:<br><small style="color:#94a3b8">When determining the acceptable time period for the resumption of critical business processes:</small>`,
options: [
  "다운타임 비용만 고려하면 된다.<br><small style='color:#94a3b8'>Only downtime costs need to be considered.</small>",
  "복구 운영을 분석해야 한다.<br><small style='color:#94a3b8'>Recovery operations should be analyzed.</small>",
  "다운타임 비용과 복구 비용 모두를 평가해야 한다.<br><small style='color:#94a3b8'>Both downtime costs and recovery costs need to be evaluated.</small>",
  "간접 다운타임 비용은 무시되어야 한다.<br><small style='color:#94a3b8'>Indirect downtime costs should be ignored.</small>"
],
correct: 2,
explanation: `<p><b>다운타임 비용과 복구 비용 모두 평가</b>가 정답입니다. BIA의 결과는 두 비용의 최적 균형을 나타내는 복구 전략이어야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 다운타임 비용만</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">독립적 평가 ✗ — 복구 비용 고려 필요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 복구 운영만</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">비용 비교 누락 + 간접 비용 무시</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 다운타임+복구 비용 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>최적 균형점 도출 — BIA의 핵심</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 간접 비용 무시</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">간접 비용(평판·고객 손실)이 직접 비용보다 클 수 있음</td></tr>
</table>
<div class="sbox"><b>⚖️ RTO 결정 — 비용 균형 분석:</b><br>
• <b>다운타임 비용 (시간↑ = 비용↑):</b><br>
&nbsp;&nbsp;- 직접: 매출 손실, 운영 중단<br>
&nbsp;&nbsp;- 간접: 평판·고객·시장 점유율 손실 (장기적으로 더 클 수 있음)<br>
• <b>복구 비용 (RTO↓ = 비용↑):</b><br>
&nbsp;&nbsp;- 핫 사이트·이중화·실시간 백업 등 인프라 투자<br>
• <b>최적점:</b> 두 비용의 합이 최소가 되는 지점 = <b>적정 RTO</b><br>
• Q213·Q214 연결: RTO와 비용은 반비례 — 균형이 핵심<br>
• 간접 비용 주의: 평판·고객 손실 = 비즈니스 생존 위협 가능</div>`,
reference:"CRM Chapter 4: IS Operations — Cost-Benefit Analysis for RTO",
keyConcepts:[
"RTO 결정 비용 균형|다운타임 비용 + 복구 비용 모두 평가 — 최적 균형점 = 적정 RTO",
"직접 vs 간접 비용|간접 비용(평판·고객 손실)이 장기적으로 더 클 수 있음 — 무시 ✗",
"BIA 산출물|두 비용의 균형 분석을 통한 최적 복구 전략 도출",
"Q213·Q214 일관성|RTO와 비용 반비례 — 균형 분석으로 결정"
]
},

// ============================================================
// Q270 - Verbal SLA Audit Response
// ============================================================
{
id: 270,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `HR 감사 중, IS 감사인은 IT 부서와 HR 부서 간에 예상되는 IT 서비스 수준에 대한 구두 합의가 있다는 것을 통보받았다. 이 상황에서 IS 감사인이 가장 먼저 해야 할 일은?<br><small style="color:#94a3b8">During an HR audit, an IS auditor is informed that there is a verbal agreement between the IT and HR departments about the level of IT services expected. What should the IS auditor do FIRST?</small>`,
options: [
  "합의가 문서화될 때까지 감사를 연기한다.<br><small style='color:#94a3b8'>Postpone the audit until the agreement is documented.</small>",
  "문서화되지 않은 합의의 존재를 고위 경영진에 보고한다.<br><small style='color:#94a3b8'>Report the existence of the undocumented agreement to senior management.</small>",
  "양 부서와 합의 내용을 확인한다.<br><small style='color:#94a3b8'>Confirm the content of the agreement with both departments.</small>",
  "두 부서를 위한 SLA 초안을 작성한다.<br><small style='color:#94a3b8'>Draft a service level agreement for the two departments.</small>"
],
correct: 2,
explanation: `<p><b>양 부서와 합의 내용 확인</b>이 정답입니다. IS 감사인은 권고를 하기 전에 먼저 현재 관행을 확인하고 이해해야 하며, 양측이 합의 조건에 동의하는지 확인해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 감사 연기</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">미문서화는 연기 사유 아님 — 감사 진행 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 경영진 보고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">즉각적 심각한 취약점 아님 — 시기상조</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 양 부서 확인 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>현재 관행 이해 우선 — 권고 전 사실 확인</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. SLA 초안 작성</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">감사인 역할 아님 — 독립성 훼손</td></tr>
</table>
<div class="sbox"><b>👨‍💼 감사인 FIRST 단계 원칙:</b><br>
• <b>1단계: 사실 확인</b> — 현재 관행 이해<br>
• <b>2단계: 평가</b> — 위험·통제 평가<br>
• <b>3단계: 보고</b> — 발견사항 보고<br>
• <b>4단계: 권고</b> — 개선 제안<br>
• Q237·Q243 연결: 감사인 = 평가자, 직접 행동 ✗<br>
&nbsp;&nbsp;- 초안 작성(D) = 감사인 역할 아님 (독립성 훼손)<br>
&nbsp;&nbsp;- 즉각 보고(B) = 사실 확인 후<br>
• 핵심: <b>"확인 → 평가 → 보고 → 권고"</b> 순서<br>
• 미문서화 SLA = 즉각적 위험 ✗ → 사실관계 파악 우선</div>`,
reference:"CRM Chapter 4: IS Operations — Audit Procedures & SLA",
keyConcepts:[
"감사인 FIRST 단계|사실 확인 → 평가 → 보고 → 권고 — 항상 사실 확인이 우선",
"양 부서 합의 확인|구두 합의도 양측 확인 후 평가 — 즉각 보고·권고 ✗",
"감사인 독립성|SLA 초안 작성 = 감사인 역할 아님 — 평가자 역할 유지",
"Q237·Q243 일관성|감사인은 평가자 — 직접 행동(작성·실행) 회피"
]
},

// ============================================================
// Q271 - Outsourcing Contract Right to Audit
// ============================================================
{
id: 271,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `IS 감사인이 서비스 제공자와의 새 외주 계약을 검토할 때, 다음 중 어느 것이 누락된 경우 가장 우려할 것인가?<br><small style="color:#94a3b8">An IS auditor reviewing a new outsourcing contract with a service provider would be MOST concerned if which of the following was missing?</small>`,
options: [
  "서비스 제공자에 대한 감사권(Right to Audit) 조항.<br><small style='color:#94a3b8'>A clause providing a right to audit the service provider</small>",
  "성과 부진 시 위약금 지불을 정의하는 조항.<br><small style='color:#94a3b8'>A clause defining penalty payments for poor performance</small>",
  "사전 정의된 서비스 수준 보고서 템플릿.<br><small style='color:#94a3b8'>Predefined service level report templates</small>",
  "공급자 책임 제한에 관한 조항.<br><small style='color:#94a3b8'>A clause regarding supplier limitation of liability</small>"
],
correct: 0,
explanation: `<p><b>감사권(Right to Audit) 조항</b>의 누락이 가장 큰 우려입니다. 이 조항이 없으면 향후 공급자 성과(통제 결함, 부진, 법적 요구사항 준수)의 어떤 측면도 조사할 수 없습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">누락 시 영향</th><th style="padding:8px;border:1px solid #334155">우려 정도</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 감사권 조항 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>공급자 통제·성과 조사 불가</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 최대 우려</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 위약금 조항</td><td style="padding:8px;border:1px solid #ddd">개별 협상 가능</td><td style="padding:8px;border:1px solid #ddd">바람직하나 필수 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 보고서 템플릿</td><td style="padding:8px;border:1px solid #ddd">보고 요구만 있으면 됨</td><td style="padding:8px;border:1px solid #ddd">사소한 우려</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 책임 제한</td><td style="padding:8px;border:1px solid #ddd">공급자 무한 책임 노출</td><td style="padding:8px;border:1px solid #ddd">고객에게 유리 — 우려 ✗</td></tr>
</table>
<div class="sbox"><b>📋 감사권(Right to Audit) 핵심:</b><br>
• <b>역할:</b> 외주 관계에서 통제 검증의 유일한 수단<br>
• <b>없으면 불가능한 것:</b><br>
&nbsp;&nbsp;1. 통제 결함 조사<br>
&nbsp;&nbsp;2. 성과 부진 검증<br>
&nbsp;&nbsp;3. 법적 요구사항 준수 확인<br>
&nbsp;&nbsp;4. SLA 준수 검증 (Q266 연결)<br>
• <b>대안:</b> 제3자 감사 보고서(SOC 등) 수령 권리<br>
• Q264·Q265 연결: 외주 계약 핵심 = SLA + 감사권<br>
• 책임 제한 누락(D) 함정: 오히려 <b>고객에게 유리</b> (공급자 무한 책임)<br>
• 핵심: <b>감사권 = 외주 관리의 근본 도구</b></div>`,
reference:"CRM Chapter 4: IS Operations — Outsourcing Contract & Right to Audit",
keyConcepts:[
"감사권 조항|외주 계약의 핵심 — 누락 시 공급자 통제·성과·준수 검증 불가",
"감사권 대안|제3자 감사 보고서(SOC) 수령 권리도 가능 — 직접 감사 어려운 경우",
"책임 제한 누락 함정|공급자 책임 제한 없음 = 고객 유리 — 우려 사항 아님",
"Q264·Q265·Q266 연결|외주 핵심 = SLA(Q264) + 감사권(Q271) + 검증(Q266) + 위험 조항(Q265)"
]
},

// ============================================================
// Q272 - Incident Priority Misassignment
// ============================================================
{
id: 272,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `최근 애플리케이션 배포의 구현 검토 중, 여러 인시던트에 잘못된 우선순위가 할당되어 비즈니스 SLA를 충족하지 못한 것으로 판명되었다. 가장 큰 우려는?<br><small style="color:#94a3b8">During an implementation review of a recent application deployment, it was determined that several incidents were assigned incorrect priorities, failing to meet the business SLA. What is the GREATEST concern?</small>`,
options: [
  "지원 모델이 고위 경영진에 의해 승인되지 않았다.<br><small style='color:#94a3b8'>The support model was not approved by senior management.</small>",
  "SLA에 명시된 인시던트 해결 시간이 비현실적이다.<br><small style='color:#94a3b8'>The incident resolution time specified in the SLA is not realistic.</small>",
  "애플리케이션을 지원할 자원이 부족하다.<br><small style='color:#94a3b8'>There are inadequate resources to support the applications.</small>",
  "지원 모델이 부실하게 개발·구현되어 부정확한 우선순위 지정과 SLA 실패에 기여했다.<br><small style='color:#94a3b8'>The support model was poorly developed and implemented contributing to inaccurate prioritization and SLA failures.</small>"
],
correct: 3,
explanation: `<p><b>지원 모델의 부실한 개발·구현</b>이 가장 큰 우려입니다. 인시던트는 비즈니스에 상당한 비용을 발생시키며, 지원 모델은 프로젝트와 함께 SDLC 단계로 구현되어야 합니다. 한 프로젝트에서 누락되었다면 전체 프로세스 붕괴의 징후일 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 경영진 미승인</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">중요하나 부실 설계가 더 핵심 문제</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 비현실적 SLA</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">SLA 검토 필요하나 부실 설계가 근본 원인</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 자원 부족</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">중요하나 부실 설계가 더 핵심 문제</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 부실한 지원 모델 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>근본 원인 — 우선순위 오류·SLA 실패의 직접 원인</b></td></tr>
</table>
<div class="sbox"><b>🛠️ 지원 모델(Support Model) 핵심:</b><br>
• <b>정의:</b> 인시던트 분류·우선순위·에스컬레이션·해결 프로세스<br>
• <b>SDLC 통합:</b> 프로젝트와 함께 설계·구현되어야 함<br>
• <b>부실 시 영향:</b><br>
&nbsp;&nbsp;1. 우선순위 잘못 할당 → SLA 위반<br>
&nbsp;&nbsp;2. 비즈니스 비용 증가<br>
&nbsp;&nbsp;3. 다른 프로젝트도 동일 문제 가능 (시스템적 결함)<br>
• Q216(예외 보고) 연결: 문제 관리 = 보고 → 분류 → 분석 → RCA<br>
• 핵심: <b>증상(SLA 실패) vs 근본 원인(부실 모델)</b> 구분<br>
• 감사인은 <b>근본 원인</b>에 집중 — 다른 옵션은 모두 증상</div>`,
reference:"CRM Chapter 4: IS Operations — Support Model & Incident Management",
keyConcepts:[
"지원 모델 부실|인시던트 분류·우선순위·에스컬레이션 프로세스 설계 부실 = 근본 원인",
"증상 vs 근본 원인|SLA 실패=증상, 부실 모델=근본 원인 — 감사인은 근본 원인 집중",
"SDLC 통합|지원 모델은 프로젝트와 함께 설계·구현 — 누락 시 시스템적 결함 가능",
"Q216 일관성|문제 관리는 분류부터 시작 — 분류 오류 = 전체 프로세스 실패"
]
},

// ============================================================
// Q273 - Service Delivery Objective Basis
// ============================================================
{
id: 273,
domain: "4",
ks: "4A1 IT Service Level Management",
question: `서비스 제공 목표(SDO)를 결정하는 것은 주로 무엇에 기반해야 하는가?<br><small style="color:#94a3b8">Determining the service delivery objective (SDO) should be based PRIMARILY on:</small>`,
options: [
  "최소 허용 운영 역량.<br><small style='color:#94a3b8'>The minimum acceptable operational capability.</small>",
  "복원 프로세스의 비용 효율성.<br><small style='color:#94a3b8'>The cost-effectiveness of the restoration process.</small>",
  "복구 시간 목표(RTO) 충족.<br><small style='color:#94a3b8'>Meeting the recovery time objectives (RTOs).</small>",
  "허용 가능한 중단 윈도우.<br><small style='color:#94a3b8'>The allowable interruption window.</small>"
],
correct: 0,
explanation: `<p><b>최소 허용 운영 역량</b>이 SDO 결정의 주요 기반입니다. SDO는 정상 상황이 복원될 때까지 대체 처리 모드 중에 도달해야 할 서비스 수준이며, 이는 비즈니스 요구와 직접 관련됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">SDO와의 관계</th><th style="padding:8px;border:1px solid #334155">우선순위</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 최소 운영 역량 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비즈니스 요구 직접 반영</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 1차 기준</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 비용 효율성</td><td style="padding:8px;border:1px solid #ddd">고려 요소</td><td style="padding:8px;border:1px solid #ddd">SDO 결정의 주요 기준 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. RTO 충족</td><td style="padding:8px;border:1px solid #ddd">관련 개념</td><td style="padding:8px;border:1px solid #ddd">2차 요소</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 허용 중단 윈도우</td><td style="padding:8px;border:1px solid #ddd">관련 개념</td><td style="padding:8px;border:1px solid #ddd">2차 요소</td></tr>
</table>
<div class="sbox"><b>📊 SDO(Service Delivery Objective) 핵심:</b><br>
• <b>정의:</b> 재해 후 대체 처리 모드에서 도달해야 할 서비스 수준<br>
• <b>특징:</b> "정상 100%"이 아닌 "비즈니스 최소 허용 수준"<br>
• <b>예시:</b> 평상시 1000건/시간 처리 → SDO = 500건/시간 (50%)<br>
• <b>관련 개념 비교:</b><br>
&nbsp;&nbsp;- <b>RTO:</b> 복구까지의 시간 (Q213·Q228)<br>
&nbsp;&nbsp;- <b>RPO:</b> 데이터 손실 허용량<br>
&nbsp;&nbsp;- <b>SDO:</b> 복구 후 서비스 수준<br>
&nbsp;&nbsp;- <b>MTO:</b> 최대 허용 중단 시간 (Q228)<br>
• 핵심: SDO = <b>"얼마나 빨리(RTO) ≠ 얼마나 잘(SDO)"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Service Delivery Objective & BCP Metrics",
keyConcepts:[
"SDO 정의|재해 후 대체 처리 모드의 서비스 수준 — 비즈니스 최소 허용 운영 역량 기반",
"SDO vs RTO|SDO=서비스 수준(얼마나 잘), RTO=복구 시간(얼마나 빨리) — 다른 차원",
"BCP 메트릭 종합|RTO(시간)+RPO(데이터)+SDO(수준)+MTO(최대 한도) — 모두 비즈니스 요구 기반",
"비즈니스 요구 우선|SDO는 비용·다른 메트릭보다 비즈니스 최소 운영 역량이 1차 기준"
]
},

// ============================================================
// Q274 - Database Integrity Greatest Assurance
// ============================================================
{
id: 274,
domain: "4",
ks: "4A1 Database Management",
question: `다음 통제 중 데이터베이스 무결성에 대한 가장 큰 보장을 제공하는 것은?<br><small style="color:#94a3b8">Which of the following controls provides the GREATEST assurance of database integrity?</small>`,
options: [
  "감사 로그 절차.<br><small style='color:#94a3b8'>Audit log procedures</small>",
  "테이블 링크/참조 점검.<br><small style='color:#94a3b8'>Table link/reference checks</small>",
  "쿼리/테이블 접근 시간 점검.<br><small style='color:#94a3b8'>Query/table access time checks</small>",
  "롤백 및 롤포워드 데이터베이스 기능.<br><small style='color:#94a3b8'>Rollback and rollforward database features</small>"
],
correct: 1,
explanation: `<p><b>테이블 링크/참조 점검(Table Link/Reference Checks)</b>이 데이터베이스 무결성에 대한 가장 큰 보장을 제공합니다. 테이블 연결 오류(데이터베이스 내용의 완전성·정확성)를 탐지합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">무결성 보장</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 감사 로그 절차</td><td style="padding:8px;border:1px solid #ddd">이벤트 기록·추적</td><td style="padding:8px;border:1px solid #ddd">이벤트만 — 내용 무결성 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 테이블 링크/참조 점검 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>참조 무결성 검증</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 완전성·정확성 직접 검증</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 접근 시간 점검</td><td style="padding:8px;border:1px solid #ddd">성능 모니터링</td><td style="padding:8px;border:1px solid #ddd">성능만 — 무결성 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 롤백·롤포워드</td><td style="padding:8px;border:1px solid #ddd">거래 복구</td><td style="padding:8px;border:1px solid #ddd">거래 무결성만 — DB 내용 ✗</td></tr>
</table>
<div class="sbox"><b>🗃️ DB 무결성 통제 — 참조 무결성:</b><br>
• <b>참조 무결성(Referential Integrity):</b><br>
&nbsp;&nbsp;- 외래 키(FK)가 참조하는 기본 키(PK) 존재 보장<br>
&nbsp;&nbsp;- 부모 레코드 삭제 시 자식 레코드 처리 (CASCADE/RESTRICT)<br>
• <b>다른 통제의 한계:</b><br>
&nbsp;&nbsp;1. 감사 로그 = 추적만, 무결성 검증 ✗<br>
&nbsp;&nbsp;2. 접근 시간 = 성능 지표, 무결성과 무관<br>
&nbsp;&nbsp;3. 롤백/롤포워드 = 복구 메커니즘, 콘텐츠 무결성 ✗<br>
• <b>DB 무결성 4가지:</b><br>
&nbsp;&nbsp;1. 엔티티 무결성 (PK 유일성)<br>
&nbsp;&nbsp;2. 참조 무결성 (FK 일관성)<br>
&nbsp;&nbsp;3. 도메인 무결성 (값 범위)<br>
&nbsp;&nbsp;4. 사용자 정의 무결성 (비즈니스 규칙)</div>`,
reference:"CRM Chapter 4: IS Operations — Database Integrity Controls",
keyConcepts:[
"테이블 링크/참조 점검|참조 무결성 검증 — DB 내용의 완전성·정확성 보장의 최선",
"감사 로그 한계|이벤트 추적만 — DB 내용의 무결성 검증 ✗",
"롤백/롤포워드 한계|거래 복구 메커니즘 — 거래 무결성만, 콘텐츠 무결성 ✗",
"DB 무결성 4유형|엔티티·참조·도메인·사용자 정의 — 참조 무결성이 핵심"
]
},

// ============================================================
// Q275 - Before-Image Dump Restoration
// ============================================================
{
id: 275,
domain: "4",
ks: "4A1 Database Management",
question: `데이터베이스가 비포 이미지(Before-Image) 덤프를 사용하여 복원된 경우, 중단 후 프로세스는 어디에서 시작해야 하는가?<br><small style="color:#94a3b8">If a database is restored using before-image dumps, where should the process begin following an interruption?</small>`,
options: [
  "마지막 거래 이전.<br><small style='color:#94a3b8'>Before the last transaction</small>",
  "마지막 거래 이후.<br><small style='color:#94a3b8'>After the last transaction</small>",
  "최신 체크포인트 이후 첫 번째 거래에서.<br><small style='color:#94a3b8'>At the first transaction after the latest checkpoint</small>",
  "최신 체크포인트 이전 마지막 거래에서.<br><small style='color:#94a3b8'>At the last transaction before the latest checkpoint</small>"
],
correct: 0,
explanation: `<p><b>마지막 거래 이전</b>에서 시작해야 합니다. 비포 이미지 덤프 사용 시, 덤프의 마지막 거래는 덤프 시점 이전에 데이터베이스를 업데이트하지 않았을 수 있으므로 재처리해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 마지막 거래 이전 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>마지막 거래 미반영 가능 → 재처리 필요</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 마지막 거래 이후</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">마지막 거래가 누락됨</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 체크포인트 이후 첫 거래</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">체크포인트는 애플리케이션 장애에 사용 — 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 체크포인트 이전 마지막</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">체크포인트는 이 상황과 무관</td></tr>
</table>
<div class="sbox"><b>💾 비포 이미지(Before-Image) vs 애프터 이미지(After-Image):</b><br>
• <b>비포 이미지:</b> 거래 <b>적용 전</b>의 DB 상태 기록<br>
&nbsp;&nbsp;- 용도: 롤백(Rollback) — 거래 취소<br>
&nbsp;&nbsp;- 복원 시: 마지막 거래 이전부터 재처리<br>
• <b>애프터 이미지:</b> 거래 <b>적용 후</b>의 DB 상태 기록<br>
&nbsp;&nbsp;- 용도: 롤포워드(Rollforward) — 거래 재적용<br>
&nbsp;&nbsp;- 복원 시: 마지막 적용 거래 이후부터 시작<br>
• <b>체크포인트:</b> 애플리케이션 장애 시 복구 지점 — 본 시나리오 무관<br>
• 핵심: 비포 이미지 = "거래 전 상태로 되돌림" → 마지막 거래 재처리</div>`,
reference:"CRM Chapter 4: IS Operations — Database Recovery & Image Dumps",
keyConcepts:[
"비포 이미지 복원|마지막 거래 미반영 가능 → 마지막 거래 이전부터 재처리 필요",
"비포 vs 애프터 이미지|비포=거래 전 상태(롤백), 애프터=거래 후 상태(롤포워드) — 목적 구분",
"체크포인트|애플리케이션 장애 복구용 — DB 이미지 덤프 복원과 별개",
"DB 복구 메커니즘|이미지 덤프 + 트랜잭션 로그 = DB 복구의 기본 도구"
]
},

// ============================================================
// Q276 - Database Hardening Most Important
// ============================================================
{
id: 276,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 조직의 데이터베이스 보안을 검토하고 있다. 데이터베이스 하드닝(Hardening)에서 가장 중요한 고려사항은?<br><small style="color:#94a3b8">An IS auditor is reviewing database security for an organization. Which is the MOST important consideration for database hardening?</small>`,
options: [
  "기본 구성(Default Configurations)이 변경된다.<br><small style='color:#94a3b8'>The default configurations are changed.</small>",
  "데이터베이스의 모든 테이블이 비정규화된다.<br><small style='color:#94a3b8'>All tables in the database are denormalized.</small>",
  "저장 프로시저와 트리거가 암호화된다.<br><small style='color:#94a3b8'>Stored procedures and triggers are encrypted.</small>",
  "데이터베이스 서버가 사용하는 서비스 포트가 변경된다.<br><small style='color:#94a3b8'>The service port used by the database server is changed.</small>"
],
correct: 0,
explanation: `<p><b>기본 구성 변경</b>이 가장 중요합니다. 기본 비밀번호와 서비스 등 기본 데이터베이스 구성을 변경하지 않으면 악성 코드와 침입자에 의해 쉽게 손상될 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">하드닝 우선순위</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 기본 구성 변경 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>알려진 취약점 차단</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 1차 — 가장 기본·중요</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 테이블 비정규화</td><td style="padding:8px;border:1px solid #ddd">성능 최적화</td><td style="padding:8px;border:1px solid #ddd">보안과 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 프로시저·트리거 암호화</td><td style="padding:8px;border:1px solid #ddd">코드 보호</td><td style="padding:8px;border:1px solid #ddd">유효하나 기본 구성보다 후순위</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 서비스 포트 변경</td><td style="padding:8px;border:1px solid #ddd">은닉(Obscurity)</td><td style="padding:8px;border:1px solid #ddd">기본 구성 변경의 일부 — 후순위</td></tr>
</table>
<div class="sbox"><b>🔒 데이터베이스 하드닝(Hardening) 핵심:</b><br>
• <b>기본 구성 변경 항목:</b><br>
&nbsp;&nbsp;1. <b>기본 관리자 비밀번호 변경</b> (sa, root 등)<br>
&nbsp;&nbsp;2. 기본 계정 비활성화·삭제<br>
&nbsp;&nbsp;3. 불필요한 기본 서비스 비활성화<br>
&nbsp;&nbsp;4. 기본 샘플 DB·예제 제거<br>
&nbsp;&nbsp;5. 기본 포트 변경 (선택)<br>
• <b>"기본값 그대로 = 알려진 취약점 노출"</b><br>
• 공격자 첫 시도 = 기본 비밀번호·기본 서비스 스캔<br>
• Q220·Q255 연결: DB 보안 = 하드닝 + SoD + 로그 보호<br>
• 핵심: 하드닝의 1단계 = <b>"알려진 취약점 제거"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Database Hardening",
keyConcepts:[
"DB 하드닝 1순위|기본 구성 변경(비밀번호·서비스·계정) — 알려진 취약점 제거가 가장 중요",
"기본값 위험|기본 비밀번호·기본 서비스 = 공격자 첫 표적 — 변경 필수",
"하드닝 항목 우선순위|기본 구성 > 암호화·포트 변경 — 기본부터 단계적 강화",
"비정규화 vs 보안|비정규화는 성능 최적화 — 보안과 무관"
]
},

// ============================================================
// Q277 - Interface for RDBMS Access
// ============================================================
{
id: 277,
domain: "4",
ks: "4A1 Database Management",
question: `다양한 소프트웨어 애플리케이션이 관계형 데이터베이스 관리 시스템(RDBMS)에 접근하고 조작할 수 있게 하는 인터페이스는?<br><small style="color:#94a3b8">Which interface allows different software applications to access and manipulate a relational database management system (RDBMS)?</small>`,
options: [
  "애플리케이션 프로그래밍 인터페이스(API).<br><small style='color:#94a3b8'>Application programming interface (API)</small>",
  "구조화 질의어(SQL).<br><small style='color:#94a3b8'>Structured query language (SQL)</small>",
  "객체-관계 매핑(Object-relational mapping).<br><small style='color:#94a3b8'>Object-relational mapping</small>",
  "Java 데이터베이스 연결(JDBC).<br><small style='color:#94a3b8'>Java database connectivity</small>"
],
correct: 0,
explanation: `<p><b>API(Application Programming Interface)</b>가 정답입니다. API는 개발자가 데이터베이스와 상호작용하고, 쿼리를 수행하고, 데이터를 관리할 수 있는 함수·메서드·프로토콜 집합을 제공합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">분류</th><th style="padding:8px;border:1px solid #334155">역할</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. API ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>일반 인터페이스</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 함수·메서드·프로토콜로 DB 접근</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. SQL</td><td style="padding:8px;border:1px solid #ddd">프로그래밍 언어</td><td style="padding:8px;border:1px solid #ddd">언어 — 인터페이스 ✗ (API와 함께 사용)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. ORM</td><td style="padding:8px;border:1px solid #ddd">매핑 기법</td><td style="padding:8px;border:1px solid #ddd">객체↔테이블 매핑 — 인터페이스 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. JDBC</td><td style="padding:8px;border:1px solid #ddd">Java 전용 API</td><td style="padding:8px;border:1px solid #ddd">특정 언어 한정 — 일반 목적 ✗</td></tr>
</table>
<div class="sbox"><b>🔌 RDBMS 접근 방식 정리:</b><br>
• <b>API:</b> 일반적·다언어 지원 인터페이스 (가장 광의)<br>
• <b>SQL:</b> DB 조작용 표준 언어 (API 위에서 실행)<br>
• <b>ORM:</b> OO 언어와 RDBMS 사이 추상화 계층<br>
• <b>JDBC:</b> Java 전용 데이터베이스 API (API의 한 종류)<br>
• <b>유사 기술:</b> ODBC(개방형), ADO.NET(.NET 전용)<br>
• 핵심 계층 구조:<br>
&nbsp;&nbsp;<b>애플리케이션 → API(JDBC/ODBC) → SQL → RDBMS</b><br>
• 핵심: <b>"인터페이스"</b>를 묻는 질문 → API가 가장 일반적·정확한 답</div>`,
reference:"CRM Chapter 4: IS Operations — Database Interfaces & APIs",
keyConcepts:[
"API와 RDBMS|API = 다양한 SW가 RDBMS에 접근하는 일반 인터페이스 — 함수·메서드·프로토콜 제공",
"SQL vs API|SQL=언어, API=인터페이스 — SQL은 API 위에서 실행",
"JDBC vs API|JDBC=Java 전용 API — 일반 목적 인터페이스는 API",
"DB 접근 계층|애플리케이션→API(JDBC/ODBC)→SQL→RDBMS — 계층 구조 이해"
]
},

// ============================================================
// Q278 - Database Vendor Change Examination
// ============================================================
{
id: 278,
domain: "4",
ks: "4A1 Database Management",
question: `새로운 비즈니스 요구사항으로 데이터베이스 벤더를 변경해야 한다. 이 구현과 관련하여 IS 감사인이 주로 검토해야 할 영역은?<br><small style="color:#94a3b8">A new business requirement required changing database vendors. Which area should the IS auditor PRIMARILY examine concerning this implementation?</small>`,
options: [
  "데이터의 무결성.<br><small style='color:#94a3b8'>Integrity of the data</small>",
  "전환(Cutover)의 시기.<br><small style='color:#94a3b8'>Timing of the cutover</small>",
  "사용자의 인가 수준.<br><small style='color:#94a3b8'>Authorization level of users</small>",
  "데이터의 정규화.<br><small style='color:#94a3b8'>Normalization of the data</small>"
],
correct: 0,
explanation: `<p><b>데이터 무결성</b>이 가장 중요한 검토 영역입니다. 한 데이터베이스에서 다른 데이터베이스로 데이터를 마이그레이션할 때 핵심 이슈는 데이터의 무결성과 완전·정확한 마이그레이션 보장입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">중요도</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 데이터 무결성 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>최우선</b></td><td style="padding:8px;border:1px solid #ddd"><b>완전·정확한 마이그레이션 보장 — 핵심 이슈</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 전환 시기</td><td style="padding:8px;border:1px solid #ddd">중요</td><td style="padding:8px;border:1px solid #ddd">새 DB로 이동 → 중복 문제 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 사용자 인가</td><td style="padding:8px;border:1px solid #ddd">덜 중요</td><td style="padding:8px;border:1px solid #ddd">사용자는 앱 통해 접근 — 직접 DB ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 데이터 정규화</td><td style="padding:8px;border:1px solid #ddd">설계 단계</td><td style="padding:8px;border:1px solid #ddd">DB 설계용 — 마이그레이션과 무관</td></tr>
</table>
<div class="sbox"><b>🔄 DB 마이그레이션 — 데이터 무결성 검증:</b><br>
• <b>완전성(Completeness):</b> 모든 레코드가 이전되었는가?<br>
&nbsp;&nbsp;- 통제 합계(Control Totals) 검증<br>
&nbsp;&nbsp;- 레코드 수 비교<br>
• <b>정확성(Accuracy):</b> 데이터 값이 올바르게 변환되었는가?<br>
&nbsp;&nbsp;- 샘플링 검증<br>
&nbsp;&nbsp;- 예외 보고서 (Q258 연결)<br>
• <b>참조 무결성:</b> FK·PK 관계 유지 (Q274 연결)<br>
• <b>데이터 형식 변환:</b> 벤더 간 데이터 타입·인코딩 차이<br>
• 핵심: 마이그레이션 = "무엇이 옮겨졌는가?"가 가장 중요한 질문</div>`,
reference:"CRM Chapter 4: IS Operations — Database Migration & Data Integrity",
keyConcepts:[
"DB 마이그레이션 무결성|완전·정확한 데이터 이전이 가장 중요 — 벤더 변경 시 핵심 이슈",
"마이그레이션 검증 도구|통제 합계+예외 보고서+샘플링 — 완전성·정확성 검증",
"Q258·Q274 연결|데이터 변환=예외 보고서, 무결성=참조 점검 — 마이그레이션 검증의 기반",
"사용자 인가 vs 무결성|사용자는 앱 통해 접근 — DB 변경 시 무결성이 더 핵심"
]
},

// ============================================================
// Q279 - Denormalization Result
// ============================================================
{
id: 279,
domain: "4",
ks: "4A1 Database Management",
question: `데이터베이스 관리자(DBA)가 일부 테이블을 비정규화(Denormalize)하여 데이터베이스 효율성을 개선할 수 있다고 제안한다. 이는 어떤 결과를 초래하는가?<br><small style="color:#94a3b8">The DBA suggests that database efficiency can be improved by denormalizing some tables. This will result in:</small>`,
options: [
  "기밀성 손실.<br><small style='color:#94a3b8'>Loss of confidentiality</small>",
  "중복(Redundancy) 증가.<br><small style='color:#94a3b8'>Increased redundancy</small>",
  "비인가 접근.<br><small style='color:#94a3b8'>Unauthorized accesses</small>",
  "애플리케이션 오작동.<br><small style='color:#94a3b8'>Application malfunctions</small>"
],
correct: 1,
explanation: `<p><b>중복 증가</b>가 비정규화의 결과입니다. 비정규화는 관계형 데이터베이스의 설계·최적화 프로세스로, 중복을 증가시킵니다. 자원 가용성에는 긍정적이나 데이터베이스 환경에서는 추가적·불필요한 데이터 처리가 필요합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">관련성</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 기밀성 손실</td><td style="padding:8px;border:1px solid #ddd">접근 통제 영역</td><td style="padding:8px;border:1px solid #ddd">비정규화와 무관 — 접근 통제 유지</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 중복 증가 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비정규화 본질</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 직접적 결과 — 성능 향상의 대가</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 비인가 접근</td><td style="padding:8px;border:1px solid #ddd">접근 통제 영역</td><td style="padding:8px;border:1px solid #ddd">DB 구조 변경 — 접근 통제와 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 앱 오작동</td><td style="padding:8px;border:1px solid #ddd">호출 변경 가능</td><td style="padding:8px;border:1px solid #ddd">호출 수정 필요하나 오작동 ✗</td></tr>
</table>
<div class="sbox"><b>📊 정규화 vs 비정규화:</b><br>
• <b>정규화(Normalization):</b><br>
&nbsp;&nbsp;- 중복 제거 → 저장 공간 절약<br>
&nbsp;&nbsp;- 무결성 향상<br>
&nbsp;&nbsp;- 단점: JOIN 증가 → 성능 저하<br>
• <b>비정규화(Denormalization):</b><br>
&nbsp;&nbsp;- 중복 허용 → 성능 향상<br>
&nbsp;&nbsp;- JOIN 감소 → 쿼리 빠름<br>
&nbsp;&nbsp;- 단점: 추가 저장 + 데이터 일관성 유지 부담<br>
• <b>트레이드오프:</b> 성능 ↔ 무결성·저장 효율<br>
• Q276 연결: 비정규화는 <b>성능 최적화</b> — 보안과 무관<br>
• 핵심: 비정규화 = "성능을 위해 중복을 의도적으로 받아들임"</div>`,
reference:"CRM Chapter 4: IS Operations — Database Normalization & Denormalization",
keyConcepts:[
"비정규화 결과|중복 증가 → 성능 향상의 대가 — 데이터 일관성 유지 부담 발생",
"정규화 vs 비정규화|정규화=중복 제거(무결성), 비정규화=중복 허용(성능) — 트레이드오프",
"비정규화와 보안|구조 변경만 — 기밀성·접근 통제와 무관",
"Q276 일관성|비정규화 = 성능 최적화 — 보안 하드닝과 별개"
]
},

// ============================================================
// Q280 - Database Server Greatest Security Risk
// ============================================================
{
id: 280,
domain: "4",
ks: "4A1 Database Management",
question: `데이터베이스 서버 감사 중, 다음 중 가장 큰 보안 위험은?<br><small style="color:#94a3b8">During the audit of a database server, which of the following poses the GREATEST security risk?</small>`,
options: [
  "관리자 계정의 비밀번호가 만료되지 않는다.<br><small style='color:#94a3b8'>The password on the administrator account does not expire.</small>",
  "데이터베이스의 기본 글로벌 보안 설정이 변경되지 않은 상태이다.<br><small style='color:#94a3b8'>Default global security settings for the database remain unchanged.</small>",
  "오래된 데이터가 삭제되지 않았다.<br><small style='color:#94a3b8'>Old data have not been purged.</small>",
  "데이터베이스 활동이 완전히 로깅되지 않는다.<br><small style='color:#94a3b8'>Database activity is not fully logged.</small>"
],
correct: 1,
explanation: `<p><b>기본 글로벌 보안 설정 미변경</b>이 가장 큰 보안 위험입니다. 기본 보안 설정은 빈 사용자 비밀번호나 사용자명과 동일한 비밀번호 같은 이슈를 허용할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">위험 유형</th><th style="padding:8px;border:1px solid #334155">심각도</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 관리자 비밀번호 미만료</td><td style="padding:8px;border:1px solid #ddd">계정 위험</td><td style="padding:8px;border:1px solid #ddd">위험·노출이나 기본 설정보다 덜 심각</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 기본 보안 설정 미변경 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>알려진 취약점</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 빈 비밀번호·기본 계정 노출 — 최대 위험</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 오래된 데이터 미삭제</td><td style="padding:8px;border:1px solid #ddd">관리·성능 이슈</td><td style="padding:8px;border:1px solid #ddd">즉각적 보안 우려 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 불완전한 로깅</td><td style="padding:8px;border:1px solid #ddd">탐지 위험</td><td style="padding:8px;border:1px solid #ddd">잠재 위험이나 기본 설정보다 덜 심각</td></tr>
</table>
<div class="sbox"><b>🔓 기본 보안 설정 위험 — 알려진 취약점:</b><br>
• <b>기본 설정의 흔한 문제:</b><br>
&nbsp;&nbsp;1. <b>빈 비밀번호</b> (sa 계정 등)<br>
&nbsp;&nbsp;2. <b>사용자명 = 비밀번호</b> (admin/admin)<br>
&nbsp;&nbsp;3. 모든 사용자에 광범위한 권한<br>
&nbsp;&nbsp;4. 원격 접근 허용<br>
&nbsp;&nbsp;5. 불필요한 기본 계정 활성화<br>
• <b>공격자의 첫 시도:</b> 기본 자격 증명 시도 (Q276 연결)<br>
• Q276과 동일 원칙: <b>"기본값 = 알려진 취약점"</b><br>
• 핵심: 다른 위험(비밀번호 만료·로깅·데이터 삭제) < 기본 설정<br>
• 기본 설정 미변경 = <b>"문이 활짝 열려 있음"</b>과 동일</div>`,
reference:"CRM Chapter 4: IS Operations — Database Default Settings & Hardening",
keyConcepts:[
"기본 보안 설정 위험|빈 비밀번호·기본 계정·광범위 권한 — DB 보안의 최대 위험",
"기본값 = 알려진 취약점|공격자 첫 시도 = 기본 자격 증명 — 변경 필수",
"위험 우선순위|기본 설정 > 비밀번호 만료 > 로깅 > 데이터 보관 — 기본 설정이 가장 심각",
"Q276 일관성|DB 하드닝 1순위 = 기본 구성 변경 (Q276·Q280 동일 원칙)"
]
},

// ============================================================
// Q281 - DBA Read-Write Production Access
// ============================================================
{
id: 281,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 데이터베이스 관리자(DBA)가 운영 데이터에 읽기·쓰기 권한을 가지고 있음을 발견했다. IS 감사인은:<br><small style="color:#94a3b8">An IS auditor finds that a DBA has read-and-write access to production data. The IS auditor should:</small>`,
options: [
  "DBA 접근을 일반적 관행으로 수용한다.<br><small style='color:#94a3b8'>Accept the DBA access as a common practice.</small>",
  "DBA 기능과 관련된 통제를 평가한다.<br><small style='color:#94a3b8'>Assess the controls relevant to the DBA function.</small>",
  "운영 데이터에 대한 DBA 접근의 즉각적 회수를 권고한다.<br><small style='color:#94a3b8'>Recommend the immediate revocation of the DBA access to production data.</small>",
  "DBA가 승인한 사용자 접근 인가를 검토한다.<br><small style='color:#94a3b8'>Review user access authorizations approved by the DBA.</small>"
],
correct: 1,
explanation: `<p><b>DBA 기능 관련 통제 평가</b>가 정답입니다. 특권 계정 검토 시 감사인은 잠재적 노출을 해결할 수 있는 보상 통제를 찾아야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 일반 관행 수용</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">일반적이나 통제 평가가 감사인 역할</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 통제 평가 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>보상 통제 식별 → 위험 평가 — 감사인 본연 역할</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 즉시 회수 권고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">DBA 직무 수행 불가 → 운영 마비 위험</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 사용자 접근 인가 검토</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">사용자 인가 = 데이터 소유자 책임 — DBA 아님</td></tr>
</table>
<div class="sbox"><b>👨‍💼 DBA 운영 접근 — 감사인 접근법:</b><br>
• <b>일반적 관행:</b> DBA는 직무 수행상 운영 접근 필요<br>
• <b>핵심 위험:</b> SoD 위반 가능성 (Q220·Q255 연결)<br>
• <b>보상 통제 예시:</b><br>
&nbsp;&nbsp;1. 활동 로깅·모니터링 (별도 인력 - Q255)<br>
&nbsp;&nbsp;2. 정기적 활동 검토<br>
&nbsp;&nbsp;3. 최소 권한 원칙 적용<br>
&nbsp;&nbsp;4. 변경 사전 승인 절차<br>
&nbsp;&nbsp;5. 이중 통제(Dual Control)<br>
• Q237·Q243·Q270 연결: 감사인 = 평가자 — 즉시 권고/지시 ✗<br>
• 핵심: <b>"위험 = 통제 - 노출"</b> → 통제 평가 후 결론</div>`,
reference:"CRM Chapter 4: IS Operations — DBA Access & Compensating Controls",
keyConcepts:[
"DBA 운영 접근 평가|일반적 관행 — 감사인은 보상 통제 식별 후 위험 평가",
"보상 통제 식별|활동 로깅·검토·최소 권한·이중 통제 — DBA 위험 완화",
"감사인 평가자 역할|즉시 회수 권고 ✗ — 통제 평가 후 위험 기반 결정",
"Q220·Q255 연결|DBA SoD 위반 패턴 — 운영 접근은 보상 통제로 균형"
]
},

// ============================================================
// Q282 - Non-Normalized Database Review
// ============================================================
{
id: 282,
domain: "4",
ks: "4A1 Database Management",
question: `데이터베이스 검토 중, IS 감사인은 데이터베이스의 일부 테이블이 정규화되지 않았음을 발견했다. IS 감사인이 다음으로 해야 할 일은?<br><small style="color:#94a3b8">During a database review, an IS auditor notices that some tables in the database are not normalized. The IS auditor should next:</small>`,
options: [
  "데이터베이스를 정규화하도록 권고한다.<br><small style='color:#94a3b8'>Recommend that the database be normalized.</small>",
  "개념 데이터 모델을 검토한다.<br><small style='color:#94a3b8'>Review the conceptual data model.</small>",
  "저장 프로시저를 검토한다.<br><small style='color:#94a3b8'>Review the stored procedures.</small>",
  "정당화 사유를 검토한다.<br><small style='color:#94a3b8'>Review the justification.</small>"
],
correct: 3,
explanation: `<p><b>정당화 사유 검토</b>가 정답입니다. 일부 상황에서는 성능상 이유로 비정규화가 권장되므로, 데이터베이스가 정규화되지 않은 경우 IS 감사인은 정당화 사유를 검토해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 정규화 권고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">조사·분석 전 즉시 권고 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 개념 데이터 모델 검토</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">정규화 정당화 사유 직접 제공 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 저장 프로시저 검토</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">정규화 정보 직접 제공 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 정당화 사유 검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비정규화 = 성능상 의도된 결정 가능 — 사유 확인 우선</b></td></tr>
</table>
<div class="sbox"><b>🔍 비정규화 발견 시 감사인 접근:</b><br>
• <b>정규화 위반 ≠ 항상 결함</b><br>
• 정당화 사유 가능성:<br>
&nbsp;&nbsp;1. <b>성능 최적화</b> (Q279 연결)<br>
&nbsp;&nbsp;2. 보고·조회 빈번한 테이블<br>
&nbsp;&nbsp;3. 데이터 웨어하우스 환경<br>
&nbsp;&nbsp;4. JOIN 비용 절감<br>
• <b>감사인 단계:</b><br>
&nbsp;&nbsp;1. 사실 확인 (비정규화 존재)<br>
&nbsp;&nbsp;2. <b>정당화 사유 확인</b> ← 현 단계<br>
&nbsp;&nbsp;3. 위험 평가<br>
&nbsp;&nbsp;4. 권고<br>
• Q237·Q270·Q281 일관: <b>"확인 → 평가 → 권고"</b> 순서<br>
• 핵심: 기술적 결정이 의도적인지 무지인지 구분 필요</div>`,
reference:"CRM Chapter 4: IS Operations — Database Normalization Audit",
keyConcepts:[
"비정규화 정당화|성능 최적화·보고 빈도·JOIN 비용 등 정당한 사유 가능 — 사유 확인 우선",
"감사인 평가 순서|사실 확인 → 정당화 검토 → 위험 평가 → 권고 — 즉시 권고 ✗",
"Q279 연결|비정규화 = 성능 향상 vs 중복 증가 트레이드오프 — 의도된 결정일 수 있음",
"기술 결정 평가|의도적 vs 무지 구분 — 정당화 사유 확인이 핵심"
]
},

// ============================================================
// Q283 - Database User Accountability
// ============================================================
{
id: 283,
domain: "4",
ks: "4A9 Operational Log Management",
question: `민감한 정보에 접근하는 데이터베이스 사용자에 대한 책임 추적성(Accountability)을 강제하는 가장 효과적인 통제는?<br><small style="color:#94a3b8">What is the MOST effective control for enforcing accountability among database users who are accessing sensitive information?</small>`,
options: [
  "로그 관리 프로세스를 구현한다.<br><small style='color:#94a3b8'>Implement a log management process.</small>",
  "이중 인증을 구현한다.<br><small style='color:#94a3b8'>Implement a two-factor authentication.</small>",
  "테이블 뷰를 사용하여 민감 데이터에 접근한다.<br><small style='color:#94a3b8'>Use table views to access sensitive data.</small>",
  "데이터베이스와 애플리케이션 서버를 분리한다.<br><small style='color:#94a3b8'>Separate database and application servers.</small>"
],
correct: 0,
explanation: `<p><b>로그 관리 프로세스</b>가 정답입니다. 책임 추적성은 누가 무엇을 하는지 아는 것이며, 사용자명·거래 유형·시간 등 관련 정보가 포함된 로그를 생성·저장하는 로그 관리 프로세스가 최선입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">책임 추적성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 로그 관리 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>탐지·기록</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 누가·무엇을·언제 기록 — 책임 추적성의 핵심</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 이중 인증</td><td style="padding:8px;border:1px solid #ddd">예방 (인증)</td><td style="padding:8px;border:1px solid #ddd">비인가 접근 방지 — 활동 기록 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 테이블 뷰</td><td style="padding:8px;border:1px solid #ddd">예방 (접근 제한)</td><td style="padding:8px;border:1px solid #ddd">볼 수 있는 데이터 제한 — 활동 기록 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 서버 분리</td><td style="padding:8px;border:1px solid #ddd">아키텍처</td><td style="padding:8px;border:1px solid #ddd">관리 효율 — 책임 추적성과 무관</td></tr>
</table>
<div class="sbox"><b>👥 책임 추적성(Accountability) 핵심:</b><br>
• <b>정의:</b> 누가(Who) + 무엇을(What) + 언제(When) + 어디서(Where) 했는가?<br>
• <b>로그 필수 항목:</b><br>
&nbsp;&nbsp;1. 사용자명/ID<br>
&nbsp;&nbsp;2. 거래 유형·내용<br>
&nbsp;&nbsp;3. 타임스탬프<br>
&nbsp;&nbsp;4. 접근 객체<br>
&nbsp;&nbsp;5. 결과(성공/실패)<br>
• Q244·Q248·Q260 연결: 책임 추적성 = 로그 + 무결성 보호<br>
• 다른 통제와의 관계:<br>
&nbsp;&nbsp;- <b>인증(2FA)</b> = 신원 확인 (예방)<br>
&nbsp;&nbsp;- <b>접근 통제(뷰)</b> = 권한 제한 (예방)<br>
&nbsp;&nbsp;- <b>로그</b> = 활동 기록 (탐지·책임 추적성)<br>
• 핵심: <b>"예방 통제로는 책임 추적성 확립 불가"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Accountability & Log Management",
keyConcepts:[
"로그와 책임 추적성|사용자·활동·시간 기록 — 누가 무엇을 했는지 추적의 핵심 통제",
"예방 vs 탐지 통제|2FA·뷰=예방(접근 차단), 로그=탐지(활동 기록) — 책임 추적성은 탐지 영역",
"책임 추적성 4W|Who·What·When·Where — 로그에 모두 포함되어야 함",
"Q244·Q248·Q260 연결|책임 추적성 = 로그 + 무결성 보호 + 개인 ID 식별"
]
},

// ============================================================
// Q284 - Database Segmentation Result
// ============================================================
{
id: 284,
domain: "4",
ks: "4A1 Database Management",
question: `매우 민감한 데이터베이스를 세그먼트화하면 어떤 결과가 나오는가?<br><small style="color:#94a3b8">Segmenting a highly sensitive database results in:</small>`,
options: [
  "노출(Exposure) 감소.<br><small style='color:#94a3b8'>Reduced exposure</small>",
  "위협(Threat) 감소.<br><small style='color:#94a3b8'>Reduced threat</small>",
  "중요도(Criticality) 감소.<br><small style='color:#94a3b8'>Less criticality</small>",
  "민감도(Sensitivity) 감소.<br><small style='color:#94a3b8'>Less sensitivity</small>"
],
correct: 0,
explanation: `<p><b>노출 감소</b>가 정답입니다. 데이터를 세그먼트화하면 특정 취약점에 노출되는 데이터의 양이 감소합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">세그먼트화 영향</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 노출 감소 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>침해 시 영향 범위 축소</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 한 세그먼트 손상이 전체 데이터에 영향 ✗</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 위협 감소</td><td style="padding:8px;border:1px solid #ddd">변화 없음</td><td style="padding:8px;border:1px solid #ddd">위협은 동일 — 각 세그먼트가 다른 공격 벡터</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 중요도 감소</td><td style="padding:8px;border:1px solid #ddd">변화 없음</td><td style="padding:8px;border:1px solid #ddd">중요도 = 데이터 속성 — 세그먼트화와 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 민감도 감소</td><td style="padding:8px;border:1px solid #ddd">변화 없음</td><td style="padding:8px;border:1px solid #ddd">민감도 = 데이터 속성 — 세그먼트화와 무관</td></tr>
</table>
<div class="sbox"><b>🛡️ 데이터 세그먼트화 — 위험 모델:</b><br>
• <b>위험 = 위협 × 취약점 × 영향</b><br>
• <b>세그먼트화 효과:</b><br>
&nbsp;&nbsp;- 위협(Threat): 변화 없음 (외부 요인)<br>
&nbsp;&nbsp;- 취약점(Vulnerability): 변화 없음<br>
&nbsp;&nbsp;- <b>영향(Impact)/노출(Exposure): 감소</b> ✔<br>
• 한 세그먼트 침해 = 전체 데이터의 일부만 노출<br>
• <b>데이터 속성 vs 위험 요소:</b><br>
&nbsp;&nbsp;- 속성(불변): 중요도, 민감도<br>
&nbsp;&nbsp;- 변경 가능: 노출, 영향<br>
• Q204·Q262 연결: 분리·세그먼트화 = 동일 재해/침해의 동시 영향 회피<br>
• 핵심: 세그먼트화 = <b>"계란을 한 바구니에 담지 않기"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Database Segmentation & Risk Reduction",
keyConcepts:[
"세그먼트화 효과|특정 취약점에 노출되는 데이터 양 감소 — 침해 시 영향 범위 축소",
"위험 모델|위험 = 위협 × 취약점 × 영향 — 세그먼트화는 영향(노출)만 감소",
"데이터 속성 불변|중요도·민감도 = 데이터 본질 속성 — 세그먼트화로 변하지 않음",
"Q204·Q262 일관성|분리·세그먼트화 = 동시 영향 회피 — 위험 완화의 기본 원리"
]
},

// ============================================================
// Q285 - DBA Log Purge Prevention
// ============================================================
{
id: 285,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인은 DBA가 데이터베이스 서버의 로그 위치에 접근할 수 있고 시스템에서 로그를 삭제(Purge)할 수 있음을 발견했다. DBA 활동이 효과적으로 모니터링되도록 보장하는 가장 좋은 감사 권고는?<br><small style="color:#94a3b8">An IS auditor finds that DBAs have access to the log location on the database server and the ability to purge logs. What is the BEST audit recommendation to ensure DBA activity is effectively monitored?</small>`,
options: [
  "DBA가 로그를 삭제할 수 없도록 권한을 변경한다.<br><small style='color:#94a3b8'>Change permissions to prevent DBAs from purging logs.</small>",
  "DBA가 접근할 수 없는 중앙 로그 서버로 데이터베이스 로그를 전달한다.<br><small style='color:#94a3b8'>Forward database logs to a centralized log server to which the DBAs do not have access.</small>",
  "데이터베이스에 대한 핵심 변경이 공식적으로 승인되도록 요구한다.<br><small style='color:#94a3b8'>Require that critical changes to the database are formally approved.</small>",
  "데이터베이스 로그를 자기 매체에 백업한다.<br><small style='color:#94a3b8'>Back up database logs to magnetic media.</small>"
],
correct: 1,
explanation: `<p><b>중앙 로그 서버로 로그 전달</b>이 가장 좋은 권고입니다. DBA가 접근할 수 없는 별도의 서버로 로그를 실시간 전달하면 로그의 가용성과 무결성을 효과적으로 보호할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 권한 변경</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">DBA 직무상 불가능 — 로그 보호 불충분</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 중앙 로그 서버 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>가용성+무결성 보호 — DBA 접근 불가 영역</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 공식 변경 승인</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">변경 통제 — 로그 보호와 별개</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 자기 매체 백업</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">백업 시점까지의 로그만 보호 — 실시간 보호 ✗</td></tr>
</table>
<div class="sbox"><b>📡 중앙 로그 서버(Centralized Log Server) 핵심:</b><br>
• <b>아키텍처:</b> DB 서버 → 실시간 전송 → 별도 로그 서버 (SIEM)<br>
• <b>장점:</b><br>
&nbsp;&nbsp;1. <b>DBA 접근 불가</b> → 변조·삭제 방지<br>
&nbsp;&nbsp;2. 실시간 전송 → 즉각 보호<br>
&nbsp;&nbsp;3. 중앙 집중 관리·분석<br>
&nbsp;&nbsp;4. 다중 시스템 로그 통합 (Q219 연결)<br>
• <b>SoD 보상 통제:</b> 로그 관리 = 별도 보안팀 책임<br>
• Q255 일관성: DBA는 자기 활동 로그 통제 ✗ → 별도 인력·시스템<br>
• Q236·Q260 연결: 특권 계정 + 감사 추적 무결성 = 별도 시스템 필수<br>
• 핵심: <b>"관찰 대상이 관찰자를 통제할 수 없게"</b> 분리</div>`,
reference:"CRM Chapter 4: IS Operations — Centralized Log Management & DBA Monitoring",
keyConcepts:[
"중앙 로그 서버|DBA 접근 불가 별도 서버 — 로그 가용성·무결성 보호의 최선",
"실시간 전송|로그 생성 즉시 외부 서버로 전송 — 변조·삭제 방지",
"SoD 보상 통제|특권 계정의 로그 통제 분리 — 별도 보안팀 책임",
"Q255·Q236·Q260 일관성|특권자 + 감사 추적 무결성 = 분리된 시스템 필수"
]
},

// ============================================================
// Q286 - Stolen Laptop with DB Passwords
// ============================================================
{
id: 286,
domain: "4",
ks: "4A1 Database Management",
question: `기업 DBA의 노트북이 도난당했고, 운영 데이터베이스 비밀번호 파일이 포함되어 있었다. 조직이 가장 먼저 해야 할 일은?<br><small style="color:#94a3b8">A laptop belonging to an enterprise DBA and containing a file of production database passwords has been stolen. What should the organization do FIRST?</small>`,
options: [
  "IS 감사 부서에 보고서를 보낸다.<br><small style='color:#94a3b8'>Send a report to the IS audit department.</small>",
  "DBA 계정의 이름을 변경한다.<br><small style='color:#94a3b8'>Change the name of the DBA account.</small>",
  "DBA 계정을 일시 정지한다.<br><small style='color:#94a3b8'>Suspend the DBA account.</small>",
  "데이터베이스 비밀번호를 변경한다.<br><small style='color:#94a3b8'>Change the database password.</small>"
],
correct: 3,
explanation: `<p><b>데이터베이스 비밀번호 즉시 변경</b>이 첫 단계입니다. 비밀번호가 손상되었는지 확인할 방법이 없으므로 즉시 변경해야 합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">판정</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 감사 부서 보고</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">필요하나 첫 단계 아님 — 즉각적 위협 차단 우선</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 계정 이름 변경</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">운영 DB 서버 영향 — 부적절</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 계정 정지</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">운영 영향 + 다른 DBA 계정 공유 시 무효</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 비밀번호 변경 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>즉각적 위협 차단 — 운영 영향 최소</b></td></tr>
</table>
<div class="sbox"><b>🚨 자격 증명 침해 — 인시던트 대응 우선순위:</b><br>
• <b>1단계: 즉시 위협 차단</b> → 비밀번호 변경<br>
• 2단계: 영향 평가 → 손상 범위 파악<br>
• 3단계: 보고 → 경영진·감사 부서<br>
• 4단계: 근본 원인 분석 → 재발 방지<br>
• <b>비밀번호 변경 vs 계정 정지/이름 변경:</b><br>
&nbsp;&nbsp;- 비밀번호 변경 = 위협 차단 + 운영 유지<br>
&nbsp;&nbsp;- 계정 정지/이름 변경 = 운영 마비 가능<br>
• Q243·Q252·Q270 연결: FIRST 단계는 항상 <b>가장 시급한 위험 차단</b><br>
• 핵심: <b>"위협 차단 → 평가 → 보고 → 분석"</b> 순서<br>
• 도난 노트북 = 비밀번호 즉시 손상 가능 → 시간이 핵심</div>`,
reference:"CRM Chapter 4: IS Operations — Credential Compromise Incident Response",
keyConcepts:[
"자격 증명 침해 1단계|비밀번호 즉시 변경 — 위협 차단이 최우선 (운영 영향 최소)",
"인시던트 대응 순서|위협 차단 → 영향 평가 → 보고 → 근본 원인 분석",
"계정 정지 vs 비밀번호 변경|정지=운영 마비, 변경=운영 유지 + 위협 차단 — 변경이 우선",
"Q243·Q252·Q270 일관성|FIRST 단계 = 가장 시급한 위험 차단"
]
},

// ============================================================
// Q287 - Out-of-Range Data Prevention
// ============================================================
{
id: 287,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 데이터베이스의 일부 테이블에서 범위 외 데이터를 발견했다. 이 상황을 피하기 위해 IS 감사인이 권고해야 할 통제는?<br><small style="color:#94a3b8">An IS auditor finds out-of-range data in some tables of a database. Which control should the IS auditor recommend to avoid this situation?</small>`,
options: [
  "모든 테이블 업데이트 거래를 로깅한다.<br><small style='color:#94a3b8'>Log all table update transactions</small>",
  "데이터베이스에 무결성 제약 조건(Integrity Constraints)을 구현한다.<br><small style='color:#94a3b8'>Implement integrity constraints in the database</small>",
  "전후 이미지(Before and After Image) 보고를 구현한다.<br><small style='color:#94a3b8'>Implement before and after image reporting</small>",
  "추적 및 태깅(Tracing and Tagging)을 사용한다.<br><small style='color:#94a3b8'>Use tracing and tagging</small>"
],
correct: 1,
explanation: `<p><b>무결성 제약 조건 구현</b>이 정답입니다. 데이터가 사전 정의된 테이블이나 규칙에 대해 검증되므로 정의되지 않은 데이터의 입력을 방지하는 예방 통제입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 거래 로깅</td><td style="padding:8px;border:1px solid #ddd">탐지 (감사 추적)</td><td style="padding:8px;border:1px solid #ddd">부정확 데이터 입력 방지 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 무결성 제약 조건 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>예방</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 사전 정의 규칙으로 입력 차단</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 전후 이미지 보고</td><td style="padding:8px;border:1px solid #ddd">탐지</td><td style="padding:8px;border:1px solid #ddd">거래 영향 추적 — 사후 분석</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 추적·태깅</td><td style="padding:8px;border:1px solid #ddd">테스트 기법</td><td style="padding:8px;border:1px solid #ddd">시스템 테스트용 — 예방 통제 ✗</td></tr>
</table>
<div class="sbox"><b>🔒 무결성 제약 조건(Integrity Constraints) 유형:</b><br>
• <b>도메인 제약(Domain Constraint):</b> 값 범위·유형 제한 (Q287의 정답)<br>
&nbsp;&nbsp;예: CHECK (age BETWEEN 0 AND 150)<br>
• <b>엔티티 무결성:</b> PK NOT NULL + 유일성<br>
• <b>참조 무결성:</b> FK가 PK 참조 (Q274 연결)<br>
• <b>사용자 정의 무결성:</b> 비즈니스 규칙<br>
• <b>예방 vs 탐지 통제:</b><br>
&nbsp;&nbsp;- 예방(무결성 제약): 입력 시점 차단 ✔<br>
&nbsp;&nbsp;- 탐지(로그·이미지): 사후 발견<br>
• Q251 연결: 예방 > 탐지 — 입력 시점 통제가 최선<br>
• 핵심: 범위 외 데이터 = <b>도메인 무결성</b> 필요</div>`,
reference:"CRM Chapter 4: IS Operations — Database Integrity Constraints",
keyConcepts:[
"무결성 제약 조건|사전 정의 규칙으로 데이터 입력 차단 — 예방 통제의 핵심",
"도메인 무결성|값 범위·유형 제한 — 범위 외 데이터 방지의 직접 통제",
"예방 vs 탐지|로그·이미지=탐지(사후), 무결성 제약=예방(입력 시점) — 예방이 우선",
"Q274·Q251 일관성|DB 무결성 + 예방 통제 우선 — CISA 일관 원칙"
]
},

// ============================================================
// Q288 - Production DB Direct Update Accountability
// ============================================================
{
id: 288,
domain: "4",
ks: "4A1 Database Management",
question: `운영 데이터베이스에서 직접 데이터를 업데이트할 때 책임 추적성을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Which of the following choices BEST ensures accountability when updating data directly in a production database?</small>`,
options: [
  "감사 로그 검토.<br><small style='color:#94a3b8'>Review of audit logs</small>",
  "최소 권한 원칙.<br><small style='color:#94a3b8'>Principle of least privilege</small>",
  "승인된 검증 계획.<br><small style='color:#94a3b8'>Approved validation plan</small>",
  "직무 분리.<br><small style='color:#94a3b8'>Separation of duties</small>"
],
correct: 0,
explanation: `<p><b>감사 로그 검토</b>가 정답입니다. 변경을 수행한 개인의 사용자 ID와 변경 전후의 데이터를 포함하는 상세한 감사 로그가 데이터베이스 변경의 가장 좋은 증거입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">책임 추적성 제공</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 감사 로그 검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>탐지·기록</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 변경자·변경 내용 모두 식별</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 최소 권한 원칙</td><td style="padding:8px;border:1px solid #ddd">예방</td><td style="padding:8px;border:1px solid #ddd">접근 제한 — 누가 변경했는지 식별 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 승인된 검증 계획</td><td style="padding:8px;border:1px solid #ddd">정확성</td><td style="padding:8px;border:1px solid #ddd">정확성 보장 — 변경자 식별 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 직무 분리</td><td style="padding:8px;border:1px solid #ddd">예방</td><td style="padding:8px;border:1px solid #ddd">변경자 vs 승인자 분리 — 개인 식별 ✗</td></tr>
</table>
<div class="sbox"><b>👤 책임 추적성 vs 다른 통제:</b><br>
• <b>책임 추적성(Accountability):</b> "누가 했는가?" 추적<br>
• <b>유일한 도구:</b> 시스템 생성 감사 로그<br>
• 다른 통제는 모두 다른 목적:<br>
&nbsp;&nbsp;1. 최소 권한 = <b>접근 제한</b> (누가 ✗)<br>
&nbsp;&nbsp;2. 검증 계획 = <b>정확성</b> (누가 ✗)<br>
&nbsp;&nbsp;3. 직무 분리 = <b>역할 분리</b> (누가 ✗)<br>
• <b>감사 로그 필수 요소:</b> 사용자 ID + 시간 + 변경 전·후 데이터<br>
• Q283 일관성: 책임 추적성 = 로그 (다른 통제로는 불가능)<br>
• Q260 연결: 감사 추적은 변경 불가능해야 신뢰성 보장<br>
• 핵심: <b>책임 추적성 = 시스템 생성 로그가 유일한 증명 수단</b></div>`,
reference:"CRM Chapter 4: IS Operations — Audit Logs & Accountability",
keyConcepts:[
"감사 로그와 책임 추적성|시스템 생성 감사 로그가 책임 추적성의 유일한 증명 수단",
"감사 로그 필수 요소|사용자 ID + 시간 + 변경 전·후 데이터 — 모두 포함되어야 함",
"통제 유형 구분|최소 권한·SoD·검증 = 다른 목적 (예방·정확성·역할) — 책임 추적성은 로그",
"Q283·Q260 일관성|책임 추적성 = 로그 + 무결성 보호 — CISA 일관 원칙"
]
},

// ============================================================
// Q289 - DBA Emergency Login Method
// ============================================================
{
id: 289,
domain: "4",
ks: "4A1 Database Management",
question: `정상 업무 시간 후에 데이터베이스에 긴급 변경을 해야 하는 DBA는 어떻게 로그인해야 하는가?<br><small style="color:#94a3b8">A DBA who needs to make emergency changes to a database after normal working hours should log in:</small>`,
options: [
  "변경을 위해 본인의 명명된(Named) 계정으로.<br><small style='color:#94a3b8'>With their named account to make the changes.</small>",
  "변경을 위해 공유 DBA 계정으로.<br><small style='color:#94a3b8'>With the shared DBA account to make the changes.</small>",
  "변경을 위해 서버 관리자 계정으로.<br><small style='color:#94a3b8'>To the server administrative account to make the changes.</small>",
  "변경을 위해 사용자 계정으로.<br><small style='color:#94a3b8'>To the user's account to make the changes.</small>"
],
correct: 0,
explanation: `<p><b>본인의 명명된 계정</b>으로 로그인해야 합니다. DBA 계정을 사용하기 전에 개별 사용자 계정으로 로그인하면 변경을 수행한 사람을 기록하여 책임 추적성을 제공합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">계정 유형</th><th style="padding:8px;border:1px solid #334155">책임 추적성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 명명된 본인 계정 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>개인 식별</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 변경자 식별 가능 — 책임 추적성</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 공유 DBA 계정</td><td style="padding:8px;border:1px solid #ddd">공유</td><td style="padding:8px;border:1px solid #ddd">개인 식별 어려움</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 서버 관리자 계정</td><td style="padding:8px;border:1px solid #ddd">공유 + 권한 부족</td><td style="padding:8px;border:1px solid #ddd">공유 사용 + DB 변경 권한 부족 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 일반 사용자 계정</td><td style="padding:8px;border:1px solid #ddd">권한 부족</td><td style="padding:8px;border:1px solid #ddd">DB 변경 권한 ✗</td></tr>
</table>
<div class="sbox"><b>👤 명명된 계정(Named Account) 모델:</b><br>
• <b>원칙:</b> 모든 활동은 개인 식별 가능한 계정으로 수행<br>
• <b>특권 작업 절차:</b><br>
&nbsp;&nbsp;1. 본인 명명된 계정으로 로그인<br>
&nbsp;&nbsp;2. 권한 상승(sudo·su) 또는 권한 부여<br>
&nbsp;&nbsp;3. 활동이 본인 ID에 귀속<br>
• <b>공유 계정 위험:</b><br>
&nbsp;&nbsp;1. 책임 추적성 상실<br>
&nbsp;&nbsp;2. 비밀번호 공유 = 침해 위험 증가<br>
&nbsp;&nbsp;3. SoD 위반 가능<br>
• Q244·Q288 연결: 책임 추적성 = 개인 식별 가능 계정<br>
• 핵심: <b>"개인 ID → 권한 상승 → 활동 추적"</b> 모델</div>`,
reference:"CRM Chapter 4: IS Operations — Named Accounts & Accountability",
keyConcepts:[
"명명된 계정|개인 식별 가능 계정 사용 — 책임 추적성의 기본 원칙",
"공유 계정 위험|책임 추적성 상실 + 비밀번호 공유 + SoD 위반 — 회피 필요",
"특권 작업 절차|개인 계정 로그인 → 권한 상승 → 활동 추적 — 책임 추적성 유지",
"Q244·Q288 일관성|책임 추적성 = 개인 식별 가능 계정 + 감사 로그"
]
},

// ============================================================
// Q290 - Denormalization Risk
// ============================================================
{
id: 290,
domain: "4",
ks: "4A1 Database Management",
question: `DBA가 일부 테이블의 성능 문제를 식별했고, 이는 비정규화를 통해 해결할 수 있다. 이 상황은 어떤 위험을 증가시키는가?<br><small style="color:#94a3b8">A DBA has identified a performance problem with some tables, which can be solved through denormalization. This situation will increase the risk of:</small>`,
options: [
  "동시 접근(Concurrent access).<br><small style='color:#94a3b8'>Concurrent access</small>",
  "교착 상태(Deadlocks).<br><small style='color:#94a3b8'>Deadlocks</small>",
  "데이터에 대한 비인가 접근.<br><small style='color:#94a3b8'>Unauthorized access to data</small>",
  "데이터 무결성 손실.<br><small style='color:#94a3b8'>A loss of data integrity</small>"
],
correct: 3,
explanation: `<p><b>데이터 무결성 손실</b>이 비정규화의 주요 위험입니다. 비정규화는 데이터 무결성을 보장하는 구조를 손상시켜 데이터 불일치와 무결성 손실 위험을 증가시킵니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">비정규화 영향</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 동시 접근</td><td style="padding:8px;border:1px solid #ddd">간접</td><td style="padding:8px;border:1px solid #ddd">직접 관련 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 교착 상태</td><td style="padding:8px;border:1px solid #ddd">간접</td><td style="padding:8px;border:1px solid #ddd">성능 영향 가능하나 직접 관련 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 비인가 접근</td><td style="padding:8px;border:1px solid #ddd">없음</td><td style="padding:8px;border:1px solid #ddd">접근 통제 영역 — 비정규화 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 데이터 무결성 손실 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>직접</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 중복 데이터 = 일관성 유지 부담</b></td></tr>
</table>
<div class="sbox"><b>⚠️ 비정규화와 데이터 무결성:</b><br>
• <b>비정규화 = 중복 의도적 도입</b> (Q279 연결)<br>
• <b>중복의 무결성 위험:</b><br>
&nbsp;&nbsp;1. 한 곳만 업데이트 → 다른 곳과 불일치<br>
&nbsp;&nbsp;2. 트리거·프로시저로 동기화 부담<br>
&nbsp;&nbsp;3. 갱신 이상(Update Anomaly)<br>
&nbsp;&nbsp;4. 삭제 이상(Deletion Anomaly)<br>
&nbsp;&nbsp;5. 삽입 이상(Insertion Anomaly)<br>
• <b>정규화의 목적:</b> 이런 이상(Anomaly) 제거 → 무결성 보장<br>
• <b>비정규화 = 정규화 역행</b> → 무결성 위험 증가<br>
• <b>트레이드오프:</b> 성능↑ vs 무결성↓<br>
• Q279 연결: 비정규화 결과 = 중복 증가<br>
• 핵심: <b>"중복 = 무결성의 적"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Denormalization Risks",
keyConcepts:[
"비정규화 무결성 위험|중복 데이터 = 일관성 유지 부담 — 갱신·삽입·삭제 이상 발생 가능",
"정규화 목적|이상(Anomaly) 제거 → 무결성 보장 — 비정규화는 역행",
"비정규화 트레이드오프|성능↑ vs 무결성↓ — 의도된 결정이지만 위험 증가",
"Q279 일관성|비정규화 = 중복 증가 (Q279) → 무결성 손실 (Q290) — 동일 흐름"
]
},

// ============================================================
// Q291 - Foreign Key Referential Integrity
// ============================================================
{
id: 291,
domain: "4",
ks: "4A1 Database Management",
question: `참조 무결성을 가진 관계형 데이터베이스에서, 고객 테이블의 행에 있는 고객 번호가 주문 테이블의 활성 주문과 함께 저장되어 있을 때 해당 행의 삭제를 방지하는 키는?<br><small style="color:#94a3b8">In a relational database with referential integrity, the use of which key would prevent deletion of a row from a customer table if the customer number is stored with live orders on the orders table?</small>`,
options: [
  "외래 키(Foreign Key).<br><small style='color:#94a3b8'>Foreign key</small>",
  "기본 키(Primary Key).<br><small style='color:#94a3b8'>Primary key</small>",
  "보조 키(Secondary Key).<br><small style='color:#94a3b8'>Secondary key</small>",
  "공개 키(Public Key).<br><small style='color:#94a3b8'>Public key</small>"
],
correct: 0,
explanation: `<p><b>외래 키(Foreign Key)</b>가 정답입니다. 참조 무결성을 가진 관계형 데이터베이스에서, 외래 키는 기본 키 변경과 레코드 삭제를 방지하여 데이터베이스 내 고아 관계(Orphaned Relations) 발생을 방지합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">키 유형</th><th style="padding:8px;border:1px solid #334155">역할</th><th style="padding:8px;border:1px solid #334155">참조 무결성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>외래 키 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>다른 테이블 PK 참조</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 참조 무결성 강제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">기본 키</td><td style="padding:8px;border:1px solid #ddd">테이블 내 행 고유 식별</td><td style="padding:8px;border:1px solid #ddd">단일 테이블 — 단독 참조 무결성 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">보조 키</td><td style="padding:8px;border:1px solid #ddd">대체 식별자·인덱스</td><td style="padding:8px;border:1px solid #ddd">참조 무결성 검사 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">공개 키</td><td style="padding:8px;border:1px solid #ddd">암호화</td><td style="padding:8px;border:1px solid #ddd">DB 키와 무관</td></tr>
</table>
<div class="sbox"><b>🔗 외래 키와 참조 무결성 동작:</b><br>
• <b>예시 시나리오:</b><br>
&nbsp;&nbsp;- Customer 테이블: customer_id (PK)<br>
&nbsp;&nbsp;- Orders 테이블: customer_id (FK → Customer.customer_id)<br>
• <b>FK 제약 동작:</b><br>
&nbsp;&nbsp;1. <b>RESTRICT/NO ACTION</b>: 자식 레코드 존재 시 부모 삭제 차단 (Q291의 정답)<br>
&nbsp;&nbsp;2. <b>CASCADE</b>: 부모 삭제 시 자식도 삭제<br>
&nbsp;&nbsp;3. <b>SET NULL</b>: 부모 삭제 시 자식 FK를 NULL로<br>
&nbsp;&nbsp;4. <b>SET DEFAULT</b>: 부모 삭제 시 기본값으로<br>
• <b>고아 레코드(Orphan Record):</b> 부모 없는 자식 → 무결성 위반<br>
• Q274·Q287 연결: 참조 무결성 = DB 무결성의 핵심 유형<br>
• 핵심: <b>FK = "부모-자식 일관성 유지" 메커니즘</b></div>`,
reference:"CRM Chapter 4: IS Operations — Foreign Keys & Referential Integrity",
keyConcepts:[
"외래 키와 참조 무결성|FK가 다른 테이블 PK 참조 — 부모 삭제 방지로 고아 레코드 방지",
"FK 제약 동작|RESTRICT(차단)·CASCADE(연쇄)·SET NULL·SET DEFAULT — 4가지 옵션",
"PK vs FK|PK=단일 테이블 식별, FK=테이블 간 관계 — 참조 무결성은 FK가 강제",
"Q274·Q287 일관성|참조 무결성 = DB 무결성의 핵심 — FK가 메커니즘"
]
},

// ============================================================
// Q292 - Concurrency Control Objective
// ============================================================
{
id: 292,
domain: "4",
ks: "4A1 Database Management",
question: `데이터베이스 시스템에서 동시성 통제(Concurrency Control)의 목적은?<br><small style="color:#94a3b8">The objective of concurrency control in a database system is to:</small>`,
options: [
  "데이터베이스 업데이트를 인가된 사용자로 제한한다.<br><small style='color:#94a3b8'>Restrict updating of the database to authorized users.</small>",
  "두 프로세스가 동일 데이터를 동시에 업데이트하려 할 때 무결성을 보장한다.<br><small style='color:#94a3b8'>Ensure integrity when two processes attempt to update the same data simultaneously.</small>",
  "데이터베이스의 부주의한 또는 비인가 데이터 노출을 방지한다.<br><small style='color:#94a3b8'>Prevent inadvertent or unauthorized disclosure of data in the database.</small>",
  "데이터의 정확성, 완전성, 일관성을 보장한다.<br><small style='color:#94a3b8'>Ensure the accuracy, completeness, and consistency of data.</small>"
],
correct: 1,
explanation: `<p><b>두 프로세스가 동일 데이터 동시 업데이트 시 무결성 보장</b>이 동시성 통제의 목적입니다. 동시 갱신 프로세스가 같은 데이터 항목에 동시 접근할 때 발생할 수 있는 데이터 무결성 문제를 방지합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">담당 영역</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 인가된 사용자 제한</td><td style="padding:8px;border:1px solid #ddd">접근 통제</td><td style="padding:8px;border:1px solid #ddd">권한 관리 — 동시성 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 동시 업데이트 무결성 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>동시성 통제</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 동시 접근 시 무결성 보호</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 노출 방지</td><td style="padding:8px;border:1px solid #ddd">기밀성 통제</td><td style="padding:8px;border:1px solid #ddd">비밀번호 등 — 동시성 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 정확성·완전성·일관성</td><td style="padding:8px;border:1px solid #ddd">품질 통제</td><td style="padding:8px;border:1px solid #ddd">편집·검증 — 동시성 ✗</td></tr>
</table>
<div class="sbox"><b>🔒 동시성 통제(Concurrency Control) 메커니즘:</b><br>
• <b>발생 문제(Concurrency Problems):</b><br>
&nbsp;&nbsp;1. <b>Lost Update</b>: 한 트랜잭션 갱신이 다른 트랜잭션에 덮어씌워짐<br>
&nbsp;&nbsp;2. <b>Dirty Read</b>: 커밋되지 않은 데이터 읽기<br>
&nbsp;&nbsp;3. <b>Non-repeatable Read</b>: 같은 쿼리가 다른 결과<br>
&nbsp;&nbsp;4. <b>Phantom Read</b>: 존재하지 않던 행이 나타남<br>
• <b>통제 메커니즘:</b><br>
&nbsp;&nbsp;1. <b>잠금(Locking)</b>: 락 획득 후 접근<br>
&nbsp;&nbsp;2. <b>타임스탬프</b>: 시간 순서 기반<br>
&nbsp;&nbsp;3. <b>낙관적 동시성(MVCC)</b>: 충돌 시 롤백<br>
• <b>ACID 속성:</b> 동시성 통제 = <b>I (Isolation)</b><br>
• 핵심: 동시성 통제 = <b>"동시 트랜잭션 격리"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Concurrency Control & ACID",
keyConcepts:[
"동시성 통제 목적|동시 트랜잭션의 데이터 무결성 보장 — 동시 업데이트 충돌 방지",
"동시성 문제 4가지|Lost Update·Dirty Read·Non-repeatable Read·Phantom Read",
"동시성 통제 메커니즘|잠금(Locking)·타임스탬프·MVCC — 트랜잭션 격리 기법",
"ACID와 동시성|동시성 통제 = ACID의 Isolation(격리성) 보장"
]
},

// ============================================================
// Q293 - Transaction Integrity During Halt
// ============================================================
{
id: 293,
domain: "4",
ks: "4A1 Database Management",
question: `온라인 뱅킹 거래가 데이터베이스에 게시되고 있을 때 처리가 갑자기 중단되었다. 거래 처리의 무결성을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Online banking transactions are being posted to the database when processing suddenly comes to a halt. The integrity of the transaction processing is BEST ensured by:</small>`,
options: [
  "데이터베이스 무결성 점검.<br><small style='color:#94a3b8'>Database integrity checks</small>",
  "검증 점검(Validation checks).<br><small style='color:#94a3b8'>Validation checks</small>",
  "입력 통제.<br><small style='color:#94a3b8'>Input controls</small>",
  "데이터베이스 커밋 및 롤백.<br><small style='color:#94a3b8'>Database commits and rollbacks</small>"
],
correct: 3,
explanation: `<p><b>데이터베이스 커밋 및 롤백</b>이 정답입니다. 커밋은 완료된 거래 처리를 저장하고, 롤백은 거래 실패 시 부분 완료된 거래 처리를 되돌립니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">시스템 장애 대응</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. DB 무결성 점검</td><td style="padding:8px;border:1px solid #ddd">일관성·정확성</td><td style="padding:8px;border:1px solid #ddd">중요하나 원자성 직접 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 검증 점검</td><td style="padding:8px;border:1px solid #ddd">손상 데이터 입력 방지</td><td style="padding:8px;border:1px solid #ddd">시스템 장애 대응 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 입력 통제</td><td style="padding:8px;border:1px solid #ddd">입력 데이터 보호</td><td style="padding:8px;border:1px solid #ddd">시스템 장애 대응 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 커밋·롤백 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>원자성(Atomicity) 보장</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 전체 완료 or 전체 취소 — 시스템 장애 대응</b></td></tr>
</table>
<div class="sbox"><b>⚛️ ACID 속성과 거래 무결성:</b><br>
• <b>A (Atomicity·원자성):</b> 전체 완료 or 전체 취소 ← Q293의 핵심<br>
&nbsp;&nbsp;- 커밋: 전체 완료 시 영구 저장<br>
&nbsp;&nbsp;- 롤백: 일부 실패 시 전체 취소<br>
• <b>C (Consistency·일관성):</b> 거래 전후 DB 일관성<br>
• <b>I (Isolation·격리성):</b> 동시 트랜잭션 격리 (Q292)<br>
• <b>D (Durability·내구성):</b> 커밋된 데이터 영구 보존<br>
• <b>"All or Nothing" 원칙:</b><br>
&nbsp;&nbsp;예: 계좌 A 출금 + 계좌 B 입금<br>
&nbsp;&nbsp;- 출금 후 시스템 다운 → 롤백 → 출금 취소<br>
• Q275(이미지 덤프) 연결: 롤백 = 비포 이미지 활용<br>
• 핵심: <b>거래 처리 = ACID 보장</b></div>`,
reference:"CRM Chapter 4: IS Operations — ACID Properties & Transaction Integrity",
keyConcepts:[
"원자성(Atomicity)|거래의 전체 완료 or 전체 취소 — 커밋·롤백으로 보장",
"커밋·롤백 메커니즘|커밋=완료 저장, 롤백=실패 시 취소 — 시스템 장애 대응",
"ACID 속성|A(원자)·C(일관)·I(격리)·D(내구) — 거래 무결성의 4대 원칙",
"Q275·Q292 일관성|롤백(Q275)·격리성(Q292)·원자성(Q293) — ACID 종합"
]
},

// ============================================================
// Q294 - Out-of-Range Data Prevention (Variant)
// ============================================================
{
id: 294,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 데이터베이스의 일부 테이블에서 범위 외 데이터를 발견했다. 이 상황을 가장 잘 피할 수 있는 통제는?<br><small style="color:#94a3b8">An IS auditor finds out-of-range data in some tables of a database. Which control would BEST avoid this situation?</small>`,
options: [
  "모든 테이블 업데이트 거래를 로깅한다.<br><small style='color:#94a3b8'>Log all table update transactions.</small>",
  "전후 이미지 보고를 구현한다.<br><small style='color:#94a3b8'>Implement before-and-after image reporting.</small>",
  "추적 및 태깅을 사용한다.<br><small style='color:#94a3b8'>Use tracing and tagging.</small>",
  "데이터베이스에 무결성 제약 조건을 구현한다.<br><small style='color:#94a3b8'>Implement integrity constraints in the database.</small>"
],
correct: 3,
explanation: `<p><b>무결성 제약 조건 구현</b>이 정답입니다(Q287의 변형). 데이터가 사전 정의된 테이블·규칙에 대해 검증되어 정의되지 않은 데이터의 입력을 차단하는 예방 통제입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 유형</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 거래 로깅</td><td style="padding:8px;border:1px solid #ddd">탐지</td><td style="padding:8px;border:1px solid #ddd">유효하지 않은 데이터 입력 방지 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 전후 이미지 보고</td><td style="padding:8px;border:1px solid #ddd">탐지</td><td style="padding:8px;border:1px solid #ddd">사후 분석 — 회피 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 추적·태깅</td><td style="padding:8px;border:1px solid #ddd">테스트 기법</td><td style="padding:8px;border:1px solid #ddd">시스템 테스트용 — 예방 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 무결성 제약 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>예방</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 사전 규칙으로 입력 차단</b></td></tr>
</table>
<div class="sbox"><b>🔁 Q287 = Q294 (동일 패턴 반복):</b><br>
• 범위 외 데이터 = <b>도메인 무결성 제약</b> (예방 통제)<br>
• 예방 통제 우선 원칙: 입력 시점 차단 > 사후 탐지<br>
• 무결성 제약 종류:<br>
&nbsp;&nbsp;1. 도메인 (값 범위·유형)<br>
&nbsp;&nbsp;2. 엔티티 (PK)<br>
&nbsp;&nbsp;3. 참조 (FK - Q291)<br>
&nbsp;&nbsp;4. 사용자 정의 (비즈니스 규칙)<br>
• Q251·Q287·Q294 일관: <b>예방 통제(입력 시점) > 탐지 통제(사후)</b><br>
• 핵심: CISA 단골 패턴 — "Out of range" → 무결성 제약</div>`,
reference:"CRM Chapter 4: IS Operations — Integrity Constraints (Same as Q287)",
keyConcepts:[
"무결성 제약 = 예방 통제|사전 정의 규칙으로 입력 시점 차단 — 범위 외 데이터 방지",
"CISA 단골 패턴|범위 외 데이터 → 무결성 제약 (Q287·Q294 동일)",
"예방 vs 탐지|로그·이미지=탐지(사후), 무결성 제약=예방(입력 시점) — 예방이 우선",
"무결성 제약 4유형|도메인·엔티티·참조·사용자 정의 — 모두 예방 통제"
]
},

// ============================================================
// Q295 - Situation Increasing Fraud Likelihood
// ============================================================
{
id: 295,
domain: "4",
ks: "4A1 Database Management",
question: `다음 중 어느 상황이 부정(Fraud) 가능성을 증가시키는가?<br><small style="color:#94a3b8">Which of the following situations would increase the likelihood of fraud?</small>`,
options: [
  "애플리케이션 프로그래머가 운영 데이터베이스의 데이터에 변경을 구현한다.<br><small style='color:#94a3b8'>Application programmers are implementing changes to data in the production database.</small>",
  "관리자가 변경 통제 절차를 따르지 않고 벤더 제공 SW에 벤더 패치를 구현한다.<br><small style='color:#94a3b8'>Administrators are implementing vendor patches to vendor-supplied software without following change control procedures.</small>",
  "운영 지원 직원이 배치 스케줄에 변경을 구현한다.<br><small style='color:#94a3b8'>Operations support staff members are implementing changes to batch schedules.</small>",
  "DBA가 데이터 구조에 변경을 구현한다.<br><small style='color:#94a3b8'>DBAs are implementing changes to data structures.</small>"
],
correct: 0,
explanation: `<p><b>애플리케이션 프로그래머의 운영 데이터 변경</b>이 부정 가능성을 가장 크게 증가시킵니다. 운영 프로그램 변경 통제가 엄격하지 않으면 애플리케이션 프로그램이 데이터를 조작하도록 수정될 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">SoD 위반</th><th style="padding:8px;border:1px solid #334155">부정 가능성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 프로그래머→운영 데이터 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>심각한 SoD 위반</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 데이터 조작 코드 삽입 가능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 패치 변경 통제 미준수</td><td style="padding:8px;border:1px solid #ddd">절차 위반</td><td style="padding:8px;border:1px solid #ddd">위험이나 벤더 패치 한정 — 작음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 배치 스케줄 변경</td><td style="padding:8px;border:1px solid #ddd">정상 직무</td><td style="padding:8px;border:1px solid #ddd">스케줄링만 — 데이터 영향 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. DBA 데이터 구조 변경</td><td style="padding:8px;border:1px solid #ddd">정상 직무</td><td style="padding:8px;border:1px solid #ddd">DBA 본연 역할 — 정상</td></tr>
</table>
<div class="sbox"><b>🚨 프로그래머의 운영 접근 위험:</b><br>
• <b>핵심 위험:</b> 코드를 작성하는 사람이 운영 데이터에 접근<br>
• <b>가능한 부정 시나리오:</b><br>
&nbsp;&nbsp;1. 자신에게 유리한 거래 조작<br>
&nbsp;&nbsp;2. 감사 추적 회피 코드 삽입<br>
&nbsp;&nbsp;3. 백도어 설치<br>
&nbsp;&nbsp;4. 데이터 직접 변조<br>
• <b>SoD 위반:</b> 개발(코드 작성) ↔ 운영(데이터 변경) 분리 필요<br>
• Q220·Q241·Q255 연결: 직무 분리 위반 패턴<br>
&nbsp;&nbsp;- Q220: DBA → OS 패치<br>
&nbsp;&nbsp;- Q241: 프로그래머 → 운영 환경 이관<br>
&nbsp;&nbsp;- Q255: DBA → 자기 활동 로그 삭제<br>
&nbsp;&nbsp;- Q295: 프로그래머 → 운영 데이터 변경<br>
• 핵심: <b>"코드 + 데이터 모두 통제 = 견제 없음 = 부정 위험"</b></div>`,
reference:"CRM Chapter 4: IS Operations — SoD & Fraud Prevention",
keyConcepts:[
"프로그래머 운영 접근|개발자가 운영 데이터 변경 = SoD 위반 → 부정 가능성 최대",
"부정 시나리오|거래 조작·백도어·감사 회피·데이터 변조 — 코드+데이터 통제 시 가능",
"SoD 위반 패턴|Q220·Q241·Q255·Q295 일관 — 역할 경계 침범 = 부정 위험",
"DBA 정상 직무|데이터 구조 변경 = DBA 본연 역할 — 부정과 무관"
]
},

// ============================================================
// Q296 - Referential Integrity Assurance Review
// ============================================================
{
id: 296,
domain: "4",
ks: "4A1 Database Management",
question: `애플리케이션 감사 중, IS 감사인이 데이터베이스의 참조 무결성에 대한 보증을 제공하도록 요청받았다. 무엇을 검토해야 하는가?<br><small style="color:#94a3b8">During an application audit, an IS auditor is asked to provide assurance of the database's referential integrity. Which of the following should be reviewed?</small>`,
options: [
  "필드 정의(Field definition).<br><small style='color:#94a3b8'>Field definition</small>",
  "마스터 테이블 정의.<br><small style='color:#94a3b8'>Master table definition</small>",
  "복합 키(Composite keys).<br><small style='color:#94a3b8'>Composite keys</small>",
  "외래 키 구조(Foreign key structure).<br><small style='color:#94a3b8'>Foreign key structure</small>"
],
correct: 3,
explanation: `<p><b>외래 키 구조</b>를 검토해야 합니다. 관계형 데이터베이스의 참조 무결성은 연결된 테이블 간의 일관성을 의미하며, 일반적으로 기본 키(또는 후보 키)와 외래 키의 조합으로 강제됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">설명 대상</th><th style="padding:8px;border:1px solid #334155">참조 무결성과의 관계</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 필드 정의</td><td style="padding:8px;border:1px solid #ddd">테이블 레이아웃</td><td style="padding:8px;border:1px solid #ddd">직접 관련 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 마스터 테이블 정의</td><td style="padding:8px;border:1px solid #ddd">DB 구조</td><td style="padding:8px;border:1px solid #ddd">직접 관련 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 복합 키</td><td style="padding:8px;border:1px solid #ddd">키 생성 방식</td><td style="padding:8px;border:1px solid #ddd">직접 관련 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 외래 키 구조 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>테이블 간 연결</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 참조 무결성의 강제 메커니즘</b></td></tr>
</table>
<div class="sbox"><b>🔗 외래 키 구조 검토 항목:</b><br>
• <b>FK가 부모 테이블의 PK·후보 키를 참조하는지 확인</b><br>
• <b>FK 제약 동작 설정 확인 (Q291 연결):</b><br>
&nbsp;&nbsp;1. RESTRICT/NO ACTION (삭제 차단)<br>
&nbsp;&nbsp;2. CASCADE (연쇄 삭제)<br>
&nbsp;&nbsp;3. SET NULL<br>
&nbsp;&nbsp;4. SET DEFAULT<br>
• <b>고아 레코드 점검:</b> 부모 없는 자식 레코드 존재 여부<br>
• <b>NULL 처리:</b> FK 컬럼의 NULL 허용 여부<br>
• Q274·Q291 일관성: 참조 무결성 = FK가 메커니즘<br>
• 핵심: <b>참조 무결성 검토 = FK 구조 검토</b></div>`,
reference:"CRM Chapter 4: IS Operations — Referential Integrity Audit",
keyConcepts:[
"FK 구조 검토|참조 무결성 = FK가 강제 메커니즘 — FK 구조 검토가 직접적 보증",
"FK 검토 항목|FK→PK 참조 + 제약 동작 + 고아 레코드 + NULL 처리",
"필드·테이블 정의 vs FK|필드·테이블 = 구조, FK = 관계 — 참조 무결성은 관계 영역",
"Q274·Q291·Q296 일관성|참조 무결성 = FK 메커니즘 (CISA 일관 원칙)"
]
},

// ============================================================
// Q297 - Continuous Database Availability
// ============================================================
{
id: 297,
domain: "4",
ks: "4A1 Database Management",
question: `온라인 판매를 지원하는 대규모 데이터베이스의 데이터를 인가된 사용자에게 지속적으로 제공하는 가장 좋은 접근법은?<br><small style="color:#94a3b8">What is the BEST approach to ensure data is continuously available to authorized users of a large database with data supporting online sales?</small>`,
options: [
  "주간 전체 백업 + 일일 증분 백업.<br><small style='color:#94a3b8'>Weekly full backup with daily incremental backup</small>",
  "일일 전체 백업.<br><small style='color:#94a3b8'>Daily full backup</small>",
  "클러스터 서버.<br><small style='color:#94a3b8'>Clustered servers</small>",
  "미러링된 하드 디스크.<br><small style='color:#94a3b8'>Mirrored hard disks</small>"
],
correct: 3,
explanation: `<p><b>미러링된 하드 디스크</b>가 정답입니다. 미러링은 한 드라이브 장애 시 다른 드라이브에서 데이터 가용성을 보장하는 데이터 중복을 제공합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">기능</th><th style="padding:8px;border:1px solid #334155">지속적 가용성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 주간+일일 증분</td><td style="padding:8px;border:1px solid #ddd">백업 전략</td><td style="padding:8px;border:1px solid #ddd">최대 1일 데이터 손실 — 부적합</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 일일 전체 백업</td><td style="padding:8px;border:1px solid #ddd">백업 전략</td><td style="padding:8px;border:1px solid #ddd">대규모 DB는 시간 소요 — 비현실적</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 클러스터 서버</td><td style="padding:8px;border:1px solid #ddd">처리 이중화</td><td style="padding:8px;border:1px solid #ddd">처리 가용성 ✔ but 데이터 가용성은 별개</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 미러링 디스크 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>데이터 이중화</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 디스크 장애에도 데이터 즉시 사용 가능</b></td></tr>
</table>
<div class="sbox"><b>💾 데이터 가용성 vs 백업:</b><br>
• <b>미러링(Mirroring/RAID 1):</b><br>
&nbsp;&nbsp;- 실시간 데이터 복제<br>
&nbsp;&nbsp;- 디스크 장애 시 즉시 전환<br>
&nbsp;&nbsp;- <b>데이터 손실 0</b> + 다운타임 최소<br>
• <b>백업 vs 미러링:</b><br>
&nbsp;&nbsp;- 백업 = 시점 복사 → 복원 시간 + 데이터 손실 가능<br>
&nbsp;&nbsp;- 미러링 = 실시간 복제 → 즉시 사용<br>
• <b>클러스터 vs 미러링:</b><br>
&nbsp;&nbsp;- 클러스터(Q205) = 서버 장애 대응<br>
&nbsp;&nbsp;- 미러링 = 디스크 장애 대응 + 데이터 가용성<br>
• Q203(웹 앱 가용성) 연결: 가용성 기술 비교<br>
&nbsp;&nbsp;- 로드 밸런싱 = 서버 트래픽 분산<br>
&nbsp;&nbsp;- 클러스터링 = 서버 페일오버<br>
&nbsp;&nbsp;- 미러링 = 디스크 이중화<br>
• 핵심: <b>온라인 판매 = 지속적 데이터 가용성 = 미러링</b></div>`,
reference:"CRM Chapter 4: IS Operations — Disk Mirroring & Data Availability",
keyConcepts:[
"디스크 미러링|실시간 데이터 복제 — 디스크 장애 시 즉시 전환으로 지속적 가용성 보장",
"백업 vs 미러링|백업=시점 복사(데이터 손실 가능), 미러링=실시간 복제(손실 0)",
"클러스터링 vs 미러링|클러스터=서버 장애, 미러링=디스크 장애 — 다른 계층의 가용성",
"Q203·Q205 일관성|가용성 기술: 로드밸런싱(트래픽)·클러스터(서버)·미러링(디스크)"
]
},

// ============================================================
// Q298 - Overseas Mirrored Database Risk
// ============================================================
{
id: 298,
domain: "4",
ks: "4A1 Database Management",
question: `해외 데이터 센터에 새 데이터베이스가 설정되어 일반 대중에게 정보를 제공하고 정보 제공 속도를 증가시킨다. 해외 DB는 로컬 정보를 미러링하기 위해 실시간 업데이트된다. 다음 운영 영역 중 가장 큰 위험으로 고려해야 할 것은?<br><small style="color:#94a3b8">A new database is being set up overseas to provide public information and increase availability speed. It's housed at a data center and updated in real time to mirror local information. Which area has the HIGHEST risk?</small>`,
options: [
  "데이터베이스에 저장된 정보의 기밀성.<br><small style='color:#94a3b8'>Confidentiality of the information stored in the database</small>",
  "데이터베이스 애플리케이션을 실행하는 데 사용되는 하드웨어.<br><small style='color:#94a3b8'>The hardware being used to run the database application</small>",
  "해외 데이터베이스 정보의 백업.<br><small style='color:#94a3b8'>Backups of the information in the overseas database</small>",
  "백업 데이터베이스에 대한 원격 접근.<br><small style='color:#94a3b8'>Remote access to the backup database</small>"
],
correct: 1,
explanation: `<p><b>하드웨어</b>가 가장 큰 위험입니다. 비즈니스 목표가 대중에게 정보를 적시에 제공하는 것이며, 데이터베이스가 물리적으로 해외에 위치하므로 수정되지 않은 하드웨어 장애는 사용자에 대한 시스템 가용성을 감소시킬 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">위험 평가</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 기밀성</td><td style="padding:8px;border:1px solid #ddd">낮음</td><td style="padding:8px;border:1px solid #ddd">공개 정보 — 기밀성 우려 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. 하드웨어 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>최대</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 해외 위치 → 장애 시 수리 지연 → 가용성 영향</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 백업</td><td style="padding:8px;border:1px solid #ddd">낮음</td><td style="padding:8px;border:1px solid #ddd">해외 DB가 로컬의 미러 — 백업본은 로컬에 존재</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 원격 접근</td><td style="padding:8px;border:1px solid #ddd">낮음</td><td style="padding:8px;border:1px solid #ddd">가용성 영향 ✗</td></tr>
</table>
<div class="sbox"><b>🌍 해외 데이터 센터 위험 분석:</b><br>
• <b>비즈니스 목표:</b> 빠른 정보 제공 (가용성 중심)<br>
• <b>해외 위치 특수 위험:</b><br>
&nbsp;&nbsp;1. 물리적 접근 어려움<br>
&nbsp;&nbsp;2. 하드웨어 수리 지연<br>
&nbsp;&nbsp;3. 시간대 차이로 지원 어려움<br>
&nbsp;&nbsp;4. 현지 인프라 의존<br>
• <b>위험 분석 핵심:</b> 항상 <b>비즈니스 목표</b>와 <b>데이터 특성</b> 고려<br>
&nbsp;&nbsp;- 공개 정보 → 기밀성 ✗<br>
&nbsp;&nbsp;- 가용성 목표 → 가용성 위험에 집중<br>
&nbsp;&nbsp;- 미러링 → 백업 우려 ✗<br>
• Q284 연결: 데이터 속성(공개 vs 기밀)이 위험 평가에 영향<br>
• 핵심: <b>"비즈니스 목표 + 데이터 특성"</b>이 위험 우선순위 결정</div>`,
reference:"CRM Chapter 4: IS Operations — Risk Assessment & Data Center Location",
keyConcepts:[
"해외 위치 위험|물리적 접근 어려움 → 하드웨어 수리 지연 → 가용성 영향",
"위험 분석 원칙|비즈니스 목표 + 데이터 특성 고려 — 공개 정보는 기밀성 우려 ✗",
"미러링과 백업|미러링된 DB = 백업본은 원본 위치에 존재 — 백업 우려 감소",
"Q284 연결|데이터 속성(공개 vs 기밀)이 위험 평가의 핵심 요소"
]
},

// ============================================================
// Q299 - Data Warehouse Integrity
// ============================================================
{
id: 299,
domain: "4",
ks: "4A1 Database Management",
question: `다음 보안 조치 중 데이터 웨어하우스에 저장된 정보의 무결성을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Which of the following security measures BEST ensures the integrity of information stored in a data warehouse?</small>`,
options: [
  "검증된 일일 백업.<br><small style='color:#94a3b8'>Validated daily backups</small>",
  "변경 관리 절차.<br><small style='color:#94a3b8'>Change management procedures</small>",
  "데이터 사전 유지보수.<br><small style='color:#94a3b8'>Data dictionary maintenance</small>",
  "읽기 전용 제한(Read-only restriction).<br><small style='color:#94a3b8'>A read-only restriction</small>"
],
correct: 3,
explanation: `<p><b>읽기 전용 제한</b>이 정답입니다. 데이터 웨어하우스에 저장된 대부분의 데이터는 역사적(Historical) 데이터로 변경이 필요하지 않으므로, 읽기 전용 제한 적용으로 데이터 조작을 방지할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">DW 무결성 보장</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 검증된 일일 백업</td><td style="padding:8px;border:1px solid #ddd">가용성</td><td style="padding:8px;border:1px solid #ddd">백업 작동 보장 — 무결성 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 변경 관리 절차</td><td style="padding:8px;border:1px solid #ddd">시스템 변경 통제</td><td style="padding:8px;border:1px solid #ddd">시스템 보호 — 데이터 무결성 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 데이터 사전 유지</td><td style="padding:8px;border:1px solid #ddd">메타데이터 정의</td><td style="padding:8px;border:1px solid #ddd">입력 데이터 정의 — 기존 데이터 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 읽기 전용 제한 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>변경 차단</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 데이터 조작 원천 차단 — 무결성 보장</b></td></tr>
</table>
<div class="sbox"><b>📊 데이터 웨어하우스(DW) 특성:</b><br>
• <b>주 용도:</b> 분석·보고 (OLAP)<br>
• <b>데이터 특성:</b> <b>역사적·축적</b> (변경 거의 없음)<br>
• <b>OLTP vs OLAP:</b><br>
&nbsp;&nbsp;- OLTP (운영 DB) = 거래 처리, 빈번한 변경<br>
&nbsp;&nbsp;- OLAP (DW) = 분석, 읽기 중심<br>
• <b>읽기 전용 제한의 효과:</b><br>
&nbsp;&nbsp;1. 사용자 실수로 인한 변경 방지<br>
&nbsp;&nbsp;2. 악의적 조작 차단<br>
&nbsp;&nbsp;3. 분석 결과의 일관성 보장<br>
• <b>DW 갱신:</b> ETL 프로세스를 통해서만 (통제된 경로)<br>
• Q280 연결: 보안 = 알려진 취약점 차단 / DW 보안 = 변경 차단<br>
• 핵심: <b>"DW = 읽기 전용이 본질에 부합"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Data Warehouse Security",
keyConcepts:[
"데이터 웨어하우스 읽기 전용|역사적 데이터 특성상 읽기 전용 제한이 무결성 보장의 최선",
"OLTP vs OLAP|운영 DB(변경 빈번)와 DW(읽기 중심) 특성 차이 — 보안 접근 다름",
"DW 갱신 경로|ETL 프로세스만 — 통제된 경로로만 데이터 추가",
"무결성 vs 다른 통제|읽기 전용=무결성, 백업=가용성, 변경관리=시스템 — 목적 구분"
]
},

// ============================================================
// Q300 - Migrated Account Balance Verification
// ============================================================
{
id: 300,
domain: "4",
ks: "4A1 Database Management",
question: `한 데이터베이스에서 다른 데이터베이스로 마이그레이션된 개별 계정 잔액의 정확성을 판단할 때 가장 효과적인 것은?<br><small style="color:#94a3b8">Which of the following is the MOST effective when determining the correctness of individual account balances migrated from one database to another?</small>`,
options: [
  "마이그레이션 전후의 해시 합계를 비교한다.<br><small style='color:#94a3b8'>Compare the hash total before and after the migration.</small>",
  "두 데이터베이스의 레코드 수가 동일한지 확인한다.<br><small style='color:#94a3b8'>Verify that the number of records is the same for both databases.</small>",
  "마이그레이션된 계정 잔액의 샘플 테스트를 수행한다.<br><small style='color:#94a3b8'>Perform sample testing of the migrated account balances.</small>",
  "모든 거래의 통제 합계를 비교한다.<br><small style='color:#94a3b8'>Compare the control totals of all of the transactions.</small>"
],
correct: 2,
explanation: `<p><b>샘플 테스트</b>가 정답입니다. 마이그레이션 전후의 데이터베이스에서 개별 거래를 선택하여 비교하는 것으로, <b>개별 잔액의 정확성</b>을 확인할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">검증 수준</th><th style="padding:8px;border:1px solid #334155">개별 정확성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 해시 합계</td><td style="padding:8px;border:1px solid #ddd">배치 수준</td><td style="padding:8px;border:1px solid #ddd">전체 무결성만 — 개별 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 레코드 수</td><td style="padding:8px;border:1px solid #ddd">개수만</td><td style="padding:8px;border:1px solid #ddd">필드 마이그레이션 검증 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 샘플 테스트 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>개별 거래</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 개별 잔액 정확성 직접 확인</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 통제 합계</td><td style="padding:8px;border:1px solid #ddd">전체 합계</td><td style="padding:8px;border:1px solid #ddd">완전성·정확성 보장 ✗</td></tr>
</table>
<div class="sbox"><b>🎯 개별 정확성 vs 전체 무결성:</b><br>
• <b>전체 검증 (Aggregate):</b><br>
&nbsp;&nbsp;- 해시 합계, 통제 합계, 레코드 수<br>
&nbsp;&nbsp;- 장점: 빠르고 간단<br>
&nbsp;&nbsp;- 한계: 개별 오류 식별 ✗<br>
• <b>개별 검증 (Individual):</b><br>
&nbsp;&nbsp;- 샘플 테스트<br>
&nbsp;&nbsp;- 장점: 개별 정확성 확인 가능<br>
&nbsp;&nbsp;- 한계: 시간·자원 소요<br>
• <b>"개별 잔액의 정확성" 키워드:</b> 샘플 테스트가 유일한 답<br>
• Q258·Q278 연결: 데이터 마이그레이션 검증<br>
&nbsp;&nbsp;- Q258: 변환 누락 식별 = 예외 보고서<br>
&nbsp;&nbsp;- Q278: 무결성 = 가장 중요<br>
&nbsp;&nbsp;- Q300: 개별 정확성 = 샘플 테스트<br>
• 핵심: <b>"개별 = 샘플링", "전체 = 합계"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Migration Testing & Sampling",
keyConcepts:[
"개별 정확성 검증|샘플 테스트가 개별 잔액의 정확성 확인의 가장 효과적 방법",
"전체 vs 개별|합계(해시·통제)=전체 무결성, 샘플=개별 정확성 — 목적별 선택",
"합계 검증 한계|합계 일치해도 개별 오류 식별 ✗ — 보상 효과 가능",
"Q258·Q278·Q300 연결|마이그레이션: 누락(예외)·무결성(전체)·개별(샘플) — 다층 검증"
]
},

// ============================================================
// Q301 - HR DB Initialization Parameters
// ============================================================
{
id: 301,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 기업의 HR 데이터베이스 구현을 검토하고 있다. 감사인은 DB 서버가 고가용성을 위해 클러스터링되어 있고, 모든 기본 DB 계정이 제거되었으며, DB 감사 로그가 보관되고 매주 검토됨을 확인했다. 데이터베이스가 적절히 보호되도록 IS 감사인이 추가로 점검해야 할 영역은?<br><small style="color:#94a3b8">An IS auditor is reviewing an HR database implementation. Servers are clustered, default accounts removed, audit logs kept/reviewed weekly. What other area should the IS auditor check?</small>`,
options: [
  "DBA가 HR 데이터에 접근하지 못하도록 제한된다.<br><small style='color:#94a3b8'>DBAs are restricted from access to HR data.</small>",
  "데이터베이스 로그가 암호화된다.<br><small style='color:#94a3b8'>Database logs are encrypted.</small>",
  "데이터베이스 저장 프로시저가 암호화된다.<br><small style='color:#94a3b8'>Database stored procedures are encrypted.</small>",
  "데이터베이스 초기화 매개변수가 적절하다.<br><small style='color:#94a3b8'>Database initialization parameters are appropriate.</small>"
],
correct: 3,
explanation: `<p><b>데이터베이스 초기화 매개변수</b>가 정답입니다. 데이터베이스가 열릴 때 많은 구성 옵션이 초기화 매개변수에 의해 결정되며, 인증·원격 접근·기타 핵심 보안 영역을 포함한 글로벌 DB 설정을 다룹니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">평가</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. DBA 데이터 접근 제한</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">DBA는 모든 데이터 접근 — 실용적 통제 ✗ (Q281)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. DB 로그 암호화</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">로그는 보통 기밀 데이터 미포함 — 암호화 불필요</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 저장 프로시저 암호화</td><td style="padding:8px;border:1px solid #ddd">✗</td><td style="padding:8px;border:1px solid #ddd">민감한 함수만 필요 — 초기화 매개변수보다 덜 중요</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 초기화 매개변수 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>인증·원격 접근·핵심 보안 글로벌 설정</b></td></tr>
</table>
<div class="sbox"><b>⚙️ 데이터베이스 초기화 매개변수 검토:</b><br>
• <b>설정 파일:</b> Oracle init.ora, SQL Server 구성 등<br>
• <b>핵심 매개변수 영역:</b><br>
&nbsp;&nbsp;1. <b>인증:</b> OS 인증·강력한 비밀번호 정책<br>
&nbsp;&nbsp;2. <b>원격 접근:</b> 원격 로그인 허용 여부<br>
&nbsp;&nbsp;3. <b>감사:</b> 감사 수준·대상<br>
&nbsp;&nbsp;4. <b>네트워크:</b> 암호화·포트<br>
&nbsp;&nbsp;5. <b>권한:</b> 시스템 권한 부여<br>
• Q276·Q280 연결: DB 하드닝 = 기본 구성 변경 + 초기화 매개변수<br>
• 이미 점검된 항목: 가용성(클러스터)·기본 계정·로그 → 다음은 <b>구성 검토</b><br>
• 핵심: <b>"기본 계정 제거" + "초기화 매개변수 검토" = 완전한 하드닝"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Database Initialization Parameters",
keyConcepts:[
"초기화 매개변수|인증·원격 접근·감사·네트워크 등 글로벌 보안 설정 — DB 하드닝의 핵심",
"DB 하드닝 종합|기본 계정 제거 + 초기화 매개변수 검토 + 패치 + 로그 — 다층 접근",
"DBA 데이터 접근|실용적 통제 ✗ — 보상 통제(로그·검토)로 관리 (Q281)",
"Q276·Q280 일관성|DB 하드닝 = 기본 설정 변경이 핵심 — 초기화 매개변수 포함"
]
},

// ============================================================
// Q302 - After-Hours DB Change Compensating Controls
// ============================================================
{
id: 302,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 데이터베이스 통제를 검토하다가, 정상 업무 시간 동안의 DB 변경은 표준 절차로 처리되지만 정상 업무 시간 외 변경은 축약된 단계만 필요함을 발견했다. 이 상황에서 적절한 보상 통제 세트로 간주되는 것은?<br><small style="color:#94a3b8">An IS auditor reviewing database controls discovered that changes during normal hours follow standard procedures, but after-hours changes require only abbreviated steps. Which is considered adequate compensating controls?</small>`,
options: [
  "DBA 사용자 계정으로만 변경을 허용한다.<br><small style='color:#94a3b8'>Allow changes to be made only with the DBA user account.</small>",
  "일반 사용자 계정에 접근 권한을 부여한 후 데이터베이스 변경을 한다.<br><small style='color:#94a3b8'>Make changes to the database after granting access to a normal user account.</small>",
  "DBA 사용자 계정으로 변경하고, 변경을 로깅하며, 다음날 변경 로그를 검토한다.<br><small style='color:#94a3b8'>Use the DBA user account to make changes, log the changes and review the change log the following day.</small>",
  "일반 사용자 계정으로 변경하고, 변경을 로깅하며, 다음날 변경 로그를 검토한다.<br><small style='color:#94a3b8'>Use the normal user account to make changes, log the changes and review the change log the following day.</small>"
],
correct: 2,
explanation: `<p><b>DBA 계정 사용 + 변경 로깅 + 다음날 검토</b>가 적절한 보상 통제 세트입니다. DBA 계정 사용은 정상적이며, 로깅과 사후 검토가 축약된 절차를 보완합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 요소</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. DBA만 변경 (로깅 ✗)</td><td style="padding:8px;border:1px solid #ddd">접근 통제만</td><td style="padding:8px;border:1px solid #ddd">로깅 없음 → 통제되지 않은 변경</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 일반 사용자 변경</td><td style="padding:8px;border:1px solid #ddd">부적절 권한</td><td style="padding:8px;border:1px solid #ddd">일반 사용자는 DB 접근 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. DBA + 로깅 + 검토 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>다층 통제</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 적절한 권한 + 사후 검토 = 보상 통제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 일반 사용자 + 로깅</td><td style="padding:8px;border:1px solid #ddd">부적절 권한</td><td style="padding:8px;border:1px solid #ddd">일반 사용자가 변경하면 안 됨</td></tr>
</table>
<div class="sbox"><b>🛡️ 보상 통제(Compensating Controls) 설계:</b><br>
• <b>원칙:</b> 사전 통제 부족 → 사후 통제로 보완<br>
• <b>축약된 절차의 보상:</b><br>
&nbsp;&nbsp;1. <b>적절한 권한자 사용</b> (DBA)<br>
&nbsp;&nbsp;2. <b>활동 로깅</b> (감사 추적)<br>
&nbsp;&nbsp;3. <b>사후 검토</b> (다음날)<br>
• <b>긴급 변경 통제 패턴 (Q226·Q244·Q252):</b><br>
&nbsp;&nbsp;- Q226: 사후 경영진 검토·승인<br>
&nbsp;&nbsp;- Q244: 개인 ID 책임 추적<br>
&nbsp;&nbsp;- Q252: 신속 문서화·승인<br>
&nbsp;&nbsp;- Q302: DBA 계정 + 로깅 + 사후 검토<br>
• 핵심: <b>"적절한 권한 + 추적 + 검토" = 보상 통제 3요소</b><br>
• 사전 통제 약화 시 → 사후 통제 강화로 균형</div>`,
reference:"CRM Chapter 4: IS Operations — Compensating Controls for After-Hours Changes",
keyConcepts:[
"보상 통제 3요소|적절한 권한 + 활동 로깅 + 사후 검토 — 사전 통제 약화 시 보완",
"DBA 계정 + 로깅|특권 사용 시 로깅이 필수 — 단독 사용은 통제 부족",
"긴급/축약 절차 통제|Q226·Q244·Q252·Q302 일관 — 사후 통제로 균형",
"일반 사용자와 DB|일반 사용자는 DB 직접 변경 권한 ✗ — 앱 통한 접근만"
]
},

// ============================================================
// Q303 - Data Warehouse Sensitive Data Protection
// ============================================================
{
id: 303,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `데이터 웨어하우스에 저장된 특정 민감 정보의 보호를 위해 IS 감사인이 권고해야 할 것은?<br><small style="color:#94a3b8">Which of the following should an IS auditor recommend for the protection of specific sensitive information stored in a data warehouse?</small>`,
options: [
  "열(Column)·행(Row) 수준 권한을 구현한다.<br><small style='color:#94a3b8'>Implement column- and row-level permissions.</small>",
  "강력한 비밀번호로 사용자 인증을 강화한다.<br><small style='color:#94a3b8'>Enhance user authentication via strong passwords.</small>",
  "데이터 웨어하우스를 주제별 데이터베이스로 구성한다.<br><small style='color:#94a3b8'>Organize the data warehouse into subject matter-specific databases.</small>",
  "데이터 웨어하우스에 대한 사용자 접근을 로깅한다.<br><small style='color:#94a3b8'>Log user access to the data warehouse.</small>"
],
correct: 0,
explanation: `<p><b>열·행 수준 권한 구현</b>이 정답입니다. 사용자가 접근할 수 있는 정보를 통제하며, 가장 세밀한 보안 모델로 정보 보호와 다양한 분석·보고 사용을 균형 있게 지원합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">통제 단위</th><th style="padding:8px;border:1px solid #334155">민감 정보 보호</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 열·행 수준 권한 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>세밀한 단위</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 특정 속성·레코드 단위 보호</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 강력한 비밀번호</td><td style="padding:8px;border:1px solid #ddd">전역</td><td style="padding:8px;border:1px solid #ddd">모든 사용자 — 특정 정보 보호 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 주제별 DB 분리</td><td style="padding:8px;border:1px solid #ddd">데이터베이스</td><td style="padding:8px;border:1px solid #ddd">너무 거친 단위 — 효과 부족</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 접근 로깅</td><td style="padding:8px;border:1px solid #ddd">탐지</td><td style="padding:8px;border:1px solid #ddd">탐지 통제 — 예방 ✗</td></tr>
</table>
<div class="sbox"><b>🔐 행·열 수준 보안(Row/Column-Level Security):</b><br>
• <b>열 수준 보안:</b> 특정 컬럼 비공개 (예: 급여, SSN)<br>
• <b>행 수준 보안:</b> 특정 레코드 그룹 제한 (예: 임원 급여 행)<br>
• <b>구현 방법:</b><br>
&nbsp;&nbsp;1. 뷰(View) 사용 — 논리적 표현 접근<br>
&nbsp;&nbsp;2. 정책 기반 접근 통제<br>
&nbsp;&nbsp;3. 동적 마스킹<br>
• <b>장점:</b> 가장 세밀한 통제 + 분석 활용 균형<br>
• <b>통제 단위 비교:</b><br>
&nbsp;&nbsp;- 데이터베이스 < 테이블 < <b>행·열 (가장 세밀)</b><br>
• Q299 연결: DW = 읽기 전용 + 행·열 권한<br>
• 핵심: <b>"세밀한 통제 = 필요한 만큼만 보호"</b></div>`,
reference:"CRM Chapter 4: IS Operations — Row/Column-Level Security",
keyConcepts:[
"행·열 수준 권한|특정 컬럼·레코드 단위 보호 — 세밀한 통제로 민감 정보 보호의 최선",
"통제 단위 계층|DB < 테이블 < 행·열 — 세밀할수록 정밀한 보호",
"뷰(View) 활용|논리적 데이터 표현으로 행·열 권한 구현",
"Q299·Q303 일관성|DW 보안: 읽기 전용(Q299) + 행·열 권한(Q303) — 종합 접근"
]
},

// ============================================================
// Q304 - ACID Atomicity Violation
// ============================================================
{
id: 304,
domain: "4",
ks: "4A1 Database Management",
question: `IS 감사인이 DBMS의 감사 로그를 분석하다가 일부 거래가 오류의 결과로 부분적으로 실행되었고 롤백되지 않았음을 발견했다. 어떤 거래 처리 기능이 위반되었는가?<br><small style="color:#94a3b8">An IS auditor analyzing a DBMS audit log finds that some transactions were partially executed as a result of an error and have not been rolled back. Which transaction processing feature has been violated?</small>`,
options: [
  "일관성(Consistency).<br><small style='color:#94a3b8'>Consistency</small>",
  "격리성(Isolation).<br><small style='color:#94a3b8'>Isolation</small>",
  "내구성(Durability).<br><small style='color:#94a3b8'>Durability</small>",
  "원자성(Atomicity).<br><small style='color:#94a3b8'>Atomicity</small>"
],
correct: 3,
explanation: `<p><b>원자성(Atomicity)</b>이 위반되었습니다. 원자성은 거래 전체가 처리되거나 아무것도 처리되지 않음을 보장하지만, 부분 실행 + 롤백 미수행 = 원자성 위반입니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">ACID 속성</th><th style="padding:8px;border:1px solid #334155">정의</th><th style="padding:8px;border:1px solid #334155">위반 시나리오</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 일관성(C)</td><td style="padding:8px;border:1px solid #ddd">거래 전후 DB 정상 상태</td><td style="padding:8px;border:1px solid #ddd">무결성 규칙 위반 시</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 격리성(I)</td><td style="padding:8px;border:1px solid #ddd">중간 상태 외부 비가시</td><td style="padding:8px;border:1px solid #ddd">동시 거래 충돌 시 (Q292)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 내구성(D)</td><td style="padding:8px;border:1px solid #ddd">성공 거래 영구 보존</td><td style="padding:8px;border:1px solid #ddd">커밋 후 손실 시</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 원자성(A) ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>전체 처리 or 전체 취소</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 부분 실행 + 롤백 ✗ = 원자성 위반</b></td></tr>
</table>
<div class="sbox"><b>⚛️ ACID 속성 종합 정리:</b><br>
• <b>A (Atomicity·원자성):</b> All or Nothing<br>
&nbsp;&nbsp;- 정상: 전체 커밋 또는 전체 롤백<br>
&nbsp;&nbsp;- 위반: 부분 실행 (Q304)<br>
• <b>C (Consistency·일관성):</b> 무결성 규칙 유지<br>
&nbsp;&nbsp;- 거래 전후 DB가 유효한 상태<br>
• <b>I (Isolation·격리성):</b> 동시 거래 격리<br>
&nbsp;&nbsp;- Lost Update·Dirty Read 등 방지 (Q292)<br>
• <b>D (Durability·내구성):</b> 영구 보존<br>
&nbsp;&nbsp;- 커밋된 데이터는 시스템 장애에도 유지<br>
• Q293 연결: 커밋·롤백 = 원자성 메커니즘<br>
• <b>"부분 실행 + 미롤백"</b> = 원자성 위반의 전형적 예시</div>`,
reference:"CRM Chapter 4: IS Operations — ACID Properties Violation",
keyConcepts:[
"원자성 위반|부분 실행 + 롤백 미수행 = All or Nothing 원칙 위반",
"ACID 4속성|A(원자)·C(일관)·I(격리)·D(내구) — 거래 처리의 4대 보장",
"원자성 메커니즘|커밋(전체 완료)·롤백(전체 취소) — 부분 상태 허용 ✗",
"Q292·Q293·Q304 일관성|격리성(Q292)·원자성(Q293·Q304) — ACID 종합 이해"
]
},

// ============================================================
// Q305 - Primary Purpose of BIA
// ============================================================
{
id: 305,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `비즈니스 영향 분석(BIA)의 주요 목적은?<br><small style="color:#94a3b8">The PRIMARY purpose of a business impact analysis (BIA) is to:</small>`,
options: [
  "복구 전략을 정의한다.<br><small style='color:#94a3b8'>Define recovery strategies.</small>",
  "대체 사이트를 식별한다.<br><small style='color:#94a3b8'>Identify the alternate site.</small>",
  "복구 테스트를 개선한다.<br><small style='color:#94a3b8'>Improve recovery testing.</small>",
  "연간 손실 기대치(ALE)를 계산한다.<br><small style='color:#94a3b8'>Calculate the annual loss expectancy.</small>"
],
correct: 0,
explanation: `<p><b>복구 전략 정의</b>가 BIA의 주요 목적입니다. BIA의 주요 산출물 중 하나가 복구 시간 목표(RTO)와 복구 시점 목표(RPO)이며, 이는 복구 전략 정의에 도움이 됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">BIA 단계</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 복구 전략 정의 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>BIA 산출물 활용</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ RTO·RPO → 복구 전략의 기반</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 대체 사이트 식별</td><td style="padding:8px;border:1px solid #ddd">복구 전략 단계</td><td style="padding:8px;border:1px solid #ddd">전략 단계 활동 — BIA 자체 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 복구 테스트 개선</td><td style="padding:8px;border:1px solid #ddd">구현·테스트 단계</td><td style="padding:8px;border:1px solid #ddd">후속 단계 — BIA 자체 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. ALE 계산</td><td style="padding:8px;border:1px solid #ddd">위험 평가</td><td style="padding:8px;border:1px solid #ddd">위험 평가 단계 — BIA에서 검토만</td></tr>
</table>
<div class="sbox"><b>📋 BIA(Business Impact Analysis) 핵심:</b><br>
• <b>주요 산출물:</b><br>
&nbsp;&nbsp;1. <b>핵심 비즈니스 프로세스</b> 식별<br>
&nbsp;&nbsp;2. <b>RTO</b> (복구 시간 목표)<br>
&nbsp;&nbsp;3. <b>RPO</b> (복구 시점 목표)<br>
&nbsp;&nbsp;4. <b>SDO</b> (서비스 제공 목표)<br>
&nbsp;&nbsp;5. <b>MTO</b> (최대 허용 중단 시간)<br>
&nbsp;&nbsp;6. 다운타임 영향 (재무·운영·평판)<br>
• <b>BIA 산출물의 활용:</b> 복구 전략 정의의 기반<br>
• Q267 연결: BIA → 전략 → BCP → 교육·테스트 (순서)<br>
• <b>BIA vs 위험 평가:</b><br>
&nbsp;&nbsp;- BIA: 비즈니스 영향 분석 (정량·정성)<br>
&nbsp;&nbsp;- 위험 평가: 위협 × 취약점 × 영향 (ALE 계산)<br>
• 핵심: <b>BIA = "무엇을 보호할지·얼마나 빨리 복구할지" 결정</b></div>`,
reference:"CRM Chapter 4: IS Operations — Business Impact Analysis",
keyConcepts:[
"BIA 주요 목적|복구 전략 정의의 기반 — RTO·RPO·SDO·MTO 산출물 제공",
"BIA 산출물|핵심 프로세스·RTO·RPO·SDO·MTO·다운타임 영향 — 종합적 평가",
"BIA vs 위험 평가|BIA=비즈니스 영향, 위험 평가=ALE 계산 — 다른 활동",
"Q267·Q269·Q273 일관성|BCP 프로세스: BIA → 전략 → BCP → 테스트"
]
},

// ============================================================
// Q306 - DRP Preparation First Task
// ============================================================
{
id: 306,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `재해복구계획(DRP) 준비 시 가장 먼저 수행해야 할 작업은?<br><small style="color:#94a3b8">Which of the following tasks should be performed FIRST when preparing a disaster recovery plan (DRP)?</small>`,
options: [
  "복구 전략을 개발한다.<br><small style='color:#94a3b8'>Develop a recovery strategy.</small>",
  "비즈니스 영향 분석(BIA)을 수행한다.<br><small style='color:#94a3b8'>Perform a business impact analysis (BIA).</small>",
  "소프트웨어 시스템·하드웨어·네트워크 구성요소를 매핑한다.<br><small style='color:#94a3b8'>Map software systems, hardware and network components.</small>",
  "정의된 인력·역할·계층 구조를 가진 복구 팀을 임명한다.<br><small style='color:#94a3b8'>Appoint recovery teams with defined personnel, roles and hierarchy.</small>"
],
correct: 1,
explanation: `<p><b>BIA 수행</b>이 DRP 준비의 첫 단계입니다. BIA는 핵심 비즈니스 프로세스와 이를 지원하는 시스템을 식별하며, 모든 후속 활동의 기반이 됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">단계</th><th style="padding:8px;border:1px solid #334155">활동</th><th style="padding:8px;border:1px solid #334155">의존성</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>1️⃣ BIA ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>핵심 프로세스·시스템 식별</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 모든 후속 활동의 전제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">2️⃣ 복구 전략</td><td style="padding:8px;border:1px solid #ddd">복구 방안 결정</td><td style="padding:8px;border:1px solid #ddd">BIA 결과 기반</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">3️⃣ 시스템 매핑</td><td style="padding:8px;border:1px solid #ddd">자산 인벤토리</td><td style="padding:8px;border:1px solid #ddd">BIA 결과 기반</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">4️⃣ 복구 팀 임명</td><td style="padding:8px;border:1px solid #ddd">인력 조직</td><td style="padding:8px;border:1px solid #ddd">BIA 결과 기반</td></tr>
</table>
<div class="sbox"><b>📋 DRP 준비 프로세스 — BIA가 시작점:</b><br>
• <b>BIA 산출물 → 후속 활동:</b><br>
&nbsp;&nbsp;1. 핵심 프로세스 → 보호 대상 결정<br>
&nbsp;&nbsp;2. RTO·RPO → 전략 선택 (사이트 유형 등)<br>
&nbsp;&nbsp;3. 영향 분석 → 비용 정당화<br>
&nbsp;&nbsp;4. 의존성 → 시스템 매핑<br>
&nbsp;&nbsp;5. 우선순위 → 복구 순서<br>
• <b>"BIA 없이는 무엇도 결정 불가":</b><br>
&nbsp;&nbsp;- 무엇을 보호할지 ✗<br>
&nbsp;&nbsp;- 얼마나 빨리 복구할지 ✗<br>
&nbsp;&nbsp;- 어떤 사이트 필요한지 ✗<br>
• Q267·Q305·Q306 일관성: BIA = BCP/DRP의 첫 단계<br>
• 핵심: <b>"BIA → 전략 → 매핑 → 팀 → BCP/DRP"</b></div>`,
reference:"CRM Chapter 4: IS Operations — DRP Development Process",
keyConcepts:[
"DRP 첫 단계|BIA 수행 — 핵심 프로세스·시스템 식별이 모든 후속 활동의 전제",
"BIA 산출물 활용|RTO·RPO·우선순위·영향 → 전략·매핑·팀·예산 결정",
"DRP/BCP 프로세스|BIA → 복구 전략 → 시스템 매핑 → 팀 → 계획 → 테스트",
"Q267·Q305·Q306 일관성|BIA = BCP/DRP의 시작점 (모든 의존성의 뿌리)"
]
},

// ============================================================
// Q307 - BIA to Optimize BCP
// ============================================================
{
id: 307,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `조직의 비즈니스 연속성 계획을 최적화하기 위해 IS 감사인이 BIA를 권고하여 결정해야 할 것은?<br><small style="color:#94a3b8">To optimize an organization's BCP, an IS auditor should recommend a BIA to determine:</small>`,
options: [
  "조직에 가장 큰 재무 가치를 창출하는 비즈니스 프로세스 — 따라서 먼저 복구되어야 한다.<br><small style='color:#94a3b8'>The business processes that generate the most financial value and must be recovered first.</small>",
  "조직의 비즈니스 전략과 정렬되도록 복구의 우선순위와 순서.<br><small style='color:#94a3b8'>The priorities and order for recovery to ensure alignment with the organization's business strategy.</small>",
  "조직의 생존을 보장하기 위해 재해 후 복구되어야 하는 비즈니스 프로세스.<br><small style='color:#94a3b8'>The business processes that must be recovered following a disaster to ensure the organization's survival.</small>",
  "가장 짧은 시간 내에 가장 많은 시스템을 복구하는 우선순위와 순서.<br><small style='color:#94a3b8'>The priorities and order of recovery, which will recover the greatest number of systems in the shortest time.</small>"
],
correct: 2,
explanation: `<p><b>조직 생존을 보장하기 위해 복구되어야 하는 비즈니스 프로세스</b> 결정이 BIA의 핵심입니다. 재해 후 가장 핵심적인 비즈니스 프로세스를 먼저 복구해야 조직 생존이 보장됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">기준</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 재무 가치 우선</td><td style="padding:8px;border:1px solid #ddd">재무</td><td style="padding:8px;border:1px solid #ddd">흔한 실수 — 긴급성과 재무 가치는 다름</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 비즈니스 전략 정렬</td><td style="padding:8px;border:1px solid #ddd">전략(장기)</td><td style="padding:8px;border:1px solid #ddd">장기 관점 — 즉각적 복구와 무관</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 조직 생존 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>긴급성·생존</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ BIA 핵심 — 생존에 필수적인 프로세스 식별</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 시스템 수 최대화</td><td style="padding:8px;border:1px solid #ddd">양적 기준</td><td style="padding:8px;border:1px solid #ddd">생존 영향 미고려 — 수보다 중요도</td></tr>
</table>
<div class="sbox"><b>🎯 BIA 핵심 통찰 — 재무 vs 생존:</b><br>
• <b>재무 가치 ≠ 긴급성</b><br>
• <b>예시 (CRM 인용):</b><br>
&nbsp;&nbsp;- 모기지 대금 처리 = 재무적 중요하나 며칠 지연 가능<br>
&nbsp;&nbsp;- 대출 자금 송금 = 직접 수익 ✗이나 즉시 처리 필요<br>
&nbsp;&nbsp;- 이유: 규제 문제·고객 불만·평판 위험<br>
• <b>BIA 우선순위 결정 요소:</b><br>
&nbsp;&nbsp;1. 규제 준수 영향<br>
&nbsp;&nbsp;2. 고객 영향<br>
&nbsp;&nbsp;3. 평판 영향<br>
&nbsp;&nbsp;4. 운영 의존성<br>
&nbsp;&nbsp;5. 재무 영향<br>
• <b>"가장 큰 재무 가치 ≠ 가장 먼저 복구"</b><br>
• Q269·Q305 연결: BIA = 비즈니스 영향(다차원) 분석<br>
• 핵심: <b>생존 = 즉시 필요한 것을 먼저</b></div>`,
reference:"CRM Chapter 4: IS Operations — BIA & Business Survival",
keyConcepts:[
"BIA 핵심 목적|조직 생존 보장 — 재해 후 핵심 프로세스 식별이 우선",
"재무 가치 ≠ 긴급성|흔한 실수 — 재무 가치 큰 것보다 즉시 필요한 것이 우선",
"BIA 우선순위 요소|규제·고객·평판·운영·재무 — 다차원 평가",
"Q269·Q305·Q307 일관성|BIA = 종합적 비즈니스 영향 분석 (재무만 ✗)"
]
},

// ============================================================
// Q308 - Next Step After BIA (Variant of Q267)
// ============================================================
{
id: 308,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `BIA를 완료한 후, 비즈니스 연속성 계획 프로세스의 다음 단계는?<br><small style="color:#94a3b8">After completing the business impact analysis (BIA), what is the NEXT step in the business continuity planning process?</small>`,
options: [
  "계획을 테스트하고 유지보수한다.<br><small style='color:#94a3b8'>Test and maintain the plan.</small>",
  "구체적인 계획을 개발한다.<br><small style='color:#94a3b8'>Develop a specific plan.</small>",
  "복구 전략을 개발한다.<br><small style='color:#94a3b8'>Develop recovery strategies.</small>",
  "계획을 구현한다.<br><small style='color:#94a3b8'>Implement the plan.</small>"
],
correct: 2,
explanation: `<p><b>복구 전략 개발</b>이 BIA의 다음 단계입니다(Q267과 동일). BIA 완료 후, BIA에서 정의된 타임라인과 우선순위를 충족시키는 가장 적절한 복구 전략을 식별·선택합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">단계</th><th style="padding:8px;border:1px solid #334155">활동</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">1️⃣</td><td style="padding:8px;border:1px solid #ddd">위험 평가</td><td style="padding:8px;border:1px solid #ddd">위협·취약점 식별</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">2️⃣</td><td style="padding:8px;border:1px solid #ddd">BIA 수행</td><td style="padding:8px;border:1px solid #ddd">완료 (현 시점)</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>3️⃣</b></td><td style="padding:8px;border:1px solid #ddd"><b>복구 전략 개발 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 다음 단계 (Q267 일관)</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">4️⃣</td><td style="padding:8px;border:1px solid #ddd">구체적 BCP 작성</td><td style="padding:8px;border:1px solid #ddd">전략 후</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">5️⃣</td><td style="padding:8px;border:1px solid #ddd">테스트·유지보수</td><td style="padding:8px;border:1px solid #ddd">최종 단계</td></tr>
</table>
<div class="sbox"><b>🔁 Q267 = Q308 (동일 패턴 반복):</b><br>
• BCP 프로세스 순서는 CISA 시험 단골 출제<br>
• <b>완전한 BCP 흐름:</b><br>
&nbsp;&nbsp;1. <b>위험 평가</b><br>
&nbsp;&nbsp;2. <b>BIA</b> (Q305·Q306·Q307)<br>
&nbsp;&nbsp;3. <b>복구 전략 개발</b> (Q267·Q308)<br>
&nbsp;&nbsp;4. <b>BCP/DRP 작성</b><br>
&nbsp;&nbsp;5. <b>교육·테스트</b><br>
&nbsp;&nbsp;6. <b>유지보수</b><br>
• <b>BIA 산출물 → 전략 결정 요소:</b><br>
&nbsp;&nbsp;- RTO → 사이트 유형(핫/웜/콜드)<br>
&nbsp;&nbsp;- RPO → 백업 빈도·전략<br>
&nbsp;&nbsp;- 우선순위 → 복구 순서<br>
• 핵심: <b>"BIA → 전략 → BCP" 순서는 절대 변경 ✗</b></div>`,
reference:"CRM Chapter 4: IS Operations — BCP Development Process (Same as Q267)",
keyConcepts:[
"BIA 다음 단계|복구 전략 개발 — BIA의 RTO·우선순위를 충족하는 전략 선택",
"BCP 단계 순서|위험 평가 → BIA → 전략 → BCP → 테스트 → 유지보수",
"CISA 단골 패턴|Q267·Q308 동일 — BCP 프로세스 순서는 빈번한 출제 토픽",
"Q305·Q306·Q307·Q308 종합|BIA의 목적·시점·산출물·다음 단계 — 종합 이해 필요"
]
},

// ============================================================
// Q309 - BIA vs Risk Assessment Distinction
// ============================================================
{
id: 309,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `다음 중 BIA를 위험 평가와 구별하는 것은?<br><small style="color:#94a3b8">Which of the following distinguishes a business impact analysis (BIA) from a risk assessment?</small>`,
options: [
  "핵심 자산 인벤토리.<br><small style='color:#94a3b8'>Inventory of critical assets</small>",
  "취약점 식별.<br><small style='color:#94a3b8'>Identification of vulnerabilities</small>",
  "위협 목록 작성.<br><small style='color:#94a3b8'>Listing of threats</small>",
  "허용 가능한 다운타임 결정.<br><small style='color:#94a3b8'>Determination of acceptable downtime</small>"
],
correct: 3,
explanation: `<p><b>허용 가능한 다운타임 결정</b>이 BIA만의 고유 활동입니다. 핵심 자산 인벤토리, 취약점 식별, 위협 목록은 위험 평가와 BIA 모두에서 수행됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">활동</th><th style="padding:8px;border:1px solid #334155">위험 평가</th><th style="padding:8px;border:1px solid #334155">BIA</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 핵심 자산 인벤토리</td><td style="padding:8px;border:1px solid #ddd">✔</td><td style="padding:8px;border:1px solid #ddd">✔ (공통)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 취약점 식별</td><td style="padding:8px;border:1px solid #ddd">✔</td><td style="padding:8px;border:1px solid #ddd">✔ (공통)</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 위협 목록</td><td style="padding:8px;border:1px solid #ddd">✔</td><td style="padding:8px;border:1px solid #ddd">✔ (공통)</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. 허용 다운타임 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>✗</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ BIA만의 활동</b></td></tr>
</table>
<div class="sbox"><b>📊 BIA vs 위험 평가 비교:</b><br>
• <b>공통 활동:</b><br>
&nbsp;&nbsp;1. 자산 인벤토리<br>
&nbsp;&nbsp;2. 위협 식별<br>
&nbsp;&nbsp;3. 취약점 식별<br>
• <b>위험 평가 고유 활동:</b><br>
&nbsp;&nbsp;1. 위험 = 위협 × 취약점 × 영향<br>
&nbsp;&nbsp;2. ALE 계산<br>
&nbsp;&nbsp;3. 위험 처리 전략 (수용·전가·완화·회피)<br>
• <b>BIA 고유 활동:</b><br>
&nbsp;&nbsp;1. <b>RTO·RPO·SDO·MTO 결정</b><br>
&nbsp;&nbsp;2. <b>허용 다운타임</b> (Q309 정답)<br>
&nbsp;&nbsp;3. 비즈니스 프로세스 우선순위<br>
&nbsp;&nbsp;4. 다운타임의 비즈니스 영향 정량·정성 분석<br>
• <b>관계:</b> 위험 평가 = "위험" 식별 / BIA = "영향" 분석<br>
• Q269·Q305·Q307 연결: BIA = 비즈니스 영향 다차원 분석</div>`,
reference:"CRM Chapter 4: IS Operations — BIA vs Risk Assessment",
keyConcepts:[
"BIA 고유 활동|허용 다운타임 결정 — 위험 평가와 구별되는 BIA만의 활동",
"BIA vs 위험 평가|공통=자산·위협·취약점, 차이=BIA는 RTO·다운타임, 위험 평가는 ALE·처리 전략",
"BIA 산출물|RTO·RPO·SDO·MTO·우선순위·다운타임 영향 — 모두 BIA 특유",
"CISA 출제 패턴|BIA vs 위험 평가 구별 = 시험 빈출 토픽"
]
},

// ============================================================
// Q310 - First Identification in BIA
// ============================================================
{
id: 310,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `BCP 프로세스의 일부로, BIA에서 가장 먼저 식별되어야 할 것은?<br><small style="color:#94a3b8">As part of the BCP process, which of the following should be identified FIRST in the BIA?</small>`,
options: [
  "단일 장애 지점(SPoF)·인프라 위험과 같은 위험.<br><small style='color:#94a3b8'>Risk, such as single point-of-failure and infrastructure risk</small>",
  "핵심 비즈니스 프로세스에 대한 위협.<br><small style='color:#94a3b8'>Threats to critical business processes</small>",
  "복구 우선순위 확인을 위한 핵심 비즈니스 프로세스.<br><small style='color:#94a3b8'>Critical business processes for ascertaining the priority for recovery</small>",
  "비즈니스 재개에 필요한 자원.<br><small style='color:#94a3b8'>Resources required for resumption of business</small>"
],
correct: 2,
explanation: `<p><b>핵심 비즈니스 프로세스</b>가 BIA에서 가장 먼저 식별되어야 합니다. 핵심 프로세스 식별이 우선되어야 복구 우선순위와 타임라인을 문서화할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">시점</th><th style="padding:8px;border:1px solid #334155">의존성</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. SPoF·인프라 위험</td><td style="padding:8px;border:1px solid #ddd">후속</td><td style="padding:8px;border:1px solid #ddd">핵심 프로세스 식별 후</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 위협 식별</td><td style="padding:8px;border:1px solid #ddd">후속</td><td style="padding:8px;border:1px solid #ddd">핵심 프로세스 식별 후</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. 핵심 프로세스 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>FIRST</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ BIA의 시작점 — 모든 활동의 기반</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 필요 자원</td><td style="padding:8px;border:1px solid #ddd">후속</td><td style="padding:8px;border:1px solid #ddd">핵심 프로세스 식별 후</td></tr>
</table>
<div class="sbox"><b>📋 BIA 내부 단계 순서:</b><br>
• <b>1단계: 핵심 비즈니스 프로세스 식별</b> ← FIRST<br>
• <b>2단계:</b> 각 프로세스의 위협·위험 식별<br>
• <b>3단계:</b> 다운타임 영향 평가<br>
• <b>4단계:</b> RTO·RPO·SDO 결정<br>
• <b>5단계:</b> 필요 자원 식별<br>
• <b>6단계:</b> 우선순위 정의<br>
• <b>핵심 원리:</b> "보호 대상이 정의되지 않으면 위협·위험·자원 평가 ✗"<br>
• <b>BIA 종합 흐름:</b><br>
&nbsp;&nbsp;핵심 프로세스 → 위협·위험 → 영향 → RTO/RPO → 자원 → 우선순위<br>
• Q306·Q307·Q310 일관성: BIA는 항상 <b>"무엇을 보호할지"</b>부터 시작<br>
• 핵심: <b>"What → How → Who → When"</b> 순서</div>`,
reference:"CRM Chapter 4: IS Operations — BIA Internal Process",
keyConcepts:[
"BIA 첫 단계|핵심 비즈니스 프로세스 식별 — 모든 후속 활동의 전제",
"BIA 내부 순서|핵심 프로세스 → 위협·위험 → 영향 → RTO/RPO → 자원 → 우선순위",
"의존성 원리|보호 대상이 정의되지 않으면 위협·위험·자원 평가 불가",
"Q306·Q307·Q310 일관성|BIA는 항상 '무엇을 보호할지'부터 시작"
]
},

// ============================================================
// Q311 - BIA Information Source for Criticality
// ============================================================
{
id: 311,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `BIA의 일부로 애플리케이션 시스템의 중요도를 결정하는 데 가장 좋은 정보 출처는?<br><small style="color:#94a3b8">Which of the following groups is the BEST source of information for determining the criticality of application systems as part of a BIA?</small>`,
options: [
  "비즈니스 프로세스 소유자.<br><small style='color:#94a3b8'>Business process owners</small>",
  "IT 경영진.<br><small style='color:#94a3b8'>IT management</small>",
  "고위 비즈니스 경영진.<br><small style='color:#94a3b8'>Senior business management</small>",
  "산업 전문가.<br><small style='color:#94a3b8'>Industry experts</small>"
],
correct: 0,
explanation: `<p><b>비즈니스 프로세스 소유자</b>가 가장 좋은 정보 출처입니다. BIA가 비즈니스 요구에 기반하여 중요도와 복구 타임라인을 평가하도록 설계되었으므로, 프로세스 소유자가 가장 관련 있는 정보를 제공합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">정보 깊이</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>A. 프로세스 소유자 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비즈니스 직접 지식</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 일상 운영·중요도 가장 잘 이해</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. IT 경영진</td><td style="padding:8px;border:1px solid #ddd">기술 지식</td><td style="padding:8px;border:1px solid #ddd">기술적 측면만 — 비즈니스 영향 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 고위 비즈니스 경영진</td><td style="padding:8px;border:1px solid #ddd">전략적 관점</td><td style="padding:8px;border:1px solid #ddd">상위 수준 — 운영 세부 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. 산업 전문가</td><td style="padding:8px;border:1px solid #ddd">일반적 지식</td><td style="padding:8px;border:1px solid #ddd">조직 고유 요구 ✗</td></tr>
</table>
<div class="sbox"><b>👤 비즈니스 프로세스 소유자의 역할:</b><br>
• <b>책임:</b> 특정 프로세스의 일상 운영·성과·결과<br>
• <b>BIA 기여:</b><br>
&nbsp;&nbsp;1. 프로세스 중요도 평가<br>
&nbsp;&nbsp;2. 다운타임 허용 시간 (RTO) 결정<br>
&nbsp;&nbsp;3. 데이터 손실 허용량 (RPO) 결정<br>
&nbsp;&nbsp;4. 의존성 식별<br>
&nbsp;&nbsp;5. 비즈니스 영향 정량·정성<br>
• <b>다른 그룹의 한계:</b><br>
&nbsp;&nbsp;- IT 경영진: 기술 측면만<br>
&nbsp;&nbsp;- 고위 경영진: 전략 수준만<br>
&nbsp;&nbsp;- 산업 전문가: 조직 특수성 ✗<br>
• Q215·Q272 연결: 애플리케이션 소유자 = 비즈니스 요구의 최종 결정권자<br>
• 핵심: <b>"비즈니스 정보는 비즈니스 사람에게서"</b></div>`,
reference:"CRM Chapter 4: IS Operations — BIA Information Sources",
keyConcepts:[
"프로세스 소유자|일상 운영·중요도·의존성 가장 잘 이해 — BIA 정보의 최선 출처",
"비즈니스 vs 기술 정보|중요도=비즈니스 관점, 기술 구현=IT 경영진 — 출처 구분",
"BIA 정보 수집|프로세스 소유자 인터뷰 + 설문 = 핵심 데이터 수집 방법",
"Q215·Q272 일관성|애플리케이션·프로세스 소유자 = 비즈니스 요구의 결정권자"
]
},

// ============================================================
// Q312 - IT Asset Recovery Prioritization
// ============================================================
{
id: 312,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `재해 계획 시 IT 자산의 복구 우선순위를 정하는 데 가장 도움이 되는 것은?<br><small style="color:#94a3b8">Which of the following BEST helps prioritize the recovery of IT assets when planning for a disaster?</small>`,
options: [
  "인시던트 대응 계획.<br><small style='color:#94a3b8'>Incident response plan</small>",
  "비즈니스 영향 분석(BIA).<br><small style='color:#94a3b8'>Business impact analysis (BIA)</small>",
  "위협 및 위험 분석.<br><small style='color:#94a3b8'>Threat and risk analysis</small>",
  "복구 시간 목표(RTO).<br><small style='color:#94a3b8'>Recovery time objective (RTO)</small>"
],
correct: 1,
explanation: `<p><b>BIA</b>가 가장 도움이 됩니다. BIA를 IT 재해복구 계획 프로세스에 통합하는 것은 IT 자산이 비즈니스와 정렬되도록 우선순위를 정하는 데 중요합니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">우선순위 결정</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 인시던트 대응 계획</td><td style="padding:8px;border:1px solid #ddd">보안 침해·공격 대응</td><td style="padding:8px;border:1px solid #ddd">우선순위 결정 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>B. BIA ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비즈니스 영향 분석</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 비즈니스 정렬 + 우선순위 종합 결정</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 위협·위험 분석</td><td style="padding:8px;border:1px solid #ddd">위험 식별</td><td style="padding:8px;border:1px solid #ddd">중요하나 우선순위 결정 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. RTO</td><td style="padding:8px;border:1px solid #ddd">복구 시간 목표</td><td style="padding:8px;border:1px solid #ddd">BIA의 산출물 — 우선순위 표현 도구</td></tr>
</table>
<div class="sbox"><b>📋 BIA와 IT 자산 우선순위:</b><br>
• <b>BIA의 우선순위 결정 메커니즘:</b><br>
&nbsp;&nbsp;1. 핵심 비즈니스 프로세스 식별 (Q310)<br>
&nbsp;&nbsp;2. 프로세스별 RTO·RPO 결정<br>
&nbsp;&nbsp;3. IT 자산이 어떤 프로세스를 지원하는지 매핑<br>
&nbsp;&nbsp;4. <b>가장 중요한 프로세스를 지원하는 IT 자산이 최우선</b><br>
• <b>RTO vs BIA 관계:</b><br>
&nbsp;&nbsp;- RTO는 BIA의 <b>산출물</b><br>
&nbsp;&nbsp;- BIA는 RTO를 <b>포함한 종합 분석</b><br>
&nbsp;&nbsp;- 우선순위 결정 = BIA가 더 포괄적<br>
• Q305·Q306·Q310 연결: BIA = BCP/DRP의 핵심 도구<br>
• 핵심: <b>"BIA = IT 자산을 비즈니스 요구에 정렬"</b></div>`,
reference:"CRM Chapter 4: IS Operations — BIA & IT Asset Prioritization",
keyConcepts:[
"BIA와 자산 우선순위|비즈니스 정렬을 통한 IT 자산 우선순위 결정 — 종합적 도구",
"BIA vs RTO|RTO=BIA의 산출물, BIA=RTO 포함 종합 분석 — BIA가 더 포괄적",
"우선순위 결정 메커니즘|핵심 프로세스 → RTO → IT 자산 매핑 → 우선순위",
"Q305·Q306·Q310·Q312 일관성|BIA = BCP/DRP의 핵심 도구 (모든 의존성의 뿌리)"
]
},

// ============================================================
// Q313 - Determining Application Criticality
// ============================================================
{
id: 313,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `운영 환경의 각 애플리케이션 시스템의 중요도를 결정하는 가장 좋은 방법은?<br><small style="color:#94a3b8">Which of the following is the BEST method for determining the criticality of each application system in the production environment?</small>`,
options: [
  "애플리케이션 프로그래머를 인터뷰한다.<br><small style='color:#94a3b8'>Interview the application programmers.</small>",
  "갭 분석(Gap analysis)을 수행한다.<br><small style='color:#94a3b8'>Perform a gap analysis.</small>",
  "가장 최근의 애플리케이션 감사를 검토한다.<br><small style='color:#94a3b8'>Review the most recent application audits.</small>",
  "비즈니스 영향 분석(BIA)을 수행한다.<br><small style='color:#94a3b8'>Perform a business impact analysis (BIA).</small>"
],
correct: 3,
explanation: `<p><b>BIA 수행</b>이 정답입니다. BIA는 각 애플리케이션 손실의 영향을 제공하며, 시스템의 중요도와 비즈니스에 대한 중요성을 정확히 설명할 수 있는 비즈니스 대표자와 함께 수행됩니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">정보 출처</th><th style="padding:8px;border:1px solid #334155">중요도 결정</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. 프로그래머 인터뷰</td><td style="padding:8px;border:1px solid #ddd">기술 관점</td><td style="padding:8px;border:1px solid #ddd">비즈니스 중요도 정보 제한</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 갭 분석</td><td style="padding:8px;border:1px solid #ddd">현재 vs 목표</td><td style="padding:8px;border:1px solid #ddd">SDLC·프로젝트 관련 — 중요도 ✗</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">C. 최근 감사 검토</td><td style="padding:8px;border:1px solid #ddd">감사 보고서</td><td style="padding:8px;border:1px solid #ddd">중요도 정보 미포함 가능</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>D. BIA 수행 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>비즈니스 대표자</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ 손실 영향 + 중요도 종합 평가</b></td></tr>
</table>
<div class="sbox"><b>📊 BIA를 통한 애플리케이션 중요도 평가:</b><br>
• <b>BIA의 평가 방법:</b><br>
&nbsp;&nbsp;1. 비즈니스 프로세스 소유자 인터뷰 (Q311)<br>
&nbsp;&nbsp;2. 다운타임 영향 정량·정성 분석<br>
&nbsp;&nbsp;3. 의존성 매핑<br>
&nbsp;&nbsp;4. 우선순위 분류 (Critical/Vital/Sensitive)<br>
• <b>BIA 활용 - 애플리케이션 중요도:</b><br>
&nbsp;&nbsp;- 핵심 프로세스를 지원하는 앱 → 최우선<br>
&nbsp;&nbsp;- 손실 시 비즈니스 영향 큰 앱 → 우선<br>
&nbsp;&nbsp;- RTO 짧은 앱 → 우선<br>
• Q214 연결: 시스템 분류 → 사이트 유형 (Critical→핫, Vital→웜, Sensitive→콜드)<br>
• Q311 일관성: 중요도 정보는 비즈니스 사람에게서<br>
• 핵심: <b>"중요도 결정 = BIA의 핵심 산출물"</b></div>`,
reference:"CRM Chapter 4: IS Operations — BIA & Application Criticality",
keyConcepts:[
"BIA와 애플리케이션 중요도|손실 영향 + 비즈니스 중요성 종합 평가 — 가장 정확한 방법",
"BIA 평가 방법|소유자 인터뷰 + 영향 분석 + 의존성 매핑 + 우선순위 분류",
"중요도 분류|Critical/Vital/Sensitive — Q214 사이트 유형과 매칭",
"Q311·Q313 일관성|중요도 정보 = 비즈니스 대표자(프로세스 소유자) 출처"
]
},

// ============================================================
// Q314 - DRP Implementation Greatest Risk
// ============================================================
{
id: 314,
domain: "4",
ks: "4B1 Business Impact Analysis",
question: `IS 감사인이 조직의 DRP 구현을 검토하고 있다. 프로젝트는 일정과 예산 내에 완료되었으나, 감사 중 여러 우려 사항이 발견되었다. 다음 중 가장 큰 위험은?<br><small style="color:#94a3b8">An IS auditor is reviewing an organization's DRP implementation. Several concerns are found. Which presents the GREATEST risk?</small>`,
options: [
  "DRP 테스트가 수행되지 않았다.<br><small style='color:#94a3b8'>Testing of the DRP has not been performed.</small>",
  "재해복구 전략이 핫 사이트 사용을 명시하지 않는다.<br><small style='color:#94a3b8'>The disaster recovery strategy does not specify the use of a hot site.</small>",
  "BIA가 수행되었으나, 결과가 사용되지 않았다.<br><small style='color:#94a3b8'>The BIA was conducted, but the results were not used.</small>",
  "구현을 위한 재해복구 프로젝트 매니저가 최근 조직을 떠났다.<br><small style='color:#94a3b8'>The disaster recovery project manager has recently left the organization.</small>"
],
correct: 2,
explanation: `<p><b>BIA 결과 미활용</b>이 가장 큰 위험입니다. BIA 결과를 재해복구 계획에 사용하지 않으면 DRP가 가장 핵심 자산을 올바른 순서로 복구하도록 설계되지 않았을 수 있으며, 결과적으로 조직이 재해로부터 회복할 수 없을 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">선지</th><th style="padding:8px;border:1px solid #334155">위험 정도</th><th style="padding:8px;border:1px solid #334155">이유</th></tr>
<tr><td style="padding:8px;border:1px solid #ddd">A. DRP 테스트 미수행</td><td style="padding:8px;border:1px solid #ddd">중요</td><td style="padding:8px;border:1px solid #ddd">중요하나 설계 결함보다 작음</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">B. 핫 사이트 미사용</td><td style="padding:8px;border:1px solid #ddd">전략 결정</td><td style="padding:8px;border:1px solid #ddd">조직 요구 따라 — 항상 필요 ✗</td></tr>
<tr style="background:#e8f5e9"><td style="padding:8px;border:1px solid #ddd"><b>C. BIA 결과 미활용 ✔</b></td><td style="padding:8px;border:1px solid #ddd"><b>치명적 설계 결함</b></td><td style="padding:8px;border:1px solid #ddd"><b>✔ DRP 자체가 부적절 — 복구 불가 위험</b></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">D. PM 이직</td><td style="padding:8px;border:1px solid #ddd">낮음</td><td style="padding:8px;border:1px solid #ddd">제대로 문서화되었다면 영향 최소</td></tr>
</table>
<div class="sbox"><b>⚠️ BIA 결과 미활용의 치명성:</b><br>
• <b>치명적 결과:</b><br>
&nbsp;&nbsp;1. 잘못된 우선순위 → 중요 자산이 후순위로<br>
&nbsp;&nbsp;2. 부적절한 RTO·RPO → 비즈니스 요구 미충족<br>
&nbsp;&nbsp;3. 자원 배분 오류 → 비효율적 투자<br>
&nbsp;&nbsp;4. <b>재해 시 조직 생존 위협</b><br>
• <b>다른 위험과의 비교:</b><br>
&nbsp;&nbsp;- 테스트 미수행 = 검증 못함, but 설계는 가능<br>
&nbsp;&nbsp;- 핫 사이트 미사용 = 비용·요구 따라 결정<br>
&nbsp;&nbsp;- PM 이직 = 문서화로 보완 가능<br>
&nbsp;&nbsp;- BIA 미활용 = <b>설계 자체가 잘못됨</b> (가장 근본적)<br>
• Q272 일관성: 증상 vs 근본 원인 — 근본 원인이 가장 큰 위험<br>
• Q305·Q306·Q310 연결: BIA가 모든 BCP/DRP 활동의 기반<br>
• 핵심: <b>"BIA 미활용 = 토대 없는 건물"</b></div>`,
reference:"CRM Chapter 4: IS Operations — DRP & BIA Integration",
keyConcepts:[
"BIA 결과 미활용 위험|DRP 설계 자체가 부적절 → 재해 시 조직 생존 위협 — 가장 큰 위험",
"증상 vs 근본 원인|테스트·사이트·PM = 보완 가능, BIA 미활용 = 근본 결함",
"DRP 설계 기반|BIA = 모든 DRP 활동의 토대 — 미활용 시 토대 부재",
"Q272·Q305·Q310 일관성|근본 원인 우선 + BIA = BCP/DRP의 기반"
]
},

{
id: 315,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `패스워드 관리에 대한 프로그램화된 통제(programmed controls)를 평가할 때, IS 감사인이 가장 의존할 가능성이 높은 것은?<br><small style="color:#94a3b8">In evaluating programmed controls over password management, which of the following is the IS auditor MOST likely to rely on?</small>`,
options: [
"크기 검사 (Size check)<br><small style='color:#94a3b8'>Size check</small>",
"해시 합계 (Hash total)<br><small style='color:#94a3b8'>Hash total</small>",
"유효성 검사 (Validity check)<br><small style='color:#94a3b8'>Validity check</small>",
"필드 검사 (Field check)<br><small style='color:#94a3b8'>Field check</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 유효성 검사 (Validity check)</b> — 패스워드가 요구되는 형식 기준(최소 길이, 영문/숫자/특수문자 조합, 사전 단어 금지 등)을 모두 충족하는지 종합 검증하므로 패스워드 관리 통제 중 가장 강력함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">검사 유형</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">패스워드 적합성</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Size check</td><td style="padding:8px;border:1px solid #334155">필드 길이만 확인</td><td style="padding:8px;border:1px solid #334155">부분적 (최소 길이만)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Hash total</td><td style="padding:8px;border:1px solid #334155">배치 처리 무결성 검증</td><td style="padding:8px;border:1px solid #334155">부적합 (패스워드는 배치 X)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. Validity check ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>형식·규칙 종합 검증</b></td><td style="padding:8px;border:1px solid #10b981"><b>최강 (복잡도 전체)</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. Field check</td><td style="padding:8px;border:1px solid #334155">데이터 타입 확인</td><td style="padding:8px;border:1px solid #334155">부분적 (Validity보다 약함)</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Validity check</b> = 패스워드 복잡도 정책(길이·문자종류·사전단어 금지)을 통합 검증<br>
• <b>Hash total</b>은 배치 트랜잭션용 — 패스워드는 개별 입력이라 부적합<br>
• Size/Field check은 Validity의 부분집합 — 단독으로는 약한 통제
</div>`,
reference:"CRM Chapter 4: Programmed Input Controls / Password Management",
keyConcepts:[
"Validity Check|형식·복잡도 규칙 종합 검증 — 패스워드 통제의 최강 수단",
"Hash Total|배치 처리 무결성용 — 개별 입력인 패스워드에는 부적합",
"Size/Field Check|길이·타입만 확인 — Validity의 부분집합"
]
},

{
id: 316,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `프로덕션 소스 코드와 오브젝트 코드가 동기화되어 있음을 보장하는 데 가장 효과적인 통제는?<br><small style="color:#94a3b8">Which of the following controls is MOST effective in ensuring that production source code and object code are synchronized?</small>`,
options: [
"릴리즈 간 소스·오브젝트 비교 보고서<br><small style='color:#94a3b8'>Release-to-release source and object comparison reports</small>",
"소스 코드 변경을 제한하는 라이브러리 통제 소프트웨어<br><small style='color:#94a3b8'>Library control software restricting changes to source code</small>",
"소스·오브젝트 코드에 대한 접근 제한<br><small style='color:#94a3b8'>Restricted access to source code and object code</small>",
"소스·오브젝트 코드의 날짜/시간 스탬프 검토<br><small style='color:#94a3b8'>Date and time-stamp reviews of source and object code</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 날짜/시간 스탬프 검토</b> — 컴파일된 오브젝트 코드의 타임스탬프가 소스 코드 타임스탬프와 일치하는지 비교하면 "현재 운영 중인 오브젝트가 승인된 소스로부터 컴파일되었는지"를 직접 확인할 수 있음. 동기화 검증의 가장 직접적·효과적 방법.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">통제</th><th style="padding:8px;border:1px solid #334155">기능</th><th style="padding:8px;border:1px solid #334155">동기화 보장?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 릴리즈 비교 보고서</td><td style="padding:8px;border:1px solid #334155">버전 간 변경 추적</td><td style="padding:8px;border:1px solid #334155">간접 — 버전 불일치 미탐지 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 라이브러리 통제 SW</td><td style="padding:8px;border:1px solid #334155">소스 변경 제한</td><td style="padding:8px;border:1px solid #334155">변조 방지만, 동기화 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 접근 제한</td><td style="padding:8px;border:1px solid #334155">무단 접근 차단</td><td style="padding:8px;border:1px solid #334155">보호만, 동기화 X</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 타임스탬프 검토 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>소스·오브젝트 컴파일 시점 직접 비교</b></td><td style="padding:8px;border:1px solid #10b981"><b>직접 보장</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>동기화(Synchronization)</b> = 운영 오브젝트가 승인된 소스에서 컴파일됨을 입증<br>
• 타임스탬프 비교 = 가장 직접적인 증거 — 오브젝트 생성 시점이 소스 수정 시점과 일치해야 함<br>
• 접근 제한·라이브러리 통제는 <b>예방통제</b>지만 동기화 자체를 보장하지 못함<br>
• 릴리즈 비교는 버전 흐름은 보여주나 "현재 컴파일된 것이 그 버전인지"는 미확인
</div>`,
reference:"CRM Chapter 4: Source Code Management / Production Library Controls",
keyConcepts:[
"Source-Object Synchronization|운영 오브젝트가 승인된 소스로부터 컴파일됐음을 보장",
"Timestamp Review|컴파일 시점 직접 비교 — 동기화 검증 최강 방법",
"예방 vs 탐지 통제|접근제한·라이브러리통제 = 예방 / 타임스탬프 = 탐지·검증"
]
},

{
id: 317,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `IS 감사인이 동일 서버에 여러 애플리케이션이 호스팅되어 있음을 관찰했다. 해당 서버의 복구 목표 시간(RTO)은?<br><small style="color:#94a3b8">An IS auditor observed that multiple applications are hosted on the same server. The RTO for the server is:</small>`,
options: [
"가장 긴 RTO를 가진 애플리케이션 기준<br><small style='color:#94a3b8'>based on the application with the longest RTO.</small>",
"가장 짧은 RTO를 가진 애플리케이션 기준<br><small style='color:#94a3b8'>based on the application with the shortest RTO.</small>",
"각 애플리케이션 RTO의 평균값 기준<br><small style='color:#94a3b8'>based on the mean of each application's RTO.</small>",
"애플리케이션 RTO와 무관하게 중요도 기준<br><small style='color:#94a3b8'>independent of the RTO and based on the criticality of the application.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 가장 짧은 RTO</b> — 서버에 여러 앱이 올라가 있을 때, 서버 RTO는 <b>가장 중요한(=가장 짧은 RTO를 가진) 애플리케이션</b>에 맞춰야 함. 그렇지 않으면 가장 critical한 앱이 제 시간에 복구되지 못함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">결과</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 가장 긴 RTO</td><td style="padding:8px;border:1px solid #334155">비핵심 앱 기준 → critical 앱 SLA 위반</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 가장 짧은 RTO ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>가장 critical한 앱 기준 → 모두 보호</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 평균값</td><td style="padding:8px;border:1px solid #334155">critical 앱 RTO보다 길어 부적합</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 무관</td><td style="padding:8px;border:1px solid #334155">서버 RTO는 앱 RTO에 종속됨</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>최약 링크 원칙</b>: 공유 인프라의 RTO는 가장 엄격한(짧은) 요구사항에 맞춤<br>
• 짧은 RTO = 더 critical한 앱 — 이를 충족하면 나머지는 자동 충족<br>
• 반대로 RPO도 동일 원리: 가장 짧은 RPO 기준 (데이터 손실 허용 최소)
</div>`,
reference:"CRM Chapter 4: RTO / Shared Infrastructure Resilience",
keyConcepts:[
"Shared Server RTO|가장 짧은(=가장 critical한) 앱 RTO 기준 — 최약 링크 원칙",
"RTO와 Criticality|짧은 RTO = 높은 중요도 — 둘은 반비례 관계",
"공유 인프라 원칙|RTO·RPO 모두 가장 엄격한 요구사항에 맞춰 설계"
]
},

{
id: 318,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `IS 감사인이 SLA의 가동 시간(uptime) 요구사항 준수 여부를 확인하기 위해 사용해야 할 보고서는?<br><small style="color:#94a3b8">Which of the following reports should an IS auditor use to check compliance with a service level agreement's requirement for uptime?</small>`,
options: [
"사용률 보고서 (Utilization reports)<br><small style='color:#94a3b8'>Utilization reports</small>",
"하드웨어 오류 보고서 (Hardware error reports)<br><small style='color:#94a3b8'>Hardware error reports</small>",
"시스템 로그 (System logs)<br><small style='color:#94a3b8'>System logs</small>",
"가용성 보고서 (Availability reports)<br><small style='color:#94a3b8'>Availability reports</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 가용성 보고서</b> — Availability report는 시스템이 사용자/프로세스에게 실제로 사용 가능했던 시간 구간을 직접 기록하므로 SLA의 uptime 요구사항 준수 여부를 가장 직접적으로 검증함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">보고서</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">Uptime 검증</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Utilization</td><td style="padding:8px;border:1px solid #334155">자원 사용량·용량 계획</td><td style="padding:8px;border:1px solid #334155">간접 (사용량 ≠ 가용시간)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Hardware error</td><td style="padding:8px;border:1px solid #334155">HW 장애 탐지·시정조치</td><td style="padding:8px;border:1px solid #334155">간접 (오류 ≠ 다운타임)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. System logs</td><td style="padding:8px;border:1px solid #334155">시스템 활동 기록</td><td style="padding:8px;border:1px solid #334155">간접 (가공 필요)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. Availability ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>가용 시간 구간 직접 기록</b></td><td style="padding:8px;border:1px solid #10b981"><b>직접 (SLA 준수 검증)</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>SLA uptime 검증</b> = Availability report가 직접 증거 — "언제부터 언제까지 사용 가능했는가"<br>
• Utilization = 얼마나 많이 썼는가 (capacity planning용)<br>
• Hardware error = 무엇이 고장났는가 (incident관리용)<br>
• System logs = 무슨 일이 일어났는가 (raw data — 가공 후 availability 산출 가능하나 직접 보고서 아님)<br>
• <b>"무엇을 측정하는 보고서인가?"</b> 질문에서 답은 보고서 이름과 SLA 지표가 직접 매칭되는 것
</div>`,
reference:"CRM Chapter 4: IT Operations Reporting / SLA Monitoring",
keyConcepts:[
"Availability Report|시스템 가용 시간 구간 직접 기록 — SLA uptime 검증의 직접 증거",
"보고서 매칭 원칙|SLA 지표와 보고서 이름이 직접 일치하는 것 선택",
"보고서별 용도|Utilization=용량계획 / HW error=장애관리 / Logs=활동기록 / Availability=가용성"
]
},

{
id: 319,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `예방적 컴퓨터 유지보수 프로그램의 효과성·적정성을 평가할 때 IS 감사인에게 가장 유용한 것은?<br><small style="color:#94a3b8">Which of the following would an IS auditor consider to be MOST helpful when evaluating the effectiveness and adequacy of a preventive computer maintenance program?</small>`,
options: [
"시스템 다운타임 로그<br><small style='color:#94a3b8'>System downtime log</small>",
"벤더 신뢰성 수치<br><small style='color:#94a3b8'>Vendor reliability figures</small>",
"정기 유지보수 수행 로그<br><small style='color:#94a3b8'>Regularly scheduled maintenance log</small>",
"작성된 예방 유지보수 스케줄<br><small style='color:#94a3b8'>Written preventive maintenance schedule</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 시스템 다운타임 로그</b> — 다운타임 로그는 탐지 통제이지만, 예방 유지보수가 <b>실제로 효과를 발휘했는지(=다운타임이 줄었는지)</b>를 직접 보여주는 결과 지표. 다른 옵션들은 "수행됐는가/계획됐는가"만 보여줄 뿐 효과를 입증하지 못함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">측정 대상</th><th style="padding:8px;border:1px solid #334155">효과성 입증?</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 다운타임 로그 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>실제 결과(다운타임 감소)</b></td><td style="padding:8px;border:1px solid #10b981"><b>직접 입증</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 벤더 신뢰성</td><td style="padding:8px;border:1px solid #334155">제조사 데이터</td><td style="padding:8px;border:1px solid #334155">무관 (자사 PM 효과 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 유지보수 수행 로그</td><td style="padding:8px;border:1px solid #334155">수행 사실</td><td style="padding:8px;border:1px solid #334155">수행 여부만 (효과 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. PM 스케줄</td><td style="padding:8px;border:1px solid #334155">계획</td><td style="padding:8px;border:1px solid #334155">계획만 (실행·효과 X)</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>효과성(Effectiveness) = 결과 지표</b>: 통제가 의도한 목표를 실제로 달성했는가<br>
• PM의 목표 = 장애·다운타임 예방 → 다운타임 로그로 직접 검증<br>
• <b>탐지 통제로 예방 통제의 효과를 검증</b>하는 패턴 (통제 평가의 고전)<br>
• 수행 로그·스케줄·벤더 데이터 = 입력·과정 지표 (효과 측정 X)<br>
• 패턴: "효과성을 묻는 질문 → 결과 지표(outcome metric) 선택"
</div>`,
reference:"CRM Chapter 4: Preventive Maintenance / Control Effectiveness Evaluation",
keyConcepts:[
"효과성 vs 수행성|효과성 = 결과 지표 / 수행성 = 활동 기록",
"다운타임 로그|PM 효과 직접 검증 — 탐지통제로 예방통제 효과 입증",
"통제 평가 패턴|'effectiveness' 질문 → outcome metric 선택"
]
},

{
id: 320,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `프로덕션 시스템 변경 통제 감사 중, IS 감사인이 변경관리 프로세스가 공식 문서화되지 않았고 일부 마이그레이션 절차가 실패한 것을 발견했다. IS 감사인의 다음 조치는?<br><small style="color:#94a3b8">During a production system change control audit, an IS auditor finds that the change management process is not formally documented and that some migration procedures failed. What should the IS auditor do next?</small>`,
options: [
"변경관리 프로세스 재설계 권고<br><small style='color:#94a3b8'>Recommend redesigning the change management process.</small>",
"근본 원인 분석을 통해 발견사항에 대한 추가 확신 확보<br><small style='color:#94a3b8'>Gain more assurance on the findings through root cause analysis.</small>",
"변경 프로세스가 문서화될 때까지 프로그램 마이그레이션 중단 권고<br><small style='color:#94a3b8'>Recommend that program migration be stopped until the change process is documented.</small>",
"발견사항을 문서화하여 경영진에게 보고<br><small style='color:#94a3b8'>Document the finding and present it to management.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 근본 원인 분석</b> — 마이그레이션 실패가 변경관리 프로세스의 결함 때문인지, 아니면 다른 원인 때문인지 먼저 확인해야 함. 권고·보고·중단 모두 근본 원인이 확정된 후에 진행할 수 있는 조치.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">조치</th><th style="padding:8px;border:1px solid #334155">시점</th><th style="padding:8px;border:1px solid #334155">적절성</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 재설계 권고</td><td style="padding:8px;border:1px solid #334155">근본 원인 확인 후</td><td style="padding:8px;border:1px solid #334155">조급함 — 원인 미확정</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 근본 원인 분석 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>지금 (다음 단계)</b></td><td style="padding:8px;border:1px solid #10b981"><b>발견사항 검증의 정석</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 마이그레이션 중단</td><td style="padding:8px;border:1px solid #334155">—</td><td style="padding:8px;border:1px solid #334155">비현실적 — 보안패치 등 차단</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 경영진 보고</td><td style="padding:8px;border:1px solid #334155">RCA 완료 후</td><td style="padding:8px;border:1px solid #334155">조급함 — 미검증 발견 보고</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>감사인의 발견사항 처리 순서</b>: 발견 → <b>RCA</b> → 검증 → 권고 → 보고<br>
• 미검증 발견을 즉시 보고·권고하면 잘못된 결론·과잉 대응 위험<br>
• 마이그레이션 중단(C) = 사업 운영 마비, 보안패치 지연 → 비현실적<br>
• 패턴: "감사 중 발견 직후 → 다음 단계는?" → 거의 항상 RCA 또는 추가 증거 수집<br>
• 관련: Q272 (증상 vs 근본 원인), Q314 (BIA 미활용)
</div>`,
reference:"CRM Chapter 4: Audit Findings / Root Cause Analysis",
keyConcepts:[
"감사 발견 처리 순서|발견 → RCA → 검증 → 권고 → 보고",
"근본 원인 분석|미검증 발견의 즉시 권고·보고는 부적절",
"실용성 원칙|변경 중단 등 사업 마비 권고는 거의 정답 아님"
]
},

{
id: 321,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `한 지역 내 여러 사무소를 가진 기업이 제한된 복구 예산 하에서 가장 적절한 복구 전략은?<br><small style="color:#94a3b8">Which recovery strategy is MOST appropriate for a business with multiple offices within a region and a limited recovery budget?</small>`,
options: [
"기업이 직접 운영하는 핫 사이트<br><small style='color:#94a3b8'>Hot site maintained by the business</small>",
"상용 콜드 사이트<br><small style='color:#94a3b8'>Commercial cold site</small>",
"사무소 간 상호 협약<br><small style='color:#94a3b8'>Reciprocal arrangement between its offices</small>",
"제3자 핫 사이트<br><small style='color:#94a3b8'>Third-party hot site</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 사무소 간 상호 협약 (Reciprocal arrangement)</b> — 이미 보유한 여러 사무소를 서로의 복구 사이트로 지정하면 추가 시설 비용 없이 가장 저렴하게 수용 가능한 수준의 복구 능력을 확보 가능. "여러 사무소 + 제한 예산" 조건의 정석.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">전략</th><th style="padding:8px;border:1px solid #334155">비용</th><th style="padding:8px;border:1px solid #334155">신뢰도</th><th style="padding:8px;border:1px solid #334155">적합성</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 자체 핫사이트</td><td style="padding:8px;border:1px solid #334155">매우 높음</td><td style="padding:8px;border:1px solid #334155">매우 높음</td><td style="padding:8px;border:1px solid #334155">예산 초과</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 상용 콜드사이트</td><td style="padding:8px;border:1px solid #334155">중간</td><td style="padding:8px;border:1px solid #334155">낮음</td><td style="padding:8px;border:1px solid #334155">다중 사이트 비효율</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 상호 협약 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>최저 (기존 자산 활용)</b></td><td style="padding:8px;border:1px solid #10b981"><b>수용 가능</b></td><td style="padding:8px;border:1px solid #10b981"><b>최적</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 3자 핫사이트</td><td style="padding:8px;border:1px solid #334155">높음</td><td style="padding:8px;border:1px solid #334155">높음</td><td style="padding:8px;border:1px solid #334155">예산 초과</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Reciprocal Agreement</b> = 비슷한 환경의 두 조직(또는 자사 사무소)이 상호 백업 사이트로 합의 — 가장 저렴<br>
• 단점: 용량·호환성·우선순위 충돌 위험 — 일반적으로 비추천이지만 "예산 제약 + 다중 사이트" 조건에서는 최적<br>
• <b>조건 매칭이 핵심</b>: "여러 사무소" + "제한 예산" → Reciprocal<br>
• 핫사이트(A,D)는 신뢰도 최고지만 예산 제약 위반 — 문제의 제약 조건을 무시하면 안 됨<br>
• 콜드사이트(B)를 여러 개 임대 = 비용 증가·가용성 저하로 비효율
</div>`,
reference:"CRM Chapter 4: Recovery Site Strategies / Reciprocal Agreements",
keyConcepts:[
"Reciprocal Agreement|사무소·조직 간 상호 백업 — 최저 비용, 일반적 비추천",
"조건 매칭|'여러 사무소 + 제한 예산' = Reciprocal의 정석 시나리오",
"복구 사이트 비용 순서|Cold < Reciprocal < Warm < Hot < Mirror"
]
},

{
id: 322,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `통제 자가평가(CSA) 프로그램에서 IS 감사인의 주된 역할은?<br><small style="color:#94a3b8">What is the PRIMARY role of the IS auditor in controlling self-assessment programs?</small>`,
options: [
"평가자 (Assessor)<br><small style='color:#94a3b8'>Assessor</small>",
"참여자 (Participant)<br><small style='color:#94a3b8'>Participant</small>",
"촉진자 (Facilitator)<br><small style='color:#94a3b8'>Facilitator</small>",
"관리자 (Manager)<br><small style='color:#94a3b8'>Manager</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 촉진자 (Facilitator)</b> — CSA에서 IS 감사인은 위험 평가에 기반한 통제 목표에 대한 통찰을 제공하며 피감사자가 자신의 환경을 평가하도록 <b>유도·안내</b>하는 역할. 실제 평가와 통제 소유권은 업무 부서 관리자에게 있음.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">역할</th><th style="padding:8px;border:1px solid #334155">담당 주체</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Assessor (평가자)</td><td style="padding:8px;border:1px solid #334155">전통적 감사 — CSA 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Participant (참여자)</td><td style="padding:8px;border:1px solid #334155">경영진·업무 부서</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. Facilitator ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>IS 감사인 — 안내·통찰 제공</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. Manager (관리자)</td><td style="padding:8px;border:1px solid #334155">업무 부서 관리자 — 통제 소유권</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>CSA 핵심 철학</b>: 통제 책임을 업무 부서로 이전 — 부서가 스스로 자신의 통제를 평가<br>
• IS 감사인 = <b>코치·가이드</b> — 직접 평가하지 않음 (전통적 감사와 정반대)<br>
• 업무 부서 관리자 = <b>통제 소유자</b> — 자신의 부서 통제에 책임<br>
• <b>역할 분리</b>: 감사인(촉진) ≠ 경영진(참여·소유)<br>
• 전통적 감사 vs CSA: 전통=감사인이 평가 / CSA=피감사자가 평가, 감사인은 도움
</div>`,
reference:"CRM Chapter 4: Control Self-Assessment (CSA)",
keyConcepts:[
"CSA Facilitator|IS 감사인 = 안내·통찰 제공, 직접 평가 X",
"통제 소유권|업무 부서 관리자 = 통제 owner, 평가의 실제 주체",
"전통감사 vs CSA|전통=감사인 평가 / CSA=부서 자가평가 + 감사인 촉진"
]
},

{
id: 323,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `기업 전반의 모든 컴퓨터 시계를 동기화해야 하는 주된 이유는?<br><small style="color:#94a3b8">The MAIN reason for requiring that all computer clocks across an enterprise are synchronized is to:</small>`,
options: [
"트랜잭션 누락·중복 방지<br><small style='color:#94a3b8'>prevent omission or duplication of transactions.</small>",
"클라이언트→서버 데이터 전송 원활화<br><small style='color:#94a3b8'>ensure smooth data transition from client machines to servers.</small>",
"이메일 메시지의 정확한 타임스탬프 보장<br><small style='color:#94a3b8'>ensure that email messages have accurate time stamps.</small>",
"사고 조사 프로세스 지원<br><small style='color:#94a3b8'>support the incident investigation process.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 사고 조사 지원</b> — 사고 조사 시 여러 시스템의 감사 로그를 증거로 사용하는데, 시계가 동기화되지 않으면 시스템 간 사건의 시간순(timeline) 재구성이 어려워 조사가 사실상 불가능해짐. 이것이 시계 동기화의 주된 이유.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 트랜잭션 누락·중복 방지</td><td style="padding:8px;border:1px solid #334155">시계와 무관 (DB·MQ가 처리)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 데이터 전송 원활화</td><td style="padding:8px;border:1px solid #334155">시계와 무관 (전송은 시간 독립)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 이메일 타임스탬프</td><td style="padding:8px;border:1px solid #334155">사소한 이슈 — 주된 이유 아님</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 사고 조사 지원 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>로그 타임라인 재구성의 필수 조건</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>NTP(Network Time Protocol) 동기화</b>의 주된 목적 = 포렌식·사고 조사 가능성 확보<br>
• 시스템 간 시계가 다르면 사건 인과관계·순서 입증 불가 → 법적 증거 가치 상실<br>
• 감사 로그의 <b>타임스탬프 일관성</b> = 디지털 포렌식의 기본 전제<br>
• 트랜잭션 무결성·이메일·전송은 모두 시계 동기화에 의존하지 않음<br>
• 패턴: "왜 시계 동기화?" → 거의 항상 사고 조사·포렌식·로그 상관관계
</div>`,
reference:"CRM Chapter 4: Time Synchronization / Audit Log Integrity",
keyConcepts:[
"NTP 동기화 목적|사고 조사·포렌식의 timeline 재구성 가능성 확보",
"감사 로그 타임라인|시스템 간 시계 일치 = 인과관계·순서 입증의 전제",
"시계 동기화 무관|트랜잭션·전송·이메일은 동기화에 의존하지 않음"
]
},

{
id: 324,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `한 조직의 비즈니스 프로세스가 RTO=0, RPO≈1분이다. 이는 프로세스가 다음을 허용함을 의미한다:<br><small style="color:#94a3b8">An organization has a business process with RTO equal to zero and RPO close to one minute. This implies that the process can tolerate:</small>`,
options: [
"최대 1분의 데이터 손실, 단 처리는 연속적이어야 함<br><small style='color:#94a3b8'>a data loss of up to one minute, but the processing must be continuous.</small>",
"1분의 처리 중단, 데이터 손실은 불가<br><small style='color:#94a3b8'>a one-minute processing interruption but cannot tolerate any data loss.</small>",
"1분 이상의 처리 중단<br><small style='color:#94a3b8'>a processing interruption of one minute or more.</small>",
"1분 이상의 데이터 손실과 처리 중단 모두<br><small style='color:#94a3b8'>both a data loss and processing interruption longer than one minute.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 최대 1분의 데이터 손실, 처리는 연속적</b> — RTO=0은 다운타임 0(=연속 가용성), RPO=1분은 최대 1분치 데이터 손실 허용을 의미. 두 지표는 독립적으로 해석.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">지표</th><th style="padding:8px;border:1px solid #334155">측정 대상</th><th style="padding:8px;border:1px solid #334155">본 문제 값</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">RTO</td><td style="padding:8px;border:1px solid #334155">다운타임 허용 (시간)</td><td style="padding:8px;border:1px solid #334155">0 → 중단 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">RPO</td><td style="padding:8px;border:1px solid #334155">데이터 손실 허용 (시간)</td><td style="padding:8px;border:1px solid #334155">1분 → 최대 1분치 손실 허용</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RTO = Recovery Time</b>: "얼마나 빨리 복구해야 하는가" → 다운타임 허용량<br>
• <b>RPO = Recovery Point</b>: "얼마나 최근 데이터까지 복구해야 하는가" → 데이터 손실 허용량<br>
• 두 지표는 독립적: RTO=0이어도 RPO>0 가능 (연속 가동하지만 약간의 데이터 손실은 OK)<br>
• 본 시나리오 구현 = 핫 standby + 1분 간격 비동기 복제 (동기 복제면 RPO=0 가능)<br>
• B 오답: RTO=0인데 1분 중단을 허용한다는 것은 모순<br>
• 관련: Q317 (공유 서버 RTO = 가장 짧은 앱 기준)
</div>`,
reference:"CRM Chapter 4: RTO vs RPO",
keyConcepts:[
"RTO|다운타임 허용량 — '얼마나 빨리 복구'",
"RPO|데이터 손실 허용량 — '얼마나 최근 데이터까지'",
"RTO·RPO 독립성|두 지표는 별개 — RTO=0이어도 RPO>0 가능"
]
},

{
id: 325,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `서비스 중단 사고의 심각도 등급을 결정하는 주된 기준은?<br><small style="color:#94a3b8">The MAIN criterion for determining the severity level of a service disruption incident is:</small>`,
options: [
"복구 비용<br><small style='color:#94a3b8'>cost of recovery.</small>",
"부정적 여론<br><small style='color:#94a3b8'>negative public opinion.</small>",
"지리적 위치<br><small style='color:#94a3b8'>geographic location.</small>",
"다운타임<br><small style='color:#94a3b8'>downtime.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 다운타임</b> — 고객에게 서비스를 제공하지 못하는 시간이 길수록 사고의 심각도(영향)가 커짐. 다운타임이 가장 직접적인 비즈니스 영향 지표.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">기준</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 복구 비용</td><td style="padding:8px;border:1px solid #334155">비용 적어도 영향 클 수 있음 → 부정확</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 부정적 여론</td><td style="padding:8px;border:1px solid #334155">사고의 증상·결과 — 원인 지표 아님</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 지리적 위치</td><td style="padding:8px;border:1px solid #334155">심각도 결정 요인 아님</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 다운타임 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>가장 직접적 영향 지표</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>심각도(Severity) ∝ 다운타임</b>: 서비스 미제공 시간 = 가장 직접적·정량적 영향<br>
• 비용·여론 = 부수적·간접 지표 — 다운타임의 결과로 발생<br>
• RTO와 연결: RTO 초과 = 심각도 상승 → SLA 위반<br>
• 패턴: "서비스 중단 사고의 심각도" → 거의 항상 다운타임
</div>`,
reference:"CRM Chapter 4: Incident Severity Classification",
keyConcepts:[
"Incident Severity|다운타임 = 주된 결정 기준",
"직접 vs 간접 지표|다운타임=직접 / 비용·여론=간접·결과",
"RTO 연결|심각도와 RTO 초과는 직접 연관"
]
},

{
id: 326,
domain: "4",
ks: "4B2 System and Operational Resilience",
question: `IS 감사인이 재해 복구를 검토하던 중, 사업 운영 재개에 필요한 모든 핵심 데이터가 보존되지 않았음을 발견했다. 다음 중 잘못 정의된 것은?<br><small style="color:#94a3b8">An IS auditor is reviewing an organization's recovery from a disaster in which not all the critical data needed to resume business operations were retained. Which of the following was incorrectly defined?</small>`,
options: [
"중단 윈도우 (Interruption window)<br><small style='color:#94a3b8'>Interruption window</small>",
"복구 목표 시간 (RTO)<br><small style='color:#94a3b8'>Recovery time objective</small>",
"서비스 제공 목표 (SDO)<br><small style='color:#94a3b8'>Service delivery objective</small>",
"복구 시점 목표 (RPO)<br><small style='color:#94a3b8'>Recovery point objective</small>"
],
correct: 3,
explanation: `<p><b>정답: D. RPO (Recovery Point Objective)</b> — RPO는 허용 가능한 <b>데이터 손실량</b>을 정의함. 핵심 데이터가 충분히 보존되지 않았다면 RPO가 너무 길게(=손실 허용량 과대) 정의되었거나 백업 주기와 맞지 않게 잘못 설정된 것.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">지표</th><th style="padding:8px;border:1px solid #334155">정의</th><th style="padding:8px;border:1px solid #334155">데이터 손실 관련?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Interruption Window</td><td style="padding:8px;border:1px solid #334155">장애~복구까지의 운영 중단 시간</td><td style="padding:8px;border:1px solid #334155">시간 지표 (데이터 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. RTO</td><td style="padding:8px;border:1px solid #334155">허용 가능한 다운타임</td><td style="padding:8px;border:1px solid #334155">시간 지표 (데이터 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. SDO</td><td style="padding:8px;border:1px solid #334155">대체 운영 시 제공할 서비스 수준</td><td style="padding:8px;border:1px solid #334155">서비스 수준 (데이터 X)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. RPO ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>허용 가능한 데이터 손실량</b></td><td style="padding:8px;border:1px solid #10b981"><b>직접 관련</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>증상 → 원인 매핑</b>: "데이터가 부족하다" = RPO 결함<br>
• 4가지 BCP 지표 분류:<br>
&nbsp;&nbsp;- 시간 지표: Interruption Window, RTO<br>
&nbsp;&nbsp;- 데이터 지표: <b>RPO</b><br>
&nbsp;&nbsp;- 서비스 수준 지표: SDO, MTO<br>
• RPO 짧음 = 데이터 손실 적음 (잦은 백업·복제 필요)<br>
• 핵심 데이터 누락 = RPO가 백업 주기보다 짧게 정의됐거나, RPO 자체가 비현실적<br>
• 관련: Q324 (RTO=0, RPO=1분 시나리오)
</div>`,
reference:"CRM Chapter 4: BCP Metrics (RTO/RPO/SDO/MTO)",
keyConcepts:[
"증상 매핑|'데이터 손실' 증상 → RPO 결함",
"BCP 지표 분류|시간(IW·RTO) / 데이터(RPO) / 서비스수준(SDO·MTO)",
"RPO 정의|허용 가능한 데이터 손실량 — 백업 주기와 직접 연관"
]
},

{
id: 327,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `모든 시스템에 대한 백업 고려사항 외에, 온라인 시스템 백업에서 중요한 고려사항은?<br><small style="color:#94a3b8">In addition to the backup considerations for all systems, which of the following is an important consideration in providing backup for online systems?</small>`,
options: [
"시스템 소프트웨어 파라미터 유지<br><small style='color:#94a3b8'>Maintaining system software parameters</small>",
"트랜잭션 로그의 정기적 덤프<br><small style='color:#94a3b8'>Ensuring periodic dumps of transaction logs</small>",
"GFS(grandfather-father-son) 파일 백업<br><small style='color:#94a3b8'>Ensuring grandfather-father-son file backups</small>",
"중요 데이터의 오프사이트 보관<br><small style='color:#94a3b8'>Maintaining important data at an offsite location</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 트랜잭션 로그의 정기적 덤프</b> — 온라인 시스템은 활동량이 높아 전통적 풀백업 방식이 비현실적. 트랜잭션 로그를 자주 덤프해야 최신 데이터를 보존하고 데이터 손실을 최소화할 수 있음. 이것이 온라인 시스템 <b>고유</b>의 백업 고려사항.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">온라인 시스템 고유?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. SW 파라미터 유지</td><td style="padding:8px;border:1px solid #334155">모든 시스템 공통</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 트랜잭션 로그 덤프 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>온라인 고유 — 고활동량 대응</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. GFS 백업</td><td style="padding:8px;border:1px solid #334155">모든 시스템 공통</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 오프사이트 보관</td><td style="padding:8px;border:1px solid #334155">모든 시스템 공통</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"In addition to ... for all systems"</b> 단서: 온라인 시스템 <b>고유</b>의 고려사항을 묻는 것<br>
• 온라인 시스템 = 24/7 트랜잭션 처리 → 풀백업 윈도우 확보 어려움<br>
• 해결책: <b>트랜잭션 로그 덤프</b> + 주기적 풀백업 결합<br>
• 복구 시: 가장 최근 풀백업 + 이후 트랜잭션 로그 재실행 → RPO 최소화<br>
• A·C·D는 모든 시스템에 적용되는 일반 원칙 → 본 문제 의도에 부적합<br>
• 관련: Q326 (RPO 정의), Q324 (RPO=1분 시나리오 구현)
</div>`,
reference:"CRM Chapter 4: Online System Backup / Transaction Log Management",
keyConcepts:[
"Transaction Log Dump|온라인 시스템 고유 백업 — 풀백업 사이의 변경 보존",
"온라인 백업 전략|풀백업 + 로그 덤프 결합 — RPO 최소화",
"문제 단서|'in addition to all systems' = 온라인 고유 고려사항 묻는 패턴"
]
},

{
id: 328,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `파일 서버에 RAID 레벨 1을 구현하는 주된 목적은?<br><small style="color:#94a3b8">The PRIMARY purpose of implementing RAID level 1 in a file server is to:</small>`,
options: [
"성능 향상 달성<br><small style='color:#94a3b8'>achieve performance improvement.</small>",
"사용자 인증 제공<br><small style='color:#94a3b8'>provide user authentication.</small>",
"데이터 가용성 보장<br><small style='color:#94a3b8'>ensure availability of data.</small>",
"데이터 기밀성 보장<br><small style='color:#94a3b8'>ensure the confidentiality of data.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 데이터 가용성 보장</b> — RAID 1은 디스크 미러링: 동일 데이터를 두 디스크에 동시에 기록. 한 디스크가 고장나면 다른 디스크가 즉시 대체 → 데이터 가용성 보장이 주된 목적.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">RAID 레벨</th><th style="padding:8px;border:1px solid #334155">방식</th><th style="padding:8px;border:1px solid #334155">주 목적</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">RAID 0</td><td style="padding:8px;border:1px solid #334155">스트라이핑</td><td style="padding:8px;border:1px solid #334155">성능 (가용성 X)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>RAID 1 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>미러링</b></td><td style="padding:8px;border:1px solid #10b981"><b>가용성</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">RAID 5</td><td style="padding:8px;border:1px solid #334155">스트라이핑 + 분산 패리티</td><td style="padding:8px;border:1px solid #334155">가용성 + 효율</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">RAID 10</td><td style="padding:8px;border:1px solid #334155">미러링 + 스트라이핑</td><td style="padding:8px;border:1px solid #334155">가용성 + 성능</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RAID 1 = Mirroring</b>: 동일 데이터를 두 디스크에 복제 → 단일 디스크 장애 허용<br>
• 성능 향상은 아님 — 쓰기 시 두 곳에 기록하므로 오히려 성능 부담<br>
• 인증·기밀성과 무관 — RAID는 가용성·내결함성 메커니즘<br>
• <b>RAID ≠ Backup</b>: RAID는 하드웨어 장애만 대응, 논리적 오류·악성코드·삭제는 백업으로 대응<br>
• 패턴: "RAID 목적" → 거의 항상 가용성/내결함성
</div>`,
reference:"CRM Chapter 4: RAID Levels / Data Availability",
keyConcepts:[
"RAID 1|미러링 — 동일 데이터 두 디스크 복제, 가용성 보장",
"RAID vs Backup|RAID=하드웨어 장애 대응 / Backup=논리 오류·재해 대응",
"RAID 레벨 비교|0=성능 / 1=가용성 / 5=균형 / 10=가용성+성능"
]
},

{
id: 329,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `OLTP 시스템 데이터베이스에서 트랜잭션 무결성을 유지하는 데이터베이스 통제는?<br><small style="color:#94a3b8">Which of the following database controls ensure that the integrity of transactions is maintained in an online transaction processing system's database?</small>`,
options: [
"인증 통제<br><small style='color:#94a3b8'>Authentication controls</small>",
"데이터 정규화 통제<br><small style='color:#94a3b8'>Data normalization controls</small>",
"읽기/쓰기 접근 로그 통제<br><small style='color:#94a3b8'>Read/write access log controls</small>",
"커밋·롤백 통제<br><small style='color:#94a3b8'>Commitment and rollback controls</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 커밋·롤백 통제</b> — 논리적 트랜잭션 단위의 모든 DB 작업이 <b>완전히 수행되거나(commit) 전혀 수행되지 않도록(rollback)</b> 보장. 트랜잭션 도중 실패 시 미완성 작업을 되돌려 DB를 이전 상태로 복원 → 무결성 직접 보장(ACID의 Atomicity).</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">통제</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">트랜잭션 무결성?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 인증</td><td style="padding:8px;border:1px solid #334155">권한 사용자만 접근</td><td style="padding:8px;border:1px solid #334155">접근 통제 (무결성 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 정규화</td><td style="padding:8px;border:1px solid #334155">중복 제거·구조 설계</td><td style="padding:8px;border:1px solid #334155">설계 단계 (런타임 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 접근 로그</td><td style="padding:8px;border:1px solid #334155">활동 기록</td><td style="padding:8px;border:1px solid #334155">탐지 (예방 X)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. Commit/Rollback ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>All-or-nothing 보장</b></td><td style="padding:8px;border:1px solid #10b981"><b>직접 보장 (Atomicity)</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>ACID 속성</b> 중 <b>Atomicity(원자성)</b> = Commit/Rollback로 구현<br>
• 트랜잭션 무결성 = "전부 또는 전무" → 부분 업데이트 방지<br>
• 인증·정규화·로그는 무결성을 직접 보장하지 못함<br>
• 패턴: "트랜잭션 무결성" → Commit/Rollback (또는 ACID 속성)<br>
• 관련: ACID 속성 (Atomicity·Consistency·Isolation·Durability)
</div>`,
reference:"CRM Chapter 4: Database Integrity Controls / ACID Properties",
keyConcepts:[
"Commit/Rollback|ACID Atomicity 구현 — 트랜잭션 all-or-nothing",
"트랜잭션 무결성|부분 업데이트 방지 — 실패 시 이전 상태 복원",
"통제 분류|인증=접근 / 정규화=설계 / 로그=탐지 / Commit·Rollback=무결성"
]
},

{
id: 330,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `핵심 파일 서버에서 스토리지 증가에 대한 부적절한 관리와 관련된 가장 큰 위험은?<br><small style="color:#94a3b8">What is the GREATEST risk associated with inadequate management of storage growth in a critical file server?</small>`,
options: [
"백업 시간이 지속적으로 증가<br><small style='color:#94a3b8'>Backup time steadily increases.</small>",
"백업 운영 비용이 크게 증가<br><small style='color:#94a3b8'>Backup operational costs significantly increase.</small>",
"스토리지 운영 비용이 크게 증가<br><small style='color:#94a3b8'>Storage operational costs significantly increase.</small>",
"서버 복구 작업이 RTO를 충족하지 못할 수 있음<br><small style='color:#94a3b8'>Server recovery work may not meet the RTO.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. RTO 미충족</b> — 데이터가 비대해지면 복구에 더 많은 시간이 소요되고, 결국 RTO를 초과해 BCP 전략 자체가 깨질 위험. 비용 증가나 백업 시간 증가는 관리 가능한 운영 이슈지만 RTO 미충족은 사업 연속성 실패로 직결.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">위험</th><th style="padding:8px;border:1px solid #334155">영향</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 백업 시간 증가</td><td style="padding:8px;border:1px solid #334155">운영 이슈 — 관리 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 백업 비용 증가</td><td style="padding:8px;border:1px solid #334155">재무 이슈 — 사업 연속성 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 스토리지 비용 증가</td><td style="padding:8px;border:1px solid #334155">재무 이슈 — 사업 연속성 X</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. RTO 미충족 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>BCP 실패 — 사업 중단</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>위험 평가 기준</b>: 비용·운영 이슈 < 사업 연속성 실패<br>
• 데이터 비대화 → 복구 시간 증가 → RTO 초과 → BCP 전략 붕괴<br>
• 백업 시간(A)은 백업 윈도우 내에 끝나기만 하면 OK — 관리 가능<br>
• <b>"GREATEST risk" 패턴</b>: 거의 항상 사업 영향이 가장 큰 옵션 선택<br>
• 관련: Q317 (RTO와 critical 앱), Q324·Q326 (RTO 정의)
</div>`,
reference:"CRM Chapter 4: Storage Management / RTO Compliance",
keyConcepts:[
"스토리지 비대화 위험|복구 시간 증가 → RTO 미충족 → BCP 실패",
"GREATEST risk 패턴|운영·비용 이슈 < 사업 연속성 실패",
"백업 vs 복구|백업 시간은 윈도우 내, 복구 시간은 RTO 내가 핵심"
]
},

{
id: 331,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `이메일 온사이트 아카이빙 프로세스를 감사할 때 IS 감사인이 가장 주의해야 할 것은?<br><small style="color:#94a3b8">When auditing the onsite archiving process of emails, the IS auditor should pay the MOST attention to which of the following?</small>`,
options: [
"데이터 보관 정책의 존재<br><small style='color:#94a3b8'>Existence of a data retention policy</small>",
"아카이빙 솔루션의 저장 용량<br><small style='color:#94a3b8'>Storage capacity of the archiving solution</small>",
"이메일 사용에 대한 사용자 인식 수준<br><small style='color:#94a3b8'>Level of user awareness concerning email use</small>",
"아카이빙 솔루션 제조사의 지원·안정성<br><small style='color:#94a3b8'>Support and stability of the archiving solution manufacturer</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 데이터 보관 정책의 존재</b> — 사업·규제 요구사항에 부합하는 보관 정책이 없으면, 필요할 때 올바른 이메일을 보존·재생산하지 못함. 정책은 모든 아카이빙 활동의 기준이자 출발점.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">우선순위</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 보관 정책 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>최우선 — 모든 활동의 기준</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 저장 용량</td><td style="padding:8px;border:1px solid #334155">기술적 — 정책 없으면 무의미</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 사용자 인식</td><td style="padding:8px;border:1px solid #334155">간접적 — 아카이빙 정확성과 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 벤더 지원</td><td style="padding:8px;border:1px solid #334155">2차 — 정책이 우선</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>정책 우선 원칙</b>: 정책 → 절차 → 기술 구현 → 운영의 순서<br>
• 보관 정책 = "무엇을, 얼마나 오래, 어떻게 보관할지" 정의 — 규제·법적 요구사항 반영<br>
• 정책 없는 아카이빙 = 무엇을 보존하고 무엇을 삭제할지 모름 → 컴플라이언스 실패<br>
• 용량·벤더는 정책이 정의된 후 그것을 충족하기 위한 수단<br>
• 패턴: 감사 우선순위 질문 → 거의 항상 정책·거버넌스가 기술보다 우선<br>
• 관련: e-Discovery·법적 보존 명령(Legal Hold) 대응
</div>`,
reference:"CRM Chapter 4: Email Archiving / Data Retention Policy",
keyConcepts:[
"Data Retention Policy|아카이빙 활동의 기준 — 무엇을·얼마나·어떻게 보관",
"정책 우선 원칙|정책 → 절차 → 기술 → 운영 순서",
"감사 우선순위|거버넌스(정책) > 기술 구현(용량·벤더)"
]
},

{
id: 332,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `24시간 영업 주문을 받기 위해 시스템이 항상 온라인이어야 하는 대용량 미션 크리티컬 데이터의 백업 전략으로 가장 효율적인 것은?<br><small style="color:#94a3b8">Which of the following is the MOST efficient strategy for the backup of large quantities of mission-critical data when the systems need to be online 24 hours a day?</small>`,
options: [
"내결함성 디스크-투-디스크 백업 솔루션 구현<br><small style='color:#94a3b8'>Implementing a fault-tolerant disk-to-disk backup solution.</small>",
"주간 풀 백업 + 야간 증분 백업<br><small style='color:#94a3b8'>Making a full backup weekly and an incremental backup nightly.</small>",
"중복 SAN 생성 후 두 번째 SAN으로 복제<br><small style='color:#94a3b8'>Creating a duplicate SAN and replicating the data to a second SAN.</small>",
"핫 사이트에 동일 서버·스토리지 인프라 구축<br><small style='color:#94a3b8'>Creating identical server and storage infrastructure at a hot site.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 디스크-투-디스크(D2D) 백업</b> — 1차 백업을 테이프 대신 디스크에 기록하여 시스템 성능 영향 최소화, 대용량 데이터 빠른 백업, 장애 시 즉시 대체 디스크로 전환 가능. 24/7 온라인 시스템에 적합.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">24/7 적합?</th><th style="padding:8px;border:1px solid #334155">백업 기능?</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. D2D ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>예 — 백업 윈도우 불필요</b></td><td style="padding:8px;border:1px solid #10b981"><b>예 — 진정한 백업</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 풀+증분 백업</td><td style="padding:8px;border:1px solid #334155">아니오 — 백업 윈도우 필요</td><td style="padding:8px;border:1px solid #334155">예</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. SAN 복제</td><td style="padding:8px;border:1px solid #334155">예</td><td style="padding:8px;border:1px solid #334155">아니오 — 중복일 뿐 (백업 X)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 핫 사이트</td><td style="padding:8px;border:1px solid #334155">예 (가용성)</td><td style="padding:8px;border:1px solid #334155">아니오 — 장기 보관 미해결</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Backup vs Replication 구분</b>:<br>
&nbsp;&nbsp;- Backup = 시점 복원(point-in-time) — 논리적 오류·삭제·랜섬웨어 대응<br>
&nbsp;&nbsp;- Replication/Mirror = 동시 복제 — 하드웨어 장애·재해 대응 (실수도 즉시 복제됨)<br>
• <b>D2D</b> = 디스크 속도로 백업 → 백업 윈도우 거의 0 → 24/7 가능<br>
• 전통적 야간 백업(B)은 시스템을 잠시 오프라인으로 만들거나 성능 저하 → 24/7 부적합<br>
• SAN 복제(C)·핫사이트(D) = 가용성·중복은 좋지만 <b>백업이 아님</b> (논리적 오류 시 함께 복제됨)<br>
• 패턴: "24/7 + 백업" → D2D 또는 스냅샷 기반 솔루션<br>
• 관련: Q328 (RAID ≠ Backup), Q327 (트랜잭션 로그 덤프)
</div>`,
reference:"CRM Chapter 4: Disk-to-Disk Backup / 24x7 Backup Strategies",
keyConcepts:[
"Disk-to-Disk Backup|디스크에 직접 백업 — 백업 윈도우 거의 0, 24/7 가능",
"Backup vs Replication|백업=시점 복원 / 복제=실시간 중복 (논리오류 대응 X)",
"24/7 백업 패턴|D2D·스냅샷 기반 — 전통적 야간 백업 윈도우 회피"
]
},

{
id: 333,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `IT 경영진이 오프사이트 백업을 폐지하는 대신 모든 서버에 RAID 1을 설치하기로 결정했다. IS 감사인은 무엇을 권고해야 하는가?<br><small style="color:#94a3b8">IT management has decided to install a level 1 RAID system in all servers to compensate for the elimination of offsite backups. The IS auditor should recommend:</small>`,
options: [
"RAID 5로 업그레이드<br><small style='color:#94a3b8'>upgrading to a level 5 RAID.</small>",
"온사이트 백업 빈도 증가<br><small style='color:#94a3b8'>increasing the frequency of onsite backups.</small>",
"오프사이트 백업 복원<br><small style='color:#94a3b8'>reinstating the offsite backups.</small>",
"보안된 위치에 콜드 사이트 구축<br><small style='color:#94a3b8'>establishing a cold site in a secure location.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 오프사이트 백업 복원</b> — RAID는 어느 레벨이든 자연재해·데이터센터 전소로부터 보호하지 못함. 오프사이트 백업이 유일한 재해 대응 수단이므로 즉시 복원해야 함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">재해 대응?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. RAID 5 업그레이드</td><td style="padding:8px;border:1px solid #334155">아니오 — 같은 DC 내 디스크 보호만</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 온사이트 백업 증가</td><td style="padding:8px;border:1px solid #334155">아니오 — 같은 위치, RAID 1과 중복</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 오프사이트 복원 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>예 — 재해 대응 유일 수단</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 콜드 사이트</td><td style="padding:8px;border:1px solid #334155">시설만 — 데이터 저장 X</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RAID ≠ Backup ≠ DR</b>: 세 가지는 별개의 보호 계층<br>
&nbsp;&nbsp;- RAID = 디스크 장애 대응 (같은 서버 내)<br>
&nbsp;&nbsp;- 온사이트 백업 = 논리적 오류 대응 (같은 사이트)<br>
&nbsp;&nbsp;- <b>오프사이트 백업</b> = 재해·물리적 손실 대응 (지리적 분리)<br>
• 경영진의 결정 = 위험 오판 — RAID로 백업을 대체할 수 없음<br>
• 콜드 사이트(D)는 시설만 제공, 데이터 저장 기능 없음 → 별도 백업 필수<br>
• 패턴: "RAID로 백업 대체" → 거의 항상 오답 (재해 대응 불가)<br>
• 관련: Q328 (RAID 1 미러링), Q332 (D2D 백업)
</div>`,
reference:"CRM Chapter 4: RAID vs Backup vs DR / Offsite Backup Necessity",
keyConcepts:[
"RAID ≠ Backup|RAID는 디스크 장애만 대응 — 재해·논리오류 보호 X",
"오프사이트 백업|재해 대응의 유일 수단 — 지리적 분리 필수",
"3중 보호 계층|RAID(디스크) + 백업(논리) + 오프사이트(재해)"
]
},

{
id: 334,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `RPO를 정의할 때 가장 중요한 고려사항은?<br><small style="color:#94a3b8">Which of the following is the MOST important consideration when defining recovery point objectives (RPOs)?</small>`,
options: [
"최소 운영 요구사항<br><small style='color:#94a3b8'>Minimum operating requirements</small>",
"허용 가능한 데이터 손실<br><small style='color:#94a3b8'>Acceptable data loss</small>",
"평균 고장 간격(MTBF)<br><small style='color:#94a3b8'>Mean time between failures</small>",
"허용 가능한 복구 시간<br><small style='color:#94a3b8'>Acceptable time for recovery</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 허용 가능한 데이터 손실</b> — RPO는 정의상 조직이 수용할 수 있는 데이터 손실/재작업의 양. 다른 옵션들은 다른 BCP 지표(D=RTO, A=MOR/SDO, C=MTBF)에 해당.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">실제 정의</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 최소 운영 요구</td><td style="padding:8px;border:1px solid #334155">복구 전략 설계 입력 (MOR/SDO)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 데이터 손실 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>RPO 정의 그 자체</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. MTBF</td><td style="padding:8px;border:1px solid #334155">고장 가능성 지표</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 복구 시간</td><td style="padding:8px;border:1px solid #334155">RTO 정의</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RPO = 데이터 손실 허용량</b> (정의 매핑)<br>
• RTO = 시간, RPO = 데이터 — 외워야 할 핵심 구분<br>
• 관련: Q324·Q326 (RPO/RTO 시나리오)
</div>`,
reference:"CRM Chapter 4: RPO Definition",
keyConcepts:[
"RPO 정의|허용 가능한 데이터 손실량",
"RTO vs RPO|RTO=시간 / RPO=데이터",
"BCP 지표 매핑|MOR/SDO=서비스수준 / MTBF=신뢰성 / RTO=시간 / RPO=데이터"
]
},

{
id: 335,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `예산이 제한된 조직의 RTO=72시간, RPO=24시간이다. 사업 요구사항을 가장 잘 충족하는 것은?<br><small style="color:#94a3b8">An organization with a limited budget has an RTO of 72 hours and an RPO of 24 hours. Which of the following would BEST meet the requirements of the business?</small>`,
options: [
"핫 사이트 (Hot site)<br><small style='color:#94a3b8'>Hot site</small>",
"콜드 사이트 (Cold site)<br><small style='color:#94a3b8'>Cold site</small>",
"미러드 사이트 (Mirrored site)<br><small style='color:#94a3b8'>Mirrored site</small>",
"웜 사이트 (Warm site)<br><small style='color:#94a3b8'>Warm site</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 웜 사이트</b> — 72시간 RTO·24시간 RPO는 비교적 여유 있는 요구사항이며, 웜 사이트는 필수 인프라와 대부분의 IT 장비를 합리적 비용으로 제공. 핫/미러는 과도, 콜드는 부족.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">사이트 유형</th><th style="padding:8px;border:1px solid #334155">복구 시간</th><th style="padding:8px;border:1px solid #334155">비용</th><th style="padding:8px;border:1px solid #334155">72h/24h 적합?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Hot</td><td style="padding:8px;border:1px solid #334155">수시간</td><td style="padding:8px;border:1px solid #334155">높음</td><td style="padding:8px;border:1px solid #334155">과도 — 예산 낭비</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Cold</td><td style="padding:8px;border:1px solid #334155">수주</td><td style="padding:8px;border:1px solid #334155">낮음</td><td style="padding:8px;border:1px solid #334155">부족 — 72h 초과</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. Mirrored</td><td style="padding:8px;border:1px solid #334155">즉시</td><td style="padding:8px;border:1px solid #334155">매우 높음</td><td style="padding:8px;border:1px solid #334155">과도 — 예산 위반</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. Warm ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>1~3일</b></td><td style="padding:8px;border:1px solid #10b981"><b>중간</b></td><td style="padding:8px;border:1px solid #10b981"><b>딱 맞음 (cost-effective)</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"BEST" + 예산 제약</b>: 요구사항을 충족하면서도 가장 저렴한 옵션 선택<br>
• 사이트 비용·복구속도 순서: Cold &lt; Warm &lt; Hot &lt; Mirrored<br>
• RTO 72h = 며칠 여유 → Warm으로 충분<br>
• 핫·미러는 RTO 충족하지만 "limited budget" 위반 → 차선<br>
• 콜드는 비용은 OK지만 RTO 72h 초과 위험 → 부적합<br>
• 패턴: 예산 + RTO/RPO 매칭 → 정확히 충족하는 최저 비용 옵션<br>
• 관련: Q321 (Reciprocal — 가장 저렴), Q317 (RTO 결정)
</div>`,
reference:"CRM Chapter 4: Recovery Site Selection / Cost-RTO Trade-off",
keyConcepts:[
"Warm Site|필수 인프라+대부분 장비 — 1~3일 복구, 중간 비용",
"사이트 비용 순서|Cold < Warm < Hot < Mirrored",
"BEST 매칭 원칙|RTO 충족 + 최저 비용 = cost-effective 정답"
]
},

{
id: 336,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `대체 불가능한 정보를 담은 백업 미디어가 운송 중 분실·도난되는 위험을 가장 잘 완화하는 것은?<br><small style="color:#94a3b8">Which of the following BEST mitigates the risk of backup media containing irreplaceable information being lost or stolen while in transit?</small>`,
options: [
"미디어 암호화 보장<br><small style='color:#94a3b8'>Ensure that media are encrypted.</small>",
"중복 사본 유지<br><small style='color:#94a3b8'>Maintain a duplicate copy.</small>",
"보관 연속성 사슬(chain of custody) 유지<br><small style='color:#94a3b8'>Maintain chain of custody.</small>",
"인력에 대한 보증보험 가입<br><small style='color:#94a3b8'>Ensure that personnel are bonded.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 중복 사본 유지</b> — "대체 불가능한(irreplaceable)" 데이터의 핵심 위험은 <b>가용성 손실</b>. 암호화·CoC·보증보험은 도난·기밀성 보호에 좋지만 분실 자체를 복구하지 못함. 중복 사본만이 원본 손실 시에도 데이터를 복원 가능하게 함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">통제</th><th style="padding:8px;border:1px solid #334155">보호하는 위험</th><th style="padding:8px;border:1px solid #334155">손실 복구?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 암호화</td><td style="padding:8px;border:1px solid #334155">기밀성 (도난 시 노출)</td><td style="padding:8px;border:1px solid #334155">아니오</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 중복 사본 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>가용성 (분실 시 복원)</b></td><td style="padding:8px;border:1px solid #10b981"><b>예</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. CoC</td><td style="padding:8px;border:1px solid #334155">책임 추적</td><td style="padding:8px;border:1px solid #334155">아니오</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 보증보험</td><td style="padding:8px;border:1px solid #334155">금전적 보상</td><td style="padding:8px;border:1px solid #334155">아니오 (사고 후 보상만)</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"Irreplaceable" 키워드</b>: 가용성·복구가능성이 핵심 → 중복 사본 필수<br>
• 암호화 = 기밀성 통제 (도난 → 노출 방지) — 데이터 자체 손실은 못 막음<br>
• <b>CIA 매칭</b>: 분실(가용성) → 백업·중복 / 도난(기밀성) → 암호화<br>
• 운송 중 사고 = 단일 사본의 단일 장애점 → 사전 중복이 유일한 해결책<br>
• 패턴: 키워드 "irreplaceable/lost" → 가용성 통제 (중복·백업)<br>
• 관련: Q333 (오프사이트 백업), Q332 (D2D)
</div>`,
reference:"CRM Chapter 4: Backup Media Transit / CIA Triad Mapping",
keyConcepts:[
"Irreplaceable 위험|가용성 손실 — 중복 사본만이 직접 완화",
"CIA 매칭 통제|기밀성=암호화 / 가용성=중복·백업 / 무결성=해시",
"암호화 한계|도난 시 노출은 막지만 손실 자체는 복구 못 함"
]
},

{
id: 337,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `IS 감사인이 IT 운영팀이 데이터에 대해 향상된 보안 수준을 구현했음을 확인했다. IT 운영팀이 구현했을 가능성이 가장 높은 객체지향 기술 특성은?<br><small style="color:#94a3b8">Which of the following object-oriented technology characteristic is MOST likely be implemented by the IT operations team [for enhanced data security]?</small>`,
options: [
"상속 (Inheritance)<br><small style='color:#94a3b8'>Inheritance</small>",
"동적 웨어하우징 (Dynamic warehousing)<br><small style='color:#94a3b8'>Dynamic warehousing</small>",
"캡슐화 (Encapsulation)<br><small style='color:#94a3b8'>Encapsulation</small>",
"다형성 (Polymorphism)<br><small style='color:#94a3b8'>Polymorphism</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 캡슐화 (Encapsulation)</b> — 객체의 속성·메서드를 외부에서 직접 접근하지 못하게 하고 정의된 공개 인터페이스를 통해서만 상호작용하도록 제한. 정보 은닉(information hiding)으로 데이터 보안을 직접 강화.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">OO 특성</th><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">보안 관련?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Inheritance</td><td style="padding:8px;border:1px solid #334155">코드 재사용</td><td style="padding:8px;border:1px solid #334155">아니오</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Dynamic warehousing</td><td style="padding:8px;border:1px solid #334155">OO 특성 아님 (혼동 옵션)</td><td style="padding:8px;border:1px solid #334155">아니오</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. Encapsulation ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>정보 은닉·접근 제한</b></td><td style="padding:8px;border:1px solid #10b981"><b>예 — 직접 보안 기능</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. Polymorphism</td><td style="padding:8px;border:1px solid #334155">동작의 다형 처리</td><td style="padding:8px;border:1px solid #334155">아니오</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Encapsulation = Information Hiding</b>: private 속성·메서드는 외부에서 접근 불가<br>
• 공개 인터페이스(public API)만 노출 → 내부 구현 보호<br>
• 데이터 무결성·기밀성 강화의 OO 핵심 메커니즘<br>
• 다른 OO 특성(상속·다형성)은 설계·재사용 목적이지 보안 목적이 아님<br>
• 패턴: "OO + 보안" → 거의 항상 Encapsulation
</div>`,
reference:"CRM Chapter 4: Object-Oriented Technology / Encapsulation",
keyConcepts:[
"Encapsulation|정보 은닉 — public 인터페이스만 노출, 내부 보호",
"OO 특성 분류|상속=재사용 / 캡슐화=보안 / 다형성=유연성",
"OO + 보안 패턴|Encapsulation이 정답"
]
},

{
id: 338,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `IS 감사인이 데이터 흐름도(DFD)를 사용하는 목적은?<br><small style="color:#94a3b8">Data flow diagrams are used by IS auditors to:</small>`,
options: [
"핵심 통제 식별<br><small style='color:#94a3b8'>identify key controls.</small>",
"고수준 데이터 정의 강조<br><small style='color:#94a3b8'>highlight high-level data definitions.</small>",
"데이터 경로와 저장소를 그래픽으로 요약<br><small style='color:#94a3b8'>graphically summarize data paths and storage.</small>",
"데이터 생성의 단계별 세부 묘사<br><small style='color:#94a3b8'>portray step-by-step details of data generation.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 데이터 경로와 저장소를 그래픽으로 요약</b> — DFD는 데이터가 발생지에서 목적지까지 어떻게 이동하고 어디에 저장되는지를 시각적으로 추적. 데이터 흐름과 저장 위치 파악이 주된 목적.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">실제 도구</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 통제 식별</td><td style="padding:8px;border:1px solid #334155">Control Matrix·RCM</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 데이터 정의</td><td style="padding:8px;border:1px solid #334155">Data Dictionary</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 흐름·저장 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>DFD 정의 그 자체</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 생성 세부</td><td style="padding:8px;border:1px solid #334155">Process Flow·시퀀스 다이어그램</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>DFD = Data Flow Diagram</b>: 데이터의 이동·저장·변환을 시각화<br>
• 4가지 요소: External Entity / Process / Data Store / Data Flow<br>
• 감사 활용: 데이터 처리 경로 파악 → 잠재적 보안·통제 지점 식별의 <b>입력</b>으로 사용 (DFD 자체가 통제 식별 도구는 아님)<br>
• 다른 도구 매핑: 통제→RCM, 정의→Data Dictionary, 절차→Flowchart
</div>`,
reference:"CRM Chapter 4: Data Flow Diagrams / Audit Tools",
keyConcepts:[
"DFD 정의|데이터 경로·저장소 시각화 — 흐름 추적 도구",
"DFD 4요소|External Entity / Process / Data Store / Data Flow",
"감사 도구 매핑|DFD=흐름 / RCM=통제 / Dictionary=정의 / Flowchart=절차"
]
},

{
id: 339,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `잠재적 자연재해에 대비한 데이터 백업 전략 설계에 가장 주요하게 도움이 되는 입력은?<br><small style="color:#94a3b8">Which of the following inputs would PRIMARILY help in designing the data backup strategy in case of potential natural disasters?</small>`,
options: [
"복구 시점 목표 (RPO)<br><small style='color:#94a3b8'>Recovery point objective (RPO)</small>",
"백업할 데이터 볼륨<br><small style='color:#94a3b8'>Volume of data to be backed up</small>",
"사용 가능한 데이터 백업 기술<br><small style='color:#94a3b8'>Available data backup technologies</small>",
"복구 시간 목표 (RTO)<br><small style='color:#94a3b8'>Recovery time objective (RTO)</small>"
],
correct: 0,
explanation: `<p><b>정답: A. RPO</b> — RPO는 허용 가능한 데이터 손실량을 정의하므로 <b>백업 주기·방식</b>을 결정하는 직접적 입력. 백업 전략(빈도·기술 선택)의 핵심 출발점.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">입력</th><th style="padding:8px;border:1px solid #334155">결정 대상</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. RPO ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>백업 주기·방식 (전략의 핵심)</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 데이터 볼륨</td><td style="padding:8px;border:1px solid #334155">용량 계획 (보조)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 백업 기술</td><td style="padding:8px;border:1px solid #334155">구현 수단 (RPO 후 결정)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. RTO</td><td style="padding:8px;border:1px solid #334155">DR 사이트 설계 (백업 전략 X)</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RPO → 백업 전략 / RTO → 복구 사이트 전략</b> 매핑<br>
• RPO 1시간 = 매시간 백업/복제 필요 → 백업 기술·주기 결정<br>
• 볼륨·기술은 RPO가 정해진 후 그것을 충족하기 위한 수단<br>
• <b>요구사항 → 전략 → 기술</b> 순서 (Top-down)<br>
• 패턴: "백업 전략 입력" → RPO / "복구 사이트 입력" → RTO<br>
• 관련: Q324·Q326·Q334 (RPO 시리즈)
</div>`,
reference:"CRM Chapter 4: Backup Strategy Design / RPO Driver",
keyConcepts:[
"RPO → 백업 전략|허용 데이터 손실량이 백업 주기·방식 결정",
"RTO vs RPO 매핑|RTO=DR 사이트 / RPO=백업 전략",
"설계 순서|요구사항(RPO) → 전략 → 기술 → 운영"
]
},

{
id: 340,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `데이터센터 재해 시, 핵심 데이터베이스의 완전한 복구를 가능하게 하는 가장 적절한 전략은?<br><small style="color:#94a3b8">In the event of a data center disaster, which of the following is the MOST appropriate strategy to enable a complete recovery of a critical database?</small>`,
options: [
"원격 사이트로 일일 데이터 백업<br><small style='color:#94a3b8'>Daily data backup to a remote site</small>",
"원격 사이트로 실시간 복제<br><small style='color:#94a3b8'>Real-time replication to a remote site</small>",
"로컬 서버로 하드 디스크 미러링<br><small style='color:#94a3b8'>Hard disk mirroring to a local server</small>",
"로컬 SAN으로 실시간 데이터 백업<br><small style='color:#94a3b8'>Real-time data backup to the local storage area network</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 원격 사이트로 실시간 복제</b> — "완전한 복구(complete recovery)" + "데이터센터 재해" 조건 동시 충족. 실시간 = 데이터 손실 0(완전), 원격 = 동일 재해 영향 회피.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">전략</th><th style="padding:8px;border:1px solid #334155">완전 복구?</th><th style="padding:8px;border:1px solid #334155">재해 회피?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 일일 원격 백업</td><td style="padding:8px;border:1px solid #334155">아니오 (최대 1일 손실)</td><td style="padding:8px;border:1px solid #334155">예</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 원격 실시간 복제 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>예 (RPO≈0)</b></td><td style="padding:8px;border:1px solid #10b981"><b>예</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 로컬 미러링</td><td style="padding:8px;border:1px solid #334155">예</td><td style="padding:8px;border:1px solid #334155">아니오 (동일 DC)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 로컬 실시간 백업</td><td style="padding:8px;border:1px solid #334155">예</td><td style="padding:8px;border:1px solid #334155">아니오 (동일 DC)</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>두 가지 조건 동시 충족</b>: (1) 완전 복구 = 실시간 / (2) 재해 대응 = 원격<br>
• 로컬(C·D) = 동일 재해에 함께 파괴 → 재해 시나리오 부적합<br>
• 일일 백업(A) = 최대 24시간 데이터 손실 → "complete" 위반<br>
• <b>원격 + 실시간 = 유일 해법</b><br>
• 패턴: "재해 + complete recovery" → 항상 원격 실시간 복제<br>
• 관련: Q333 (오프사이트 필수), Q204·Q262 (사이트 분리)
</div>`,
reference:"CRM Chapter 4: Real-Time Replication / DR Strategies",
keyConcepts:[
"원격 실시간 복제|RPO≈0 + 재해 회피 동시 충족",
"로컬 vs 원격|로컬 통제는 재해 시 함께 파괴 — 지리적 분리 필수",
"두 조건 매핑|complete=실시간 / 재해=원격"
]
},

{
id: 341,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `재해 후 데이터 복원 시 백업·복원 절차의 효과성을 가장 잘 나타내는 지표는?<br><small style="color:#94a3b8">Which of the following is the BEST indicator of the effectiveness of backup and restore procedures while restoring data after a disaster?</small>`,
options: [
"복구팀 인력의 가용성<br><small style='color:#94a3b8'>Members of the recovery team were available.</small>",
"RTO 충족<br><small style='color:#94a3b8'>Recovery time objectives (RTOs) were met.</small>",
"백업 미디어 인벤토리 적절 관리<br><small style='color:#94a3b8'>Inventory of backup media was properly maintained.</small>",
"백업 미디어가 대체 사이트에서 완전히 복원됨<br><small style='color:#94a3b8'>Backup media was completely restored at an alternate site.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. RTO 충족</b> — 백업·복원 절차의 효과성은 BIA에서 정의된 RTO를 실제로 충족했는지로 판단. RTO 충족 = 사업 요구사항 충족 = 절차 효과성 입증.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">효과성 입증?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 인력 가용성</td><td style="padding:8px;border:1px solid #334155">전제 조건 — 결과 X</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. RTO 충족 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>결과 지표 — 사업 요구 충족</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 인벤토리 관리</td><td style="padding:8px;border:1px solid #334155">한 요소일 뿐</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 완전 복원</td><td style="padding:8px;border:1px solid #334155">시간 무관 — RTO 초과 시 무의미</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>효과성 = 결과 지표</b>: 절차가 의도한 사업 목표(RTO)를 달성했는가<br>
• 복원이 완료돼도(D) RTO 초과 시 사업 손실 발생 → 효과성 미입증<br>
• 인력·인벤토리는 입력·전제조건이지 결과 아님<br>
• 패턴: "효과성 지표" → 결과 지표(outcome) 선택<br>
• 관련: Q319 (PM 효과성=다운타임 로그), Q325 (심각도=다운타임)
</div>`,
reference:"CRM Chapter 4: Backup/Restore Effectiveness / RTO Validation",
keyConcepts:[
"백업·복원 효과성|RTO 충족 = 결과 지표 — 사업 요구 입증",
"효과성 패턴|입력·과정 ≠ 효과성 / 결과 지표가 효과성",
"완전 복원의 한계|시간 초과 시 무의미 — RTO가 우선"
]
},

{
id: 342,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `증분 백업(Incremental Backup) 방식을 구현하는 것이 가장 적절한 경우는?<br><small style="color:#94a3b8">It is MOST appropriate to implement an incremental backup scheme when:</small>`,
options: [
"핵심 데이터의 복구 시간이 제한된 경우<br><small style='color:#94a3b8'>there is limited recovery time for critical data.</small>",
"온라인 디스크 기반 미디어가 선호되는 경우<br><small style='color:#94a3b8'>online disk-based media are preferred.</small>",
"미디어 용량이 제한된 경우<br><small style='color:#94a3b8'>there is limited media capacity.</small>",
"백업 세트의 무작위 선택이 필요한 경우<br><small style='color:#94a3b8'>a random selection of backup sets is required.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 미디어 용량 제한</b> — 증분 백업은 마지막 백업 이후 변경된 파일만 백업하므로 미디어 사용량이 최소. 용량 제약 환경에 가장 적합.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">백업 유형</th><th style="padding:8px;border:1px solid #334155">백업 시간</th><th style="padding:8px;border:1px solid #334155">미디어 사용</th><th style="padding:8px;border:1px solid #334155">복구 시간</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">Full</td><td style="padding:8px;border:1px solid #334155">길다</td><td style="padding:8px;border:1px solid #334155">많다</td><td style="padding:8px;border:1px solid #334155">짧다 (1세트)</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">Differential</td><td style="padding:8px;border:1px solid #334155">중간</td><td style="padding:8px;border:1px solid #334155">중간</td><td style="padding:8px;border:1px solid #334155">중간 (2세트)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>Incremental ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>짧다</b></td><td style="padding:8px;border:1px solid #10b981"><b>최소</b></td><td style="padding:8px;border:1px solid #10b981"><b>길다 (다중 세트)</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Incremental</b> = 마지막 백업(Full 또는 Incremental) 이후 변경분만 백업<br>
• <b>장점</b>: 백업 시간·미디어 용량 최소<br>
• <b>단점</b>: 복구 시 Full + 모든 Incremental을 순서대로 적용 → 복구 시간 길어짐<br>
• A(짧은 RTO) → Full 또는 Differential이 적합 (Incremental 부적합)<br>
• B(미디어 종류) → 백업 방식과 무관<br>
• D(무작위 선택) → Incremental은 의존 체인 때문에 무작위 선택 불가<br>
• 트레이드오프: 백업 시간·용량 ↔ 복구 시간
</div>`,
reference:"CRM Chapter 4: Backup Types (Full/Differential/Incremental)",
keyConcepts:[
"Incremental Backup|마지막 백업 이후 변경분만 — 시간·용량 최소",
"백업 트레이드오프|용량·시간 ↓ ↔ 복구 시간 ↑",
"백업 유형 매핑|용량 제한=Incremental / 짧은 RTO=Full·Differential"
]
},

{
id: 343,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `IS 감사인이 데이터 웨어하우스 쿼리 성능이 하루 중 특정 시간에 크게 저하됨을 발견했다. 가장 관련성 있는 검토 대상 통제는?<br><small style="color:#94a3b8">An IS auditor finds that the data warehouse query performance decreases significantly at certain times of the day. Which of the following controls are MOST relevant for the IS auditor to review?</small>`,
options: [
"영구 테이블스페이스 할당<br><small style='color:#94a3b8'>Permanent table-space allocation</small>",
"커밋·롤백 통제<br><small style='color:#94a3b8'>Commitment and rollback controls</small>",
"사용자 스풀·DB 한도 통제<br><small style='color:#94a3b8'>User spool and database limit controls</small>",
"읽기/쓰기 접근 로그 통제<br><small style='color:#94a3b8'>Read/write access log controls</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 사용자 스풀·DB 한도 통제</b> — 사용자별 임시 작업 공간(spool)과 DB 사용량 제한이 없으면 잘못 작성된 쿼리·과도한 ad hoc 테이블 빌드가 자원을 독점해 다른 사용자 쿼리 성능을 저하시킴. 특정 시간대 성능 저하의 직접 원인.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">통제</th><th style="padding:8px;border:1px solid #334155">시간대별 성능 영향?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 테이블스페이스 할당</td><td style="padding:8px;border:1px solid #334155">정적 — 시간 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Commit/Rollback</td><td style="padding:8px;border:1px solid #334155">DW는 OLTP 아님 — 무관</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 스풀·DB 한도 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>피크 사용 시 자원 독점 방지</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 접근 로그</td><td style="padding:8px;border:1px solid #334155">기록만 — 성능 무관</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>DW 특성</b>: OLTP가 아니므로 Commit/Rollback 영향 X — 대신 대용량 쿼리·ad hoc 분석이 자원 소비<br>
• <b>스풀 한도</b> = 사용자별 임시 작업 공간 제한 → 잘못된 쿼리의 자원 독점 방지<br>
• <b>DB 한도</b> = 사용자 테이블 크기 제한 → 디스크·버퍼 보호<br>
• "특정 시간대 저하" = 동시 사용자 피크 시간대 → 자원 경쟁 → 한도 통제 부재 신호<br>
• 정적 통제(A·D)·OLTP 통제(B)는 시간대별 변동 설명 못 함<br>
• 관련: Q329 (Commit/Rollback은 OLTP용)
</div>`,
reference:"CRM Chapter 4: Data Warehouse Performance / Resource Limits",
keyConcepts:[
"User Spool Limit|사용자별 임시 공간 제한 — ad hoc 쿼리 자원 독점 방지",
"DW vs OLTP|DW는 Commit/Rollback 무관, 자원 한도가 핵심",
"피크 시간대 성능|자원 한도 통제 부재 = 동시 사용 시 경쟁 발생"
]
},

{
id: 344,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `IS 백업 파일용 오프사이트 저장 시설 위치 선정 시 가장 중요한 기준은? 오프사이트 시설은:<br><small style="color:#94a3b8">Which of the following is the MOST important criterion when selecting a location for an offsite storage facility for IS backup files? The offsite facility must be:</small>`,
options: [
"데이터센터와 물리적으로 분리되고 동일 위험에 노출되지 않을 것<br><small style='color:#94a3b8'>physically separated from the data center and not subject to the same risk.</small>",
"데이터센터와 동일한 수준의 보호 제공<br><small style='color:#94a3b8'>given the same level of protection as that of the computer data center.</small>",
"신뢰할 수 있는 제3자에 아웃소싱<br><small style='color:#94a3b8'>outsourced to a reliable third party.</small>",
"감시(surveillance) 기능 구비<br><small style='color:#94a3b8'>equipped with surveillance capabilities.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 물리적 분리 + 동일 위험 미노출</b> — 오프사이트의 핵심 목적은 주 사이트가 재해를 입었을 때 백업이 살아남는 것. 같은 위험 영역에 있으면 동시 파괴되어 의미 없음.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">기준</th><th style="padding:8px;border:1px solid #334155">우선순위</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 물리적 분리 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>최우선 — 오프사이트의 본질</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 동일 보호 수준</td><td style="padding:8px;border:1px solid #334155">중요하나 2차 — 더 강할 수도 있음</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 제3자 아웃소싱</td><td style="padding:8px;border:1px solid #334155">선택사항 — 자체 운영도 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 감시 기능</td><td style="padding:8px;border:1px solid #334155">물리 보안의 일부 — 부수적</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>오프사이트의 본질</b> = 지리적·위험 영역 분리 — 같은 재해 동시 영향 회피<br>
• 같은 도시·전력망·홍수지대 → 분리 의미 없음<br>
• 거리 가이드라인: 일반적 수십 km 이상, 핵심 시스템은 다른 지진대·전력망<br>
• 보호 수준(B)·소유 형태(C)·감시(D)는 선택지일 뿐 본질 아님<br>
• 패턴: "오프사이트 선정 기준" → 거의 항상 "동일 재해 회피"<br>
• 관련: Q204·Q262 (사이트 분리), Q333 (오프사이트 필수)
</div>`,
reference:"CRM Chapter 4: Offsite Storage Selection / Geographic Separation",
keyConcepts:[
"오프사이트 본질|물리적 분리 + 동일 위험 미노출 — 동시 파괴 회피",
"위험 영역 분리|지진대·전력망·홍수지대 등 인프라 의존성 분리",
"우선순위|분리 > 보호수준 > 소유형태 > 감시"
]
},

{
id: 345,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `24/7 가용성을 가장 잘 지원하는 것은?<br><small style="color:#94a3b8">Which of the following BEST supports 24/7 availability?</small>`,
options: [
"일일 백업 (Daily backup)<br><small style='color:#94a3b8'>Daily backup</small>",
"오프사이트 저장 (Offsite storage)<br><small style='color:#94a3b8'>Offsite storage</small>",
"미러링 (Mirroring)<br><small style='color:#94a3b8'>Mirroring</small>",
"정기 테스트 (Periodic testing)<br><small style='color:#94a3b8'>Periodic testing</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 미러링</b> — 핵심 요소를 실시간 복제하여 장애 시 즉시 페일오버 가능. 24/7 연속 가용성을 직접 지원하는 유일한 옵션.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">24/7 지원?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 일일 백업</td><td style="padding:8px;border:1px solid #334155">아니오 — 복원에 수시간</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 오프사이트 저장</td><td style="padding:8px;border:1px solid #334155">아니오 — 보관일 뿐</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 미러링 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>예 — 즉시 페일오버</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 정기 테스트</td><td style="padding:8px;border:1px solid #334155">아니오 — 검증일 뿐</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>24/7 가용성 = 즉시 페일오버</b> — 다운타임 0 요구<br>
• 미러링 = 실시간 복제 → 장애 시 자동 전환<br>
• 백업·저장·테스트는 모두 다른 목적 (복원·보관·검증)<br>
• 패턴: "24/7" → 미러링·실시간 복제<br>
• 관련: Q328 (RAID 1 미러링), Q340 (원격 실시간 복제), Q332 (D2D)
</div>`,
reference:"CRM Chapter 4: High Availability / Mirroring",
keyConcepts:[
"Mirroring|실시간 복제 — 즉시 페일오버, 24/7 직접 지원",
"24/7 패턴|미러링·실시간 복제만 가능",
"백업 vs 미러링|백업=복원용 / 미러링=가용성용"
]
},

{
id: 346,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `백업 서버의 무단 소프트웨어가 프로덕션 서버로 배포될 위험을 줄이는 데 가장 효과적인 프로세스는?<br><small style="color:#94a3b8">Which of the following processes will be MOST effective in reducing the risk that unauthorized software on a backup server is distributed to the production server?</small>`,
options: [
"수동 파일 복사로 복제 수행<br><small style='color:#94a3b8'>Manually copy files to accomplish replication.</small>",
"소프트웨어 버전 통제 시스템의 변경사항 검토<br><small style='color:#94a3b8'>Review changes in the software version control system.</small>",
"개발자가 백업 서버에 접근하지 못하게 함<br><small style='color:#94a3b8'>Ensure that developers do not have access to the backup server.</small>",
"백업 서버의 접근 통제 로그 검토<br><small style='color:#94a3b8'>Review the access control log of the backup server.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 버전 통제 시스템 변경 검토</b> — 소프트웨어 변경은 버전 통제 시스템(VCS)을 통해 추적되며, 승인된 버전만 프로덕션으로 이전되도록 함. VCS 로그·보고서 검토로 무단 코드 식별 가능. 가장 직접적·체계적 통제.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">효과성</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 수동 복사</td><td style="padding:8px;border:1px solid #334155">위험 증가 — 인적 실수</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. VCS 검토 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>승인 버전만 이전 — 직접 통제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 개발자 접근 차단</td><td style="padding:8px;border:1px solid #334155">예방적이나 우회 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 접근 로그 검토</td><td style="padding:8px;border:1px solid #334155">탐지만 — 누가 접근했나만</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>VCS = 단일 진실 소스(SSOT)</b>: 무엇이 승인됐고 무엇이 이전됐는지 추적<br>
• 백업 서버에 무단 코드가 있어도 VCS를 통해서만 프로덕션 이전된다면 차단 가능<br>
• <b>SoD 원칙</b>: 개발 → VCS → 빌드 → 프로덕션 (각 단계 통제)<br>
• 수동 복사(A)는 통제 우회 자체 — 가장 위험<br>
• 접근 로그(D)는 사후 탐지일 뿐 — 무단 코드 자체 식별 못 함<br>
• 관련: Q316 (소스·오브젝트 동기화), Q320 (변경관리)
</div>`,
reference:"CRM Chapter 4: Software Version Control / Production Promotion",
keyConcepts:[
"VCS 검토|승인 버전만 프로덕션 이전 — 무단 코드 차단의 직접 통제",
"SSOT|VCS = 단일 진실 소스, 모든 변경의 추적·승인",
"접근 통제 한계|로그·차단은 우회 가능 / VCS 통제는 체계적"
]
},

{
id: 347,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `파일에 보관 날짜(retention date)를 적용하면 무엇이 보장되는가?<br><small style="color:#94a3b8">Applying a retention date on a file will ensure that:</small>`,
options: [
"날짜가 설정될 때까지 데이터를 읽을 수 없음<br><small style='color:#94a3b8'>data cannot be read until the date is set.</small>",
"해당 날짜 전에는 데이터가 삭제되지 않음<br><small style='color:#94a3b8'>data will not be deleted before that date.</small>",
"백업 사본이 해당 날짜 이후 보관되지 않음<br><small style='color:#94a3b8'>backup copies are not retained after that date.</small>",
"동일 이름의 데이터셋이 구별됨<br><small style='color:#94a3b8'>datasets having the same name are differentiated.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 해당 날짜 전에는 삭제 불가</b> — Retention date는 파일이 해당 날짜 전에는 덮어쓰기·삭제되지 않도록 보장하는 메커니즘. 법적·규제 보존 요구사항 충족용.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 읽기 제한</td><td style="padding:8px;border:1px solid #334155">읽기와 무관 (접근 통제와 혼동)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 삭제 방지 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>Retention date 정의</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 백업 후 삭제</td><td style="padding:8px;border:1px solid #334155">백업은 별도 retention</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 파일 구별</td><td style="padding:8px;border:1px solid #334155">생성 날짜의 역할</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Retention Date</b> = "이 날짜 전에는 삭제·덮어쓰기 금지"<br>
• 법적 보존 명령(Legal Hold)·규제 준수(SOX·HIPAA)·e-Discovery 대응<br>
• WORM(Write Once Read Many) 스토리지의 핵심 기능<br>
• 읽기 제한과 무관 — 접근 통제는 별개<br>
• 관련: Q331 (이메일 보관 정책)
</div>`,
reference:"CRM Chapter 4: File Retention / Data Lifecycle",
keyConcepts:[
"Retention Date|해당 날짜 전 삭제·덮어쓰기 방지",
"법적 보존|규제·소송 대응의 핵심 메커니즘",
"WORM 스토리지|Write Once Read Many — Retention 강제 구현"
]
},

{
id: 348,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `WAN 사용량 검토에서 마스터와 standby DB를 동기 연결하는 사이트 간 통신선 한 라인의 트래픽이 회선 용량의 96%에서 피크에 달함을 발견했다. IS 감사인의 결론은?<br><small style="color:#94a3b8">A review of WAN usage discovers that traffic on one communication line between sites, synchronously linking the master and standby database, peaks at 96 percent of the line capacity. An IS auditor should conclude that:</small>`,
options: [
"단시간 서비스 손실을 야기하는 패턴이 나타나는지 분석 필요<br><small style='color:#94a3b8'>analysis is required to determine if a pattern emerges that results in a service loss for a short period of time.</small>",
"포화에 도달하지 않았으므로 WAN 용량은 최대 트래픽 수요에 충분<br><small style='color:#94a3b8'>WAN capacity is adequate for the maximum traffic demands because saturation has not been reached.</small>",
"약 85% 포화를 제공하도록 즉시 더 큰 용량의 회선으로 교체해야 함<br><small style='color:#94a3b8'>the line should immediately be replaced by one with a larger capacity to provide approximately 85 percent saturation.</small>",
"사용자에게 트래픽 수요를 줄이거나 모든 서비스 시간에 분산하도록 지시<br><small style='color:#94a3b8'>users should be instructed to reduce their traffic demands or distribute them across all service hours.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 패턴 분석 필요</b> — 96% 피크는 일회성 이벤트(대용량 다운로드 등)일 수도, 반복 패턴일 수도 있음. 회선 교체·사용자 지도 같은 조치를 권고하기 전에 먼저 패턴을 분석해 근본 원인을 파악해야 함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 분석 필요 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>RCA 우선 — 감사 정석</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 용량 충분</td><td style="padding:8px;border:1px solid #334155">96%는 임계 수준 — 안일한 결론</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 즉시 교체</td><td style="padding:8px;border:1px solid #334155">조급함 — 분석 없이 비용 발생</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 사용자 지도</td><td style="padding:8px;border:1px solid #334155">조급함 — 원인 미확인</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>감사인의 발견 처리 패턴</b>: 발견 → <b>RCA·분석</b> → 권고 → 보고<br>
• 96% = 우려되지만 일회성/반복성 구분 없이 결론 내릴 수 없음<br>
• 가능한 원인: (1) 일회성 대용량 전송 (2) 정기 백업 (3) 점진적 트래픽 증가 — 각각 다른 대응<br>
• 분석 후에야 적절한 권고 가능 (용량 증설/QoS/트래픽 분산 등)<br>
• 패턴: 측정값 발견 → 즉시 행동 권고는 거의 항상 오답<br>
• 관련: Q272·Q314·Q320 (RCA 우선 패턴)
</div>`,
reference:"CRM Chapter 4: WAN Capacity Management / Audit Conclusions",
keyConcepts:[
"감사 결론 패턴|발견 → RCA·분석 → 권고 — 즉시 행동 권고는 부적절",
"96% 임계값|일회성/반복성 구분이 결론의 핵심",
"안일·조급 양극단 회피|B(안일)·C·D(조급) 모두 분석 우선 원칙 위반"
]
},

{
id: 349,
domain: "4",
ks: "4B3 Data Backup, Storage, and Restoration",
question: `RPO에서 정의된 매우 세분화된 데이터 복원 시점이 필요한 조직에 가장 적합한 백업 기법은?<br><small style="color:#94a3b8">Which of the following backup techniques is the MOST appropriate when an organization requires extremely granular data restore points, as defined in the RPO?</small>`,
options: [
"가상 테이프 라이브러리 (VTL)<br><small style='color:#94a3b8'>Virtual tape libraries</small>",
"디스크 기반 스냅샷<br><small style='color:#94a3b8'>Disk-based snapshots</small>",
"지속적 데이터 백업 (CDB/CDP)<br><small style='color:#94a3b8'>Continuous data backup</small>",
"디스크-투-테이프 백업<br><small style='color:#94a3b8'>Disk-to-tape backup</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 지속적 데이터 백업 (Continuous Data Protection, CDP)</b> — 실시간으로 모든 변경을 기록하므로 RPO가 거의 0에 가까운 매우 세분화된 복원 시점 제공. 다른 기법은 모두 백업 주기 사이에 데이터 손실 발생.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">기법</th><th style="padding:8px;border:1px solid #334155">백업 주기</th><th style="padding:8px;border:1px solid #334155">복원 시점 세분화</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. VTL</td><td style="padding:8px;border:1px solid #334155">스케줄 기반</td><td style="padding:8px;border:1px solid #334155">중간</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 스냅샷</td><td style="padding:8px;border:1px solid #334155">주기적 (시간/일)</td><td style="padding:8px;border:1px solid #334155">중간 — 주기 간 손실</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. CDP ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>실시간 (모든 변경)</b></td><td style="padding:8px;border:1px solid #10b981"><b>최대 세분화 (RPO≈0)</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. D2T</td><td style="padding:8px;border:1px solid #334155">스케줄 기반</td><td style="padding:8px;border:1px solid #334155">낮음</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>CDP = Continuous Data Protection</b>: 모든 쓰기 작업을 실시간 캡처<br>
• <b>임의 시점 복구(Any Point in Time, APIT)</b> 가능 — 분 단위가 아닌 초 단위<br>
• 스냅샷(B)도 우수하지만 주기적이라 주기 간 데이터 손실 발생<br>
• RPO가 매우 짧을수록 → CDP / 짧음 → 스냅샷 / 보통 → VTL/D2T<br>
• 패턴: "extremely granular RPO" → CDP<br>
• 관련: Q324·Q326·Q334·Q339 (RPO 시리즈), Q340 (실시간 복제)
</div>`,
reference:"CRM Chapter 4: Continuous Data Protection / Granular RPO",
keyConcepts:[
"CDP|모든 변경 실시간 캡처 — Any Point in Time 복구",
"세분화 vs 주기|CDP=초단위 / 스냅샷=분~시간 / VTL·D2T=일단위",
"RPO 매핑|매우 세분화=CDP / 분단위=스냅샷 / 일단위=VTL·D2T"
]
},

{
id: 350,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `주 정보처리 시설(IPF)의 하드웨어 교체 후, 사업연속성 관리자가 가장 먼저 수행해야 할 활동은?<br><small style="color:#94a3b8">Which of the following activities should the business continuity manager perform FIRST after the replacement of hardware at the primary information processing facility (IPF)?</small>`,
options: [
"핫 사이트와의 호환성 검증<br><small style='color:#94a3b8'>Verify compatibility with the hot site.</small>",
"구현 보고서 검토<br><small style='color:#94a3b8'>Review the implementation report.</small>",
"DRP 워크스루 수행<br><small style='color:#94a3b8'>Perform a walk-through of the disaster recovery plan (DRP).</small>",
"IT 자산 인벤토리 갱신<br><small style='color:#94a3b8'>Update the IT assets inventory.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. IT 자산 인벤토리 갱신</b> — IT 자산 인벤토리는 BCP/DRP의 기본 입력. 인프라 변경(하드웨어 교체)을 반영해야 모든 후속 활동(호환성 검증·워크스루)이 정확한 정보 위에서 수행됨.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">활동</th><th style="padding:8px;border:1px solid #334155">순서</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 호환성 검증</td><td style="padding:8px;border:1px solid #334155">2단계 — 인벤토리 후</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 구현 보고서</td><td style="padding:8px;border:1px solid #334155">제한적 가치 — 이미 설치됨</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. DRP 워크스루</td><td style="padding:8px;border:1px solid #334155">3단계 — 인벤토리·호환성 후</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 인벤토리 갱신 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>1단계 — 모든 BCP 활동의 기본 입력</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 활동 순서</b>: 인벤토리 갱신 → 호환성 검증 → 워크스루 → 테스트<br>
• 인벤토리 = BCP/DRP의 <b>SSOT(Single Source of Truth)</b><br>
• 인벤토리 미갱신 상태에서 호환성 검증·워크스루는 잘못된 정보 기반 → 의미 없음<br>
• 패턴: "FIRST" 질문 → 거의 항상 기초·기본 입력이 정답<br>
• 관련: Q272·Q314 (BIA = BCP의 토대)
</div>`,
reference:"CRM Chapter 4: BCP Maintenance / IT Asset Inventory",
keyConcepts:[
"IT 자산 인벤토리|BCP/DRP의 기본 입력 — 모든 후속 활동의 토대",
"BCP 변경 순서|인벤토리 → 호환성 → 워크스루 → 테스트",
"FIRST 패턴|기초·기본 입력 갱신이 항상 우선"
]
},

{
id: 351,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 검토 중 IS 감사인이 위기 상황 선언 시점이 정의되지 않은 것을 발견했다. 이와 관련된 주된 위험은?<br><small style="color:#94a3b8">During a review of a BCP, an IS auditor noticed that the point at which a situation is declared to be a crisis has not been defined. The MAJOR risk associated with this is that:</small>`,
options: [
"대응·복구 조치가 너무 일찍 시작됨<br><small style='color:#94a3b8'>response and recovery actions are initiated too early.</small>",
"위기 시 적절한 대응·복구 조치 활성화 지연<br><small style='color:#94a3b8'>activating the appropriate response and recovery actions are delayed during a crisis.</small>",
"위기 상황이 과소평가되거나 간과될 수 있음<br><small style='color:#94a3b8'>crisis situations may be underestimated or overlooked.</small>",
"BCP가 너무 경직될 수 있음<br><small style='color:#94a3b8'>the BCP may become too rigid.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 대응·복구 조치 활성화 지연</b> — 위기 선언 기준이 없으면 언제 에스컬레이션해야 할지 불확실하고 의사결정이 혼란스러워 자원 동원·핵심 조치 실행이 지연. 시간 손실 = 위기 영향 확대로 가장 심각한 위험.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">위험</th><th style="padding:8px;border:1px solid #334155">심각도</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 너무 일찍 시작</td><td style="padding:8px;border:1px solid #334155">불필요 비용 — 가역적</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 활성화 지연 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>최대 — 사업 손실 확대</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 과소평가</td><td style="padding:8px;border:1px solid #334155">우려되나 B만큼 직접적 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 경직성</td><td style="padding:8px;border:1px solid #334155">2차적 — 효율성 문제</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>위기 선언 기준(Declaration Threshold)</b> = BCP 발동의 트리거<br>
• 기준 부재 → "지금이 위기인가?" 의사결정 마비 → 골든타임 손실<br>
• 위기 영향은 시간이 지날수록 기하급수적 증가 → 지연이 가장 큰 위험<br>
• 너무 일찍 시작(A)은 비용일 뿐 가역적, 지연은 비가역적<br>
• 패턴: BCP·사고관리 시간성 → 지연이 항상 가장 큰 위험<br>
• 관련: Q325 (심각도=다운타임), Q330 (RTO 미충족)
</div>`,
reference:"CRM Chapter 4: Crisis Declaration / BCP Activation",
keyConcepts:[
"Declaration Threshold|위기 선언 기준 — BCP 발동 트리거",
"지연 위험|골든타임 손실 — 위기 영향 기하급수적 확대",
"시간성 위험|조기 시작(가역) < 지연(비가역)"
]
},

{
id: 352,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP를 검토하는 IS 감사인에게 가장 큰 우려사항은?<br><small style="color:#94a3b8">Which of the following would be a MAJOR concern for an IS auditor reviewing a business continuity plan?</small>`,
options: [
"계획이 CIO에 의해 승인됨<br><small style='color:#94a3b8'>The plan is approved by the chief information officer.</small>",
"계획의 연락처 목록이 갱신되지 않음<br><small style='color:#94a3b8'>The plan contact lists have not been updated.</small>",
"테스트 결과가 적절히 문서화되지 않음<br><small style='color:#94a3b8'>Test results are not adequately documented.</small>",
"복구 인력 교육 일정이 포함되지 않음<br><small style='color:#94a3b8'>The training schedule for recovery personnel is not included.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 테스트 결과 미문서화</b> — BCP 효과성은 테스트로만 검증 가능하며, 결과가 문서화되지 않으면 피드백·개선·갱신의 근거가 없음. BCP의 지속적 개선 사이클이 끊김.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">심각도</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. CIO 승인</td><td style="padding:8px;border:1px solid #334155">이상적이진 않으나 위임 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 연락처 미갱신</td><td style="padding:8px;border:1px solid #334155">중요하나 단일 항목</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 테스트 결과 미문서화 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>최대 — BCP 검증·개선 불가</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 교육 일정 누락</td><td style="padding:8px;border:1px solid #334155">중요하나 테스트 결과로 식별 가능</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 사이클</b>: 계획 → 테스트 → 결과 문서화 → 피드백 → 갱신<br>
• 테스트 결과 문서화가 사이클의 핵심 연결고리 — 빠지면 모든 후속 활동 마비<br>
• 연락처(B)·교육(D)는 테스트 결과를 통해 식별·개선되는 항목<br>
• <b>"검증되지 않은 BCP는 BCP가 아니다"</b><br>
• 패턴: BCP 효과성·개선 → 테스트 결과 문서화가 핵심
</div>`,
reference:"CRM Chapter 4: BCP Testing / Documentation Requirements",
keyConcepts:[
"테스트 결과 문서화|BCP 사이클의 핵심 연결고리 — 피드백·개선의 기반",
"BCP 사이클|계획 → 테스트 → 문서화 → 피드백 → 갱신",
"검증 원칙|테스트되지 않은 BCP는 효과성 입증 불가"
]
},

{
id: 353,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 설계 중 BIA가 핵심 프로세스와 지원 애플리케이션을 식별한다. 이는 주로 무엇에 영향을 미치는가?<br><small style="color:#94a3b8">During the design of a BCP, the BIA identifies critical processes and supporting applications. This will PRIMARILY influence the:</small>`,
options: [
"BCP 유지 책임<br><small style='color:#94a3b8'>responsibility for maintaining the BCP.</small>",
"복구 사이트 공급자 선정 기준<br><small style='color:#94a3b8'>criteria for selecting a recovery site provider.</small>",
"복구 전략<br><small style='color:#94a3b8'>recovery strategy.</small>",
"핵심 인력의 책임<br><small style='color:#94a3b8'>responsibilities of key personnel.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 복구 전략</b> — BIA에서 식별된 상대적 위험·타임라인·중요도가 가장 적절한 복구 전략(사이트 유형, RTO/RPO 충족 방식 등)을 결정. 다른 모든 BCP 요소는 복구 전략이 정해진 후 도출됨.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">BIA의 영향</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. BCP 유지 책임</td><td style="padding:8px;border:1px solid #334155">계획 개발 후 결정</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 사이트 공급자 기준</td><td style="padding:8px;border:1px solid #334155">전략 결정 후 도출</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 복구 전략 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>BIA의 직접 산출물</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 인력 책임</td><td style="padding:8px;border:1px solid #334155">계획 개발 단계에서 결정</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 설계 흐름</b>: BIA → <b>복구 전략</b> → 사이트 선정 → 인력·책임 → 유지·테스트<br>
• BIA = 무엇이 critical하고 얼마나 빨리 복구해야 하는지 정의<br>
• 복구 전략 = BIA 결과를 어떻게 충족할지의 청사진<br>
• 사이트·인력·유지 책임은 모두 전략의 종속 결정사항<br>
• 패턴: "BIA는 무엇에 영향?" → 거의 항상 복구 전략<br>
• 관련: Q272·Q305·Q310·Q314 (BIA의 토대 역할)
</div>`,
reference:"CRM Chapter 4: BIA → Recovery Strategy",
keyConcepts:[
"BIA → 복구 전략|BIA의 직접 산출물 — RTO/RPO·중요도가 전략 결정",
"BCP 설계 흐름|BIA → 전략 → 사이트 → 인력 → 유지·테스트",
"BIA 영향 패턴|항상 복구 전략이 1차 결정사항"
]
},

{
id: 354,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `핵심 제3자 애플리케이션 검토 시 IS 감사인이 가장 우려하는 발견사항은?<br><small style="color:#94a3b8">While performing a review of a critical third-party application, an IS auditor is MOST concerned with discovering:</small>`,
options: [
"시스템 이식성(portability) 보장 절차 미흡<br><small style='color:#94a3b8'>inadequate procedures for ensuring adequate system portability.</small>",
"시스템 운영 문서 미흡<br><small style='color:#94a3b8'>inadequate operational documentation for the system.</small>",
"대체 서비스 공급자 목록 미흡<br><small style='color:#94a3b8'>an inadequate alternate service provider listing.</small>",
"소프트웨어 에스크로 계약 미흡<br><small style='color:#94a3b8'>an inadequate software escrow agreement.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 소프트웨어 에스크로 계약 미흡</b> — 에스크로 계약은 벤더 폐업·서비스 중단 시 고객이 소스 코드에 접근하여 시스템을 계속 사용·유지할 수 있게 보장. 핵심 애플리케이션의 가용성을 보호하는 가장 중요한 통제.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">우려사항</th><th style="padding:8px;border:1px solid #334155">사업 영향</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 이식성 미흡</td><td style="padding:8px;border:1px solid #334155">인프라 변경 시 영향 — 우회 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 운영 문서 미흡</td><td style="padding:8px;border:1px solid #334155">운영 어려움 — 사업 연속성 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 대체 공급자 목록</td><td style="padding:8px;border:1px solid #334155">대안 — 소스 코드 접근이 우선</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 에스크로 미흡 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>벤더 폐업 시 시스템 사용 불가</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Software Escrow</b>: 제3자 보관 기관에 소스 코드·문서를 보관, 트리거 조건(폐업·중단) 발생 시 고객에게 공개<br>
• 핵심 애플리케이션 = 벤더 의존성 위험이 가장 큼 — 벤더 폐업 시 사업 마비<br>
• 에스크로 = 가용성·연속성의 마지막 보호막<br>
• 다른 옵션은 모두 운영상 불편이지만 시스템 자체는 사용 가능<br>
• 패턴: "제3자 핵심 시스템" → 에스크로가 가장 큰 BCP 우려<br>
• 관련: Q333 (오프사이트 백업), Q344 (오프사이트 위치)
</div>`,
reference:"CRM Chapter 4: Software Escrow / Third-Party Risk",
keyConcepts:[
"Software Escrow|벤더 폐업 시 소스 코드 접근 보장 — 가용성 마지막 보호막",
"제3자 의존성 위험|핵심 애플리케이션 벤더 폐업 = 사업 마비",
"BCP 우려 우선순위|에스크로(가용성) > 문서·이식성·대체공급자(운영)"
]
},

{
id: 355,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 전체 시뮬레이션 관찰 중, IS 감사인이 조직 시설 내 알림 시스템이 인프라 손상에 의해 심각하게 영향받을 수 있음을 발견했다. 가장 적절한 권고는?<br><small style="color:#94a3b8">An IS auditor notices that the notification systems within the organizational facilities can be severely impacted by infrastructure damage. The BEST recommendation:</small>`,
options: [
"구조팀이 알림 시스템 사용 교육을 받도록 함<br><small style='color:#94a3b8'>the salvage team is trained to use the notification system.</small>",
"알림 시스템이 백업 복구를 제공하도록 함<br><small style='color:#94a3b8'>the notification system provides for the recovery of the backup.</small>",
"알림 시스템에 중복성(redundancy) 구축<br><small style='color:#94a3b8'>redundancies are built into the notification system.</small>",
"알림 시스템을 금고(vault)에 보관<br><small style='color:#94a3b8'>the notification systems are stored in a vault.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 중복성 구축</b> — 알림 시스템이 인프라 손상에 영향받는다면 단일 장애점이 존재. 중복성(독립 통신 채널·대체 시스템)을 구축해야 한 시스템이 손상돼도 다른 시스템이 동작.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 교육</td><td style="padding:8px;border:1px solid #334155">손상된 시스템은 사용 불가</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 백업 복구 제공</td><td style="padding:8px;border:1px solid #334155">알림 시스템과 무관</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 중복성 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>SPOF 제거 — 직접 해결</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 금고 보관</td><td style="padding:8px;border:1px solid #334155">건물 손상 시 무의미</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>SPOF(단일 장애점) 제거</b>: 중복성이 핵심 원칙<br>
• 알림 시스템 중복화 예: 유선+무선, 전화+문자+이메일, 자체+클라우드, 본사+오프사이트<br>
• 위기 시 통신 = 모든 BCP 활동의 전제 조건 → 통신 두절 = BCP 마비<br>
• 교육·금고는 시스템이 살아있을 때만 의미 — 손상되면 무용지물<br>
• 패턴: 인프라 단일 장애점 → 중복성·다양화가 정답
</div>`,
reference:"CRM Chapter 4: BCP Communications / Redundancy",
keyConcepts:[
"알림 시스템 중복성|SPOF 제거 — 통신 두절은 BCP 마비",
"위기 통신|모든 BCP 활동의 전제 조건 — 다양한 채널 필수",
"SPOF 제거 패턴|인프라 단일 장애점 → 중복성·다양화"
]
},

{
id: 356,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `여러 국가에 IT 운영 센터를 가진 조직에서 중단 없는 운영을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Which of the following BEST ensures uninterrupted operations in an organization with IT operation centers in several countries?</small>`,
options: [
"핵심 절차 문서의 배포<br><small style='color:#94a3b8'>Distribution of key procedural documentation</small>",
"사업 파트너 간 상호 협약<br><small style='color:#94a3b8'>Reciprocal agreement between business partners</small>",
"강력한 고위 경영진 리더십<br><small style='color:#94a3b8'>Strong senior management leadership</small>",
"BCP에 대한 직원 교육<br><small style='color:#94a3b8'>Employee training on the BCP</small>"
],
correct: 3,
explanation: `<p><b>정답: D. BCP 직원 교육</b> — 재해 시 지휘 체계가 끊길 수 있으므로 직원들이 자신의 역할을 직접 이해해야 함. 지리적으로 분산된 조직은 통신 단절 가능성이 높아 교육이 더욱 중요.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 문서 배포</td><td style="padding:8px;border:1px solid #334155">필요하나 문서만으론 부족 — 이해·실행 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 상호 협약</td><td style="padding:8px;border:1px solid #334155">시설 옵션 — 운영 자체 보장 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 경영진 리더십</td><td style="padding:8px;border:1px solid #334155">재해 시 가용 보장 어려움</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 직원 교육 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>지휘 끊겨도 자율 실행 가능</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>분산 조직 + 재해</b>: 통신·지휘 단절 가능성 ↑ → 자율 실행 능력 필수<br>
• 문서(A)는 정적 — 직원이 읽고 이해·연습해야 효과<br>
• 경영진(C)은 재해 시 가용 보장 안 됨 — 의존하면 위험<br>
• 교육 = 직원이 자신의 역할을 내재화 → 지휘 없이도 실행<br>
• 패턴: BCP 효과성 → 사람(교육·인식)이 시스템·문서보다 우선<br>
• 관련: Q352 (BCP 테스트 결과 문서화), Q355 (통신 중복성)
</div>`,
reference:"CRM Chapter 4: BCP Training / Geographic Distribution",
keyConcepts:[
"BCP 직원 교육|지휘 끊겨도 자율 실행 — 분산 조직의 핵심",
"문서 vs 교육|문서는 정적 / 교육은 내재화·실행 능력",
"분산 조직 BCP|통신 단절 가능성 ↑ → 자율 실행 능력 필수"
]
},

{
id: 357,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `IS 감사인은 조직의 BCP가 효과적임을 무엇을 검토하여 검증할 수 있는가?<br><small style="color:#94a3b8">An IS auditor can verify that an organization's BCP is effective by reviewing the:</small>`,
options: [
"BCP의 업계 모범 사례와의 정합성<br><small style='color:#94a3b8'>alignment of the BCP with industry good practices.</small>",
"IS 및 최종사용자 인력이 수행한 사업연속성 테스트 결과<br><small style='color:#94a3b8'>results of business continuity tests performed by IS and end-user personnel.</small>",
"오프사이트 시설과 그 내용물·보안·환경 통제<br><small style='color:#94a3b8'>offsite facility, its contents, security and environmental controls.</small>",
"BCP 활동의 연간 재무 비용 대비 구현 기대 효익<br><small style='color:#94a3b8'>annual financial cost of the BCP activities versus the expected benefit of the implementation of the plan.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 사업연속성 테스트 결과</b> — BCP 효과성은 실제 테스트에서 명시된 목표를 정확하고 철저하게 달성했는지로만 검증 가능. 정합성·시설·비용은 효과성과 무관.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">효과성 입증?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 업계 정합성</td><td style="padding:8px;border:1px solid #334155">설계 품질 — 효과성 X</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 테스트 결과 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>유일한 직접 증거</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 오프사이트 시설</td><td style="padding:8px;border:1px solid #334155">자원 — 효과성 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 비용 대비 효익</td><td style="padding:8px;border:1px solid #334155">재무 분석 — 효과성 X</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"검증되지 않은 BCP는 BCP가 아니다"</b> 원칙의 재확인<br>
• 효과성 = 결과 지표 — 테스트만이 실제 성과 입증<br>
• 정합성·시설·비용은 모두 입력·전제조건이지 결과 아님<br>
• 패턴: "BCP 효과성 검증" → 항상 테스트 결과<br>
• 관련: Q319·Q325·Q330·Q341·Q352 (효과성 = 결과 지표)
</div>`,
reference:"CRM Chapter 4: BCP Effectiveness / Test Results",
keyConcepts:[
"BCP 효과성 검증|테스트 결과만이 유일한 직접 증거",
"검증 원칙|테스트되지 않은 BCP는 효과성 입증 불가",
"입력 vs 결과|정합성·시설·비용=입력 / 테스트 결과=효과성"
]
},

{
id: 358,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `재해 시 트랜잭션의 가용성을 보장하는 방법은?<br><small style="color:#94a3b8">Which of the following ensures the availability of transactions in the event of a disaster?</small>`,
options: [
"트랜잭션을 포함한 시간당 백업을 오프사이트로 전송<br><small style='color:#94a3b8'>Send hourly backups containing transactions offsite.</small>",
"트랜잭션을 포함한 일일 백업을 오프사이트로 전송<br><small style='color:#94a3b8'>Send daily backups containing transactions offsite.</small>",
"트랜잭션을 다중 저장 장치에 캡처<br><small style='color:#94a3b8'>Capture transactions to multiple storage devices.</small>",
"트랜잭션을 실시간으로 오프사이트에 전송<br><small style='color:#94a3b8'>Transmit transactions offsite in real time.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 실시간 오프사이트 전송</b> — 모든 트랜잭션의 가용성을 보장하는 유일한 방법. 시간당·일일 백업은 백업 사이의 데이터 손실 발생, 다중 로컬 저장은 재해 시 함께 파괴.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">데이터 손실</th><th style="padding:8px;border:1px solid #334155">재해 회피?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 시간당 백업</td><td style="padding:8px;border:1px solid #334155">최대 1시간</td><td style="padding:8px;border:1px solid #334155">예</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 일일 백업</td><td style="padding:8px;border:1px solid #334155">최대 24시간</td><td style="padding:8px;border:1px solid #334155">예</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 다중 로컬</td><td style="padding:8px;border:1px solid #334155">0</td><td style="padding:8px;border:1px solid #334155">아니오 (로컬)</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 실시간 오프사이트 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>0</b></td><td style="padding:8px;border:1px solid #10b981"><b>예</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"모든 트랜잭션 가용성"</b> = RPO 0 + 재해 회피<br>
• 두 조건 동시 충족 = 실시간 + 오프사이트<br>
• Q340과 동일한 패턴 — 두 조건 매핑<br>
• 관련: Q340 (원격 실시간 복제), Q349 (CDP), Q345 (24/7 미러링)
</div>`,
reference:"CRM Chapter 4: Real-Time Transaction Availability",
keyConcepts:[
"실시간 + 오프사이트|모든 트랜잭션 가용성의 유일 해법",
"두 조건 매핑|RPO 0=실시간 / 재해 회피=오프사이트",
"백업 주기 한계|어떤 주기든 사이의 손실 발생"
]
},

{
id: 359,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `한 조직이 연간 위험 평가를 막 완료했다. BCP에 관해 IS 감사인이 다음 단계로 권고해야 할 것은?<br><small style="color:#94a3b8">An organization has just completed its annual risk assessment. Regarding the BCP, what should an IS auditor recommend as the next step?</small>`,
options: [
"BCP의 적정성을 검토·평가<br><small style='color:#94a3b8'>Review and evaluate the BCP for adequacy.</small>",
"BCP 전체 시뮬레이션 수행<br><small style='color:#94a3b8'>Perform a full simulation of the BCP.</small>",
"BCP에 대해 직원 교육<br><small style='color:#94a3b8'>Train and educate employees regarding the BCP.</small>",
"BCP의 핵심 연락처에 통지<br><small style='color:#94a3b8'>Notify critical contacts in the BCP.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. BCP 적정성 검토·평가</b> — 위험 평가가 완료될 때마다 BCP를 검토하여 새로운 위험이 반영됐는지 확인해야 함. 시뮬레이션·교육은 BCP가 적정하다고 판단된 후에 수행.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">활동</th><th style="padding:8px;border:1px solid #334155">순서</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 검토·평가 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>1단계 — RA 직후</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 시뮬레이션</td><td style="padding:8px;border:1px solid #334155">2단계 — 적정성 확인 후</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 교육</td><td style="padding:8px;border:1px solid #334155">2단계 — 적정성 확인 후</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 연락처 통지</td><td style="padding:8px;border:1px solid #334155">불필요 — 위기 상황 아님</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RA → BCP 검토 → 갱신 → 테스트 → 교육</b> 순서<br>
• 위험 평가는 BCP의 입력 — 새로운 위험·변경된 위험을 BCP에 반영해야 함<br>
• 적정성 확인 없는 시뮬레이션·교육은 잘못된 계획을 학습시킬 위험<br>
• 패턴: "RA 직후" → BCP 적정성 검토<br>
• 관련: Q350 (HW 교체 후 인벤토리 갱신 우선), Q353 (BIA → 전략)
</div>`,
reference:"CRM Chapter 4: Risk Assessment → BCP Review",
keyConcepts:[
"RA → BCP 검토|위험 평가 후 BCP 적정성 검토가 첫 단계",
"BCP 갱신 사이클|RA → 검토 → 갱신 → 테스트 → 교육",
"적정성 우선|잘못된 계획의 시뮬레이션·교육은 위험"
]
},

{
id: 360,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP를 IT 프로젝트 관리에 통합하는 것은 무엇에 도움이 되는가?<br><small style="color:#94a3b8">Integrating the business continuity plan (BCP) into IT project management aids in:</small>`,
options: [
"사업연속성 요구사항의 테스트<br><small style='color:#94a3b8'>the testing of the business continuity requirements.</small>",
"보다 포괄적인 요구사항의 개발<br><small style='color:#94a3b8'>the development of a more comprehensive set of requirements.</small>",
"트랜잭션 흐름도의 개발<br><small style='color:#94a3b8'>the development of a transaction flowchart.</small>",
"애플리케이션이 사용자 요구를 충족하도록 보장<br><small style='color:#94a3b8'>ensuring the application meets the users' needs.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 보다 포괄적인 요구사항 개발</b> — BCP를 IT 프로젝트 관리에 통합하면 프로젝트의 각 단계에서 사업연속성 요구사항이 빠짐없이 반영됨. 결과적으로 가용성·복구·내결함성을 포함한 포괄적 요구사항 도출.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. BCP 테스트</td><td style="padding:8px;border:1px solid #334155">프로젝트 관리와 무관</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 포괄적 요구사항 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>각 단계에서 BC 요구 반영</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 트랜잭션 흐름도</td><td style="padding:8px;border:1px solid #334155">통제 분석 — BC와 무관</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 사용자 요구 충족</td><td style="padding:8px;border:1px solid #334155">기능 요구 — BC 직접 X</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Shift-Left 원칙</b>: BCP를 프로젝트 초기에 통합 → 가용성·복구 요구사항을 처음부터 설계에 반영<br>
• 사후 추가는 비용·복잡도 폭증 — "Build for Resilience" 사고방식<br>
• BCP 통합 → 백업·복제·페일오버·모니터링이 기능 요구와 동등하게 다뤄짐<br>
• 패턴: "BCP 통합" → 요구사항·설계의 포괄성 향상<br>
• 관련: Q353 (BIA → 복구 전략)
</div>`,
reference:"CRM Chapter 4: BCP Integration / Project Lifecycle",
keyConcepts:[
"BCP 프로젝트 통합|초기 단계부터 BC 요구 반영 — Shift-Left",
"포괄적 요구사항|기능 + 가용성·복구·내결함성 통합 도출",
"Build for Resilience|사후 추가는 비용·복잡도 폭증"
]
},

{
id: 361,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 개발 측면에서 가장 중요한 이해관계자는?<br><small style="color:#94a3b8">Which of the following stakeholders is the MOST important in terms of developing a BCP?</small>`,
options: [
"프로세스 소유자<br><small style='color:#94a3b8'>Process owners</small>",
"애플리케이션 소유자<br><small style='color:#94a3b8'>Application owners</small>",
"이사회<br><small style='color:#94a3b8'>Board of directors</small>",
"IT 경영진<br><small style='color:#94a3b8'>IT management</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 프로세스 소유자</b> — BCP는 사업 프로세스의 연속성에 관한 것. 프로세스 소유자가 핵심 사업 기능·복구 시간·필요 자원을 식별하는 가장 중요한 입력 제공자.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">이해관계자</th><th style="padding:8px;border:1px solid #334155">역할</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 프로세스 소유자 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>핵심 기능·RTO/RPO·자원 정의</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 앱 소유자</td><td style="padding:8px;border:1px solid #334155">앱 ⊂ 프로세스 — 종속 관계</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 이사회</td><td style="padding:8px;border:1px solid #334155">승인만 — 세부 개발 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. IT 경영진</td><td style="padding:8px;border:1px solid #334155">기술 자원 식별 — 사업 정의는 X</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><   br>
• <b>BCP 본질</b>: 사업 프로세스 연속성 (IT 연속성 X)<br>
• 프로세스 소유자 = 무엇이 critical인지 아는 유일한 사람 — BIA의 주된 입력 제공자<br>
• IT는 프로세스 소유자가 정의한 요구를 충족하는 수단<br>
• 패턴: "BCP 핵심 이해관계자" → 항상 비즈니스(프로세스 소유자)<br>
• 관련: Q353 (BIA → 전략), Q272·Q314·Q305 (BIA 토대)
</div>`,
reference:"CRM Chapter 4: BCP Stakeholders / Business Ownership",
keyConcepts:[
"프로세스 소유자|핵심 기능·RTO/RPO 정의 — BIA의 주된 입력자",
"BCP 본질|사업 프로세스 연속성 (IT 연속성 X)",
"비즈니스 우선|IT는 비즈니스 요구를 충족하는 수단"
]
},

{
id: 362,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 효과성을 평가하는 가장 좋은 방법은 무엇을 검토하는 것인가?<br><small style="color:#94a3b8">The BEST method for assessing the effectiveness of a BCP is to review the:</small>`,
options: [
"계획을 적절한 표준과 비교<br><small style='color:#94a3b8'>plans and compare them to appropriate standards.</small>",
"이전 테스트 결과<br><small style='color:#94a3b8'>results from previous tests.</small>",
"비상 절차와 직원 교육<br><small style='color:#94a3b8'>emergency procedures and employee training.</small>",
"오프사이트 저장과 환경 통제<br><small style='color:#94a3b8'>offsite storage and environmental controls.</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 이전 테스트 결과</b> — Q357과 동일 패턴: BCP 효과성은 실제 테스트 결과만이 직접 증거. 표준 비교·절차 검토·시설 검토는 모두 입력·전제조건이지 효과성 증거가 아님.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">효과성 증거?</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 표준 비교</td><td style="padding:8px;border:1px solid #334155">설계 적정성만 — 효과성 X</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. 테스트 결과 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>유일한 직접 증거</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 절차·교육</td><td style="padding:8px;border:1px solid #334155">부분 통찰 — 전체 효과 X</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 시설</td><td style="padding:8px;border:1px solid #334155">자원만 — 효과성 X</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"검증되지 않은 BCP는 BCP가 아니다"</b> 원칙 재확인<br>
• Q357과 동일 — 효과성은 결과 지표(테스트)로만 증명<br>
• 패턴: "BCP 효과성 평가" → 항상 테스트 결과<br>
• 관련: Q319·Q325·Q330·Q341·Q352·Q357 (효과성 = 결과 지표 시리즈)
</div>`,
reference:"CRM Chapter 4: BCP Effectiveness Assessment",
keyConcepts:[
"BCP 효과성|테스트 결과만이 직접 증거",
"효과성 평가 원칙|입력·자원 ≠ 효과성 / 결과 지표만 인정",
"Q357 동일 패턴|효과성 = 테스트 결과"
]
},

{
id: 363,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP에 적용할 수 있는 적절한 테스트 방법은?<br><small style="color:#94a3b8">Which of the following is an appropriate test method to apply to a business continuity plan (BCP)?</small>`,
options: [
"파일럿 (Pilot)<br><small style='color:#94a3b8'>Pilot</small>",
"페이퍼 (Paper)<br><small style='color:#94a3b8'>Paper</small>",
"유닛 (Unit)<br><small style='color:#94a3b8'>Unit</small>",
"시스템 (System)<br><small style='color:#94a3b8'>System</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 페이퍼 테스트 (Paper Test, Desk Check)</b> — BCP의 전체 또는 일부를 BCP 실행의 주요 참여자가 함께 검토하며 특정 재해 상황에서 무엇이 일어날지 워크스루하는 방식. BCP 테스트의 가장 기본적이고 적절한 형태.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">테스트</th><th style="padding:8px;border:1px solid #334155">적용 대상</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. Pilot</td><td style="padding:8px;border:1px solid #334155">신규 프로세스·기술 도입</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>B. Paper ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>BCP 워크스루</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. Unit</td><td style="padding:8px;border:1px solid #334155">신규 소프트웨어 컴포넌트</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. System</td><td style="padding:8px;border:1px solid #334155">통합 IT 시스템</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 테스트 유형 (점진적 강도)</b>:<br>
&nbsp;&nbsp;1. <b>Checklist</b>: 문서 검토<br>
&nbsp;&nbsp;2. <b>Structured Walk-through (Paper)</b>: 회의실 시뮬레이션<br>
&nbsp;&nbsp;3. <b>Simulation</b>: 시나리오 기반 모의 훈련<br>
&nbsp;&nbsp;4. <b>Parallel</b>: 대체 사이트에서 병렬 처리<br>
&nbsp;&nbsp;5. <b>Full Interruption</b>: 실제 운영 중단 후 대체 사이트 전환<br>
• Pilot·Unit·System은 SDLC 테스트 — BCP와 무관<br>
• 패턴: BCP 테스트 → Checklist·Walk-through·Simulation·Parallel·Full
</div>`,
reference:"CRM Chapter 4: BCP Test Methods",
keyConcepts:[
"Paper Test|BCP 워크스루 — 회의실 기반 시뮬레이션",
"BCP 테스트 5단계|Checklist → Walk-through → Simulation → Parallel → Full",
"SDLC vs BCP 테스트|Pilot·Unit·System=SDLC / Paper=BCP"
]
},

{
id: 364,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `위기관리·대응팀의 관련 구성원이 참여하여 적절한 협력을 연습하는 BCP 테스트는?<br><small style="color:#94a3b8">Which of the following BCP tests involves participation of relevant members of the crisis management/response team to practice proper coordination?</small>`,
options: [
"테이블탑 (Tabletop)<br><small style='color:#94a3b8'>Tabletop</small>",
"기능 테스트 (Functional)<br><small style='color:#94a3b8'>Functional</small>",
"전면 테스트 (Full-scale)<br><small style='color:#94a3b8'>Full-scale</small>",
"데스크 체크 (Desk check)<br><small style='color:#94a3b8'>Desk check</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 테이블탑 (Tabletop)</b> — 위기팀 구성원이 모여 시나리오를 함께 검토하며 협력·의사소통을 연습하는 데 초점. 기술적 세부보다 조정·역할 명확화가 주된 목적.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">테스트</th><th style="padding:8px;border:1px solid #334155">초점</th><th style="padding:8px;border:1px solid #334155">참여자</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. Tabletop ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>협력·의사소통</b></td><td style="padding:8px;border:1px solid #10b981"><b>위기팀 전원</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. Functional</td><td style="padding:8px;border:1px solid #334155">자원·인력 동원</td><td style="padding:8px;border:1px solid #334155">현장 인력</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. Full-scale</td><td style="padding:8px;border:1px solid #334155">전체 BCP 실행</td><td style="padding:8px;border:1px solid #334155">전 조직</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. Desk check</td><td style="padding:8px;border:1px solid #334155">문서 검토</td><td style="padding:8px;border:1px solid #334155">소수·수동적</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Tabletop = 위기팀 협력 연습</b>: 회의실에서 시나리오 토론, 역할·의사결정·통신 흐름 점검<br>
• Desk Check(D)와 차이: Tabletop은 위기팀 능동 참여, Desk Check는 문서 수동 검토<br>
• Functional·Full-scale은 실제 자원·인력 동원하는 더 강도 높은 테스트<br>
• 패턴: "협력·의사소통 연습" → Tabletop<br>
• 관련: Q363 (BCP 테스트 5단계)
</div>`,
reference:"CRM Chapter 4: Tabletop Exercise / Crisis Coordination",
keyConcepts:[
"Tabletop|위기팀 회의실 시뮬레이션 — 협력·의사소통 연습",
"Desk Check vs Tabletop|Desk Check=문서 수동 / Tabletop=팀 능동",
"BCP 테스트 강도|Desk Check < Tabletop < Functional < Full-scale"
]
},

{
id: 365,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `복잡한 조직에서 BCP가 다양한 측면을 다루는 여러 계획 세트로 개발될 수 있다. 이 환경에서 필수적인 것은?<br><small style="color:#94a3b8">In an environment where BCP is developed as a set of plans, it is essential that:</small>`,
options: [
"각 계획이 서로 일관성을 가짐<br><small style='color:#94a3b8'>each plan is consistent with one another.</small>",
"모든 계획이 단일 계획으로 통합됨<br><small style='color:#94a3b8'>all plans are integrated into a single plan.</small>",
"각 계획이 서로 의존함<br><small style='color:#94a3b8'>each plan is dependent on one another.</small>",
"모든 계획의 구현 순서가 정의됨<br><small style='color:#94a3b8'>the sequence for implementation of all plans is defined.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 각 계획이 서로 일관성을 가짐</b> — 여러 BCP/DRP 문서가 존재할 수 있으나, 가정·역할·연락처·우선순위 등이 서로 모순되면 위기 시 혼란 발생. 일관성이 효과성의 전제 조건.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 일관성 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>모순 제거 — 효과성 전제</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 단일 통합</td><td style="padding:8px;border:1px solid #334155">필수 아님 — 분리도 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 상호 의존</td><td style="padding:8px;border:1px solid #334155">독립적도 가능</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 순서 정의</td><td style="padding:8px;border:1px solid #334155">재해 종류·중요도 따라 가변</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>다중 BCP 계획 환경</b>: 사이트별·부서별·프로세스별로 분리 가능<br>
• 핵심 = <b>일관성</b>: RTO/RPO·역할·연락처·자원 할당이 서로 모순되지 않을 것<br>
• 단일 통합(B)은 복잡도·관리 부담 증가 — 필수 아님<br>
• 순서(D)는 재해 종류에 따라 동적 — 사전 고정 불가능<br>
• 패턴: 다중 계획 → 일관성·정합성이 핵심
</div>`,
reference:"CRM Chapter 4: Multi-Plan BCP / Consistency",
keyConcepts:[
"BCP 계획 일관성|RTO·역할·연락처·자원이 서로 모순 없을 것",
"다중 vs 단일|단일 통합 필수 아님 — 분리해도 일관성만 유지",
"순서의 가변성|재해 종류·중요도 따라 동적 — 사전 고정 불가"
]
},

{
id: 366,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 및 DRP의 주된 목적은?<br><small style="color:#94a3b8">The PRIMARY objective of business continuity and disaster recovery plans should be to:</small>`,
options: [
"중요 IS 자산 보호<br><small style='color:#94a3b8'>safeguard critical IS assets.</small>",
"운영 연속성 제공<br><small style='color:#94a3b8'>provide for continuity of operations.</small>",
"조직 손실 최소화<br><small style='color:#94a3b8'>minimize the loss to an organization.</small>",
"인명 보호<br><small style='color:#94a3b8'>protect human life.</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 인명 보호</b> — 모든 BCP/DRP의 최우선 목적은 사람의 생명. 자산 보호·운영 연속성·손실 최소화는 모두 2차 목적이며 인명이 항상 최우선.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">목적</th><th style="padding:8px;border:1px solid #334155">우선순위</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>D. 인명 보호 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>1차 — 절대 최우선</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 자산 보호</td><td style="padding:8px;border:1px solid #334155">2차</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 운영 연속성</td><td style="padding:8px;border:1px solid #334155">2차</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 손실 최소화</td><td style="padding:8px;border:1px solid #334155">2차</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP/DRP 우선순위 절대 원칙</b>: <b>People → Process → Technology</b><br>
• 인명은 무엇으로도 대체 불가능 — 절대 최우선<br>
• 대피·점호·구조가 데이터·시스템 복구보다 항상 우선<br>
• 패턴: "BCP/DRP 1차 목적" → 항상 인명 보호<br>
• 시험 단골 — 단순해 보이지만 자산·연속성에 속기 쉬움
</div>`,
reference:"CRM Chapter 4: BCP Priorities / Life Safety",
keyConcepts:[
"인명 보호|BCP/DRP의 절대 1차 목적",
"우선순위 원칙|People → Process → Technology",
"시험 함정|자산·연속성·손실은 모두 2차 — 인명이 항상 우선"
]
},

{
id: 367,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 프로세스의 주된 목적은?<br><small style="color:#94a3b8">Which of the following is the PRIMARY objective of the BCP process?</small>`,
options: [
"재해 시 사업 운영이 계속될 것이라는 확신을 이해관계자에게 제공<br><small style='color:#94a3b8'>To provide assurance to stakeholders that business operations will continue in the event of disaster.</small>",
"사전 정의된 RTO를 충족하기 위한 IT 서비스 대체 사이트 구축<br><small style='color:#94a3b8'>To establish an alternate site for IT services to meet predefined RTOs.</small>",
"운영에 부정적 영향을 준 사건에서 복구하는 동안 위험 관리<br><small style='color:#94a3b8'>To manage risk while recovering from an event that adversely affected operations.</small>",
"자연재해 시 규제 컴플라이언스 요구사항 충족<br><small style='color:#94a3b8'>To meet the regulatory compliance requirements in the event of natural disaster.</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 복구 중 위험 관리</b> — BCP의 주된 목적은 운영에 영향을 미친 사건으로부터 복구하는 동안의 위험을 관리·완화하는 것. "운영이 계속됨"을 보장하는 것이 아니라 복구 능력을 제공.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">옵션</th><th style="padding:8px;border:1px solid #334155">평가</th></tr>
<tr><td style="padding:8px;border:1px solid #334155">A. 운영 지속 확신</td><td style="padding:8px;border:1px solid #334155">BCP는 보장이 아님 — 대응 능력 제공</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 대체 사이트 구축</td><td style="padding:8px;border:1px solid #334155">DRP의 영역 — BCP의 일부일 뿐</td></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>C. 복구 중 위험 관리 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>BCP 본질 — 위험 완화</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 규제 충족</td><td style="padding:8px;border:1px solid #334155">부수적 — RTO 입력일 뿐</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP = 위험 관리 도구</b>: 사건 발생 시 손실·영향을 최소화<br>
• "보장" vs "관리" 차이: BCP는 무중단 보장이 아닌 영향 최소화·복구 가능성 제공<br>
• DRP(B)는 BCP의 IT 영역 하위 집합<br>
• 규제(D)는 BCP 설계의 입력 요소이지 목적 아님<br>
• 패턴: "BCP 주된 목적" → 위험 관리·복구 능력
</div>`,
reference:"CRM Chapter 4: BCP Process Objectives",
keyConcepts:[
"BCP 주된 목적|복구 중 위험 관리·완화",
"보장 vs 관리|BCP는 무중단 보장 X — 영향 최소화·복구 능력 제공",
"BCP vs DRP|DRP는 BCP의 IT 하위 영역"
]
},

{
id: 368,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `IS 감사인이 핵심 이해관계자들과 인터뷰하여 그들이 역할과 책임을 이해하는지 확인한다. 감사인이 평가하려는 것은?<br><small style="color:#94a3b8">An IS auditor interviews key stakeholders to determine whether they understand their roles and responsibilities. The IS auditor is attempting to evaluate the:</small>`,
options: [
"BCP의 명확성과 단순성<br><small style='color:#94a3b8'>clarity and simplicity of the BCPs.</small>",
"BCP의 적정성<br><small style='color:#94a3b8'>adequacy of the BCPs.</small>",
"BCP의 효과성<br><small style='color:#94a3b8'>effectiveness of the BCPs.</small>",
"IS·최종사용자 인력의 비상 시 효과적 대응 능력<br><small style='color:#94a3b8'>ability of IS and end-user personnel to respond effectively in emergencies.</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 명확성과 단순성</b> — 이해관계자가 자신의 역할·책임을 잘 이해하고 있다면 BCP가 명확하고 단순하다는 증거. 평가 방법(인터뷰)과 평가 대상(이해도)이 명확성과 매핑됨.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">평가 대상</th><th style="padding:8px;border:1px solid #334155">평가 방법</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 명확성·단순성 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>이해관계자 인터뷰</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 적정성</td><td style="padding:8px;border:1px solid #334155">계획 검토 + 표준 비교</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 효과성</td><td style="padding:8px;border:1px solid #334155">테스트 결과 검토</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 대응 능력</td><td style="padding:8px;border:1px solid #334155">테스트 결과 + 교육 검토</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>평가 대상별 방법 매핑</b>:<br>
&nbsp;&nbsp;- <b>명확성·단순성</b> → 이해관계자 인터뷰 (이해도)<br>
&nbsp;&nbsp;- <b>적정성</b> → 계획 vs 표준·요구사항 비교<br>
&nbsp;&nbsp;- <b>효과성</b> → 테스트 결과 분석<br>
&nbsp;&nbsp;- <b>대응 능력</b> → 시뮬레이션·교육 결과<br>
• 이해관계자가 역할을 모른다 = 계획이 복잡·불명확<br>
• 핵심: 평가 방법(How)이 평가 대상(What)을 결정<br>
• 관련: Q357·Q362 (효과성=테스트 결과)
</div>`,
reference:"CRM Chapter 4: BCP Evaluation Methods",
keyConcepts:[
"명확성·단순성 평가|이해관계자 인터뷰 — 역할 이해도가 지표",
"평가 방법 매핑|명확성=인터뷰 / 적정성=비교 / 효과성=테스트 / 대응=시뮬레이션",
"방법 → 대상 추론|감사 방법으로 평가 대상을 역추적"
]
},

{
id: 369,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 감사 중, 모든 부서가 같은 건물에 있는데도 각 부서가 별도의 BCP를 가진 것을 발견했다. 감사인이 BCP 조정(reconcile)을 권고했다. 가장 먼저 조정해야 할 영역은?<br><small style="color:#94a3b8">During an audit of a BCP, an IS auditor found that each department had a separate BCP though housed in the same building. Which of the following areas should be reconciled FIRST?</small>`,
options: [
"대피 계획<br><small style='color:#94a3b8'>Evacuation plan</small>",
"복구 우선순위<br><small style='color:#94a3b8'>Recovery priorities</small>",
"백업 저장소<br><small style='color:#94a3b8'>Backup storages</small>",
"콜 트리 (Call tree)<br><small style='color:#94a3b8'>Call tree</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 대피 계획</b> — 인명이 절대 최우선. 같은 건물에서 부서별 대피 계획이 다르면 충돌(서로 다른 대피로·집결지)로 인해 직원·고객 안전이 위험. 인명 보호가 가장 먼저 조정되어야 함.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
<tr style="background:#1e293b;color:#e2e8f0"><th style="padding:8px;border:1px solid #334155">영역</th><th style="padding:8px;border:1px solid #334155">우선순위</th></tr>
<tr style="background:#064e3b;color:#d1fae5"><td style="padding:8px;border:1px solid #10b981"><b>A. 대피 계획 ✓</b></td><td style="padding:8px;border:1px solid #10b981"><b>1차 — 인명 보호</b></td></tr>
<tr><td style="padding:8px;border:1px solid #334155">B. 복구 우선순위</td><td style="padding:8px;border:1px solid #334155">2차 — 운영 영역</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">C. 백업 저장소</td><td style="padding:8px;border:1px solid #334155">2차 — 데이터 영역</td></tr>
<tr><td style="padding:8px;border:1px solid #334155">D. 콜 트리</td><td style="padding:8px;border:1px solid #334155">2차 — 통신 영역</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>People → Process → Technology</b> 우선순위 재확인 (Q366)<br>
• 같은 건물 = 물리적 위험을 공유 — 대피 계획 충돌은 직접적 인명 위험<br>
• 다른 항목은 운영·데이터·통신 영역으로 인명 우선 조정 후 처리<br>
• 패턴: BCP 우선순위 질문 → 항상 인명·안전 관련 답이 1차<br>
• 관련: Q366 (BCP 1차 목적 = 인명 보호), Q365 (다중 계획 일관성)
</div>`,
reference:"CRM Chapter 4: BCP Reconciliation / Life Safety First",
keyConcepts:[
"대피 계획 우선|인명 보호가 BCP의 절대 1차",
"같은 건물 위험 공유|대피로·집결지 충돌은 직접 인명 위험",
"우선순위 재확인|People → Process → Technology"
]
},

{
id: 370,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `다음 중 전사적 광역 네트워크(WAN)의 연속성을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">Which of the following BEST ensures continuity of a wide area network (WAN) across the enterprise?</small>`,
options: [
"내장된 대체 라우팅<br><small style='color:#94a3b8'>Built-in alternative routing</small>",
"매일 전체 시스템 백업<br><small style='color:#94a3b8'>Complete full system backup daily</small>",
"서비스 제공업체와의 수리 계약<br><small style='color:#94a3b8'>A repair contract with a service provider</small>",
"각 서버 옆에 중복 장비 배치<br><small style='color:#94a3b8'>A duplicate machine alongside each server</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 내장된 대체 라우팅(Alternative Routing)</b></p>
<p>통신 장비 장애 또는 링크 단절 시 메시지가 <b>자동으로 재라우팅</b>되므로 네트워크 연속성이 유지된다. WAN 연속성의 핵심은 경로 다중화이다.</p>
<table>
<tr><th>옵션</th><th>WAN 연속성 효과</th></tr>
<tr style="background:#dcfce7"><td><b>A. 대체 라우팅</b></td><td>✅ 자동 재경로 — 링크/장비 장애 즉시 우회</td></tr>
<tr><td>B. 전체 백업</td><td>❌ 데이터 보호용 — 네트워크 장애와 무관</td></tr>
<tr><td>C. 수리 계약</td><td>❌ 수리까지 다운타임 — 영구적 해결 아님</td></tr>
<tr><td>D. 중복 서버</td><td>❌ 서버 이중화 — 링크 단절 시 무용</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>WAN 연속성 = 경로 이중화</b> (서버 이중화 ❌)<br>
• 자동 재라우팅이 수동 복구(수리계약)보다 항상 우월<br>
• 백업은 데이터 보호, 라우팅은 통신 보호 — 영역이 다름<br>
• 관련: Q355(통신 시스템 redundancy), Q335(Warm site)</div>`,
reference:"CRM Chapter 4: Network Resilience & Alternative Routing",
keyConcepts:[
"Alternative Routing|장애 시 트래픽을 다른 경로로 자동 전환",
"WAN 연속성|링크/노드 다중화 — 단일 장애점(SPOF) 제거",
"자동 vs 수동 복구|자동 복구가 RTO를 0에 가깝게 만듦"
]
},

{
id: 371,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP를 검토하는 IS 감사인에게 가장 우려되는 사항은?<br><small style="color:#94a3b8">Which of the following should be of MOST concern to an IS auditor reviewing the business continuity plan (BCP)?</small>`,
options: [
"재해 등급이 손상 기능의 범위에 기반하나 지속 시간은 고려하지 않음<br><small style='color:#94a3b8'>Disaster levels based on scope but not duration</small>",
"낮은 수준의 재해와 소프트웨어 사고의 구분이 명확하지 않음<br><small style='color:#94a3b8'>Difference between low-level disaster and software incidents not clear</small>",
"전체 BCP는 문서화되어 있으나 상세 복구 절차가 명시되지 않음<br><small style='color:#94a3b8'>BCP documented but detailed recovery steps not specified</small>",
"재해 선언 책임자가 식별되지 않음<br><small style='color:#94a3b8'>Responsibility for declaring a disaster is not identified</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 재해 선언 책임자 미식별</b></p>
<p>아무도 재해를 선언하지 않으면 <b>BCP 자체가 발동되지 않는다</b>. 발동 트리거가 없으면 다른 모든 우려사항(상세 절차, 등급 분류 등)은 의미가 없다.</p>
<table>
<tr><th>옵션</th><th>심각도</th></tr>
<tr><td>A. 지속 시간 미고려</td><td>범위가 더 중요 — 부차적</td></tr>
<tr><td>B. 사고/재해 구분 불명확</td><td>항상 모호한 영역 — 정상적</td></tr>
<tr><td>C. 상세 절차 누락</td><td>문서 보완 가능 — BCP는 발동됨</td></tr>
<tr style="background:#dcfce7"><td><b>D. 선언 책임자 부재</b></td><td>✅ BCP 자체가 시작 안 됨 — 치명적</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 발동 트리거 부재 = BCP 무용지물</b><br>
• "선언 권한"은 BCP의 첫 번째 전제조건<br>
• 관련: Q351(위기 선언 미정의 → 활성화 지연), Q361(프로세스 오너 핵심 이해관계자)</div>`,
reference:"CRM Chapter 4: BCP Activation Authority",
keyConcepts:[
"재해 선언 권한|BCP 발동의 필수 전제조건 — 부재 시 계획 무용",
"트리거 우선|발동 메커니즘이 상세 절차보다 우선",
"권한과 책임|위기 시점 의사결정자가 명확해야 함"
]
},

{
id: 372,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `전기 배선, 공조, 바닥은 갖추었으나 컴퓨터·통신 장비는 없는 외부 정보처리시설(IPF)은?<br><small style="color:#94a3b8">An offsite IPF with electrical wiring, air conditioning and flooring, but no computer or communications equipment, is a:</small>`,
options: [
"콜드 사이트<br><small style='color:#94a3b8'>cold site</small>",
"웜 사이트<br><small style='color:#94a3b8'>warm site</small>",
"다이얼업 사이트<br><small style='color:#94a3b8'>dial-up site</small>",
"중복 처리 시설<br><small style='color:#94a3b8'>duplicate processing facility</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 콜드 사이트(Cold Site)</b></p>
<p>콜드 사이트는 <b>기본 환경(전원·공조·바닥)</b>만 갖춘 빈 공간이다. 재해 발생 시 장비를 들여와 설치해야 하므로 복구 시간이 가장 길지만 비용은 가장 저렴하다.</p>
<table>
<tr><th>사이트 유형</th><th>구성</th><th>RTO</th><th>비용</th></tr>
<tr style="background:#dcfce7"><td><b>Cold</b></td><td>전원·공조·바닥만</td><td>가장 김(주 단위)</td><td>최저</td></tr>
<tr><td>Warm</td><td>일부 장비·네트워크 구성</td><td>중간(일 단위)</td><td>중간</td></tr>
<tr><td>Hot</td><td>완전 구성·데이터 동기화</td><td>짧음(시간)</td><td>높음</td></tr>
<tr><td>Mirrored/Duplicate</td><td>실시간 복제·동등 시설</td><td>거의 0</td><td>최고</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>콜드 = 빈 껍데기</b> (장비 ❌)<br>
• 다이얼업 사이트는 원격 접속용 — 복구 사이트 아님<br>
• 관련: Q317(공유 서버 RTO), Q321(상호협정), Q335(72h Warm), Q345(Mirroring)</div>`,
reference:"CRM Chapter 4: Recovery Site Types",
keyConcepts:[
"Cold Site|기본 시설만 — 장비는 재해 시 반입, 가장 저렴·가장 느림",
"Warm Site|부분 구성 — 균형형, 중간 RTO/비용",
"Hot Site|완전 구성·동기화 — 빠른 복구, 고비용",
"Duplicate IPF|전용 동등 시설 — 즉시 전환 가능"
]
},

{
id: 373,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP를 최신 상태로 유지하기 위한 가장 좋은 방법은?<br><small style="color:#94a3b8">Which of the following is the BEST method to ensure that the BCP remains up to date?</small>`,
options: [
"그룹이 계획의 다양한 시나리오를 처음부터 끝까지 walk-through<br><small style='color:#94a3b8'>The group walks through the different scenarios from beginning to end</small>",
"그룹이 대체 사이트에서 특정 시스템이 실제로 적절히 작동하는지 확인<br><small style='color:#94a3b8'>Ensures specific systems perform adequately at the alternate offsite facility</small>",
"그룹이 full-interruption 테스트 절차를 인지<br><small style='color:#94a3b8'>Group is aware of full-interruption test procedures</small>",
"부서 간 의사소통 촉진<br><small style='color:#94a3b8'>Interdepartmental communication is promoted</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 구조화된 Walk-through 테스트</b></p>
<p>각 부서 대표가 모여 계획을 처음부터 끝까지 검토하며 <b>약점·누락·구식 정보를 식별</b>한다. 이는 BCP를 최신 상태로 유지하는 가장 효과적인 방법이다.</p>
<table>
<tr><th>테스트 유형</th><th>특징</th><th>최신화 효과</th></tr>
<tr><td>Checklist</td><td>문서 점검</td><td>낮음</td></tr>
<tr style="background:#dcfce7"><td><b>Walk-through</b></td><td>✅ 부서 대표 모여 시나리오 검토</td><td>높음 — 약점 식별</td></tr>
<tr><td>Parallel</td><td>대체 사이트 실제 가동(B 옵션)</td><td>기능 검증용</td></tr>
<tr><td>Full-Interruption</td><td>실제 운영 중단 — 가장 침습적</td><td>최종 검증, 위험 큼</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>최신화 = Walk-through</b> (그룹 검토로 약점·변경사항 발굴)<br>
• 기능 검증 = Parallel, 최종 검증 = Full-Interruption<br>
• 관련: Q363(Paper test), Q364(Tabletop), Q357(BCP 효과성)</div>`,
reference:"CRM Chapter 4: BCP Test Types",
keyConcepts:[
"Walk-through Test|부서 대표가 시나리오 검토 — 계획 최신화의 핵심",
"Parallel Test|대체 사이트에서 실제 시스템 가동 검증",
"Full-Interruption|실제 운영 중단 — 가장 강력하나 가장 위험"
]
},

{
id: 374,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 테스트의 1차 목적은?<br><small style="color:#94a3b8">The PRIMARY objective of testing a BCP is to:</small>`,
options: [
"직원들이 BCP에 익숙해지도록 함<br><small style='color:#94a3b8'>familiarize employees with the BCP</small>",
"모든 잔여 위험이 처리되도록 보장<br><small style='color:#94a3b8'>ensure that all residual risk is addressed</small>",
"가능한 모든 재해 시나리오를 연습<br><small style='color:#94a3b8'>exercise all possible disaster scenarios</small>",
"BCP의 한계를 식별<br><small style='color:#94a3b8'>identify limitations of the BCP</small>"
],
correct: 3,
explanation: `<p><b>정답: D. BCP의 한계 식별</b></p>
<p>테스트는 계획의 <b>약점·결함·누락</b>을 드러내는 가장 좋은 증거이다. 한계를 식별해야 개선이 가능하므로 이것이 1차 목적이다.</p>
<table>
<tr><th>옵션</th><th>평가</th></tr>
<tr><td>A. 직원 친숙화</td><td>부수적 효과 — 1차 목적 아님</td></tr>
<tr><td>B. 모든 잔여 위험 처리</td><td>비용 효율적이지 않음 — 불가능</td></tr>
<tr><td>C. 모든 시나리오 연습</td><td>실용적이지 않음 — 무한대</td></tr>
<tr style="background:#dcfce7"><td><b>D. 한계 식별</b></td><td>✅ 테스트의 핵심 가치 — 개선 근거</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>테스트 목적 = 결함 발견</b> (개선을 위한 입력)<br>
• 친숙화·훈련은 부수 효과<br>
• 관련: Q319·Q325·Q341·Q352·Q357·Q362·Q373(테스트 결과 = 효과성 증거)</div>`,
reference:"CRM Chapter 4: BCP Testing Objectives",
keyConcepts:[
"테스트 1차 목적|계획의 한계·결함 식별 → 개선",
"부수 효과|직원 친숙화, 인식 제고",
"테스트 한계|모든 시나리오·잔여 위험 커버는 비현실적"
]
},

{
id: 375,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 활성화는 사전 정의된 어떤 기준에 기반해야 하는가?<br><small style="color:#94a3b8">BCP activation should be based on predetermined criteria that address the:</small>`,
options: [
"중단의 지속 시간<br><small style='color:#94a3b8'>duration of the outage</small>",
"중단의 유형<br><small style='color:#94a3b8'>type of outage</small>",
"중단 발생 확률<br><small style='color:#94a3b8'>probability of the outage</small>",
"중단의 원인<br><small style='color:#94a3b8'>cause of the outage</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 중단의 지속 시간(Duration)</b></p>
<p>BCP 발동은 비즈니스 기능이 <b>조직 목표 달성에 위협이 될 정도로 중단되는 최대 시간</b>에 기반해야 한다. 즉, 일정 지속 시간을 초과하면 자동으로 발동되도록 설계된다.</p>
<table>
<tr><th>옵션</th><th>BCP 활성화 기준 적합성</th></tr>
<tr style="background:#dcfce7"><td><b>A. 지속 시간</b></td><td>✅ 임계 시간 초과 시 발동 — MTO/RTO 기준</td></tr>
<tr><td>B. 유형</td><td>대응 방법에 영향, 발동 결정 아님</td></tr>
<tr><td>C. 확률</td><td>리스크 평가용 — 발동 결정과 무관</td></tr>
<tr><td>D. 원인</td><td>대응 절차 선택에 영향, 발동 결정 아님</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 발동 트리거 = 시간(Duration)</b><br>
• 원인·유형은 어떤 절차를 쓸지 결정 (발동 여부 ❌)<br>
• MTO(Maximum Tolerable Outage) 초과 시 BCP 발동<br>
• 관련: Q371(선언 책임자), Q351(위기 선언 미정의)</div>`,
reference:"CRM Chapter 4: BCP Activation Criteria",
keyConcepts:[
"발동 기준|지속 시간(Duration) — 조직 목표 위협 임계점",
"MTO|Maximum Tolerable Outage — BCP 발동 임계 시간",
"원인 vs 발동|원인은 대응 방법 선택, 시간은 발동 여부 결정"
]
},

{
id: 376,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 개발 시 조직의 비즈니스 프로세스를 이해하기 위해 사용해야 하는 도구는?<br><small style="color:#94a3b8">When developing a BCP, which tool should be used to gain an understanding of the organization's business processes?</small>`,
options: [
"비즈니스 연속성 자체 감사<br><small style='color:#94a3b8'>Business continuity self-audit</small>",
"자원 복구 분석<br><small style='color:#94a3b8'>Resource recovery analysis</small>",
"위험 평가<br><small style='color:#94a3b8'>Risk assessment</small>",
"갭 분석<br><small style='color:#94a3b8'>Gap analysis</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 위험 평가(Risk Assessment) / BIA</b></p>
<p>위험 평가와 비즈니스 영향 분석(BIA)은 BCP의 일부로서 <b>비즈니스를 이해하는 도구</b>이다. 어떤 프로세스가 핵심인지, 어떤 위협이 있는지 파악한다.</p>
<table>
<tr><th>도구</th><th>목적</th></tr>
<tr style="background:#dcfce7"><td><b>Risk Assessment / BIA</b></td><td>✅ 비즈니스 프로세스·위협·영향 이해</td></tr>
<tr><td>Self-Audit</td><td>BCP의 적정성 평가</td></tr>
<tr><td>Resource Recovery Analysis</td><td>복구 전략 구성요소 식별</td></tr>
<tr><td>Gap Analysis</td><td>계획의 결함 식별</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>비즈니스 이해 = RA/BIA</b><br>
• BIA는 BCP 개발의 출발점 — 무엇이 핵심인지 식별<br>
• 관련: Q353(BIA가 복구 전략에 영향), Q359(연간 RA → BCP 검토)</div>`,
reference:"CRM Chapter 4: BCP Development - BIA & Risk Assessment",
keyConcepts:[
"BIA|핵심 프로세스·RTO·RPO 식별 — BCP의 기초",
"Risk Assessment|위협·취약점·영향 평가",
"BCP 개발 순서|RA/BIA → 전략 → 계획 수립 → 테스트"
]
},

{
id: 377,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `핵심 프로세스의 RPO를 결정하는 데 가장 중요한 것은?<br><small style="color:#94a3b8">Which is MOST important to determine the RPO for a critical process?</small>`,
options: [
"허용 가능한 다운타임 시간<br><small style='color:#94a3b8'>Number of hours of acceptable downtime</small>",
"핵심 시스템 복구 총 비용<br><small style='color:#94a3b8'>Total cost of recovering critical systems</small>",
"허용 가능한 데이터 손실 범위<br><small style='color:#94a3b8'>Extent of data loss that is acceptable</small>",
"허용 가능한 서비스 수준 감소<br><small style='color:#94a3b8'>Acceptable reduction in the level of service</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 허용 가능한 데이터 손실 범위</b></p>
<p>RPO는 <b>"허용 가능한 데이터 손실량"</b>을 정의한다 — 재해 직전 어느 시점까지 데이터를 복구해야 하는지를 결정한다.</p>
<table>
<tr><th>지표</th><th>의미</th><th>옵션</th></tr>
<tr style="background:#dcfce7"><td><b>RPO</b></td><td>허용 가능 데이터 손실</td><td>✅ C</td></tr>
<tr><td>RTO</td><td>허용 가능 다운타임</td><td>A</td></tr>
<tr><td>SDO</td><td>대체 모드 서비스 수준</td><td>D</td></tr>
<tr><td>비용</td><td>RPO 결정 시 이미 고려됨</td><td>B</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RPO = 데이터 손실 허용량</b> (시간이 아닌 데이터 관점)<br>
• RTO = 시간, RPO = 데이터, SDO = 서비스 수준<br>
• 관련: Q324·Q326·Q334·Q339·Q349(RPO 시리즈)</div>`,
reference:"CRM Chapter 4: RPO Determination",
keyConcepts:[
"RPO|허용 가능 데이터 손실량 — 백업 빈도 결정",
"RTO|허용 가능 다운타임 — 복구 속도 결정",
"SDO|대체 운영 모드의 서비스 수준"
]
},

{
id: 378,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `항공사 예약 시스템의 BCP 설계 시 외부 위치로의 데이터 전송/백업에 가장 적합한 방법은?<br><small style="color:#94a3b8">For an airline reservation system BCP, the MOST appropriate offsite data transfer/backup method is:</small>`,
options: [
"섀도우 파일 처리<br><small style='color:#94a3b8'>shadow file processing</small>",
"전자 볼팅<br><small style='color:#94a3b8'>electronic vaulting</small>",
"하드 디스크 미러링<br><small style='color:#94a3b8'>hard-disk mirroring</small>",
"핫 사이트 프로비저닝<br><small style='color:#94a3b8'>hot-site provisioning</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 섀도우 파일 처리(Shadow File Processing)</b></p>
<p>섀도우 파일 처리는 원격지에 파일의 <b>정확한 복제본을 동시에 처리</b>한다. 항공 예약처럼 손실 허용이 거의 없는 핵심 데이터에 사용된다 (RPO≈0).</p>
<table>
<tr><th>방법</th><th>특징</th><th>적합성</th></tr>
<tr style="background:#dcfce7"><td><b>Shadow File</b></td><td>✅ 원격지 동시 처리 — 실시간</td><td>항공 예약에 최적</td></tr>
<tr><td>Electronic Vaulting</td><td>저장소로 전자 전송 — 보통 비실시간</td><td>은행 등 배치형</td></tr>
<tr><td>Disk Mirroring</td><td>같은 서버 내 디스크 이중화</td><td>로컬 — 외부 백업 ❌</td></tr>
<tr><td>Hot Site</td><td>복구 시설 — 백업 방법 아님</td><td>해당 없음</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>실시간 항공 예약 = Shadow File</b> (RPO≈0)<br>
• Mirroring은 로컬 redundancy, Shadow는 원격 동시 처리<br>
• 관련: Q340(실시간 원격 복제), Q345(Mirroring), Q349(CDP)</div>`,
reference:"CRM Chapter 4: Real-time Backup Methods",
keyConcepts:[
"Shadow File Processing|원격지 실시간 동시 파일 처리 — 항공·증권용",
"Electronic Vaulting|전자 전송 백업 — 보통 배치형",
"Disk Mirroring|로컬 디스크 이중화 — 외부 백업 아님"
]
},

{
id: 379,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP가 복구 과정 중 정보 기밀성을 충분히 다루지 않을 때, IS 감사인이 계획에 포함하도록 권고해야 할 것은?<br><small style="color:#94a3b8">When BCP does not adequately address information confidentiality during recovery, IS auditor should recommend the plan include:</small>`,
options: [
"비즈니스 복구 절차 발동 시 요구되는 정보 보안 수준<br><small style='color:#94a3b8'>the level of information security required when business recovery procedures are invoked</small>",
"위기 관리 구조 내 정보 보안 역할과 책임<br><small style='color:#94a3b8'>information security roles and responsibilities in the crisis management structure</small>",
"정보 보안 자원 요구사항<br><small style='color:#94a3b8'>information security resource requirements</small>",
"BCP에 영향을 미칠 수 있는 정보 보안 변경 관리 절차<br><small style='color:#94a3b8'>change management procedures for information security</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 복구 절차 발동 시 요구되는 정보 보안 수준</b></p>
<p>위기 시 직무 분리(SoD) 등 평소 통제가 무력화되므로 보안 요구가 오히려 <b>증가</b>한다. 복구 시점에 어떤 보안 수준을 유지할지 명확히 정의해야 기밀성이 보호된다.</p>
<table>
<tr><th>옵션</th><th>적합성</th></tr>
<tr style="background:#dcfce7"><td><b>A. 보안 수준 정의</b></td><td>✅ 기밀성 직접 보호 — 핵심</td></tr>
<tr><td>B. 역할/책임</td><td>중요하나 보안 수준 정의가 우선</td></tr>
<tr><td>C. 자원 요구사항</td><td>보안 수준이 정해진 후 도출</td></tr>
<tr><td>D. 변경 관리</td><td>이 시나리오와 무관</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>위기 시 통제 약화 → 보안 요구 증가</b><br>
• "Level of security" 정의가 모든 후속 활동의 기반<br>
• SoD 등 일반 통제 부재 시 보상 통제 필요</div>`,
reference:"CRM Chapter 4: Information Security in BCP",
keyConcepts:[
"복구 시 보안 수준|위기 중에도 기밀성 유지를 위한 명시적 기준",
"통제 약화|SoD 등 일반 통제가 위기 시 무력화될 수 있음",
"보상 통제|일반 통제 부재 시 대체 통제 필요"
]
},

{
id: 380,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `비즈니스 연속성 감사 시 IS 감사인이 검증해야 할 가장 중요한 것은?<br><small style="color:#94a3b8">Which is MOST important for an IS auditor to verify while conducting a business continuity audit?</small>`,
options: [
"데이터 백업이 적시에 수행되는지<br><small style='color:#94a3b8'>Data backups are performed on a timely basis</small>",
"복구 사이트가 계약되어 필요 시 사용 가능한지<br><small style='color:#94a3b8'>A recovery site is contracted and available</small>",
"인명 안전 절차가 마련되어 있는지<br><small style='color:#94a3b8'>Human safety procedures are in place</small>",
"보험 보장이 적절하고 보험료가 최신인지<br><small style='color:#94a3b8'>Insurance coverage is adequate and premiums current</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 인명 안전 절차</b></p>
<p>BCP의 어떤 요소보다도 <b>인명 보호가 절대 최우선</b>이다. 다른 모든 항목(백업·복구 사이트·보험)은 인명 안전 다음이다.</p>
<table>
<tr><th>옵션</th><th>우선순위</th></tr>
<tr style="background:#dcfce7"><td><b>C. 인명 안전</b></td><td>✅ 절대 1순위 — 모든 것에 우선</td></tr>
<tr><td>A. 데이터 백업</td><td>중요하나 인명 다음</td></tr>
<tr><td>B. 복구 사이트</td><td>중요하나 인명 다음</td></tr>
<tr><td>D. 보험</td><td>재무 보호 — 후순위</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>People → Process → Technology</b> (불변의 원칙)<br>
• BCP 질문에서 "인명/안전" 선택지가 있으면 거의 항상 정답<br>
• 관련: Q366(BCP 1차 목적 = 인명 보호), Q369(대피 계획 우선)</div>`,
reference:"CRM Chapter 4: Life Safety Priority in BCP",
keyConcepts:[
"인명 우선|BCP의 절대 1순위 — 양보 불가",
"우선순위|People → Process → Technology",
"감사 초점|생명 안전 절차 검증이 최우선 사항"
]
},

{
id: 381,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `최적화된 DRP는 어떻게 작동해야 하는가?<br><small style="color:#94a3b8">An optimized disaster recovery plan (DRP) for an organization should:</small>`,
options: [
"복구 시간과 복구 비용을 모두 감소시킴<br><small style='color:#94a3b8'>reduce the length of recovery time and the cost of recovery</small>",
"복구 시간과 복구 비용을 모두 증가시킴<br><small style='color:#94a3b8'>increase the length of recovery time and the cost of recovery</small>",
"복구 시간은 줄이지만 복구 비용은 증가시킴<br><small style='color:#94a3b8'>reduce recovery time and increase the cost of recovery</small>",
"복구 시간이나 복구 비용에 영향을 주지 않음<br><small style='color:#94a3b8'>not affect the recovery time or the cost of recovery</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 복구 시간과 비용 모두 감소</b></p>
<p>DRP의 목적은 재해로부터 <b>복구 시간(RTO)과 비용을 모두 최소화</b>하는 것이다. 최적화된 계획은 빠른 복구로 손실을 줄이고, 효율적 자원 배치로 복구 비용도 절감한다.</p>
<table>
<tr><th>옵션</th><th>DRP 효과</th></tr>
<tr style="background:#dcfce7"><td><b>A. 시간↓ 비용↓</b></td><td>✅ DRP 최적화의 본질적 목표</td></tr>
<tr><td>B. 시간↑ 비용↑</td><td>❌ 정반대</td></tr>
<tr><td>C. 시간↓ 비용↑</td><td>준비 비용은 들지만 복구 비용은 줄어야 함</td></tr>
<tr><td>D. 영향 없음</td><td>❌ DRP 의미 없음</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>DRP 목적 = 재해 영향 최소화</b> (시간·비용 둘 다)<br>
• 사전 준비 비용은 발생하나, 재해 시 손실·복구 비용은 절감<br>
• 관련: Q335(예산·RTO 균형), Q353(BIA → 복구 전략)</div>`,
reference:"CRM Chapter 4: DRP Optimization Objectives",
keyConcepts:[
"DRP 목적|복구 시간·비용 동시 최소화",
"사전 투자 vs 재해 손실|준비 비용 < 재해 손실 절감",
"최적화|RTO/RPO 충족하면서 비용 효율 극대화"
]
},

{
id: 382,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `효과적인 BCP에 가장 크게 기여하는 것은?<br><small style="color:#94a3b8">Which of the following contributes MOST to an effective BCP?</small>`,
options: [
"문서가 모든 이해관계자에게 회람됨<br><small style='color:#94a3b8'>The document is circulated to all interested parties</small>",
"계획 수립에 모든 사용자 부서가 참여함<br><small style='color:#94a3b8'>Planning involves all user departments</small>",
"계획이 고위 경영진의 승인을 받음<br><small style='color:#94a3b8'>The plan is approved by senior management</small>",
"외부 IS 감사인의 감사가 수행됨<br><small style='color:#94a3b8'>An audit is performed by an external IS auditor</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 모든 사용자 부서의 참여</b></p>
<p>사용자 부서의 참여는 <b>비즈니스 처리 우선순위 식별과 효과적 계획 수립</b>에 핵심이다. 실제 업무를 아는 사람들이 참여해야 현실적이고 효과적인 BCP가 만들어진다.</p>
<table>
<tr><th>옵션</th><th>기여도</th></tr>
<tr><td>A. 회람</td><td>인지 확보 — 효과성과는 별개</td></tr>
<tr style="background:#dcfce7"><td><b>B. 사용자 부서 참여</b></td><td>✅ 우선순위·요구사항 정확 반영</td></tr>
<tr><td>C. 경영진 승인</td><td>지원 확보 — 효과성 보장 ❌</td></tr>
<tr><td>D. 외부 감사</td><td>품질 검증 — 개선 보장 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>효과성 = 현장 지식 통합</b> (사용자 부서 참여)<br>
• 회람·승인·감사는 모두 보완적 — 핵심은 참여<br>
• 관련: Q361(프로세스 오너 핵심 이해관계자), Q353(BIA)</div>`,
reference:"CRM Chapter 4: BCP Effectiveness Factors",
keyConcepts:[
"사용자 참여|비즈니스 우선순위·요구사항을 정확히 반영하는 핵심",
"BCP 효과성|현장 지식 통합 → 현실적 계획",
"보완 활동|회람·승인·감사는 효과성을 보장하지 않음"
]
},

{
id: 383,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `IT DR은 수년간 정기 테스트되어 왔고, 새 BCP의 기본 tabletop이 성공한 후, IS 감사인이 다음으로 권고할 테스트는?<br><small style="color:#94a3b8">After successful basic tabletop of a new BCP (with mature IT DR), what testing should be performed NEXT?</small>`,
options: [
"IT 포함 모든 부서를 비상 사이트로 이전하는 전면 테스트<br><small style='color:#94a3b8'>Full-scale test with relocation of all departments including IT</small>",
"모든 핵심 인력이 참여하는 사전 정의 시나리오 walk-through<br><small style='color:#94a3b8'>Walk-through test with all critical personnel</small>",
"비즈니스 부서가 참여하는 IT DR 테스트<br><small style='color:#94a3b8'>IT DR test with business departments involved</small>",
"제한된 IT 개입의 시나리오 기능 테스트<br><small style='color:#94a3b8'>Functional test of a scenario with limited IT involvement</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 제한된 IT 개입의 기능 테스트(Functional Test)</b></p>
<p>Tabletop 다음 단계는 <b>Functional Test</b>이다. 인력 동원으로 BCP의 행정·조직 기능을 검증한다. IT DR은 이미 성숙하므로 BCP의 비-IT 부분을 먼저 검증·최적화하는 것이 효율적이다. 전면 테스트는 마지막 단계.</p>
<table>
<tr><th>테스트 단계 (점진적)</th><th>설명</th></tr>
<tr><td>1. Checklist</td><td>문서 점검</td></tr>
<tr><td>2. Walk-through</td><td>키 인력 친숙화·검토</td></tr>
<tr><td>3. Tabletop</td><td>시나리오 토론 (이미 완료)</td></tr>
<tr style="background:#dcfce7"><td><b>4. Functional</b></td><td>✅ 인력 동원·기능 검증 (다음 단계)</td></tr>
<tr><td>5. Parallel</td><td>대체 사이트 병행 운영</td></tr>
<tr><td>6. Full-Interruption</td><td>전면 운영 중단 — 최종</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>테스트는 점진적으로</b> — 단계 건너뛰면 실패·자원 낭비<br>
• Tabletop → Functional → Parallel → Full<br>
• 성숙한 IT DR이 있어도 BCP의 비-IT 부분은 별도 검증 필요<br>
• 관련: Q363(Paper test), Q364(Tabletop), Q373(Walk-through)</div>`,
reference:"CRM Chapter 4: BCP Test Progression",
keyConcepts:[
"테스트 점진성|단순→복잡, 단계 생략 시 실패 위험",
"Functional Test|인력 동원·행정 절차 검증 — Tabletop 다음 단계",
"Full-Scale|모든 검증 후 최종 단계 — 첫 시도로 부적절"
]
},

{
id: 384,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `ATM 연결을 위한 중앙 통신 프로세서(스위치)에 가장 좋은 비상 계획은?<br><small style="color:#94a3b8">BEST contingency plan for a central communications processor connecting to ATMs?</small>`,
options: [
"다른 조직과의 상호 협정<br><small style='color:#94a3b8'>Reciprocal agreement with another organization</small>",
"동일 위치의 대체 프로세서<br><small style='color:#94a3b8'>Alternate processor in the same location</small>",
"다른 네트워크 노드의 대체 프로세서<br><small style='color:#94a3b8'>Alternate processor at another network node</small>",
"이중 통신 링크<br><small style='color:#94a3b8'>Duplex communication links</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 다른 네트워크 노드의 대체 프로세서</b></p>
<p>중앙 통신 프로세서 장애는 장비·전력·통신 어떤 원인이든 발생 가능하므로, <b>다른 위치에 중복 프로세서</b>를 두어야 환경적 장애(정전 등)에도 대응할 수 있다.</p>
<table>
<tr><th>옵션</th><th>커버 범위</th></tr>
<tr><td>A. 상호 협정</td><td>의존성·프라이버시·규제 문제</td></tr>
<tr><td>B. 동일 위치 대체</td><td>장비 장애만 — 환경 장애 ❌</td></tr>
<tr style="background:#dcfce7"><td><b>C. 다른 노드 대체</b></td><td>✅ 장비·전력·환경 모두 커버</td></tr>
<tr><td>D. 이중 링크</td><td>통신 링크 장애만</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>지리적 분산이 핵심</b> — SPOF(단일 장애점) 완전 제거<br>
• 동일 위치 이중화는 환경 재해 시 동시 실패<br>
• 관련: Q321(상호협정), Q344(외부 위치 기준), Q370(대체 라우팅)</div>`,
reference:"CRM Chapter 4: Communications Resilience",
keyConcepts:[
"지리적 분산|환경적 재해까지 커버하는 진정한 redundancy",
"SPOF 제거|장비·전력·통신 모든 장애 유형 대비",
"동일 위치 이중화 한계|건물 단위 재해 시 무력"
]
},

{
id: 385,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `BCP 개발 후 효과적인 구현을 위해 가장 중요한 것은?<br><small style="color:#94a3b8">For effective implementation after a BCP has been developed, it is MOST important that the BCP be:</small>`,
options: [
"안전한 외부 시설에 보관됨<br><small style='color:#94a3b8'>stored in a secure offsite facility</small>",
"고위 경영진의 승인을 받음<br><small style='color:#94a3b8'>approved by senior management</small>",
"적절한 인력에게 전달됨<br><small style='color:#94a3b8'>communicated to appropriate personnel</small>",
"기업 인트라넷을 통해 이용 가능함<br><small style='color:#94a3b8'>made available through the enterprise's intranet</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 적절한 인력에게 전달(Communicated)</b></p>
<p>BCP는 적절한 인력이 <b>모든 측면을 인지하고 이해</b>해야만 효과적으로 구현된다. 사람이 알지 못하면 계획은 무용지물이다.</p>
<table>
<tr><th>옵션</th><th>구현 효과</th></tr>
<tr><td>A. 안전 보관</td><td>접근성 ❌ — 사용자에게 도달 안 됨</td></tr>
<tr><td>B. 경영진 승인</td><td>전제조건 — 구현 보장 아님</td></tr>
<tr style="background:#dcfce7"><td><b>C. 인력에게 전달</b></td><td>✅ 인지·이해가 실행의 핵심</td></tr>
<tr><td>D. 인트라넷 게시</td><td>접근성만 — 인지 보장 안 됨</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>구현 효과 = 인력 인지</b> (능동적 커뮤니케이션)<br>
• 게시·보관은 수동적 — 전달·교육이 능동적<br>
• 관련: Q356(다국적 BCP 직원 교육), Q382(사용자 부서 참여)</div>`,
reference:"CRM Chapter 4: BCP Implementation",
keyConcepts:[
"능동적 커뮤니케이션|인력에게 직접 전달·교육해야 효과 발생",
"수동적 게시 한계|보관·게시만으로는 인지 보장 안 됨",
"BCP 실행력|아는 사람만 실행 가능"
]
},

{
id: 386,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `사고 대응 활동이 비즈니스 연속성 요구사항과 일치하도록 보장하는 가장 좋은 방법은?<br><small style="color:#94a3b8">BEST way to ensure that incident response activities are consistent with business continuity requirements?</small>`,
options: [
"전사 사고 대응에 대한 명확한 실무 지침 작성·공표<br><small style='color:#94a3b8'>Draft and publish a clear practice for enterprise-level incident response</small>",
"부서 간 워킹 그룹 구성 및 관점 공유<br><small style='color:#94a3b8'>Establish a cross-departmental working group</small>",
"시나리오 개발 및 구조화된 walk-through 수행<br><small style='color:#94a3b8'>Develop a scenario and perform a structured walk-through</small>",
"DR 종단 간 테스트를 위한 프로젝트 계획 수립<br><small style='color:#94a3b8'>Develop a project plan for end-to-end DR testing</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 시나리오 기반 구조화 Walk-through</b></p>
<p>사고 대응팀과 BC팀이 함께 참여하는 walk-through는 두 계획 간의 <b>간극·불일치를 식별할 최적의 기회</b>를 제공한다. 실제 시나리오를 따라가며 인터페이스를 검증한다.</p>
<table>
<tr><th>옵션</th><th>일치 확인 효과</th></tr>
<tr><td>A. 지침 공표</td><td>BC가 IR에 정렬되어야만 효과 — 본말 전도</td></tr>
<tr><td>B. 워킹 그룹</td><td>관점 공유만 — 실행 검증 부족</td></tr>
<tr style="background:#dcfce7"><td><b>C. Walk-through</b></td><td>✅ 시나리오로 인터페이스 직접 검증</td></tr>
<tr><td>D. DR 프로젝트 계획</td><td>BC/IR 결함 다루지 않음</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>계획 간 정렬 검증 = Walk-through</b> (실제 시나리오로 갭 노출)<br>
• 사고 대응이 BC를 지원 (역방향 ❌)<br>
• 관련: Q373(Walk-through로 BCP 최신화), Q383(테스트 진행)</div>`,
reference:"CRM Chapter 4: IR/BC Integration",
keyConcepts:[
"계획 간 정렬|Walk-through로 인터페이스·갭 식별",
"IR ↔ BC 관계|IR이 BC를 지원하는 구조",
"시나리오 기반 검증|문서 검토보다 실효적"
]
},

{
id: 387,
domain: "4",
ks: "4B4 Business Continuity Plan",
question: `상호 협정의 실시간 테스트(4시간 집중 사용 포함)가 성공적이었으나, 이는 다음에 대해 부분적 확신만 제공한다:<br><small style="color:#94a3b8">A live mutual agreement test (4-hour intensive usage) was successful but gives only partial assurance that the:</small>`,
options: [
"시스템과 IT 운영팀이 비상 환경에서 운영을 지속할 수 있음<br><small style='color:#94a3b8'>system and IT operations team can sustain operations in the emergency environment</small>",
"자원과 환경이 트랜잭션 부하를 감당할 수 있음<br><small style='color:#94a3b8'>resources and environment can sustain the transaction load</small>",
"원격 사이트의 애플리케이션 연결성이 응답 시간 요구사항을 충족<br><small style='color:#94a3b8'>connectivity at remote site meets response time requirements</small>",
"실제 비즈니스 운영의 워크플로가 재해 시 비상 시스템을 사용할 수 있음<br><small style='color:#94a3b8'>workflow of actual business operations can use the emergency system in case of a disaster</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 실제 비즈니스 워크플로의 사용 가능성</b></p>
<p>4시간 집중 테스트로 트랜잭션 부하·연결성·응답 시간은 검증되었지만, <b>전체 비즈니스 워크플로</b>(배치 마감·오류 정정·출력 배포·일·주·월 단위 사이클)는 부분적으로만 검증된다.</p>
<table>
<tr><th>옵션</th><th>4시간 테스트 검증도</th></tr>
<tr><td>A. 시스템·IT팀 지속</td><td>부분적 (보조 운영 미검증)</td></tr>
<tr><td>B. 트랜잭션 부하</td><td>✓ 집중 사용으로 검증됨</td></tr>
<tr><td>C. 응답 시간</td><td>✓ 사용자 접속으로 검증됨</td></tr>
<tr style="background:#dcfce7"><td><b>D. 전체 워크플로</b></td><td>⚠ 부분적 — 전체 사이클 미검증</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>4시간 ≠ 전체 비즈니스 사이클</b><br>
• 배치·일마감·월마감 등 주기적 작업은 별도 검증 필요<br>
• 단기 테스트 = 즉시 기능 검증, 장기 테스트 = 지속 가능성<br>
• 관련: Q321(상호협정), Q383(테스트 진행)</div>`,
reference:"CRM Chapter 4: Test Coverage Limitations",
keyConcepts:[
"부분 검증|단기 테스트는 전체 비즈니스 사이클을 다 다루지 못함",
"워크플로 vs 트랜잭션|개별 처리 ≠ 전체 운영 흐름",
"테스트 한계|주기적 작업·예외 처리는 별도 검증 필요"
]
},

{
id: 388,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `재해 복구 상황에서 핵심 시스템 간 데이터 동기화를 보장하는 가장 중요한 지표는?<br><small style="color:#94a3b8">In a DR situation, which metric is MOST important to ensure data are synchronized between critical systems?</small>`,
options: [
"RPO (복구 시점 목표)<br><small style='color:#94a3b8'>recovery point objective (RPO)</small>",
"RTO (복구 시간 목표)<br><small style='color:#94a3b8'>recovery time objective (RTO)</small>",
"복구 서비스 회복력<br><small style='color:#94a3b8'>recovery service resilience</small>",
"복구 서비스 확장성<br><small style='color:#94a3b8'>recovery service scalability</small>"
],
correct: 0,
explanation: `<p><b>정답: A. RPO (Recovery Point Objective)</b></p>
<p>시스템 간 <b>공통 RPO</b>를 설정해야 상호 의존 시스템이 동일 시점으로 복구된다. RPO가 다르면 시스템 간 데이터 시점이 어긋나 회계 거래 불일치·참조 무결성 손상이 발생한다.</p>
<table>
<tr><th>지표</th><th>동기화 관련성</th></tr>
<tr style="background:#dcfce7"><td><b>RPO</b></td><td>✅ 데이터 시점 일치 — 동기화 핵심</td></tr>
<tr><td>RTO</td><td>복구 시간 — 시스템마다 다를 수 있음</td></tr>
<tr><td>Resilience</td><td>장애 허용·재시작 능력</td></tr>
<tr><td>Scalability</td><td>용량·확장 한계</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>공통 RPO = 데이터 시점 일치</b> (참조 무결성 보호)<br>
• 상호 의존 시스템은 같은 시점으로 복구되어야 함<br>
• 관련: Q324·Q326·Q334·Q339·Q349·Q377(RPO 시리즈)</div>`,
reference:"CRM Chapter 4: RPO Synchronization Across Systems",
keyConcepts:[
"공통 RPO|상호 의존 시스템의 데이터 시점 일치 보장",
"참조 무결성|시점 불일치 시 거래 조정 불가",
"RTO vs RPO|RTO=시간(시스템별 다양), RPO=데이터(통일 필요)"
]
},

{
id: 389,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `IT DR 테스트 검토 시 IS 감사인의 가장 큰 우려사항은?<br><small style="color:#94a3b8">GREATEST concern to IS auditor when reviewing an IT DR test?</small>`,
options: [
"제한된 시간으로 핵심 시스템만 테스트, 나머지는 연중 별도 테스트<br><small style='color:#94a3b8'>Only essential systems tested due to time, others tested separately during the year</small>",
"테스트 중 일부 백업 시스템이 결함이 있거나 작동하지 않아 실패<br><small style='color:#94a3b8'>Some backup systems were defective or not working, causing test failure</small>",
"원본 운영 사이트 종료·보안 절차가 계획보다 훨씬 오래 걸림<br><small style='color:#94a3b8'>Shutdown and securing of original production site took far more time than planned</small>",
"매년 동일 직원이 테스트, 모두 잘 알고 있어 복구 문서 미사용<br><small style='color:#94a3b8'>Same employees test annually, recovery plan documents not used</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 백업 시스템의 결함·작동 실패</b></p>
<p>테스트의 목적은 백업 계획의 작동 여부 확인이다. <b>백업 시스템이 작동하지 않으면 실제 재해 시 의지할 수 없다</b>. 이는 가장 심각한 문제이다.</p>
<table>
<tr><th>옵션</th><th>심각도</th></tr>
<tr><td>A. 부분 테스트</td><td>연중 모두 테스트됨 — 우려 ❌</td></tr>
<tr style="background:#dcfce7"><td><b>B. 백업 시스템 실패</b></td><td>✅ 실제 재해 시 복구 불가 — 치명적</td></tr>
<tr><td>C. 종료 시간 초과</td><td>실제 재해 시 정상 종료 불필요</td></tr>
<tr><td>D. 동일 인력·문서 미사용</td><td>중요하나 시스템 실패보다 덜 심각</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>백업 시스템 실패 = DR의 근본 실패</b><br>
• 인력 의존도(D)도 문제이나 인프라 실패가 우선<br>
• 관련: Q341(테스트 결과 = 효과성), Q352(테스트 결과 미문서화)</div>`,
reference:"CRM Chapter 4: DR Test Review",
keyConcepts:[
"백업 시스템 신뢰성|실제 작동이 DR의 절대 전제조건",
"테스트 우선순위|인프라 실패 > 절차/인력 문제",
"DR 핵심|신뢰할 수 있는 백업 시스템 없으면 모든 계획 무용"
]
},

{
id: 390,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `글로벌 기업 DR 감사 중 일부 원격 사무소가 매우 제한된 IT 자원만 보유. 가장 중요한 관찰은?<br><small style="color:#94a3b8">During DR audit of global enterprise, some remote offices have very limited local IT resources. MOST critical observation?</small>`,
options: [
"재해/사고 복구 시 로컬 자원이 보안·서비스 표준을 유지할 수 있는지 테스트되지 않음<br><small style='color:#94a3b8'>A test has not been made to ensure local resources can maintain security and service standards</small>",
"기업 BCP가 원격 사무소 시스템을 정확히 문서화하지 않음<br><small style='color:#94a3b8'>BCP does not accurately document systems at remote offices</small>",
"기업 보안 조치가 테스트 계획에 포함되지 않음<br><small style='color:#94a3b8'>Corporate security measures not incorporated into the test plan</small>",
"원격 사무소 백업의 사용 가능성이 테스트되지 않음<br><small style='color:#94a3b8'>Backups from remote offices have not been tested</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 로컬 복구 테스트 부재</b></p>
<p>로컬 IT 자원의 능력과 관계없이, <b>테스트 부재는 복구 프로세스의 품질 문제를 식별할 수 없게 만드는 가장 치명적 리스크</b>이다. 다른 모든 우려(문서화·보안·백업)는 테스트 부재라는 더 큰 문제의 부분집합이다.</p>
<table>
<tr><th>옵션</th><th>심각도</th></tr>
<tr style="background:#dcfce7"><td><b>A. 테스트 부재</b></td><td>✅ 모든 결함 식별 불가 — 최우선</td></tr>
<tr><td>B. 문서화 부정확</td><td>중요하나 테스트로 발견 가능</td></tr>
<tr><td>C. 보안 미포함</td><td>중요하나 테스트가 우선</td></tr>
<tr><td>D. 백업 미테스트</td><td>전체 DR 테스트의 일부</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>테스트 = 모든 결함의 식별 수단</b><br>
• 테스트하지 않으면 문제가 있는지조차 알 수 없음<br>
• 관련: Q374(테스트 1차 목적 = 한계 식별), Q389(백업 실패)</div>`,
reference:"CRM Chapter 4: DR Testing for Distributed Sites",
keyConcepts:[
"테스트 우선|미테스트 = 모든 결함이 잠재화",
"원격 사이트 DR|중앙 BCP에 포함되지 않을 수 있어 별도 검증 필요",
"결함 식별|테스트만이 실제 작동 여부 검증 가능"
]
},

{
id: 391,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `조직 내 두 사업부 간 DR 상호 협정 사용의 주요 리스크는?<br><small style="color:#94a3b8">PRIMARY risk of using reciprocal agreements for DR between two business units?</small>`,
options: [
"문서의 법적 충분성 부족<br><small style='color:#94a3b8'>Documents lack legal sufficiency</small>",
"두 주체가 동일한 사고에 취약함<br><small style='color:#94a3b8'>Both entities are vulnerable to the same incident</small>",
"IT 시스템이 동일하지 않은 구성을 가짐<br><small style='color:#94a3b8'>IT systems have non-identical configurations</small>",
"한 쪽이 다른 쪽보다 더 자주 중단을 경험함<br><small style='color:#94a3b8'>One party experiences more frequent disruptions</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 두 주체가 동일한 사고에 동시 취약</b></p>
<p>상호 협정의 전제는 <b>두 조직이 동시에 재해를 겪지 않을 확률</b>에 기반한다. 하지만 동일 조직 내 사업부들은 지역·인프라·위험을 공유할 가능성이 커 동시 피해 위험이 크다.</p>
<table>
<tr><th>옵션</th><th>위험도</th></tr>
<tr><td>A. 법적 충분성</td><td>해결 가능 — 부차적</td></tr>
<tr style="background:#dcfce7"><td><b>B. 동시 취약</b></td><td>✅ 상호 협정 전제의 근본 붕괴</td></tr>
<tr><td>C. 비호환 시스템</td><td>해결 가능 — 부차적</td></tr>
<tr><td>D. 사용 빈도 차이</td><td>계약으로 해결</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>상호 협정 = 독립성 가정</b> — 동일 조직 내에선 깨짐<br>
• 지리적·환경적 분리가 핵심<br>
• 관련: Q321(상호협정 BEST 시나리오), Q344(외부 위치 기준)</div>`,
reference:"CRM Chapter 4: Reciprocal Agreement Risks",
keyConcepts:[
"독립성 가정|동시 재해 가능성이 낮을 때만 유효",
"동일 조직 내 한계|공유 인프라·지리로 동시 피해 위험 증가",
"상호 협정|저비용이나 신뢰성·독립성 검증 필요"
]
},

{
id: 392,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `두 조직 간 DR 상호 협정이 만드는 가장 큰 리스크는?<br><small style="color:#94a3b8">GREATEST risk created by a reciprocal agreement for DR between two organizations?</small>`,
options: [
"개발로 인한 하드웨어·소프트웨어 비호환<br><small style='color:#94a3b8'>Developments may result in hardware and software incompatibility</small>",
"필요할 때 자원이 사용 불가<br><small style='color:#94a3b8'>Resources may not be available when needed</small>",
"복구 계획을 실제로 테스트할 수 없음<br><small style='color:#94a3b8'>Recovery plan cannot be live tested</small>",
"각 조직의 보안 인프라가 다를 수 있음<br><small style='color:#94a3b8'>Security infrastructures may be different</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 하드웨어·소프트웨어 비호환</b></p>
<p>한 조직이 시스템 구성을 업그레이드하면 다른 조직과 <b>호환되지 않게 되어</b> 재해 시 상대 시설을 사용할 수 없게 된다. 시간이 지날수록 두 환경의 격차는 벌어진다.</p>
<table>
<tr><th>옵션</th><th>위험도</th></tr>
<tr style="background:#dcfce7"><td><b>A. 비호환</b></td><td>✅ 시간 경과 시 복구 불가능 — 가장 큼</td></tr>
<tr><td>B. 자원 미가용</td><td>계약으로 해결 가능</td></tr>
<tr><td>C. 실제 테스트 불가</td><td>Paper walk-through로 가능</td></tr>
<tr><td>D. 보안 인프라 차이</td><td>극복 가능</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>두 조직 간 협정 = 호환성 리스크가 핵심</b> (Q391의 동일 조직 내 = 동시 취약)<br>
• 시스템은 끊임없이 변화 — 정기적 호환성 검증 필요<br>
• 관련: Q321(상호협정 BEST), Q391(동일 조직 내 리스크)</div>`,
reference:"CRM Chapter 4: Reciprocal Agreement - Inter-Organization",
keyConcepts:[
"호환성 표류|시간 경과에 따른 양측 환경 격차",
"두 조직 간 vs 동일 조직 내|호환성 vs 동시 취약 — 다른 1차 리스크",
"정기 검증|호환성·구성 일치 주기적 확인 필수"
]
},

{
id: 393,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `광범위한 지역에 다수의 사무소를 가진 조직이 DRP를 개발했다. 실제 자원을 사용하는 가장 비용 효율적인 DRP 테스트는?<br><small style="color:#94a3b8">Using actual resources, which is the MOST cost-effective test of the DRP?</small>`,
options: [
"전면 운영 테스트<br><small style='color:#94a3b8'>Full operational test</small>",
"준비성 테스트<br><small style='color:#94a3b8'>Preparedness test</small>",
"종이 테스트<br><small style='color:#94a3b8'>Paper test</small>",
"회귀 테스트<br><small style='color:#94a3b8'>Regression test</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 준비성 테스트(Preparedness Test)</b></p>
<p>준비성 테스트는 <b>실제 자원·시스템의 일부를 동원</b>하여 복구 준비 상태를 검증한다. 전면 운영 테스트만큼 비싸지 않으면서도 종이 테스트보다 훨씬 높은 확신을 제공한다 — 즉 "실제 자원 사용" 조건에서 가장 비용 효율적.</p>
<table>
<tr><th>테스트 유형</th><th>실제 자원</th><th>비용</th></tr>
<tr><td>A. Full operational</td><td>전체 동원</td><td>매우 높음 ❌</td></tr>
<tr style="background:#dcfce7"><td><b>B. Preparedness</b></td><td>✅ 부분 동원</td><td>중간 — 최적</td></tr>
<tr><td>C. Paper</td><td>없음 (문서 검토)</td><td>저렴하나 "실제 자원" 조건 미충족</td></tr>
<tr><td>D. Regression</td><td>DRP 테스트 아님</td><td>SW 개발용 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
<b>진행 순서: Paper → Preparedness → Full operational</b><br>
• Paper(문서 walk-through) → Preparedness(부분 실제 동원) → Full(전면)<br>
• 질문에 "actual resources" 명시 → Paper 제외<br>
• 다지역 분산 조직에 특히 적합 — 일부 사이트만 동원하여 점진적 검증<br>
• 관련: Q363(Paper test), Q383(Functional 단계), Q387(부분 라이브 테스트)</div>`,
reference:"CRM Chapter 4: DRP Testing — Preparedness Test",
keyConcepts:[
"Preparedness Test|실제 자원 일부 동원으로 준비 상태 검증 — 비용 효율적",
"테스트 진행|Paper → Preparedness → Full operational 순",
"실제 자원 조건|Paper test는 문서 검토라 'actual resources' 충족 못함"
]
},

{
id: 394,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `조직의 재해 복구 요구사항을 충족하려면 백업 간격은 무엇을 초과해서는 안 되는가?<br><small style="color:#94a3b8">Backup intervals should not exceed the:</small>`,
options: [
"서비스 수준 목표(SLO)<br><small style='color:#94a3b8'>service level objective</small>",
"복구 시간 목표(RTO)<br><small style='color:#94a3b8'>recovery time objective (RTO)</small>",
"최대 허용 중단 시간(MAO)<br><small style='color:#94a3b8'>maximum acceptable outage (MAO)</small>",
"복구 시점 목표(RPO)<br><small style='color:#94a3b8'>recovery point objective (RPO)</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 복구 시점 목표(RPO)</b></p>
<p>RPO는 재해 후 데이터를 복원해야 하는 <b>시점</b>을 정의한다. 즉 "허용 가능한 데이터 손실량(시간)". 백업 주기가 RPO보다 길면 데이터 손실이 허용 한도를 초과한다 → 백업 간격 ≤ RPO.</p>
<table>
<tr><th>지표</th><th>대상</th><th>백업 간격과 관계</th></tr>
<tr><td>A. SLO</td><td>서비스 회복 수준</td><td>데이터 백업과 무관</td></tr>
<tr><td>B. RTO</td><td>복구까지 허용 시간</td><td>시스템 복구 시간 — 데이터 ❌</td></tr>
<tr><td>C. MAO</td><td>최대 허용 다운타임</td><td>생존 한계 — 데이터 ❌</td></tr>
<tr style="background:#dcfce7"><td><b>D. RPO</b></td><td><b>허용 데이터 손실</b></td><td>✅ 백업 간격 ≤ RPO</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RPO ↔ 데이터 / RTO ↔ 시스템 시간</b> (불변 매핑)<br>
• RPO=4h → 백업은 최소 4시간마다<br>
• RPO=0 → 동기 미러링·실시간 복제 필요<br>
• MAO ≥ RTO (RTO는 목표, MAO는 생존 한계)<br>
• 관련: Q377(RPO 결정), Q388(데이터 동기 지표)</div>`,
reference:"CRM Chapter 4: RPO and Backup Frequency",
keyConcepts:[
"RPO|허용 가능한 데이터 손실량(시간) — 백업 주기 상한",
"RPO vs RTO|RPO=데이터 시점, RTO=복구 시간",
"MAO|생존 한계 시간 — RTO ≤ MAO 이어야 함"
]
},

{
id: 395,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `경영진이 두 DRP를 검토했다: 플랜 A는 완전 복구까지 2개월, 플랜 B는 8개월. RPO는 동일하다. 플랜 B에서 더 높을 것으로 예상되는 비용은?<br><small style="color:#94a3b8">Plan A: 2 months to fully recover; Plan B: 8 months. RPOs are the same. Plan B projected higher:</small>`,
options: [
"다운타임 비용<br><small style='color:#94a3b8'>downtime costs</small>",
"재개 비용<br><small style='color:#94a3b8'>resumption costs</small>",
"복구 비용<br><small style='color:#94a3b8'>recovery costs</small>",
"워크스루 비용<br><small style='color:#94a3b8'>walk-through costs</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 다운타임 비용</b></p>
<p>복구 기간이 길수록(8개월 > 2개월) 업무 중단이 길어지므로 <b>다운타임 비용(매출 손실·기회 비용)이 증가</b>한다. 반대로 빠른 복구를 위한 재개·복구 비용(투자)은 플랜 A가 더 높다 — 빠른 복구일수록 사전 투자 비용이 큼.</p>
<table>
<tr><th>비용 유형</th><th>플랜 A (2개월)</th><th>플랜 B (8개월)</th></tr>
<tr style="background:#dcfce7"><td><b>A. 다운타임</b></td><td>낮음</td><td><b>높음 ✅</b></td></tr>
<tr><td>B. 재개 비용</td><td>높음</td><td>낮음</td></tr>
<tr><td>C. 복구 비용</td><td>높음</td><td>낮음</td></tr>
<tr><td>D. 워크스루</td><td>DRP 비용 아님</td><td>—</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>복구 시간 ↑ → 다운타임 비용 ↑ / 사전 투자 ↓</b> (트레이드오프)<br>
• 빠른 복구는 hot site·이중화 등 고비용 인프라 필요<br>
• 최적 RTO = 다운타임 비용 + 복구 비용 합계 최소점<br>
• 관련: Q335(예산-RTO 균형), Q381(DRP 최적화 = 시간·비용 최소화)</div>`,
reference:"CRM Chapter 4: DRP Cost Trade-offs",
keyConcepts:[
"다운타임 비용|복구 기간에 비례 — 매출·생산성 손실",
"복구/재개 비용|빠른 복구일수록 사전 투자 ↑",
"최적 RTO|다운타임 + 복구 비용 합계 최소점에서 결정"
]
},

{
id: 396,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `금융 시스템 DRP가 RPO=0, RTO=72시간을 명시한다. 가장 비용 효율적인 솔루션은?<br><small style="color:#94a3b8">RPO=0, RTO=72h. MOST cost-effective solution?</small>`,
options: [
"8시간 내 가동 가능한 핫사이트 + 트랜잭션 로그 비동기 백업<br><small style='color:#94a3b8'>Hot site operational in 8h with asynchronous backup of transaction logs</small>",
"여러 위치의 비동기 업데이트 분산 DB<br><small style='color:#94a3b8'>Distributed databases in multiple locations updated asynchronously</small>",
"동기식 데이터 업데이트 + 핫사이트 standby active 시스템<br><small style='color:#94a3b8'>Synchronous data updates and standby active systems in a hot site</small>",
"48시간 내 가동 가능한 웜사이트 + 동기식 원격 데이터 복사<br><small style='color:#94a3b8'>Synchronous remote copy of data in a warm site operational in 48h</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 동기식 복사 + 48h 웜사이트</b></p>
<p>RPO=0 → <b>동기식 복제 필수</b>. RTO=72h → 48h 가동 웜사이트로 충족(여유 있음). 핫사이트는 RTO를 초과 충족하지만 불필요하게 비싸다 → <b>요구사항을 정확히 충족하는 가장 저렴한 옵션</b>.</p>
<table>
<tr><th>옵션</th><th>RPO=0</th><th>RTO≤72h</th><th>비용</th></tr>
<tr><td>A. 핫(8h) + 비동기</td><td>❌ 비동기</td><td>✅</td><td>높음</td></tr>
<tr><td>B. 비동기 분산</td><td>❌ 비동기</td><td>✅</td><td>중간</td></tr>
<tr><td>C. 동기 + 핫 standby</td><td>✅</td><td>✅</td><td>매우 높음</td></tr>
<tr style="background:#dcfce7"><td><b>D. 동기 + 웜(48h)</b></td><td>✅</td><td>✅ (여유)</td><td><b>최저 ✅</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RPO=0 ⇒ 동기식 복제 필수</b> (비동기 즉시 탈락)<br>
• <b>RTO 충족하는 가장 느린 사이트가 가장 저렴</b> (overspec = 낭비)<br>
• 데이터(RPO)와 사이트(RTO)는 독립적으로 설계 가능<br>
• 관련: Q394(RPO=백업 간격 상한), Q335(예산-RTO 균형), Q346(사이트 유형)</div>`,
reference:"CRM Chapter 4: Matching DR Solutions to RPO/RTO",
keyConcepts:[
"RPO=0 → 동기 복제|비동기 옵션은 자동 탈락",
"RTO 정확 충족|요구보다 빠른 사이트는 비용 낭비",
"데이터와 사이트 분리 설계|동기 복사 + 웜사이트 조합 가능"
]
},

{
id: 397,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `재해 복구 전략 개발의 첫 번째 접근은 무엇을 평가하는 것인가?<br><small style="color:#94a3b8">FIRST approach to developing a disaster recovery strategy is to assess whether:</small>`,
options: [
"모든 위협을 완전히 제거할 수 있는지<br><small style='color:#94a3b8'>all threats can be completely removed</small>",
"비용 효율적인 내장 복원력을 구현할 수 있는지<br><small style='color:#94a3b8'>a cost-effective, built-in resilience can be implemented</small>",
"RTO를 최적화할 수 있는지<br><small style='color:#94a3b8'>the RTO can be optimized</small>",
"복구 비용을 최소화할 수 있는지<br><small style='color:#94a3b8'>the cost of recovery can be minimized</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 비용 효율적인 내장 복원력 구현 가능성</b></p>
<p>DR 전략 개발의 첫 단계는 자산을 <b>본질적으로 더 복원력 있게(resilient)</b> 만들 수 있는지 식별하는 것 — 다양한 라우팅, 대체 경로, 다중 통신사 등. <b>예방이 대응보다 우월</b>하다.</p>
<table>
<tr><th>옵션</th><th>단계</th></tr>
<tr><td>A. 위협 완전 제거</td><td>❌ 불가능</td></tr>
<tr style="background:#dcfce7"><td><b>B. 내장 복원력</b></td><td>✅ 1단계 — 예방이 우선</td></tr>
<tr><td>C. RTO 최적화</td><td>나중 단계</td></tr>
<tr><td>D. 복구 비용 최소화</td><td>나중 단계</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>예방(resilience) > 대응(recovery)</b><br>
• 자산 자체를 견고하게 → 복구 부담 자체를 줄임<br>
• RTO/비용 최적화는 복원력 평가 이후 단계<br>
• 관련: Q370(대체 라우팅), Q384(다른 노드 대체 프로세서), Q381(DRP 최적화)</div>`,
reference:"CRM Chapter 4: DR Strategy Development",
keyConcepts:[
"내장 복원력|자산 자체를 견고하게 — DR 전략의 1단계",
"예방 > 대응|문제 발생 후 처리보다 사전 방지가 우월",
"단계적 접근|복원력 평가 → RTO 결정 → 복구 솔루션 선택"
]
},

{
id: 398,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `비핵심 시스템 복구에 가장 합리적인 옵션은?<br><small style="color:#94a3b8">MOST reasonable option for recovering a noncritical system?</small>`,
options: [
"웜사이트<br><small style='color:#94a3b8'>Warm site</small>",
"모바일 사이트<br><small style='color:#94a3b8'>Mobile site</small>",
"핫사이트<br><small style='color:#94a3b8'>Hot site</small>",
"콜드사이트<br><small style='color:#94a3b8'>Cold site</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 콜드사이트</b></p>
<p>콜드사이트는 <b>저비용·장기 계약</b>이지만 가동까지 시간이 오래 걸린다. 비핵심 시스템은 빠른 복구가 필요 없으므로 콜드사이트가 비용 효율적으로 합리적이다.</p>
<table>
<tr><th>사이트</th><th>비용</th><th>가동 시간</th><th>적합 시스템</th></tr>
<tr><td>핫</td><td>매우 높음</td><td>즉시~수시간</td><td>핵심·필수</td></tr>
<tr><td>웜</td><td>중간</td><td>중간</td><td>중요</td></tr>
<tr><td>모바일</td><td>가변</td><td>운송 시간</td><td>특수 상황</td></tr>
<tr style="background:#dcfce7"><td><b>콜드</b></td><td><b>낮음 ✅</b></td><td>길음</td><td><b>비핵심 ✅</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>중요도와 사이트 매칭</b>: 핵심=핫, 중요=웜, 비핵심=콜드<br>
• 비핵심 시스템에 핫사이트는 과잉 투자<br>
• 관련: Q372(콜드사이트=배선·AC·바닥만), Q396(RTO 정확 충족)</div>`,
reference:"CRM Chapter 4: Recovery Site Types",
keyConcepts:[
"콜드사이트|저비용·긴 가동 시간 — 비핵심 시스템 적합",
"중요도-사이트 매칭|핫=핵심, 웜=중요, 콜드=비핵심",
"비용 효율|복구 시급성에 맞는 최소 사양 선택"
]
},

{
id: 399,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `고가용성 네트워크의 복원력을 평가하는 IS 감사인이 가장 우려해야 할 상황은?<br><small style="color:#94a3b8">IS auditor evaluating high-availability network resilience should be MOST concerned if:</small>`,
options: [
"설정이 지리적으로 분산되어 있음<br><small style='color:#94a3b8'>setup is geographically dispersed</small>",
"서버가 한 사이트에 클러스터링되어 있음<br><small style='color:#94a3b8'>servers are clustered in one site</small>",
"핫사이트가 활성화 준비되어 있음<br><small style='color:#94a3b8'>hot site is ready for activation</small>",
"네트워크에 다양한 라우팅이 구현됨<br><small style='color:#94a3b8'>diverse routing is implemented</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 한 사이트에 클러스터링된 서버</b></p>
<p>단일 사이트 클러스터는 자연재해·정전 등 환경적 사건 발생 시 <b>전체 네트워크가 동시에 무력화</b>된다 — SPOF(단일 장애점). 클러스터링은 장비 장애엔 효과적이지만 사이트 단위 재해엔 무력하다.</p>
<table>
<tr><th>옵션</th><th>복원력 영향</th></tr>
<tr><td>A. 지리적 분산</td><td>✅ 사이트 파괴 시 백업</td></tr>
<tr style="background:#dcfce7"><td><b>B. 단일 사이트 클러스터</b></td><td>❌ SPOF — 가장 우려</td></tr>
<tr><td>C. 핫사이트 준비</td><td>✅ SPOF 대비책</td></tr>
<tr><td>D. 다양한 라우팅</td><td>✅ 통신 백업</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>지리적 분산 ≠ 동일 사이트 클러스터링</b><br>
• 진정한 HA는 사이트 단위 장애도 견뎌야 함<br>
• 관련: Q384(다른 노드 대체 프로세서), Q370(대체 라우팅), Q344(외부 위치)</div>`,
reference:"CRM Chapter 4: High-Availability Network Resilience",
keyConcepts:[
"단일 사이트 클러스터링|SPOF — 환경적 재해에 취약",
"지리적 분산|진정한 HA의 핵심 요소",
"클러스터링 한계|장비 장애엔 효과적, 사이트 재해엔 무력"
]
},

{
id: 400,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `DR 테스트 중 IS 감사인이 DR 사이트 서버의 성능이 느린 것을 관찰했다. 근본 원인을 찾기 위해 가장 먼저 검토해야 할 것은?<br><small style="color:#94a3b8">DR site server performance is slow. IS auditor should FIRST review:</small>`,
options: [
"DR 사이트에서 생성된 이벤트 오류 로그<br><small style='color:#94a3b8'>event error log at the DR site</small>",
"재해 복구 테스트 계획<br><small style='color:#94a3b8'>disaster recovery test plan</small>",
"재해 복구 계획(DRP)<br><small style='color:#94a3b8'>disaster recovery plan (DRP)</small>",
"주 사이트와 DR 사이트의 구성 및 정합성<br><small style='color:#94a3b8'>configurations and alignment of primary and DR sites</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 주/DR 사이트 구성 및 정합성</b></p>
<p>성능 저하의 가장 가능성 높은 원인은 <b>구성 불일치</b>(하드웨어 사양·패치·튜닝 차이)다. 따라서 가장 먼저 양 사이트의 구성과 정합성을 검토해야 한다. 그 후에도 원인이 명확하지 않으면 이벤트 로그를 본다.</p>
<table>
<tr><th>옵션</th><th>순서</th></tr>
<tr style="background:#dcfce7"><td><b>D. 구성/정합성</b></td><td>✅ 1순위 — 가장 가능성 높은 원인</td></tr>
<tr><td>A. 이벤트 로그</td><td>2순위 — 구성 확인 후</td></tr>
<tr><td>B. 테스트 계획</td><td>성능 이슈와 무관</td></tr>
<tr><td>C. DRP</td><td>성능 정보 없음</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>가장 가능성 높은 원인부터 확인</b> (Occam's Razor)<br>
• DR 사이트는 주 사이트와 동일 사양·구성 유지가 필수<br>
• 정합성 표류(drift)는 성능·기능 이슈의 주범<br>
• 관련: Q392(호환성 표류), Q389(DR 테스트 검토)</div>`,
reference:"CRM Chapter 4: DR Site Configuration Management",
keyConcepts:[
"구성 정합성|주/DR 사이트의 동일성 유지가 성능 보장의 핵심",
"근본 원인 분석 순서|가장 가능성 높은 원인부터",
"구성 표류|시간 경과에 따른 환경 격차 — 정기 점검 필수"
]
},

{
id: 401,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `IS 감사인이 DRP를 검토할 때 주로 확인해야 할 것은?<br><small style="color:#94a3b8">IS auditor reviewing DRP should PRIMARILY verify that it is:</small>`,
options: [
"6개월마다 테스트됨<br><small style='color:#94a3b8'>tested every six months</small>",
"정기적으로 검토·업데이트됨<br><small style='color:#94a3b8'>regularly reviewed and updated</small>",
"CEO의 승인을 받음<br><small style='color:#94a3b8'>approved by the CEO</small>",
"모든 부서장에게 전달됨<br><small style='color:#94a3b8'>communicated to every department head</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 정기적 검토·업데이트</b></p>
<p>DRP는 시스템·인력 변화에 맞춰 <b>정기적으로 검토·업데이트되지 않으면 무용지물</b>이 된다. 테스트 주기·승인자·배포 범위는 상황에 따라 다르지만, 최신성 유지는 모든 DRP의 보편적 필수 요건이다.</p>
<table>
<tr><th>옵션</th><th>평가</th></tr>
<tr><td>A. 6개월 테스트</td><td>주기는 조직별 상이 — 절대 기준 ❌</td></tr>
<tr style="background:#dcfce7"><td><b>B. 정기 검토·업데이트</b></td><td>✅ 최신성 = 효과성의 전제</td></tr>
<tr><td>C. CEO 승인</td><td>적절 임원이면 충분</td></tr>
<tr><td>D. 전 부서장 배포</td><td>DRP는 기술 문서 — IS/통신 인력만 관련</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>최신성이 효과성을 결정</b> — 오래된 DRP는 위험<br>
• 테스트 주기는 조직 특성에 따라 다름<br>
• DRP(기술) vs BCP(전사) — 배포 범위 차이<br>
• 관련: Q373(BCP 최신성), Q400(구성 정합성)</div>`,
reference:"CRM Chapter 4: DRP Maintenance",
keyConcepts:[
"DRP 최신성|정기 검토·업데이트가 효과성의 전제",
"테스트 주기 상대성|조직 특성에 따라 결정",
"DRP vs BCP 배포|DRP는 기술 문서로 제한적 배포"
]
},

{
id: 402,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `DRP가 마련된 경우 진행 중인 운영 비용은 DRP가 없을 때와 비교하여 어떻게 되는가?<br><small style="color:#94a3b8">Cost of ongoing operations with a DRP vs without a DRP will MOST likely:</small>`,
options: [
"증가<br><small style='color:#94a3b8'>increase</small>",
"감소<br><small style='color:#94a3b8'>decrease</small>",
"동일<br><small style='color:#94a3b8'>remain the same</small>",
"예측 불가<br><small style='color:#94a3b8'>be unpredictable</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 증가</b></p>
<p>DRP의 <b>테스트·유지보수·구현 비용</b>이 추가되므로 평상시(비재해 기간) 운영 비용은 항상 증가한다. 단, 이 증가분은 재해 발생 시의 잠재 손실에 비해 훨씬 작아 정당화된다.</p>
<table>
<tr><th>옵션</th><th>평가</th></tr>
<tr style="background:#dcfce7"><td><b>A. 증가</b></td><td>✅ 테스트·유지·인프라 비용 추가</td></tr>
<tr><td>B. 감소</td><td>❌ DRP는 추가 비용 발생</td></tr>
<tr><td>C. 동일</td><td>❌ 추가 비용 불가피</td></tr>
<tr><td>D. 예측 불가</td><td>❌ DRP 비용은 비교적 예측 가능</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>DRP = 평상시 비용 증가, 재해 시 손실 절감</b> (보험 성격)<br>
• 추가 비용: 백업 사이트, 정기 테스트, 문서 유지, 인력<br>
• DRP 비용 < 잠재 재해 손실 → 정당화<br>
• 관련: Q381(DRP 최적화), Q395(다운타임 vs 복구 비용 트레이드오프)</div>`,
reference:"CRM Chapter 4: DRP Cost Impact",
keyConcepts:[
"DRP 비용 증가|평상시 운영 비용은 항상 증가",
"보험 성격|추가 비용으로 잠재 손실 회피",
"예측 가능성|DRP 비용은 일관되고 예측 가능"
]
},

{
id: 403,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `시스템 충돌을 시뮬레이션하고 실제 자원을 사용하여 비용 효율적으로 계획의 효과성에 대한 증거를 얻는 연속성 계획 테스트는?<br><small style="color:#94a3b8">Continuity plan test that simulates a system crash and uses actual resources to cost-effectively obtain evidence?</small>`,
options: [
"종이 테스트<br><small style='color:#94a3b8'>Paper test</small>",
"포스트 테스트<br><small style='color:#94a3b8'>Post-test</small>",
"준비성 테스트<br><small style='color:#94a3b8'>Preparedness test</small>",
"워크스루<br><small style='color:#94a3b8'>Walk-through</small>"
],
correct: 2,
explanation: `<p><b>정답: C. 준비성 테스트(Preparedness Test)</b></p>
<p>준비성 테스트는 전체 테스트의 <b>국지화(localized)된 버전</b>으로, 시스템 충돌 시뮬레이션에 실제 자원을 동원한다. 계획의 다른 측면을 정기적으로 점진 검증하여 효과성 증거를 비용 효율적으로 얻는다.</p>
<table>
<tr><th>옵션</th><th>특성</th></tr>
<tr><td>A. Paper test</td><td>문서 walk-through — 실제 자원 ❌</td></tr>
<tr><td>B. Post-test</td><td>테스트 후 정리 단계 (자원 복귀 등)</td></tr>
<tr style="background:#dcfce7"><td><b>C. Preparedness test</b></td><td>✅ 실제 자원 + 국지적 시뮬레이션</td></tr>
<tr><td>D. Walk-through</td><td>인원 이해도 점검 — 실제 자원 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Preparedness = 부분 실제 동원 + 점진적 개선</b><br>
• Paper/Walk-through = 자원 미동원 / Full = 전면 동원<br>
• Post-test는 단계가 아니라 테스트 후 마무리 활동<br>
• 관련: Q393(다지역 조직 비용 효율적 테스트=Preparedness), Q363(Paper)</div>`,
reference:"CRM Chapter 4: Preparedness Test",
keyConcepts:[
"Preparedness Test|국지적 실제 자원 시뮬레이션 — 점진적 효과성 검증",
"Post-test|테스트 후 정리/복귀 활동",
"테스트 분류|실제 자원 동원 여부가 핵심 구분 기준"
]
},

{
id: 404,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `조직의 DRP는 무엇의 조기 복구를 다루어야 하는가?<br><small style="color:#94a3b8">DRP should address early recovery of:</small>`,
options: [
"모든 IS 프로세스<br><small style='color:#94a3b8'>all information systems processes</small>",
"모든 재무 처리 애플리케이션<br><small style='color:#94a3b8'>all financial processing applications</small>",
"IS 관리자가 지정한 애플리케이션만<br><small style='color:#94a3b8'>only those designated by the IS manager</small>",
"비즈니스 경영진이 정의한 우선순위에 따른 처리<br><small style='color:#94a3b8'>processing in priority order, as defined by business management</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 비즈니스 경영진이 정의한 우선순위에 따른 처리</b></p>
<p>복구 우선순위는 <b>비즈니스 경영진이 사전에 결정</b>해야 한다 — 재해 후에는 결정 시간이 없다. IS는 서비스 조직이며, 어떤 시스템이 핵심인지는 업무를 수행하는 비즈니스가 안다.</p>
<table>
<tr><th>옵션</th><th>평가</th></tr>
<tr><td>A. 모든 IS 프로세스</td><td>❌ 우선순위 없이 불가능</td></tr>
<tr><td>B. 모든 재무 앱</td><td>❌ 재무가 항상 핵심은 아님</td></tr>
<tr><td>C. IS 관리자 지정</td><td>❌ 비즈니스가 결정해야 함</td></tr>
<tr style="background:#dcfce7"><td><b>D. 비즈니스 우선순위</b></td><td>✅ 사전 결정·업무 지식 기반</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>복구 우선순위는 비즈니스 결정사항</b> (IS 결정 ❌)<br>
• BIA 결과가 우선순위의 근거<br>
• IS는 서비스 제공자 — 우선순위 따라 복구 실행<br>
• 관련: Q353(BIA), Q361(프로세스 오너), Q382(사용자 부서 참여)</div>`,
reference:"CRM Chapter 4: Recovery Prioritization",
keyConcepts:[
"비즈니스 우선순위|복구 순서는 업무 중요도 기반 — 비즈니스가 결정",
"IS 역할|서비스 제공자 — 우선순위 따라 실행",
"사전 결정|재해 후 결정 불가 — BIA로 사전 정의"
]
},

{
id: 405,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `DRP에 필요한 시스템 자원의 가용성을 결정할 때 가장 중요한 승인은?<br><small style="color:#94a3b8">MOST important approval when determining availability of system resources for the DRP?</small>`,
options: [
"임원 경영진<br><small style='color:#94a3b8'>Executive management</small>",
"IT 관리<br><small style='color:#94a3b8'>IT management</small>",
"이사회<br><small style='color:#94a3b8'>Board of directors</small>",
"운영위원회<br><small style='color:#94a3b8'>Steering committee</small>"
],
correct: 1,
explanation: `<p><b>정답: B. IT 관리</b></p>
<p>DRP는 IT 서비스의 복구·프로비저닝에 기반하므로, <b>시스템 자원의 가용성을 책임지는 IT 관리</b>의 승인이 가장 중요하다 — 재해 발생 시 자원이 실제로 가용함을 보증할 수 있는 주체이기 때문.</p>
<table>
<tr><th>역할</th><th>책임</th></tr>
<tr><td>임원 경영진</td><td>전반적 승인 — 자원 가용성 직접 보증 ❌</td></tr>
<tr style="background:#dcfce7"><td><b>IT 관리</b></td><td>✅ 시스템 자원 관리·가용성 보증</td></tr>
<tr><td>이사회</td><td>최종 승인 — 운영적 가용성 ❌</td></tr>
<tr><td>운영위원회</td><td>RTO/RPO 등 요구사항 결정</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"자원 가용성" 키워드 → IT 관리</b><br>
• 운영위원회 = 요구사항 정의 / IT = 자원 보증 / 임원 = 전략 승인<br>
• 질문의 구체적 측면(자원 가용성)에 직접 책임지는 주체 선택<br>
• 관련: Q401(DRP 검토), Q404(우선순위는 비즈니스)</div>`,
reference:"CRM Chapter 4: DRP Approval Roles",
keyConcepts:[
"IT 관리 책임|시스템 자원 가용성 보증",
"역할 분담|운영위=요구사항, IT=실행, 임원=승인",
"질문 키워드|승인 대상에 따라 적절한 주체 다름"
]
},

{
id: 406,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `재해 복구 노력의 성공을 가장 잘 보장하는 것은?<br><small style="color:#94a3b8">MOST likely ensure that a disaster recovery effort is successful?</small>`,
options: [
"테이블탑 테스트 수행<br><small style='color:#94a3b8'>Tabletop test was performed</small>",
"데이터 복원 완료<br><small style='color:#94a3b8'>Data restoration was completed</small>",
"복구 절차 승인<br><small style='color:#94a3b8'>Recovery procedures are approved</small>",
"적절한 인력 자원 투입<br><small style='color:#94a3b8'>Appropriate staff resources are committed</small>"
],
correct: 1,
explanation: `<p><b>정답: B. 데이터 복원 완료</b></p>
<p>백업이 유효한지 확인하는 <b>가장 신뢰할 수 있는 방법은 실제로 시스템에 복원해 보는 것</b>이다. 데이터 복원 테스트는 최소 연 1회 수행해야 한다. 데이터 없이는 다른 어떤 요소도 복구를 성공시킬 수 없다.</p>
<table>
<tr><th>옵션</th><th>보장 수준</th></tr>
<tr><td>A. 테이블탑</td><td>유용하나 실제 작동 미검증</td></tr>
<tr style="background:#dcfce7"><td><b>B. 데이터 복원 완료</b></td><td>✅ 실제 작동 입증</td></tr>
<tr><td>C. 절차 승인</td><td>문서적 준비 — 작동 미검증</td></tr>
<tr><td>D. 인력 투입</td><td>필수 요소이나 데이터 없으면 무의미</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>"백업이 작동한다"는 것은 복원해봐야 안다</b><br>
• 백업 성공 ≠ 복원 성공 (검증 필수)<br>
• 데이터는 복구의 가장 근본적 자산<br>
• 관련: Q400(DR 사이트 성능), Q403(Preparedness test)</div>`,
reference:"CRM Chapter 4: Backup Restoration Validation",
keyConcepts:[
"복원 테스트|백업 유효성 검증의 유일한 신뢰 방법",
"백업 vs 복원|성공적 백업이 성공적 복원을 보장하지 않음",
"데이터 우선|복구의 근본 자산 — 없으면 모든 것이 무의미"
]
},

{
id: 407,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `DRP의 비핵심 시스템 테스트를 BCP와 통합하는 가장 좋은 이유는?<br><small style="color:#94a3b8">BEST reason for integrating noncritical system DRP testing with BCP?</small>`,
options: [
"DRP를 BIA에 정렬시키기 위해<br><small style='color:#94a3b8'>To ensure DRPs aligned to BIA</small>",
"인프라 복구 인력이 비즈니스 SME의 도움을 받을 수 있도록<br><small style='color:#94a3b8'>Infrastructure personnel can be assisted by business SMEs</small>",
"BCP가 DRP에 없는 역량의 존재를 가정할 수 있기 때문<br><small style='color:#94a3b8'>BCPs may assume capabilities not in DRPs</small>",
"비즈니스 임원에게 DR 역량에 대한 지식 제공<br><small style='color:#94a3b8'>Provide business executives with DR knowledge</small>"
],
correct: 2,
explanation: `<p><b>정답: C. BCP가 DRP에 없는 역량의 존재를 가정할 수 있음</b></p>
<p>BCP는 재택근무 등 <b>DRP에 포함되지 않은 역량</b>을 전제할 수 있고, IT가 그 역량(예: 대규모 재택 지원)을 충분히 준비하지 않았을 수 있다. 또한 외부 온라인 시스템 같은 비핵심 시스템도 비즈니스 핵심 프로세스에 사용되면 테스트가 필요한데 DRP 범위 밖일 수 있다 → 통합 테스트로 격차 발견.</p>
<table>
<tr><th>옵션</th><th>평가</th></tr>
<tr><td>A. BIA 정렬</td><td>맞지만 비핵심 통합 테스트와 무관</td></tr>
<tr><td>B. SME 지원</td><td>인프라 복구는 SME 불필요</td></tr>
<tr style="background:#dcfce7"><td><b>C. BCP-DRP 격차</b></td><td>✅ 가정과 실제 역량의 불일치 발견</td></tr>
<tr><td>D. 임원 인식</td><td>테스트의 주 목적이 아님</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BCP 가정 ≠ DRP 실제 역량</b> — 통합 테스트로 격차 노출<br>
• 비핵심 IT 시스템도 핵심 비즈니스 프로세스 지원 가능<br>
• BCP/DRP 분리 운영의 위험: 가정의 불일치<br>
• 관련: Q386(IR-BC 정합성), Q387(부분 라이브 테스트)</div>`,
reference:"CRM Chapter 4: Integrated BCP/DRP Testing",
keyConcepts:[
"BCP-DRP 격차|BCP가 가정한 역량이 DRP에 없을 수 있음",
"통합 테스트 필요성|가정과 실제 역량의 불일치 노출",
"비핵심 시스템 중요성|핵심 비즈니스 프로세스 지원 가능"
]
},

{
id: 408,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `재해 복구 감사 수행 시 IS 감사인이 가장 중요하게 검토할 사항은?<br><small style="color:#94a3b8">MOST important to review when conducting a disaster recovery audit?</small>`,
options: [
"필요 시 핫사이트가 계약·이용 가능<br><small style='color:#94a3b8'>Hot site contracted and available</small>",
"BC 매뉴얼이 이용 가능·최신 상태<br><small style='color:#94a3b8'>BC manual available and current</small>",
"보험 보장이 충분·보험료 최신<br><small style='color:#94a3b8'>Insurance coverage adequate, premiums current</small>",
"데이터 백업이 적시 수행·외부 저장<br><small style='color:#94a3b8'>Data backups performed timely and stored offsite</small>"
],
correct: 3,
explanation: `<p><b>정답: D. 데이터 백업 적시 수행·외부 저장</b></p>
<p>처리할 <b>데이터가 없으면 다른 모든 복구 요소는 무가치</b>하다. 핫사이트·매뉴얼·보험이 모두 갖춰져 있어도 데이터가 없으면 복구 자체가 불가능하다. 계획이 없어도 데이터만 있으면 어떤 형태의 복구라도 가능.</p>
<table>
<tr><th>옵션</th><th>중요도</th></tr>
<tr><td>A. 핫사이트</td><td>중요하나 데이터 없으면 무용</td></tr>
<tr><td>B. BC 매뉴얼</td><td>권장이지만 DR 감사 핵심 ❌</td></tr>
<tr><td>C. 보험</td><td>재무 보호 — 후순위</td></tr>
<tr style="background:#dcfce7"><td><b>D. 데이터 백업</b></td><td>✅ 모든 복구의 전제 조건</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>데이터 = 복구의 절대 전제</b> (인프라보다 우선)<br>
• Q380(BCP 감사)에서는 "인명 안전" 정답 → 인명 옵션 부재 시 데이터<br>
• 우선순위: 인명 > 데이터 > 인프라 > 재무 보호<br>
• 관련: Q380(BCP 감사=인명), Q406(데이터 복원 검증)</div>`,
reference:"CRM Chapter 4: DR Audit Priorities",
keyConcepts:[
"데이터 우선|모든 복구 활동의 절대 전제",
"DR vs BCP 감사|DR=데이터 백업, BCP=인명 안전",
"외부 저장|현장 동시 손실 방지를 위한 필수 요건"
]
},

{
id: 409,
domain: "4",
ks: "4B5 Disaster Recovery Plans",
question: `DRP를 효과적으로 실행하기 위해 가장 중요한 요소는?<br><small style="color:#94a3b8">MOST critical element to execute a DRP effectively?</small>`,
options: [
"백업 데이터의 외부 저장<br><small style='color:#94a3b8'>Offsite storage of backup data</small>",
"주요 DR 연락처의 최신 목록<br><small style='color:#94a3b8'>Up-to-date list of key DR contacts</small>",
"대체 데이터 센터의 가용성<br><small style='color:#94a3b8'>Availability of a replacement data center</small>",
"명확히 정의된 RTO<br><small style='color:#94a3b8'>Clearly defined RTO</small>"
],
correct: 0,
explanation: `<p><b>정답: A. 백업 데이터의 외부 저장</b></p>
<p>시스템 복원을 위해서는 <b>백업 데이터에 대한 접근</b>이 필수다. 외부 저장이 없으면 현장 재해 시 백업도 함께 손실된다. 다른 모든 요소(연락처·대체 센터·RTO)는 데이터 없이는 무의미하다.</p>
<table>
<tr><th>옵션</th><th>중요도</th></tr>
<tr style="background:#dcfce7"><td><b>A. 외부 백업 저장</b></td><td>✅ 복원의 절대 전제</td></tr>
<tr><td>B. 연락처 목록</td><td>중요하나 데이터 없으면 무용</td></tr>
<tr><td>C. 대체 센터</td><td>한 옵션 — 모바일·상호협정 대체 가능</td></tr>
<tr><td>D. RTO 정의</td><td>BCP 핵심 — DR 실행의 본질 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>DR 핵심 = 데이터 복원</b> → 외부 백업이 절대 요건<br>
• 대체 센터는 여러 솔루션 중 하나일 뿐<br>
• RTO는 계획 요소 — 실행 요소 아님<br>
• 관련: Q406(데이터 복원), Q408(DR 감사 우선순위)</div>`,
reference:"CRM Chapter 4: DR Critical Elements",
keyConcepts:[
"외부 백업 저장|현장 재해 시 동시 손실 방지 — DR 실행의 절대 전제",
"실행 vs 계획|RTO는 계획, 백업은 실행",
"대체 솔루션|데이터 센터·모바일·상호협정·아웃소싱"
]
},

{
id:410,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"To ensure structured disaster recovery, it is MOST important that the business continuity plan (BCP) and disaster recovery plan (DRP) are:",
questionKo:"구조적인 재해 복구를 보장하기 위해 BCP와 DRP에 가장 중요한 것은?",
options:[
"stored at an alternate location.",
"communicated to all users.",
"tested regularly.",
"updated regularly."
],
optionsKo:[
"대체 위치에 보관된다.",
"모든 사용자에게 전달된다.",
"정기적으로 테스트된다.",
"정기적으로 갱신된다."
],
correct:2,
explanation:`<b>정답: C. 정기적으로 테스트된다</b><br><br>
<b>핵심:</b> 테스트되지 않은 BCP/DRP는 실제 재해 상황에서 무용지물이다. 보관·전달·갱신 모두 테스트 없이는 구조적 복구를 보장할 수 없다.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 대체 위치 보관</td><td>전제 조건일 뿐 — 실제 작동 검증 ❌</td></tr>
<tr><td>B. 사용자 전달</td><td>인지만으로는 실행 불가 ❌</td></tr>
<tr style="background:#d4edda"><td><b>C. 정기 테스트</b></td><td><b>✅ 팀이 절차를 숙지·검증 → 구조적 복구 가능</b></td></tr>
<tr><td>D. 정기 갱신</td><td>최신 상태라도 검증 안 되면 무용 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>테스트 = BCP/DRP 신뢰성의 본질</b><br>
• 갱신·보관·전달은 테스트의 보조 요건<br>
• 관련: Q393(준비도 테스트), Q403(시뮬레이션), Q401(검토), Q407(BCP-DRP 통합 테스트)</div>`,
reference:"CRM Chapter 4: BCP/DRP Testing",
keyConcepts:[
"정기 테스트|BCP/DRP의 구조적 복구 보장 핵심",
"테스트 vs 갱신|갱신만으로는 실전 작동 미검증",
"통합 검증|BCP·DRP 팀 절차 숙지 효과"
]
},

{
id:411,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"Which of the following provides the BEST evidence of an organization's disaster recovery capability readiness?",
questionKo:"조직의 재해 복구 역량 준비도에 대한 가장 좋은 증거는?",
options:[
"Disaster recovery plan (DRP)",
"Customer references for the alternate site provider",
"Processes for maintaining the DRP",
"Results of tests and exercises"
],
optionsKo:[
"재해 복구 계획(DRP)",
"대체 사이트 공급자에 대한 고객 참조",
"DRP 유지관리 프로세스",
"테스트 및 훈련 결과"
],
correct:3,
explanation:`<b>정답: D. 테스트 및 훈련 결과</b><br><br>
<b>핵심:</b> 계획·유지관리·공급자 평판은 모두 보조 증거. 오직 실제 테스트 결과만이 DR 역량의 적정성을 입증한다.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. DRP 문서</td><td>존재만으로는 효과성 미검증 ❌</td></tr>
<tr><td>B. 공급자 고객 참조</td><td>사이트 선정 보조 — 계획 효과성 무관 ❌</td></tr>
<tr><td>C. DRP 유지 프로세스</td><td>최신성 보장 — 작동 보장 아님 ❌</td></tr>
<tr style="background:#d4edda"><td><b>D. 테스트·훈련 결과</b></td><td><b>✅ 적정성 입증 + 합리적 준비도 보증</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>증거 = 결과</b> → 문서·프로세스가 아니라 실측<br>
• 테스트 없는 DRP는 가설일 뿐<br>
• 관련: Q410(정기 테스트), Q393(준비도 테스트), Q403(시뮬레이션), Q401(검토)</div>`,
reference:"CRM Chapter 4: DR Readiness Evidence",
keyConcepts:[
"테스트 결과|DR 준비도의 유일한 객관적 증거",
"문서 vs 실증|DRP 존재 ≠ DRP 작동",
"감사 증거 우선순위|훈련 결과 > 유지관리 > 문서"
]
},

{
id:412,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"After a disaster declaration, the media creation date at a warm recovery site is based on the:",
questionKo:"재해 선언 후 웜 복구 사이트의 미디어 생성일은 무엇에 기반하는가?",
options:[
"recovery point objective (RPO)",
"recovery time objective (RTO)",
"service delivery objective (SDO)",
"maximum tolerable outage (MTO)"
],
optionsKo:[
"복구 시점 목표(RPO)",
"복구 시간 목표(RTO)",
"서비스 제공 목표(SDO)",
"최대 허용 중단 시간(MTO)"
],
correct:0,
explanation:`<b>정답: A. RPO</b><br><br>
<b>핵심:</b> 미디어 생성일 = 데이터 복원 기준점 = RPO. RPO는 허용 가능한 데이터 손실량을 정의하므로 복원 미디어가 얼마나 최신이어야 하는지 결정한다.<br><br>
<table class="cmp">
<tr><th>지표</th><th>의미</th><th>미디어 생성일과의 관계</th></tr>
<tr style="background:#d4edda"><td><b>A. RPO</b></td><td><b>허용 데이터 손실량</b></td><td><b>✅ 복원 시점 = 미디어 생성일</b></td></tr>
<tr><td>B. RTO</td><td>복구까지 허용 시간</td><td>시간 측정 — 데이터 시점 무관 ❌</td></tr>
<tr><td>C. SDO</td><td>대체 모드 서비스 수준</td><td>운영 품질 지표 ❌</td></tr>
<tr><td>D. MTO</td><td>대체 모드 최대 지속 시간</td><td>대체 운영 한도 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>RPO ↔ 데이터 / RTO ↔ 시간</b><br>
• 미디어 생성일이 RPO보다 오래되면 손실 허용 한도 초과<br>
• 관련: Q394(백업 주기 ≤ RPO), Q396(RPO=0 동기 복제)</div>`,
reference:"CRM Chapter 4: RPO and Backup Media",
keyConcepts:[
"RPO|데이터 손실 허용 기준 — 미디어 생성일 결정",
"RTO|복구 시간 — 미디어 시점과 무관",
"SDO/MTO|대체 운영 품질·지속 한도"
]
},

{
id:413,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"An information systems (IS) auditor is performing a review of the disaster recovery hot site used by a financial institution. Which of the following is the GREATEST concern?",
questionKo:"금융기관의 재해 복구 핫사이트 검토 시 가장 큰 우려 사항은?",
options:[
"System administrators use shared accounts which never expire at the hot site.",
"Disk space utilization data are not kept current.",
"Physical security controls at the hot site are less robust than at the main site.",
"Servers at the hot site do not have the same specifications as at the main site."
],
optionsKo:[
"핫사이트의 시스템 관리자들이 만료되지 않는 공유 계정을 사용한다.",
"디스크 공간 사용량 데이터가 최신 상태로 유지되지 않는다.",
"핫사이트의 물리적 보안 통제가 본사이트보다 덜 견고하다.",
"핫사이트 서버 사양이 본사이트와 동일하지 않다."
],
correct:1,
explanation:`<b>정답: B. 디스크 사용량 데이터 미최신</b><br><br>
<b>핵심:</b> 디스크 공간 부족 = 재해 시 복구 자체 실패. 다른 우려는 정책·절차로 보완 가능하지만 용량 부족은 복구 불가로 직결.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 공유·무만료 계정</td><td>보안 관행 문제 — 정책으로 보완 가능 ❌</td></tr>
<tr style="background:#d4edda"><td><b>B. 디스크 사용량 미파악</b></td><td><b>✅ 용량 부족 시 복구 자체 실패</b></td></tr>
<tr><td>C. 물리 보안 약함</td><td>인력·절차로 보완 가능 ❌</td></tr>
<tr><td>D. 서버 사양 차이</td><td>필수 프로그램 구동 가능하면 무방 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>복구 가능성 자체를 위협</b> > 보안·성능 이슈<br>
• 핫사이트 용량 모니터링은 DR 운영의 기본<br>
• 관련: Q400(DR 사이트 성능), Q406(데이터 복원), Q409(외부 백업)</div>`,
reference:"CRM Chapter 4: Hot Site Audit",
keyConcepts:[
"용량 모니터링|디스크 부족 시 복구 자체 실패",
"우선순위|복구 실현 가능성 > 보안·성능 미세조정",
"보완 가능성|정책·인력으로 해결 가능한 이슈는 차순위"
]
},

{
id:414,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"Which of the following disaster recovery testing techniques is the MOST efficient way to determine the effectiveness of the plan?",
questionKo:"DR 계획의 효과성을 결정하는 가장 효율적인 테스트 기법은?",
options:[
"Preparedness tests",
"Paper tests",
"Full operational tests",
"Actual service disruption"
],
optionsKo:[
"준비도 테스트",
"문서(페이퍼) 테스트",
"전체 운영 테스트",
"실제 서비스 중단"
],
correct:0,
explanation:`<b>정답: A. 준비도 테스트</b><br><br>
<b>핵심:</b> 준비도 테스트는 전체 환경을 단계적으로 시뮬레이션 → 비교적 낮은 비용으로 효과성 검증. 효율(비용·리스크 대비 학습) 관점에서 최적.<br><br>
<table class="cmp">
<tr><th>기법</th><th>판정</th></tr>
<tr style="background:#d4edda"><td><b>A. 준비도 테스트</b></td><td><b>✅ 단계별 시뮬레이션 — 저비용·고학습</b></td></tr>
<tr><td>B. 페이퍼 테스트</td><td>시뮬레이션 없음 — 학습·증거 부족 ❌</td></tr>
<tr><td>C. 전체 운영 테스트</td><td>승인·비용 부담 + 실제 재해 유발 위험 ❌</td></tr>
<tr><td>D. 실제 서비스 중단</td><td>규제·정책 강제 외 비권장 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>효율성 = 비용 대비 효과성 검증력</b><br>
• 준비도 테스트 = 실자원 사용 + 단계적 = 균형점<br>
• 관련: Q393(비용효율 준비도), Q403(시뮬레이션), Q410(정기 테스트), Q411(테스트 결과 증거)</div>`,
reference:"CRM Chapter 4: DR Test Techniques",
keyConcepts:[
"준비도 테스트|단계적 환경 시뮬레이션 — 효율 최적",
"페이퍼 vs 운영|학습 부족 ↔ 비용·위험 과다",
"DR 테스트 효율성|비용·리스크 대비 검증력"
]
},

{
id:415,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"Which of the following scenarios provides the BEST disaster recovery plan (DRP) to implement for critical applications?",
questionKo:"중요 애플리케이션에 가장 좋은 DR 시나리오는?",
options:[
"Daily data backups that are stored offsite and a hot site located 140 km from the main data center.",
"Daily data backups that are stored onsite in a fireproof safe.",
"Real-time data replication between the main data center and the hot site located 500 m from the main site.",
"Daily data backups that are stored offsite with a warm site located 70 km from the main data center."
],
optionsKo:[
"외부 보관 일일 백업 + 본 데이터센터에서 140km 떨어진 핫사이트",
"내화 금고에 보관되는 내부 일일 백업",
"본 사이트에서 500m 떨어진 핫사이트와 실시간 데이터 복제",
"외부 보관 일일 백업 + 본 데이터센터에서 70km 떨어진 웜사이트"
],
correct:0,
explanation:`<b>정답: A. 외부 백업 + 140km 핫사이트</b><br><br>
<b>핵심:</b> 핫사이트는 본사이트에서 충분히 떨어져야(광역 재해 회피) 하며, 외부 백업과 결합되어야 함. 500m는 동일 재해 영향권, 웜사이트는 복구 시간 부족.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr style="background:#d4edda"><td><b>A. 외부 백업 + 140km 핫사이트</b></td><td><b>✅ 지리적 분산 + 즉시 복구 가능</b></td></tr>
<tr><td>B. 내부 내화 금고</td><td>복제 사이트 부재 — 중요 앱 부적합 ❌</td></tr>
<tr><td>C. 500m 핫사이트 + 실시간</td><td>지리적 분산 부족 — 광역 재해 동반 손실 ❌</td></tr>
<tr><td>D. 70km 웜사이트</td><td>복구에 며칠 소요 — 중요 앱 부적합 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>지리적 분산 + 사이트 등급</b> 둘 다 충족 필요<br>
• 핫사이트는 광역 재해 회피 위해 충분한 거리<br>
• 관련: Q399(단일 사이트 클러스터링), Q398(콜드사이트), Q396(RPO/RTO)</div>`,
reference:"CRM Chapter 4: DR Site Selection",
keyConcepts:[
"지리적 분산|광역 재해 시 동반 손실 방지",
"사이트 등급|중요 앱 = 핫사이트, 웜은 복구 시간 부족",
"외부 백업|복원 데이터 가용성 보장"
]
},

{
id:416,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"An IS auditor discovers that the DRP does not include a critical application hosted in the cloud. Management states the cloud vendor is responsible for DR and DR testing. What is the NEXT course of action?",
questionKo:"DRP에 클라우드 호스팅 중요 앱이 누락. 경영진은 클라우드 벤더가 DR 책임이라고 답변. 다음 조치는?",
options:[
"Plan an audit of the cloud vendor.",
"Review the vendor contract to determine its DR capabilities.",
"Review an independent auditor's report of the cloud vendor.",
"Request a copy of the DRP from the cloud vendor."
],
optionsKo:[
"클라우드 벤더 감사 계획",
"DR 역량 확인 위해 벤더 계약서 검토",
"클라우드 벤더의 독립 감사 보고서 검토",
"클라우드 벤더로부터 DRP 사본 요청"
],
correct:1,
explanation:`<b>정답: B. 벤더 계약서 검토</b><br><br>
<b>핵심:</b> 벤더의 DR 책임은 계약서에 명시되어야만 강제 가능. 계약 조항 확인이 모든 후속 조치의 전제 — 감사·보고서·DRP 요청은 계약 명시 후에 의미 있음.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정·순서</th></tr>
<tr><td>A. 벤더 감사</td><td>계약 명시 후에만 의미 ❌</td></tr>
<tr style="background:#d4edda"><td><b>B. 계약서 검토</b></td><td><b>✅ NEXT — DR 의무·RTO/RPO 명시 확인</b></td></tr>
<tr><td>C. 독립 감사 보고서</td><td>계약 명시 후 후속 검증 단계 ❌</td></tr>
<tr><td>D. DRP 사본 요청</td><td>계약 명시 후 적정성 검토 단계 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>계약 = DR 책임의 법적 기반</b><br>
• 계약 미명시 시 벤더는 DR 제공 의무 없음<br>
• 관련: Q411(테스트 결과 증거), Q413(핫사이트 감사)</div>`,
reference:"CRM Chapter 4: Cloud DR Audit",
keyConcepts:[
"계약 우선|DR 책임은 계약 명시로만 강제",
"NEXT 절차|계약 검토 → 보고서 → DRP → 감사",
"클라우드 책임 분담|RTO/RPO 명시 필수"
]
},

{
id:417,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"There are several methods of providing telecommunication continuity. The method of routing traffic through split-cable or duplicate-cable facilities is called:",
questionKo:"분할 케이블 또는 이중 케이블 시설을 통해 트래픽을 라우팅하는 통신 연속성 기법은?",
options:[
"alternative routing.",
"diverse routing.",
"long-haul network diversity.",
"last-mile circuit protection."
],
optionsKo:[
"대체 라우팅(alternative routing)",
"다양 라우팅(diverse routing)",
"장거리 네트워크 다양성",
"라스트마일 회선 보호"
],
correct:1,
explanation:`<b>정답: B. Diverse routing</b><br><br>
<b>핵심:</b> Diverse routing = 분할/이중 케이블 시설로 라우팅. Alternative는 다른 매체(구리↔광)·네트워크 사용. 두 개념 자주 혼동.<br><br>
<table class="cmp">
<tr><th>기법</th><th>정의</th></tr>
<tr><td>A. Alternative routing</td><td>다른 매체·회선·종단점 사용 (구리↔광) ❌</td></tr>
<tr style="background:#d4edda"><td><b>B. Diverse routing</b></td><td><b>✅ 분할/이중 케이블 시설 라우팅</b></td></tr>
<tr><td>C. Long-haul diversity</td><td>장거리 캐리어 간 패킷 스위칭 다양화 ❌</td></tr>
<tr><td>D. Last-mile protection</td><td>로컬 루프 이중화(T-1·마이크로파·동축) ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Diverse = 케이블 시설 이중화</b> (동일 도관 가능 → 한계 존재)<br>
• <b>Alternative = 매체·네트워크 변경</b><br>
• Long-haul = 장거리, Last-mile = 로컬 루프</div>`,
reference:"CRM Chapter 4: Telecommunications Continuity",
keyConcepts:[
"Diverse routing|분할/이중 케이블 시설",
"Alternative routing|다른 매체·네트워크",
"Long-haul vs Last-mile|장거리 캐리어 ↔ 로컬 루프"
]
},

{
id:418,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"In which of the following situations is it MOST appropriate to implement data mirroring as the recovery strategy?",
questionKo:"데이터 미러링을 복구 전략으로 구현하기에 가장 적절한 상황은?",
options:[
"Disaster tolerance is high.",
"The recovery time objective (RTO) is high.",
"The recovery point objective (RPO) is low.",
"The RPO is high."
],
optionsKo:[
"재해 허용도가 높다.",
"RTO가 높다.",
"RPO가 낮다.",
"RPO가 높다."
],
correct:2,
explanation:`<b>정답: C. RPO가 낮다</b><br><br>
<b>핵심:</b> 데이터 미러링 = 데이터 손실 최소화 기법 → RPO가 낮을(=손실 허용 최소) 때 적합. RTO나 재해 허용도와는 직접 관계 없음.<br><br>
<table class="cmp">
<tr><th>상황</th><th>판정</th></tr>
<tr><td>A. 재해 허용도 높음</td><td>RTO 영역 — 미러링 무관 ❌</td></tr>
<tr><td>B. RTO 높음</td><td>복구 시간 여유 — 미러링 불필요 ❌</td></tr>
<tr style="background:#d4edda"><td><b>C. RPO 낮음</b></td><td><b>✅ 손실 최소화 → 미러링 필수</b></td></tr>
<tr><td>D. RPO 높음</td><td>저비용 백업으로 충분 — 미러링 과잉 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>미러링 ↔ RPO</b> (데이터), 사이트·복구속도 ↔ RTO (시간)<br>
• RPO=0 → 동기 미러링, RPO 낮음 → 미러링 일반<br>
• 관련: Q394(백업주기 ≤ RPO), Q396(RPO=0 동기), Q412(미디어 생성일=RPO)</div>`,
reference:"CRM Chapter 4: Data Mirroring and RPO",
keyConcepts:[
"미러링|데이터 손실 최소화 — RPO 낮을 때",
"RPO vs RTO|데이터 시점 ↔ 복구 시간",
"비용 효율|RPO 높으면 저비용 백업 충분"
]
},

{
id:419,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"An IS auditor is performing an audit in the data center when the fire alarm begins sounding. Which of the following is the MOST important action for the data center staff to complete?",
questionKo:"데이터센터 감사 중 화재 경보. 데이터센터 직원이 가장 먼저 완료해야 할 조치는?",
options:[
"Notify the local fire department of the alarm condition.",
"Prepare to activate the fire suppression system.",
"Ensure all persons in the data center are evacuated.",
"Remove all backups from the data center."
],
optionsKo:[
"지역 소방서에 경보 상태 통보",
"화재 진압 시스템 활성화 준비",
"데이터센터 내 모든 인원 대피 보장",
"데이터센터에서 모든 백업 매체 반출"
],
correct:2,
explanation:`<b>정답: C. 인원 대피</b><br><br>
<b>핵심:</b> 인명 안전이 항상 최우선. 데이터·자산은 후순위, 진압 시스템은 자동화, 백업은 외부 보관으로 대체 가능.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 소방서 통보</td><td>대부분 자동 통보 ❌</td></tr>
<tr><td>B. 진압 시스템 활성화</td><td>대피 전 활성화 시 위험 — 자동 작동 ❌</td></tr>
<tr style="background:#d4edda"><td><b>C. 인원 대피</b></td><td><b>✅ 인명 안전 = 절대 우선</b></td></tr>
<tr><td>D. 백업 매체 반출</td><td>대피 지연 + 외부 보관으로 대체 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Life safety first</b> — CISA 절대 원칙<br>
• 자산 보호 > 인명 보호는 항상 오답<br>
• 관련: Q380(BCP 감사=인명), Q409(외부 백업)</div>`,
reference:"CRM Chapter 4: Life Safety Priority",
keyConcepts:[
"인명 우선|모든 비상 상황의 절대 1순위",
"자동화 의존|진압·통보 시스템은 자동 작동",
"백업 대체성|외부 보관으로 데이터 손실 위험 완화"
]
},

{
id:420,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"The MAIN purpose for periodically testing offsite disaster recovery facilities is to:",
questionKo:"외부 DR 시설을 주기적으로 테스트하는 주요 목적은?",
options:[
"protect the integrity of the data in the database.",
"eliminate the need to develop detailed contingency plans.",
"ensure the continued compatibility of the contingency facilities.",
"ensure that program and system documentation remains current."
],
optionsKo:[
"데이터베이스 데이터 무결성 보호",
"상세한 비상 계획 개발 필요성 제거",
"비상 시설의 지속적 호환성 보장",
"프로그램·시스템 문서의 최신성 보장"
],
correct:2,
explanation:`<b>정답: C. 비상 시설의 지속적 호환성 보장</b><br><br>
<b>핵심:</b> 외부 시설 테스트의 본질은 본 사이트와 DR 사이트 간 하드웨어·소프트웨어 호환성 검증. 실제 재해 시 계획이 작동함을 보증.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. DB 무결성 보호</td><td>백업 유효성 ≠ 무결성 보호 ❌</td></tr>
<tr><td>B. 상세 계획 불필요</td><td>테스트는 계획 검증이지 대체 아님 ❌</td></tr>
<tr style="background:#d4edda"><td><b>C. 호환성 보장</b></td><td><b>✅ 본↔DR 사이트 작동 보증</b></td></tr>
<tr><td>D. 문서 최신화</td><td>부수적 효과 — 주 목적 아님 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>호환성 = 환경 변화 시 DR 작동의 핵심</b><br>
• 본 사이트 변경 시 DR 사이트 동기화 검증<br>
• 관련: Q400(DR 사이트 성능), Q411(테스트 결과 증거), Q413(핫사이트 감사)</div>`,
reference:"CRM Chapter 4: Offsite Facility Testing",
keyConcepts:[
"호환성 검증|본↔DR 사이트 환경 일치 확인",
"테스트 본질|계획 작동 보증, 계획 대체 아님",
"환경 변화 추적|본 사이트 변경 시 DR 동기화"
]
},

{
id:421,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"A hot site should be implemented as a recovery strategy when the:",
questionKo:"핫사이트를 복구 전략으로 구현해야 하는 경우는?",
options:[
"disaster downtime tolerance is low.",
"recovery point objective (RPO) is high.",
"recovery time objective (RTO) is high.",
"maximum tolerable downtime is long."
],
optionsKo:[
"재해 다운타임 허용도가 낮다.",
"RPO가 높다.",
"RTO가 높다.",
"최대 허용 다운타임이 길다."
],
correct:0,
explanation:`<b>정답: A. 다운타임 허용도가 낮다</b><br><br>
<b>핵심:</b> 핫사이트는 즉시 복구 가능 → 다운타임 허용도가 낮을 때 필수. RTO/MTD가 길거나 RPO가 높으면 웜·콜드사이트가 비용효율적.<br><br>
<table class="cmp">
<tr><th>상황</th><th>적합 사이트</th></tr>
<tr style="background:#d4edda"><td><b>A. 다운타임 허용도 낮음</b></td><td><b>✅ 핫사이트 — 즉시 복구</b></td></tr>
<tr><td>B. RPO 높음</td><td>데이터 손실 허용 — 미러링 불필요 ❌</td></tr>
<tr><td>C. RTO 높음</td><td>웜·콜드사이트 가능 ❌</td></tr>
<tr><td>D. MTD 김</td><td>웜·콜드사이트 비용효율적 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>핫사이트 = 짧은 RTO/낮은 다운타임 허용</b><br>
• 사이트 등급 ↔ 시간 지표(RTO/MTD), 미러링 ↔ 데이터 지표(RPO)<br>
• 관련: Q398(콜드사이트), Q415(140km 핫사이트), Q418(미러링/RPO)</div>`,
reference:"CRM Chapter 4: Recovery Site Selection",
keyConcepts:[
"핫사이트|즉시 복구 — 다운타임 허용 낮을 때",
"사이트 등급 ↔ 시간|RTO·MTD 짧을수록 핫",
"비용 효율|허용 시간 길면 웜·콜드"
]
},

{
id:422,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"A large chain of shops with EFT POS devices has a central communications processor for connecting to the banking network. Which of the following is the BEST DRP for the communications processor?",
questionKo:"EFT POS 매장 체인의 은행 네트워크 연결용 중앙 통신 프로세서에 가장 좋은 DRP는?",
options:[
"Offsite storage of daily backups",
"Alternative standby processor onsite",
"Installation of duplex communication links",
"Alternative standby processor at another network node"
],
optionsKo:[
"외부 보관 일일 백업",
"내부 대체 대기 프로세서",
"이중 통신 회선 설치",
"다른 네트워크 노드의 대체 대기 프로세서"
],
correct:3,
explanation:`<b>정답: D. 다른 네트워크 노드의 대기 프로세서</b><br><br>
<b>핵심:</b> 중앙 프로세서 장애는 장비·전원·통신 모든 원인으로 발생 가능. 다른 노드의 대기 프로세서만이 모든 장애 유형을 커버.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 외부 백업</td><td>온라인 EFT — 백업으로 프로세서 대체 불가 ❌</td></tr>
<tr><td>B. 내부 대기 프로세서</td><td>장비 장애만 대응 — 전원·통신 장애 무력 ❌</td></tr>
<tr><td>C. 이중 통신 회선</td><td>회선 장애만 대응 ❌</td></tr>
<tr style="background:#d4edda"><td><b>D. 타 노드 대기 프로세서</b></td><td><b>✅ 장비·전원·통신 모두 커버</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>지리적 분산 + 기능 이중화</b> 결합이 핵심<br>
• 단일 사이트 이중화는 동반 장애 취약<br>
• 관련: Q399(단일 사이트 클러스터링), Q415(140km 핫사이트), Q417(diverse routing)</div>`,
reference:"CRM Chapter 4: Communications DR",
keyConcepts:[
"지리적 분산|단일 사이트 장애 회피",
"포괄 커버|장비·전원·통신 모든 장애 유형 대응",
"온라인 처리|백업 ≠ 실시간 가용성"
]
},

{
id:423,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"Which of the following statements is useful while drafting a disaster recovery plan (DRP)?",
questionKo:"DRP 작성 시 유용한 진술은?",
options:[
"Downtime costs decrease as the recovery point objective (RPO) increases.",
"Downtime costs increase with time.",
"Recovery costs are independent of time.",
"Recovery costs can only be controlled on a short-term basis."
],
optionsKo:[
"RPO가 증가하면 다운타임 비용이 감소한다.",
"다운타임 비용은 시간이 지남에 따라 증가한다.",
"복구 비용은 시간과 무관하다.",
"복구 비용은 단기적으로만 통제 가능하다."
],
correct:1,
explanation:`<b>정답: B. 다운타임 비용은 시간에 따라 증가</b><br><br>
<b>핵심:</b> 다운타임 비용(매출 손실·유휴 자원·인건비)은 시간 경과에 따라 증가. 복구 비용은 허용 시간이 짧을수록 높음 → 두 곡선의 교차점이 최적 RTO.<br><br>
<table class="cmp">
<tr><th>진술</th><th>판정</th></tr>
<tr><td>A. 다운타임 ↔ RPO</td><td>RPO는 복구 비용 영역 ❌</td></tr>
<tr style="background:#d4edda"><td><b>B. 다운타임 ↑ with time</b></td><td><b>✅ 손실 누적 — DRP 핵심 가정</b></td></tr>
<tr><td>C. 복구 비용 시간 무관</td><td>복구 시간 짧을수록 비용 증가 ❌</td></tr>
<tr><td>D. 단기 통제만</td><td>좋은 계획으로 예측·통제 가능 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>다운타임 비용 ↑ vs 복구 비용 ↓</b> 교차점 = 최적 전략<br>
• DRP 본질 = 불확실성 최소화·예측성 증가<br>
• 관련: Q395(Plan A vs B 비용), Q402(DRP 운영 비용)</div>`,
reference:"CRM Chapter 4: DR Cost Analysis",
keyConcepts:[
"다운타임 비용|시간 경과에 따라 누적 증가",
"복구 비용|허용 시간 짧을수록 증가",
"최적 RTO|두 곡선 교차점 — 비용 균형"
]
},

{
id:424,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"An IS auditor is conducting a review of the disaster recovery procedures for a data center. Which of the following indicators BEST shows that the procedures meet the requirements?",
questionKo:"데이터센터 DR 절차 검토 시 요건 충족을 가장 잘 보여주는 지표는?",
options:[
"Documented procedures were approved by management.",
"Procedures were reviewed and compared with industry good practices.",
"A tabletop exercise using the procedures was conducted.",
"Recovery teams and their responsibilities are documented."
],
optionsKo:[
"문서화된 절차가 경영진 승인됨",
"절차가 업계 모범 사례와 비교 검토됨",
"절차를 사용한 테이블탑 훈련이 수행됨",
"복구 팀과 책임이 문서화됨"
],
correct:2,
explanation:`<b>정답: C. 테이블탑 훈련 수행</b><br><br>
<b>핵심:</b> 테이블탑 훈련은 책임자들이 절차를 직접 검토하며 누락·오류를 발견 → 요건 충족 여부의 가장 강력한 검증.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 경영진 승인</td><td>절차 적정성 미검증 ❌</td></tr>
<tr><td>B. 모범 사례 비교</td><td>유용하나 실제 검증 부족 ❌</td></tr>
<tr style="background:#d4edda"><td><b>C. 테이블탑 훈련</b></td><td><b>✅ 책임자 참여 — 누락·오류 식별</b></td></tr>
<tr><td>D. 팀·책임 문서화</td><td>절차 일부 — 정확성·완전성 미증명 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>실제 사용해본 절차만이 요건 충족 입증</b><br>
• 테이블탑 = 페이퍼 테스트 + 책임자 참여<br>
• 관련: Q411(테스트 결과 증거), Q414(준비도 테스트), Q420(외부 시설 테스트)</div>`,
reference:"CRM Chapter 4: DR Procedure Validation",
keyConcepts:[
"테이블탑 훈련|책임자 참여 절차 검토 — 누락 식별",
"승인 vs 검증|경영진 승인 ≠ 절차 적정성",
"문서화 vs 작동|문서 존재 ≠ 요건 충족"
]
},

{
id:425,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"What component requires frequent updating to ensure the continued effectiveness of a disaster recovery plan (DRP)?",
questionKo:"DRP의 지속적 효과성을 위해 자주 갱신해야 하는 요소는?",
options:[
"Contact information of key personnel",
"Server inventory documentation",
"Individual roles and responsibilities",
"Procedures for declaring a disaster"
],
optionsKo:[
"핵심 인력 연락처 정보",
"서버 인벤토리 문서",
"개별 역할과 책임",
"재해 선언 절차"
],
correct:0,
explanation:`<b>정답: A. 핵심 인력 연락처</b><br><br>
<b>핵심:</b> 인력 연락처는 가장 빈번히 변경(이직·번호 변경)되며, 재해 시 즉시 필요. 다른 요소는 상대적으로 안정적이거나 보완 가능.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr style="background:#d4edda"><td><b>A. 핵심 인력 연락처</b></td><td><b>✅ 가장 빈번한 변경 — 즉시 필요</b></td></tr>
<tr><td>B. 서버 인벤토리</td><td>변경관리 연계 — 인력 있으면 보완 가능 ❌</td></tr>
<tr><td>C. 역할·책임</td><td>경험 있는 인력이 다른 역할 수행 가능 ❌</td></tr>
<tr><td>D. 재해 선언 절차</td><td>중요하나 인력 가용성보다 후순위 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>People first</b> — 사람 없으면 어떤 절차도 무용</br>
• 연락처는 변경 빈도 최고 — 정기 갱신 필수<br>
• 관련: Q401(DRP 검토·갱신), Q410(정기 테스트)</div>`,
reference:"CRM Chapter 4: DRP Maintenance",
keyConcepts:[
"연락처 갱신|변경 빈도 최고 — 재해 시 즉시 필요",
"인력 우선|사람 가용성이 절차·인벤토리보다 우선",
"DRP 유지관리|동적 요소 식별이 핵심"
]
},

{
id:426,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"When developing a disaster recovery plan (DRP), what criteria should be considered when determining the acceptable downtime?",
questionKo:"DRP 개발 시 허용 가능한 다운타임을 결정할 때 고려해야 할 기준은?",
options:[
"Annual loss expectancy",
"Service delivery objective",
"Quantity of orphan data",
"Maximum tolerable outage (MTO)"
],
optionsKo:[
"연간 손실 예상치(ALE)",
"서비스 제공 목표(SDO)",
"고아 데이터 양",
"최대 허용 중단 시간(MTO)"
],
correct:3,
explanation:`<b>정답: D. MTO</b><br><br>
<b>핵심:</b> MTO = 시스템·프로세스가 재해 후 재개되기까지 조직이 허용 가능한 최대 시간. RTO는 MTO를 기반으로 결정.<br><br>
<table class="cmp">
<tr><th>지표</th><th>판정</th></tr>
<tr><td>A. ALE</td><td>위험관리 계산 — DR 무관 ❌</td></tr>
<tr><td>B. SDO</td><td>대체 운영 서비스 수준 ❌</td></tr>
<tr><td>C. 고아 데이터</td><td>BCP 관련 — 다운타임과 무관 ❌</td></tr>
<tr style="background:#d4edda"><td><b>D. MTO</b></td><td><b>✅ 허용 다운타임의 직접 기준</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>MTO = 다운타임 한도, RTO = 그 안에 복구 목표</b><br>
• MTO ≥ RTO (RTO는 MTO 내에서 설정)<br>
• 관련: Q412(RPO/RTO/MTO/SDO 비교), Q421(다운타임 허용도)</div>`,
reference:"CRM Chapter 4: MTO and RTO",
keyConcepts:[
"MTO|허용 다운타임의 절대 한도",
"RTO ⊆ MTO|RTO는 MTO 내 설정",
"DR 지표 구분|ALE는 위험 측정, SDO는 서비스 수준"
]
},

{
id:427,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"An IS auditor is auditing an IT DRP. The IS auditor should PRIMARILY ensure that the plan covers:",
questionKo:"IT DRP 감사 시 IS 감사인이 가장 우선적으로 확인해야 할 사항은?",
options:[
"a resilient IT infrastructure.",
"alternate site information.",
"documented disaster recovery test results.",
"analysis and prioritization of business functions."
],
optionsKo:[
"복원력 있는 IT 인프라",
"대체 사이트 정보",
"문서화된 DR 테스트 결과",
"비즈니스 기능 분석 및 우선순위"
],
correct:3,
explanation:`<b>정답: D. 비즈니스 기능 분석·우선순위</b><br><br>
<b>핵심:</b> DRP는 비즈니스 요구사항과 정렬되어야 함. 인프라·사이트·테스트 모두 비즈니스 기능 우선순위에 기반해 결정.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 복원력 인프라</td><td>모든 기능에 필요한 것 아님 ❌</td></tr>
<tr><td>B. 대체 사이트 정보</td><td>우선순위 후의 결정 사항 ❌</td></tr>
<tr><td>C. 테스트 결과</td><td>유지관리 단계 — 정렬 후 ❌</td></tr>
<tr style="background:#d4edda"><td><b>D. 비즈니스 기능 우선순위</b></td><td><b>✅ DRP의 출발점 — 비즈니스 정렬</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Business-driven DR</b> — IT 결정은 비즈니스 우선순위에서 파생<br>
• BIA → 우선순위 → RTO → 인프라·사이트<br>
• 관련: Q404(복구 우선순위는 비즈니스 결정), Q415(사이트 선정), Q426(MTO)</div>`,
reference:"CRM Chapter 4: Business-Aligned DRP",
keyConcepts:[
"비즈니스 우선순위|DRP의 출발점",
"BIA 기반 DR|기능 중요도 → 복구 전략",
"감사 우선|정렬 검증이 인프라·사이트 검증보다 우선"
]
},

{
id:428,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"When reviewing a disaster recovery plan, an IS auditor should be MOST concerned with the lack of:",
questionKo:"DRP 검토 시 IS 감사인이 가장 우려해야 할 결여 사항은?",
options:[
"process owner involvement.",
"well-documented testing procedures.",
"an alternate processing facility.",
"a well-documented data classification scheme."
],
optionsKo:[
"프로세스 소유자 참여",
"잘 문서화된 테스트 절차",
"대체 처리 시설",
"잘 문서화된 데이터 분류 체계"
],
correct:0,
explanation:`<b>정답: A. 프로세스 소유자 참여</b><br><br>
<b>핵심:</b> 프로세스 소유자는 BIA의 핵심 — 우선순위·중요 요소 검증의 유일한 출처. 참여 없으면 DRP 정당성 자체가 무너짐.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr style="background:#d4edda"><td><b>A. 프로세스 소유자 참여</b></td><td><b>✅ BIA 정당성 — 우선순위 검증의 본질</b></td></tr>
<tr><td>B. 테스트 절차 문서화</td><td>소유자 참여 없으면 절차 자체 무의미 ❌</td></tr>
<tr><td>C. 대체 시설</td><td>BIA 결과에 따라 결정 — 후순위 ❌</td></tr>
<tr><td>D. 데이터 분류</td><td>일반 통제 — DR 정렬과 거리 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BIA 출발점 = 프로세스 소유자</b><br>
• 비즈니스 정렬 결여는 모든 후속 요소를 무력화<br>
• 관련: Q404(비즈니스가 우선순위 결정), Q427(비즈니스 기능 정렬)</div>`,
reference:"CRM Chapter 4: BIA and DRP",
keyConcepts:[
"프로세스 소유자|BIA·우선순위 검증의 본질",
"비즈니스 정렬|결여 시 모든 DR 요소 무력화",
"감사 우려 우선순위|정렬 결여 > 시설·문서 결여"
]
},

{
id:429,
domain:"4",
ks:"4B5 Disaster Recovery Plans",
question:"Which of the following BEST helps define disaster recovery strategies?",
questionKo:"DR 전략을 정의하는 데 가장 도움이 되는 것은?",
options:[
"Annual loss expectancy and exposure factor",
"Maximum tolerable downtime and data loss",
"Existing server and network redundancies",
"Data backup and offsite storage requirements"
],
optionsKo:[
"연간 손실 예상치(ALE)와 노출 계수",
"최대 허용 다운타임과 데이터 손실",
"기존 서버·네트워크 이중화",
"데이터 백업 및 외부 저장 요건"
],
correct:1,
explanation:`<b>정답: B. 최대 허용 다운타임·데이터 손실 (RTO·RPO)</b><br><br>
<b>핵심:</b> RTO·RPO는 BIA의 핵심 산출물 → DR 전략 설계의 직접 입력값. 다른 요소는 부수적이거나 일반 위험 측정.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. ALE·노출 계수</td><td>일반 위험 측정 — DR 무관 ❌</td></tr>
<tr style="background:#d4edda"><td><b>B. MTD·데이터 손실 (RTO·RPO)</b></td><td><b>✅ BIA 산출물 — DR 전략 직접 결정</b></td></tr>
<tr><td>C. 기존 이중화</td><td>현황 — 전략 정의 입력 부족 ❌</td></tr>
<tr><td>D. 백업·저장 요건</td><td>BCP 일부 — 단독으로 전략 정의 불가 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>BIA → RTO/RPO → DR 전략</b> (필수 흐름)<br>
• 시간 한도 + 데이터 한도 = 전략 선택의 양대 축<br>
• 관련: Q426(MTO), Q427(비즈니스 정렬), Q418(미러링/RPO)</div>`,
reference:"CRM Chapter 4: BIA Outputs and DR Strategy",
keyConcepts:[
"RTO·RPO|DR 전략의 두 핵심 입력",
"BIA 산출물|MTD·데이터 손실 한도",
"전략 vs 현황|현존 이중화는 입력 자료에 불과"
]
},

{
id:430,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Enterprise governance of IT frameworks MAINLY helps organizations address business issues by:",
questionKo:"엔터프라이즈 IT 거버넌스(EGIT) 프레임워크가 비즈니스 이슈를 해결하는 주요 방식은?",
options:[
"aligning high-level strategic objectives with operational-level objectives, followed by direct work outcomes.",
"establishing a risk management capability to address business issues and preserve the value delivered to stakeholders.",
"developing a roadmap to help fill in the gap between the current state (as-is) and the desired state (to-be).",
"conducting multiple meetings with different stakeholder groups to learn about their expectations."
],
optionsKo:[
"고위 전략 목표와 운영 목표를 정렬하고 직접적 작업 결과로 연결",
"비즈니스 이슈 대응 및 이해관계자 가치 보존을 위한 위험관리 역량 수립",
"as-is와 to-be 간 격차 해소를 위한 로드맵 개발",
"이해관계자 그룹과의 다중 회의로 기대치 파악"
],
correct:0,
explanation:`<b>정답: A. 전략·운영 목표 정렬</b><br><br>
<b>핵심:</b> EGIT의 본질 = 비즈니스 전략과 IT 전략의 정렬. 위험관리·로드맵·이해관계자 회의는 모두 정렬 이후에 의미 있음.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정·순서</th></tr>
<tr style="background:#d4edda"><td><b>A. 전략 정렬</b></td><td><b>✅ EGIT 본질 — 가치 전달의 출발점</b></td></tr>
<tr><td>B. 위험관리 수립</td><td>정렬 후 효과적 ❌</td></tr>
<tr><td>C. 로드맵 개발</td><td>정렬 후 단계 ❌</td></tr>
<tr><td>D. 이해관계자 회의</td><td>전략 이해 도구 — 정렬에 종속 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>Strategic alignment = EGIT 1순위 가치</b><br>
• 비즈니스 ↔ IT 정렬 → 가치 전달·합리적 비용<br>
• COBIT 등 EGIT 프레임워크 핵심 원칙</div>`,
reference:"CRM Chapter 5: EGIT Frameworks",
keyConcepts:[
"전략 정렬|EGIT의 1순위 가치",
"가치 전달|정렬 통한 합리적 비용 달성",
"COBIT 원칙|비즈니스↔IT 목표 연결"
]
},

{
id:431,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Which of the following is the MOST important input for defining an information security framework for an enterprise?",
questionKo:"기업 정보보안 프레임워크 정의 시 가장 중요한 입력은?",
options:[
"Information security policies",
"Regulatory compliance requirements",
"Risk assessment results",
"Global security standards"
],
optionsKo:[
"정보보안 정책",
"규제 준수 요건",
"위험평가 결과",
"글로벌 보안 표준"
],
correct:3,
explanation:`<b>정답: D. 글로벌 보안 표준</b><br><br>
<b>핵심:</b> 글로벌 표준(ISO 27001, NIST 등)은 고수준 필수 통제를 제공 → 프레임워크 정의의 출발점. 정책·위험평가는 프레임워크의 산출물·구성요소.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 보안 정책</td><td>프레임워크의 산출물 — 후속 단계 ❌</td></tr>
<tr><td>B. 규제 준수</td><td>프레임워크 정의를 강제하지 않음 ❌</td></tr>
<tr><td>C. 위험평가</td><td>프레임워크의 구성 요소 — 입력 아님 ❌</td></tr>
<tr style="background:#d4edda"><td><b>D. 글로벌 표준</b></td><td><b>✅ 고수준 통제 제공 — 프레임워크 출발점</b></td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>표준 → 프레임워크 → 정책·통제·위험평가</b><br>
• ISO 27001/NIST CSF/COBIT가 대표 표준<br>
• 관련: Q430(EGIT 정렬)</div>`,
reference:"CRM Chapter 5: Security Frameworks",
keyConcepts:[
"글로벌 표준|프레임워크 정의의 입력",
"정책·위험평가|프레임워크의 산출물·구성요소",
"표준 계층|표준 → 프레임워크 → 정책 → 절차"
]
},

{
id:432,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"An enterprise can ensure that the recipients of emails from its employees can authenticate the identity of the sender by:",
questionKo:"수신자가 이메일 발신자의 신원을 인증할 수 있도록 보장하는 방법은?",
options:[
"digitally signing all email messages.",
"encrypting all email messages.",
"compressing all email messages.",
"password protecting all email messages."
],
optionsKo:[
"모든 이메일 디지털 서명",
"모든 이메일 암호화",
"모든 이메일 압축",
"모든 이메일 비밀번호 보호"
],
correct:0,
explanation:`<b>정답: A. 디지털 서명</b><br><br>
<b>핵심:</b> 디지털 서명 = 발신자 인증 + 무결성. 암호화는 기밀성, 압축은 크기, 비밀번호는 접근통제 — 모두 인증과 무관.<br><br>
<table class="cmp">
<tr><th>방법</th><th>제공 보안 속성</th></tr>
<tr style="background:#d4edda"><td><b>A. 디지털 서명</b></td><td><b>✅ 발신자 인증 + 무결성 + 부인방지</b></td></tr>
<tr><td>B. 암호화</td><td>기밀성 — 인증 없음 ❌</td></tr>
<tr><td>C. 압축</td><td>크기 절감 — 보안 무관 ❌</td></tr>
<tr><td>D. 비밀번호 보호</td><td>접근통제 — 인증 없음 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>인증 = 디지털 서명</b>, 기밀성 = 암호화 (구분 필수)<br>
• 디지털 서명 = 송신자 개인키 → 수신자 공개키로 검증<br>
• PKI 기반 부인방지 핵심 메커니즘</div>`,
reference:"CRM Chapter 5: Digital Signatures",
keyConcepts:[
"디지털 서명|발신자 인증·무결성·부인방지",
"보안 속성 구분|인증 ≠ 기밀성 ≠ 접근통제",
"PKI|개인키 서명 ↔ 공개키 검증"
]
},

{
id:433,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"To ensure compliance with a security policy requiring that passwords be a combination of letters and numbers, an IS auditor should recommend that:",
questionKo:"비밀번호가 문자·숫자 조합이어야 한다는 보안 정책 준수를 위해 IS 감사인이 권고할 사항은?",
options:[
"the enterprise policy be changed.",
"passwords are periodically changed.",
"an automated password management tool be used.",
"security awareness training is delivered."
],
optionsKo:[
"기업 정책 변경",
"비밀번호 정기 변경",
"자동화된 비밀번호 관리 도구 사용",
"보안 인식 교육 제공"
],
correct:2,
explanation:`<b>정답: C. 자동화된 비밀번호 관리 도구</b><br><br>
<b>핵심:</b> 자동 도구는 구문 규칙을 강제(예방통제) → 정책 준수 보장. 정책 변경·교육은 강제력 부족.<br><br>
<table class="cmp">
<tr><th>선택지</th><th>판정</th></tr>
<tr><td>A. 정책 변경</td><td>정책은 적절 — 변경 불필요 ❌</td></tr>
<tr><td>B. 정기 변경</td><td>좋은 관행 — 조합 규칙 강제 안 함 ❌</td></tr>
<tr style="background:#d4edda"><td><b>C. 자동 관리 도구</b></td><td><b>✅ 예방통제 — 구문 규칙 강제</b></td></tr>
<tr><td>D. 보안 교육</td><td>인식 향상 — 강제력 없음 ❌</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>준수 강제 = 자동화된 예방통제</b><br>
• 교육·정책은 보조 — 기술적 강제 우선<br>
• 통제 분류: 예방(자동 도구) > 탐지·교정</div>`,
reference:"CRM Chapter 5: Password Controls",
keyConcepts:[
"자동 강제|예방통제 — 정책 준수의 가장 확실한 방법",
"기술 vs 인식|기술적 통제가 교육보다 강력",
"비밀번호 도구|구문·반복·재사용 모두 통제"
]
},

{
id:434,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"The implementation of access controls FIRST requires:",
questionKo:"접근통제 구현 시 가장 먼저 필요한 것은?",
options:[
"a classification of information systems (IS) resources.",
"the labeling of IS resources.",
"the creation of an access control list.",
"an inventory of IS resources."
],
optionsKo:[
"IS 자원 분류",
"IS 자원 라벨링",
"접근통제 목록(ACL) 생성",
"IS 자원 인벤토리"
],
correct:3,
explanation:`<b>정답: D. IS 자원 인벤토리</b><br><br>
<b>핵심:</b> 인벤토리 → 소유권·분류 → 라벨링 → ACL. 무엇이 있는지 모르면 분류·통제 자체가 불가능.<br><br>
<table class="cmp">
<tr><th>단계</th><th>순서</th></tr>
<tr style="background:#d4edda"><td><b>D. 인벤토리</b></td><td><b>✅ 1단계 — 모든 후속 단계의 기반</b></td></tr>
<tr><td>A. 분류</td><td>2단계 — 인벤토리 후</td></tr>
<tr><td>B. 라벨링</td><td>3단계 — 분류 후</td></tr>
<tr><td>C. ACL 생성</td><td>4단계 — 분류·소유권 확정 후</td></tr>
</table>
<div class="sbox"><b>핵심 인사이트</b><br>
• <b>You can't protect what you don't know exists</b><br>
• 인벤토리 → 분류 → 라벨 → 통제 (정통 순서)<br>
• 자산관리 = 모든 보안 통제의 출발점</div>`,
reference:"CRM Chapter 5: Access Control Implementation",
keyConcepts:[
"인벤토리|접근통제의 1단계 — 자산 식별",
"통제 순서|인벤토리 → 분류 → 라벨 → ACL",
"자산관리|모든 보안 통제의 전제"
]
},

{
id:435,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"From a control perspective, the PRIMARY objective of classifying information assets is to:",
questionKo:"통제 관점에서 정보자산을 분류하는 <b>주된 목적</b>은?",
options:[
"A. Establish guidelines for the level of access controls that should be assigned.",
"B. Ensure access controls are assigned to all information assets.",
"C. Assist management and auditors in risk assessment.",
"D. Identify which assets need to be insured against losses."
],
optionsKo:[
"A. 부여할 접근통제 수준에 대한 지침 수립",
"B. 모든 정보자산에 접근통제 적용 보장",
"C. 경영진과 감사인의 위험평가 지원",
"D. 손실 보험이 필요한 자산 식별"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 접근통제 수준 지침 ✅</td><td>민감도·중요도 등급 → 등급별 접근통제 가이드라인 도출 — 분류의 핵심 목적</td></tr>
<tr><td>B. 모든 자산에 통제</td><td>모든 정보에 접근통제를 적용하면 과잉보호 → 비용 낭비</td></tr>
<tr><td>C. 위험평가 지원</td><td>분류는 위험평가 결과를 기반으로 수행 (순서 반대)</td></tr>
<tr><td>D. 보험 대상 식별</td><td>유효하나 분류의 주된 목적이 아님</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 정보자산 분류 흐름</b><br>
위험평가 → 민감도/중요도 등급 부여 → <mark>등급별 접근통제 지침</mark> → 통제 구현<br><br>
<b>🔗 관련 문제:</b> Q434(접근통제 순서: 인벤토리→분류→라벨→ACL) · Q430(EGIT 프레임워크) · Q431(보안 프레임워크 입력)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Information Classification",
keyConcepts:[
"정보분류|민감도·중요도에 따라 등급 부여 → 접근통제 수준 결정",
"과잉보호 방지|모든 자산에 동일 통제 적용은 비효율적",
"분류 vs 위험평가|위험평가가 분류의 입력, 분류가 위험평가의 입력이 아님"
]
},

{
id:436,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Which of the following is the BEST audit procedure to determine if a firewall is configured in compliance with the enterprise security policy?",
questionKo:"방화벽이 기업 보안 정책에 부합하게 구성되었는지 확인하기 위한 <b>최선의 감사 절차</b>는?",
options:[
"A. Review the parameter settings.",
"B. Interview the firewall administrator.",
"C. Review the actual procedures.",
"D. Review the device's log file for recent attacks."
],
optionsKo:[
"A. 매개변수(파라미터) 설정 검토",
"B. 방화벽 관리자 인터뷰",
"C. 실제 운영 절차 검토",
"D. 최근 공격에 대한 장비 로그 파일 검토"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 파라미터 설정 검토 ✅</td><td>실제 구성과 보안 정책을 직접 비교 가능 — 감사 증거 문서화에 최적</td></tr>
<tr><td>B. 관리자 인터뷰</td><td>구두 확인만으로는 실제 구성의 정확성을 보장할 수 없음</td></tr>
<tr><td>C. 운영 절차 검토</td><td>절차가 정책과 일치해도 실제 규칙이 정확히 반영되었는지 확인 불가</td></tr>
<tr><td>D. 로그 파일 검토</td><td>공격 탐지에는 유용하나 구성의 정책 준수 여부를 입증하지 못함</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 감사 증거 강도</b><br>
<mark>직접 검토(파라미터)</mark> > 절차 문서 검토 > 인터뷰 > 간접 로그 분석<br>
실제 설정값과 정책을 1:1 대조하는 것이 가장 강력한 감사 증거<br><br>
<b>🔗 관련 문제:</b> Q435(정보분류→접근통제 지침) · Q434(접근통제 구현 순서) · Q431(보안 프레임워크)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Firewalls and Network Security",
keyConcepts:[
"파라미터 검토|실제 구성 vs 정책 직접 비교 — 최선의 감사 증거",
"감사 증거 계층|직접 검토 > 문서 > 인터뷰 > 간접 분석",
"방화벽 감사|규칙·설정이 보안 정책과 일치하는지 확인이 핵심"
]
},

{
id:437,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Which of the following methods BEST mitigates the risk of disclosing confidential information through the use of social networking sites?",
questionKo:"소셜 네트워킹 사이트를 통한 기밀정보 유출 위험을 <b>가장 잘 완화</b>하는 방법은?",
options:[
"A. Providing security awareness training",
"B. Requiring a signed acceptable use policy",
"C. Monitoring the use of social media",
"D. Blocking access to social media"
],
optionsKo:[
"A. 보안 인식 교육 제공",
"B. 서명된 이용 허용 정책(AUP) 요구",
"C. 소셜 미디어 사용 모니터링",
"D. 소셜 미디어 접근 차단"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 보안 인식 교육 ✅</td><td>모바일·가정 PC 등 대체 접속 수단까지 포괄 — 사용자 행동 자체를 변화시키는 유일한 통제</td></tr>
<tr><td>B. AUP 서명</td><td>좋은 통제이나, 사용자가 위험을 인식하지 못하면 정책만으로 효과 제한적</td></tr>
<tr><td>C. 사용 모니터링</td><td>사내 네트워크만 감시 가능 — 모바일·가정 접속은 추적 불가</td></tr>
<tr><td>D. 접근 차단</td><td>사내 네트워크만 차단 가능 — 모바일·가정 접속은 통제 불가</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 핵심 논리</b><br>
기술적 통제(차단·모니터링)는 <u>사내 네트워크</u>에만 유효<br>
모바일·가정 PC 등 대체 경로가 존재하므로 <mark>사용자 인식 변화(교육)</mark>가 가장 효과적<br><br>
<b>🔗 관련 문제:</b> Q433(비밀번호 정책 준수 — 자동화 도구) · Q435(정보분류 목적) · Q436(방화벽 정책 준수 감사)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Security Awareness Training",
keyConcepts:[
"보안 인식 교육|기술적 통제의 한계를 보완하는 가장 효과적 수단",
"대체 접속 경로|모바일·가정 PC로 인해 네트워크 통제만으로는 불충분",
"소셜 미디어 위험|기밀정보 유출의 주요 채널 — 사용자 행동 변화가 핵심"
]
},

{
id:438,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Users are issued security tokens to be used in combination with a personal identification number (PIN) to access the enterprise virtual private network. Regarding the PIN, what is the MOST important rule to be included in a security policy?",
questionKo:"사용자에게 보안 토큰과 PIN을 조합하여 기업 VPN에 접속하도록 발급하였다. PIN과 관련하여 보안 정책에 포함할 <b>가장 중요한 규칙</b>은?",
options:[
"A. Users should not leave tokens where they can be stolen.",
"B. Users must never keep the token in the same bag as their laptop computer.",
"C. Users should select a PIN that is completely random, with no repeating digits.",
"D. Users should never write down their PIN."
],
optionsKo:[
"A. 토큰을 도난 가능한 곳에 방치하지 말 것",
"B. 토큰을 노트북과 같은 가방에 보관하지 말 것",
"C. PIN은 반복 숫자 없이 완전히 무작위로 선택할 것",
"D. PIN을 절대 기록하지 말 것"
],
correct:3,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 토큰 방치 금지</td><td>토큰만으로는 접근 불가 — PIN 없이는 무용</td></tr>
<tr><td>B. 토큰·노트북 분리</td><td>토큰만으로는 접근 불가 — PIN 없이는 무용</td></tr>
<tr><td>C. 무작위 PIN</td><td>PIN은 비밀 유지가 핵심이지 복잡성이 아님</td></tr>
<tr class="correct-row"><td>D. PIN 기록 금지 ✅</td><td>PIN을 적어두면 토큰+메모+PC로 네트워크 접근 가능 → 2FA 무력화</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 2요소 인증(2FA) 보안 원리</b><br>
소유(토큰) + 지식(PIN) → 두 요소가 <u>분리</u>되어야 보안 유지<br>
PIN을 기록하면 지식 요소가 소유 요소로 전환 → <mark>단일 요소로 격하</mark><br><br>
<b>🔗 관련 문제:</b> Q433(비밀번호 정책 준수) · Q437(보안 인식 교육) · Q432(디지털 서명 — 인증)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Access Control and Authentication",
keyConcepts:[
"2FA 원리|소유(토큰) + 지식(PIN) — 두 요소의 분리가 핵심",
"PIN 비밀 유지|기록하면 지식→소유로 전환되어 2FA 무력화",
"토큰 단독 무용|PIN 없이 토큰만으로는 인증 불가"
]
},

{
id:439,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"In an enterprise where an IT security baseline has been defined, an information systems (IS) auditor should FIRST ensure:",
questionKo:"IT 보안 기준선(baseline)이 정의된 기업에서 IS 감사인이 <b>가장 먼저</b> 확인해야 할 사항은?",
options:[
"A. Implementation",
"B. Compliance",
"C. Documentation",
"D. Sufficiency"
],
optionsKo:[
"A. 구현 여부",
"B. 준수 여부",
"C. 문서화 여부",
"D. 충분성(적정성)"
],
correct:3,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>순서</th><th>설명</th></tr>
<tr class="correct-row"><td>D. 충분성 ✅</td><td>1단계</td><td>기준선이 보안 요구사항을 충족하는지 먼저 평가 — 잘못된 기준선 구현은 무의미</td></tr>
<tr><td>C. 문서화</td><td>2단계</td><td>적정한 기준선이 문서화되었는지 확인</td></tr>
<tr><td>A. 구현</td><td>3단계</td><td>적정하고 문서화된 기준선이 실제 구현되었는지 확인</td></tr>
<tr><td>B. 준수</td><td>4단계</td><td>구현된 기준선에 대한 준수 여부 측정</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 보안 기준선 감사 순서</b><br>
<mark>충분성(적정성)</mark> → 문서화 → 구현 → 준수<br>
부적절한 기준선을 구현·준수해도 보안 목표 달성 불가<br><br>
<b>🔗 관련 문제:</b> Q436(방화벽 정책 준수 감사) · Q435(정보분류 목적) · Q431(보안 프레임워크 입력)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Security Baselines and Standards",
keyConcepts:[
"기준선 충분성|감사의 최우선 — 기준선이 보안 요구사항에 적정한지 평가",
"감사 순서|충분성 → 문서화 → 구현 → 준수",
"부적정 기준선 위험|잘못된 기준선의 구현·준수는 보안 목표 미달성"
]
},

{
id:440,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Enterprise requirements for complying with adopted global security standards is PRIMARILY determined by:",
questionKo:"채택된 글로벌 보안 표준 준수에 대한 기업 요구사항은 <b>주로</b> 무엇에 의해 결정되는가?",
options:[
"A. Internal compliance",
"B. Legal compliance",
"C. Regulatory compliance",
"D. Contractual compliance"
],
optionsKo:[
"A. 내부 준수(Internal compliance)",
"B. 법적 준수(Legal compliance)",
"C. 규제 준수(Regulatory compliance)",
"D. 계약 준수(Contractual compliance)"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 내부 준수 ✅</td><td>글로벌 보안 표준 채택은 기업의 자발적 내부 결정 — 내부 준수 요구사항이 주된 동인</td></tr>
<tr><td>B. 법적 준수</td><td>법률이 글로벌 보안 표준 채택을 요구하지는 않음</td></tr>
<tr><td>C. 규제 준수</td><td>일부 규제기관이 요구할 수 있으나 전 세계적 요구는 아님</td></tr>
<tr><td>D. 계약 준수</td><td>계약 상대방이 요구할 수 있으나 보편적 요구는 아님</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 글로벌 보안 표준 채택 동인</b><br>
글로벌 표준(ISO 27001 등) 채택 = <mark>기업의 자발적 내부 결정</mark><br>
법·규제·계약은 특정 상황에서 요구할 수 있으나 보편적(primary) 동인은 아님<br><br>
<b>🔗 관련 문제:</b> Q430(EGIT 프레임워크 — 전략적 정렬) · Q431(보안 프레임워크 입력) · Q439(보안 기준선 충분성)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Global Security Standards",
keyConcepts:[
"내부 준수|글로벌 보안 표준 채택의 주된 동인 — 자발적 내부 결정",
"법·규제·계약|특정 상황에서 표준 준수를 요구할 수 있으나 보편적이지 않음",
"글로벌 표준|ISO 27001 등 — 채택 여부는 기업 내부 정책에 의해 결정"
]
},

{
id:441,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"Which of the following is the MOST effective method for disposing of magnetic media that contains confidential information?",
questionKo:"기밀정보가 포함된 자기 매체를 폐기하는 <b>가장 효과적인</b> 방법은?",
options:[
"A. Degaussing",
"B. Defragmenting",
"C. Erasing",
"D. Destroying"
],
optionsKo:[
"A. 디가우싱(소자)",
"B. 조각 모음(디프래그)",
"C. 삭제(Erasing)",
"D. 물리적 파괴(Destroying)"
],
correct:3,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>효과</th><th>설명</th></tr>
<tr><td>A. 디가우싱</td><td>부분적</td><td>자기장 제거로 데이터 소거 — 그러나 고도 기밀 정보의 완전 제거를 보장하지 못함</td></tr>
<tr><td>B. 조각 모음</td><td>없음</td><td>파일 시스템 효율화 목적 — 정보 제거와 무관</td></tr>
<tr><td>C. 삭제</td><td>미미</td><td>파일 인덱스만 변경 — 실제 데이터는 매체에 잔존하여 복구 가능</td></tr>
<tr class="correct-row"><td>D. 물리적 파괴 ✅</td><td>완전</td><td>매체 자체를 파괴 — 기밀정보 복구가 불가능한 유일한 방법</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 매체 폐기 강도 순서</b><br>
삭제(인덱스만) < 디가우싱(자기장 제거) < <mark>물리적 파괴(유일한 완전 보장)</mark><br>
조각 모음은 폐기 방법이 아님<br><br>
<b>🔗 관련 문제:</b> Q435(정보분류 → 통제 수준) · Q434(접근통제 순서) · Q438(PIN 비밀 유지)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Media Disposal and Sanitization",
keyConcepts:[
"물리적 파괴|기밀 자기매체 폐기의 유일한 완전 보장 방법",
"디가우싱 한계|고도 기밀 정보의 완전 제거를 보장하지 못함",
"삭제 vs 파괴|삭제는 인덱스만 변경, 데이터 잔존 → 복구 가능"
]
},

{
id:442,
domain:"5",
ks:"5A1 Information Asset Security Policies, Frameworks, Standards, and Guidelines",
question:"An enterprise has created a policy that defines the types of websites that users are forbidden to access. What is the MOST effective technology to enforce this policy?",
questionKo:"사용자가 접근 금지된 웹사이트 유형을 정의한 정책을 수립하였다. 이 정책을 시행하기 위한 <b>가장 효과적인</b> 기술은?",
options:[
"A. Stateful inspection firewall",
"B. Web content filter",
"C. Web cache server",
"D. Proxy server"
],
optionsKo:[
"A. 상태 기반 검사 방화벽(Stateful inspection)",
"B. 웹 콘텐츠 필터",
"C. 웹 캐시 서버",
"D. 프록시 서버"
],
correct:1,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 상태 기반 방화벽</td><td>패킷 상태 추적 — 웹사이트 콘텐츠·분류를 검토하지 않음</td></tr>
<tr class="correct-row"><td>B. 웹 콘텐츠 필터 ✅</td><td>URL 블랙리스트·사이트 분류 기반으로 웹 통신을 허용/차단 — 정책 시행에 최적</td></tr>
<tr><td>C. 웹 캐시 서버</td><td>자주 방문하는 페이지의 속도 향상 목적 — 접근 통제 기능 없음</td></tr>
<tr><td>D. 프록시 서버</td><td>클라이언트 요청을 전달하는 중개자 — 모든 프록시가 콘텐츠 필터링 기능을 갖추지는 않음</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 프록시 vs 웹 콘텐츠 필터</b><br>
프록시 서버 ≠ 웹 콘텐츠 필터 (흔한 오해)<br>
프록시는 요청 전달이 주 기능, <mark>콘텐츠 필터</mark>는 URL 분류·블랙리스트 기반 차단이 주 기능<br><br>
<b>🔗 관련 문제:</b> Q436(방화벽 정책 준수 감사) · Q437(소셜미디어 — 기술적 통제 한계) · Q439(보안 기준선 충분성)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Web Content Filtering",
keyConcepts:[
"웹 콘텐츠 필터|URL 블랙리스트·분류 기반 접근 차단 — 웹 정책 시행에 최적",
"프록시 vs 필터|프록시는 요청 전달, 콘텐츠 필터링은 별도 기능",
"상태 기반 방화벽|패킷 수준 검사 — 웹 콘텐츠 분류·필터링 불가"
]
},

{
id:443,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"An information systems (IS) auditor is reviewing the network infrastructure of a call center and determines that the internal telephone system is based on Voice-over Internet Protocol (VoIP) technology. Which of the following is the GREATEST concern?",
questionKo:"IS 감사인이 콜센터의 네트워크 인프라를 검토한 결과 내부 전화 시스템이 VoIP 기술 기반임을 확인하였다. <b>가장 큰 우려 사항</b>은?",
options:[
"A. Voice communication uses the same equipment that is used for data communication.",
"B. Ethernet switches are not protected by uninterrupted power supply units.",
"C. Voice communication is not encrypted on the local network.",
"D. The team that supports the data network also is responsible for the telephone system."
],
optionsKo:[
"A. 음성 통신이 데이터 통신과 동일한 장비를 사용함",
"B. 이더넷 스위치가 UPS로 보호되지 않음",
"C. 로컬 네트워크에서 음성 통신이 암호화되지 않음",
"D. 데이터 네트워크 지원 팀이 전화 시스템도 담당함"
],
correct:1,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 장비 공유</td><td>VoIP의 본질적 특성이자 장점(배선 비용 절감) — 우려 사항이 아님</td></tr>
<tr class="correct-row"><td>B. 스위치 UPS 미보호 ✅</td><td>순간 정전에도 전화 송수신 불가 — 콜센터에서 가용성이 치명적</td></tr>
<tr><td>C. 음성 미암호화</td><td>VoIP는 로컬 네트워크에서 통상 암호화하지 않음 — 일반적 관행이므로 우려 아님</td></tr>
<tr><td>D. 동일 팀 운영</td><td>VoIP가 LAN 인프라를 사용하므로 동일 팀이 지원하는 것이 자연스러움</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 VoIP + 콜센터 핵심 위험</b><br>
VoIP = LAN 의존 → 스위치 정전 = 전화 마비<br>
서버·핵심 장비에는 UPS가 있지만 <mark>LAN 스위치에는 통상 UPS 미적용</mark><br>
콜센터 업무 특성상 전화 가용성이 최우선 → UPS 미보호가 가장 큰 우려<br><br>
<b>🔗 관련 문제:</b> Q419(데이터센터 화재 경보) · Q436(방화벽 감사) · Q442(웹 콘텐츠 필터)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Physical and Environmental Controls",
keyConcepts:[
"VoIP 가용성|LAN 스위치 정전 시 전화 마비 — 콜센터에 치명적",
"UPS 범위|서버는 보호되나 LAN 스위치는 통상 UPS 미적용",
"VoIP 특성|장비 공유·팀 공유·로컬 미암호화는 일반적 관행"
]
},

{
id:444,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"Which of the following is the MOST effective control over visitor access to a data center?",
questionKo:"데이터센터 방문자 접근에 대한 <b>가장 효과적인</b> 통제는?",
options:[
"A. Visitors are escorted.",
"B. Visitor badges are required.",
"C. Visitors sign in.",
"D. Visitors are spot-checked by operators."
],
optionsKo:[
"A. 방문자를 에스코트(동행)함",
"B. 방문자 배지 착용 요구",
"C. 방문자 서명 기록",
"D. 운영자가 방문자를 불시 점검"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>통제 강도</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 에스코트 ✅</td><td>최고</td><td>방문자를 항상 동행 → 허용된 구역만 접근 보장, 지속적 감시</td></tr>
<tr><td>B. 배지 착용</td><td>중간</td><td>좋은 관행이나 배지만으로 비인가 구역 접근 방지 불가</td></tr>
<tr><td>C. 서명 기록</td><td>낮음</td><td>입장 기록만 남길 뿐, 건물 내 이동을 통제하지 못함</td></tr>
<tr><td>D. 불시 점검</td><td>낮음</td><td>간헐적 점검 — 점검 사이 비인가 접근 가능</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 물리적 방문자 통제 강도</b><br>
<mark>에스코트(상시 동행)</mark> > 배지 > 서명 > 불시 점검<br>
에스코트 = 지속적·실시간 통제, 나머지는 간접적·간헐적 통제<br><br>
<b>🔗 관련 문제:</b> Q443(VoIP 콜센터 — 물리적 통제) · Q438(2FA PIN 보호) · Q434(접근통제 순서)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Physical Access Controls",
keyConcepts:[
"에스코트|방문자 통제의 최고 수준 — 상시 동행으로 비인가 접근 방지",
"배지·서명 한계|간접적 통제 — 건물 내 이동을 실시간 통제하지 못함",
"물리적 접근통제|데이터센터는 가장 엄격한 물리적 통제 필요"
]
},

{
id:445,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"An information systems (IS) auditor inspected a windowless room containing phone switching and networking equipment and documentation binders. The room was equipped with two handheld fire extinguishers—one filled with carbon dioxide (CO2) and the other filled with halon gas. Which of the following should be given the HIGHEST priority in the IS auditor's report?",
questionKo:"IS 감사인이 창문 없는 장비실(전화 교환·네트워크 장비, 문서 바인더 보관)을 점검하였다. CO2 소화기와 할론 소화기가 각 1대씩 비치되어 있었다. 감사 보고서에서 <b>가장 높은 우선순위</b>를 부여할 사항은?",
options:[
"A. The halon extinguisher should be removed because halon has a negative impact on the atmospheric ozone layer.",
"B. Both fire suppression systems present a risk of suffocation when used in a closed room.",
"C. The CO2 extinguisher should be removed because CO2 is ineffective for suppressing fires involving solid combustibles (paper).",
"D. The documentation binders should be removed from the equipment room to reduce potential risk."
],
optionsKo:[
"A. 할론 소화기는 오존층 파괴 물질이므로 제거해야 함",
"B. 두 소화 시스템 모두 밀폐된 공간에서 사용 시 질식 위험이 있음",
"C. CO2 소화기는 종이 등 고체 가연물 화재에 비효과적이므로 제거해야 함",
"D. 문서 바인더를 장비실에서 제거하여 잠재적 위험을 줄여야 함"
],
correct:1,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 할론 오존층 파괴</td><td>몬트리올 의정서는 기존 설치 유지 허용 — 최우선 사항은 아님</td></tr>
<tr class="correct-row"><td>B. 질식 위험 ✅</td><td>CO2·할론 모두 산소 비율 감소 → 창문 없는 밀폐 공간에서 인명 위험 — 최우선</td></tr>
<tr><td>C. CO2 비효과적</td><td>CO2는 대부분의 화재 유형에 사용 가능 — 전제가 틀림</td></tr>
<tr><td>D. 문서 제거</td><td>위험 감소에 도움되나 최우선 사항은 아님</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 화재 진압의 최우선 원칙</b><br>
<mark>인명 안전 > 장비 보호 > 환경 영향</mark><br>
CO2와 할론 모두 산소 농도를 낮춰 화재 진압 → 밀폐 공간에서 질식 위험<br>
창문 없는 방 + 가스 소화기 = 인명 위험이 가장 큰 우려<br><br>
<b>🔗 관련 문제:</b> Q419(데이터센터 화재 경보) · Q443(VoIP UPS — 환경 통제) · Q444(방문자 에스코트)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Fire Suppression Systems",
keyConcepts:[
"인명 최우선|화재 진압에서 인명 안전이 항상 최고 우선순위",
"CO2·할론 질식 위험|산소 비율 감소 → 밀폐 공간에서 인명 위험",
"몬트리올 의정서|기존 할론 설치 유지 허용 — 신규 설치·충전은 제한"
]
},

{
id:446,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"Which of the following exposures associated with the spooling of sensitive reports for offline printing should an information systems (IS) auditor consider to be the MOST serious?",
questionKo:"민감한 보고서의 오프라인 인쇄를 위한 스풀링과 관련하여 IS 감사인이 <b>가장 심각하게</b> 고려해야 할 노출은?",
options:[
"A. Sensitive data might be read by operators.",
"B. Data might be amended without authorization.",
"C. Unauthorized report copies might be printed.",
"D. Output might be lost in the event of system failure."
],
optionsKo:[
"A. 민감한 데이터가 운영자에 의해 열람될 수 있음",
"B. 데이터가 무단으로 수정될 수 있음",
"C. 비인가 보고서 사본이 인쇄될 수 있음",
"D. 시스템 장애 시 출력물이 손실될 수 있음"
],
correct:2,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 운영자 열람</td><td>운영자는 업무상 높은 접근권한 보유 — 스풀링 고유 위험이 아님</td></tr>
<tr><td>B. 무단 수정</td><td>스풀 파일이 다른 파일보다 수정하기 쉽지 않음</td></tr>
<tr class="correct-row"><td>C. 비인가 사본 인쇄 ✅</td><td>스풀링 → 오프라인 인쇄 시 보상 통제 없이 추가 사본 인쇄 가능 — 기밀성 위협</td></tr>
<tr><td>D. 출력 손실</td><td>스풀러 수준의 데이터 손실은 재인쇄로 해결 가능 — 경미</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 스풀링의 고유 위험</b><br>
스풀 = 인쇄 대기열에 데이터 저장 → <mark>추가 사본 무단 인쇄</mark> 가능<br>
민감 보고서의 비인가 복제는 기밀성에 직접적 위협<br>
보상 통제: 인쇄 로그, 접근 제한, 즉시 삭제 정책 등<br><br>
<b>🔗 관련 문제:</b> Q441(매체 폐기 — 기밀성) · Q435(정보분류 → 통제 수준) · Q444(물리적 접근통제)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Output Controls",
keyConcepts:[
"스풀링 위험|오프라인 인쇄 대기열에서 비인가 사본 인쇄 가능",
"기밀성 위협|민감 보고서의 무단 복제가 가장 심각한 노출",
"보상 통제|인쇄 로그·접근 제한·즉시 삭제로 스풀링 위험 완화"
]
},

{
id:447,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"Which of the following environmental controls is appropriate to protect computer equipment against short-term reductions in electrical power?",
questionKo:"단기적인 전력 감소로부터 컴퓨터 장비를 보호하기에 적합한 환경 통제는?",
options:[
"A. Power-line conditioners",
"B. Surge-protection devices",
"C. Alternative power supplies",
"D. Interruptible power supplies"
],
optionsKo:[
"A. 전력선 조정기(Power-line conditioner)",
"B. 서지 보호 장치",
"C. 대체 전원 공급 장치",
"D. 인터럽터블 전원 공급 장치"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>보호 대상</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 전력선 조정기 ✅</td><td>단기 전압 변동</td><td>전력의 피크·밸리를 보상 — 저장된 전력으로 골(valley)을 메워 단기 감소 대응</td></tr>
<tr><td>B. 서지 보호</td><td>고전압 돌발</td><td>전압 급등(서지)으로부터 보호 — 전력 감소와는 반대 상황</td></tr>
<tr><td>C. 대체 전원</td><td>장기 정전</td><td>장기간 전력 장애용 — UPS와 연계하여 전환 시간 동안 보호</td></tr>
<tr><td>D. 인터럽터블 전원</td><td>해당 없음</td><td>정전 시 장비 중단 — 보호 기능 없음 (UPS와 혼동 주의)</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 전력 보호 장치 구분</b><br>
전압 감소(단기) → <mark>전력선 조정기</mark><br>
전압 급등 → 서지 보호 장치<br>
완전 정전(단기) → UPS(무정전 전원)<br>
완전 정전(장기) → 대체 전원(발전기 등)<br><br>
<b>🔗 관련 문제:</b> Q443(VoIP 스위치 UPS 미보호) · Q445(밀폐 공간 화재 진압) · Q419(데이터센터 환경 통제)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Power Supply Protection",
keyConcepts:[
"전력선 조정기|전압 피크·밸리 보상 — 단기 전력 감소 대응",
"전력 보호 계층|조정기(변동) → 서지보호(급등) → UPS(단기정전) → 발전기(장기정전)",
"인터럽터블 vs UPS|interruptible은 정전 시 중단, uninterruptible(UPS)은 연속 공급"
]
},

{
id:448,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"An enterprise is proposing to establish a wireless local area network (WLAN). Management asks the information systems (IS) auditor to recommend security controls for the WLAN. Which of the following is the MOST appropriate recommendation?",
questionKo:"기업이 무선 LAN(WLAN) 구축을 제안하고 있다. 경영진이 IS 감사인에게 WLAN 보안 통제를 권고해 달라고 요청하였다. <b>가장 적절한</b> 권고는?",
options:[
"A. Physically secure wireless access points to prevent tampering.",
"B. Use service set identifiers that clearly identify the enterprise.",
"C. Encrypt traffic using the wired equivalent privacy (WEP) mechanism.",
"D. Implement the Simple Network Management Protocol (SNMP) to allow active monitoring."
],
optionsKo:[
"A. 무선 액세스 포인트를 물리적으로 보호하여 변조 방지",
"B. 기업을 명확히 식별하는 SSID 사용",
"C. WEP(유선 동등 프라이버시) 메커니즘으로 트래픽 암호화",
"D. SNMP를 구현하여 능동 모니터링 허용"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. AP 물리적 보호 ✅</td><td>AP에 물리적으로 접근하면 기본 비밀번호 복원·암호화 제거 가능 → 물리적 보안이 기본</td></tr>
<tr><td>B. 기업명 SSID</td><td>기업 식별 SSID는 해커에게 공격 동기·정보 제공 — 오히려 위험 증가</td></tr>
<tr><td>C. WEP 암호화</td><td>WEP는 이미 취약점이 입증됨 — WPA2/WPA3를 사용해야 함</td></tr>
<tr><td>D. SNMP 모니터링</td><td>SNMP 자체가 보안 취약점 → 사용 시 최소 SNMPv3 필요</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 WLAN 보안 핵심</b><br>
물리적 보호: AP 변조 방지가 <mark>모든 논리적 통제의 전제</mark><br>
SSID: 기업명 노출 금지 → 브로드캐스트 비활성화 권장<br>
암호화: WEP ✗ → WPA2/WPA3 ✓<br>
모니터링: SNMP v1/v2 ✗ → SNMPv3 ✓<br><br>
<b>🔗 관련 문제:</b> Q443(VoIP 환경 통제) · Q444(데이터센터 물리적 접근) · Q447(전력 보호)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Wireless Network Security",
keyConcepts:[
"AP 물리적 보호|변조 시 인증·암호화 무력화 가능 → 물리적 보안이 전제",
"WEP 취약성|이미 취약점 입증 — WPA2/WPA3로 대체 필요",
"SSID 관리|기업 식별 정보 노출 금지 — 공격 동기 부여 위험"
]
},

{
id:449,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"An information systems (IS) auditor is reviewing the physical security measures of an enterprise. Regarding the access card system, the IS auditor should be MOST concerned that:",
questionKo:"IS 감사인이 기업의 물리적 보안 조치를 검토하고 있다. 출입카드 시스템과 관련하여 감사인이 <b>가장 우려</b>해야 할 사항은?",
options:[
"A. Nonpersonalized access cards are given to the cleaning staff, who use a sign-in sheet but show no proof of identity.",
"B. Access cards are not labeled with the enterprise's name and address to facilitate easy return of a lost card.",
"C. Card issuance and rights administration for the cards are done by different departments, causing unnecessary lead time for new cards.",
"D. The computer system used for programming the cards can only be replaced after three weeks in the event of a system failure."
],
optionsKo:[
"A. 비개인화 출입카드가 청소 직원에게 지급되며, 서명 기록만 하고 신원 증명은 없음",
"B. 출입카드에 기업명·주소가 표시되지 않아 분실 카드 반환이 어려움",
"C. 카드 발급과 권한 관리가 다른 부서에서 수행되어 신규 카드 발급에 시간이 소요됨",
"D. 카드 프로그래밍 시스템 장애 시 교체에 3주가 소요됨"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 신원 미확인 출입 ✅</td><td>외부인이 신원 증명 없이 서명만으로 출입 — 물리적 보안의 근본 목적(신원 확인) 훼손</td></tr>
<tr><td>B. 기업명 미표시</td><td>오히려 기업명·주소 표시가 위험 — 분실 카드로 악용 가능</td></tr>
<tr><td>C. 부서 분리 발급</td><td>직무 분리(SoD)의 올바른 적용 — 리드타임은 불편이지 위험이 아님</td></tr>
<tr><td>D. 프로그래밍 시스템 3주</td><td>기존 카드·리더기는 정상 작동 — 신규 발급만 지연되어 경미한 문제</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 물리적 보안의 핵심 원칙</b><br>
물리적 접근통제 = <mark>누가 들어오는지 확인(신원 식별)</mark><br>
서명 기록만으로는 허위 기재 가능 — 신분증·운전면허증 등 증빙 필요<br>
비개인화 카드 + 신원 미확인 = 가장 심각한 물리적 보안 취약점<br><br>
<b>🔗 관련 문제:</b> Q444(방문자 에스코트) · Q448(AP 물리적 보호) · Q438(2FA PIN 보호)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Physical Access Controls",
keyConcepts:[
"신원 확인|물리적 보안의 근본 — 모든 출입자의 신원 증명 필수",
"비개인화 카드 위험|개인 특정 불가 + 신원 미확인 = 최대 취약점",
"카드 발급 SoD|발급과 권한 관리의 분리는 올바른 직무 분리"
]
},

{
id:450,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"An information systems (IS) auditor is reviewing an enterprise's network operations center (NOC). Which of the following choices is of the GREATEST concern? The use of:",
questionKo:"IS 감사인이 기업의 네트워크 운영 센터(NOC)를 검토하고 있다. 다음 중 <b>가장 큰 우려 사항</b>은?",
options:[
"A. A wet pipe-based fire suppression system.",
"B. A rented rack space in the NOC.",
"C. A carbon-dioxide-based fire suppression system.",
"D. An uninterrupted power supply with 10 minutes of backup power."
],
optionsKo:[
"A. 습식 배관(wet pipe) 기반 화재 진압 시스템",
"B. NOC 내 임대 랙 공간",
"C. 이산화탄소(CO2) 기반 화재 진압 시스템",
"D. 10분 백업 전력의 무정전 전원장치(UPS)"
],
correct:2,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 습식 배관</td><td>장비 손상 가능성 있으나 인명에는 안전 — CO2보다 위험도 낮음</td></tr>
<tr><td>B. 임대 랙 공간</td><td>보안 통제가 유지되면 문제 없음 — 대부분의 조직이 랙 공간 임대</td></tr>
<tr class="correct-row"><td>C. CO2 화재 진압 ✅</td><td>사람이 있는 공간에서 CO2 사용 시 질식 사망 위험 — 인명 안전 최우선</td></tr>
<tr><td>D. UPS 10분</td><td>정상 종료에 충분할 수 있음 — CO2의 인명 위험에 비해 경미</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 화재 진압 — 인명 안전 최우선</b><br>
NOC = 사람이 상주하는 공간 → <mark>CO2 사용 금지</mark>(질식 위험)<br>
습식 배관: 장비 손상 ○ / 인명 위험 ✗<br>
CO2: 장비 손상 ✗ / 인명 위험 ○ → 더 큰 우려<br><br>
<b>🔗 관련 문제:</b> Q445(밀폐 공간 CO2·할론 질식 위험) · Q443(VoIP UPS) · Q447(전력 보호 장치)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Fire Suppression Systems",
keyConcepts:[
"CO2 질식 위험|사람이 있는 공간에서 CO2 화재 진압 사용 금지",
"인명 > 장비|화재 진압 선택 시 인명 안전이 항상 최우선",
"습식 vs 가스|습식 = 장비 손상 가능하나 인명 안전, 가스(CO2) = 장비 안전하나 인명 위험"
]
},

{
id:451,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"An information systems (IS) auditor is reviewing the physical security controls of a data center and notices several areas for concern. Which of the following areas is the MOST important?",
questionKo:"IS 감사인이 데이터센터의 물리적 보안 통제를 검토하면서 여러 우려 사항을 발견하였다. <b>가장 중요한</b> 사항은?",
options:[
"A. The emergency power off button cover is missing.",
"B. Scheduled maintenance of the fire suppression system was not performed.",
"C. There are no security cameras inside the data center.",
"D. The emergency exit door is blocked."
],
optionsKo:[
"A. 비상 전원 차단 버튼 커버가 분실됨",
"B. 화재 진압 시스템의 정기 유지보수가 수행되지 않음",
"C. 데이터센터 내부에 보안 카메라가 없음",
"D. 비상 출구가 차단되어 있음"
],
correct:3,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 전원 버튼 커버 분실</td><td>중요한 우려 사항이나 인명 안전보다 우선하지 않음</td></tr>
<tr><td>B. 화재 진압 미유지보수</td><td>우려 사항이나 시스템 미작동을 의미하지는 않음</td></tr>
<tr><td>C. 보안 카메라 없음</td><td>중요한 우려 사항이나 인명 안전에 비해 덜 심각</td></tr>
<tr class="correct-row"><td>D. 비상 출구 차단 ✅</td><td>인명 안전이 항상 최우선 — 비상 시 대피 불가는 가장 심각한 문제</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 물리적 보안 우선순위</b><br>
<mark>인명 안전(Life Safety)</mark> > 장비 보호 > 데이터 보호 > 보안 감시<br>
비상 출구 차단 = 화재·재해 시 대피 불가 → 인명 피해 직결<br><br>
<b>🔗 관련 문제:</b> Q445(CO2·할론 질식 위험 — 인명 최우선) · Q450(NOC CO2 사용 우려) · Q419(데이터센터 화재 경보)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Data Center Physical Security",
keyConcepts:[
"인명 안전 최우선|Life Safety가 모든 물리적 보안의 최고 우선순위",
"비상 출구|항상 개방·접근 가능 상태 유지 필수",
"물리적 보안 계층|인명 > 장비 > 데이터 > 감시"
]
},

{
id:452,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"When auditing security for a data center, an information systems (IS) auditor should look for the presence of a voltage regulator to ensure that the:",
questionKo:"데이터센터 보안 감사 시 IS 감사인이 전압 조정기(voltage regulator)의 존재를 확인하는 이유는?",
options:[
"A. Hardware is protected against power surges.",
"B. Integrity is maintained if the main power is interrupted.",
"C. Immediate power will be available if the main power is lost.",
"D. Hardware is protected against long-term power fluctuations."
],
optionsKo:[
"A. 하드웨어가 전력 서지(급등)로부터 보호됨",
"B. 주 전력이 중단되어도 무결성이 유지됨",
"C. 주 전력 상실 시 즉시 전력이 공급됨",
"D. 하드웨어가 장기 전력 변동으로부터 보호됨"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 전력 서지 보호 ✅</td><td>전압 조정기 = 단기 전력 변동(서지) 보호 — 전압을 안정적 범위로 유지</td></tr>
<tr><td>B. 전력 중단 시 무결성</td><td>전압 조정기는 전력 중단을 보상하지 못함 — UPS의 역할</td></tr>
<tr><td>C. 즉시 전력 공급</td><td>전력 상실 시 전력 공급은 UPS의 역할</td></tr>
<tr><td>D. 장기 전력 변동</td><td>전압 조정기는 단기 변동 보호 — 장기 변동은 대체 전원(발전기)의 영역</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 전력 보호 장치 비교 (Q447 복습)</b><br>
<mark>전압 조정기</mark> = 단기 전압 변동·서지 보호<br>
전력선 조정기 = 단기 전력 감소(피크·밸리) 보상<br>
UPS = 단기 정전 시 연속 전력 공급<br>
발전기 = 장기 정전 대응<br><br>
<b>🔗 관련 문제:</b> Q447(전력선 조정기 — 단기 전력 감소) · Q443(VoIP UPS 미보호) · Q450(NOC 환경 통제)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Power Supply Protection",
keyConcepts:[
"전압 조정기|단기 전력 변동(서지) 보호 — 전압을 안정적 범위로 유지",
"전력 보호 구분|조정기(서지) vs UPS(정전) vs 발전기(장기 정전)",
"단기 vs 장기|voltage regulator는 단기 변동, 장기는 대체 전원 필요"
]
},

{
id:453,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"When reviewing the procedures for the disposal of computers, which of the following should be the GREATEST concern for the information systems (IS) auditor?",
questionKo:"컴퓨터 폐기 절차를 검토할 때 IS 감사인이 <b>가장 우려</b>해야 할 사항은?",
options:[
"A. Hard disks are overwritten several times at the sector level but are not reformatted before leaving the enterprise.",
"B. All files and folders on hard disks are separately deleted, and the hard disks are formatted before leaving the enterprise.",
"C. Hard disks are rendered unreadable by hole-punching through the platters at specific positions before leaving the enterprise.",
"D. The transport of hard disks is escorted by internal security staff to a nearby metal recycling enterprise, where the hard disks are registered and then shredded."
],
optionsKo:[
"A. 하드디스크를 섹터 수준에서 여러 번 덮어쓰기 하였으나 포맷은 하지 않고 반출",
"B. 하드디스크의 모든 파일·폴더를 개별 삭제하고 포맷한 후 반출",
"C. 플래터의 특정 위치에 구멍을 뚫어 읽기 불능 상태로 만든 후 반출",
"D. 내부 보안 직원이 하드디스크 운반을 호위하여 금속 재활용 업체에서 등록 후 파쇄"
],
correct:1,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>데이터 복구</th><th>설명</th></tr>
<tr><td>A. 다중 덮어쓰기</td><td>극히 어려움</td><td>섹터 수준 덮어쓰기로 데이터·인덱스·MFT 완전 파괴 — 포맷 불필요</td></tr>
<tr class="correct-row"><td>B. 삭제+포맷 ✅</td><td>용이</td><td>삭제·포맷은 섹터를 '사용 가능'으로 표시할 뿐 — 공개 도구로 복구 가능</td></tr>
<tr><td>C. 구멍 뚫기</td><td>극히 비쌈</td><td>디스크 사용 불가 — 클린룸 분석 필요, 단시간 내만 가능</td></tr>
<tr><td>D. 호위 운반+파쇄</td><td>불가능</td><td>파쇄 후 다른 금속과 혼합 — 복구 불가능</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 디스크 폐기 방법 안전성 순서</b><br>
파쇄(D) > 구멍 뚫기(C) > 다중 덮어쓰기(A) > <mark>삭제+포맷(B) ← 가장 취약</mark><br>
삭제·포맷 = 인덱스만 변경, 실제 데이터 잔존 → 공개 도구로 복구 가능<br><br>
<b>🔗 관련 문제:</b> Q441(자기매체 폐기 — 물리적 파괴 최선) · Q435(정보분류 → 통제 수준) · Q446(스풀링 기밀성)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Media Disposal and Sanitization",
keyConcepts:[
"삭제+포맷 위험|섹터를 '사용 가능'으로 표시할 뿐 — 데이터 잔존, 복구 용이",
"덮어쓰기 vs 삭제|섹터 수준 덮어쓰기는 실제 파괴, 삭제는 인덱스만 변경",
"폐기 안전성|파쇄 > 구멍 뚫기 > 다중 덮어쓰기 > 삭제+포맷"
]
},

{
id:454,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"Which of the following is BEST prevented by a raised floor in the computer machine room?",
questionKo:"컴퓨터 장비실의 이중 바닥(raised floor)으로 <b>가장 잘 예방</b>할 수 있는 것은?",
options:[
"A. Damage of wires around computers and servers",
"B. A power failure from static electricity",
"C. Shocks from earthquakes",
"D. Water flood damage"
],
optionsKo:[
"A. 컴퓨터·서버 주변 배선의 손상",
"B. 정전기로 인한 전력 장애",
"C. 지진 충격",
"D. 수해(침수) 피해"
],
correct:0,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr class="correct-row"><td>A. 배선 손상 방지 ✅</td><td>이중 바닥의 주 목적 — 환기·전력·데이터 케이블을 바닥 아래 설치하여 안전·손상 위험 제거</td></tr>
<tr><td>B. 정전기 방지</td><td>정전기 방지는 특수 카펫·신발 등이 적합 — 이중 바닥의 목적이 아님</td></tr>
<tr><td>C. 지진 충격</td><td>지진 대응은 내진 설계(antiseismic architecture) 필요</td></tr>
<tr><td>D. 수해 방지</td><td>이중 바닥은 상부 수도관 누수로부터 장비를 보호하지 못함</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 이중 바닥(Raised Floor)의 기능</b><br>
<mark>주 목적: 케이블 관리</mark> — 전력·데이터·환기 배관을 바닥 하부에 정리<br>
부수 효과: 공기 순환(냉각) 지원<br>
이중 바닥 ≠ 정전기 방지, 내진, 방수<br><br>
<b>🔗 관련 문제:</b> Q447(전력 보호 장치) · Q452(전압 조정기) · Q451(비상 출구 — 물리적 보안)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — Data Center Physical Design",
keyConcepts:[
"이중 바닥|주 목적은 케이블(전력·데이터·환기) 정리 및 손상 방지",
"정전기 방지|특수 카펫·신발 등 별도 대책 필요 — 이중 바닥과 무관",
"내진 설계|지진 대응은 antiseismic architecture로 별도 구현"
]
},

{
id:455,
domain:"5",
ks:"5A2 Physical and Environmental Controls",
question:"Electromagnetic emissions from a terminal represent a risk because they:",
questionKo:"단말기에서 발생하는 전자기 방출(electromagnetic emissions)이 위험한 이유는?",
options:[
"A. Can damage or erase nearby storage media.",
"B. Can disrupt processor functions.",
"C. Can have adverse health effects on personnel.",
"D. Can be detected and displayed."
],
optionsKo:[
"A. 인근 저장 매체를 손상·삭제할 수 있음",
"B. 프로세서 기능을 방해할 수 있음",
"C. 인력에게 건강상 악영향을 줄 수 있음",
"D. 탐지·표시될 수 있음"
],
correct:3,
explanation:`
<div class="comparison-table">
<table>
<tr><th>선택지</th><th>설명</th></tr>
<tr><td>A. 저장매체 손상</td><td>단말기는 방출을 제한하도록 설계 — 일반적 우려 아님</td></tr>
<tr><td>B. 프로세서 방해</td><td>전자기 방출이 CPU 기능을 방해하지 않음</td></tr>
<tr><td>C. 건강 악영향</td><td>대부분 저수준 방출 — 유의미한 건강 위험 없음</td></tr>
<tr class="correct-row"><td>D. 탐지·표시 가능 ✅</td><td>정교한 장비로 방출을 가로채 데이터 복원 → 비인가 접근 위험 (TEMPEST)</td></tr>
</table>
</div>
<div class="sbox">
<b>📌 TEMPEST</b><br>
의도치 않은 전자기 방출(compromising emanations)을 가로채 분석하는 기술<br>
<mark>단말기 화면 내용을 원격에서 재현</mark> 가능 → 기밀성 위협<br>
대응: 차폐(shielding), TEMPEST 인증 장비, 패러데이 케이지 등<br><br>
<b>🔗 관련 문제:</b> Q441(매체 폐기 기밀성) · Q446(스풀링 비인가 출력) · Q448(WLAN 보안)
</div>
`,
reference:"CRM Chapter 5: Protection of Information Assets — TEMPEST and Emanation Security",
keyConcepts:[
"TEMPEST|전자기 방출을 가로채 정보를 복원하는 도청 기술",
"기밀성 위협|단말기 방출로 화면 내용이 원격 재현될 수 있음",
"차폐 대책|shielding, 패러데이 케이지, TEMPEST 인증 장비"
]
}

];
