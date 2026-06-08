window.QUESTION_UNITS = window.QUESTION_UNITS || [];

window.QUESTION_UNITS.push({
  "id": "unit10",
  "title": "10단원",
  "questions": [
    {
      "id": "unit10-01",
      "question": "하이퍼파라미터에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "예측 결과를 확률에서 0/1 클래스로 바꾼 뒤 저장되는 출력값이다.",
        "모델 성능을 조절하기 위해 사람이 미리 정하거나 탐색하는 설정값이다.",
        "테스트 세트에만 존재하며 최종 평가 때 처음 계산되는 정답 라벨이다.",
        "학습이 끝난 뒤 데이터로부터 자동 추정된 회귀계수와 트리 분기 기준이다."
      ],
      "answerIndex": 1,
      "explanation": "결정나무의 max_depth, min_samples_split처럼 모델 구조나 학습 방식을 조절하는 값이 하이퍼파라미터이다."
    },
    {
      "id": "unit10-02",
      "question": "Grid Search의 핵심 아이디어는?",
      "choices": [
        "테스트 세트 점수가 가장 높아질 때까지 같은 후보를 반복 수정한다.",
        "후보 하이퍼파라미터 조합을 체계적으로 시도해 가장 좋은 조합을 찾는다.",
        "모델 내부 가중치를 사람이 직접 표로 나열해 최적값을 계산한다.",
        "각 특성의 결측치를 후보 값으로 바꿔가며 가장 작은 데이터셋을 찾는다."
      ],
      "answerIndex": 1,
      "explanation": "Grid Search는 여러 하이퍼파라미터 후보 조합을 만들고, 교차검증 등을 통해 가장 성능이 좋은 조합을 찾는 방식이다."
    },
    {
      "id": "unit10-03",
      "question": "Grid Search에서 찾은 best_params_를 바로 최종 성능이라고 보면 안 되는 이유는?",
      "choices": [
        "best_params_는 점수가 아니라 모델이 틀린 테스트 행 번호만 저장하기 때문이다.",
        "검증 과정에서 좋은 조합일 뿐, 최종 테스트 데이터에서 다시 평가해야 하기 때문이다.",
        "Grid Search는 교차검증을 쓰면 훈련 데이터를 전혀 사용하지 않기 때문이다.",
        "best_params_는 항상 가장 단순한 모델을 의미하므로 성능과 무관하기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "하이퍼파라미터는 검증 데이터 기준으로 선택된다. 최종 일반화 성능은 따로 남겨둔 테스트 데이터에서 확인해야 한다."
    },
    {
      "id": "unit10-04",
      "question": "PIMA 당뇨병 데이터에서 Glucose, BloodPressure, BMI 등의 0 값을 주의해서 봐야 하는 이유는?",
      "choices": [
        "0이 포함된 행은 라벨이 양성이라는 뜻이라 별도 모델이 필요하기 때문이다.",
        "0은 모든 의료 변수에서 정상 범위의 중앙값으로 해석되기 때문이다.",
        "생리적으로 0이 나오기 어려운 값이므로 결측 또는 이상 입력일 가능성이 있기 때문이다.",
        "로지스틱 회귀는 입력 특성에 0이 있으면 수학적으로 학습할 수 없기 때문이다."
      ],
      "answerIndex": 2,
      "explanation": "포도당 수치, 혈압, BMI 등이 0이라는 것은 현실적으로 이상하므로 실제 의미 있는 0이 아니라 결측값처럼 처리할 필요가 있다."
    },
    {
      "id": "unit10-05",
      "question": "의료 예측 문제에서 Recall을 중요하게 보는 대표적 이유는?",
      "choices": [
        "Recall은 스케일링 여부를 판단하는 전처리 지표로 쓰이기 때문이다.",
        "실제 환자를 정상으로 놓치는 것이 큰 위험이 될 수 있기 때문이다.",
        "Recall은 클래스 비율과 무관하게 항상 Accuracy보다 낮게 계산되기 때문이다.",
        "양성이라고 예측한 사례가 실제 양성인지의 신뢰도만 중요하기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "의료 분야에서는 질병이 있는 사람을 놓치는 False Negative가 위험할 수 있다. 그래서 실제 양성을 얼마나 잘 찾아내는지 보는 Recall이 중요하다."
    },
    {
      "id": "unit10-06",
      "question": "앙상블 학습의 기본 아이디어는?",
      "choices": [
        "라벨 없이 중심점을 이동해 비슷한 데이터끼리 묶는 것",
        "하나의 결정나무 깊이를 계속 키워 모든 훈련 샘플을 외우게 하는 것",
        "여러 모델의 예측을 결합해 더 안정적이고 정확한 예측을 얻는 것",
        "검증 세트의 오답만 삭제해 데이터 분포를 단순하게 만드는 것"
      ],
      "answerIndex": 2,
      "explanation": "앙상블은 여러 classifier의 예측을 결합한다. 단일 모델보다 정확성과 신뢰성을 높일 수 있다."
    },
    {
      "id": "unit10-07",
      "question": "Bagging에 대한 설명으로 옳은 것은?",
      "choices": [
        "앞 모델이 틀린 샘플의 가중치를 높여 다음 모델을 순차적으로 학습한다.",
        "클러스터 중심점을 이동하며 라벨 없이 데이터 구조만 찾는다.",
        "모든 나무가 같은 특성과 같은 행을 보도록 고정해 분산을 증가시킨다.",
        "데이터를 중복 허용해 여러 샘플로 나누고 병렬적으로 학습한 뒤 투표한다."
      ],
      "answerIndex": 3,
      "explanation": "Bagging은 bootstrap sampling으로 여러 데이터셋을 만들고, 같은 알고리즘을 각각 적용한 뒤 voting으로 결합하는 방식이다."
    },
    {
      "id": "unit10-08",
      "question": "Boosting에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "분류 임계값을 고정하고 확률값을 쓰지 않도록 만드는 평가 방식이다.",
        "앞 모델이 틀린 데이터에 집중하도록 다음 모델을 순차적으로 학습한다.",
        "여러 모델을 서로 독립적으로 학습한 뒤 같은 가중치로 동시에 투표한다.",
        "훈련 데이터를 bootstrap으로 복원추출해 각 모델의 상관을 낮춘다."
      ],
      "answerIndex": 1,
      "explanation": "Boosting은 약한 분류기를 순차적으로 학습시키며, 이전 단계에서 잘못 분류된 데이터에 더 집중하도록 한다."
    },
    {
      "id": "unit10-09",
      "question": "Random Forest가 ‘랜덤’한 이유로 가장 적절한 것은?",
      "choices": [
        "테스트 데이터 일부를 매번 삭제해 평가 점수를 다르게 만들기 때문이다.",
        "예측할 때마다 클래스 하나를 무작위로 뽑고 학습은 하지 않기 때문이다.",
        "각 트리의 정답 라벨을 무작위로 섞어 서로 다른 문제를 풀게 하기 때문이다.",
        "여러 bootstrap 데이터와 특성 선택의 무작위성을 이용해 다양한 결정나무를 만들기 때문이다."
      ],
      "answerIndex": 3,
      "explanation": "Random Forest는 여러 결정나무를 만들고, 각 나무가 조금씩 다른 데이터와 특성을 보도록 하여 예측을 다양화한 뒤 투표한다."
    },
    {
      "id": "unit10-10",
      "question": "Human Activity Recognition 데이터의 특징으로 옳은 것은?",
      "choices": [
        "텍스트 리뷰의 단어 빈도를 이용해 긍정과 부정 감정을 분류한다.",
        "스마트폰의 가속도계와 자이로스코프 센서 데이터를 이용해 행동을 분류한다.",
        "정답 라벨 없이 거래 데이터를 군집화해 사기 여부를 추론한다.",
        "카메라 이미지의 RGB 픽셀만 사용해 손글씨 숫자를 분류한다."
      ],
      "answerIndex": 1,
      "explanation": "HAR 데이터는 스마트폰 센서로부터 얻은 3축 가속도와 각속도 정보를 바탕으로 걷기, 앉기, 서기, 눕기 등 사람의 행동을 분류한다."
    },
    {
      "id": "unit10-11",
      "question": "(하이퍼파라미터) 하이퍼파라미터에 대한 설명으로 옳은 것은?",
      "choices": [
        "데이터의 정답 라벨이다.",
        "모델이 학습을 통해 자동으로 얻는 모든 가중치이다.",
        "훈련 데이터의 행 개수이다.",
        "알고리즘의 성능을 튜닝하기 위해 사람이 설정하거나 탐색하는 변수값이다."
      ],
      "answerIndex": 3,
      "explanation": "max_depth, min_samples_split, n_estimators 처럼 학습 전에 정하거나 탐색하는 값이 하이퍼파라미터이다."
    },
    {
      "id": "unit10-12",
      "question": "(결정나무 튜닝) DecisionTreeClassifier 의 max_depth 를 조절하는 목적에 가장 가까운 것은?",
      "choices": [
        "테스트 데이터의 라벨을 삭제한다.",
        "학습 데이터의 클래스 비율을 바꾼다.",
        "문자열 컬럼을 숫자로 바꾼다.",
        "트리의 최대 깊이를 제한해 모델 복잡도와 과적합을 조절한다."
      ],
      "answerIndex": 3,
      "explanation": "max_depth 가 너무 크면 복잡해져 과적합될 수 있고, 너무 작으면 과소적합될 수 있다."
    },
    {
      "id": "unit10-13",
      "question": "(GridSearchCV) max_depth=[2,3,4,5], min_samples_split=[2,3,4]로 GridSearchCV 를 수행하면 탐색 조합 수는?",
      "choices": [
        "7 개",
        "24 개",
        "4 개",
        "12 개"
      ],
      "answerIndex": 3,
      "explanation": "두 파라미터 후보 수를 곱해 4 x 3 = 12 개의 조합을 평가한다."
    },
    {
      "id": "unit10-14",
      "question": "(GridSearchCV 코드) 다음 코드에서 cv=3 의 의미로 옳은 것은?\ngrid_clf = GridSearchCV(clf, param_grid=parameters, cv=3)",
      "choices": [
        "클래스 수를 3 개로 고정한다.",
        "테스트 세트 비율을 3%로 한다.",
        "3 겹 교차검증으로 각 조합을 평가한다.",
        "특성 수를 3 개로 줄인다."
      ],
      "answerIndex": 2,
      "explanation": "GridSearchCV 의 cv 는 교차검증 폴드 수를 의미한다."
    },
    {
      "id": "unit10-15",
      "question": "(GridSearchCV 결과) grid_clf.cv_results_를 pandas DataFrame 으로 바꾸는 이유로 가장 적절한 것은?",
      "choices": [
        "라벨을 자동 생성하기 위해서이다.",
        "데이터를 이미지로 변환하기 위해서이다.",
        "모델을 딥러닝 모델로 바꾸기 위해서이다.",
        "탐색한 파라미터, 순위, 평균 검증 점수 등을 표 형태로 쉽게 확인하기 위해서이다."
      ],
      "answerIndex": 3,
      "explanation": "cv_results_에는 rank_test_score, params, mean_test_score, split 별 점수 등이 들어 있다."
    },
    {
      "id": "unit10-16",
      "question": "(GridSearchCV 결과) grid_clf.best_params_가 의미하는 것은?",
      "choices": [
        "테스트 데이터의 정답 라벨",
        "모델이 틀린 행 인덱스",
        "데이터의 결측치 개수",
        "교차검증에서 가장 좋은 평균 성능을 낸 하이퍼파라미터 조합"
      ],
      "answerIndex": 3,
      "explanation": "강의 예시에서는 {'max_depth': 4, 'min_samples_split': 2}가 좋은 조합으로 확인되었다."
    },
    {
      "id": "unit10-17",
      "question": "(검증 전략) 하이퍼파라미터 튜닝 전에 데이터를 테스트용 20%로 먼저 빼둔 이유로 가장 적절한 것은?",
      "choices": [
        "결정나무를 로지스틱 회귀로 바꾸기 위해서이다.",
        "최종 평가용 데이터를 튜닝 과정에서 오염시키지 않기 위해서이다.",
        "교차검증을 불가능하게 하기 위해서이다.",
        "훈련 데이터를 모두 삭제하기 위해서이다."
      ],
      "answerIndex": 1,
      "explanation": "테스트 데이터는 튜닝 결과를 마지막에 평가하기 위해 별도로 보관한다."
    },
    {
      "id": "unit10-18",
      "question": "(PIMA 데이터) PIMA 인디언 당뇨병 데이터의 Outcome 컬럼이 의미하는 것은?",
      "choices": [
        "당뇨 여부를 나타내는 클래스 라벨",
        "나이",
        "임신 횟수",
        "혈압"
      ],
      "answerIndex": 0,
      "explanation": "Outcome 은 당뇨 유무를 나타내는 목표 변수이다."
    },
    {
      "id": "unit10-19",
      "question": "(PIMA 컬럼) 다음 중 PIMA 데이터 컬럼과 의미의 연결이 옳은 것은?",
      "choices": [
        "Outcome - 혈압",
        "BMI - 혈청 인슐린",
        "Glucose - 포도당 부하 검사 수치",
        "Age - 당뇨 내력 가중치"
      ],
      "answerIndex": 2,
      "explanation": "Glucose 는 포도당 검사 수치, BMI 는 체질량지수, DiabetesPedigreeFunction 은 당뇨 내력 가중치, Outcome 은 당 뇨 여부이다."
    },
    {
      "id": "unit10-20",
      "question": "(PIMA 전처리) PIMA 데이터에서 info()상 결측치가 없더라도 describe()와 0 의 개수 조사를 한 이유로 적절한 것 은?",
      "choices": [
        "의학적으로 0 이 될 수 없는 값이 0 으로 기록된 경우가 있어 사실상 결측 또는 이상값일 수 있기 때문이다.",
        "0 이 있으면 로지스틱 회귀를 사용할 수 없기 때문이다.",
        "모든 0 은 항상 정상값이기 때문이다.",
        "0 이 많으면 데이터가 커지기 때문이다."
      ],
      "answerIndex": 0,
      "explanation": "Glucose, BloodPressure, SkinThickness, Insulin, BMI 등의 0 은 실제 측정값으로 부자연스러워 보정 대상이 되었다."
    },
    {
      "id": "unit10-21",
      "question": "(PIMA 전처리 코드) 강의에서 0 을 평균값으로 대체한 zero_features 목록에 포함되지 않는 컬럼은?",
      "choices": [
        "Glucose",
        "Insulin",
        "BloodPressure",
        "Outcome"
      ],
      "answerIndex": 3,
      "explanation": "Outcome 은 라벨이므로 평균값 대체 대상이 아니며, 0 과 1 은 클래스 값을 의미한다."
    },
    {
      "id": "unit10-22",
      "question": "(PIMA 전처리) PIMA 데이터에서 0 값 보정 후 StandardScaler 를 적용한 이유로 가장 적절한 것은?",
      "choices": [
        "정밀도를 무조건 1 로 만들기 위해서이다.",
        "라벨 Outcome 을 삭제하기 위해서이다.",
        "테스트 세트를 훈련 세트로 합치기 위해서이다.",
        "특성들의 수치 범위를 맞춰 로지스틱 회귀 학습을 안정화하기 위해서이다."
      ],
      "answerIndex": 3,
      "explanation": "서로 단위와 범위가 다른 수치 특성들을 표준화하면 선형 모델 학습에 도움이 될 수 있다."
    },
    {
      "id": "unit10-23",
      "question": "(데이터 분리) train_test_split(X, y, test_size=0.2, random_state=156, stratify=y)에서 stratify=y 를 쓰는 주된 이유는?",
      "choices": [
        "y 를 문자열로 바꾸기 위해서이다.",
        "훈련/테스트 세트의 클래스 비율을 y 의 분포와 비슷하게 유지하기 위해서이다.",
        "랜덤 시드를 제거하기 위해서이다.",
        "특성을 0 과 1 로 변환하기 위해서이다."
      ],
      "answerIndex": 1,
      "explanation": "불균형 분류에서는 훈련/테스트에 클래스 비율이 비슷하게 들어가야 평가가 안정적이다."
    },
    {
      "id": "unit10-24",
      "question": "(평가지표 적용) 의료 예측에서 Recall 을 중요하게 보는 이유로 적절한 것은?",
      "choices": [
        "Recall 은 회귀 모델에서만 쓰기 때문이다.",
        "Recall 은 항상 Accuracy 보다 크기 때문이다.",
        "Recall 은 학습 시간을 줄여 주기 때문이다.",
        "실제 환자를 놓치는 False Negative 를 줄이는 것이 중요할 수 있기 때문이다."
      ],
      "answerIndex": 3,
      "explanation": "당뇨병이나 암 예측에서는 실제 양성 환자를 음성으로 놓치는 비용이 클 수 있다."
    },
    {
      "id": "unit10-25",
      "question": "(PR Curve) Precision-Recall Curve 를 그릴 때 필요한 입력으로 가장 적절한 것은?",
      "choices": [
        "이미지 픽셀의 DPI 만 있으면 된다.",
        "실제 라벨과 양성 클래스 확률(pred_proba[:,1])이 필요하다.",
        "KMeans 중심점 좌표만 있으면 된다.",
        "예측 클래스 0/1 만 있으면 되고 확률은 필요 없다."
      ],
      "answerIndex": 1,
      "explanation": "threshold 변화에 따른 정밀도와 재현율을 보려면 양성 클래스 확률 점수가 필요하다."
    },
    {
      "id": "unit10-26",
      "question": "(PIMA 성능 해석) 0 값 보정과 스케일링 후 PIMA 예시에서 나타난 전반적 변화로 가장 적절한 것은?",
      "choices": [
        "Recall 만 반드시 1 이 되었다.",
        "성능 지표가 전혀 계산되지 않았다.",
        "Accuracy, Precision, AUC, F1 등이 전반적으로 개선되었다.",
        "모든 지표가 0 이 되었다."
      ],
      "answerIndex": 2,
      "explanation": "강의 예시에서는 재학습 후 accuracy 약 0.799, AUC 약 0.756, F1 약 0.680 등으로 개선된 결과를 보였다."
    },
    {
      "id": "unit10-27",
      "question": "(로지스틱 회귀 코드) lr_clf.predict_proba(X_test)[:, 1]을 사용하는 이유로 옳은 것은?",
      "choices": [
        "모델의 파라미터 이름을 출력하기 위해서이다.",
        "결측치 개수를 세기 위해서이다.",
        "양성 클래스에 대한 예측 확률만 추출하기 위해서이다.",
        "훈련 데이터의 인덱스를 가져오기 위해서이다."
      ],
      "answerIndex": 2,
      "explanation": "ROC/PR 곡선은 클래스 확률 또는 점수 기반으로 threshold 를 변화시키며 계산한다."
    },
    {
      "id": "unit10-28",
      "question": "(앙상블) 앙상블 학습의 정의로 옳은 것은?",
      "choices": [
        "여러 분류기의 예측을 결합해 단일 분류기보다 안정적이고 정확한 예측을 얻는 기법",
        "이미지를 1 차원으로 펼치는 전처리",
        "라벨 없이 중심점만 이동하는 기법",
        "한 개의 뉴런만 사용하는 신경망"
      ],
      "answerIndex": 0,
      "explanation": "앙상블은 다수의 모델 또는 약한 학습기를 결합해 성능과 신뢰성을 높이려는 방법이다."
    },
    {
      "id": "unit10-29",
      "question": "(배깅) 시험 문제지를 다섯 명의 친구에게 모두 보내고 각 문제마다 다수결로 답을 정하는 전략은 어떤 앙상블 개념 에 가깝나?",
      "choices": [
        "부스팅(Boosting)",
        "배깅(Bagging)",
        "표준화",
        "K-means"
      ],
      "answerIndex": 1,
      "explanation": "같은 문제를 여러 학습자가 풀고 투표로 결합하는 방식은 배깅의 다수결 아이디어와 유사하다."
    },
    {
      "id": "unit10-30",
      "question": "(부스팅) 친구 A 가 자신 있는 문제를 풀고, 못 푼 문제를 다음 친구가 이어 풀어가는 시험 전략은 어떤 개념에 가깝 나?",
      "choices": [
        "배깅",
        "Folium",
        "PCA",
        "부스팅"
      ],
      "answerIndex": 3,
      "explanation": "앞 단계에서 어려웠던 데이터에 다음 학습기가 더 집중한다는 점에서 부스팅의 순차 학습 아이디어와 유사하다."
    },
    {
      "id": "unit10-31",
      "question": "(배깅) Bagging 의 데이터 샘플링 방식에 대한 설명으로 옳은 것은?",
      "choices": [
        "중첩을 허용한 샘플링으로 여러 데이터셋을 만들고 같은 알고리즘을 적용한다.",
        "항상 전체 데이터를 한 번만 사용한다.",
        "라벨을 모두 제거한 후 중심점만 이동한다.",
        "이미지를 RGB 채널로 분리하는 과정이다."
      ],
      "answerIndex": 0,
      "explanation": "Bagging 은 bootstrap sampling 을 통해 여러 부분 데이터셋을 만들고 결과를 voting 등으로 결합한다."
    },
    {
      "id": "unit10-32",
      "question": "(랜덤포레스트) Random Forest 에 대한 설명으로 옳지 않은 것은?",
      "choices": [
        "항상 단 하나의 결정나무만 사용한다.",
        "결정나무를 기본 학습기로 사용하는 배깅의 대표 방법이다.",
        "앙상블 방법 중 비교적 속도가 빠르고 정형 데이터에서 성능이 좋은 편이다.",
        "부트스트래핑된 데이터마다 결정나무를 학습하고 투표로 최종 예측한다."
      ],
      "answerIndex": 0,
      "explanation": "Random Forest 는 여러 결정나무를 결합하는 모델이다."
    },
    {
      "id": "unit10-33",
      "question": "(앙상블 이론) 각 분류기가 서로 독립적이고 오류율이 낮을 때 다수결 앙상블이 성능이 좋아질 수 있는 이유로 옳은 것은?",
      "choices": [
        "분류기는 독립적이면 안 된다.",
        "다수의 분류기가 동시에 틀려야 앙상블도 틀리므로 오류 확률이 줄어들 수 있다.",
        "분류기 수가 늘면 라벨이 사라진다.",
        "오류율이 무조건 각 분류기의 오류율보다 커진다."
      ],
      "answerIndex": 1,
      "explanation": "강의의 5 개 분류기 예시는 3 개 이상이 동시에 오분류해야 앙상블이 틀리는 구조를 설명한다."
    },
    {
      "id": "unit10-34",
      "question": "(AdaBoost) AdaBoost 의 학습 과정으로 옳은 것은?",
      "choices": [
        "테스트 데이터만 반복 학습한다.",
        "라벨을 제거하고 군집만 만든다.",
        "잘못 분류한 데이터의 가중치를 높이고 다음 약한 학습기가 더 주목하게 한다.",
        "모든 데이터의 가중치를 항상 0 으로 만든다."
      ],
      "answerIndex": 2,
      "explanation": "AdaBoost 는 오분류된 표본의 중요도를 높여 다음 학습기가 보완하도록 한다."
    },
    {
      "id": "unit10-35",
      "question": "(Weak/Strong Learner) Boosting 에서 Weak Learner 와 Strong Learner 의 관계로 옳은 것은?",
      "choices": [
        "약한 학습기는 항상 완벽한 모델이다.",
        "약한 학습기는 반드시 사용하지 않는다.",
        "여러 약한 학습기의 순차적 결합으로 더 강한 학습기를 만든다.",
        "강한 학습기는 라벨이 없는 중심점이다."
      ],
      "answerIndex": 2,
      "explanation": "AdaBoost 등 부스팅은 약한 분류기들의 예측을 결합해 강한 분류기를 구성한다."
    },
    {
      "id": "unit10-36",
      "question": "(Bagging vs Boosting) Bagging 과 Boosting 의 차이로 가장 적절한 것은?",
      "choices": [
        "Bagging 은 병렬적 결합에 가깝고, Boosting 은 이전 오류를 반영하는 순차적 학습에 가깝다.",
        "Bagging 은 회귀에만 쓰이고 Boosting 은 분류에만 쓰인다.",
        "둘 다 K-means 의 다른 이름이다.",
        "Bagging 은 라벨이 필요 없고 Boosting 은 라벨이 필요 없다."
      ],
      "answerIndex": 0,
      "explanation": "강의 도식은 Bagging-Parallel, Boosting-Sequential 로 대비해 설명했다."
    },
    {
      "id": "unit10-37",
      "question": "(HAR) 사람 행동 인식(HAR)에 대한 설명으로 옳은 것은?",
      "choices": [
        "XOR 회로를 구현하는 문제",
        "서울시 범죄율을 지도에 표시하는 문제",
        "스마트폰의 가속도계와 자이로스코프 같은 센서로 사람의 행동을 예측하는 문제",
        "신용카드 거래 금액만 스케일링하는 문제"
      ],
      "answerIndex": 2,
      "explanation": "HAR 은 관성측정 센서 신호로 걷기, 앉기, 서기 등 활동을 분류한다."
    },
    {
      "id": "unit10-38",
      "question": "(HAR 데이터) UCI HAR 데이터셋 설명으로 옳은 것은?",
      "choices": [
        "서울시 구별 범죄 데이터이다.",
        "신용카드 사기 데이터 0.172%의 사례이다.",
        "19~48 세 30 명의 자원봉사자가 스마트폰을 착용하고 6 가지 활동을 수행한 데이터이다.",
        "322 명의 지하철 승객 관찰 데이터이다."
      ],
      "answerIndex": 2,
      "explanation": "강의 자료는 30 명의 자원봉사자, Samsung Galaxy S II, 6 가지 활동, 50Hz 센서 측정을 설명한다."
    },
    {
      "id": "unit10-39",
      "question": "(HAR 클래스) UCI HAR 의 6 가지 활동에 포함되지 않는 것은?",
      "choices": [
        "DRIVING",
        "SITTING",
        "LAYING",
        "WALKING"
      ],
      "answerIndex": 0,
      "explanation": "HAR 라벨은 WALKING, WALKING_UPSTAIRS, WALKING_DOWNSTAIRS, SITTING, STANDING, LAYING 이다."
    },
    {
      "id": "unit10-40",
      "question": "(HAR 센서) HAR 데이터 수집 설명으로 옳은 것은?",
      "choices": [
        "허리에 스마트폰을 착용하고 50Hz 로 3 축 가속도와 3 축 각속도를 캡처했다.",
        "모든 이미지를 300DPI 로 촬영했다.",
        "라벨 없이 신용카드 거래를 수집했다.",
        "지도 경계선을 JSON 으로 수집했다."
      ],
      "answerIndex": 0,
      "explanation": "스마트폰 내장 가속도계와 자이로스코프가 시간축 센서 데이터를 제공했다."
    },
    {
      "id": "unit10-41",
      "question": "(HAR 특징추출) 시간 영역의 raw 센서 데이터를 그대로 쓰기 어려워 강의에서 설명한 처리로 옳은 것은?",
      "choices": [
        "이미지를 RGB 로 변환한다.",
        "평균, 분산, 피크, 중간값, 주파수 영역 평균 등 통계적 특징으로 변환한다.",
        "라벨을 0 으로 고정한다.",
        "모든 행을 삭제한다."
      ],
      "answerIndex": 1,
      "explanation": "센서의 시간 신호는 여러 시간/주파수 영역 통계량으로 바뀌어 561 개 feature 벡터로 사용되었다."
    },
    {
      "id": "unit10-42",
      "question": "(HAR feature) HAR feature 이름에서 t 와 f 접두어의 의미로 옳은 것은?",
      "choices": [
        "t 는 시간 도메인, f 는 주파수 도메인 데이터이다.",
        "t 는 target, f 는 fail 이다.",
        "t 는 텍스트, f 는 폰트이다.",
        "t 는 테스트 세트, f 는 훈련 세트이다."
      ],
      "answerIndex": 0,
      "explanation": "강의는 t 로 시작하는 변수는 시간 도메인, f 로 시작하는 변수는 주파수 도메인이라고 설명했다."
    },
    {
      "id": "unit10-43",
      "question": "(HAR 코드) feature 이름 파일을 읽을 때 sep='\\s+' 옵션을 사용한 이유로 옳은 것은?",
      "choices": [
        "쉼표만 구분자로 사용하기 위해서이다.",
        "하나 이상의 공백을 구분자로 사용하기 위해서이다.",
        "한글 폰트를 설치하기 위해서이다.",
        "결측치를 평균으로 채우기 위해서이다."
      ],
      "answerIndex": 1,
      "explanation": "features.txt 처럼 공백으로 구분된 파일을 읽을 때 정규식 '\\s+'가 하나 이상의 공백을 의미한다."
    },
    {
      "id": "unit10-44",
      "question": "(HAR 데이터 크기) 강의 예시에서 X_train 과 X_test 의 크기로 옳은 것은?",
      "choices": [
        "(7352, 561), (2947, 561)",
        "(60000, 28, 28), (10000, 28, 28)",
        "(120, 4), (30, 4)",
        "(284807, 29), (284807,)"
      ],
      "answerIndex": 0,
      "explanation": "HAR 실습에서 훈련 특성은 7352 행 561 열, 테스트 특성은 2947 행 561 열로 확인했다."
    },
    {
      "id": "unit10-45",
      "question": "(HAR 결정나무) HAR 실습에서 처음 DecisionTreeClassifier(random_state=13, max_depth=4)를 적용했을 때 의 핵심 메시지로 옳은 것은?",
      "choices": [
        "라벨이 없어 평가할 수 없다.",
        "CNN 만 사용할 수 있다.",
        "정확도가 0 이므로 모델을 사용할 수 없다.",
        "간단한 결정나무로도 약 0.81 수준의 정확도를 얻었지만 추가 튜닝이 가능하다."
      ],
      "answerIndex": 3,
      "explanation": "초기 결정나무는 약 0.8096 의 accuracy 를 보였고 이후 max_depth grid search 가 이어졌다."
    },
    {
      "id": "unit10-46",
      "question": "(HAR GridSearch) HAR 결정나무 GridSearch 에서 가장 좋은 max_depth 로 확인된 값은?",
      "choices": [
        "24",
        "256",
        "8",
        "4"
      ],
      "answerIndex": 2,
      "explanation": "강의 예시의 GridSearchCV 결과 best_params_는 {'max_depth': 8}이었다."
    },
    {
      "id": "unit10-47",
      "question": "(과적합 판단) GridSearchCV(..., return_train_score=True)를 설정하면 좋은 점은?",
      "choices": [
        "라벨을 자동으로 생성한다.",
        "모델 파일을 자동 저장한다.",
        "split 별 train score 와 test score 를 함께 확인해 과적합 경향을 볼 수 있다.",
        "그래프의 한글 폰트를 설치한다."
      ],
      "answerIndex": 2,
      "explanation": "train 점수만 매우 높고 test 점수가 낮으면 과적합 가능성을 의심할 수 있다."
    },
    {
      "id": "unit10-48",
      "question": "(HAR RandomForest) HAR RandomForest 하이퍼파라미터 탐색에 포함된 항목으로 옳지 않은 것은?",
      "choices": [
        "kernel_size",
        "min_samples_leaf",
        "max_depth",
        "n_estimators"
      ],
      "answerIndex": 0,
      "explanation": "kernel_size 는 CNN 의 필터 크기와 관련된 인자이며, 해당 RandomForest grid 에는 max_depth, n_estimators, min_samples_leaf, min_samples_split 등이 있었다."
    },
    {
      "id": "unit10-49",
      "question": "(HAR RandomForest 결과) HAR RandomForest GridSearch 예시의 best parameter 에 포함된 값으로 옳은 것 은?",
      "choices": [
        "n_estimators: 200, max_depth: 10",
        "n_estimators: 1, max_depth: 1",
        "C: 8, gamma: 0.01",
        "kernel_size: 3, filters: 32"
      ],
      "answerIndex": 0,
      "explanation": "강의 예시에서 RandomForest 의 best_params_는 max_depth 10, min_samples_leaf 12, min_samples_split 8, n_estimators 200 이었다."
    },
    {
      "id": "unit10-50",
      "question": "(HAR 응용) 강의에서 소개한 머신러닝 응용연구 사례가 아닌 것은?",
      "choices": [
        "서울시 살인 사건 Folium 지도만으로 손글씨 숫자 분류",
        "스마트폰 센서로 차량 탑승 위치 판단",
        "스마트안경으로 파킨슨병 환자 보행 지원",
        "치매 환자 행동 모니터링"
      ],
      "answerIndex": 0,
      "explanation": "HAR 부분에서는 센서/영상 기반 행동 인식 응용을 소개했고, Folium 지도는 시각화 주제의 예이다."
    }
  ]
});
