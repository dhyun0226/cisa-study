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
    '운영 데이터(Sanitized) 장점=실제 대표, 단점=<strong>모든 기능 커버 불가</strong>'
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
  }
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
  }
},
{
  icon: "📝", title: "SDLC 단계별 산출물",
  rules: [
    '<strong>구현 계획(Implementation Plan)</strong> = 설계(Design) 단계에서 수립',
    '설계에서 수립 → 개발에서 업데이트 → 배포에서 실행',
    '구현 방법이 설계에 영향 → 미리 계획해야 함',
    '<strong>UAT 계획</strong> = 요구사항 정의(Requirements) 단계에서 준비 (구현 때 실행)',
    '"준비(prepare)"와 "실행(conduct)"을 구분!'
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
  }
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
    '중복 체크 = 정확성이지 완전성 아님'
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
    'Post-impl Review = 만능: 설계 검증 + 접근 통제 + <strong>가치/ROI 측정</strong>'
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
    '보상 통제를 "있을 것"이라고 <strong>가정 금지</strong>'
  ]
},
{
  icon: "🎯", title: "Scope Management / Baseline",
  rules: [
    '기능 초과 + 예산 초과 = <strong>Scope Management 실패</strong>',
    '<strong>Scope Creep</strong> = 범위가 통제 없이 확대되는 현상',
    '<strong>Baseline</strong> = 설계/개발 기준점 (이후 변경은 공식 승인 필요)',
    'Baseline 부적절 → <strong>Scope Creep</strong> → 시간/예산 초과',
    '증상(예산 초과)이 아닌 <strong>근본 원인(범위 확대)</strong>을 찾아라'
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
    '리엔지니어링 이슈 식별 → <strong>Gap Analysis</strong> (As-Is vs To-Be)'
  ]
},
{
  icon: "🔧", title: "변경 통제 / 직무 분리",
  rules: [
    '직무 분리 불가 → <strong>자동화된 통제(Release Management SW)</strong>가 최선',
    '<strong>예방(Prevention) > 감지(Detection)</strong>',
    '회귀 테스트 = 기능 검증 (이관 통제 아님)',
    '승인 = 필요하지만 충분하지 않음'
  ]
},
{
  icon: "🛒", title: "소프트웨어 획득 (Acquisition)",
  rules: [
    '획득 감사 핵심 = <strong>계약서가 법률 자문(Legal Counsel) 검토/승인 받았는지</strong>',
    'Acquisition ≠ Development → 감사 포인트가 다름',
    '사용자 참여는 요구사항/UAT 단계 (획득 프로세스 X)'
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
    '절차 이탈 발견 → 먼저 <strong>승인 여부 확인</strong> (기술 확인은 그 후)'
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
    '비즈니스 케이스 평가 최우선 = <strong>ROI</strong> (TCO는 비용만, ROI는 비용 대비 혜택)'
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
}

];
