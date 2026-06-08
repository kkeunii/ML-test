const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const questionsDir = path.join(rootDir, "questions");
const unitNumbers = [9, 10, 11, 12, 13, 14];
const revisions = {
  "unit9-01": {
    answer: "검증 데이터는 모델 선택과 하이퍼파라미터 튜닝 과정에서 사용한다.",
    distractors: [
      "훈련 데이터는 여러 후보 모델의 최종 일반화 성능을 발표할 때만 사용한다.",
      "테스트 데이터는 검증 성능이 낮을 때마다 반복적으로 기준을 바꾸는 데 사용한다.",
      "검증 데이터와 테스트 데이터는 모두 학습에 쓰지 않으므로 역할을 구분하지 않아도 된다."
    ]
  },
  "unit9-02": {
    answer: "모델의 최종 일반화 성능을 공정하게 평가하기 위해",
    distractors: [
      "학습 데이터의 손실이 충분히 낮아졌는지만 확인하기 위해",
      "검증 세트에서 선택한 하이퍼파라미터를 다시 고르기 위해",
      "결측치 대체 기준을 테스트 분포에 맞춰 조정하기 위해"
    ]
  },
  "unit9-03": {
    answer: "데이터를 K개 부분으로 나누고, 검증 부분을 바꿔가며 반복 평가한다.",
    distractors: [
      "K개의 모델을 독립적으로 학습한 뒤 다수결로 예측값을 결합한다.",
      "테스트 데이터를 K번 재사용해 가장 높은 점수만 최종 성능으로 보고한다.",
      "한 번 정한 검증 세트를 고정하고 epoch마다 K번 반복 측정한다."
    ]
  },
  "unit9-04": {
    answer: "클래스 비율이 불균형할 때",
    distractors: [
      "수치형 특성들의 단위가 서로 크게 다를 때",
      "특성 간 상관관계가 높아 다중공선성이 의심될 때",
      "시간 순서가 강해 과거 데이터로 미래 데이터를 예측해야 할 때"
    ]
  },
  "unit9-05": {
    answer: "특정 클래스가 대부분을 차지하는 불균형 데이터일 때",
    distractors: [
      "각 클래스 비율이 거의 같고 오분류 비용도 비슷할 때",
      "회귀 문제에서 예측값과 실제값의 차이를 비교할 때",
      "모델의 확률값 보정 정도만 단독으로 평가하려 할 때"
    ]
  },
  "unit9-06": {
    answer: "Recall",
    distractors: [
      "Precision",
      "Specificity",
      "Fall-out"
    ]
  },
  "unit9-07": {
    answer: "Precision",
    distractors: [
      "Recall",
      "TPR",
      "검증 fold 수"
    ]
  },
  "unit9-08": {
    answer: "Precision과 Recall을 함께 고려하는 지표이다.",
    distractors: [
      "Accuracy와 AUC를 같은 가중치로 더한 산술평균이다.",
      "Precision과 Recall 중 더 큰 값에 거의 좌우되는 지표이다.",
      "임계값과 무관하게 하나의 모델에서 항상 고정되는 학습 파라미터이다."
    ]
  },
  "unit9-09": {
    answer: "ROC 곡선은 FPR 변화에 따른 TPR 변화를 나타낸다.",
    distractors: [
      "ROC 곡선은 Precision 변화에 따른 Recall 변화를 나타낸다.",
      "AUC는 낮을수록 양성과 음성을 더 잘 구분한다는 뜻이다.",
      "ROC 곡선은 예측 확률이 아니라 최종 0/1 라벨만으로 임계값을 바꾼다."
    ]
  },
  "unit9-10": {
    answer: "데이터의 패턴, 이상치, 변수 관계를 여러 관점에서 살펴보는 과정이다.",
    distractors: [
      "사전에 정한 가설의 p-value만 계산해 채택 여부를 판단하는 과정이다.",
      "모델 학습이 끝난 뒤 테스트 세트 정확도만 최종 보고서에 적는 과정이다.",
      "모든 변수를 표준화하고 라벨을 삭제해 비지도학습 데이터로 바꾸는 과정이다."
    ]
  },
  "unit10-01": {
    answer: "모델 성능을 조절하기 위해 사람이 미리 정하거나 탐색하는 설정값이다.",
    distractors: [
      "학습이 끝난 뒤 데이터로부터 자동 추정된 회귀계수와 트리 분기 기준이다.",
      "테스트 세트에만 존재하며 최종 평가 때 처음 계산되는 정답 라벨이다.",
      "예측 결과를 확률에서 0/1 클래스로 바꾼 뒤 저장되는 출력값이다."
    ]
  },
  "unit10-02": {
    answer: "후보 하이퍼파라미터 조합을 체계적으로 시도해 가장 좋은 조합을 찾는다.",
    distractors: [
      "각 특성의 결측치를 후보 값으로 바꿔가며 가장 작은 데이터셋을 찾는다.",
      "테스트 세트 점수가 가장 높아질 때까지 같은 후보를 반복 수정한다.",
      "모델 내부 가중치를 사람이 직접 표로 나열해 최적값을 계산한다."
    ]
  },
  "unit10-03": {
    answer: "검증 과정에서 좋은 조합일 뿐, 최종 테스트 데이터에서 다시 평가해야 하기 때문이다.",
    distractors: [
      "best_params_는 점수가 아니라 모델이 틀린 테스트 행 번호만 저장하기 때문이다.",
      "Grid Search는 교차검증을 쓰면 훈련 데이터를 전혀 사용하지 않기 때문이다.",
      "best_params_는 항상 가장 단순한 모델을 의미하므로 성능과 무관하기 때문이다."
    ]
  },
  "unit10-04": {
    answer: "생리적으로 0이 나오기 어려운 값이므로 결측 또는 이상 입력일 가능성이 있기 때문이다.",
    distractors: [
      "0은 모든 의료 변수에서 정상 범위의 중앙값으로 해석되기 때문이다.",
      "0이 포함된 행은 라벨이 양성이라는 뜻이라 별도 모델이 필요하기 때문이다.",
      "로지스틱 회귀는 입력 특성에 0이 있으면 수학적으로 학습할 수 없기 때문이다."
    ]
  },
  "unit10-05": {
    answer: "실제 환자를 정상으로 놓치는 것이 큰 위험이 될 수 있기 때문이다.",
    distractors: [
      "양성이라고 예측한 사례가 실제 양성인지의 신뢰도만 중요하기 때문이다.",
      "Recall은 클래스 비율과 무관하게 항상 Accuracy보다 낮게 계산되기 때문이다.",
      "Recall은 스케일링 여부를 판단하는 전처리 지표로 쓰이기 때문이다."
    ]
  },
  "unit10-06": {
    answer: "여러 모델의 예측을 결합해 더 안정적이고 정확한 예측을 얻는 것",
    distractors: [
      "하나의 결정나무 깊이를 계속 키워 모든 훈련 샘플을 외우게 하는 것",
      "검증 세트의 오답만 삭제해 데이터 분포를 단순하게 만드는 것",
      "라벨 없이 중심점을 이동해 비슷한 데이터끼리 묶는 것"
    ]
  },
  "unit10-07": {
    answer: "데이터를 중복 허용해 여러 샘플로 나누고 병렬적으로 학습한 뒤 투표한다.",
    distractors: [
      "앞 모델이 틀린 샘플의 가중치를 높여 다음 모델을 순차적으로 학습한다.",
      "모든 나무가 같은 특성과 같은 행을 보도록 고정해 분산을 증가시킨다.",
      "클러스터 중심점을 이동하며 라벨 없이 데이터 구조만 찾는다."
    ]
  },
  "unit10-08": {
    answer: "앞 모델이 틀린 데이터에 집중하도록 다음 모델을 순차적으로 학습한다.",
    distractors: [
      "여러 모델을 서로 독립적으로 학습한 뒤 같은 가중치로 동시에 투표한다.",
      "훈련 데이터를 bootstrap으로 복원추출해 각 모델의 상관을 낮춘다.",
      "분류 임계값을 고정하고 확률값을 쓰지 않도록 만드는 평가 방식이다."
    ]
  },
  "unit10-09": {
    answer: "여러 bootstrap 데이터와 특성 선택의 무작위성을 이용해 다양한 결정나무를 만들기 때문이다.",
    distractors: [
      "각 트리의 정답 라벨을 무작위로 섞어 서로 다른 문제를 풀게 하기 때문이다.",
      "예측할 때마다 클래스 하나를 무작위로 뽑고 학습은 하지 않기 때문이다.",
      "테스트 데이터 일부를 매번 삭제해 평가 점수를 다르게 만들기 때문이다."
    ]
  },
  "unit10-10": {
    answer: "스마트폰의 가속도계와 자이로스코프 센서 데이터를 이용해 행동을 분류한다.",
    distractors: [
      "텍스트 리뷰의 단어 빈도를 이용해 긍정과 부정 감정을 분류한다.",
      "카메라 이미지의 RGB 픽셀만 사용해 손글씨 숫자를 분류한다.",
      "정답 라벨 없이 거래 데이터를 군집화해 사기 여부를 추론한다."
    ]
  },
  "unit11-01": {
    answer: "사기 거래 비율이 극도로 낮아 클래스 불균형이 심하기 때문이다.",
    distractors: [
      "V1~V28이 비식별화되어 있어 어떤 모델도 확률을 출력할 수 없기 때문이다.",
      "정상 거래보다 사기 거래가 훨씬 많아 다수 클래스를 맞추기 어렵기 때문이다.",
      "Accuracy는 threshold와 무관하게 항상 0.5로 고정되는 지표이기 때문이다."
    ]
  },
  "unit11-02": {
    answer: "실제 사기 거래를 많이 놓친다.",
    distractors: [
      "정상 거래를 사기로 경고하는 비율이 반드시 높다.",
      "양성으로 예측한 거래의 신뢰도가 반드시 낮다.",
      "모델이 거래 금액 특성을 전혀 사용하지 않는다."
    ]
  },
  "unit11-03": {
    answer: "거래 금액의 단위와 분포가 다른 특성들과 크게 다를 수 있기 때문이다.",
    distractors: [
      "Amount를 스케일링하면 클래스 불균형이 자동으로 50:50이 되기 때문이다.",
      "Amount를 표준화해야 V1~V28의 비식별화가 해제되기 때문이다.",
      "Amount는 라벨이므로 평균 0, 표준편차 1로 바꿔야 하기 때문이다."
    ]
  },
  "unit11-04": {
    answer: "75% 분위수와 25% 분위수의 차이",
    distractors: [
      "평균에서 중앙값을 뺀 값",
      "최댓값에서 최솟값을 뺀 값",
      "양성 클래스 수에서 음성 클래스 수를 뺀 값"
    ]
  },
  "unit11-05": {
    answer: "사기 거래 자체가 희귀하고 극단적인 패턴을 가질 수 있기 때문이다.",
    distractors: [
      "이상치는 항상 정상 거래에서만 발생하므로 제거해도 라벨 분포가 유지되기 때문이다.",
      "이상치를 제거하면 검증 없이도 모든 모델의 AUC가 높아지기 때문이다.",
      "사기 탐지에서는 이상치가 모델 입력으로 들어가면 문법 오류가 나기 때문이다."
    ]
  },
  "unit11-06": {
    answer: "Threshold 변화에 따른 분류 성능을 시각적으로 비교하기 위해",
    distractors: [
      "모델별 코드 길이와 실행 시간을 하나의 곡선으로 비교하기 위해",
      "오차행렬의 TP, FP, FN, TN 값을 지도 위에 표시하기 위해",
      "결측치 대체 전후의 평균과 표준편차를 비교하기 위해"
    ]
  },
  "unit11-07": {
    answer: "시각화를 통해 문제 원인을 설득력 있게 전달하고 개선을 이끌 수 있음을 보여주기 때문이다.",
    distractors: [
      "데이터 분석에서는 표보다 장식적인 차트가 항상 더 정확하다는 점을 보였기 때문이다.",
      "모든 비율 데이터는 원형 차트로만 표현해야 한다는 규칙을 만들었기 때문이다.",
      "시각화는 가설 검증이 끝난 뒤 보고서 디자인 단계에서만 필요함을 보였기 때문이다."
    ]
  },
  "unit11-08": {
    answer: "행과 열 기준을 바꾸어 데이터를 요약·재구성하기 위해",
    distractors: [
      "모델의 하이퍼파라미터 후보를 자동으로 생성하기 위해",
      "이미지 픽셀을 1차원 벡터로 펼쳐 신경망에 넣기 위해",
      "클래스 불균형을 해결하도록 소수 클래스를 복원추출하기 위해"
    ]
  },
  "unit11-09": {
    answer: "발생 건수가 0인 값을 나누는 과정이 있기 때문에",
    distractors: [
      "검거 건수가 발생 건수보다 작으면 항상 NaN이 되기 때문에",
      "한글 컬럼명이 포함되면 pandas가 자동으로 inf를 만들기 때문에",
      "범죄 종류가 5개 이상이면 pivot_table이 결측값을 금지하기 때문에"
    ]
  },
  "unit11-10": {
    answer: "지역별 수치를 실제 지도 위에 표현해 공간적 패턴을 파악할 수 있다.",
    distractors: [
      "지역 경계를 이용해 모델의 잘못된 예측을 자동으로 수정한다.",
      "수치형 데이터의 이상치를 지도 로딩 과정에서 자동으로 제거한다.",
      "클래스 불균형을 해소하기 위해 소수 지역 데이터를 증강한다."
    ]
  },
  "unit12-01": {
    answer: "질문을 반복하며 데이터를 점점 더 순수한 그룹으로 나눈다.",
    distractors: [
      "모든 특성을 같은 가중치로 평균내어 하나의 연속값만 예측한다.",
      "결정경계와 가장 가까운 점만 남기고 나머지 데이터를 삭제한다.",
      "라벨 없이 중심점만 이동해 군집 번호를 부여한다."
    ]
  },
  "unit12-02": {
    answer: "나눈 후 각 그룹이 가능한 한 순수해지도록 만든다.",
    distractors: [
      "나눈 후 각 그룹의 클래스가 최대한 고르게 섞이도록 만든다.",
      "항상 결측치가 가장 많은 컬럼을 먼저 질문으로 사용한다.",
      "훈련 정확도와 관계없이 가장 해석하기 어려운 조건을 고른다."
    ]
  },
  "unit12-03": {
    answer: "훈련 데이터에 지나치게 맞춰져 과적합될 수 있다.",
    distractors: [
      "트리가 깊어질수록 모든 분기 기준이 자동으로 삭제된다.",
      "max_depth가 커지면 모델이 더 단순해져 과소적합만 발생한다.",
      "테스트 데이터 라벨을 이용해 분기 기준을 직접 학습하게 된다."
    ]
  },
  "unit12-04": {
    answer: "결정경계에 가장 가까이 있는 중요한 데이터 포인트",
    distractors: [
      "전체 데이터의 산술평균으로 계산되는 가상의 중심점",
      "오분류된 테스트 샘플을 모두 제거한 뒤 남는 라벨",
      "K-means에서 초기화된 첫 번째 클러스터 번호"
    ]
  },
  "unit12-05": {
    answer: "서포트 벡터와 결정경계 사이의 거리",
    distractors: [
      "모델이 학습에 사용한 전체 특성의 개수",
      "클러스터 중심점이 한 번 이동한 평균 거리",
      "훈련 데이터와 테스트 데이터의 클래스 비율 차이"
    ]
  },
  "unit12-06": {
    answer: "이상치에 민감하고 선형적으로 완벽히 나뉘는 데이터에만 적합하다.",
    distractors: [
      "오류를 어느 정도 허용하기 때문에 margin을 넓게 잡을 수 없다.",
      "커널 함수를 반드시 사용하므로 선형 데이터에는 적용할 수 없다.",
      "라벨이 없는 데이터에서만 동작해 분류 문제에는 사용할 수 없다."
    ]
  },
  "unit12-07": {
    answer: "C는 분류 오류와 margin 오류 사이의 trade-off를 조절한다.",
    distractors: [
      "C는 K-means에서 반드시 미리 정해야 하는 클러스터 개수이다.",
      "C가 커질수록 모든 오분류를 더 관대하게 허용한다.",
      "C는 입력 특성의 표준편차를 1로 만드는 전처리 계수이다."
    ]
  },
  "unit12-08": {
    answer: "중심점 초기화 → 가장 가까운 중심점에 할당 → 중심점 이동 반복",
    distractors: [
      "라벨 입력 → 손실 계산 → 오차 역전파 → 가중치 갱신",
      "support vector 선택 → margin 최대화 → kernel 제거",
      "훈련/검증 분할 → grid 조합 생성 → 최종 테스트 반복 튜닝"
    ]
  },
  "unit12-09": {
    answer: "몇 개의 군집으로 나눌 것인지를 미리 정해야 한다.",
    distractors: [
      "각 데이터의 정답 라벨을 K개 클래스 중 하나로 미리 입력해야 한다.",
      "학습률 K를 정해 중심점 이동 폭을 수동으로 고정해야 한다.",
      "K개의 특성만 남기고 나머지 특성은 반드시 삭제해야 한다."
    ]
  },
  "unit12-10": {
    answer: "결측치가 여러 컬럼에 퍼져 있어 대부분 또는 전체 데이터가 사라질 수 있기 때문이다.",
    distractors: [
      "NaN이 있는 행을 제거하면 항상 클래스 불균형이 완전히 해결되기 때문이다.",
      "결측치 제거는 라벨을 문자열로 바꾸기 때문에 분류 모델을 쓸 수 없기 때문이다.",
      "반도체 데이터의 결측치는 모두 Pass 라벨 자체를 의미하기 때문이다."
    ]
  },
  "unit13-01": {
    answer: "인공지능 안에 기계학습이 있고, 기계학습 안에 딥러닝이 포함된다.",
    distractors: [
      "딥러닝 안에 인공지능과 기계학습이 모두 포함된다.",
      "기계학습은 딥러닝의 하위 개념이지만 인공지능과는 독립적이다.",
      "인공지능, 기계학습, 딥러닝은 서로 겹치지 않는 별개의 분야이다."
    ]
  },
  "unit13-02": {
    answer: "입력층, 은닉층, 출력층",
    distractors: [
      "훈련층, 검증층, 테스트층",
      "정규화층, 결측층, 삭제층",
      "중심점층, 할당층, 이동층"
    ]
  },
  "unit13-03": {
    answer: "여러 층과 비선형 활성화 함수를 통해 복잡한 관계를 표현할 수 있기 때문이다.",
    distractors: [
      "깊은 신경망은 여러 선형 변환을 쌓아도 항상 하나의 선형 함수만 학습하기 때문이다.",
      "라벨을 사용하지 않고 입력 데이터의 평균만 반복 계산하기 때문이다.",
      "은닉층이 많아질수록 모든 가중치가 0으로 고정되어 해석이 쉬워지기 때문이다."
    ]
  },
  "unit13-04": {
    answer: "학습 데이터 확보에 많은 시간과 비용이 들 수 있다.",
    distractors: [
      "복잡한 모델이어도 내부 결정 과정을 항상 규칙 하나로 설명할 수 있다.",
      "데이터가 적을수록 과적합 위험 없이 성능이 자동으로 높아진다.",
      "오픈소스 프레임워크가 없어 모델을 직접 하드웨어로 구현해야 한다."
    ]
  },
  "unit13-05": {
    answer: "입력 신호의 총합을 다음 층으로 전달할 출력 신호로 변환한다.",
    distractors: [
      "훈련 세트와 테스트 세트의 비율을 클래스별로 유지해 나눈다.",
      "모델의 손실값을 파일로 저장하고 불러오는 직렬화 함수이다.",
      "결측치를 평균으로 대체해 모든 특성의 단위를 맞춘다."
    ]
  },
  "unit13-06": {
    answer: "0보다 작은 값은 0으로, 0보다 큰 값은 그대로 출력한다.",
    distractors: [
      "모든 입력을 0과 1 사이의 확률처럼 압축한다.",
      "모든 입력을 -1과 1 사이로 대칭적으로 변환한다.",
      "가장 큰 출력 노드만 1로 만들고 나머지는 0으로 만든다."
    ]
  },
  "unit13-07": {
    answer: "XOR은 선형 분리 함수로 표현할 수 없기 때문이다.",
    distractors: [
      "XOR은 정답 라벨이 없는 비지도학습 문제이기 때문이다.",
      "XOR은 입력 변수가 하나라서 가중치를 둘 수 없기 때문이다.",
      "XOR은 회귀 문제라 분류 퍼셉트론이 평가 지표를 계산할 수 없기 때문이다."
    ]
  },
  "unit13-08": {
    answer: "은닉층을 통해 비선형적인 표현을 만들 수 있기 때문이다.",
    distractors: [
      "입력값을 삭제하고 출력층의 bias만으로 모든 경우를 구분하기 때문이다.",
      "정답 라벨을 AND 또는 OR 라벨로 바꾸어 문제 자체를 단순화하기 때문이다.",
      "활성화 함수를 제거해 여러 선형 함수를 하나로 합치기 때문이다."
    ]
  },
  "unit13-09": {
    answer: "예측 오차를 바탕으로 각 층의 가중치를 조정하는 것",
    distractors: [
      "입력 이미지를 회색조로 바꾸고 픽셀값을 반전하는 것",
      "라벨 없이 중심점을 이동해 군집을 다시 배정하는 것",
      "훈련 데이터를 K개 fold로 나누어 평균 정확도를 계산하는 것"
    ]
  },
  "unit13-10": {
    answer: "손실 함수는 오차를 측정하고, 최적화 함수는 그 오차를 줄이도록 가중치를 업데이트한다.",
    distractors: [
      "손실 함수는 모델 구조를 저장하고, 최적화 함수는 저장된 모델을 불러온다.",
      "손실 함수는 훈련/테스트 분할 비율을 정하고, 최적화 함수는 라벨을 만든다.",
      "손실 함수는 이미지를 확대하고, 최적화 함수는 픽셀을 RGB 채널로 나눈다."
    ]
  },
  "unit14-01": {
    answer: "이미지는 픽셀이라는 작은 단위의 값들로 표현된다.",
    distractors: [
      "이미지는 학습률과 손실 함수만으로 저장되며 픽셀값은 모델 내부에서 생성된다.",
      "디지털 이미지는 반드시 문장 토큰의 순서로 표현되어야 한다.",
      "해상도는 분류 모델의 AUC와 같은 의미로 1에 가까울수록 좋다."
    ]
  },
  "unit14-02": {
    answer: "회색조 이미지는 일반적으로 밝기 값 하나로 표현되고, 컬러 이미지는 RGB 채널을 가진다.",
    distractors: [
      "회색조 이미지는 항상 RGB 세 채널을 가지며 컬러 이미지는 한 채널만 가진다.",
      "컬러 이미지는 픽셀값이 없고 클래스 라벨만으로 색을 표현한다.",
      "회색조와 컬러 이미지는 채널 수가 아니라 validation split 여부로 구분된다."
    ]
  },
  "unit14-03": {
    answer: "28×28 픽셀의 회색조 손글씨 숫자 이미지 데이터이다.",
    distractors: [
      "32×32 RGB 의류 이미지를 모아 둔 비지도 군집화 전용 데이터이다.",
      "텍스트 리뷰와 감정 라벨로 구성된 자연어 분류 데이터이다.",
      "서울시 구별 범죄 발생과 검거율을 담은 지도 시각화 데이터이다."
    ]
  },
  "unit14-04": {
    answer: "신경망 학습에서 입력값의 스케일을 안정적으로 맞추기 위해",
    distractors: [
      "정수 라벨을 one-hot 벡터로 바꾸어 클래스 수를 늘리기 위해",
      "회색조 이미지를 RGB 컬러 이미지로 자동 변환하기 위해",
      "테스트 이미지를 훈련 세트에 합쳐 데이터 누수를 만들기 위해"
    ]
  },
  "unit14-05": {
    answer: "픽셀의 공간적 배치 정보가 약해질 수 있다.",
    distractors: [
      "라벨 개수가 이미지의 가로 픽셀 수만큼 자동으로 증가한다.",
      "픽셀값이 모두 문자열로 바뀌어 Dense 층이 입력을 받을 수 없다.",
      "모델이 합성곱 필터를 자동으로 더 많이 학습하게 되어 항상 성능이 오른다."
    ]
  },
  "unit14-06": {
    answer: "의류 이미지가 숫자보다 형태가 다양하고 클래스 간 시각적 차이가 복잡하기 때문이다.",
    distractors: [
      "Fashion MNIST는 라벨이 없어 정확도를 계산할 수 없기 때문이다.",
      "의류 이미지는 모두 같은 클래스라 모델이 구분할 정보가 없기 때문이다.",
      "손글씨 MNIST와 달리 픽셀값을 0~1로 정규화할 수 없기 때문이다."
    ]
  },
  "unit14-07": {
    answer: "필터를 이미지의 부분 영역에 적용해 새로운 특징 값을 만든다.",
    distractors: [
      "2차원 이미지를 라벨 순서에 맞춰 무조건 한 줄로 펼치는 작업만 의미한다.",
      "정답 라벨을 숫자에서 문자 이름으로 복원하는 인코딩 후처리이다.",
      "훈련 데이터와 테스트 데이터의 클래스 비율을 맞추는 샘플링 방법이다."
    ]
  },
  "unit14-08": {
    answer: "여러 필터를 통해 추출된 이미지 특징 결과이다.",
    distractors: [
      "모델의 최종 정답 라벨을 사람이 읽기 쉬운 이름으로 바꾼 표이다.",
      "손실 함수가 epoch마다 저장하는 스칼라 값들의 평균이다.",
      "훈련 세트와 검증 세트의 비율을 나타내는 설정값이다."
    ]
  },
  "unit14-09": {
    answer: "이미지 가장자리를 채워 합성곱 후 크기가 지나치게 줄어드는 것을 막기 위해",
    distractors: [
      "출력층의 값을 확률로 정규화해 모든 클래스 합이 1이 되도록 하기 위해",
      "픽셀값을 모두 0으로 만들어 모델이 배경만 학습하도록 하기 위해",
      "라벨을 정수에서 one-hot 벡터로 바꾸어 손실 함수를 선택하기 위해"
    ]
  },
  "unit14-10": {
    answer: "특정 영역의 값을 하나로 요약해 크기를 줄이고 중요한 특징을 남긴다.",
    distractors: [
      "모델의 정답을 사람이 직접 입력해 학습 없이 정확도를 계산한다.",
      "합성곱 필터의 개수를 늘려 feature map의 공간 크기를 항상 키운다.",
      "손실 함수를 비활성화해 epoch마다 검증 성능을 숨긴다."
    ]
  }
};

global.window = global;
global.QUESTION_UNITS = [];

for (const unitNumber of unitNumbers) {
  require(path.join(questionsDir, `unit${unitNumber}.js`));
}

for (const unit of global.QUESTION_UNITS) {
  unit.questions.forEach((question) => {
    question.explanation = question.explanation.replace(/\s+\d+주차 추가 10문제:.*$/, "").trim();

    const revision = revisions[question.id];
    if (revision) {
      question.choices = [revision.answer, ...revision.distractors];
      question.answerIndex = 0;
    }
  });

  const targetPositions = makeBalancedPositions(unit.questions.length, `${unit.id}-positions`);
  unit.questions.forEach((question, index) => {
    shuffleQuestion(question, targetPositions[index], `${question.id}-choices`);
  });

  const filePath = path.join(questionsDir, `${unit.id}.js`);
  const contents = [
    "window.QUESTION_UNITS = window.QUESTION_UNITS || [];",
    "",
    `window.QUESTION_UNITS.push(${JSON.stringify(unit, null, 2)});`,
    ""
  ].join("\n");

  fs.writeFileSync(filePath, contents);
}

for (const unit of global.QUESTION_UNITS) {
  const counts = [0, 0, 0, 0];
  unit.questions.forEach((question) => {
    counts[question.answerIndex] += 1;
  });
  console.log(`${unit.title}: ${counts.map((count, index) => `${index + 1}번=${count}`).join(", ")}`);
}

function shuffleQuestion(question, targetPosition, seed) {
  const correctChoice = question.choices[question.answerIndex];
  const wrongChoices = question.choices.filter((_, index) => index !== question.answerIndex);
  const shuffledWrongChoices = shuffle(wrongChoices, seed);
  const nextChoices = [];

  for (let index = 0; index < 4; index += 1) {
    nextChoices[index] = index === targetPosition ? correctChoice : shuffledWrongChoices.shift();
  }

  question.choices = nextChoices;
  question.answerIndex = targetPosition;
}

function makeBalancedPositions(length, seed) {
  const positions = [];
  for (let index = 0; index < length; index += 1) {
    positions.push(index % 4);
  }
  return shuffle(positions, seed);
}

function shuffle(values, seed) {
  const result = [...values];
  let state = hashSeed(seed);

  for (let index = result.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function hashSeed(seed) {
  let hash = 2166136261;
  for (const char of seed) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
