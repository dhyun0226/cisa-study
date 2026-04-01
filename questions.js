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
    '기술 용량 모니터링 주 목적 = <strong>SLA(서비스 수준) 충족 보장</strong> — HW 조달·미래 예측·최적 운영은 부차적, IT의 1차 의무는 비즈니스 서비스 수준 요구 충족'
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
}

];
