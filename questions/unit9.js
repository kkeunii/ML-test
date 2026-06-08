window.QUESTION_UNITS = window.QUESTION_UNITS || [];

window.QUESTION_UNITS.push({
  "id": "unit9",
  "title": "9단원",
  "questions": [
    {
      "id": "unit9-01",
      "question": "훈련 데이터, 검증 데이터, 테스트 데이터의 역할 설명으로 가장 적절한 것은?",
      "choices": [
        "훈련 데이터는 최종 성능 평가에만 사용한다.",
        "검증 데이터는 모델 선택과 튜닝 과정에서 사용한다.",
        "테스트 데이터는 하이퍼파라미터를 반복 조정할 때 사용한다.",
        "검증 데이터와 테스트 데이터는 같은 의미이므로 구분할 필요가 없다."
      ],
      "answerIndex": 1,
      "explanation": "훈련 데이터는 모델 학습에, 검증 데이터는 모델 선택·튜닝에, 테스트 데이터는 최종 성능 평가에 사용한다. 테스트 데이터는 본고사처럼 마지막에 한 번 확인하는 용도에 가깝다."
    },
    {
      "id": "unit9-02",
      "question": "테스트 데이터를 따로 남겨두는 가장 중요한 이유는?",
      "choices": [
        "모델이 학습을 더 빨리 하도록 하기 위해",
        "모델의 최종 일반화 성능을 공정하게 평가하기 위해",
        "데이터의 행 개수를 줄여 계산량을 줄이기 위해",
        "결측치를 자동으로 제거하기 위해"
      ],
      "answerIndex": 1,
      "explanation": "테스트 데이터는 학습이나 튜닝 과정에 직접 사용하지 않고, 최종적으로 새로운 데이터에 모델이 얼마나 잘 작동하는지 확인하는 데 사용한다."
    },
    {
      "id": "unit9-03",
      "question": "K겹 교차검증에 대한 설명으로 옳은 것은?",
      "choices": [
        "전체 데이터를 한 번만 나누어 학습한다.",
        "K개의 모델을 만든 뒤 가장 복잡한 모델만 선택한다.",
        "데이터를 K개 부분으로 나누고, 검증 부분을 바꿔가며 반복 평가한다.",
        "테스트 데이터를 여러 번 사용하여 성능을 높인다."
      ],
      "answerIndex": 2,
      "explanation": "K겹 교차검증은 학습 데이터 내부에서 검증 역할을 하는 fold를 바꿔가며 여러 번 평가하고, 그 평균 성능을 이용해 모델을 판단한다."
    },
    {
      "id": "unit9-04",
      "question": "Stratified K-Fold가 특히 필요한 상황은?",
      "choices": [
        "모든 특성이 숫자형일 때",
        "클래스 비율이 불균형할 때",
        "데이터에 결측치가 전혀 없을 때",
        "모델이 회귀 모델일 때"
      ],
      "answerIndex": 1,
      "explanation": "Stratified K-Fold는 각 fold에 전체 데이터의 클래스 비율이 비슷하게 반영되도록 나누는 방법이다. 생존/비생존, 사기/정상처럼 클래스 비율이 불균형한 경우 유용하다."
    },
    {
      "id": "unit9-05",
      "question": "정확도 Accuracy만으로 모델을 평가하면 위험한 경우는?",
      "choices": [
        "모든 클래스가 비슷한 비율로 존재할 때",
        "데이터가 매우 작고 특성이 하나뿐일 때",
        "특정 클래스가 대부분을 차지하는 불균형 데이터일 때",
        "회귀 문제에서 평균제곱오차를 계산할 때"
      ],
      "answerIndex": 2,
      "explanation": "예를 들어 전체의 98%가 정상인 데이터에서 모두 정상이라고 예측해도 정확도는 98%가 된다. 하지만 중요한 소수 클래스는 전혀 잡지 못할 수 있다."
    },
    {
      "id": "unit9-06",
      "question": "암 환자 판별처럼 실제 양성을 음성으로 놓치면 위험한 문제에서 더 중요하게 봐야 할 지표는?",
      "choices": [
        "Recall",
        "Precision",
        "Fall-out",
        "데이터 개수"
      ],
      "answerIndex": 0,
      "explanation": "Recall은 실제 양성 중에서 양성으로 맞춘 비율이다. 암 환자를 놓치면 위험하므로 실제 양성을 최대한 찾아내는 재현율이 중요하다."
    },
    {
      "id": "unit9-07",
      "question": "스팸메일 필터처럼 정상 메일을 스팸으로 잘못 분류하면 곤란한 경우에 상대적으로 중요한 지표는?",
      "choices": [
        "Recall",
        "Precision",
        "데이터 크기",
        "Epoch"
      ],
      "answerIndex": 1,
      "explanation": "Precision은 양성이라고 예측한 것 중 실제 양성의 비율이다. 스팸이라고 분류한 메일이 정말 스팸인지가 중요하므로 정밀도가 중요해진다."
    },
    {
      "id": "unit9-08",
      "question": "F1-score에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "Accuracy와 AUC를 단순 평균한 값이다.",
        "Precision과 Recall을 함께 고려하는 지표이다.",
        "오직 Recall만 높으면 항상 최대가 된다.",
        "회귀 모델에서만 사용하는 지표이다."
      ],
      "answerIndex": 1,
      "explanation": "F1-score는 Precision과 Recall의 조화평균 형태로, 두 값이 모두 균형 있게 높을 때 좋은 값을 가진다."
    },
    {
      "id": "unit9-09",
      "question": "ROC 곡선과 AUC에 대한 설명으로 옳은 것은?",
      "choices": [
        "ROC 곡선의 x축은 Precision, y축은 Accuracy이다.",
        "AUC는 0에 가까울수록 좋은 모델이다.",
        "ROC 곡선은 FPR 변화에 따른 TPR 변화를 나타낸다.",
        "ROC 곡선은 회귀 문제에서만 사용한다."
      ],
      "answerIndex": 2,
      "explanation": "ROC 곡선은 x축에 FPR, y축에 TPR, 즉 Recall을 놓고 그린다. 일반적으로 AUC가 1에 가까울수록 분류 성능이 좋다."
    },
    {
      "id": "unit9-10",
      "question": "탐색적 데이터 분석 EDA의 설명으로 가장 적절한 것은?",
      "choices": [
        "이미 정해진 가설만 통계적으로 검증하는 절차이다.",
        "데이터의 패턴, 이상치, 변수 관계를 여러 관점에서 살펴보는 과정이다.",
        "모델 학습이 끝난 뒤 테스트 정확도만 계산하는 과정이다.",
        "데이터 수집 전에 정답 라벨을 만드는 과정이다."
      ],
      "answerIndex": 1,
      "explanation": "EDA는 명확한 가설이 확정되기 전 데이터를 다양한 방식으로 살펴보며 패턴, 이상치, 변수 간 관계, 분석 가능성을 탐색하는 과정이다. 10주차 추가 10문제: 하이퍼파라미터, PIMA, 앙상블, HAR"
    },
    {
      "id": "unit9-11",
      "question": "(검증/평가) 훈련 데이터와 테스트 데이터를 분리하는 가장 직접적인 이유로 옳은 것은?",
      "choices": [
        "학습 속도를 빠르게 하기 위해서만 분리한다.",
        "모델이 보지 않은 데이터에서 과적합 여부와 일반화 성능을 평가하기 위해 분리한다.",
        "결측치를 제거하기 위해 반드시 분리한다.",
        "범주형 변수를 수치형으로 바꾸기 위해 분리한다."
      ],
      "answerIndex": 1,
      "explanation": "테스트 데이터는 학습 과정에 사용하지 않고, 최종적으로 모델이 새로운 데이터에 얼마나 잘 일반화되는지 확인하는 데 사용한다."
    },
    {
      "id": "unit9-12",
      "question": "(검증/평가) 검증 세트(validation set)에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "최종 성능을 한 번만 발표하기 위해 끝까지 숨겨 두는 데이터이다.",
        "훈련 과정에서 모델 선택과 튜닝을 위해 사용하는 모의고사 성격의 데이터이다.",
        "라벨이 없는 비지도학습 데이터이다.",
        "반드시 테스트 세트보다 커야 한다."
      ],
      "answerIndex": 1,
      "explanation": "검증 세트는 하이퍼파라미터와 모델 선택에 활용하고, 테스트 세트는 최종 성능 추정에 남겨 두는 것이 바람직하다."
    },
    {
      "id": "unit9-13",
      "question": "(검증/평가) K 겹 교차검증(K-fold cross validation)의 핵심 아이디어로 옳은 것은?",
      "choices": [
        "데이터를 K 개 모델에 동시에 넣고 평균 예측값만 사용한다.",
        "훈련 데이터를 K 개 부분으로 나누어 각 부분을 한 번씩 검증용으로 사용하며 반복 학습한다.",
        "테스트 데이터를 K 번 복사해 학습한다.",
        "라벨을 K 개의 클래스로 강제로 바꾼다."
      ],
      "answerIndex": 1,
      "explanation": "K-fold 는 훈련/검증 분할을 여러 번 바꾸어 성능을 평균내므로 단일 분할의 우연성을 줄인다."
    },
    {
      "id": "unit9-14",
      "question": "(검증/평가) 일반 KFold 를 클래스 불균형 데이터에 그대로 적용할 때 생길 수 있는 문제로 옳은 것은?",
      "choices": [
        "모든 폴드가 항상 같은 클래스 비율을 보장한다.",
        "어떤 폴드에는 특정 클래스가 지나치게 적거나 많아 평가가 불안정해질 수 있다.",
        "KFold 는 분류 문제에는 사용할 수 없다.",
        "KFold 는 반드시 정확도를 100%로 만든다."
      ],
      "answerIndex": 1,
      "explanation": "타이타닉 예시처럼 전체 생존/비생존 비율이 50:50 이 아니면 폴드마다 클래스 비율이 흔들릴 수 있다."
    },
    {
      "id": "unit9-15",
      "question": "(검증/평가) StratifiedKFold 를 사용하는 주된 이유로 가장 적절한 것은?",
      "choices": [
        "각 폴드의 클래스 비율이 전체 데이터의 클래스 비율을 반영하도록 하기 위해서이다.",
        "결측치를 자동으로 평균값으로 채우기 위해서이다.",
        "로지스틱 회귀의 solver 를 자동으로 선택하기 위해서이다.",
        "특성 스케일링을 생략하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "StratifiedKFold 는 불균형 클래스 문제에서 각 폴드의 라벨 분포가 비슷해지도록 나누어 평가 안정성을 높인다."
    },
    {
      "id": "unit9-16",
      "question": "(타이타닉 코드) 다음 코드의 목적은 무엇인가?\nfrom sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\nle.fit(titanic['sex'])\ntitanic['gender'] = le.transform(titanic['sex'])",
      "choices": [
        "성별 문자열을 숫자 라벨로 변환해 gender 컬럼을 만든다.",
        "성별 컬럼의 결측치를 평균값으로 채운다.",
        "성별에 따라 데이터를 훈련/테스트로 나눈다.",
        "성별 컬럼을 표준화하여 평균 0, 표준편차 1 로 만든다."
      ],
      "answerIndex": 0,
      "explanation": "LabelEncoder 는 male/female 같은 문자열 범주를 모델이 사용할 수 있는 정수 값으로 변환한다."
    },
    {
      "id": "unit9-17",
      "question": "(타이타닉 전처리) titanic = titanic[titanic['age'].notnull()]와 같은 코드를 쓰는 이유로 가장 적절한 것은?",
      "choices": [
        "age 가 0 인 행만 남기기 위해서이다.",
        "age 결측치가 없는 행만 남겨 모델 입력 오류를 줄이기 위해서이다.",
        "age 컬럼을 문자열로 바꾸기 위해서이다.",
        "age 컬럼을 라벨로 사용하기 위해서이다."
      ],
      "answerIndex": 1,
      "explanation": "강의에서는 age 와 fare 의 결측치를 가진 행을 제외한 뒤 특성과 라벨을 추출했다."
    },
    {
      "id": "unit9-18",
      "question": "(타이타닉 특성/라벨) 타이타닉 로지스틱 회귀 예시에서 라벨 y 로 사용한 컬럼은?",
      "choices": [
        "pclass",
        "gender",
        "survived",
        "fare"
      ],
      "answerIndex": 2,
      "explanation": "survived 는 생존 여부를 나타내는 정답 라벨이고, pclass, age, sibsp, parch, fare, gender 등이 특성으로 사용되었 다."
    },
    {
      "id": "unit9-19",
      "question": "(타이타닉 전처리) StandardScaler 를 적용하는 목적에 가장 가까운 것은?",
      "choices": [
        "모든 특성을 같은 이름으로 바꾼다.",
        "특성들의 평균과 분산 규모를 조정해 모델 학습이 특정 스케일에 과도하게 좌우되지 않도록 한다.",
        "라벨을 원-핫 인코딩한다.",
        "테스트 데이터를 삭제한다."
      ],
      "answerIndex": 1,
      "explanation": "StandardScaler 는 평균 0, 표준편차 1 에 가까운 스케일로 변환하는 전처리 도구이다."
    },
    {
      "id": "unit9-20",
      "question": "(교차검증 코드) 다음 반복문에서 train_idx 와 test_idx 의 역할로 옳은 것은?\nfor train_idx, test_idx in kfold.split(X_ss):\nX_train, X_test = X_ss[train_idx], X_ss[test_idx]",
      "choices": [
        "훈련에 사용할 행 인덱스와 검증에 사용할 행 인덱스를 제공한다.",
        "각 특성의 이름을 제공한다.",
        "정확도와 재현율을 제공한다.",
        "결측치를 가진 행 번호만 제공한다."
      ],
      "answerIndex": 0,
      "explanation": "split()은 각 폴드에서 훈련용 행과 검증용 행의 인덱스를 반환한다."
    },
    {
      "id": "unit9-21",
      "question": "(교차검증 코드) cross_val_score(log_reg_kf, X_ss, y, scoring='accuracy', cv=5)의 의미로 옳은 것은?",
      "choices": [
        "5 개의 모델을 모두 합쳐 하나의 앙상블을 만든다.",
        "5 겹 교차검증으로 정확도 점수를 계산한다.",
        "테스트 세트를 5 배로 늘린다.",
        "정확도 대신 AUC 만 계산한다."
      ],
      "answerIndex": 1,
      "explanation": "cross_val_score 는 반복문 없이 지정한 cv 수만큼 교차검증 점수를 반환한다."
    },
    {
      "id": "unit9-22",
      "question": "(평가지표) 정확도(accuracy)의 공식으로 옳은 것은?",
      "choices": [
        "TP/(TP+FP)",
        "TP/(TP+FN)",
        "(TP+TN)/(TP+TN+FP+FN)",
        "FP/(FP+TN)"
      ],
      "answerIndex": 2,
      "explanation": "정확도는 전체 표본 중 맞게 예측한 비율이므로 TP 와 TN 을 전체 개수로 나눈다."
    },
    {
      "id": "unit9-23",
      "question": "(오차행렬) 실제 Negative 인 데이터를 Positive 라고 잘못 예측한 경우는?",
      "choices": [
        "TP",
        "FN",
        "TN",
        "FP"
      ],
      "answerIndex": 3,
      "explanation": "False Positive 는 실제 음성인데 모델이 양성이라고 예측한 경우이다."
    },
    {
      "id": "unit9-24",
      "question": "(평가지표) 정밀도(precision)에 대한 설명으로 옳은 것은?",
      "choices": [
        "실제 양성 중 양성으로 맞춘 비율이다.",
        "양성이라고 예측한 것 중 실제 양성의 비율이다.",
        "전체 데이터 중 맞춘 비율이다.",
        "실제 음성 중 양성으로 잘못 예측한 비율이다."
      ],
      "answerIndex": 1,
      "explanation": "Precision = TP/(TP+FP)이다. 모델이 양성이라고 판단한 결과의 신뢰도를 본다."
    },
    {
      "id": "unit9-25",
      "question": "(평가지표) 재현율(recall, TPR)에 대한 설명으로 옳은 것은?",
      "choices": [
        "실제 양성 중 양성으로 맞춘 비율이다.",
        "양성 예측 중 실제 양성 비율이다.",
        "실제 음성 중 음성으로 맞춘 비율이다.",
        "전체 데이터 중 틀린 비율이다."
      ],
      "answerIndex": 0,
      "explanation": "Recall = TP/(TP+FN)이며 실제 양성을 놓치지 않는 정도를 의미한다."
    },
    {
      "id": "unit9-26",
      "question": "(평가지표) Fall-out(FPR)의 공식으로 옳은 것은?",
      "choices": [
        "FP/(FP+TN)",
        "TP/(TP+FP)",
        "TN/(TN+FP)",
        "FN/(FN+TP)"
      ],
      "answerIndex": 0,
      "explanation": "Fall-out 은 실제 음성 중에서 양성으로 잘못 예측한 비율이다."
    },
    {
      "id": "unit9-27",
      "question": "(임계값) 분류 임계값(threshold)을 낮출 때 일반적으로 나타나는 현상으로 가장 적절한 것은?",
      "choices": [
        "양성으로 예측되는 표본이 줄어 재현율이 항상 감소한다.",
        "양성으로 예측되는 표본이 늘어 재현율은 올라가지만 Fall-out 도 커질 수 있다.",
        "정밀도와 재현율이 항상 동시에 1 이 된다.",
        "AUC 가 무조건 0.5 가 된다."
      ],
      "answerIndex": 1,
      "explanation": "임계값을 낮추면 양성 판정이 쉬워져 양성을 덜 놓치지만, 음성을 양성으로 잘못 잡는 경우도 늘 수 있다."
    },
    {
      "id": "unit9-28",
      "question": "(평가지표 적용) 암 환자 판별처럼 실제 양성을 음성으로 판단하면 큰 문제가 되는 상황에서 특히 중요한 지표는?",
      "choices": [
        "Recall",
        "Fall-out",
        "모델 파라미터 개수",
        "학습 시간"
      ],
      "answerIndex": 0,
      "explanation": "암 진단처럼 양성 누락이 치명적인 경우에는 FN 을 줄이는 재현율이 중요하다."
    },
    {
      "id": "unit9-29",
      "question": "(평가지표 적용) 스팸메일 필터링처럼 실제 음성을 양성으로 잘못 판단하는 것을 줄이고 싶을 때 더 중요하게 볼 수 있 는 지표는?",
      "choices": [
        "Precision",
        "Epoch",
        "K 값",
        "DPI"
      ],
      "answerIndex": 0,
      "explanation": "정밀도는 양성 판정 결과가 얼마나 실제 양성인지 보는 지표라 정상 메일을 스팸으로 보내는 오류를 줄이는 데 중요하 다."
    },
    {
      "id": "unit9-30",
      "question": "(F1 score) F1-score 에 대한 설명으로 옳은 것은?",
      "choices": [
        "정확도와 AUC 의 산술평균이다.",
        "정밀도와 재현율을 결합한 지표이며 둘 중 하나만 높으면 크게 높아지기 어렵다.",
        "Fall-out 만을 이용해 계산한다.",
        "회귀 모델의 평균제곱오차이다."
      ],
      "answerIndex": 1,
      "explanation": "F1 = 2*precision*recall/(precision+recall)로 두 지표가 균형 있게 높을수록 커진다."
    },
    {
      "id": "unit9-31",
      "question": "(ROC/AUC) ROC 곡선의 x 축과 y 축으로 옳은 것은?",
      "choices": [
        "x 축 Precision, y 축 Recall",
        "x 축 FPR, y 축 TPR",
        "x 축 Accuracy, y 축 F1",
        "x 축 Loss, y 축 Epoch"
      ],
      "answerIndex": 1,
      "explanation": "ROC 는 FPR 이 변할 때 TPR 이 어떻게 변하는지 그린 곡선이다."
    },
    {
      "id": "unit9-32",
      "question": "(ROC/AUC) AUC 에 대한 설명으로 옳은 것은?",
      "choices": [
        "ROC 곡선 아래 면적이며 일반적으로 1 에 가까울수록 좋다.",
        "항상 0 이어야 좋은 모델이다.",
        "정확도와 동일한 값이다.",
        "회귀 모델에서만 쓰인다."
      ],
      "answerIndex": 0,
      "explanation": "무작위 분류기의 대각선 기준 AUC 는 약 0.5 이며, 완벽한 분류에 가까울수록 1 에 가까워진다."
    },
    {
      "id": "unit9-33",
      "question": "(임계값 코드) Binarizer(threshold=custom_threshold).fit(pred_proba_1).transform(pred_proba_1)의 역할로 옳은 것은?",
      "choices": [
        "확률값을 지정한 임계값 기준으로 0/1 예측값으로 바꾼다.",
        "라벨을 문자열로 복원한다.",
        "교차검증 폴드 수를 정한다.",
        "AUC 를 직접 계산한다."
      ],
      "answerIndex": 0,
      "explanation": "predict_proba 로 얻은 양성 확률을 사용자 지정 threshold 에 따라 클래스 예측값으로 변환할 때 사용한다."
    },
    {
      "id": "unit9-34",
      "question": "(PR curve 코드) precision_recall_curve(y_test, pred_proba_1)이 반환하는 값의 조합으로 옳은 것은?",
      "choices": [
        "정확도, F1, AUC",
        "정밀도 배열, 재현율 배열, 임계값 배열",
        "훈련 인덱스, 테스트 인덱스",
        "평균, 표준편차, 중앙값"
      ],
      "answerIndex": 1,
      "explanation": "precision_recall_curve 는 threshold 변화에 따른 precision 과 recall 을 계산해 곡선을 그릴 수 있게 한다."
    },
    {
      "id": "unit9-35",
      "question": "(검증 전략) 교차검증을 수행한 후에도 별도 테스트 세트를 남겨 두어야 하는 이유로 가장 적절한 것은?",
      "choices": [
        "검증 결과가 마음에 들 때마다 테스트 성능을 기준으로 모델을 계속 고치기 위해서이다.",
        "모든 학습/검증/튜닝이 끝난 뒤 최종 일반화 성능을 추정하기 위해서이다.",
        "테스트 세트에 라벨이 없기 때문이다.",
        "교차검증은 항상 과소적합을 만든다."
      ],
      "answerIndex": 1,
      "explanation": "테스트 세트는 최종 성능 추정용으로 사용해야 하며, 반복적인 튜닝 기준으로 쓰면 성능 추정이 낙관적으로 편향될 수 있다."
    },
    {
      "id": "unit9-36",
      "question": "(평가 프로세스) 머신러닝 분류 모델 평가 과정에 가장 적절한 흐름은?",
      "choices": [
        "데이터 수집/가공/변환 - 모델 학습/예측 - 모델 평가",
        "모델 평가 - 라벨 삭제 - 데이터 폐기",
        "AUC 계산 - 데이터 수집 - 특성 삭제",
        "시각화 - 폰트 설치 - 라벨 인코더"
      ],
      "answerIndex": 0,
      "explanation": "강의에서는 머신러닝을 데이터 가공/변환, 학습/예측, 평가의 프로세스로 설명했다."
    },
    {
      "id": "unit9-37",
      "question": "(ROC/AUC) ROC 그래프에서 기울기 1 의 대각선에 가까운 곡선은 일반적으로 무엇을 의미하는가?",
      "choices": [
        "완벽한 분류기",
        "무작위 추측에 가까운 낮은 성능",
        "재현율이 항상 0",
        "정밀도가 항상 1"
      ],
      "answerIndex": 1,
      "explanation": "대각선은 random guess 기준선이므로 곡선이 그 근처에 있으면 분류력이 낮다고 본다."
    },
    {
      "id": "unit9-38",
      "question": "(임계값 표 해석) 강의의 threshold 예시에서 threshold=0.8 일 때의 특징으로 옳은 것은?",
      "choices": [
        "Recall 이 1.00 이고 Fall-out 도 1.00 이다.",
        "Precision 이 1.00, Fall-out 이 0.00 으로 높아진 정밀도 중심 결과가 나타난다.",
        "Accuracy 가 0.00 이다.",
        "F1-score 가 계산되지 않는다."
      ],
      "answerIndex": 1,
      "explanation": "예시 표에서 0.8 은 precision 1.00, fall-out 0.00, accuracy 0.86, F1 0.80 으로 정밀도 중심 선택의 예가 된다."
    },
    {
      "id": "unit9-39",
      "question": "(타이타닉 평가 코드) roc_curve(y_test, pred_proba_1)가 계산하는 세 값으로 옳은 것은?",
      "choices": [
        "fpr, tpr, thresholds",
        "precision, recall, f1",
        "train_idx, test_idx, score",
        "mean, median, mode"
      ],
      "answerIndex": 0,
      "explanation": "ROC 곡선을 그리려면 FPR, TPR, threshold 배열이 필요하다."
    },
    {
      "id": "unit9-40",
      "question": "(평가지표) TPR 과 같은 의미로 쓰이는 지표는?",
      "choices": [
        "Precision",
        "Recall",
        "Fall-out",
        "Specificity"
      ],
      "answerIndex": 1,
      "explanation": "TPR(True Positive Rate)은 실제 양성 중 양성을 맞춘 비율이므로 Recall 과 같다."
    },
    {
      "id": "unit9-41",
      "question": "(EDA) 탐색적 데이터 분석(EDA)에 대한 정의로 옳은 것은?",
      "choices": [
        "이미 정해진 가설만 통계적으로 검정하는 과정",
        "명확한 가설이 확정되기 전 데이터를 여러 관점에서 보며 패턴, 이상치, 변수 관계를 탐색하는 과정",
        "모델의 가중치만 조정하는 과정",
        "데이터를 무조건 삭제하는 과정"
      ],
      "answerIndex": 1,
      "explanation": "EDA 는 모델링 전에 데이터가 무엇을 말하는지 폭넓게 살피는 과정이다."
    },
    {
      "id": "unit9-42",
      "question": "(CDA) 확증적 데이터 분석(CDA)에 대한 설명으로 옳은 것은?",
      "choices": [
        "이미 설정된 가설이나 연구 질문을 통계적으로 검증하는 과정",
        "라벨이 없는 데이터를 군집화하는 과정",
        "이미지를 회색조로 변환하는 과정",
        "모든 변수를 표준화하는 과정"
      ],
      "answerIndex": 0,
      "explanation": "CDA 는 EDA 와 달리 사전에 정한 가설 또는 연구 질문을 검증하는 성격이 강하다."
    },
    {
      "id": "unit9-43",
      "question": "(지하철 EDA 사례) 정자/판교역 하차 예측 사례의 데이터 수집 설명으로 옳은 것은?",
      "choices": [
        "100 만 명의 자동 승차 기록을 사용했다.",
        "발표자가 출근길 관찰을 통해 46 일, 322 명의 데이터를 기록했다.",
        "라벨 없이 이미지만 수집했다.",
        "서울시 범죄 데이터와 결합했다."
      ],
      "answerIndex": 1,
      "explanation": "강의 사례는 생활 속 문제를 관찰 데이터로 수집해 EDA 와 모델링으로 연결한 예이다."
    },
    {
      "id": "unit9-44",
      "question": "(데이터 윤리) 지하철 관찰 데이터 사례에서 데이터 윤리상 중요한 점으로 옳지 않은 것은?",
      "choices": [
        "특정 개인이나 집단을 식별하지 않아야 한다.",
        "개인정보 침해 가능성을 검토해야 한다.",
        "실제 서비스나 의사결정에 쓰려면 공정성 검토가 필요하다.",
        "관찰 데이터라면 개인 식별 가능성을 전혀 고려하지 않아도 된다."
      ],
      "answerIndex": 3,
      "explanation": "관찰 데이터라도 개인이나 집단 식별 가능성, 공정성, 프라이버시를 검토해야 한다."
    },
    {
      "id": "unit9-45",
      "question": "(EDA 시각화) Feature distribution plot 을 볼 때 주의할 점으로 가장 적절한 것은?",
      "choices": [
        "범주 수가 적을수록 무조건 좋은 모델이 된다.",
        "어떤 특징이 예측에 도움이 되는지, 너무 희소한 범주는 없는지, 모든 사람이 비슷한 변수는 아닌지 확인한다.",
        "그래프는 모델링과 무관하므로 보지 않는다.",
        "분포 그래프만 있으면 테스트 세트가 필요 없다."
      ],
      "answerIndex": 1,
      "explanation": "분포 그래프는 변수의 차별성, 희소 범주, 예측 가능성 등을 점검하는 데 쓰인다."
    },
    {
      "id": "unit9-46",
      "question": "(모델 기준선) 정자/판교역 하차 예측에서 모두 강남역 하차로 예측하면 accuracy 가 약 0.78 이 되는 이유는?",
      "choices": [
        "정자/판교역 하차자가 약 78%이기 때문이다.",
        "강남역 하차자가 약 78%이기 때문이다.",
        "모든 모델이 0.78 로 고정되기 때문이다.",
        "데이터가 78 개뿐이기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "데이터에서 정자/판교역 하차자는 22%, 강남역 하차자는 78%였으므로 다수 클래스를 찍어도 0.78 기준선이 나온다."
    },
    {
      "id": "unit9-47",
      "question": "(모델링 사례) 지하철 사례에서 비교한 모델 목록에 포함되지 않은 것은?",
      "choices": [
        "DecisionTreeClassifier",
        "RandomForestClassifier",
        "SVC",
        "Convolution2D 기반 CNN"
      ],
      "answerIndex": 3,
      "explanation": "사례에서는 트리, 랜덤포레스트, GBDT, 로지스틱 회귀, SVC, KNN, Naive Bayes, MLP 등을 비교했다."
    },
    {
      "id": "unit9-48",
      "question": "(EDA 해석) 정자/판교역 하차 예측 사례에서 주요 특징으로 정리된 조합에 가까운 것은?",
      "choices": [
        "복장, 좌석 위치, 행동",
        "위도, 경도, 날씨",
        "픽셀값, 필터, 패딩",
        "은닉층 수, optimizer, loss"
      ],
      "answerIndex": 0,
      "explanation": "강의는 행동, 복장, 좌석 위치가 자리앉기 예측에 중요한 feature 로 나타났다고 정리했다."
    },
    {
      "id": "unit9-49",
      "question": "(상관 시각화) Correlation heatmap 과 clustering by correlation 을 사용하는 이유로 가장 적절한 것은?",
      "choices": [
        "변수 간 관련성과 함께 묶이는 특징을 시각적으로 탐색하기 위해서이다.",
        "항상 최종 정확도를 100%로 만들기 위해서이다.",
        "모든 문자열을 숫자로 바꾸기 위해서이다.",
        "ROC AUC 를 직접 계산하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "상관 히트맵과 클러스터링은 변수 간 관계와 묶이는 패턴을 파악하는 EDA 도구이다."
    },
    {
      "id": "unit9-50",
      "question": "(EDA 사례 결론) 지하철 EDA 프로젝트에서 배울 수 있는 점으로 가장 적절한 것은?",
      "choices": [
        "생활 속 궁금증도 데이터 분석 문제로 정의하고, 수집-정제-탐색-모델링으로 연결할 수 있다.",
        "데이터 수집 없이 모델부터 만들면 된다.",
        "작은 데이터는 윤리 검토가 필요 없다.",
        "EDA 는 모델링 이후에만 수행한다."
      ],
      "answerIndex": 0,
      "explanation": "강의 결론은 문제 정의, 데이터 이해, EDA, 한계 해석의 중요성을 강조한다."
    }
  ]
});
