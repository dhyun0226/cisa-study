# Domain 4 — 정보시스템 운영/복구

> CISA Domain 4: Information Systems Operations and Business Resilience
> 시험 전략은 `감사인_마인드셋_치트시트.md`, 도메인별 정리는 Domain3/4/5 파일 참고.

---

## D4-1. 변경/패치/형상 관리 종합

> 무단 변경 3가지 패턴(준수/해시/역추적)은 치트시트 S3 참고.

### CMDB / 구성 관리 / 변경 관리
```
CMDB: "현재 뭐가 있고 어떻게 설정?" (저장소)
Configuration Management: 설정을 체계적 관리 (활동)
Change Management: 변경 시 승인 절차 (절차)

흐름:
  1. CMDB에 현재 상태 기록
  2. 변경 요청서 → 승인
  3. 변경 수행 → CMDB 업데이트
```

### CMDB 미유지 = GREATEST concern
```
의존 관계 모름 → 엉뚱한 승인 → 의존성 누락 → 장애
다국적 조직에서 CMDB 없으면 변경 관리 전체 붕괴

비교:
  테스트≠운영 구성 → 이상적이진 않지만 OK
  종이 기반 → 비효율이지만 통제 가능
  CMDB 미유지 → 근본 데이터 틀림 = GREATEST ★
```

### Back-out (롤백) 절차
```
업그레이드 실패 시 이전 상태로
변경 관리의 필수 요소
GitLab: 배포 후 장애 → 이전 버전 롤백
```

### 패치 관리
```
패치 = 변경의 한 종류
사고 발생 시 재발 방지 → 변경 관리 프로세스 전체 점검 (패턴 2)
  = 승인 + 테스트 + 일정 + 롤백 계획

테스트 축소 요청 → 현행 유지가 정답
  편의를 위해 보안/통제를 타협하지 않는다
```

### 긴급 변경 (Emergency Change)
```
정상 절차 우회 시:
  ❌ 사전 포괄 승인 (통제 포기)
  ❌ 문서화만
  ❌ 동료 검토만
  ✅ 경영진 사후 검토+승인

긴급 상황에서도 통제는 유지: 사전 승인 불가능 → 사후 승인이라도 반드시
```

### 변경 로그 검토 목적 = 승인 확인
```
"모든 변경이 승인되었나?" 확인 → 무단 변경 탐지
오답: 모듈 생성일(과거 누락), 변경 횟수(적법성 모름)
정답: 승인 여부 (Authorization)
```

### 무단 변경 탐지: 해시 키 비교
```
해시 키: 파일 내용 → 고유 값, 1바이트만 바뀌어도 완전히 달라짐
주기: 운영 프로그램 해시 vs 승인된 버전 해시
특히 개발자가 이미 운영 환경 접근 가능할 때 → 해시 비교(탐지)가 가장 효과적
```

---

## D4-2. 직무분리와 특권 계정 / Accountability

### 직무분리 (SoD)
```
개발자 → 개발 환경만
운영자 → 운영 환경만
UAT 후 운영 환경에서 코드 변경 → SoD 위반
  = 개발자가 운영 접근 가능했다는 뜻 → SoD 정책으로 해결
```

### 특권 계정 통제
```
특권 계정 = 관리자 = 로그도 수정/삭제 가능 → 추적 무력화
BEST 통제 = 상급자 승인 + 검토
  ❌ 감사 추적 (특권은 로그 조작 가능)
  ❌ 교육 (악의적 행동 못 막음)
  ❌ 신원 조회 (입사 시 1회뿐)
  ✅ 상급자 승인/검토 (직무분리, 사전+사후)
```

### 긴급 변경 시 책임 추적성 (Accountability)
```
BEST = 개인 ID에 임시 권한 부여
  1. 평소: 개발자 운영 접근 권한 없음
  2. 긴급: 개인 ID를 운영 그룹에 임시 추가
  3. 모든 활동이 개인 ID로 로깅
  4. 완료 → 그룹에서 제거

Firefighter ID(공유 계정) = 빠르지만 추적 어려움 → BEST 아님
"Accountability" 키워드 → 개인 식별 가능 여부가 핵심
```

### 임시 권한 상승은 정책으로 다룬다
```
사용자가 가끔 데이터 변경 권한 필요 (정상 비즈니스)
→ 장기 해결책 = 정책에 예외 프로세스 정의

  ❌ 통제 재설계 (정책 없이?)
  ❌ 직무분리 강화 (정책 후)
  ❌ 로깅 추가 (탐지일 뿐)
  ✅ 정책 검토 → 예외 프로세스 정의

원칙: 정책 = 모든 통제의 근거 (패턴 1)
```

### Authentication ≠ Accountability (★ 헷갈림 주의)
```
Identification (식별)   = "나는 김씨야" → 사용자명
Authentication (인증)   = "진짜 김씨 맞아?" → 비밀번호/2FA
Authorization (권한)    = "김씨가 뭐 할 수 있어?" → 권한, 뷰
Accountability (책임)   = "김씨가 뭘 했어?" → 로그 ★

함정: Accountability 문제에 2FA 선택지 → 거의 항상 오답

비유:
  2FA (인증)   = 출입증 + 지문 → 들어온 사람 확인
  로그 (책임)   = CCTV + 활동 기록 → 뭘 했는지 추적
```

---

## D4-3. 재해복구: 사이트/RTO/RPO/MTO

> 백업 vs 복제 vs 가용성 구분(Hot/Warm/Cold Site 디테일 포함)은 [D4-12](#d4-12-백업-vs-복제-vs-가용성-) 참고.

### 사이트 유형 (요약)
| 유형 | 상태 | 복구 시간 | 비용 |
|---|---|---|---|
| Hot Site | 즉시 사용 (장비+데이터) | 가장 빠름 | 가장 높음 |
| Warm Site | 장비 있음, 데이터 없음 | 중간 | 중간 |
| Cold Site | 빈 공간 | 가장 느림 | 가장 낮음 |

### 계약 핵심: 동시 사용 구독자 수
```
대체 사이트는 여러 기업이 공유 → 재해 시 자리 부족 가능
계약에 동시 사용 수/우선순위 명시 필수
```

### RTO / RPO / MTO / SDO / AIW

| 지표 | 의미 | 단위 | 결정 기반 |
|---|---|---|---|
| **RTO** | 복구 목표 시간 (RTO ≤ MTO) | 시간 | 복구 절차/사이트 유형 ★ |
| **RPO** | 데이터 손실 허용량 | 시간/데이터 | 백업 전략/빈도 ★ |
| **MTO** | 최대 허용 중단 시간 (절대 한계) | 시간 | "넘으면 사업 못 살림" |
| **AIW** | Allowable Interruption Window | 시간 | MTO와 거의 동의어 |
| **SDO** | 재해 중 제공할 서비스 **수준** | **수준** | 최소 운영 능력 |

### 시간 vs 수준 (★)

```
시간 지표: RTO, RPO, MTO, AIW
수준 지표: SDO ← 헷갈림 주의

SDO = "재해 중 (대체 운영 모드) 의 서비스 수준"
    ≠ 평상시 서비스 수준
    = 정상 복구 전까지 최소한 이만큼은 돌아가야 함
```

### 방향
```
RTO ↓ = 급함 ↑ = 비용 ↑
RPO ↓ = 손실 적게 = 백업 빈도 ↑ = 비용 ↑
```

### 방향 규칙 (반복 강조 ★)
```
낮다/짧다 = 엄격 = 비싼 솔루션 (Hot site, Mirror)
높다/길다 = 느슨 = 저렴한 솔루션 (Cold site, 일일 백업)
```

→ 보기에 "high RPO에 미러링" 같은 **방향 반대** 조합이 보이면 즉시 탈락.

### 시험 키워드
```
"복구 절차"           → RTO
"백업 전략"           → RPO
"service level/수준"  → SDO ★
"최소 운영 능력"       → SDO
"중요도/우선순위/허용 다운타임" → BIA (D4-8 참고)
```

### 비유 (식당 화재)
```
MTO/AIW = 8시간 넘으면 망함 (절대 한계)
RTO    = 4시간 안에 다시 열기 (복구 시간)
RPO    = 오늘 매출 데이터까지 살리기 (데이터 손실)
SDO    = 재해 중에는 메뉴 10개 → 3개로 운영 (서비스 수준) ★
```

### 타임라인
```
[정상 운영] → 💥재해 → [대체 운영 모드] → [정상 복구]
   풀 서비스             SDO 수준           풀 서비스
                       (최소 운영)
```

### 시스템 분류 ↔ 사이트 매칭
| 분류 | 의미 | RTO | 사이트 |
|---|---|---|---|
| Critical | 멈추면 회사가 멈춤 | 즉시 | Hot |
| Vital | 멈추면 큰 피해 | 중간 | Warm |
| Sensitive | 불편하지만 버팀 | 천천히 | Cold |

```
비유: Critical=심장 / Vital=간 / Sensitive=손가락
주의: Sensitive = "민감" ≠ "핵심" (중요한데 급하진 않음)

MOST appropriate 사이트: 요구사항에 맞는 최소 비용
  Cold로 충분하면 Warm은 오답 ("가능" ≠ "가장 적절")
```

### 공유 서버 RTO = 가장 짧은 RTO
```
한 서버에 여러 앱:
  앱A RTO 1시간 (critical)
  앱B RTO 1일
  앱C RTO 1주

서버 RTO = 1시간 (가장 짧은 것) ★
  → 가장 critical한 앱 기준
  → 평균/긴 거 X (critical 못 살림)

원칙: 공유 자원의 SLA = 가장 엄격한 요구사항 기준
실무 시사점: critical 시스템 = 별도 서버 분리
```

### 중복 정보처리시설 (Duplicate IPF)
```
1. 주 사이트와 다른 재해 권역 (근접 ≠ 장점)
2. HW/SW 호환성 (최신 ≠ 최선)
3. 주 사이트 워크로드 모니터링 → 백업 가용성 보장 ★
4. 정기적 백업 데이터 테스트

가장 중요: 자원 가용성 보장 = 워크로드 모니터링
"백업 있다" ≠ "백업 충분하다"
```

### 상호 협정 (Reciprocal Agreement)
```
정의: 두 조직이 서로의 백업 사이트가 되어주는 약속
장점: 비용 저렴
단점: 같은 재해 권역이면 둘 다 망함

리스크 완화 BEST: 지리적 분리
  → 같은 지진/홍수에 둘 다 안 당하게
  → "근접" ≠ "장점"
```

### 다지역 사무소 + 예산 제약 = 상호 협정 BEST
```
조건:
  ✅ 같은 회사의 여러 사무소
  ✅ 제한된 예산

→ 사무소 간 상호 협정(Reciprocal Arrangement)
  - 추가 비용 거의 0
  - 이미 가진 인프라 활용
  - 서울↔부산↔대구 서로 백업

함정: 일반적으로 상호 협정 = 약점 (같은 재해 권역)
근데 이 조건에서는 BEST (예산 제약 + 기존 자원)

복구 전략 매칭:
  빠른 복구 + 비용 무관 → Hot Site
  중간 복구 + 비용 절약 → Warm Site
  천천히 복구 + 최소 비용 → Cold Site
  여러 사무소 + 예산 제약 → 상호 협정 ★
```

---

## D4-4. 이중화 (Redundancy) 기술 매트릭스

```
장애 유형       → 대응 기술
─────────────────────────────
서버 죽음       → 클러스터링, 로드밸런싱
네트워크 끊김   → 이중 경로, NIC 티밍, VRRP
전원 나감       → UPS → 발전기
디스크 고장     → RAID, 복제, 백업
```

### 서버
| 기술 | 설명 |
|---|---|
| 클러스터링 | 장애 시 자동 Failover |
| 로드밸런싱 | 트래픽 분산 |
| Active-Standby | 1대 운영, 1대 대기 |
| Active-Active | 둘 다 운영 |
| 가상화/컨테이너 | VM 자동 마이그레이션 |

### 네트워크
| 기술 | 설명 |
|---|---|
| 이중화 경로 | 회선 2개 이상 |
| 다이얼 백업 | 주 회선 장애 시 보조 |
| NIC 티밍/본딩 | NIC 2개 묶기 |
| STP | 루프 방지 + 경로 이중화 |
| VRRP/HSRP | 라우터/게이트웨이 이중화 |
| SD-WAN | 여러 회선 자동 전환 |

### 전원
| 기술 | 설명 |
|---|---|
| UPS | 정전 시 배터리 |
| 발전기 | 장시간 정전 대비 |
| Dual Power Supply | 서버 전원장치 2개 |
| Dual Feed | 서로 다른 변전소 |
| PDU 이중화 | A/B 라인 분리 |

### 스토리지
| 기술 | 설명 |
|---|---|
| RAID | 디스크 묶음 (1, 5, 6, 10) |
| SAN 이중화 | 경로 이중 구성 |
| Replication | 실시간 복제 |
| Snapshot | 시점 저장 |
| Backup | 별도 매체 복사 |

### 가용성 대상별 통제 매칭 (★)
```
데이터 가용성  → RAID/미러링 (RAID 1) ★
서버 가용성   → 클러스터/로드밸런싱
네트워크 가용성 → 이중 경로
전원 가용성   → UPS/발전기

"data continuously available" → RAID/미러링 (서버 X)
함정: 클러스터 = 서버 가용성이지 데이터 X
함정: 백업 = 사후 복구이지 continuous X
```

---

## D4-5. 용량/성능/모니터링/시설

### 용량/성능 모니터링 PRIMARY 목적
```
PRIMARY 목적: 자원 용량 정확한 피드백
PRIMARY 이유: SLA 요구사항 충족 보장 (IT의 궁극 목적 = 비즈니스 지원)

구조:
  SLA 충족 (목적)
    └─ 정확한 모니터링 (기반)
        ├─ 최적 용량 운영
        ├─ 미래 예측
        └─ 하드웨어 구매 판단
```

### 서버 최적 구성 → 활용률
```
벤치마크 = "기준 대비 성능" (비교)
활용률   = "실제로 얼마나 쓰나" (운영 현황) ★
최적 구성 판단 = 능력이 아니라 실제 사용 → 활용률
```

### 인증 서버 성능 문제 (패턴 8 적용)
```
피크 시간 로그인만 느림
  → 대역폭 늘리기 ❌ (원인 모름)
  → 인증 서버 측정 기준 수립 ✅
"측정할 수 없으면 관리할 수 없다"
```

### 네트워크 성능 모니터링 → Availability
```
CIA 관점:
  Confidentiality: 오히려 위협 (비암호화 노출)
  Integrity: 간접
  Availability: 직접 ★
```

### 시스템 파라미터 검토 (패턴 1, 7)
```
PRIMARY concern = 보안+성능 요구사항 충족 설정 여부
값이 틀리면 다른 통제(접근 제한/감사/승인) 다 의미 없음
보안 ↔ 성능 트레이드오프 → 균형이 핵심
```

### 데이터센터 유지보수
```
가장 중요한 관행: 정비 수행 독립적 검증 (Independent Verification)
하드웨어 유지보수 검토: 벤더(제조사) 사양과 대조
```

### 예방 정비 효과성 = 다운타임 로그
```
"effectiveness 평가" → 결과 측정
  → 활동 기록(정비 일지) X
  → 계획서(일정표) X
  → 실제 결과(다운타임) ★

이유: 예방 정비 목적 = 장애 방지
  → 다운타임 적음 = 효과적
원칙: "효과성" = 결과로 본다 (활동/계획 ≠ 효과)
```

### 피크 시간대 주의
```
전기 시스템 정비 → 피크 시간 ❌ (물리 작업, 사고 가능)
  → 비피크 + 유지보수 윈도우

피크 시간에 OK한 것:
  데이터 마이그레이션 (느려질 뿐), 개발→스테이징, 대기 라우터 재구성
```

### LAN 구현 검토 순서 (패턴 4)
```
1. 네트워크 다이어그램 (FIRST) → 전체 구조
2. 노드 목록
3. 인수 테스트 보고서
4. 사용자 목록
```

---

## D4-6. 로그/보고서 종합

### 보안 로그 관리
```
효과적 = 자동화 도구 (수집+분석+보관)
오답 패턴:
  "모든(all)" 로그 수집 → 비효율
  "무기한(indefinitely)" 보관 → 한계+규정 위반
  "수동 daily review" → 사람이 다 못 봄
```

### 로그 관리 시스템 구현 도전
```
가장 큰 도전 = IT 인프라 복잡성
  - 자원마다 형식/위치/양 다름
  - 로깅 켜면 성능 저하
  - 무엇을 어디서 얼마나 수집할지 결정 어려움

해결 가능한 것들:
  다양한 형식 → 파싱 도구 (Logstash, Fluentd, Splunk)
  저장 비용 → 보관 정책
  오탐 → 단계적 도입(Phased)으로 튜닝
```

### 로그/보고서 종류
| 종류 | 누가 | 무엇 | 자동 |
|---|---|---|---|
| OS 로그 | OS | 커널/시스템 | 자동 |
| 애플리케이션 로그 | 앱 | 앱 동작/디버깅 | 자동 |
| **Operational Log** (운영 로그) | 시스템 | CPU/메모리/처리량 등 인프라 상태 | 자동 |
| **Exception Report** | 앱 | 실행 중 비정상/오류 | 자동 ★ |
| **Incident Report** | 사람 | 정식 등록된 큰 사건 | 수동 |
| Operator Log | 운영자 | 운영 작업 메모 | 수동 |
| Transaction Log / Audit Trail | 시스템 | 거래/활동 시간순, 누가 뭘 했나 | 자동 |
| Security Log | 시스템 | 보안 이벤트 | 자동 |
| **Availability Report** | 시스템 | uptime/가동률 | 자동 |
| Utilization Report | 시스템 | 사용률 | 자동 |
| Error Report | 시스템 | 오류 | 자동 |

### 로그 종류별 본래 목적 (★ 형용사가 답을 결정)

| 형용사 | 본래 목적 | 주 사용자 |
|---|---|---|
| **operational** log | 시스템 운영 상태 / 인프라 통찰 | 운영팀/SRE |
| **audit / transaction** log | 책임 추적, 무단 행위 탐지 | 감사인/보안팀 |
| **application** log | 앱 동작/오류 디버깅 | 개발자 |
| **security** log | 보안 이벤트 탐지 | 보안팀 |

```
같은 "로그 모니터링"이지만 형용사가 다르면 답이 다름:

  "operational log monitoring의 MAIN benefit?"
  → IT 인프라 건강/성능 통찰 (가시성)

  "audit log monitoring의 MAIN benefit?"
  → 감사 추적/무단 행위 탐지

문제 풀 때: 로그 앞 형용사 먼저 확인!

operational = "잘 돌아가나?" → 인프라 통찰
audit       = "누가 뭘 했나?" → 추적/책임
```

### 보고서 키워드 매칭
```
uptime / availability → Availability Report ★
사용률                 → Utilization Report
오류                   → Error Report
활동                   → System Log
장애 심각도(severity)   → Downtime (영향의 직접 척도)
  함정: 복구 비용/여론/지리 X
```

### Exception vs Incident (헷갈림 주의)
```
Exception Report:
  앱이 자동으로 → "이상 데이터 발견!"
  매일/매주 정기 출력
  예: ERP 이상거래, 회계 마감 예외, 야간 배치 오류

Incident Report:
  사람이 사후 → "장애 났습니다"
  큰 사건만 등록
  예: Jira/ServiceNow 장애 티켓

차이:
  Exception = 데이터/실행 레벨 자동 (작은 것까지)
  Incident  = 사건 레벨 수동 (큰 것만)
```

### 마이그레이션 검증 — 키워드별 정답이 다름 (★ 헷갈림 주의)

| 문제 키워드 | 정답 | 이유 |
|---|---|---|
| **successfully / 성공적 완료** | Exception Report | 실패 건 자동 식별 |
| **failed / 실패한 건** | Exception Report | 자동 리스팅 |
| **individual / 개별** | **샘플 테스트** ★ | 개별 값 직접 비교 |
| **correctness / 정확성** | **샘플 테스트** | 합계로는 못 잡음 |
| **completeness / 완전성** | Control Total | 양적 일치 |
| **전체 합계 일치** | Control / Hash Total | 합계 검증 |

### Exception Report (성공/실패 식별)
```
"성공적으로 완료되었나?" → Exception Report
  → 변환 실패 건을 자동 리스팅
  → "ID 12345 날짜 오류, ID 67890 필수 필드 누락..."
```

### 샘플 테스트 (개별 정확성)
```
"개별 잔액이 정확한가?" → 샘플 테스트
  → 합계는 개별 오류를 숨길 수 있음

함정 예시:
  김씨 잔액: 100만 → 200만 (틀림)
  이씨 잔액: 200만 → 100만 (틀림)
  합계는 같음 → Hash Total로는 못 잡음
  → 샘플 테스트로만 발견 가능
```

### Control Total 함정
```
처리 전 10,000건 / 처리 후 9,998건 → "2건 누락"
한계: 어떤 건이 누락됐는지 모름 (양적 일치만)
```

### 마이그레이션 검증 베스트 프랙티스
```
1차: Control Total → 전체 건수/금액 일치
2차: Exception Report → 실패 건 식별
3차: 샘플 테스트 → 개별 값 정확성 ★

→ 셋 다 다른 목적
→ 문제 키워드에 따라 어느 단계가 답인지 달라짐
```

### 비유
```
이사 후 검증:

질문 1: "박살난 물건 있나?"
  → "박살 리스트" (Exception Report)

질문 2: "내가 100만원짜리 시계 받았나?"
  → 직접 시계 확인 (샘플 테스트)

질문 3: "박스 다 왔나?"
  → 박스 개수 (Control Total)

같은 이사 검증인데 질문이 다르면 방법도 다름
```

### 트랜잭션 로그로 조사 시간 단축
```
"예외 조사 시간 단축" 키워드 → 트랜잭션 로그
포함: 입력 시각, 사용자 ID, 터미널, 처리된 거래
→ 전체 거래 파일 뒤지지 않고 로그만 검색 (책의 색인)
```

### 같은 개념들
```
Transaction Journal = Transaction Log = Audit Log = Audit Trail
"누가 언제 뭘 했는지 시간순 기록" = Git log
```

---

## D4-7. 근본 원인 분석 (RCA)

```
장애 재발 방지 BEST = 근본 원인 분석
원인 모르고 대응 = 증상만 치료
  이중화 투자 → 원인에 안 맞을 수 있음
  모니터링 → 보는 것일 뿐
  후속 감사 → 운영 해결책 아님

패턴 8: 바로 조치 ❌ → 원인 파악 먼저 ✅
```

### 변경 통제 미비 발견 → RCA가 다음

```
"발견 후 next" 문제:
  발견: 변경 관리 미문서화 + 마이그레이션 실패
  
  ❌ 즉시 재설계 권고 (시기상조)
  ❌ 마이그레이션 중지 (극단적, 비즈니스 마비)
  ❌ 즉시 보고 (평가 전)
  ✅ RCA로 진짜 원인 파악

이유: 마이그레이션 실패가 진짜 변경 관리 때문인지 모름
  → 다른 원인일 수 있음 → 원인 확인 후 권고

치트시트 S7 + 패턴 8 동시 적용
```

### Support Model 부실 = 인시던트/SLA 문제의 근본 원인

```
Support Model = 인시던트 처리 체계 (도구 X, 기준/규칙 ★)
포함:
  - 우선순위 분류 기준 (Critical/High/Medium/Low 정의)
  - 대응/해결 시간 (SLA 매핑)
  - 담당자 배정 규칙
  - 에스컬레이션 절차

Jira/ServiceNow는 도구일 뿐
Support Model 없이 도구만 있으면 → 사람마다 다르게 분류 → 우선순위 오류

증상 → 근본 원인:
  SLA 미달 ← 처리 지연 ← 우선순위 오류 ← Support Model 부실 ★

GREATEST concern 함정:
  ❌ "경영진 승인 부족" (절차 문제일 뿐, 직접 인과 없음)
  ❌ "SLA 시간 비현실적" (다른 문제)
  ❌ "자원 부족" (자원 늘어도 잘못 분류는 발생)
  ✅ "Support Model 자체가 부실" (직접 원인)

판단 기준: "이걸 고치면 문제가 멈출까?"
```

---

## D4-8. SLM / SLA / 외주 / BCP / BIA

### SLM (Service Level Management)의 본질

```
SLM = 협상 → 문서화 → 관리 → 모니터링
주 목적 = 사용자-제공자 간 "기대치 합의"
        = 양측이 무엇을 기대할지 명확히 정함

함정:
  ❌ "최고 수준 가용성 보장" → 최고 ≠ 적정
  ❌ "비용 최소화" → 비용은 요구에 따라
  ✅ "기대치 합의" = 본질

CISA 함정 키워드: highest, maximum, lowest, all, always
  → 거의 항상 오답
  → "필요한 만큼/적정 수준"이 정답
```

### SLM vs SLA
```
SLM = 관리 활동 (협상하고 모니터링하는 프로세스)
SLA = 결과 문서 (합의 계약서)
  → SLM 활동의 결과로 SLA가 만들어짐
```

### SLA 검토 시 핵심 = KPI
```
SLA의 본질 = "측정 가능한 약속"
  → KPI 없으면 SLA의 존재 의미 없음
  → "잘 해드릴게요"만 적힌 계약서

흔한 KPI:
  - Response Time (응답 시간)
  - Uptime (가동률)
  - Service Reliability
  - Resolution Time

검토 시 GREATEST concern: KPI 누락 (패턴 1: 근본)
```

### 새 IT 서비스 제공자 선정 시 = SLA가 가장 중요
```
A: 다른 고객 추천서 (실사) ❌
B: 물리적 보안 (실사) ❌
D: 직원 신원 조회 (실사) ❌
C: SLA ★ ← 모든 요구사항을 계약으로 명문화

SLA에 다 담을 수 있음:
  성능, 보안, 인력 관리, 페널티, 종료 조건 등
  → A, B, D는 SLA의 부분집합
  → 패턴 2 (포괄적인 것이 정답)
```

### 외주 업체 SLA 준수 검증 = 발주처가 직접 측정
```
원칙: 평가받는 당사자가 만든 자료는 신뢰도 낮음

ISP의 가용성 SLA 준수 검증:
  ❌ ISP가 만든 다운타임 보고서 → 자기가 자기 평가
  ❌ ISP가 만든 대역폭 보고서 → 측정 대상 다름
  ❌ 회사가 만든 failover 사용 보고서 → 간접 증거
  ✅ 회사가 직접 측정한 다운타임 보고서

감사 증거 신뢰도 순서:
  1. 감사인이 직접 관찰
  2. 독립적 제3자 자료
  3. 기업 내부 자료
  4. 평가받는 당사자 자료 ← 최저
```

### 의료/금융 + 클라우드 → 제3자 데이터 접근이 GREATEST
```
의료 기관 + 환자 정보(PHI) + 클라우드 계약:
  GREATEST concern = 제3자 제공자가 데이터 접근 권한 보유
  → HIPAA 등 규제 위반 가능
  → 환자 정보 유출 → 막대한 벌금 + 평판 손상

"의료 + 데이터 접근" = 항상 적신호
"금융 + 거래 데이터" = 항상 적신호
(GREATEST concern 풀이 공식은 치트시트 S5 참고)
```

> 상호 협정 (Reciprocal Agreement) 및 복구 사이트 관련은 [D4-3](#상호-협정-reciprocal-agreement) 참고.

### BCP ⊃ DRP 관계도

```
┌──────────────────────────────────────┐
│  BCP (Business Continuity Plan)      │  ← 비즈니스 전체
│  ┌─────────────┐  ┌────────────────┐│
│  │ DRP (IT)    │  │ 인사/시설/     ││
│  │ 서버·데이터 │  │ 커뮤니케이션/  ││
│  │ ·네트워크   │  │ 공급망 등      ││
│  └─────────────┘  └────────────────┘│
└──────────────────────────────────────┘
```

- **BCP**: 회사 전체가 어떻게 계속 굴러가나 (사람/시설/IT/공급망/고객)
- **DRP**: 그중 IT 시스템을 어떻게 복구하나 (BCP의 **하위 구성요소**)

### Incident Response vs DRP vs BCP

| 계획 | 시점 | 범위 | 목적 |
|---|---|---|---|
| **Incident Response** | 분/시간 | 보안 사고, 즉시 대응 | 피해 차단, 인명 안전 |
| **DRP** | 시간/일 | IT 시스템 | 시스템/데이터 복구 |
| **BCP** | 일/주 | 비즈니스 전체 | 운영 지속/재개 |

### 수립(plan/develop) 순서 vs 발동(activate) 순서 (★ 매우 중요)

#### 수립(plan/develop) 순서
```
① BIA            "어떤 비즈니스 기능이 얼마나 중요한가?" → RTO/RPO/MTD 도출
② Risk Assessment "어떤 위협이 위협하나?"
③ 복구 전략 선택  "Hot/Warm/Cold? 미러링? 거리?"
④ BCP 작성       전체 비즈니스 연속성
⑤ DRP 작성       BCP 하위, IT 복구 세부
⑥ Test           Paper→Walk-through→Tabletop→Functional→Parallel→Full
⑦ Maintenance    정기 갱신, 변경 관리 연동
```

#### 발동(activate) 순서
```
재해 → Incident Response(인명 안전, 피해 차단)
     → 재해 선언(Disaster Declaration)
     → DRP 발동(IT 복구)
     → BCP 발동(비즈니스 운영 재개)
     → Return to Normal
```

**질문 동사 구분**:
- "develop/plan" → BCP 먼저 (DRP는 하위)
- "activate/respond" → DRP 먼저 (IT가 비즈니스 재개의 전제)

### "BCP" 단어의 두 가지 의미
```
넓은 BCP = 전체 5단계 프로세스
좁은 BCP = 3단계 산출물 (계획서 문서)
→ 시험에서 맥락 봐야 함

BCP vs DRP:
  BCP = 비즈니스 전체 연속성
  DRP = IT 시스템 복구 (BCP의 IT 부분)
  → DRP ⊂ BCP, 둘 다 BIA로 시작
```

### BIA 핵심 (★ 시험 단골)

| 항목 | 답 |
|---|---|
| BIA의 PRIMARY 목적 | 복구 전략 정의를 위한 기반 제공 |
| BIA의 NEXT 단계 | Recovery Strategy (전략) |
| BIA에서 FIRST 식별 | **핵심 비즈니스 프로세스** |
| BIA 정보 출처 BEST | **Business Process Owner** (업무 직접 담당자가 영향도 가장 잘 앎. ❌ IT 경영진/Senior 경영진/외부 전문가) |
| BIA가 결정하는 우선순위 기준 | **조직 생존(survival)** ← 재무 가치 X |
| BIA를 리스크 평가와 구별하는 것 | **허용 다운타임 결정** (시간) |
| BCP 핵심 이해관계자 | **Process Owner** (BCP 개발에 가장 중요. ❌ Application Owner/이사회/IT 경영진) |

### BIA 내부 순서
```
1. 핵심 비즈니스 프로세스 식별 ← FIRST
2. 영향도 분석
3. 위협/리스크 식별
4. 필요 자원 식별
5. RTO/RPO 도출

→ "핵심 프로세스 식별"부터 (모든 분석의 기준점)
```

### "criticality / priority / importance" 키워드
```
"중요도/우선순위" 결정 → 항상 BIA
  → 시스템 중요도 → BIA
  → 복구 우선순위 → BIA
  → IT 자산 우선순위 → BIA

함정:
  ❌ 프로그래머 인터뷰
  ❌ 갭 분석
  ❌ 감사 보고서
  ❌ RTO 단독 (RTO ⊂ BIA, BIA가 더 포괄적)
  ✅ BIA
```

### 우선순위 기준: 생존 vs 재무
```
재해 복구 우선순위 = "조직 생존(survival)" 기준
  ❌ 재무 가치 (financial value)
  ❌ 장기 전략 (business strategy)
  ❌ 시스템 수 (양적)

재무 가치 ≠ 긴급도

예시 (은행):
  대출 이자 입금: 매출 크지만 며칠 늦어도 OK
  결제 시스템: 매출 직접 X지만 멈추면 즉시 평판 손상
  → 결제가 더 critical

CISA 함정 단어: "financial", "strategic" 보이면 의심
```

### BIA vs Risk Assessment
```
공통:
  - 자산 목록
  - 위협 목록
  - 취약점 식별

BIA만 하는 것:
  ✅ 허용 다운타임 결정 ★
  ✅ RTO/RPO/MTO 도출
  ✅ "시간/연속성" 관련

→ BIA = "시간"의 학문
→ Risk Assessment = "위협"의 학문
```

<!-- 정보 출처: Business Process Owner → "BIA 핵심" 테이블에 통합됨 -->

### DRP 검토 GREATEST 결함 = BIA 결과 미사용
```
DRP가 BIA 결과를 안 쓰면:
  → 잘못된 우선순위
  → 핵심 자산 못 살림
  → 재해 시 회사 망함
  → DRP 자체가 무용지물

다른 결함과 비교:
  ❌ 테스트 미수행 (계획은 OK일 수도)
  ❌ Hot Site 미지정 (비용 고려)
  ❌ PM 퇴사 (계획만 좋으면 영향 적음)
  ✅ BIA 결과 미사용 (근본 결함) ★

패턴 1 (근본이 정답)
```

### 여행 비유
```
1. BIA   = 어디 가야 하지? (부산)
2. 전략  = 어떻게 갈까? (KTX vs 비행기)
3. BCP   = 9시 출발 1시 도착 호텔 체크인...
4. 테스트 = 짐 싸고 역까지 리허설
5. 교육  = 가족한테 일정 안내
```

### 외워둘 한 줄
```
영향 → 방향 → 계획 → 검증 → 실행
BIA   전략   BCP    테스트   교육

전략 없이 계획 못 만듦, 계획 없이 테스트 못 함
```

> RTO/RPO/MTO/SDO 지표 자체는 [D4-3](#rto--rpo--mto--sdo--aiw) 참고.

### 사이트(시간 축) vs 미러링(데이터 축) (★)

```
사이트(Hot/Warm/Cold) 선택  → 시간 문제 → RTO/다운타임이 결정
복제 방식(Mirror/Backup)    → 데이터 문제 → RPO가 결정
```

| 질문 키워드 | 정답 카테고리 |
|---|---|
| downtime, recovery time, 복구 속도 | **사이트 종류** |
| data loss, 데이터 보호, 실시간 | **미러링/복제** |

**축 혼동 함정**: "다운타임 비용은 RPO에 따라..." 같은 보기는 두 축을 섞은 오답.

### 다운타임 비용 vs 복구 비용 (DRP 비용 곡선)

```
비용
 ↑
 │\        ╱   ← 다운타임 비용 (시간↑ → 비용↑) 우상향
 │ \      ╱
 │  \    ╱
 │   \  ╱     ← 교차점 = 최적 RTO
 │    \╱
 │    ╱\
 │   ╱  \
 │  ╱    \    ← 복구 비용 (시간↑ → 비용↓) 우하향
 │ ╱      \
 └──────────────→ 시간
```

- **다운타임 비용**: 매출 손실/유휴 인력/급여 → 시간 누적 증가
- **복구 비용**: 빨리 복구할수록 비싼 솔루션 → 시간 여유 있으면 저렴
- **DRP 본질**: 두 곡선의 교차점(최적 RTO) 찾기
- **총비용 = Downtime + Recovery**. U자형 곡선 최저점 = 최적 RTO.
- **RTO 길수록 Downtime 비용만 증가**. 복구/재개 비용은 오히려 감소.
  - 직관 함정: "오래 걸리면 복구비도 더 들 것" → 틀림
  - 현실: 여유있게 복구 = 싸게 복구. 멈춰있는 손실이 누적될 뿐.

**오답 패턴**:
- "복구 비용은 시간과 무관" → 정반대
- "복구 비용은 통제 불가" → DRP 자체를 부정
- "다운타임 비용은 RPO와 관련" → 축 혼동

### 통신 연속성(Telecom Continuity) 4종

| 용어 | 핵심 키워드 | 정의 |
|---|---|---|
| **Alternative routing** | 다른 **매체/네트워크** | 구리↔광, A통신사↔B통신사 — 매체 변경 |
| **Diverse routing** | **split/duplicate cable** | 같은 종류 케이블 두 경로 (같은 도관이면 한계) |
| **Long-haul diversity** | **장거리 캐리어** | 여러 장거리 통신사 패킷 스위칭 다중화 |
| **Last-mile protection** | **가입자 마지막 구간** | T-1, 마이크로웨이브, 동축 조합 |

**문제 키워드 → 정답 직행**:
- "split-cable / duplicate-cable" → **Diverse**
- "different medium / copper or fiber" → **Alternative**
- "long-distance carrier" → **Long-haul**
- "local loop / 가입자" → **Last-mile**

**암기**: **D**iverse = **D**uplicate cable / **A**lternative = **A**lternate medium

### 클라우드 DR 책임 (감사인 관점)

> **"계약서에 없으면 벤더는 DR 의무 없다"**

경영진이 "벤더가 알아서 한다"고 하면 감사인의 NEXT step:

```
① 계약서(SLA) 검토 ★ ← 항상 출발점
   - DR 서비스 명시 여부
   - RTO/RPO 정의 여부
② 그 다음에야: 독립 감사보고서(SSAE 18 등) 검토
③ 그 다음에야: 벤더 DRP 사본 요청
④ 그 다음에야: 벤더 감사 계획
```

**핵심**: (2)(3)(4)는 모두 (1)(계약상 책임)이 확인된 후에야 의미가 있음.

### BCP 운영 관련 패턴

```
하드웨어 교체 후 BCM FIRST → 자산 인벤토리 업데이트
  → 모든 BCP 활동의 기반 데이터
  → 호환성/워크스루/검토는 그 다음

리스크 평가 후 → BCP 검토/평가
  → 새 리스크 반영 확인
  → 검토 후 시뮬레이션/교육

BCP 검토 MAJOR 결함 → 테스트 결과 미문서화
  → 효과성 검증 불가
  → 개선 사이클 끊김 (근본 결함)
  → 연락처 미업데이트 < 테스트 결과 미문서화

위기 선언 시점 미정의 → MAJOR = 대응/복구 지연
  → 기준 없음 → 망설임 → 늦음
  → 너무 일찍 시작(A)보다 너무 늦음(B)이 치명적

다국적 + 무중단 → 직원 교육
  → 통신/리더 부재 가능
  → 사람이 알아야 어디서든 작동
  → 문서/리더십 < 교육

BCP를 IT 프로젝트에 통합 → 포괄적 요구사항
  → 처음부터 가용성/복구/백업 반영
  → 사후 추가보다 효율적
  → 새 시스템 = BCP 요구사항(RTO/RPO)부터 정해야 인프라 결정

알림 시스템이 인프라 피해에 취약 → 이중화 (Redundancy)
  → "중복" 한글 번역 함정 (긍정적 의미)
```

<!-- BCP 효과성 평가 = 테스트 결과 → "BCP의 PRIMARY 목적 (관점별 답이 다름)" 테이블 참고 -->

### BCP 보장 vs BCP 효과성 평가 (헷갈림 주의)

```
"보장(ensure)/작동" → 직원 교육
  → 사람이 알아야 작동

"평가(assess)/효과성" → 테스트 결과
  → 결과로만 측정

같은 BCP, 동사가 다르면 답이 다름
```

<!-- BCP 핵심 이해관계자 = Process Owner → "BIA 핵심" 및 "정보 출처: Business Process Owner" 참고 -->

### Software Escrow (제3자 SW 핵심 통제)

```
Software Escrow = 소스 코드 위탁 보관
  → 제3자 기관에 소스 코드 봉인 보관
  → 벤더 도산 시 → 고객이 코드 받음
  → 자체 유지/이관 가능

"Critical 제3자 SW" → 에스크로 계약이 MOST 중요
  → 벤더 도산 = 시스템 영영 사용 불가
  → 가장 큰 리스크

다른 결함과 비교:
  ❌ 이식성 절차 (운영 어려움)
  ❌ 운영 문서 (운영 어려움)
  ❌ 대체 제공자 목록 (어려움)
  ✅ 에스크로 (시스템 자체 보장) ★

비유: 빌딩 임대인 도산 시 우선매수권 계약
```

### 모든 거래 + 재해 대응 = 실시간 오프사이트 전송

```
"availability of all transactions in disaster" 
  → 모든 거래 (RPO 0) + 재해 권역 밖 (오프사이트)
  → 실시간 + 오프사이트가 유일한 답

선택지 매칭:
  ❌ 매시간/매일 백업 (RPO > 0)
  ❌ 다중 스토리지 (같은 사이트)
  ✅ 실시간 오프사이트 전송

원칙: 주기적 = 백업, 실시간 = 복제(가용성)
```

### BCP 테스트 종류 (★ SDLC 테스트와 다름)

| 종류 | 특징 | 키워드 |
|---|---|---|
| **Desk Check / Paper** | 개인이 문서 검토 (수동) | "혼자 검토" |
| **Walk-through** | (1) 문서 현행화 (2) 계획 간(BCP-IR) 정합성 검증 | "문서 점검/교차 확인" |
| **Tabletop** | 팀 모여 시나리오 토론, 의사결정 연습 | "조정/소통 연습" ★ |
| **Simulation** | 모의 재해 시뮬레이션 | "모의 시나리오" |
| **Functional** | 인력 동원, 행정/조직 기능 실제 검증 | "기능 동원" |
| **Parallel** | 대체 사이트 실제 작동 (운영 영향 X) | "병렬 운영" |
| **Full Interruption / Full-scale** | 실제 운영 중단 | "실제 중단" (가장 위험) |

```
테스트 사다리 (점프 금지):
  Tabletop → Functional → Parallel → Full Interruption
  → 한 단계씩, 이미 검증된 영역 재검증 X
  → "더 포괄적 = 정답" 아님 (CISA는 최대 X, 최적 O)
```

### 키워드별 매칭

```
"개인 문서 검토" → Desk Check
"crisis team coordination" → Tabletop ★
"기능 동원" → Functional
"전체 시뮬레이션" → Full-scale
"실제 중단" → Full Interruption
```

### Tabletop vs Desk Check

```
Desk Check = 혼자 책상에서 문서 검토 (수동적)
Tabletop = 팀이 회의실에 모여 토론 (능동적)
  → 시나리오 기반
  → 의사결정/조정 연습
  → 기술 검증 X
```

### 오프사이트 시설 테스트 MAIN purpose = 호환성(Compatibility) 검증

```
메인 사이트는 OS/HW/앱이 계속 바뀌는데 DR 사이트 그대로면 drift 발생
  → 재해 시 "복원했는데 안 돌아감"
  → 테스트가 이걸 잡는 유일한 방법

오답 함정: 데이터 무결성 보호(X), 문서 최신화(X), 상세 계획 제거(X)

"절차가 요구사항 충족" BEST indicator = Tabletop exercise ★
  문서/승인 = "있다"의 영역 (약)
  Tabletop 이상 = "작동한다"의 영역 (강)
```

### BCP의 PRIMARY 목적 (관점별 답이 다름 ★)

| 질문 | 답 | 이유 |
|---|---|---|
| "BCP/DRP의 PRIMARY 목적" | **인명 보호** | 생명 > 자산 (절대 1순위) |
| "BCP 프로세스의 PRIMARY 목적" | **리스크 관리 + 복구** | 현실적 목표 |
| "BIA의 PRIMARY 목적" | **복구 전략 기반 제공** | 전략 단계로 연결 |
| "BCP 효과성 평가 BEST" | **테스트 결과** | 결과로 측정 |
| "BCP 핵심 이해관계자" | **Process Owner** | 비즈니스 결정 |

```
BCP 우선순위: 인명 보호 ★ > 자산 > 운영 연속성 > 손실 최소화
→ 시스템/데이터보다 사람이 먼저 (개발자 본능과 반대)
→ 재해 발생 시 구체적 행동 순서는 "재해 발생 순간 행동 우선순위" 참고
```

### "보장(assurance)" 함정 키워드

```
"BCP는 운영 지속을 보장" 본능 → 함정

현실:
  BCP도 100% 지속 보장 못 함
  → "보장(assurance)"은 과장
  → "관리(manage)"가 현실적 목표

CISA 함정 단어:
  ❌ assurance, ensure, guarantee, 100%, 완벽, 절대
  ✅ manage, minimize, reduce, 완화, 최소화

BCP = 리스크 관리 (현실)
    ≠ 100% 지속 보장 (이상)
```

### 복잡한 조직의 여러 BCP → 일관성(Consistency)

```
복잡한 조직 = BCP 여러 개 가능 (IT/운영/인사/커뮤니케이션)

핵심: 서로 일관성(consistency)만 있으면 OK
  ✅ 독립적이어도 OK
  ✅ 통합 안 해도 OK
  ❌ 모순만 없어야 함

함정:
  ❌ 단일 계획 통합 (필수 X)
  ❌ 서로 의존 (독립 가능)
  ❌ 실행 순서 정의 (재해 성격에 따라 달라짐)

원칙: 통합 ≠ 일관성. 여러 개라도 모순만 없으면 OK
```

### BCP 테스트 vs SDLC 테스트 (헷갈림 주의)

```
SDLC 테스트 (Domain3 파일 참고):
  Unit, Integration, System, UAT, Stress, Volume, Load
  → 시스템 개발 검증

BCP 테스트 (D4):
  Paper, Tabletop, Simulation, Functional, Parallel, Full
  → 재해 대응 검증

같은 "테스트"지만 영역 다름
함정 선택지: BCP 문제에 Unit/System Test → 오답
```

### BCP MOST concern 우선순위 = 선행조건 우선 원칙 (★)

```
체인: [선언 권한] → [발동] → [절차 문서] → [분류] → [복구]
  → 앞쪽이 끊기면 뒤쪽은 존재 의미 상실

예: "발동 권한자 미지정" vs "세부절차 미흡"
  → 권한자 미지정이 MORE severe
  → 절차 잘 적혀 있어도 누가 누를지 모르면 0점

자문: "이게 없으면 뒤가 의미를 잃는가?"
  → YES면 그것이 MOST concern
  → 패턴 1 (근본이 정답)의 BCP 버전
```

### BCP 발동 기준 = Duration (원인 X)

```
BCP는 "원인/유형/확률"로 발동 X
  → 오직 중단 "지속 시간(duration)"으로 발동
  → MTO 임박 시 자동 발동

개발자 본능 함정:
  ❌ "왜 멈췄는지 먼저 파악" (원인)
  ❌ "어떤 재해인지 분류"
  ✅ "얼마나 오래 멈췄는가" (시간)

이유: 원인 파악은 시간 잡아먹음 → MTO 초과 위험
BCP는 "원인 불문하고 시간 기반"으로 설계됨
```

### BCP 발동 시점 미정의 = MAJOR 결함
(위 "BCP 운영 관련 패턴" 중 "위기 선언 시점 미정의"와 동일 원칙)

### 사이트 유형 함정: Mirrored / Dial-up

```
Mirrored/Duplicate Site = 실시간 복제, 즉시 전환
  → Hot보다 더 빠름 (Hot = 수 시간)
  → 구성: 시설+전체 장비+실시간 동기 데이터

Dial-up Site = ❌ 사이트 종류 아님 (함정 선택지)
  → 전화선 백업 회선 의미
  → 사이트 질문에 보이면 즉시 탈락

→ 사이트 구성 요소 상세 비교: "DR 사이트 등급표 (재정리)" 참고
```

### 테스트 PRIMARY 목적 = 한계 식별

```
Test      = 결함/한계 찾기 (measurement)
Training  = 사람 가르치기 (enablement)
→ 별개 활동, 섞지 말 것

BIA 5단계 재확인:
  BIA → Strategy → BCP → Test → Training

Test의 PRIMARY 목적을 물으면:
  ✅ "한계(limitation)/결함 식별"
  ❌ "직원 숙달"
  ❌ "경영진 인식"
```

### BCP "효과적 구현/계획" 단계별 MOST important (★ 단계 매칭)

| 단계 | MOST important | 비고 |
|---|---|---|
| 개발(Development) | 현업 부서(Business unit) 참여 | Process Owner |
| 승인(Approval) | 경영진 승인 | |
| 구현(Implementation) | 인력에 전달(communicate) | 교육/공지 |
| 유지(Maintenance) | Walk-through (현행화) | |
| 테스트(Testing) | 한계 식별 | |

```
함정: "BCP가 개발된 후(after being developed)" 조건이면
  → 승인(B)은 이미 끝난 단계 → 탈락
  → 그 다음 단계(구현/전달) 가 답

단계 조건을 읽고 "지금 어디쯤인지" 파악 먼저
```

### 이중화 위치 원칙: 물리적 분리

```
진짜 이중화 = 물리적으로 다른 위치
같은 건물 이중화 = 단일 장애점 = 함정 (화재/침수 공동 피해)

금융/은행에서 Reciprocal Agreement = 거의 항상 오답
  → 기밀성/경쟁/규제 이슈
  → D4-3의 "다지역 사무소 + 예산 제약" 예외 케이스 외엔 오답

대상 미스매치 함정:
  "프로세서 이중화"를 물었는데 → 회선 답 → 탈락
  질문 대상(서버/회선/전원/시설) 에 맞는 이중화 고르기
```

### 백업/대체 방식 업종별 매칭

```
항공 예약        → Shadow file processing (실시간 동시 처리)
은행/금융 배치   → Electronic vaulting (배치 전송)
디스크 보호      → Mirroring (같은 서버, BCP 답 아님!)
사이트 대체      → Hot / Warm / Cold

주의: Mirroring은 디스크 장애 대비이지 재해 복구 BCP 답 아님
     → BCP 질문에 Mirroring 보이면 의심
```

### BCP 구성 요소: 정보보안 수준 명시 필수

```
재해 복구 중 = 평상시 통제(SoD 등) 무너짐
  → 임시 권한 상승, 긴급 우회
  → 기밀성/무결성 위협 급증

따라서 BCP에 사전에 "복구 중 적용할 보안 수준" 명시해야 함
  → 질문이 "기밀성이 빠졌다"면 답은 "보안 수준 명시"
  → "결함 ↔ 해결책 1:1 매칭" 원칙

감사인 시각: BCP 검토 시 보안 조항 유무 확인
```

### WAN 연속성 = Alternative Routing

```
대상별 이중화 수단 매칭:
  WAN/회선      → Alternative Routing (다이버시티)
  서버          → Cluster / Failover
  데이터        → Replication / Backup
  전력          → UPS → Generator
  시설          → Hot / Warm / Cold Site

"WAN 연속성 BEST" → Alternative Routing
→ 엉뚱하게 Hot Site 고르면 대상 미스매치
```

### IR vs BC 계층 관계

```
계층: BC (상위)  ⊃  IR (하위)
  → IR이 BC를 지원
  → 반대(BC가 IR을 지원) 아님

두 계획 정합성 검증 = Walk-through
  → 시나리오 + 양쪽 인력 모여 문서 교차 확인

구분:
  워킹그룹(working group)    = 말로 논의 (약함)
  Walk-through               = 문서 단계별 검증 (실체 있음)
  → 이름 비슷, 용도 다름
```

### DRP 목적 = 복구 시간 ↓ + 복구 비용 ↓

```
DRP의 목적:
  ✅ 재해 시 복구 시간 단축
  ✅ 재해 시 복구 비용 절감

함정:
  ❌ "사전 준비 비용 절감" (오히려 늘어남)
  → 사전 투자 ↑ → 재해 시 복구 시간/비용 ↓

혼동 주의: 사전 준비 비용 ≠ 복구 비용
```

### Risk Assessment vs Gap Analysis 사용 시점

```
Risk Assessment (탐색)
  질문: "뭐가 위험한가?"
  시점: 초기 / 주기적
  특징: 맨땅에서 시작 가능, 비즈니스 이해 도구
  BCP 연결: BIA 전 단계 — 비즈니스 맥락 파악

Gap Analysis (점검)
  질문: "뭐가 빠졌나?"
  시점: 기준(프레임워크/인증) 있을 때
  특징: 기준 필요, 컴플라이언스 용도

순서: Risk Assessment 먼저 → Gap Analysis 나중
  → 기준이 뭔지도 모르는데 Gap 못 잼

BCP 개발 초기 "비즈니스 이해" 키워드
  → Risk Assessment 또는 BIA
  → Gap Analysis 아님
```

### "PARTIAL assurance" 질문 방향 반전 (★)

```
"테스트가 PARTIAL 보장만 제공한 것은?" 유형
  → 방향 반대로 읽기
  → 테스트 범위 밖이 큰 것 = 정답
  → 테스트가 직접 측정한 것 = 완전 보장 = 오답

예: "4시간 IT 기술 테스트"가 부분만 보장하는 것은?
  ❌ 서버 복구 시간 (직접 측정함)
  ❌ 데이터 복원 (직접 측정함)
  ✅ 전체 업무 워크플로우 (테스트 범위 밖)

원칙: "partial/limited" 키워드 = 범위 밖 찾기
```

### 답 바꾸기 절대 규칙 (메타 전략)

```
첫 직감 + 불안만 있음        → 그대로 둬라
첫 직감 + 새 결정적 근거 발견 → 바꿔라
"더 포괄적/완전해 보여서"    → 함정, 바꾸지 마라

원칙:
  CISA는 "최대(maximum)" 아니라 "최적(optimal)"
  → 더 큰 것이 항상 정답 아님
  → 문제 조건에 맞는 것이 정답
```

### DR 테스트 비용 효율 (actual resources 조건)

```
Paper → Walk-through → Preparedness → Full operational
(문서)   (걸어보기)     (부분 실제)    (전체 실제)

actual resources 사용 여부:
  Paper/Walk-through = ❌ 문서/토론만
  Preparedness 이상  = ✅ 실제 자원 투입

"Using actual resources + MOST cost-effective" 조합
  → Paper 탈락 (실제 자원 아님)
  → Full 탈락 (너무 비쌈)
  → Preparedness (부분 실제, 균형점) ★ 정답
```

**교훈**: 조건 2개 이상이면 AND로 읽기. 한쪽 극단 답은 함정.

<!-- DR 비용 trade-off → "다운타임 비용 vs 복구 비용 (DRP 비용 곡선)" ASCII 그래프 참고 -->

### RPO vs RTO 독립 매칭 (★★ 단골 함정)

```
RPO → 복제 방식 결정 (데이터축)
  RPO = 0      → Synchronous 필수
  RPO > 0      → Asynchronous 가능

RTO → 사이트 등급 결정 (시간축)
  RTO = 0      → Mirrored
  RTO 수시간   → Hot
  RTO 1~3일    → Warm
  RTO 1주+     → Cold
```

**두 축은 독립적**. "RPO=0이면 Hot이어야지"는 축 섞기 = 개발자식 사고.

**단골 정답 조합**: **RPO=0 + RTO 여유(48~72h) → Sync 복제 + Warm site**
- Sync + Hot은 과잉 = 오답 (요구 초과 = 낭비 = CISA 오답)
- 복제는 조이고(Sync), 사이트는 푼다(Warm)

### 백업 간격 공식

```
백업 간격 ≤ RPO
  RPO 1h → 백업 최소 1시간마다
  RPO 0  → 실시간(Sync) 복제
```

"백업" 단어 나오면 무조건 **데이터축 → RPO**. RTO/MAO/SLO는 자동 탈락.

### DR 사이트 등급표 (재정리)

| 사이트 | 복구 시간 | 구성 | 용도 |
|---|---|---|---|
| Mirrored | 0초 | 실시간 동기화, 운영 중 | 무중단 |
| Hot | 수시간~24h | HW+SW+데이터 최신 | RTO 짧음 |
| Warm | 1~3일 | HW+일부 SW, 데이터 복원 필요 | RTO 중간 |
| Cold | 1~2주+ | 전기/공조/공간만 | RTO 여유 |

- "electrical wiring, air conditioning, flooring" 문구 → Cold 고정
- Mirrored ≠ Hot (운영 중 vs 대기 중)
- **RTO에 딱 맞는 최저 등급 = 정답** (업그레이드는 오버엔지니어링)

### Noncritical 시스템 복구 사이트

```
"noncritical" 키워드 → Cold site 고정
  이유: 비핵심 = RTO 여유 = 제일 싼 등급으로 충분
  Hot 선택 = 과잉 = CISA 오답

중요도별 자동 매칭:
  Critical + RTO 0    → Mirrored
  Critical + RTO 짧음 → Hot
  중간 중요도         → Warm
  Noncritical         → Cold ★
  이동 필요           → Mobile
```

### 고가용성(HA) 네트워크의 SPOF 함정

```
HA 감사 시 MOST concern = "단일 장애점" 찾기

핵심: "Clustered in one site / same building / same location"
  → 서버 여러 대여도 같은 장소면 SPOF
  → 화재/지진/정전 한 방에 전멸
  → 이중화의 의미 상실

HA 3종 세트 (모두 필요):
  · Clustering (부하 분산/HA)
  · Geographic dispersion (지리적 분산)
  · Diverse routing (다중 경로)
```

**반사 매칭**: "one site/same building" 단어 = **그게 정답(우려 대상)**.
**"Clustered" 단어는 좋아 보이지만 위치 조건에 따라 의미 반전.**

### 단일 장애점(SPOF) 함정 보호 유형 비교

> **같은 건물 내 이중화 = 이중화처럼 보이지만 SPOF 못 풂**

| 보호 유형 | 장비 고장 | 정전 | 통신 장애 | 광역 재해 |
|---|---|---|---|---|
| 데이터 백업만 | X | X | X | X |
| **사내** 대체 시스템 | O | X | X | X |
| 통신 회선만 이중화 | X | X | O | X |
| **다른 위치** 대체 시스템 | O | O | O | O |

**규칙**: "BEST DRP" 질문에서 **"another site / node / location"** 단어 = 정답 1순위.
**함정**: "Onsite alternate" 보기는 거의 항상 오답 (정전 한 번에 같이 죽음).

**데이터 백업 ≠ 서비스 가용성**: 백업은 데이터 손실 대비, 가용성은 별개.

### DR 성능 문제 RCA 순서

```
DR 사이트 서버 성능 느림 → FIRST는?
  1. 주/DR 구성 정렬 비교 ★ (가장 흔한 원인)
  2. 리소스 사용률
  3. 이벤트 에러 로그
  4. 테스트 계획/DRP 문서

왜 에러 로그가 아닌가:
  · "성능 저하"는 성공하면서 느린 것
  · 에러 로그에는 "느림"이 안 찍힘
  · 구성 차이(스펙/설정/버전)가 가장 흔한 원인
```

**원칙**: FIRST 문제는 **가장 가능성 높은 원인부터**. 희귀 가능성 먼저 뒤지면 오답.

### DRP 감사 PRIMARY = 최신성 유지

```
DRP 감사 시 PRIMARILY 확인:
  → 정기 검토/업데이트 (최신성) ★
  
오래된 DRP = 쓰레기
  · 시스템 바뀜, 사람 바뀜, 절차 바뀜
  · 최신성 없으면 재해 시 무용지물
  · 나머지(테스트/승인/전달)는 전제 조건

함정 보기:
  "6개월마다 테스트"     → 절대 주기 고정 = 오답
  "CEO 승인"             → 특정 인물 고정 = 오답 (CTO도 OK)
  "모든 부서장에 전달"   → BCP 얘기지 DRP 아님
                           (DRP는 IT 기술 문서)
```

### DRP vs BCP 배포 범위

| 구분 | DRP | BCP |
|---|---|---|
| 범위 | IT/시스템 복구 | 비즈니스 전체 |
| 주 독자 | IT/통신 담당자 | 전 부서 |
| 승인 가능자 | CTO/CIO도 OK | 경영진/CEO |
| 배포 | 기술 인력 중심 | 전사 |

### DR 전략 개발 FIRST = 예방 (Resilience)

```
DR 전략 수립 순서:
  1. 예방(Resilience) 평가 ★ FIRST
     "비용 효율적인 내장형 복원력 구현 가능한가?"
     = 이중 경로, 이중 전원, RAID, 다중 통신사
     → 안 터지게 만들기
     
  2. 복구(Recovery) 전략
     · RTO 최적화
     · 복구 비용 최소화
     · 사이트 등급 결정
```

**한글 번역 함정**: "복원력(resilience)"은 **복구가 아니라 예방**.
- 복원**력** / 회복**력** → 예방 (맷집)
- 복**구** / 회**복** → 재해 후

**한글 신호어 (예방 카테고리)**: 내장형, 복원력, 회복탄력성, 이중화, 다중화, 중복성, 다양한 경로, 대체 경로, 다중 통신사

**쳐낼 함정**: "모든 위협 완전 제거" → 절대 표현 = 오답.

### DRP 평상시 비용 = 증가 (보험료 모델)

```
질문 핵심: "ongoing/nondisaster/normal operations" 비용
  → 평상시 비용 얘기

DRP 있음 > DRP 없음 (평상시)
  · DR 사이트 임대/운영비
  · 백업 인프라 비용
  · 정기 테스트 비용
  · 유지보수/전담 인력
  → 모두 예측 가능한 고정/정기 비용

시점 차이 주의:
  단기(평상시):    DRP 있음 > DRP 없음  ← "ongoing" 질문
  장기(재해 포함): DRP 있음 ≪ DRP 없음  ← 재해 손실 질문
```

"예측 불가(unpredictable)" 함정: DR 비용은 오히려 **가장 예측 가능**한 비용.

### BCP 테스트 종류 vs 단계 (Post-test 함정)

```
테스트 "단계" (종류 아님):
  Pre-test  → 준비
  Test 본체 → Paper/Walk-through/Preparedness/Full
  Post-test → 정리 (자원 원복, 데이터 삭제, 보고)

Post-test는 "테스트 종류"가 아님 → 함정 보기
  "test" 단어가 들어가 있지만 실제 테스트 아님
```

**Preparedness test 반사 매칭 (단골 공식)**:
- "actual resources" 키워드
- "cost-effective" 키워드
- "simulates system crash"
- "localized version of full test"
- "gradually obtain evidence"

→ 2개 이상 조합되면 **Preparedness test 확정**.

### 복구 우선순위 = 비즈니스가 결정 (IT 아님)

```
DRP 조기 복구 대상 = 누가 정하는가?
  → 비즈니스 경영진 ★
  
IT vs 비즈니스 역할 분담:
  비즈니스:  WHAT/WHY/우선순위 (의사결정)
  IT/IS:     HOW (구현/운영)

절대 원칙:
  "IT가 단독 결정" = 오답 신호
  "모든 IS 프로세스 복구" = 자원 한정 현실 무시 = 오답
  "재무 우선" = 업종 일반화 오류 = 오답
```

### 단계(Timing) 문제 vs 역할(Role) 문제 구분 (★ 혼동 방지)

| 구분 | 단계 문제 | 역할 문제 |
|---|---|---|
| 질문 단서 | "after developed", "during X" | "who should", "determined by" |
| 축 | 시간/단계 | 주체/결정권 |
| "경영진 승인" 처리 | **지난 단계 = 오답** | 의사결정 주체 = 정답 가능 |
| 예시 정답 | 다음 단계 (전달/구현) | 비즈니스 경영진 |

**같은 "경영진" 단어가 보기에 나와도 정답/오답이 정반대**.

**구분 공식**:
```
Step 1: 시제 단서 있나? ("after", "during", "before")
  YES → 단계 문제 → 지난 단계 탈락, 다음 단계가 정답
  NO  → "누가 결정" 물었나?
        YES → 역할 문제 → 비즈니스/경영진이 정답
```

**BCP 라이프사이클 복습**:
```
1. 개발(Develop)    → 현업 부서 참여
2. 승인(Approve)    → 경영진 승인
3. 구현(Implement)  → 인력에 전달 ★ "after developed" 단서면 여기
4. 유지(Maintain)   → Walk-through
5. 테스트(Test)     → 한계(limitations) 식별
```

### 한글 번역 CISA 대응 실전 기술

```
영어 용어 몰라도 풀 수 있는 소거법 3단계:

1. 절대 표현 쳐내기
   "모든/완전히/전부/항상/절대/never/all/completely"
   → 해당 보기 1차 탈락

2. 동급 보기 쳐내기
   비슷한 성격의 보기 2개 = 둘 다 오답
   (CISA 정답은 하나여야 하므로)

3. 남은 보기 중 "예방성/비즈니스 우선" 단어 매칭
   → FIRST 문제면 예방, 주체 문제면 비즈니스
```

**한글 용어 속지 마라**:
| 한글 번역 | 진짜 의미 |
|---|---|
| 내장형 복원력 | 예방 (재해 전) |
| 회복탄력성 | 예방 |
| 이중화/다중화/중복성 | 예방 |
| 복구/회복 | 사후 처리 |
| 탄력성(elasticity) | 용량 조절 (DR 아님) |

### 의사결정 주체 계층 (★ 헷갈림 방지 종합판)

```
이사회 (Board)           → 거버넌스 감독, 최종 책임
경영진 (Executive)       → 전략/예산/최종 승인
Steering committee       → 요구사항 정의 (RTO/RPO)
비즈니스 관리자          → WHAT/WHY (우선순위, 중요도)
IT 관리자                → HOW (자원/가용성/구현)
```

**키워드별 정답 주체 매칭표**:

| 질문 키워드 | 정답 | 이유 |
|---|---|---|
| priority, critical, importance | 비즈니스 관리자 | WHAT/WHY |
| what to recover, recovery order | 비즈니스 관리자 | WHAT/WHY |
| RTO/RPO requirements | Steering committee | 요구사항 정의 |
| **system resources, availability** | **IT management** | **HOW** |
| infrastructure, technical implementation | IT management | HOW |
| budget, strategy, final approval | Executive/Board | 거버넌스 |
| BIA, BCP 개발 참여 | 현업 부서 | 비즈니스 이해 |
| BCP 구현(after developed) | 인력에 전달 | 단계 문제 |

**핵심 함정 방지**:
- "IT는 항상 오답" = 잘못된 일반화
  - WHAT/WHY 질문에서는 오답
  - **HOW 질문에서는 IT가 정답** ★
- "경영진은 항상 정답" = 잘못된 일반화
  - 기술 세부사항은 IT 영역

**실전 3단계**:
```
1. 시제 단서 확인 (after/during/before)
   YES → 단계 문제 → 지난 단계 탈락
2. WHAT/WHY vs HOW 구분
   WHAT/WHY → 비즈니스
   HOW      → IT management
3. 특수 키워드 매칭
   "resources/availability" → IT
   "priority/critical"      → 비즈니스
   "RTO/RPO requirements"   → Steering committee
```

### DR 감사 MOST important = 데이터 백업 (★★ 단골)

```
DR 감사/실행에서 가장 중요한 요소 = 데이터

의존 관계:
  데이터 백업 (★ 전제 조건)
       ↓
  Hot site ── 데이터 없으면 빈 건물
       ↓
  매뉴얼 ──── 시스템 없으면 읽을거리
       ↓
  보험 ────── 업무 재개 못 함
```

**반복 출제 패턴** (전부 "데이터"가 정답):

| 질문 | 정답 |
|---|---|
| DR 성공 보장 MOST likely | 데이터 **복원** 완료 |
| DR 감사 MOST important | 데이터 **백업** (적시+오프사이트) |
| DRP 실행 MOST critical | **오프사이트** 백업 데이터 저장 |

**"데이터" 관련 보기 나오면 DR 영역에서 거의 무조건 정답.**

### 백업 유효성 3요소

```
백업이 "유효"하려면:
  1. 적시성(Timely)      → RPO 이내 주기
  2. 오프사이트(Offsite) → 원본과 지리적 분리 (SPOF 방지)
  3. 복원 가능성         → 실제 복원 테스트 통과 (최소 연 1회)

하나라도 빠지면 백업 무효.
```

**"offsite" 키워드 = DR 정답 강력 신호**.
**"있다"가 아닌 "쓸 수 있다"가 중요** -- 복원 테스트로만 증명.

### 함정 구분: DR 감사 PRIMARY vs MOST important

```
"DRP 감사 PRIMARILY 확인" 
  → DRP 문서 자체의 최신성 (정기 검토/업데이트)

"DR 감사 MOST important"
  → 데이터 백업 (오프사이트)

질문 범위가 다름:
  PRIMARILY = DRP 문서 감사 초점
  MOST important = DR 전체 감사 초점
```

헷갈리지 마. **"문서 감사"인지 "실행 감사"인지 구분**.

### BCP ⊃ DRP 포함 관계 + 실무적 Gap

```
논리적 관계:
  BCP (전체 연속성)
   └── DRP (IT 복구 부분)
  → DRP ⊂ BCP

실무 현실:
  · 작성 주체 분리 (비즈니스팀 vs IT팀)
  · 업데이트 비동기
  · 각자 암묵적 가정 존재
  → 포함 관계에도 불구 Gap 발생
```

**통합 테스트의 존재 이유 = Gap 발견**:

| Gap 종류 | 예시 |
|---|---|
| 용량 gap | BCP 재택 1000명 vs DRP VPN 100명 |
| 범위 gap | BCP가 쓰는 외부 CRM이 DRP에 없음 |
| 시간 gap | BCP 요구 1시간 vs DRP 실제 4시간 |

**"Noncritical 시스템"이 특히 gap 다발 영역**:
- DRP는 보통 critical만 다룸
- BCP는 noncritical도 전제 가능
- → noncritical 통합 테스트가 특히 중요

**오답 함정**:
- "BIA 정렬" → 계획 수립 단계 활동이지 테스트 이유 아님
- "인프라팀이 SME 도움" → 인프라 복구는 순수 기술 작업
- "경영진 교육" → 브리핑으로 충분, 테스트는 과잉

### BCP/DR "MOST important" 4축 프레임워크 (★★ 종합)

**CISA BCP/DR 문제는 4개 축 중 하나**. 축 판단이 정답의 절반.

```
축 1: 단계(Timing) — "언제"
  단서: "after/during/before" 시제
  정답: 해당 단계의 활동

축 2: 역할(Role) — "누가"
  단서: "who/determined by/responsibility"
  정답: WHAT/WHY=비즈니스, HOW=IT

축 3: 문서 품질 — "문서 감사"
  단서: "reviewing the plan/DRP 감사 시"
  정답: 정기 검토/업데이트 (최신성)

축 4: 실행 능력 — "실제로 되나"
  단서: "ensure/successful/structured/effective recovery"
  정답: 데이터 백업 or 정기 테스트
```

**축별 단골 정답 리스트**:

| 축 | 질문 패턴 | 단골 정답 |
|---|---|---|
| 1 단계 | BCP 개발 후 구현 MOST | 인력에 전달 |
| 1 단계 | BCP 유지 MOST | Walk-through |
| 1 단계 | BCP 테스트 MOST | 한계 식별 |
| 1 단계 | BCP 개발 MOST | 현업 부서 참여 |
| 2 역할 | 복구 우선순위 누가 | 비즈니스 경영진 |
| 2 역할 | 시스템 자원 가용성 | IT management |
| 2 역할 | RTO/RPO 요구사항 | Steering committee |
| 3 문서 | DRP 감사 PRIMARILY | 정기 검토/업데이트 |
| 4 실행 | DR 성공 보장 | 데이터 복원 완료 |
| 4 실행 | DR 감사 MOST important | 데이터 백업(오프사이트) |
| 4 실행 | DRP 실행 MOST critical | 오프사이트 백업 저장 |
| 4 실행 | **Structured recovery MOST** | **정기 테스트** ★ |

### CISA 실증주의 원칙 (★ 실행 능력 축의 본질)

```
CISA는 "문서/절차/전달"을 실행 증거로 인정 안 함
항상 "실제 작동" 요구

실행 증거 계급:
  낮음 (준비):
    · 계획 문서 존재
    · 절차 승인
    · 매뉴얼 배포
    · 사용자 전달/교육
    · Paper test / Tabletop test
  
  높음 (증명):
    · 실제 데이터 복원
    · Preparedness test
    · Full operational test
    · 정기 테스트 수행
```

높은 계급이 보기에 있으면 무조건 우선. "준비"는 "증명" 못 이김.

### 혼동 방지: 전달(communicate)의 이중성 ★

**같은 "전달"이 축에 따라 정답/오답 뒤집힘**:

| 문제 | 정답 여부 | 이유 |
|---|---|---|
| BCP 구현 단계 (after developed) MOST | **정답** | 단계 축 -- 구현 단계 활동 |
| Structured recovery MOST important | **오답** | 실행 능력 축 -- 전달 ≠ 능력 |

"이전에 communicate가 정답이었다"고 이번에도 찍으면 함정.

### 혼동 방지: 업데이트 vs 테스트 ★

| 질문 축 | 정답 |
|---|---|
| 축 3 (문서 감사) | **정기 업데이트** -- 문서 최신성 |
| 축 4 (실행 능력) | **정기 테스트** -- 실행 검증 |

```
업데이트: 문서 차원 ("종이 위에서 맞게")
테스트:   실행 차원 ("현장에서 작동 검증")
```

- "structured/effective/ensure" → 실행 차원 → 테스트
- "reviewing the plan/DRP 감사" → 문서 차원 → 업데이트

### 실전 4단계

```
1. 문제 읽고 4축 중 어느 축인지 판단 (3초)
2. 해당 축의 단골 정답 리스트에서 매칭
3. 절대 표현/동급 보기 쳐내기
4. 최종 선택
```

축 판단 실수가 거의 모든 오답의 원인.

### 축 판별 신호어 사전 (★★ 1초 판독)

**축 4 (실행 능력) -- 테스트/데이터가 정답**
```
ensure          보장
successful      성공적
effective       효과적
structured      체계적
work/working    작동
verify/validate 검증/확인
```
→ 이 단어 보이면 즉시 축 4 확정. 테스트 or 데이터 백업/복원 찍기.

**축 3 (문서 품질) -- 업데이트가 정답**
```
reviewing the plan  계획 검토
audit the plan      계획 감사
current / up-to-date 최신
```

**축 2 (역할) -- 주체가 정답**
```
who should, determined by, responsible, approval by
```

**축 1 (단계) -- 해당 단계 활동**
```
after X, during Y, when X is done, at the stage of
```

### 신호어 기반 실전 풀이 순서 (업데이트)

```
1단계: 신호어 스캔 (1초)
   · "ensure/successful/structured/effective" → 축 4
   · "reviewing/current/up-to-date"            → 축 3
   · "after/during/before"                     → 축 1
   · "who/determined by"                       → 축 2

2단계: 해당 축 단골 정답 매칭
3단계: 절대 표현("모든/완전") 쳐내기
4단계: 동급 보기 쳐내기
```

**"보장/체계적/효과적/성공적" 4개 단어는 축 4 최강 신호어**.
한 단어가 4지선다 정답을 거의 결정함.

### 한글 번역 신호어 매핑

| 영어 | 한글 | 축 |
|---|---|---|
| ensure | 보장하다/확실히 | 4 |
| effective | 효과적 | 4 |
| successful | 성공적 | 4 |
| structured | 체계적/구조화된 | 4 |
| working | 작동하는 | 4 |
| reviewing | 검토 | 3 |
| current | 최신의 | 3 |
| adequate | 적절한 (문서) | 3 |

한글 번역에서 뉘앙스가 약해져도 **이 단어가 보이면 축 확정**. 신호어 스캔을 풀이 1단계로 고정.

---

## D4-9. 데이터베이스 관리

### CIA + Accountability 매칭표 (★ 매우 중요)

| 특성 | 의미 | 매칭되는 통제 |
|---|---|---|
| **C**onfidentiality (기밀성) | 허가된 사람만 접근 | 접근 제어, 암호화, 테이블 뷰, 권한 분리 |
| **I**ntegrity (무결성) | 데이터 정확/완전/일관 | 참조 검증, 해시, 체크섬, 제약 조건 |
| **A**vailability (가용성) | 필요할 때 사용 가능 | 가동률, 복구, 이중화, 백업 |
| **A**ccountability (책임 추적) | 누가 뭘 했나 식별 | **로그, 감사 추적, 개인 ID** ★ |

```
문제 키워드 → 매칭되는 통제 카테고리

"Accountability/누가 뭘 했나" → 무조건 로그/감사 추적
"Confidentiality/기밀" → 접근 제어/암호화
"Integrity/무결성" → 참조 검증/해시
"Availability/가용성" → 가동률/복구
```

> Authentication ≠ Accountability 구분 / 4가지 식별 단계는 [D4-2](#authentication--accountability--헷갈림-주의) 참고.

### DB 무결성 통제 (Integrity)
```
GREATEST 통제 = 테이블 링크/참조 검증
  → 외래 키(FK), 고아 레코드, 깨진 관계 탐지
  → 데이터들이 올바르게 연결되어 있는지

오답:
  ❌ 감사 로그 → 추적이지 무결성 검증 아님
  ❌ 쿼리/접근 시간 → 성능 지표
  ❌ Rollback/Rollforward → 트랜잭션 복구 (DB 전체 무결성 X)
```

### Before/After Image와 복구 시작점

| 종류 | 저장 시점 | 복구 후 상태 | 재시작 지점 |
|---|---|---|---|
| **Before Image** | 트랜잭션 직전 | "마지막 거래 안 일어난 셈" | **마지막 거래부터 다시** |
| **After Image** | 트랜잭션 직후 | "마지막 거래까지 일어남" | **다음 거래부터** |

```
Before Image dump 복구 → 시작점: "마지막 트랜잭션 이전"
  이유: 그 트랜잭션이 DB에 반영됐는지 불확실 → 다시 처리

비유:
  Before = 사진 찍기 직전 자세 → 다시 찍어야 함
  After  = 이미 찍은 사진 → 안 찍어도 됨
```

### Checkpoint vs Image (★ 헷갈림 주의)
```
Before/After Image:
  → DB 영역 (DBMS가 자동 기록)
  → DBA 책임
  → DB 백업 복원에 사용

Checkpoint:
  → 애플리케이션 영역 (개발자가 코드에 구현)
  → 배치 작업 재실행에 사용
  → DB 복원과 무관

함정: DB 복원 문제에 "checkpoint" 선택지 → 보통 오답
```

### DB 자동 기록 (DBMS별)
```
Oracle: Redo Log (After), Undo Log (Before)
MySQL: Binary Log, Undo Log
PostgreSQL: WAL (Write-Ahead Log)
SQL Server: Transaction Log

→ 기본 동작은 자동, 보관/백업 정책만 DBA가 설정
```

> 트랜잭션 로그 덤프 백업 전략은 [D4-12](#온라인-시스템-백업--트랜잭션-로그-덤프) 참고.

### DB 하드닝 (Hardening) + 초기화 파라미터
```
가장 중요 = 기본(default) 설정 변경
  - 기본 관리자 계정 (sa, root, admin)
  - 기본 비밀번호 (벤더 문서에 다 공개)
  - 기본 포트 (MySQL 3306, MS SQL 1433)
  - 기본 활성 서비스/샘플 DB

오답:
  ❌ 비정규화 → 성능 관련, 보안 X
  ❌ 저장 프로시저 암호화 → 부분적 보안
  ❌ 포트 변경 → 기본 설정 변경의 일부

패턴 7 (패키지 SW): 벤더 기본 계정/비밀번호 비활성화 필수
```

```
DB 초기화 파라미터 (Initialization Parameters):
  DB 시작 시 적용되는 전역 보안 설정
  - 인증 방식 / 원격 접근
  - 비밀번호 정책 / 암호화
  - 세션/권한 기본값
  - 감사 활성화 / 네트워크 보안

→ DB 보안의 "전체 그림"을 결정
→ 한 줄 잘못 설정하면 보안 구멍 (예: Oracle init.ora, MySQL my.cnf)

이미 클러스터링/기본 계정 제거/감사 로그 다 한 상태에서
"또 뭐 점검?" → 초기화 파라미터 ★

함정:
  ❌ DBA 접근 제한 (실용적이지 않음)
  ❌ 로그 암호화 (로그에 기밀 X)
  ❌ 저장 프로시저 암호화 (덜 중요)
```

> OS Hardening 일반은 Domain5 파일 D5-2 참고.

### 보상 통제 예시 (야간 약식 절차)
```
주간: 표준 절차 / 야간: 약식 절차
  → 야간 통제 약화 → 어떻게 보완?

BEST 보상 통제 = DBA 계정 + 로그 + 다음날 검토

핵심 3요소:
  1. 적절한 권한자 (DBA, 일반 사용자 X)
  2. 활동 자동 기록 (로그)
  3. 사후 검증 (다른 사람이 검토)

→ 사전 통제 약화 → 사후 통제(로그+검토)로 보상

함정:
  ❌ DBA 계정 + 로그 X (사후 추적 불가)
  ❌ 일반 사용자 + 로그 (직무분리 위반)
```

### DB 벤더 변경 = 데이터 무결성 PRIMARY
```
시스템 교체 = 데이터 마이그레이션이 최대 리스크 (패턴 5)

DB 벤더 변경 시 PRIMARY 검토:
  ✅ 데이터 무결성 (완전성, 정확성, 참조 무결성)
  ❌ 전환 타이밍 (새 DB라 중복 X)
  ❌ 사용자 권한 (사용자는 앱을 통해 접근)
  ❌ 정규화 (설계 단계 이슈)

체크 항목:
  - 모든 레코드 이관됐나? (완전성)
  - 데이터 값 정확? (정확성)
  - 테이블 관계 유지? (참조 무결성)
  - 인코딩/타입 변환 오류 없나?
```

### 비정규화 트레이드오프
```
정규화: 무결성 ↑, 성능 ↓
비정규화: 성능 ↑, 무결성 ↓ ★

비정규화의 리스크: 데이터 무결성 손실
  이유: 같은 데이터가 여러 곳 → 한 곳 누락 시 불일치
```

### 세분화(Segmenting) 효과 = Exposure 감소
```
민감 DB 세분화 → 노출(Exposure) 범위 감소
  → 한 조각 뚫려도 전체 X
  → 큰 금고 1개 vs 작은 금고 10개

용어 구분:
  Threat (위협)        = 외부 요인 (안 바뀜)
  Vulnerability (취약점) = 시스템 약점
  Exposure (노출)      = 노출된 정도/양 ← 세분화로 감소
  Sensitivity/Criticality = 데이터 속성 (안 바뀜)
```

### DBA가 로그 삭제 가능 → 중앙 로그 서버
```
원칙: 감시받는 사람이 감시 기록을 못 만지게

DBA가 DB 로그 접근 + 삭제 가능:
  ❌ DBA 권한 박탈 (운영 영향)
  ❌ 사전 승인 (사후 추적 X)
  ❌ 자기 매체 백업 (백업 전에 지우면?)
  ✅ 중앙 로그 서버로 전송 (DBA 접근 불가)

특권 계정 + 로그 무결성 = 무조건 별도 시스템
```

### 사기 위험 = 직무분리 위반 찾기
```
"fraud 가능성 높이는 상황" 문제:
  → 누가 데이터를 직접 만질 수 있는가?
  → 본인 이익 가능한가?

사기 직결:
  ✅ 프로그래머가 운영 데이터 변경 (직무분리 위반의 끝판왕)

정상 업무 (사기 X):
  - DBA가 데이터 구조(스키마) 변경
  - 운영자가 배치 일정 변경
  - 관리자가 벤더 패치 적용 (변경 통제 위반이지 사기 X)

데이터 vs 구조 vs 일정:
  데이터 변경 = 실제 값 변경 → 사기 가능 ★
  구조 변경 = 테이블/컬럼 → DBA 정상 업무
  일정 변경 = 배치 시간 → 운영 정상 업무
```

### DBA 특권 / 비정규화 발견 시 = 평가/이유 확인 먼저
```
DBA가 운영 데이터 read/write 권한 발견:
  ❌ 즉시 박탈 권고 → 극단적
  ❌ 흔하다고 수용 → 평가 없음
  ❌ DBA 승인 사용자 권한 검토 → 문제 무관 (DBA는 권한 승인자 X)
  ✅ 보상 통제(compensating control) 평가
     - 활동 로깅, 다른 팀 검토, 사전/사후 승인, 알람 등

DB 비정규화 발견:
  ❌ 즉시 정규화 권고
  ❌ 개념 모델 검토
  ✅ 정당화(justification) 검토
     → 비정규화 = 성능 위해 의도적일 수 있음
     → 이유부터 확인 (치트시트 S7 + 패턴 8)

원칙: "의도적/정당한 이유가 있을 수 있는 것" 발견 시
  → 즉시 권고 ❌ → 이유 확인 ✅
```

### DB 인터페이스 = API
```
Interface(인터페이스) 키워드 → API

A. API  = 범용 인터페이스 (함수/메서드/프로토콜) ★
B. SQL  = 언어 (인터페이스 X)
C. ORM  = 객체↔테이블 매핑 기법
D. JDBC = Java 전용 API (범용 X)

함정:
  "DB = SQL" 본능적으로 끌리지만 SQL은 "언어"이지 인터페이스 아님

비유:
  SQL = 편지 내용
  API = 우체국 (편지 보내는 통로)

패턴 2: 가장 포괄적인 것 (JDBC/ODBC/ADO.NET ⊂ API)
```

---

## D4-10. OLTP / OLAP / DW / ETL

### OLTP vs OLAP/DW (★ 시험 핵심)

| | OLTP | OLAP / DW |
|---|---|---|
| 정식명 | Online Transaction Processing | Online Analytical Processing |
| 목적 | 실시간 거래 처리 | 분석/리포팅 |
| 데이터 | 현재 (최신) | 과거 누적 (이력) |
| 작업 | INSERT/UPDATE/DELETE | SELECT 위주 |
| 사용자 | 변경 가능 | **읽기 전용** |
| **무결성 통제** | 트랜잭션, 제약 조건 | **읽기 전용 제한** ★ |

```
OLTP = 일반 운영 DB (MySQL, Postgres 등)
DW   = 분석 전용으로 따로 만든 DB
```

### ACID 속성 (트랜잭션 4대 원칙)

```
A - Atomicity (원자성)   = 전부 or 전무 → Commit/Rollback ★
C - Consistency (일관성) = 제약 조건 유지
I - Isolation (격리성)   = 동시 트랜잭션 분리 → Concurrency Control
D - Durability (지속성)  = 커밋된 건 영구 저장
```

### ACID 위반 키워드 매칭
```
"부분 실행 / partial / 일부만 처리"        → Atomicity 위반 → Commit/Rollback
"무결성 규칙 / 제약 조건 깨짐"              → Consistency
"동시 접근 / dirty read / simultaneously"  → Isolation → Concurrency Control
"커밋 후 손실 / 영구 보존"                  → Durability
```

### 트랜잭션 중단 시 무결성 = Commit/Rollback
```
"트랜잭션 처리 중 중단" 상황 → Atomicity 보장 필요
  → Commit: 완전히 끝난 것 저장
  → Rollback: 실패한 것 자동 취소
  → "절대 중간 상태 안 남음"

예: 계좌이체 중 멈춤
  A에서 -100만, B에 +100만 직전 멈춤
  → Rollback으로 A 잔액 자동 복원

함정: A "DB integrity checks" (일반 무결성 체크)
  → 트랜잭션 단위 보장 X
```

### 동시성 제어 (Concurrency Control)
```
정의: 여러 트랜잭션이 같은 데이터에 동시 접근 시 무결성 보장
방법: Locking, Timestamp, MVCC

목적 키워드: "two processes attempt to update simultaneously"
  → "simultaneously(동시에)" = Concurrency Control

vs 다른 통제:
  Access Control = 누가 접근 (권한)
  Concurrency Control = 동시에 접근 시 (무결성) ★
  Confidentiality = 노출 방지 (암호화/뷰)
  Quality/Edit = 입력 정확성
```

### Out-of-range 데이터 방지 = 무결성 제약 조건
```
"avoid/prevent" 키워드 → 예방 통제
DB의 예방 = Integrity Constraints

종류:
  - CHECK (값 범위)
  - NOT NULL (필수)
  - PRIMARY KEY (유일성)
  - FOREIGN KEY (참조)
  - UNIQUE

오답:
  ❌ 모든 변경 로그 (탐지)
  ❌ Before/After Image (탐지/복구)
  ❌ Tracing/Tagging (테스트 기법)
```

### 외래 키 = 참조 무결성
```
"Referential Integrity" 키워드 → 무조건 Foreign Key

PK = 한 테이블 내 식별
FK = 테이블 간 관계 ★

외래 키가 강제하는 것:
  - 주문이 있는 고객 삭제 막음
  - 고아 레코드(orphan) 방지
  - 깨진 관계 탐지

함정 선택지:
  ❌ Primary Key (한 테이블 내만)
  ❌ Secondary Key (검색용)
  ❌ Public Key (암호화, DB 무관)
```

### DW 무결성 = 읽기 전용
```
DW는 과거 이력 데이터, 분석용
  → 사용자가 변경할 일 없음
  → 읽기 전용으로 막아버리면 무결성 100% 보장

데이터는 ETL이 자동으로 적재 (사용자는 조회만)
  → "사용자한테 읽기 전용"이라는 의미

함정 선택지:
  ❌ 일간 백업 (가용성)
  ❌ 변경 관리 절차 (시스템 변경, 데이터 X)
  ❌ 데이터 사전 (메타데이터, 기존 데이터 X)
  ✅ 읽기 전용 제한
```

### DW 컬럼/행 레벨 권한 (기밀성)
```
"specific sensitive information" → 컬럼/행 레벨 권한

Column-level: 특정 컬럼 못 보게 (예: salary)
Row-level: 특정 행만 못 보게 (예: 임원 데이터)

구현: View 사용
  CREATE VIEW employee_public AS
    SELECT name, department  -- salary 제외
    FROM employees
    WHERE position != 'executive';  -- 임원 제외

함정:
  ❌ DB 단위 분리 (너무 거침/coarse)
  ❌ 강한 비밀번호 (인증, 데이터 보호 X)
  ❌ 사용자 접근 로깅 (탐지, 보호 X)

같은 DW지만 묻는 것이 다르면 답이 다름:
  Integrity → Read-only
  Confidentiality → Column/Row-level ★
```

### CISA 매칭 (★)
```
"OLTP + 동시성"        → Concurrency Control
"OLTP + 트랜잭션 중단"  → Commit/Rollback (Atomicity)
"OLTP + 무결성"        → 트랜잭션, 제약, FK
"DW + 무결성"          → 읽기 전용 제한 ★
"DW + 가용성"          → 미러링/RAID
"DW + 기밀성"          → 컬럼/행 레벨 권한 (View)
"DW + 성능 (특정 시간)" → 사용자 spool/DB 한도 ★
```

### DW 성능 저하 (특정 시간) = 사용자 한도

```
DW = 사용자 ad-hoc 쿼리
  → 잘못된 쿼리 1개가 자원 독점 → 특정 시간 폭망

User Spool/DB Limit:
  사용자별 임시 작업 공간/테이블 크기 제한
  → 자원 독점 방지

함정:
  ❌ Commit/Rollback (OLTP용, DW엔 무관)
  ❌ 테이블스페이스 (시간대 무관)
  ❌ 접근 로그 (탐지, 성능 X)
```

### ETL (Extract-Transform-Load)
```
운영 DB → [변환] → DW
        ETL이 자동 배치로 데이터 옮김
        - Extract: 운영 DB에서 추출
        - Transform: 분석용으로 가공
        - Load: DW에 적재

대표 도구: Informatica, Talend, Airflow

ELT (현대): Extract → Load → Transform
  → 일단 다 부어넣고 DW에서 변환
  → 클라우드 DW(Snowflake/BigQuery)가 강력해져서 가능
  → 시험에는 ETL 위주로 출제
```

### 데이터 저장소 종류
```
OLTP        : 운영 DB (실시간 거래)
DW          : 정제된 분석 DB
Data Mart   : DW의 부분집합 (부서별)
Data Lake   : 원본 그대로 (구조화/비구조화 다)
Read Replica: 운영 DB 읽기 전용 복제본 (가벼운 DW)
```

### DW 모델링 (간단히)
```
Star Schema:
  중앙 = Fact 테이블 (수치: 매출, 수량)
  주변 = Dimension 테이블 (속성: 시간, 지역, 상품)

Fact = 큰 테이블, 측정값
Dimension = 작은 테이블, 분석 기준
```

### 비유 (식당)
```
OLTP = 주방 (실시간 요리)
DW   = 회계실 (월말 분석)
ETL  = 영수증 옮기는 직원
읽기 전용 = 회계 자료에 손대면 안 됨

작은 식당: OLTP만 (주방에서 영수증 정리)
큰 식당: OLTP + DW (분리)
```

### 실무 vs 시험
```
실무: 작은 회사는 OLTP에서 대시보드도 직접 뽑음
시험: OLTP/DW 명확히 분리된 환경 가정

→ 시험 볼 때는 "이상적 분리 환경"으로
→ "DW는 분석 전용, 사용자는 조회만"
```

---

## D4-11. 기타 운영 통제 모음

### 비밀번호 통제 = Validity Check
```
"비밀번호 관리 통제" → Validity Check

이유: 비밀번호 정책은 여러 규칙의 조합
  - 길이 + 영문 + 숫자 + 특수문자 + 사전 단어 금지
  → 종합 형식 검증 = Validity Check

오답:
  ❌ Size Check (길이만)
  ❌ Field Check (타입만)
  ❌ Hash Total (배치용, 비밀번호 무관)
```

### 소스/오브젝트 코드 동기화 = 타임스탬프
```
"synchronized" 키워드 → 시간/버전 일치 확인
  → 타임스탬프 비교가 가장 직접적

소스(.java) 수정 시간 vs 오브젝트(.class) 컴파일 시간
  소스 > 오브젝트 → 컴파일 안 됨, 미스매치
  소스 ≤ 오브젝트 → 동기화 OK

오답:
  ❌ Release-to-release 비교 (버전 차이 못 잡음)
  ❌ 라이브러리 통제 (변경 통제, 동기화 X)
  ❌ 접근 제한 (보호, 동기화 X)

(요즘 CI/CD에서는 자동 처리되지만 시험은 옛날 환경 가정)
```

### 시계 동기화의 주요 이유 = 인시던트 조사
```
"clock synchronization / 시계 동기화" → 인시던트 조사/포렌식 지원

이유: 여러 시스템 로그를 시간순으로 재구성
  → 사건의 시간순서, 인과관계 추적
  → 시계 안 맞으면 사건 재구성 불가

NTP가 보안 인프라의 기본인 이유

오답:
  ❌ 거래 누락/중복 (시계 무관)
  ❌ 데이터 전송 (시계 무관)
  ❌ 이메일 타임스탬프 (사소함)
```

### CSA(통제 자가 평가)에서 감사인 = Facilitator
```
CSA = Control Self-Assessment
  → 비즈니스 부서가 "스스로" 평가
  → 감사인이 평가 X

감사인 역할 = Facilitator (촉진자/진행자)
  - 워크숍 진행
  - 평가 도구 제공
  - 통제 목표 설명
  - 리스크 컨설팅
  → 직접 평가 X, 책임 X

번역 함정: Assessor → "배석 판사"로 번역되기도 함 (= 평가자)

비유:
  CSA = 트레이너가 가이드 → 회원이 직접 다이어트
  일반 감사 = 트레이너가 직접 측정

키워드 매칭:
  "Self-Assessment" → 감사인 = Facilitator
  "Audit" → 감사인 = Assessor
```

### 이메일 아카이빙 감사 MOST = 보관 정책
```
"보관/아카이빙 + MOST attention" → 보관 정책 (Retention Policy)

이유: 정책 없으면 뭘 얼마나 보관할지 기준 없음
  → 일관성 없음 + 법적 리스크
  → 정책 = 모든 통제의 근거 (패턴 1)

함정:
  ❌ 저장 용량 (정책 없으면 무의미)
  ❌ 사용자 인식 (시스템이 함)
  ❌ 벤더 지원 (부수적)
```

---

## D4-12. 백업 vs 복제 vs 가용성 (★)

### 3가지 카테고리 명확히

| 카테고리 | 목적 | 대표 솔루션 |
|---|---|---|
| **백업(Backup)** | 시점별 데이터 보존 | 오프사이트 백업, 풀/증분, D2D, 트랜잭션 로그 덤프 |
| **복제(Replication)** | 실시간 동기화 (가용성 한 종류) | SAN 복제, DB 복제 |
| **가용성(Availability)** | 운영 연속성 | Hot/Warm/Cold Site, 클러스터, RAID, 미러링 |

### 결정적 차이

```
백업 = 시점별 보관 (어제, 그제, 1주 전...)
       → 과거 시점 복원 가능
       → 실수/랜섬웨어 복구

복제 = 현재 상태만 동기화
       → 손상도 같이 복제됨
       → 과거 못 봄

가용성 = 운영이 안 멈춤
        → 즉시 전환/대체
        → 데이터 보호와는 별개
```

### Hot/Warm/Cold Site = 가용성 (백업 X)

> 사이트 등급/비용/복구 시간 비교표는 [D4-3](#d4-3-재해복구-사이트rtorpomto) 및 "DR 사이트 등급표 (재정리)" 참고.

```
핵심: Hot/Warm/Cold 셋 다 "가용성" 솔루션이지 백업 대체 X
```

### Hot Site 있어도 백업 필요한 이유 (★)

```
Hot Site = 실시간 복제
  ❌ 누가 실수 삭제 → Hot Site도 즉시 삭제
  ❌ 랜섬웨어 → Hot Site도 감염
  ❌ 과거 데이터 못 봄

→ Hot Site 있어도 백업은 별도 필요
→ Hot Site (가용성) + 오프사이트 백업 (데이터 보호) = 둘 다 필수
```

### 오프사이트 백업 절대 필수

```
오프사이트(Offsite) = 다른 장소
  → 같은 사이트 재해(화재/홍수/침수)에 같이 안 당함

3-2-1 백업 규칙:
  3개 사본
  2개 다른 매체
  1개는 오프사이트 ★

RAID로 오프사이트 백업 대체 ❌
  → RAID는 디스크 장애 대응
  → 사이트 재해엔 무력
  → 오프사이트 백업 절대 대체 불가
```

### Cold Site는 데이터 저장소가 아님 (함정)

```
"Cold Site로 오프사이트 백업 대체?" ❌

Cold Site = 빈 건물 (책상, 전기, 인터넷)
  → 서버 X, 데이터 X
  → 그냥 작업 공간
  → 백업 저장소가 아님

오프사이트 백업이 없어졌으면:
  → Cold Site 만들어도 의미 없음
  → 그냥 백업을 다시 살려야 함 ★
```

### 키워드 매칭 (★)

```
"BACKUP" 키워드 → 백업 솔루션만
  ❌ Hot Site, 복제, 클러스터, RAID (가용성)
  ✅ D2D, 풀/증분, 오프사이트 백업

"AVAILABILITY" 키워드 → 가용성 솔루션
  ✅ Hot/Warm/Cold Site, 복제, 클러스터, RAID

"DATA RECOVERY" 키워드 → 백업

본능적으로 "고급/비싼" 답 끌리지만
문제 단어와 매칭 안 되면 무조건 오답
```

### 백업 종류별 매칭 (★ 키워드 표)

| 키워드 | 답 | 이유 |
|---|---|---|
| **용량 제한 / 매체 절약** | Incremental | 변경분만 → 가장 작음 |
| **빠른 복구 필요** | Full | 한 번에 복원 |
| **24/7 + 대용량 + 백업** | Disk-to-Disk | 무중단 백업 |
| **online 시스템 추가 고려** | 트랜잭션 로그 덤프 | 거래량 ↑ |
| **granular RPO / 거의 0** | Continuous Data Backup (CDP) | 실시간 |
| **데이터센터 재해 + complete recovery** | 원격지 실시간 복제 | 다른 사이트 + 손실 0 |

### 백업 종류 트레이드오프

```
Full Backup:
  용량 큼 / 백업 김 / 복구 빠름 / 단순

Differential:
  용량 중간 / 중간 / 중간 / 중간

Incremental:
  용량 가장 작음 / 빠름 / 복구 느림 (Full+Inc1+Inc2... 다 적용)

CDP (Continuous Data Protection):
  실시간 / 모든 변경 즉시 캡처 / RPO 거의 0
```

### 백업/복원 효과성 = RTO 충족

```
"백업/복원 효과성" → RTO 안에 복원됐나
  → 활동(복구팀, 매체, 단순 복원) ≠ 효과
  → 결과(RTO 충족) = 효과

원칙: effectiveness = 결과로 본다 (D4-11과 동일)
```

### 무단 SW 배포 방지 = 버전 관리 시스템 검토

```
"백업 → 운영 배포 시 무단 SW 방지" → 버전 관리 시스템 검토

이유: 어떤 버전이 운영으로 가는지 추적
오답:
  ❌ 수동 복사 (수동도 무단 SW 가져감)
  ❌ 개발자 접근 차단 (부분적)
  ❌ 접근 로그 (접근만, SW 추적 X)

"무단" 종류별 답:
  무단 SW 배포 → 버전 관리
  무단 변경 탐지 → 해시 비교 / 역추적
  무단 접근 방지 → 접근 제어
```

### Retention Date = 만료 전 삭제 금지

```
Retention Date = 보관 의무 만료일
  → 만료 전 삭제/덮어쓰기 X
  → 법적/규제 보관 요구사항 충족

함정:
  ❌ 읽기 막음 (무관)
  ❌ 백업 보관 만료 (별도 관리)
  ❌ 같은 이름 파일 구분 (생성일이 그 역할)

연결: Retention Policy(D4-11) = 정책 / Retention Date = 개별 파일 만료일
```

### Offsite 위치 선정 = 다른 재해 권역

```
오프사이트 본질 = "같은 재해에 안 당하기"

MOST important:
  ✅ 물리적 분리 + 다른 리스크 권역
  ❌ 동일 보호 수준 (보호는 부수적)
  ❌ 제3자 위탁 (자체도 OK)
  ❌ 감시 장비 (부수적)

원칙: 지리적 분리가 보호 수준보다 우선
용어: Remote = Offsite (둘 다 "다른 위치")
```

### 온라인 시스템 백업 = 트랜잭션 로그 덤프

```
"online system + 백업 추가 고려" → 트랜잭션 로그 덤프
  → 거래량 많음 → 일반 백업으론 부족
  → 로그를 짧은 주기로 백업 → RPO 최소

"in addition to all systems" 키워드:
  → 모든 시스템 공통 외 추가 사항
  → 온라인 특수 사항 = 트랜잭션 로그 덤프
```

### 스토리지 증가 GREATEST 리스크 = RTO 미달

```
스토리지 증가 → 데이터 양 ↑ → 복구 시간 ↑
  → RTO 미달 → 비즈니스 영향

함정:
  ❌ 백업 시간/비용 (운영 부담, 관리 가능)
  ❌ 스토리지 비용 (관리 가능)
  ✅ RTO 미달 (비즈니스 생존 위협)

원칙: 비용 < 가용성/복구
```

---

## "MOST important" 질문 분류표 (BCP/DRP)

> 4축 프레임워크(단계/역할/문서/실행)별 단골 정답은 D4-8 "BCP/DR MOST important 4축 프레임워크" 참고.

같은 단어라도 **수식구**에 따라 정답 카테고리가 통째로 바뀜.

| 질문 패턴 | 정답 카테고리 |
|---|---|
| **MOST important (단독)** | **인명 안전** ★ (대피, life safety) |
| MOST important **to recover** | 핵심 비즈니스 프로세스 |
| MOST important **in BCP development** | **현업 부서 참여** |
| MOST important **in BCP implementation** | **인력에 전달(communicate)** |
| MOST important **in testing** | **한계(limitations) 식별** |
| MOST important **in maintenance** | **Walk-through / 정기 검토** |
| MOST important **for plan effectiveness** | **경영진 지원** |
| MOST important **document** | **BIA** |
| MOST important **factor in site selection** | 메인과의 거리 |
| MOST important **component of DRP** | 재해 선언 절차 / BIA |
| MOST important **to update frequently** | **연락처(인사 데이터)** |
| **PRIMARILY** ensure DRP covers | **비즈니스 기능 분석/우선순위 (BIA)** ★ |

<!-- 절대 우선순위 (인명>자산>연속성>손실최소화) → "BCP의 PRIMARY 목적" 및 "재해 발생 순간 행동 우선순위" 참고 -->

---

## "중요" vs "자주 갱신" 축 구분 (헷갈림 포인트)

같은 보기로 질문 동사만 바뀌면 정답이 통째로 바뀐다.

```
"가장 중요" → 구조적으로 빠지면 안 되는 것  (있냐/없냐 축)
"자주 갱신" → 변동성이 큰 것                (낡냐/안 낡냐 축)
```

### 직전 사례 (같은 보기, 다른 질문)
- A. 핵심 인력 연락처 / B. 서버 인벤토리 / C. 역할/책임 / D. 재해 선언 절차

| 질문 | 정답 | 이유 |
|---|---|---|
| **frequent updating** 필요 | **A. 연락처** | 가장 자주 낡음 (인사 변동) |
| **most important** component | **D. 선언 절차** | DRP 발동의 트리거 |

**연락처 변동성 1순위 이유**: 퇴사/이직/번호 변경이 잦음. 재해 시 "전화 안 받는 명단" = DRP 무력화.

---

<!-- BCP 단계별 MOST important → D4-8 "BCP 효과적 구현/계획 단계별 MOST important" 참고 -->

---

## 재해 발생 순간 행동 우선순위

```
화재 경보/재해 발생
        ↓
① 인명 대피 (Life Safety) ★★★ ← MOST important 1순위
        ↓
② 진압 시스템 (자동 작동, 수동은 대피 후)
        ↓
③ 소방서 통보 (대부분 자동 보고)
        ↓
④ 자산 보호 (오프사이트 백업이 이미 있어야 정상)
```

**오답 함정**: "백업을 들고 나간다" -- 대피 지연 + 오프사이트 백업이 있어야 정상.

---

## PRIMARY/MAIN/MOST 풀이 보기 분류 패턴

| 보기 유형 | 처리 |
|---|---|
| 그 활동의 **존재 이유** 자체 | 정답 후보 ★ |
| 그 활동을 하면 **부수적으로** 좋아지는 것 | 함정 -- 깐다 |
| 정반대 방향 (제거/대체 등) | 즉시 탈락 |
| 다른 활동의 책임 영역 | 즉시 탈락 |

**자가 점검 한 줄**:
> *"이 important/primary는 무엇에 대한 것인가?"*
>
> 질문 동사 + 수식구를 동그라미 친 후 보기 분류.

---

<!-- DRP 테스트 상세 → D4-8 "BCP 테스트 종류" 테이블 참고 -->
<!-- 오프사이트 테스트 MAIN purpose = 호환성(Compatibility) 검증, drift 방지 -->
<!-- 절차 검증 BEST indicator = Tabletop exercise (문서/승인=약, 실제 실행=강) -->

---

## CISA가 자주 까는 BCP/DRP 함정 모음

1. **"DRP를 먼저 만들자"** → 오답. BCP(BIA)가 먼저.
2. **"DRP에서 비즈니스 우선순위 정함"** → 오답. BIA의 결과를 받아 쓰는 것.
3. **"BCP는 IT 계획"** → 오답. **비즈니스 계획**, IT는 일부.
4. **"DRP만 있으면 충분"** → 오답. 사람/시설/공급망은 BCP가 커버.
5. **같은 건물 내 이중화** → 함정. SPOF 못 풂.
6. **근거리(500m) 핫사이트** → 함정. 같은 재해에 동시 피해.
7. **High RPO에 미러링** → 방향 반대. 미러링은 Low RPO용.
8. **High RTO에 핫사이트** → 방향 반대. 핫은 Low RTO용.
9. **금융/은행 Reciprocal** → 기밀/경쟁/규제로 거의 항상 오답.
10. **재해 시 백업 들고 나가기** → 인명 우선 위반.
11. **"문서 승인됨/모범사례 비교"** = 절차 검증 → 함정. **Tabletop 이상**이 정답.
12. **벤더가 알아서** → 계약서 먼저 확인.
13. **다운타임 비용 = RPO 함수** → 축 혼동 함정.

---

## 한 장 요약 (시험장 직전 복습용)

```
BIA → BCP → DRP                        포함: BCP ⊃ DRP
 │     │     │                         수립: BIA → BCP → DRP
 │     │     └─ IT 복구 (서버·데이터)   발동: IR → DRP → BCP
 │     └─ 비즈니스 전체 (사람·시설)
 └─ 비즈니스 분석 + RTO/RPO 도출

낮다/짧다 = 엄격 = 비싼 솔루션          사이트 = 시간(RTO) 축
높다/길다 = 느슨 = 저렴한 솔루션         미러링 = 데이터(RPO) 축

MOST important 단독 → 인명 ★            오프사이트 테스트 = 호환성 검증
PRIMARY DRP 관심사 → BIA                절차 검증 BEST = Tabletop
frequent update    → 연락처              SPOF 함정 = 같은 건물 이중화
클라우드 DR        → 계약서 먼저          핫사이트 = 원거리 + Low RTO
```
