# Domain 5 — 정보자산 보호

> CISA Domain 5: Protection of Information Assets
> 시험 전략은 `감사인_마인드셋_치트시트.md`, 도메인별 정리는 Domain3/4/5 파일 참고.

---

## D5-1. 네트워크 보안

### 장비 구분
| 장비 | 보안 목적? |
|---|---|
| Firewall | ✅ 보안이 주 목적 (허가/비허가 판단) |
| Router | ❌ 라우팅 (필터링 부차) |
| Layer 2 Switch | ❌ MAC 분리만 |
| VLAN | ❌ 논리적 분리만 |

**핵심:** "무단 트래픽 방지" = Firewall

### 진단 도구
| 도구 | 하는 일 |
|---|---|
| Protocol Analyzer (Wireshark) | 패킷 캡처 (진단) |
| Online Monitor | 통신 정확성/완전성 |
| Downtime Report | 회선 가용성 (보고서) |
| Help Desk Report | 운영 문제 기록 (보고서) |

### 네트워크 관리의 핵심
```
Configuration & Change Management
= 기본 비밀번호 제거, 불필요한 서비스 비활성화 (Hardening)
= 가장 중요한 구성 요소
```

---

## D5-2. 서버/OS Hardening

```
공격 표면 최소화:
  1. 최신 보안 패치
  2. 불필요 서비스/포트 제거
  3. 기본 계정/PW 변경
  4. 접근 권한 최소화
  5. 안전하지 않은 프로토콜 비활성화
  6. 불필요 SW 제거

OS 보안 검토 = 파라미터 설정 확인 (OS도 패키지)
```

> DB Hardening / 초기화 파라미터는 `Domain4_IT운영.md` 참고.

---

## D5-3. API / 외부 저장장치 / SCADA

### API
```
SW 컴포넌트 간 통신/조정 규칙
용도: 분산 시스템 모듈 간 통신, 클라우드 접근

비교:
  Message Queue = 비동기 (특정 방식)
  RPC = 원격 함수 (특정 방식)
  API = 범용 연동 규칙 (가장 포괄적, 패턴 2)
```

### 외부 저장 장치 리스크
```
USB, 디지털 액자 등:
  최대 리스크 = 악성코드 감염
  → 네트워크 확산 가능
  → 데이터 탈취보다 피해 범위가 큼
```

### SCADA
```
산업 시설(공장/발전소) 원격 감시/제어
리스크 기반 감사 시 가장 중요:
  통신 아키텍처/연결 인터페이스 평가
  = 외부 침투 경로 (인터넷, USB)

사례: Stuxnet (USB로 이란 핵시설 감염)
```

---

## D5-4. 정책 우선 / 공모

### 정책 → 통제 순서
```
정책이 없는 상황 → 정책 수립/업데이트가 먼저
정책 = 모든 통제의 근거

예: 개인 SW 설치 금지 규정 없음
  → 보안 정책 업데이트 먼저 → 그다음 기술적 통제
```

### 공모 (Collusion)
```
여러 직원 합작 → 통제 우회
잘 설계된 직무분리도 무력화 가능
= 애플리케이션 시스템 통제 효과성에 가장 큰 위협
```

> detect vs prevent 동사 구분은 `감사인_마인드셋_치트시트.md` 참고.

---

## D5-5. 정보 분류와 접근 통제

### 정보 분류(Classification) 목적
```
정보 분류의 PRIMARY 목적 = 접근 통제 수준에 대한 가이드라인 수립
  ≠ 모든 자산에 접근 통제 (과보호, 비용 낭비)
  ≠ 리스크 평가 지원 (분류는 리스크 평가의 입력값이지 목적이 아님)
  ≠ 보험 대상 식별 (부수적)
```

### 접근 통제 구현 순서 (FIRST 패턴)
```
① 자산 목록(Inventory) ← FIRST
② 소유권(Ownership) 할당
③ 분류(Classification)
④ 라벨링(Labeling)
⑤ 접근 통제 목록(ACL) 적용
```
"접근 통제 FIRST requires" → 재고/목록(Inventory)
뭐가 있는지 모르면 보호 자체가 불가능

### 보안 기준선(Security Baseline) 감사 순서
```
기준선 정의됨 → FIRST 확인할 것 = 충분성(Sufficiency)
① 충분성 - 보안 요구사항 충족하나?
② 문서화 - 제대로 문서화됐나?
③ 구현   - 실제 적용됐나?
④ 준수   - 지키고 있나?
```
"쓰레기를 금고에 넣어봤자 쓰레기" → 기준선이 맞는지부터

### 글로벌 보안 표준 준수
```
채택된 글로벌 보안 표준(ISO 27001, COBIT 등) 준수 = 내부 준수(Internal Compliance)
  - 표준 = 자발적 채택 (법이 강제하는 게 아님)
  - 채택(adopt) = 회사 내부 결정
  - 따라서 준수 동기도 내부

Standard(표준) ≠ Law(법). 표준은 자발적, 법은 강제적
```

### 접근 통제 모델 비교 (DAC / MAC / RBAC)
```
DAC (Discretionary Access Control)
  = 데이터 소유자가 직접 권한 부여
  = 저위험 환경에 적합
  = 유연하지만 통제력 약함

MAC (Mandatory Access Control)
  = 보안 레이블/등급 기반 (기밀, 비밀 등)
  = 고보안/기밀 환경에 적합 (군사, 정부)
  = 엄격하지만 유연성 낮음

RBAC (Role-Based Access Control)
  = 역할(직무) 기반 권한 부여
  = 대규모 기업의 Need-to-Know에 이상적
  = 관리 효율적

SSO (Single Sign-On) = 인증 기술이지 접근 통제 모델이 아님
```

### 사용자 접근 프로파일
```
비인가 데이터 수정 방지 = 직무별 개별 접근 프로파일이 가장 효과적
  - 모든 사용자가 공통 프로파일 공유 = 위험
  - 역할별 차별화된 프로파일 필요
  - 로깅, 강력한 비밀번호, 접근 검토보다 효과적 (예방 > 탐지)
```

---

## D5-6. 물리적/환경적 통제

### 소화 시스템과 인명 안전 (★ 반복 출제)
```
밀폐 공간 + CO2/할론 소화기 = 질식 위험 = GREATEST concern
사람 상주 구역(NOC) + CO2 = 질식 위험 = GREATEST concern
비상 출구 막힘 = 대피 불가 = MOST important

인명 관련 보기 → 묻지 말고 그거

소화 시스템 비교:
  습식 스프링클러 = 장비 피해 (자산 문제)
  CO2/할론 = 인명 피해 (생명 문제)
  → 인명 > 자산
```

### 방문자 통제
```
데이터센터 방문자 MOST effective 통제 = 에스코트(동행)

통제 강도:
  사후 기록(sign-in) < 식별(배지) < 간헐적 감시(불시점검) < 상시 동행(에스코트)
```

### 출입 카드 시스템
```
MOST concern = 신분 확인 없는 출입
  - 비개인화 카드 + 서명만 = 아무나 들어올 수 있음
  - 물리적 보안의 근본 목적 훼손

카드에 회사명/주소 표기 = 오히려 보안 위험 (분실 시 악용)
카드 발급/권한 분리 = 좋은 통제 (직무분리)
```

### 이중 바닥(Raised Floor)
```
PRIMARY 목적 = 케이블 정리 (전원/데이터/환기 케이블을 바닥 아래에)
  ≠ 정전기 방지 (정전기 방지 카펫이 적절)
  ≠ 지진 보호 (내진 설계 필요)
  ≠ 수해 방지 (천장 배관 누수는 못 막음)
```

### 전자기 방출 (TEMPEST)
```
단말기 전자기 방출의 위험 = 감지/표시되어 정보 유출 가능
  - 특수 장비로 전자기파 감지 → 화면 내용 재현
  - 기밀성(Confidentiality) 위협
  - 대응: TEMPEST 차폐, 패러데이 케이지
```

### WLAN 보안
```
무선 AP 보안 MOST appropriate = 물리적 보호(변조 방지)
  - AP에 물리적 접근 → 초기화 → 보안 설정 해제 → 네트워크 노출
  - 물리적 통제 = 논리적 통제의 기반

오답:
  - SSID에 회사명 = 공격 동기 증가
  - WEP 암호화 = 이미 뚫린 프로토콜 (WPA2/WPA3 사용해야)
  - SNMP = 보안 취약점 유발 (쓰려면 v3)
```

### 전원 보호 장치 구분
```
Voltage Regulator = 단기 전압 변동/서지 보호
UPS (무정전 전원) = 정전 시 단기 연속 전원 공급
Generator (발전기) = 장기 정전 시 지속적 전원 공급

구분: 서지 보호(Regulator) < 단기 정전(UPS) < 장기 정전(Generator)
```

### VoIP 보안
```
VoIP 콜센터 GREATEST concern = 스위치에 UPS 없음
  - VoIP = 네트워크 장비(스위치) 경유
  - 스위치 꺼지면 전화 불통 → 콜센터 업무 마비
  - 콜센터 = 전화가 핵심 업무 → 가용성 최우선

  오답:
    - 장비 공유 = VoIP의 장점 (비용 절감)
    - 내부 암호화 안 함 = 정상
    - 같은 팀이 관리 = 당연
```

---

## D5-7. 매체 폐기와 데이터 보호

### 매체 폐기 강도 순서
```
삭제/포맷 (최약) < 덮어쓰기 < 디가우싱 < 구멍 뚫기 < 파쇄/물리적 파괴 (최강)

삭제 = 인덱스(목차)만 지움, 데이터 그대로 → 무료 도구로 복원 가능
포맷 = 섹터를 "비었음" 표시만 → 복원 가능
덮어쓰기(여러 번) = 실제 데이터 대체 → 포맷보다 강력, 포맷 불필요
디가우싱 = 자기장 소거 → 좋지만 100% 보장 못함
물리적 파괴 = 유일하게 복구 불가능 보장

기밀 정보 폐기(disposing) = 물리적 파괴가 MOST effective
```

### 스풀링 위험
```
스풀링 = 인쇄 대기열에 파일 저장
MOST serious = 무단 사본 인쇄 가능 (기밀 유출)
  - 스풀 파일 남아있으면 추가 출력 가능
  - 스풀링 고유의 위험 = 복제 가능성
```

---

## D5-8. ID/접근 관리(IAM) 역할과 책임

### Data Owner = 접근 승인 책임자 (★ 반복 출제)
```
"누가 접근을 승인(authorize)하는가?" → 거의 항상 Data Owner

역할 비교:
  Data Owner     = 접근 승인/거부 결정 (최종 책임)
  Data Custodian = Owner 지시에 따라 저장·보호·백업 (기술적 관리)
  Security Admin = 보안 정책 구현·유지 (접근 규칙 설정)
  App Admin      = 애플리케이션 운영·관리
  Programmer     = 접근 통제 SW 개발 (누가 접근할지 결정 X)
  Librarian      = 접근 통제 절차 집행

핵심: 결정(Decision) = Owner / 실행(Execution) = 나머지 전부
```

### 직속 상관 vs Data Owner
```
"최종 책임/권한(responsibility/authority)" → Data Owner
"1차 승인/업무 필요성(business need) 확인" → 직속 상관

실무 흐름: 직원 요청 → 직속 상관(1차) → Data Owner(최종 승인)
키워드: authorize, responsibility, final → Data Owner
```

### 보안 그룹 소유자 미지정 위험
```
소유자(Owner) 없음 → 접근 승인 책임자 없음
  = 비인가자가 그룹에 추가될 수 있음 (예방 통제 부재)

예방 통제(승인) > 탐지 통제(기존 접근 검토, 퇴사자 제거)
```

---

## D5-9. 인증과 다중 인증(MFA)

### 인증 요소 3가지
```
Something you know (지식) = 비밀번호, PIN
Something you have (소유) = 스마트카드, OTP 토큰
Something you are (존재) = 지문, 홍채, 얼굴

2단계 인증(2FA) = "다른 유형" 2개 조합
  스마트카드(소유) + PIN(지식) = 2FA ✅
  ID + 비밀번호(지식+지식)   = 단일 인증 ✗
  홍채 + 지문(존재+존재)     = 단일 인증 ✗
  자기띠 카드 + 근접 배지(소유+소유) = 단일 인증 ✗

"2개 쓴다" ≠ 2FA. "다른 유형 2개"가 핵심!
```

### MFA = 비인가 접근 방지 최선 (★ 반복 출제)
```
온라인 뱅킹 신원 도용 방지 → MFA
웹서버 관리자 계정 보호 → 2FA
비밀번호 관련(복잡성, 만료, 잠금) < 다중 인증(MFA/2FA)
탐지 통제(IDS, 로그) < 예방 통제(인증 강화)
```

---

## D5-10. 직무 분리와 운영 환경 접근 통제

### SAN(Storage Area Network) 보안
```
Hard Zoning = 물리적 포트 기반 격리 → 더 안전 (스푸핑 불가)
Soft Zoning = WWN(World Wide Name) 기반 → 스푸핑 가능성 있음

Hard Zoning > Soft Zoning (보안 강도)
```

### SAN/시스템 관리자 단일 운영 위험
```
한 사람이 구현·테스트·운영·검증 모두 수행 = 위험
  1. 직무 분리(SoD) 위반: 자기 작업을 자기가 검증
  2. 단일 장애점(SPOF): 부재 시 시스템 관리 불가
  3. 보안 통제를 탐지 없이 수정·제거 가능

기술적 통제(로깅, 하드 조닝 등)가 완벽해도 → 인적 위험 존재
```

### 개발자의 운영 환경 접근 = Red Flag
```
개발자 + 운영 DB 접근 = 가장 큰 우려
  - QA/테스트 과정 우회하여 직접 반영 가능
  - 코드 + 데이터 모두 접근 = 직무 분리 위반
  - 시스템 관리자보다 위험 (관리자는 업무상 접근 정당화됨)

디버깅 도구의 운영 환경 존재 = 심각한 결함
  - 프로그램 실행 중 데이터 수정 가능 (breakpoint → 값 변경 → 계속 실행)
  - 정상 통제(로그, 검증)를 완전히 우회
  - 정상 접근 경로(A) < 통제 우회 도구(B)
```

### 개발자 운영 접근 보완 통제
```
자원 부족으로 개발자에게 운영 접근 줄 수밖에 없을 때:
  BEST = ID 분리(개발용/운영 지원용) + 모니터링
  - ID 분리 자체가 구조적 통제 (활동 구분)
  - 모니터링 안 하더라도 ID 분리만으로 효과 있음

약한 통제:
  - 감사 로그만 활성화 (검토 안 하면 무의미)
  - 변경 관리자 사전 승인 (풀 액세스로 우회 가능)
  - 변경 전 백업 (비인가 변경 예방·탐지 못함)

자동 통제 > 수동 통제 / 예방 통제 > 탐지 통제
```

### 단일 DB 계정 접근 통제
```
애플리케이션이 단일 ID/PW로 DB 접속 = 일반적 구조
  → 애플리케이션 내부에서 역할 기반 접근 통제(RBAC) 적용

핵심 구분:
  인증(Authentication) = "너 누구야?" → ID/PW, MFA
  권한(Authorization)  = "너 뭘 할 수 있어?" → RBAC
  문제가 권한 통제면 → 인증 강화는 방향이 틀림
```

---

## D5-11. 퇴직/벤더/특권 접근 관리

### 퇴직 시 즉시 접근 차단 (★ 반복 출제)
```
개발자/직원 갑작스러운 퇴사 → MOST important = 논리적 접근 즉시 차단
  - 악의적 변경, 데이터 유출, 백도어 위험
  - 인수인계, HR 면담, 서류 처리는 모두 2순위
  - "suddenly", "terminated", "immediately" → 접근 차단

물리적 접근도 동일: 배지/카드 즉시 회수·비활성화
```

### 과도한 특권 접근 발견 시
```
감사인이 과도한 특권 접근 발견 + "경영진 승인됨" 답변
  → BEST = 보완 통제(compensating controls) 존재 여부 확인

보완 통제 예: 로그 모니터링, 정기 접근 검토, 이중 승인, 세션 기록

감사 원칙: 발견 → 바로 보고 ✗ / 발견 → 추가 조사 → 보고 ✅
```

### 벤더 임시 접근 통제
```
MOST effective = 만료일 설정(자동) + 서비스 기반 권한
  - 자동 만료 → 사람 실수로 삭제 안 되는 문제 방지
  - 서비스 기반 → 최소 권한 원칙

약한 통제:
  - SLA 조항 = 통제가 아닌 계약 문서
  - 관리자 접근 제공 = 과도한 권한
  - 작업 완료 후 삭제 = 수동 → 깜빡할 수 있음
```

---

## D5-12. 원격/생체인식/물리적 접근 보안

### 원격 시스템 접근 보안
```
"remote" 키워드 → 암호화/전송 보안 먼저 생각
  원격 = 신뢰할 수 없는 네트워크(untrusted network) 경유
  암호화 안 된 비밀번호 = GREATEST concern (도청으로 탈취 가능)

비밀번호 공유(A) < 암호화 안 됨(B)
  A: 특정 사람만 접근 / B: 네트워크 상 불특정 다수 접근 가능
```

### 생체인식 시스템 감사
```
감사 순서: Enrollment(등록) → Storage(저장) → Identification(식별) → Verification(검증)
```

### 생체인식 성능 지표 (★ 반복 출제)
```
FAR (False Acceptance Rate) = 비인가자를 허용하는 비율 (Type II Error)
FRR (False Rejection Rate)  = 인가자를 거부하는 비율 (Type I Error)
EER (Equal Error Rate)      = FAR = FRR인 지점 → 낮을수록 정확한 시스템
FER (False Enrollment Rate) = 등록 실패 비율

시스템 효과성 평가: EER이 가장 낮은 시스템이 가장 효과적

환경별 우선순위:
  일반 환경: EER 기준으로 평가
  고보안 환경: FAR이 가장 중요 (비인가 허용 = 치명적)
  → 비인가 접근 허용(FAR) > 인가자 거부(FRR)
```

### 생체인식 시스템 감사 상세
```
  FIRST = Enrollment (등록이 잘못되면 나머지 전부 무의미)

생체인식 물리적 접근 시스템:
  GREATEST concern = 스캐너↔접근 통제 시스템 간 암호화 없는 전송
  - 생체 데이터 = 변경 불가능한 개인정보 (비밀번호와 다름)
  - 유출 시 피해가 영구적
  - 스캐너 설치 위치(B)는 CCTV로 보완 가능 → 암호화 부재보다 덜 심각

확실한 기술적 결함 vs 관리적 미흡(테스트 미수행):
  확실한 결함이 보기에 있으면 → 기술적 결함이 정답
  관리적 미흡끼리 비교면 → 테스트/분석 미수행이 정답 가능
```

### 클라이언트-서버 환경 접근 통제 감사
```
FIRST = 네트워크 접근 지점(access points) 식별
  - 클라이언트-서버 = 여러 접근 경로 존재 (분산 구조)
  - 접근 지점 모르면 → 어디를 검토할지 자체를 모름

감사 순서: 범위 파악(B) → 통제 검토(C,D) → 기술 평가(A)
"FIRST" 문제 = 바로 검토 들어가는 답 X, 범위 파악하는 답 O
```

### 배지 출입 시스템
```
MOST important = 분실·도난 배지 즉시 비활성화 절차
  - 활성 상태 분실 배지 → 아무나 데이터센터 진입 가능
  - 예방 통제(배지 비활성화) > 탐지 통제(출입 로깅)

  오답:
    - 리더기 변조 방지 위치 = 변조해도 문 안 열림 (무관)
    - 시스템 빈번한 백업 = 설정 자주 안 변함 (불필요)
    - 출입 시도 전체 로깅 = 탐지 통제 (2순위)
```

### 리스크 기반 감사 계획 수립
```
MOST important = 핵심 시스템 및 실시간 운영 근접도 파악
  "어떤 시스템이 핵심 기능에 영향?" + "얼마나 실시간?"
  = "터지면 회사가 얼마나 빨리, 얼마나 크게 타격받는가?"

순서: 핵심 시스템 파악(C) → 리스크 평가(B) → 우선순위 결정(D)
C 없이는 B를 제대로 할 수 없음

"MOST important" = 다른 단계의 전제조건이 되는 단계
```

---

## D5-13. 논리적 접근 통제 (방화벽/필터/SNS)

### 라우터 ACL 검토 = 네트워크 보안 감사
```
라우터 ACL 검토 = 네트워크 보안 검토(Network Security Review)의 일부
  ≠ 환경적 검토, BCP, 데이터 무결성 검토

네트워크 보안 검토 범위:
  ACL, 방화벽 규칙, 포트 스캐닝, 연결성 확인
```

### 논리적 접근 통제 감사 순서
```
① 보안 리스크 이해 (Understand Security Risk)
② 통제 문서화 (Document Controls)
③ 통제 테스트 (Test Controls)
④ 정책 대비 평가 (Evaluate against Policies)

리스크 이해 없이 테스트/평가부터 하면 안 됨
```

### 방화벽 감사 = 파라미터 검토
```
정책 준수 확인 BEST = 파라미터 설정값 검토
  - 정책 vs 실제 설정 직접 대조 = 직접 증거
  - 인터뷰(구두) < 절차서(문서) < 파라미터(직접 증거)

감사 증거 강도: 직접 관찰/시스템 설정 > 문서 > 인터뷰
```

### 웹 콘텐츠 필터 vs 프록시
```
웹사이트 유형별 접근 차단 = 웹 콘텐츠 필터
  - 방화벽 = 패킷/연결 상태만 (웹사이트 분류 안 봄)
  - 프록시 = 요청 중계 (필터링은 부가 기능)
  - 웹 캐시 = 속도 개선용

CISA는 "본래 목적"으로 판단
```

### SNS 기밀 유출 통제
```
SNS 기밀 유출 BEST 완화 = 보안 인식 교육(Awareness Training)
  - 회사 차단(D) → 핸드폰/집 PC로 접속 가능
  - 모니터링(C) → 개인 기기는 못 봄
  - 정책 서명(B) → 위험성 모르면 무의식적 유출

통제 불가능 영역 → 인식 교육만 유효
```

### 보안 토큰 + PIN
```
2단계 인증: 토큰(가진 것) + PIN(아는 것)
PIN 보안 정책 MOST important = PIN을 절대 적어두지 말 것
  - 적어두면 "아는 것" → "가진 것"으로 변질
  - 2단계 → 사실상 1단계로 붕괴

PIN 복잡성(랜덤)보다 비밀성(적어두지 않기)이 본질
```

### 비밀번호 정책 준수 = 자동화된 통제
```
"ensure compliance" = 자동화된 예방 통제
  - 자동화 도구 = 사람 개입 없이 정책 강제
  - 교육 ≠ ensure (교육해도 안 지킬 수 있음)
```

---

## D5-14. 암호화와 디지털 서명

### 보안 속성 매칭
```
기밀성(Confidentiality) → 암호화
무결성(Integrity) → 해시/서명
인증(Authentication) → 디지털 서명
부인방지(Non-repudiation) → 디지털 서명
```

### 디지털 서명 vs 암호화 (키 방향 반대)
```
디지털 서명: 보내는 사람의 개인키로 서명 → 공개키로 검증
암호화:     받는 사람의 공개키로 암호화 → 개인키로 복호화
```

### 이메일 발신자 인증 = 디지털 서명
```
"발신자가 정말 그 사람인지" = 인증(Authentication)
→ 디지털 서명이 제공
→ 암호화는 기밀성만 (누가 보냈는지는 모름)
```

---

## D5-15. IT 거버넌스

### EGIT 프레임워크
```
IT 거버넌스가 주로 다루는 것 = 전략적 정렬(Strategic Alignment)
  - IT와 비즈니스 목표 일치
  
5가지 초점 영역:
  1. 전략적 정렬 (Strategic Alignment) ★
  2. 가치 전달 (Value Delivery)
  3. 리스크 관리 (Risk Management)
  4. 자원 관리 (Resource Management)
  5. 성과 측정 (Performance Measurement)

거버넌스(무엇을, 이사회) vs 관리(어떻게, CIO)
COBIT EDM: 평가(Evaluate) → 지시(Direct) → 모니터(Monitor)
```

### 보안 프레임워크 정의 입력
```
정보보안 프레임워크 정의 = 글로벌 보안 표준이 입력값
  ≠ 리스크 평가 (리스크 평가는 프레임워크 적용 후)
  ≠ 내부 정책 (정책은 프레임워크에서 파생)
```

---

## D5-16. 방화벽 계층과 네트워크 아키텍처

### 방화벽 세밀도 계층 순서
```
Packet Filter(L3/L4) < Screening Router < Circuit Gateway(L5) < Application Gateway(L7)

Application Gateway(ALG)
  = 서비스별 전용 프록시, OSI 1-7 전체 검사
  = SQL Injection·Command Injection·Buffer Overflow·Protocol Tunneling 탐지
  = 가장 정밀한 통제

Screened Subnet Firewall (DMZ 구조)
  = 외부 라우터 → DMZ → 내부 라우터 3단 구조
  = 네트워크 전체 방어에 최적
  = 키워드: "network 보호" → Screened Subnet
            "application 보호" → Application Gateway
```

### DMZ (Demilitarized Zone)
```
인터넷과 내부망 사이의 완충 구간
공개 서버(웹, 메일, DNS) 배치 영역
내부망으로의 직접 접근 차단
```

### 매체 보안 순위 (무단 접근 방어)
```
광섬유(Fiber-optic) > Coaxial > STP > UTP

광섬유: 빛 신호 = 전자기 방출 없음, 물리적 tap 어려움
구리 기반(UTP/STP/Coaxial): 비접촉 전자기 유도 도청 가능
Shielded(차폐): EMI 간섭 방지용 ≠ 보안 목적
```

### Honeypot
```
공격자를 유인해 수법·전략 관찰·기록
= Proactive(사전 정보 수집) 보안 도구
≠ IDS/IPS (Reactive — 진행 중 공격 대응)
≠ Bastion Host (하드닝된 공개 서비스 호스트, 정보 수집 기능 없음)
```

### 회선 보안 순위
```
Dedicated(전용선) > Dialup > Baseband > Broadband

Dedicated Line (Leased Line)
  = 특정 사용자 전용, 공유·중간 진입점 없음
  = 가로채기·중단 위험 최저
  = ISDN: 자체 암호화 없어 보안 연결 부적합

VPN = 암호화(Encryption) + 인증(Authentication) + 터널링(Tunneling)
  = Dedicated보다 저렴, 보안+경제성 균형
  = 주 목적: 전송 데이터 기밀성 (스니퍼 차단)
  = VPN ≠ 정책 집행, ≠ 탐지, ≠ 접근통제
```

### C&A 프로세스
```
Certification(기술 평가) + Accreditation(관리적 승인)
  Certification = 보안 기능 기술적 검증
  Accreditation = 경영진의 잔여 위험 수용 공식 승인
  환경 변경 시 재인증 필요 (특정 환경·구성 전용)
  정부·군·중요 인프라 시스템에 적용
```

---

## D5-17. 네트워크 보안 심화

### 회의실 포트 / DHCP 위험
```
활성화된 네트워크 포트 = 외부인 내부망 무단 접속 경로
  → 예방: VLAN 격리, 802.1X NAC, 미사용 포트 Shutdown

DHCP 자동 IP 할당 위험
  = 개방 포트 + DHCP → 무단 사용자에게 유효 IP 자동 부여
  완화: 802.1X NAC, MAC 필터링, DHCP Snooping, Port Security

접근통제의 한계: SSO·인증은 물리적 네트워크 접근 자체는 막지 못함
```

### Defense in Depth (심층 방어)
```
조건 2가지:
  ① 여러 계층(Multi-layered)
  ② 이질적 메커니즘(Diverse) — 동일 제품 중복은 심층 방어 아님

예: 방화벽+호스트 ACL, 물리+논리, 네트워크 IDS+호스트 HIDS

Security by Obscurity ≠ 심층 방어 (숨김만으로는 단일 통제)
Redundancy ≠ Defense in Depth (병렬 이중화는 가용성 목적)
```

### Egress Filtering (BCP 38 / RFC 2827)
```
송신 패킷 중 출발지 IP가 내부 대역이 아닌 것 차단
= 자기 네트워크가 DoS 증폭·IP 스푸핑 근원지로 악용 방지

Ingress = 수신 필터(피해자 보호)
Egress  = 송신 필터(가해자 역할 차단)

키워드: "자사가 공격 도구가 되는 시나리오" → Egress 방향 통제
```

### Source Routing 차단
```
Source Routing = IP 헤더 Options로 패킷 경로를 송신자가 지정
= IP Spoofing과 결합 시 양방향 스푸핑 실현 → 방화벽 필수 차단
설정: Cisco no ip source-route / Linux accept_source_route=0

IP Spoofing 방어 계층:
  ① Ingress/Egress Filtering ② Source Routing 차단 ③ uRPF ④ IPsec
```

### VPN 핵심 위험
```
감염된 원격 클라이언트를 통한 악성코드 내부 확산
= VPN 암호화 트래픽이 방화벽 검사 우회하는 구조적 문제

Split Tunneling = 원격 PC가 인터넷+기업망 동시 연결 → 감염 경로
  → 기업 VPN은 Full Tunnel 권장

VPN 보안 강화: NAC(Posture Check) + 2FA + EDR + IPS 검사
```

### TLS 통합 보안
```
하나의 프로토콜로 기밀성+무결성+인증 동시 제공
  기밀성 = 대칭 암호화(AES·ChaCha20)
  무결성 = MAC·해시
  인증   = X.509 인증서

TLS ⊃ PKI 활용 (PKI는 인증서 발급 인프라)
TLS vs VPN: VPN은 암호화 없는 구현도 존재, TLS는 항상 암호화 내장
IDS = Detective 통제만, 기밀성/무결성 보호 불가

Overall/BEST: 복수 보안 요구를 단일 통제로 → TLS 선택
```

### Clear Screen Policy
```
자리 비움 시 자동 세션 잠금 (암호 화면보호기)
= 가장 비용효과적 (OS 내장 기능, 전사 적용 가능)
= ISO 27001 A.7.7 요구사항

세션 잠금 vs 세션 종료 구분:
  잠금 = 로컬 PC 무단 접근 방지
  종료 = 원격·웹 세션 재인증

모니터 끄기 ≠ 보안 통제 (로그인 세션 유지됨)
```

### AAA 프레임워크
```
Authentication(인증) → Authorization(권한 부여) → Accounting(감사·기록)
  = 인증·인가가 Accounting보다 선행

예방통제 우선 원칙:
  접근 허용 "이전" 인가·인증이 1차 방어
  로그(탐지)는 사후 보완

User vs Node Authentication:
  사용자 인증 > 단말 인증 (노드는 누가 앉았는지 모름)
```

### Active Content / Code Signing
```
Java Applet·ActiveX = 출처(Source) 신뢰가 핵심
Code Signing = 개발자 서명 + CA 인증서 검증 → 출처·무결성 확인

방화벽·HTTPS 한계: 코드 자체의 악성 여부 판별 불가
ActiveX = 샌드박스 없음(풀 권한), Java = JVM 샌드박스
```

### Passive vs Active 공격
```
판단 기준: "공격자가 데이터·시스템을 변경하는가?"
  No = Passive (기밀성 침해, 탐지 어려움)
  Yes = Active  (무결성·가용성 침해, 탐지 가능)

Passive 예: Traffic Analysis·Eavesdropping·Sniffing·Shoulder Surfing
Active  예: Masquerading·Modification·DoS·MITM·Replay·Session Hijacking

Traffic Analysis = 메타데이터만 관찰 → 암호화로도 내용 추론 가능 (Passive)
```

### 네트워크 감사 최우선 문서
```
네트워크 설정 감사 FIRST = 배선도·네트워크 다이어그램
  포함 정보: 물리 배선·논리 토폴로지·VLAN·서브넷·방화벽·IDS 위치
  이유: 토폴로지 파악 없이 세부 통제 검토 불가 (Top-Down)

감사 유형별 우선 문서:
  네트워크 → 배선도
  접근통제 → 사용자 목록
  앱       → 앱 목록
  BCP      → 백업 절차
```

---

## D5-18. DLP (데이터 손실 방지)

### DLP 목적과 기본 개념
```
PRIMARY 목적 = 민감 데이터의 외부 반출(Egress) 통제
1차 목표 = 위험 완화(Mitigate) — 완전 예방이 아닌 수용 수준까지 감소

DLP 3대 영역:
  Data in Motion  = 네트워크 전송 중
  Data in Use     = 엔드포인트 사용 중
  Data at Rest    = 저장소

DLP ≠ IDS/IPS (공격 탐지)
DLP ≠ 방화벽 (경계 접근 통제)
DLP ≠ DRM (파일 사용 권한)
DLP ≠ 암호화 (기밀성 보호)
```

### DLP 구현 순서
```
MOST important = 민감 데이터 위치·특성 먼저 파악
"You Can't Protect What You Don't Know"

① 데이터 식별·분류 (Data Owner 역할)
② 흐름 분석
③ 정책 수립
④ 제품 선택
⑤ 파일럿(모니터 모드)
⑥ 규칙 튜닝 (오탐 최적화)
⑦ 단계적 확대 → 차단 전환
⑧ 교육·배포

오탐(False Positive): 정상 데이터를 민감으로 오인
  → 경보 피로(Alert Fatigue) → 진짜 위협 놓침
  해결: 단계적 구현 + 규칙 튜닝 (모니터 모드보다 효과적)
```

### DLP 경보 처리 / Data Owner 역할
```
DLP 경보 해결 의사결정 = Data Owner
  이유: 데이터 중요도·전송 정당성 판단 가능한 유일한 의사결정자

DLP 워크플로우:
  탐지 → DLP Admin 1차 검토 → Data Owner 결정
  → 실행 → (유출 확인 시) IR 에스컬레이션

Control Risk:
  수동 통제 = 인적 오류·지연·일관성 부족 → Control Risk 증가
  자동 통제 = 일관성·실시간·확장성 → Control Risk 감소
```

### 데이터 밀반출과 세그먼테이션
```
데이터 밀반출 = 민감 데이터를 조직 외부로 무단 전송·복사·반출

BEST 예방 = 네트워크 세그먼테이션
  = 민감 데이터 구간 격리 → 측면 이동(Lateral Movement) 차단
  기술: 물리 분리·VLAN·서브넷·Microsegmentation·NGFW·ZTNA

세그먼테이션 vs DLP: 경로 차단(구조적) vs 콘텐츠 탐지(차단) → 상호보완

공개 웹메일 전송 차단: DLP 우위 (자동 예방, 의도·비의도 불문 차단)
  교육의 한계: 의도적 유출에는 효과 없음
```

### DLP 감사 포인트
```
감사 FIRST = 구성·구현 적절성 (정책이 기술로 정확히 집행되는지)
Paper DLP = 정책은 있으나 구현 없음 → 실질 보호 없음

DLP 감사 체크리스트:
  정책·규칙·배포범위·모니터링·테스트·로그·역할 7단계

위험 기반 감사 = 위험 우선순위에 따라 감사 자원 배분
  고위험 집중·저위험 경감 → 효율성·효과성 극대화
```

---

## D5-19. 암호화 심화

### 매체 폐기 - NIST SP 800-88 3단계
```
Clear(덮어쓰기) → Purge(Degaussing) → Destroy(파괴) 확신 수준 상승 순

With Certainty 키워드 → Destroy(파괴)가 항상 정답
손상 HDD 조건: 소프트웨어 삭제 불가 → 물리적 파괴만 유효
DoD 5220.22-M: 최상위 기밀 = 물리적 파괴만 허용

Certificate of Destruction: 제3자 업체 발행 폐기 증거 문서
```

### IPsec 구조
```
AH(Authentication Header) = 무결성·인증 제공
ESP(Encapsulating Security Payload) = 기밀성·무결성·인증 제공
  ESP만이 기밀성(암호화)을 제공 — AH와의 유일한 차이

Transport Mode = 페이로드만 암호화·인증
Tunnel Mode    = 전체 IP 패킷 암호화·인증 (VPN 표준)

캡슐화(Encapsulation) = 터널링과 동의어
GRE 단독: 캡슐화는 되나 암호화 없음 → IPsec과 결합 필요
```

### CRC vs Hash
```
CRC (Cyclic Redundancy Check)
  = 전송 오류 탐지용 (우연한 오류)
  = Ethernet·Wi-Fi·ZIP·디스크 I/O 등 하드웨어 프로토콜
  = 의도적 변조에 취약 (보안 검증 부적합)

Hash (SHA-256 등)
  = 의도적 변조 탐지 (보안 목적)
  = 다운로드 무결성·디지털 서명·비밀번호 저장

CRC = 우연한 오류 / Hash·MAC = 고의적 공격 — 위협 모델 다름
```

### 해싱 vs 암호화 핵심 구분
```
해싱:
  단방향(Irreversible) — 역산 불가
  고정 길이 출력
  키 불필요 (HMAC 제외)
  용도: 패스워드 저장·파일 무결성·디지털 서명 내 사용

암호화:
  양방향(Reversible) — 키로 복호화 가능
  기밀성 목적
  용도: 통신(TLS)·저장(DB·디스크)·이메일

비밀번호 저장: 해싱+Salt+Key Stretching (bcrypt·Argon2·PBKDF2)
  → 평문 저장 금지, 인증용은 해싱 / 복구 필요는 암호화
```

### PKI 키 방향 절대 규칙 (★ 반복 출제)
```
기밀성 = 수신자 공개키로 암호화 → 수신자 개인키로 복호화
서  명  = 송신자 개인키로 서명  → 송신자 공개키로 검증

암기법: 내가 하는 것(서명)은 내 개인키 / 상대만 보게 하려면 상대 공개키

진정성+기밀성 동시: 송신자 개인키 서명 + 수신자 공개키 암호화 (S/MIME·PGP 표준)

C·I·N 속성 매핑:
  대칭키           = 기밀성(C)만
  해시             = 무결성(I)만
  디지털 서명      = 무결성(I) + 부인방지(N)
  디지털 인증서    = 기밀성(C) + 무결성(I) + 부인방지(N)
```

### 디지털 서명 상세
```
서명 3가지 보증: Integrity(무결성) + Authentication(인증) + Nonrepudiation(부인방지)
기밀성(C)은 제공하지 않음 — 서명 문제에서 '기밀성' 포함 보기는 거의 항상 오답

서명 흐름: 메시지 → 해시 → 개인키 서명 → 전송 → 재해싱 → 공개키 검증 → 비교

부인방지 근거: 개인키 유일 소유 + CA 인증서 신원 결합 → 법적 효력
  HMAC 한계: 공유키라 양측 모두 생성 가능 → 부인방지 불가

발신자 신원 MOST reliable = 디지털 인증서 (CA가 공개키+신원 결합 보증)
  서명 단독 < 인증서 (MITM으로 공개키 위조 가능, CA가 차단)
```

### TLS 기밀성 구조
```
TLS = 하이브리드 암호화:
  비대칭(키 교환·인증) + 대칭(실제 데이터 암호화)
  이유: 비대칭은 수백~수천 배 느림 → 대용량 데이터에 대칭 사용

기밀성 전송 공식:
  세션키를 수신자 공개키로 암호화 + 메시지를 세션키로 대칭 암호화

WLAN 기밀성 BEST = 동적 키 암호화 (WPA2/WPA3)
  정적 키(WEP): RC4 고정 키 → 수집·분석으로 복원 가능
  MAC 필터링: 암호화 아님, MAC Spoofing으로 우회 가능
```

### PKI 구성요소 역할 분리
```
CA (Certificate Authority)
  = 인증서 수명주기 전체 관리: 발급·갱신·폐기·CRL 발행
  = 신원 확인 후 X.509 인증서 서명
  = 개인키 보유 = 신뢰 앵커 (절대 위임 불가)

RA (Registration Authority)
  = 신원·소속·권한 검증 → CA에 전달
  = 인증서 발급·서명·폐기 권한 없음 (위임 불가)
  RA 오답 패턴: "RA가 발급·서명·등록한다" → 자동 오답

CPS (Certificate Practice Statement)
  = PKI 운영 절차 (How-to) — 키 손상 처리 절차 포함
  CP = 인증서 요구사항 (What) — CPS가 구현
  CRL = 폐기 인증서 목록 (결과물, 절차 문서 아님)
  OCSP = 실시간 인증서 상태 조회

디렉터리 서버 = 다른 사용자의 인증서·공개키 게시 조회 (LDAP·X.500)
  → 송신자가 수신자 공개키 조회에 사용

자체 서명(Self-signed) 위험 = 가장 큰 위험 (CA 검증 없음 → MITM 가능)
  위험 순위: Self-signed > 56비트 약한 키 > 만료 > 다중 사용
```

### ECC (Elliptic Curve Cryptography)
```
핵심 이점 = 작은 키로 동일 보안 강도
  ECC 256비트 ≈ RSA 3072비트

활용: TLS 1.3·암호화폐·스마트카드·모바일·IoT·SSH(ED25519)
모바일·IoT 적합성: 전력·저장·대역폭 절약

RSA·ECC 공통: 디지털 서명·키 분배·무결성 모두 지원
양자 위협: ECC·RSA 둘 다 Shor 알고리즘 취약 → PQC 전환 필요
```

### Web of Trust (PGP)
```
PGP/GPG 신뢰 모델 — 구성원 상호 공개키 서명으로 분산 신뢰 형성
소규모 적합성: 중앙 인프라 불필요·무료·유연성

CA vs WoT:
  CA  = 중앙집중·공식·대규모 (기업·정부)
  WoT = 분산·비공식·소규모 (개인·오픈소스)

S/MIME vs PGP: 동일 기능 다른 신뢰 모델
  S/MIME = CA 기반 / PGP = WoT 기반
```

### DRM / 스테가노그래피 / 워터마킹
```
Steganography = 다른 메시지 안에 정보 존재를 은닉 (감춰진 글쓰기)
Watermarking  = 지각 불가능한 식별자 삽입 (견고성·보안성)
  Watermark 유형: Visible(보이는 로고)·Invisible·Robust·Fragile(변조 탐지)

Fingerprinting = 배포 복사본마다 고유 식별자 → 유출 출처 추적(Traitor Tracing)

Steganography vs Cryptography:
  은닉(존재 숨김) vs 변환(내용 보호) — 조합 시 최강

Digital vs Digitized:
  Digital   = 암호학적(PKI 기반)
  Digitized = 스캔 이미지 — 완전 다름 (혼동 유발 함정)
```

### 로그 무결성
```
로그 무결성 BEST = 전용 제3자 로그 서버 (생성·저장 시스템 분리)
  = SoD 원칙: 관리자는 자기 로그 삭제·수정 불가

로그 무결성 3대 원칙: Separation(분리)·Immutability(불변)·Independence(독립)
무결성 기술: HMAC·디지털 서명·해시 체인·WORM Storage·NTP 시간동기화

로깅의 한계: 겸직자가 관리자 권한 보유 시 로그 조작 가능
  → 탐지 통제는 자기 감독 딜레마 해결 불가
```

### 사회공학 공격 용어
```
Piggybacking / Tailgating = 인가자 뒤를 따라 비인가자 통제 구역 진입
  대응: Mantrap (이중 연동 도어, 1인 1통과 강제)

Shoulder Surfing = 어깨너머 훔쳐보기 → 프라이버시 필터·자리 배치
Dumpster Diving  = 쓰레기통 뒤지기 → 문서 분쇄·매체 파기
Impersonation    = 직원 사칭 → 다중 인증·신원 확인·콜백 검증
```

### Shift-Left / 보안 코딩
```
Shift-Left 원칙: 개발 초기 단계 보안 적용이 가장 비용효과적
1-10-100 Rule: 결함 수정 비용 = 요구사항 1배 → 구현 10배 → 테스트 100배 → 운영 1000배

개발자 교육 = 예방(결함 생성 차단)  ← BEST preventive
취약점 테스트 = 탐지(이미 있는 결함 발견)

암호화의 한계: Injection·XSS 등 코딩 결함은 암호화로 방어 불가
```

---

## D5-20. 클라우드 보안

### 공유 책임 모델 (IaaS/PaaS/SaaS)
```
IaaS 책임 분기점 = 하이퍼바이저
  제공자 책임(IaaS): 하이퍼바이저·물리 서버·네트워크·스토리지·데이터센터
  고객 책임(IaaS):   게스트 OS·미들웨어·애플리케이션·방화벽·접근통제·데이터

위로 올라갈수록 고객 책임 축소:
  IaaS → PaaS(OS까지 제공자) → SaaS(앱까지 제공자, 고객은 데이터·계정만)

감사 방법:
  제공자 = SOC 2·ISO 27017 보고서 확인
  고객   = 자체 통제 점검
```

### Data Sovereignty (데이터 주권)
```
데이터가 저장된 국가의 법률 적용
= PII 국외 저장 시 컴플라이언스 핵심 리스크

관련 법: GDPR·CCPA·PIPL — 국가별 상이, 위반 시 매출 4% 제재
CLOUD Act: 미국 정부의 해외 데이터 접근권 — 미국 클라우드 사용 시 고려
DPIA: 개인정보영향평가 — 클라우드 도입 전 필수

SLA 한계: 가동시간·성능은 협상 가능 / 데이터 위치는 법적 노출로 우선 검토
```

### Vendor Lock-in / 이식성
```
Portability = 데이터·앱·워크로드를 다른 클라우드로 이전할 수 있는 능력
Vendor Lock-in = 특정 공급자 종속 — 가격·기술·데이터 측면 위험

이식성 확보 방안: 락인 조항 제거·표준 포맷·데이터 반출 권리·멀티 클라우드
Exit Strategy = 계약 시 사전 수립 필수 (종료·전환 시나리오)
```

### VM 콘솔 보안
```
VM 관리 콘솔 PRIMARY 위험 = VM 생성·해제(de-provision)
  운영 VM 실수 삭제 시 가용성 손실 직결, 되돌리기 어려움

콘솔 vs OS 권한: 관리 콘솔은 게스트 OS 인증 우회 못함 (VM 수명주기만 통제)
완화: RBAC(개발자는 본인 VM만) + 리소스 풀 분리 + 승인 워크플로우 + 활동 로깅
SoD: 개발자와 운영 관리자 권한 분리 필수
```

### SaaS 사고 처리 / 클라우드 계약
```
SaaS GREATEST concern = 제공자-기업 간 사고 처리 절차 미정의
  통보 시한·에스컬레이션 경로·RCA 공유 의무 SLA에 명시 필요

클라우드 계약 종료 조항:
  데이터 반환 또는 안전한 파기 명시 (GDPR Art.28)
  데이터 잔존(Remanence) = 계약 후 잔존 = 직접 프라이버시 침해

concern 키워드: 비정상·갭 있는 항목 선택 — 정상 특성(현장 지원 없음, 다단말 호환)은 자동 오답
```

---

## D5-21. 기타 신규 토픽

### P2P 위험
```
P2P GREATEST 위험 = 데이터 유출(Data Leakage)
  = 폴더 오설정·자동 재공유 → 기밀·지적재산 인터넷 노출
  = 한 번 유출 시 분산 네트워크 특성상 회수·추적 불가 (영구적)

위험 비교:
  데이터 유출(복구 불가) > 바이러스·성능·비인가 SW (통제·복구 가능)
```

### UDP 특성
```
UDP = Connectionless·Unreliable·Fast
  Handshaking 없음, 순서·신뢰성 보장 X
  Low Latency → 실시간 스트리밍·VoIP에 유리
  Broadcast·Multicast 모두 지원

주요 포트: DNS(53)·DHCP(67/68)·SNMP(161)·NTP(123)
보안 취약: UDP Flood·Amplification·Source IP Spoofing

함정: UDP 느리지 않음, 브로드캐스트 가능, 오류수정 안 함
```

### Shift-Left 복습 / 위험 기반 감사
```
위험 기반 감사 = 위험 우선순위에 따라 자원 배분
  고위험 빈도 ↑ / 저위험 빈도 ↓ (일률적 증가 아님)
  CSA(Control Self-Assessment) = 보조 수단 (감사 대체 불가)

자산 인벤토리의 우선성 (CIS Control #1)
  = 모든 보안 통제의 전제 — 인벤토리 없이는 리스크 평가·패치·접근 통제 불완전
  BIGGEST risk = 기반 붕괴(광범위)가 국소적 결함보다 우선
```

### Clustering / 머신러닝
```
Clustering = 비지도학습(Unsupervised) 기법
  레이블 없는 데이터를 유사성·거리 기반 그룹화

ML 학습 유형:
  지도(Supervised) = 레이블 있음, 분류·예측 (Decision Tree·SVM)
  비지도(Unsupervised) = 레이블 없음, 군집화 (Clustering·PCA)

키워드: 'unlabeled' → 비지도학습 / 'classify with target' → 지도학습

보안 응용: UEBA·SIEM 이상 탐지·사기 탐지·DLP 분류
감사 포인트: 편향·설명 가능성·데이터 품질·모델 거버넌스
```
