window.QUESTION_UNITS = window.QUESTION_UNITS || [];

window.QUESTION_UNITS.push({
  "id": "unit11",
  "title": "11단원",
  "questions": [
    {
      "id": "unit11-01",
      "question": "신용카드 사기 탐지 데이터에서 Accuracy만 보면 안 되는 가장 큰 이유는?",
      "choices": [
        "데이터에 숫자형 특성이 없기 때문이다.",
        "사기 거래 비율이 극도로 낮아 클래스 불균형이 심하기 때문이다.",
        "모든 모델의 Accuracy가 0이기 때문이다.",
        "사기 거래는 라벨이 없기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "사기 거래가 전체의 약 0.17% 수준이면 대부분을 정상으로 예측해도 정확도가 매우 높게 나올 수 있다. 따라서 Recall, Precision, F1, AUC 등을 함께 봐야 한다."
    },
    {
      "id": "unit11-02",
      "question": "신용카드 사기 탐지에서 Recall이 낮다는 것은 무엇을 의미할 가능성이 큰가?",
      "choices": [
        "정상 거래를 너무 많이 사기로 판단한다.",
        "실제 사기 거래를 많이 놓친다.",
        "모델이 과도하게 많은 특성을 사용한다.",
        "거래 금액이 모두 0이다."
      ],
      "answerIndex": 1,
      "explanation": "Recall은 실제 양성, 즉 실제 사기 거래 중 사기로 맞춘 비율이다. Recall이 낮으면 실제 사기를 정상으로 놓치는 경우가 많다는 뜻이다."
    },
    {
      "id": "unit11-03",
      "question": "데이터의 Amount 컬럼에 StandardScaler를 적용하는 이유로 적절한 것은?",
      "choices": [
        "거래 금액의 단위와 분포가 다른 특성들과 크게 다를 수 있기 때문이다.",
        "Amount를 정답 라벨로 바꾸기 위해서이다.",
        "모든 이상치를 자동으로 제거하기 위해서이다.",
        "클래스 불균형을 완전히 해결하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "Amount는 거래 금액이라 다른 V1, V2 등의 익명화 특성과 스케일이 다를 수 있다. 스케일링은 특성의 크기 차이를 조정하는 데 도움을 준다."
    },
    {
      "id": "unit11-04",
      "question": "Box plot에서 IQR의 의미로 옳은 것은?",
      "choices": [
        "최댓값과 최솟값의 차이",
        "평균과 중앙값의 차이",
        "75% 분위수와 25% 분위수의 차이",
        "이상치 개수와 정상치 개수의 차이"
      ],
      "answerIndex": 2,
      "explanation": "IQR은 Q3에서 Q1을 뺀 값이다. 일반적으로 Q1 - 1.5×IQR보다 작거나 Q3 + 1.5×IQR보다 큰 값을 이상치 후보로 본다."
    },
    {
      "id": "unit11-05",
      "question": "사기 탐지 데이터에서 이상치를 제거할 때 특히 조심해야 하는 이유는?",
      "choices": [
        "이상치는 항상 정상 거래이기 때문이다.",
        "사기 거래 자체가 희귀하고 극단적인 패턴을 가질 수 있기 때문이다.",
        "이상치를 제거하면 데이터가 반드시 증가하기 때문이다.",
        "이상치 제거는 회귀 문제에서만 가능하기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "사기 거래는 정상 거래와 다른 드문 패턴일 수 있다. 무작정 이상치를 제거하면 오히려 중요한 사기 사례를 잃을 수 있다."
    },
    {
      "id": "unit11-06",
      "question": "ROC Curve를 여러 모델에 대해 함께 그리는 이유로 가장 적절한 것은?",
      "choices": [
        "모델별 학습 시간을 비교하기 위해",
        "Threshold 변화에 따른 분류 성능을 시각적으로 비교하기 위해",
        "모델의 코드 길이를 비교하기 위해",
        "데이터의 결측치 개수를 비교하기 위해"
      ],
      "answerIndex": 1,
      "explanation": "ROC 곡선은 threshold 변화에 따라 TPR과 FPR이 어떻게 변하는지 보여준다. 여러 모델의 곡선을 함께 보면 어느 모델이 더 좋은 분류 성능을 보이는지 비교할 수 있다."
    },
    {
      "id": "unit11-07",
      "question": "나이팅게일의 로즈 다이어그램 사례가 데이터 시각화에서 중요한 이유는?",
      "choices": [
        "데이터를 예쁘게 꾸미는 것이 분석의 전부임을 보여주기 때문이다.",
        "시각화를 통해 문제 원인을 설득력 있게 전달하고 개선을 이끌 수 있음을 보여주기 때문이다.",
        "모든 데이터는 원형 차트로만 표현해야 함을 보여주기 때문이다.",
        "통계는 숫자 표로만 표현해야 함을 보여주기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "나이팅게일은 사망 원인 데이터를 시각화하여 위생 문제와 보급 문제를 설득력 있게 드러냈다. 시각화는 데이터 기반 의사소통의 중요한 도구이다."
    },
    {
      "id": "unit11-08",
      "question": "Pivot table을 사용하는 주된 목적은?",
      "choices": [
        "데이터의 모든 값을 무작위로 섞기 위해",
        "행과 열 기준을 바꾸어 데이터를 요약·재구성하기 위해",
        "모델의 정확도를 자동으로 높이기 위해",
        "이미지 데이터를 회색조로 바꾸기 위해"
      ],
      "answerIndex": 1,
      "explanation": "Pivot table은 긴 형태의 데이터를 분석하기 쉬운 표 형태로 바꿔준다. 서울시 범죄 데이터처럼 경찰서, 범죄 종류, 발생/검거 항목을 재구성할 때 유용하다."
    },
    {
      "id": "unit11-09",
      "question": "검거율 계산에서 NaN이나 inf가 발생할 수 있는 이유는?",
      "choices": [
        "문자열 데이터가 포함되어 있기 때문에",
        "발생 건수가 0인 값을 나누는 과정이 있기 때문에",
        "데이터가 너무 많기 때문에",
        "범죄 종류가 5개이기 때문에"
      ],
      "answerIndex": 1,
      "explanation": "검거율은 검거 건수 / 발생 건수로 계산한다. 발생 건수가 0이면 0으로 나누게 되어 inf가 나오거나, 0/0이면 NaN이 나올 수 있다."
    },
    {
      "id": "unit11-10",
      "question": "Folium을 이용한 지도 시각화의 장점으로 가장 적절한 것은?",
      "choices": [
        "데이터의 모든 이상치를 자동 제거한다.",
        "지역별 수치를 실제 지도 위에 표현해 공간적 패턴을 파악할 수 있다.",
        "모델 학습을 대신 수행한다.",
        "클래스 불균형을 해결한다."
      ],
      "answerIndex": 1,
      "explanation": "Folium은 지도 위에 데이터를 표현할 수 있는 도구이다. 범죄 발생 건수나 검거율처럼 지역과 관련된 데이터를 시각화할 때 유용하다. 12주차 추가 10문제: 결정나무, SVM, 클러스터링, 반도체 데이터"
    },
    {
      "id": "unit11-11",
      "question": "(신용카드 사기) Credit Card Fraud Detection 데이터의 Class 컬럼에 대한 설명으로 옳은 것은?",
      "choices": [
        "Class=1 은 사기 거래를 의미한다.",
        "Class=1 은 정상 거래를 의미한다.",
        "Class 는 거래 금액을 의미한다.",
        "Class 는 시간 정보를 의미한다."
      ],
      "answerIndex": 0,
      "explanation": "강의 자료에서 Class 는 사기 여부이며 1 이면 Fraud 이다."
    },
    {
      "id": "unit11-12",
      "question": "(클래스 불균형) 신용카드 사기 데이터에서 모델 평가 시 Accuracy 만 보면 위험한 이유는?",
      "choices": [
        "Fraud 비율이 약 0.172%로 극단적으로 작아 모두 정상으로 예측해도 정확도가 높게 보일 수 있기 때문이다.",
        "Accuracy 는 이진 분류에 사용할 수 없기 때문이다.",
        "정상 거래가 사기 거래보다 적기 때문이다.",
        "Accuracy 는 항상 0 이기 때문이다."
      ],
      "answerIndex": 0,
      "explanation": "극심한 불균형에서는 다수 클래스만 맞춰도 accuracy 가 높으므로 recall, precision, F1, AUC 등을 함께 봐야 한다."
    },
    {
      "id": "unit11-13",
      "question": "(데이터 특성) 신용카드 데이터에서 V1~V28 처럼 이름이 비식별화된 이유로 가장 적절한 것은?",
      "choices": [
        "금융 데이터의 기업 기밀과 개인정보 보호를 위해 특성 의미가 공개되지 않았기 때문이다.",
        "데이터가 모두 결측치이기 때문이다.",
        "모델이 문자열을 사용할 수 없기 때문이다.",
        "지도 시각화를 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "강의는 금융 데이터의 민감성 때문에 대부분의 특성 이름이 삭제되어 있다고 설명했다."
    },
    {
      "id": "unit11-14",
      "question": "(데이터 분리 코드) train_test_split(X, y, test_size=0.3, random_state=13, stratify=y)의 의미로 옳은 것은?",
      "choices": [
        "훈련/테스트를 7:3 으로 나누되 클래스 비율을 유지한다.",
        "훈련/테스트를 3:7 로 나누고 라벨을 삭제한다.",
        "모든 데이터를 훈련에만 사용한다.",
        "Class 컬럼을 평균값으로 대체한다."
      ],
      "answerIndex": 0,
      "explanation": "test_size=0.3 은 테스트 30%, stratify=y 는 라벨 분포 보존을 의미한다."
    },
    {
      "id": "unit11-15",
      "question": "(성능 함수) get_clf_eval(y_test, pred) 함수가 반환하도록 만든 지표 조합으로 옳은 것은?",
      "choices": [
        "accuracy, precision, recall, f1, roc_auc",
        "loss, optimizer, epoch, batch, dpi",
        "x 좌표, y 좌표, zoom, popup, marker",
        "centroid, inertia, cluster, k"
      ],
      "answerIndex": 0,
      "explanation": "강의에서는 재사용성을 위해 여러 분류 성능 지표를 계산하는 함수를 만들었다."
    },
    {
      "id": "unit11-16",
      "question": "(오차행렬) print_clf_eval 에서 confusion_matrix 를 함께 출력하는 이유로 가장 적절한 것은?",
      "choices": [
        "TP, FP, FN, TN 분포를 확인해 어떤 오류가 많은지 보기 위해서이다.",
        "그래프 색을 바꾸기 위해서이다.",
        "KMeans 중심점을 보기 위해서이다.",
        "라벨명을 한글로 바꾸기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "불균형 분류에서는 총 정확도보다 사기 거래를 얼마나 잡고 얼마나 잘못 경고하는지 오차행렬이 중요하다."
    },
    {
      "id": "unit11-17",
      "question": "(모델 비교) 강의의 초기 신용카드 사기 모델 비교에서 LightGBM 의 특징으로 가장 적절한 것은?",
      "choices": [
        "LogisticRegression 과 DecisionTree 보다 recall, F1, AUC 가 높은 결과를 보였다.",
        "정확도가 항상 0 이었다.",
        "라벨 없이 군집만 만들었다.",
        "정상 거래만 학습했다."
      ],
      "answerIndex": 0,
      "explanation": "표에서 LightGBM 은 precision 약 0.95, recall 약 0.77, F1 약 0.85, AUC 약 0.885 로 좋은 성능을 보였다."
    },
    {
      "id": "unit11-18",
      "question": "(로지스틱 회귀 코드) LogisticRegression(random_state=13, solver='liblinear')를 사용한 코드에 대한 설명으로 옳은 것은?",
      "choices": [
        "로지스틱 회귀 분류기를 만들고 훈련 데이터에 fit 한 뒤 테스트 데이터를 predict 한다.",
        "이미지를 28x28 로 리사이즈한다.",
        "서울시 지도에 choropleth 를 그린다.",
        "KMeans 중심점을 초기화한다."
      ],
      "answerIndex": 0,
      "explanation": "신용카드 사기 실습은 여러 분류 모델을 같은 방식으로 학습해 지표를 비교한다."
    },
    {
      "id": "unit11-19",
      "question": "(DecisionTree 코드) DecisionTreeClassifier(random_state=13, max_depth=3)에서 max_depth=3 의 의미로 옳은 것은?",
      "choices": [
        "트리 깊이를 3 으로 제한한다.",
        "클래스를 3 개로 만든다.",
        "테스트 비율을 3%로 한다.",
        "특성을 3 개만 남긴다."
      ],
      "answerIndex": 0,
      "explanation": "트리 깊이를 제한하면 과도하게 복잡한 규칙 생성을 줄일 수 있다."
    },
    {
      "id": "unit11-20",
      "question": "(RandomForest 코드) RandomForestClassifier(random_state=13, n_jobs=-1, n_estimators=100)에서\nn_estimators=100 은 무엇을 의미하는가?",
      "choices": [
        "랜덤포레스트를 구성하는 트리 개수를 100 개로 한다.",
        "테스트 데이터 비율을 100%로 한다.",
        "특성 수를 100 개로 줄인다.",
        "반복 epoch 을 100 으로 한다."
      ],
      "answerIndex": 0,
      "explanation": "n_estimators 는 랜덤포레스트의 결정나무 개수이다."
    },
    {
      "id": "unit11-21",
      "question": "(모델 비교 함수) get_result_pd(models, model_names, X_train, y_train, X_test, y_test)의 목적은?",
      "choices": [
        "여러 모델의 accuracy, precision, recall, f1, roc_auc 를 DataFrame 으로 비교하기 위해서이다.",
        "모든 모델을 하나의 CNN 으로 합치기 위해서이다.",
        "지도에 마커를 찍기 위해서이다.",
        "한글 폰트를 설치하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "여러 모델을 같은 기준으로 비교하기 위한 표를 만드는 함수이다."
    },
    {
      "id": "unit11-22",
      "question": "(ROC 코드) draw_roc_curve 에서 model.predict_proba(X_test)[:,1]을 사용하는 이유로 옳은 것은?",
      "choices": [
        "ROC 는 각 threshold 에서 TPR/FPR 을 계산하므로 양성 클래스 확률이 필요하다.",
        "ROC 는 항상 예측 라벨만 사용한다.",
        "ROC 는 KMeans 중심점만 필요하다.",
        "ROC 는 지도 경계 JSON 을 필요로 한다."
      ],
      "answerIndex": 0,
      "explanation": "ROC 곡선은 확률 점수의 threshold 변화에 따라 그려진다."
    },
    {
      "id": "unit11-23",
      "question": "(Amount 스케일링) Amount 컬럼에 StandardScaler 를 적용한 결과에 대한 강의의 결론으로 옳은 것은?",
      "choices": [
        "성능 변화가 거의 없었다.",
        "모든 모델의 recall 이 1 이 되었다.",
        "Class 불균형이 사라졌다.",
        "데이터가 0 행이 되었다."
      ],
      "answerIndex": 0,
      "explanation": "Amount 스케일링 후 다시 학습해도 큰 성능 변화는 보이지 않았다고 정리했다."
    },
    {
      "id": "unit11-24",
      "question": "(Box plot) 박스플롯에서 박스의 아래와 위 경계가 일반적으로 의미하는 것은?",
      "choices": [
        "최솟값과 최댓값",
        "1 사분위수(Q1)와 3 사분위수(Q3)",
        "평균과 표준편차",
        "TP 와 FP"
      ],
      "answerIndex": 1,
      "explanation": "박스는 Q1~Q3 범위를 나타내고, 중앙선은 median 을 나타낸다."
    },
    {
      "id": "unit11-25",
      "question": "(IQR) IQR(Interquartile Range)의 정의로 옳은 것은?",
      "choices": [
        "Q3 - Q1",
        "Q1 + Q3",
        "최댓값 - 최솟값",
        "평균 / 표준편차"
      ],
      "answerIndex": 0,
      "explanation": "IQR 은 75 번째 백분위수와 25 번째 백분위수의 차이이다."
    },
    {
      "id": "unit11-26",
      "question": "(Outlier) 박스플롯 기반 이상치 판단에서 일반적으로 쓰는 상한/하한 fence 는?",
      "choices": [
        "Q1 - 1.5*IQR, Q3 + 1.5*IQR",
        "평균 - 1.5, 평균 + 1.5",
        "0 과 1",
        "TP 와 TN"
      ],
      "answerIndex": 0,
      "explanation": "강의의 get_outlier 함수도 weight=1.5 를 사용해 IQR 기반 하한/상한을 계산했다."
    },
    {
      "id": "unit11-27",
      "question": "(Outlier 코드) 강의의 get_outlier(df, column, weight=1.5) 함수에서 fraud = df[df['Class']==1][column]로 시작한 이유로 가장 적절한 것은?",
      "choices": [
        "사기 거래(Class=1) 내부에서 해당 컬럼의 이상치를 찾기 위해서이다.",
        "정상 거래를 모두 삭제하기 위해서이다.",
        "Class 컬럼을 원-핫 인코딩하기 위해서이다.",
        "모든 컬럼명을 바꾸기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "사기 거래의 이상치 패턴이 모델 성능에 영향을 줄 수 있어 Class=1 데이터 기준으로 이상치 인덱스를 찾았다."
    },
    {
      "id": "unit11-28",
      "question": "(Outlier 제거) V14 컬럼 이상치 제거 예시에서 raw_data_copy.shape 가 (284807, 29)에서 (284803, 29)로 변 한 의미는?",
      "choices": [
        "4 개의 이상치 행을 제거했다.",
        "4 개의 컬럼을 제거했다.",
        "데이터가 4 배 증가했다.",
        "Class 라벨이 모두 사라졌다."
      ],
      "answerIndex": 0,
      "explanation": "get_outlier 결과로 나온 4 개 인덱스를 drop 하여 행 수가 4 줄었다."
    },
    {
      "id": "unit11-29",
      "question": "(Outlier 성능) V14 이상치 제거 후 재학습 결과의 전반적 해석으로 가장 적절한 것은?",
      "choices": [
        "LightGBM 의 recall 과 AUC 가 개선되는 효과가 나타났다.",
        "모든 모델이 정확도 0 이 되었다.",
        "이상치 제거는 언제나 성능을 악화시킨다.",
        "결측치가 모두 증가했다."
      ],
      "answerIndex": 0,
      "explanation": "강의 표에서는 LightGBM 의 recall 이 약 0.808, AUC 가 약 0.904 로 개선된 결과를 보였다."
    },
    {
      "id": "unit11-30",
      "question": "(이상치 주의) 이상치 제거에 대한 바람직한 태도로 옳은 것은?",
      "choices": [
        "무조건 모든 이상치를 삭제한다.",
        "도메인 의미와 성능 변화를 확인하면서 신중히 적용한다.",
        "이상치는 라벨과 항상 무관하다.",
        "이상치를 제거하면 검증이 필요 없다."
      ],
      "answerIndex": 1,
      "explanation": "이상치가 중요한 신호일 수도 있으므로 원인과 평가 결과를 함께 봐야 한다."
    },
    {
      "id": "unit11-31",
      "question": "(시각화 역사) 나이팅게일의 로즈 다이어그램 사례가 보여주는 핵심은?",
      "choices": [
        "시각화가 가설을 검증하고 문제를 설득력 있게 표현하는 도구가 될 수 있다.",
        "지도 시각화에는 항상 CNN 이 필요하다.",
        "모든 데이터는 표로만 봐야 한다.",
        "시각화는 모델 학습 이후 금지된다."
      ],
      "answerIndex": 0,
      "explanation": "나이팅게일은 위생 개선과 보급 물자 부족 문제를 데이터 시각화로 표현했다."
    },
    {
      "id": "unit11-32",
      "question": "(시각화 데이터) 서울시 범죄 현황 분석 데이터의 구조로 옳은 것은?",
      "choices": [
        "경찰서별로 죄종 5 가지에 대해 발생과 검거 수치가 따로 저장되어 있었다.",
        "모든 행이 이미지 픽셀이었다.",
        "Class=1 Fraud 만 존재했다.",
        "라벨이 없는 동물 사진 데이터였다."
      ],
      "answerIndex": 0,
      "explanation": "원본은 경찰서, 죄종, 발생/검거, 건수 형태라 경찰서별/구별로 재구성이 필요했다."
    },
    {
      "id": "unit11-33",
      "question": "(pivot_table) crime_raw_data.pivot_table(index='구분', columns=['죄종','발생검거'], aggfunc='sum')의 목 적은?",
      "choices": [
        "경찰서별 범죄 발생/검거 현황을 다중 컬럼 표로 정리하기 위해서이다.",
        "이미지를 회색조로 바꾸기 위해서이다.",
        "로지스틱 회귀 모델을 학습하기 위해서이다.",
        "데이터를 무작위로 7:3 분리하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "pivot_table 은 긴 형태의 데이터를 경찰서별 범죄 유형/발생검거 컬럼 구조로 바꾸는 데 쓰였다."
    },
    {
      "id": "unit11-34",
      "question": "(MultiIndex) pivot_table 후 columns 가 MultiIndex 가 되는 상황에 대한 처리로 옳은 것은?",
      "choices": [
        "의미 없는 상위 level 을 drop 하고 필요한 level 들을 결합해 단일 컬럼명으로 정리할 수 있다.",
        "MultiIndex 는 절대 수정할 수 없다.",
        "모든 컬럼을 삭제해야 한다.",
        "라벨 인코더로만 해결할 수 있다."
      ],
      "answerIndex": 0,
      "explanation": "강의에서는 건수 level 을 제거하고 '강간,추행검거' 같은 단일 컬럼명으로 합쳤다."
    },
    {
      "id": "unit11-35",
      "question": "(Dictionary) 경찰서 이름을 서울시 구 이름으로 바꾸기 위해 Dictionary 를 사용한 이유로 가장 적절한 것은?",
      "choices": [
        "여러 경찰서 이름을 해당 구 이름에 매핑하기 위해서이다.",
        "모델 정확도를 자동 계산하기 위해서이다.",
        "이미지를 28x28 로 줄이기 위해서이다.",
        "AUC 를 계산하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "예를 들어 강남구에는 강남, 수서 등이 매핑될 수 있어 dictionary 로 변환했다."
    },
    {
      "id": "unit11-36",
      "question": "(구별 집계) 구 이름을 붙인 후 어떤 구에 경찰서가 두 개 이상 있을 때 필요한 처리로 옳은 것은?",
      "choices": [
        "구를 index 로 다시 pivot_table 하고 sum 으로 합산한다.",
        "해당 구 데이터를 모두 삭제한다.",
        "문자열을 모두 0 으로 바꾼다.",
        "ROC 곡선을 그린다."
      ],
      "answerIndex": 0,
      "explanation": "구 단위 분석을 위해 같은 구에 속한 경찰서 수치를 합산해야 한다."
    },
    {
      "id": "unit11-37",
      "question": "(검거율 계산) 검거율 = 검거/발생 계산 시 NaN 또는 inf 가 생길 수 있는 이유로 옳은 것은?",
      "choices": [
        "발생 건수가 0 인 범죄에 대해 나누기를 수행하기 때문이다.",
        "한글 폰트를 설치하지 않았기 때문이다.",
        "모델이 과적합되었기 때문이다.",
        "지도 경계선이 없기 때문이다."
      ],
      "answerIndex": 0,
      "explanation": "0/0 은 NaN, 양수/0 은 inf 가 될 수 있어 replace 와 fillna 처리가 필요했다."
    },
    {
      "id": "unit11-38",
      "question": "(검거율 보정) 강의에서 NaN, inf 값을 처리한 방식으로 옳은 것은?",
      "choices": [
        "np.inf 를 np.nan 으로 바꾼 뒤 fillna(0)을 적용했다.",
        "모든 값을 1000 으로 바꿨다.",
        "검거율 컬럼을 전부 삭제했다.",
        "훈련/테스트로 나누었다."
      ],
      "answerIndex": 0,
      "explanation": "무한대와 결측값을 분석 가능한 숫자로 정리하는 전처리이다."
    },
    {
      "id": "unit11-39",
      "question": "(검거율 보정) 검거율이 100 을 넘는 경우 강의에서 적용한 처리로 옳은 것은?",
      "choices": [
        "100 이상인 검거율은 100 으로 조정했다.",
        "무조건 0 으로 바꿨다.",
        "해당 구를 삭제했다.",
        "AUC 로 변환했다."
      ],
      "answerIndex": 0,
      "explanation": "검거율은 해석상 100%를 최대치로 보아 초과 값을 100 으로 제한했다."
    },
    {
      "id": "unit11-40",
      "question": "(시각화 스케일) 범죄 발생 건수 컬럼을 최대값으로 나누어 스케일을 조정한 이유로 옳은 것은?",
      "choices": [
        "발생 건수 간 수치 차이가 커서 heatmap 에서 비교 가능하게 만들기 위해서이다.",
        "정확도를 높이기 위해 라벨을 삭제하기 위해서이다.",
        "지도 경도와 위도를 만들기 위해서이다.",
        "RGB 채널을 만들기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "강의에서는 발생 건수는 최대치를 1 로, 검거율은 100 을 최고 수치로 두어 시각화용 데이터를 만들었다."
    },
    {
      "id": "unit11-41",
      "question": "(정렬 기준) 범죄 발생의 정렬 기준을 만들기 위해 생성한 컬럼은?",
      "choices": [
        "범죄 평균치",
        "epoch",
        "AUC score",
        "cluster_centers"
      ],
      "answerIndex": 0,
      "explanation": "강의에서는 강간/추행, 강도, 살인, 절도, 폭력 발생값의 평균으로 범죄 컬럼을 만들었다."
    },
    {
      "id": "unit11-42",
      "question": "(정렬 기준) 검거의 정렬 기준을 만들기 위해 생성한 컬럼은?",
      "choices": [
        "검거 평균치",
        "Amount_Scaled",
        "recall_curve",
        "Feature map"
      ],
      "answerIndex": 0,
      "explanation": "검거율 관련 컬럼들의 평균으로 구별 검거 수준을 비교했다."
    },
    {
      "id": "unit11-43",
      "question": "(Heatmap 코드) sns.heatmap(..., annot=True, fmt='f', linewidth=.5, cmap='RdPu')에서 annot=True 의 역 할은?",
      "choices": [
        "각 셀에 수치 값을 표시한다.",
        "지도 위에 마커를 붙인다.",
        "모델을 학습한다.",
        "컬럼을 삭제한다."
      ],
      "answerIndex": 0,
      "explanation": "annot=True 는 heatmap 셀 안에 값을 표시하게 한다."
    },
    {
      "id": "unit11-44",
      "question": "(Heatmap 해석) 강남 3 구 안전도 질문에서 범죄 발생 heatmap 을 볼 때 특히 주의해야 할 점은?",
      "choices": [
        "체감 안전도와 실제 발생 건수는 다를 수 있으므로 시각화로 데이터를 확인해야 한다.",
        "강남 3 구는 무조건 모든 지표가 0 이다.",
        "Heatmap 은 정렬할 수 없다.",
        "검거율은 항상 발생 건수와 같다."
      ],
      "answerIndex": 0,
      "explanation": "시각화는 '안전하다'는 체감이나 기사 제목을 실제 데이터로 검토하게 해 준다."
    },
    {
      "id": "unit11-45",
      "question": "(Folium) Folium 의 기본 사용법으로 옳은 것은?",
      "choices": [
        "folium.Map(location=[위도, 경도])처럼 중심 좌표를 주어 지도를 생성한다.",
        "model.fit()으로 지도 학습을 한다.",
        "StandardScaler 로 지도 색을 만든다.",
        "KMeans(n_clusters=3)로 마커를 만든다."
      ],
      "answerIndex": 0,
      "explanation": "Folium 은 Python 데이터와 leaflet.js 지도를 연결하는 지도 시각화 도구이다."
    },
    {
      "id": "unit11-46",
      "question": "(Folium Marker) folium.Marker([45.3288, -121.6625], popup='<i>Mt. Hood\nMeadows</i>').add_to(my_map)의 역할은?",
      "choices": [
        "지도에 특정 좌표의 마커와 팝업을 추가한다.",
        "신경망 은닉층을 추가한다.",
        "ROC 곡선을 그린다.",
        "결측치를 평균으로 채운다."
      ],
      "answerIndex": 0,
      "explanation": "Marker 는 지도 위 점 위치와 클릭 시 보이는 팝업 정보를 추가한다."
    },
    {
      "id": "unit11-47",
      "question": "(JSON 경계) 서울시 구별 Choropleth 지도를 그릴 때 JSON 파일이 필요한 이유로 옳은 것은?",
      "choices": [
        "구별 행정 경계선을 지도에 매칭하기 위해서이다.",
        "모델 가중치를 저장하기 위해서이다.",
        "MNIST 이미지를 불러오기 위해서이다.",
        "로지스틱 회귀 solver 를 지정하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "Choropleth 는 지리 경계 데이터와 구별 통계 데이터를 연결해 면 색을 칠한다."
    },
    {
      "id": "unit11-48",
      "question": "(Choropleth 전처리) Folium Choropleth 를 위해 '구'를 인덱스에서 일반 컬럼으로 바꾼 이유로 옳은 것은?",
      "choices": [
        "data 와 columns=['구','살인'] 형태로 지도 경계의 feature.id 와 매칭하기 위해서이다.",
        "구 이름을 삭제하기 위해서이다.",
        "정확도를 계산하기 위해서이다.",
        "이미지 크기를 조절하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "Choropleth 의 columns 인자로 구 이름 컬럼과 수치 컬럼을 지정해야 한다."
    },
    {
      "id": "unit11-49",
      "question": "(Choropleth 코드) folium.Choropleth(..., key_on='feature.id', fill_color='PuRd')에서 key_on 의 역할은?",
      "choices": [
        "GeoJSON 의 어떤 속성과 데이터의 구 이름을 연결할지 지정한다.",
        "신경망의 손실함수를 지정한다.",
        "분류 threshold 를 지정한다.",
        "KMeans 중심점 수를 지정한다."
      ],
      "answerIndex": 0,
      "explanation": "key_on 은 지도 경계 데이터의 식별자와 데이터프레임의 지역명을 연결하는 기준이다."
    },
    {
      "id": "unit11-50",
      "question": "(시각화 목적) 서울시 범죄 현황 시각화 전체 과정의 핵심 학습 목표로 가장 적절한 것은?",
      "choices": [
        "원본 데이터를 정리하고 비율/스케일을 계산한 뒤 heatmap 과 지도 시각화로 패턴을 해석하는 과정",
        "라벨 없이 이미지를 군집화하는 과정",
        "신경망의 XOR 문제를 해결하는 과정",
        "CNN 필터를 자동 학습하는 과정"
      ],
      "answerIndex": 0,
      "explanation": "데이터 정리, 컬럼 연산, 스케일 조정, 정렬, heatmap, Folium 지도로 이어지는 분석 흐름이 핵심이다."
    }
  ]
});
