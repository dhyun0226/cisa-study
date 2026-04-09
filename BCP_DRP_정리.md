# BCP / DRP 종합 정리

> CISA Domain 4 — Information Systems Operations and Business Resilience
> 치트시트(`감사인_마인드셋_치트시트.md`)와 짝. 메타 규칙은 치트시트, **DR/BCP 도메인 지식은 이 문서**.

---

## 1. BCP ⊃ DRP 관계도

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

- **BCP**: 회사 전체가 어떻게 계속 굴러가나 (사람·시설·IT·공급망·고객)
- **DRP**: 그중 IT 시스템을 어떻게 복구하나 (BCP의 **하위 구성요소**)

---

## 2. 수립 순서 vs 발동 순서 (헷갈리지 마라)

### 수립(plan/develop) 순서
```
① BIA            "어떤 비즈니스 기능이 얼마나 중요한가?" → RTO/RPO/MTD 도출
② Risk Assessment "어떤 위협이 위협하나?"
③ 복구 전략 선택  "Hot/Warm/Cold? 미러링? 거리?"
④ BCP 작성       전체 비즈니스 연속성
⑤ DRP 작성       BCP 하위, IT 복구 세부
⑥ Test           Paper→Walk-through→Tabletop→Functional→Parallel→Full
⑦ Maintenance    정기 갱신, 변경 관리 연동
```

### 발동(activate) 순서
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

---

## 3. Incident Response vs DRP vs BCP

| 계획 | 시점 | 범위 | 목적 |
|---|---|---|---|
| **Incident Response** | 분/시간 | 보안 사고, 즉시 대응 | 피해 차단, 인명 안전 |
| **DRP** | 시간/일 | IT 시스템 | 시스템·데이터 복구 |
| **BCP** | 일/주 | 비즈니스 전체 | 운영 지속/재개 |

---

## 4. 복구 지표 (한 줄 정리)

```
RTO       = 시계 (얼마나 빨리 복구?)        ← 시간 축
RPO       = 데이터 (얼마나 잃어도 돼?)       ← 데이터 축
SDO       = 대체 운영 시 서비스 수준
MTO/MTD/AIW = 최대 허용 중단 시간
```

**방향 규칙 (반복 강조 ★)**:
```
낮다/짧다 = 엄격 = 비싼 솔루션 (Hot site, Mirror)
높다/길다 = 느슨 = 저렴한 솔루션 (Cold site, 일일 백업)
```

→ 보기에 "high RPO에 미러링" 같은 **방향 반대** 조합이 보이면 즉시 탈락.

---

## 5. DR 사이트 종류

| 사이트 | 복구 속도 | 비용 | 비고 |
|---|---|---|---|
| **Hot** | 즉시 | 최고 | 중요 애플리케이션 표준 |
| **Warm** | 수일 | 중 | 중요 앱엔 부적합 |
| **Cold** | 수주 | 최저 | 비핵심용 |
| **Mirror/Replication** | 실시간 | 최고 | RPO≈0, 데이터 축 |
| **Reciprocal** | — | 저 | 금융/규제 산업 → 거의 항상 오답 |

### 거리 규칙
- 복제 사이트는 **충분한 지리적 거리** 필수
- 500m 같은 근거리 = 같은 재해(지진/홍수/정전)에 동시 피해 → **함정**
- 핫사이트는 보통 수십~수백 km 떨어져야 함

### 판단 공식
> `사이트 종류(복구속도) × 거리(재해 격리) × 백업주기(RPO)` 균형이 좋은 것이 정답
>
> 예: 일일 백업 + **원거리** 핫사이트(140km) > 실시간 복제 + **근거리** 핫사이트(500m)

### 핫사이트 정당화 조건
보기에 **"낮음/짧음/없음"** 단어가 있어야 핫사이트가 정답:
- disaster downtime tolerance **low**
- RTO **low**
- MTD **short**

→ "high RTO", "long MTD" 보기는 핫사이트 답에서 즉시 탈락.

---

## 6. 사이트(시간 축) vs 미러링(데이터 축)

```
사이트(Hot/Warm/Cold) 선택  → 시간 문제 → RTO/다운타임이 결정
복제 방식(Mirror/Backup)    → 데이터 문제 → RPO가 결정
```

| 질문 키워드 | 정답 카테고리 |
|---|---|
| downtime, recovery time, 복구 속도 | **사이트 종류** |
| data loss, 데이터 보호, 실시간 | **미러링/복제** |

**축 혼동 함정**: "다운타임 비용은 RPO에 따라…" 같은 보기는 두 축을 섞은 오답.

---

## 7. 다운타임 비용 vs 복구 비용 (DRP 비용 곡선)

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

- **다운타임 비용**: 매출 손실·유휴 인력·급여 → 시간 누적 증가
- **복구 비용**: 빨리 복구할수록 비싼 솔루션 → 시간 여유 있으면 저렴
- **DRP 본질**: 두 곡선의 교차점(최적 RTO) 찾기

**오답 패턴**:
- "복구 비용은 시간과 무관" → 정반대
- "복구 비용은 통제 불가" → DRP 자체를 부정
- "다운타임 비용은 RPO와 관련" → 축 혼동

---

## 8. 통신 연속성(Telecom Continuity) 4종

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

---

## 9. 단일 장애점(SPOF) 함정

> **같은 건물 내 이중화 = 이중화처럼 보이지만 SPOF 못 풂**

| 보호 유형 | 장비 고장 | 정전 | 통신 장애 | 광역 재해 |
|---|---|---|---|---|
| 데이터 백업만 | ❌ | ❌ | ❌ | ❌ |
| **사내** 대체 시스템 | ✅ | ❌ | ❌ | ❌ |
| 통신 회선만 이중화 | ❌ | ❌ | ✅ | ❌ |
| **다른 위치** 대체 시스템 | ✅ | ✅ | ✅ | ✅ |

**규칙**: "BEST DRP" 질문에서 **"another site / node / location"** 단어 = 정답 1순위.
**함정**: "Onsite alternate" 보기는 거의 항상 오답 (정전 한 번에 같이 죽음).

**데이터 백업 ≠ 서비스 가용성**: 백업은 데이터 손실 대비, 가용성은 별개.

---

## 10. 클라우드 DR 책임 (감사인 관점)

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

**핵심**: ②③④는 모두 ①(계약상 책임)이 확인된 후에야 의미가 있음.

---

## 11. DRP 테스트

### 테스트 사다리 (점프 금지)
```
Paper → Walk-through → Tabletop → Functional → Parallel → Full Interruption
```

- 한 칸씩만 올라가라
- 이미 검증된 영역은 재검증 금지 (효율성)
- **Test(결함 찾기) ≠ Training(사람 가르치기)**

### 오프사이트 시설 테스트의 MAIN purpose
> **호환성(Compatibility) 지속 검증** ★

메인 사이트는 OS·HW·앱이 계속 바뀌는데 DR 사이트가 그대로면 **drift** 발생 → 재해 시 "복원했는데 안 돌아감". 테스트가 이걸 잡는 유일한 방법.

**오답 함정**:
- 데이터 무결성 보호 (X — 별개 통제)
- 문서 최신화 (X — 부수 효과)
- 상세 계획 제거 (X — 정반대)

### "절차가 요구사항 충족" BEST indicator
> **Tabletop exercise** (실제 검증의 시작점)

**문서/승인/비교는 "있다"의 영역, Tabletop부터가 "작동한다"의 영역.**

| 보기 유형 | 위상 |
|---|---|
| 문서 존재/완성 | 약 |
| 거버넌스 승인 | 약 |
| 외부 기준 비교 | 중 |
| **실제 실행/검증** | **강 ★** |

---

## 12. "MOST important" 질문 분류표 (BCP/DRP)

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

### 절대 우선순위 (단독 MOST important)
```
1. 인명 ★★★   ← 보기에 있으면 무조건 정답
2. 자산
3. 운영 연속성
4. 손실 최소화
```

---

## 13. "중요" vs "자주 갱신" 축 구분 (헷갈림 포인트)

같은 보기로 질문 동사만 바뀌면 정답이 통째로 바뀐다.

```
"가장 중요" → 구조적으로 빠지면 안 되는 것  (있냐/없냐 축)
"자주 갱신" → 변동성이 큰 것                (낡냐/안 낡냐 축)
```

### 직전 사례 (같은 보기, 다른 질문)
- A. 핵심 인력 연락처 / B. 서버 인벤토리 / C. 역할·책임 / D. 재해 선언 절차

| 질문 | 정답 | 이유 |
|---|---|---|
| **frequent updating** 필요 | **A. 연락처** | 가장 자주 낡음 (인사 변동) |
| **most important** component | **D. 선언 절차** | DRP 발동의 트리거 |

**연락처 변동성 1순위 이유**: 퇴사·이직·번호 변경이 잦음. 재해 시 "전화 안 받는 명단" = DRP 무력화.

---

## 14. BCP 단계별 MOST important (다시 강조)

| 단계 | 키워드 | 정답 방향 |
|---|---|---|
| 개발(develop) | planning, designing | **현업 부서 참여** |
| 승인 | approval | 경영진 승인 |
| 구현(implement) | "after developed" | **인력에 전달(communicate)** |
| 유지 | up to date | Walk-through |
| 테스트 | verify, test | **한계(limitations) 식별** |

**→ "어느 단계"인지 먼저 확인. "이미 개발됨" 조건이면 승인 답은 탈락.**

---

## 15. 재해 발생 순간 행동 우선순위

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

**오답 함정**: "백업을 들고 나간다" — 대피 지연 + 오프사이트 백업이 있어야 정상.

---

## 16. PRIMARY/MAIN/MOST 풀이 보기 분류 패턴

| 보기 유형 | 처리 |
|---|---|
| 그 활동의 **존재 이유** 자체 | 정답 후보 ★ |
| 그 활동을 하면 **부수적으로** 좋아지는 것 | 함정 — 깐다 |
| 정반대 방향 (제거/대체 등) | 즉시 탈락 |
| 다른 활동의 책임 영역 | 즉시 탈락 |

**자가 점검 한 줄**:
> *"이 important/primary는 무엇에 대한 것인가?"*
>
> 질문 동사 + 수식구를 동그라미 친 후 보기 분류.

---

## 17. CISA가 자주 까는 BCP/DRP 함정 모음

1. **"DRP를 먼저 만들자"** → 오답. BCP(BIA)가 먼저.
2. **"DRP에서 비즈니스 우선순위 정함"** → 오답. BIA의 결과를 받아 쓰는 것.
3. **"BCP는 IT 계획"** → 오답. **비즈니스 계획**, IT는 일부.
4. **"DRP만 있으면 충분"** → 오답. 사람·시설·공급망은 BCP가 커버.
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

## 18. 한 장 요약 (시험장 직전 복습용)

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

---

## 관련 문서
- `감사인_마인드셋_치트시트.md` — 메타 사고 규칙, 질문 동사 읽기, 답 바꾸기 규칙
- `SDLC_V모델_정리.md` — Domain 3 보조
