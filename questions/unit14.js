window.QUESTION_UNITS = window.QUESTION_UNITS || [];

window.QUESTION_UNITS.push({
  "id": "unit14",
  "title": "14단원",
  "questions": [
    {
      "id": "unit14-01",
      "question": "디지털 이미지에 대한 설명으로 옳은 것은?",
      "choices": [
        "이미지는 픽셀이라는 작은 단위의 값들로 표현된다.",
        "이미지는 반드시 문장 형태로 저장된다.",
        "회색조 이미지는 RGB 세 채널을 반드시 가진다.",
        "해상도는 모델의 손실 함수와 같은 뜻이다."
      ],
      "answerIndex": 0,
      "explanation": "디지털 이미지는 픽셀들의 격자로 표현된다. 각 픽셀은 밝기나 색상 정보를 담고 있다."
    },
    {
      "id": "unit14-02",
      "question": "회색조 이미지와 컬러 이미지의 차이로 옳은 것은?",
      "choices": [
        "회색조 이미지는 일반적으로 밝기 값 하나로 표현되고, 컬러 이미지는 RGB 채널을 가진다.",
        "회색조 이미지는 항상 3차원 좌표만 사용한다.",
        "컬러 이미지는 픽셀값이 존재하지 않는다.",
        "회색조 이미지는 딥러닝에 사용할 수 없다."
      ],
      "answerIndex": 0,
      "explanation": "회색조 이미지는 한 픽셀에 밝기 정보 하나를 갖는 경우가 많고, 컬러 이미지는 Red, Green, Blue의 세 채널 정보를 가진다."
    },
    {
      "id": "unit14-03",
      "question": "MNIST 손글씨 데이터의 특징으로 옳은 것은?",
      "choices": [
        "28×28 픽셀의 회색조 손글씨 숫자 이미지 데이터이다.",
        "컬러 동영상 데이터이다.",
        "라벨이 없는 군집화 전용 데이터이다.",
        "숫자가 아니라 의류 이미지만 포함한다."
      ],
      "answerIndex": 0,
      "explanation": "MNIST는 0부터 9까지의 손글씨 숫자 이미지로 구성된 대표적인 이미지 분류 데이터셋이다."
    },
    {
      "id": "unit14-04",
      "question": "이미지 픽셀값을 0~255에서 0~1 사이로 변환하는 이유로 가장 적절한 것은?",
      "choices": [
        "이미지의 정답 라벨을 없애기 위해",
        "신경망 학습에서 입력값의 스케일을 안정적으로 맞추기 위해",
        "이미지를 컬러로 바꾸기 위해",
        "테스트 데이터를 삭제하기 위해"
      ],
      "answerIndex": 1,
      "explanation": "신경망은 연속적인 실수값을 입력으로 다루므로, 픽셀값을 0~1 범위로 정규화하면 학습이 더 안정적으로 진행될 수 있다."
    },
    {
      "id": "unit14-05",
      "question": "일반 Dense 신경망에서 이미지를 Flatten하면 생길 수 있는 문제는?",
      "choices": [
        "픽셀의 공간적 배치 정보가 약해질 수 있다.",
        "라벨 개수가 자동으로 증가한다.",
        "이미지가 반드시 컬러로 바뀐다.",
        "모델이 더 이상 숫자를 입력받지 못한다."
      ],
      "answerIndex": 0,
      "explanation": "2차원 이미지가 1차원 벡터로 펼쳐지면 주변 픽셀 간의 위치 관계나 모양 정보가 잘 보존되지 않을 수 있다."
    },
    {
      "id": "unit14-06",
      "question": "Fashion MNIST가 손글씨 MNIST보다 일반 Dense 신경망에서 더 어려운 이유로 적절한 것은?",
      "choices": [
        "이미지가 모두 같은 클래스이기 때문이다.",
        "의류 이미지가 숫자보다 형태가 다양하고 클래스 간 시각적 차이가 복잡하기 때문이다.",
        "라벨이 전혀 없기 때문이다.",
        "픽셀값이 모두 0이기 때문이다."
      ],
      "answerIndex": 1,
      "explanation": "손글씨 숫자는 비교적 단순한 형태지만, 의류 이미지는 비슷한 모양의 클래스가 많아 더 어려운 분류 문제가 된다."
    },
    {
      "id": "unit14-07",
      "question": "합성곱 Convolution 연산에 대한 설명으로 옳은 것은?",
      "choices": [
        "필터를 이미지의 부분 영역에 적용해 새로운 특징 값을 만든다.",
        "이미지를 무조건 한 줄로 펼치는 작업만 의미한다.",
        "라벨을 숫자에서 문자로 바꾸는 작업이다.",
        "테스트 데이터의 개수를 늘리는 작업이다."
      ],
      "answerIndex": 0,
      "explanation": "합성곱은 필터와 이미지의 대응되는 픽셀값을 곱하고 더해 특정 영역의 특징을 추출하는 연산이다."
    },
    {
      "id": "unit14-08",
      "question": "Feature map에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "여러 필터를 통해 추출된 이미지 특징 결과이다.",
        "모델의 최종 정답 라벨이다.",
        "손실 함수의 다른 이름이다.",
        "훈련 데이터와 테스트 데이터의 비율이다."
      ],
      "answerIndex": 0,
      "explanation": "CNN은 여러 필터를 이용해 수직선, 수평선, 모서리 등 다양한 특징을 추출하고, 그 결과로 feature map을 만든다."
    },
    {
      "id": "unit14-09",
      "question": "Padding의 목적은?",
      "choices": [
        "이미지 가장자리를 채워 합성곱 후 크기가 지나치게 줄어드는 것을 막기 위해",
        "라벨을 정수로 바꾸기 위해",
        "모델의 출력을 확률로 바꾸기 위해",
        "모든 픽셀을 0으로 만들기 위해"
      ],
      "answerIndex": 0,
      "explanation": "필터를 적용하면 이미지 크기가 줄어들 수 있다. Padding은 가장자리에 값을 채워 크기 감소를 조절하고 경계 정보 손실을 줄이는 데 사용된다."
    },
    {
      "id": "unit14-10",
      "question": "Pooling의 역할로 옳은 것은?",
      "choices": [
        "특정 영역의 값을 하나로 요약해 크기를 줄이고 중요한 특징을 남긴다.",
        "모델의 정답을 사람이 직접 입력한다.",
        "손실 함수를 계산하지 않도록 한다.",
        "이미지를 무조건 더 크게 만든다."
      ],
      "answerIndex": 0,
      "explanation": "Pooling은 작은 영역의 픽셀값들을 하나의 값으로 축소한다. Max pooling은 해당 영역에서 가장 큰 값을 선택하며, 잡음에 조금 더 강건한 특징을 만들 수 있다."
    },
    {
      "id": "unit14-11",
      "question": "(디지털 이미지) DPI(Dots Per Inch)에 대한 설명으로 옳은 것은?",
      "choices": [
        "1 인치당 존재하는 화소의 개수",
        "초당 학습 반복 횟수",
        "클래스 불균형 비율",
        "ROC 곡선 아래 면적"
      ],
      "answerIndex": 0,
      "explanation": "DPI 는 이미지 해상도와 관련된 픽셀 밀도 개념이다."
    },
    {
      "id": "unit14-12",
      "question": "(이미지 좌표) 디지털 영상의 좌표 표현에 대한 설명으로 옳은 것은?",
      "choices": [
        "이미지는 보통 좌상단 origin 에서 x 가 오른쪽, y 가 아래쪽으로 증가하는 방식으로 표현된다.",
        "항상 중심이 origin 이다.",
        "x 와 y 는 클래스 라벨이다.",
        "좌표는 모델 정확도와 같다."
      ],
      "answerIndex": 0,
      "explanation": "강의의 이미지 좌표 그림은 origin, x, y 방향을 보여준다."
    },
    {
      "id": "unit14-13",
      "question": "(회색조 이미지) 회색조 이미지(gray-scale image)에 대한 설명으로 옳은 것은?",
      "choices": [
        "각 픽셀이 밝기 값 하나로 표현되는 이미지",
        "RGB 세 채널을 반드시 모두 갖는 이미지",
        "라벨이 없는 데이터",
        "지도 경계선 JSON"
      ],
      "answerIndex": 0,
      "explanation": "회색조 이미지는 보통 한 채널의 픽셀 밝기값으로 표현된다."
    },
    {
      "id": "unit14-14",
      "question": "(컬러 이미지) 컬러 이미지를 RGB 관점에서 설명한 것으로 옳은 것은?",
      "choices": [
        "Red, Green, Blue 채널 정보가 결합되어 색을 표현한다.",
        "항상 한 채널만 가진다.",
        "픽셀값이 오직 0 또는 1 만 가능하다.",
        "클래스 라벨 10 개를 의미한다."
      ],
      "answerIndex": 0,
      "explanation": "강의의 컬러 이미지 그림은 원본이 R/G/B 채널로 분리될 수 있음을 보여준다."
    },
    {
      "id": "unit14-15",
      "question": "(픽셀 연산) 픽셀값을 이용한 이미지 변경 설명으로 옳은 것은?",
      "choices": [
        "이미지끼리 더하거나 픽셀값에 상수를 곱하는 방식으로 밝기나 합성 결과를 바꿀 수 있다.",
        "픽셀값은 절대 연산할 수 없다.",
        "픽셀값은 항상 문자열이다.",
        "픽셀 연산은 ROC 곡선만 만든다."
      ],
      "answerIndex": 0,
      "explanation": "강의는 이미지 덧셈과 상수배 예시로 픽셀 기반 영상 변환을 설명했다."
    },
    {
      "id": "unit14-16",
      "question": "(MNIST) MNIST 손글씨 데이터 설명으로 옳은 것은?",
      "choices": [
        "28x28 픽셀 회색조 손글씨 숫자 이미지이며 훈련 6 만 장, 테스트 1 만 장으로 구성된다.",
        "컬러 패션 이미지 100 장만 있다.",
        "라벨이 없는 군집 데이터이다.",
        "서울시 범죄 지도 데이터이다."
      ],
      "answerIndex": 0,
      "explanation": "MNIST 는 0~9 손글씨 숫자 분류에 적합하도록 전처리된 대표 이미지 데이터셋이다."
    },
    {
      "id": "unit14-17",
      "question": "(MNIST 코드) keras.datasets.mnist.load_data()가 반환하는 데이터 구조로 옳은 것은?",
      "choices": [
        "(train_images, train_labels), (test_images, test_labels)",
        "X_train, X_test 만 반환",
        "모델과 가중치만 반환",
        "지도 JSON 만 반환"
      ],
      "answerIndex": 0,
      "explanation": "Keras 데이터셋은 훈련용 이미지/라벨과 테스트용 이미지/라벨을 중첩 튜플로 반환한다."
    },
    {
      "id": "unit14-18",
      "question": "(MNIST shape) 강의에서 MNIST 데이터를 불러온 뒤 train_images.shape 로 확인한 형태는?",
      "choices": [
        "(60000, 28, 28)",
        "(10000, 28, 28, 3)",
        "(7352, 561)",
        "(284807, 29)"
      ],
      "answerIndex": 0,
      "explanation": "훈련 이미지는 6 만 개의 28x28 회색조 배열이다."
    },
    {
      "id": "unit14-19",
      "question": "(MNIST 시각화) train_images[0]을 2 중 for 문으로 출력한 이유로 가장 적절한 것은?",
      "choices": [
        "이미지가 픽셀값 행렬로 저장되어 있음을 직접 확인하기 위해서이다.",
        "라벨을 삭제하기 위해서이다.",
        "ROC 곡선을 그리기 위해서이다.",
        "KMeans 중심점을 확인하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "이미지 데이터는 각 픽셀 밝기값의 2 차원 배열로 표현된다."
    },
    {
      "id": "unit14-20",
      "question": "(MNIST 전처리) train_images, test_images = train_images/255, test_images/255 를 적용하는 이유로 옳은 것은?",
      "choices": [
        "0~255 픽셀값을 0~1 범위의 실수값으로 스케일링하기 위해서이다.",
        "라벨을 255 개 클래스로 늘리기 위해서이다.",
        "이미지를 컬러로 만들기 위해서이다.",
        "훈련 데이터를 삭제하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "신경망은 연속적인 실수값 입력을 다루므로 픽셀값 스케일을 맞추는 것이 일반적이다."
    },
    {
      "id": "unit14-21",
      "question": "(새 이미지 전처리) 직접 업로드한 숫자 이미지가 처음에 잘못 예측된 뒤 (255-img)/255 를 적용한 이유로 옳은 것 은?",
      "choices": [
        "학습 데이터와 밝고 어두운 방향이 반대였고, 0~1 스케일링도 필요했기 때문이다.",
        "라벨을 문자열로 바꾸기 위해서이다.",
        "이미지를 무조건 3 채널로 만들기 위해서이다.",
        "AUC 를 계산하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "MNIST 학습 이미지와 직접 이미지의 배경/글자 밝기 관계를 맞추고 스케일도 맞춰야 했다."
    },
    {
      "id": "unit14-22",
      "question": "(DNN 모델) MNIST 기본 DNN 모델 구성으로 옳은 것은?",
      "choices": [
        "Flatten(input_shape=(28,28)) - Dense(256, relu) - Dense(10, softmax)",
        "Conv2D 만 있고 출력층이 없다.",
        "KMeans - PCA - Folium",
        "GridSearchCV - RandomForest - Choropleth"
      ],
      "answerIndex": 0,
      "explanation": "강의의 단순 신경망은 28x28 이미지를 784 개 벡터로 펼친 뒤 Dense 층을 사용했다."
    },
    {
      "id": "unit14-23",
      "question": "(모델 summary) MNIST DNN 모델에서 Flatten 후 Dense(256)와 Dense(10)를 사용했을 때 총 학습 파라미터 수 로 강의에 제시된 값은?",
      "choices": [
        "203,530 개",
        "561 개",
        "12 개",
        "0 개"
      ],
      "answerIndex": 0,
      "explanation": "784*256+256 = 200,960, 256*10+10 = 2,570 으로 총 203,530 개이다."
    },
    {
      "id": "unit14-24",
      "question": "(성능 개선) MNIST DNN 실습에서 은닉층 노드를 지나치게 많이 늘렸을 때의 결과로 옳은 것은?",
      "choices": [
        "시간도 오래 걸리고 성능이 떨어질 수 있었다.",
        "항상 정확도 100%가 보장되었다.",
        "모델 파라미터가 0 개가 되었다.",
        "데이터가 자동으로 늘어났다."
      ],
      "answerIndex": 0,
      "explanation": "너무 복잡한 구조는 오차가 가중치로 잘 전달되지 않거나 학습이 불안정해질 수 있다."
    },
    {
      "id": "unit14-25",
      "question": "(Fashion MNIST) Fashion MNIST 에 대한 설명으로 옳은 것은?",
      "choices": [
        "의복 관련 28x28 회색조 이미지이며 훈련 6 만 장, 테스트 1 만 장을 제공한다.",
        "손글씨 숫자만 들어 있다.",
        "라벨이 전혀 없다.",
        "모든 이미지가 RGB 컬러이다."
      ],
      "answerIndex": 0,
      "explanation": "Fashion MNIST 는 손글씨 MNIST 보다 형태가 복잡해 심층 신경망 평가에 더 도전적이다."
    },
    {
      "id": "unit14-26",
      "question": "(Fashion label) Fashion MNIST 라벨 9 번에 해당하는 클래스는?",
      "choices": [
        "Ankle boot",
        "T-shirt/top",
        "Trouser",
        "Bag"
      ],
      "answerIndex": 0,
      "explanation": "강의의 라벨 목록에서 9 는 Ankle boot 이다."
    },
    {
      "id": "unit14-27",
      "question": "(Fashion label) 다음 중 Fashion MNIST 라벨 연결이 옳은 것은?",
      "choices": [
        "0: T-shirt/top, 1: Trouser, 8: Bag",
        "0: Bag, 1: Ankle boot, 8: Trouser",
        "0: Sneaker, 1: Dress, 8: Coat",
        "0: Walking, 1: Sitting, 8: Laying"
      ],
      "answerIndex": 0,
      "explanation": "Fashion MNIST 는 0 티셔츠, 1 바지, 2 풀오버, 3 드레스, 4 코트, 5 샌달, 6 셔츠, 7 스니커, 8 가방, 9 발목부츠이다."
    },
    {
      "id": "unit14-28",
      "question": "(Flatten 한계) Fashion MNIST 에서 단순 Dense 신경망이 이미지 형태 정보를 잃는 이유로 옳은 것은?",
      "choices": [
        "Flatten 으로 2 차원 공간 구조가 1 차원 벡터로 펼쳐져 'ㄱ' 같은 형태 정보가 소멸될 수 있기 때문이다.",
        "라벨이 없기 때문이다.",
        "이미지가 컬러라서이다.",
        "KMeans 를 사용했기 때문이다."
      ],
      "answerIndex": 0,
      "explanation": "이미지 분석에서는 픽셀의 인접 관계와 공간적 패턴이 중요하다."
    },
    {
      "id": "unit14-29",
      "question": "(합성곱) 이미지 처리에서 합성곱(convolution)의 의미로 가장 적절한 것은?",
      "choices": [
        "특정 영역의 픽셀 정보와 필터 값을 곱해 더하여 하나의 값을 생성하는 연산",
        "라벨을 정수로 바꾸는 연산",
        "훈련/테스트를 나누는 연산",
        "검거율을 계산하는 연산"
      ],
      "answerIndex": 0,
      "explanation": "합성곱은 특정 영역을 하나의 특징 값으로 변환한다."
    },
    {
      "id": "unit14-30",
      "question": "(필터 연산) 컨볼루션 필터 적용 설명으로 옳은 것은?",
      "choices": [
        "필터와 원본 이미지의 대응되는 픽셀값을 곱한 뒤 모두 더해 새 픽셀값을 만든다.",
        "필터는 라벨을 삭제한다.",
        "필터는 데이터 행을 무조건 늘린다.",
        "필터는 검증 세트만 만든다."
      ],
      "answerIndex": 0,
      "explanation": "필터를 이미지 위에서 이동시키며 같은 곱-합 연산을 모든 위치에 적용한다."
    },
    {
      "id": "unit14-31",
      "question": "(Feature map) CNN 에서 feature map 에 대한 설명으로 옳은 것은?",
      "choices": [
        "필터를 통해 얻은 특징 이미지들의 묶음 또는 출력",
        "원본 라벨 이름 목록",
        "AUC 점수 배열",
        "KMeans 중심점 좌표"
      ],
      "answerIndex": 0,
      "explanation": "여러 필터를 사용하면 각 필터가 강조한 여러 특징 맵을 얻는다."
    },
    {
      "id": "unit14-32",
      "question": "(CNN 필터) 기존 이미지 처리와 CNN 의 차이로 옳은 것은?",
      "choices": [
        "기존에는 사용자가 직접 필터를 설계했지만 CNN 은 학습을 통해 적합한 필터를 자동으로 생성한다.",
        "CNN 은 필터를 전혀 사용하지 않는다.",
        "CNN 은 이미지 공간 정보를 버리는 것만 목적이다.",
        "CNN 은 라벨 없는 데이터에만 쓴다."
      ],
      "answerIndex": 0,
      "explanation": "CNN 은 여러 필터를 학습해 이미지의 유용한 특징을 추출한다."
    },
    {
      "id": "unit14-33",
      "question": "(Padding) CNN 에서 padding 을 사용하는 이유로 옳은 것은?",
      "choices": [
        "필터 적용으로 이미지 크기가 계속 작아지는 것을 완충하기 위해 가장자리를 채운다.",
        "모델의 라벨을 바꾸기 위해서이다.",
        "훈련 데이터를 7:3 으로 나누기 위해서이다.",
        "정확도를 출력하기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "패딩은 합성곱 후 출력 크기를 유지하거나 가장자리 정보를 더 잘 활용하기 위해 사용된다."
    },
    {
      "id": "unit14-34",
      "question": "(Pooling) Pooling 에 대한 설명으로 옳은 것은?",
      "choices": [
        "특정 영역의 픽셀을 하나의 값으로 축소하는 연산",
        "필터를 학습하지 못하게 막는 연산",
        "모든 픽셀을 원래보다 크게 만드는 연산",
        "라벨을 one-hot 으로 바꾸는 연산"
      ],
      "answerIndex": 0,
      "explanation": "Pooling 은 공간 크기를 줄이고 대표 특징을 남기는 역할을 한다."
    },
    {
      "id": "unit14-35",
      "question": "(MaxPooling) Max pooling 의 효과로 옳은 것은?",
      "choices": [
        "해당 영역에서 가장 큰 값을 가져와 작은 잡음 변화에 강건해질 수 있다.",
        "모든 값을 평균으로 만든다.",
        "모든 값을 0 으로 만든다.",
        "이미지를 반드시 컬러로 만든다."
      ],
      "answerIndex": 0,
      "explanation": "강의는 풀링을 하면 이미지에 잡음이 추가되어도 결과가 크게 변하지 않는 강건함을 얻을 수 있다고 설명했다."
    },
    {
      "id": "unit14-36",
      "question": "(CNN 계층) 합성곱 계층과 풀링 계층의 효과로 옳은 것은?",
      "choices": [
        "이미지 특징을 추출하고 모델 파라미터 개수를 효율적으로 줄여 복잡도를 낮출 수 있다.",
        "항상 파라미터 수를 무한대로 늘린다.",
        "라벨을 삭제한다.",
        "지도 데이터를 만든다."
      ],
      "answerIndex": 0,
      "explanation": "Conv/Pooling 계층은 이미지 특징 추출과 차원 축소를 담당한다."
    },
    {
      "id": "unit14-37",
      "question": "(CNN 입력 형태) CNN 모델 입력 형태로 옳은 것은?",
      "choices": [
        "(데이터 인스턴스 수, 행 수, 열 수, 채널 수)",
        "(행 수, 라벨 수)만",
        "(위도, 경도)만",
        "(TP, FP, FN, TN)만"
      ],
      "answerIndex": 0,
      "explanation": "Keras Conv2D 는 이미지 배치, 높이, 너비, 채널 차원을 필요로 한다."
    },
    {
      "id": "unit14-38",
      "question": "(np.newaxis) Fashion MNIST 회색조 이미지에 train_images = train_images[:, :, :, np.newaxis]를 적용한 이유 로 옳은 것은?",
      "choices": [
        "채널 차원 1 을 추가해 CNN 입력 형태로 맞추기 위해서이다.",
        "라벨을 10 개에서 1 개로 줄이기 위해서이다.",
        "이미지를 255 배 밝게 하기 위해서이다.",
        "훈련 데이터를 테스트 데이터로 바꾸기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "회색조는 RGB 채널이 없으므로 채널 수 1 인 차원을 명시적으로 추가한다."
    },
    {
      "id": "unit14-39",
      "question": "(CNN 구조) 강의의 Fashion MNIST CNN 구조에 포함된 층으로 옳은 것은?",
      "choices": [
        "Conv2D, MaxPooling2D, Flatten, Dense",
        "KMeans, StandardScaler, Folium",
        "GridSearchCV, SVC, LabelEncoder",
        "Binarizer, ROC, AUC"
      ],
      "answerIndex": 0,
      "explanation": "CNN 은 합성곱과 풀링 후 Flatten 을 거쳐 Dense 출력층으로 연결된다."
    },
    {
      "id": "unit14-40",
      "question": "(Conv2D 옵션) Conv2D(kernel_size=(3,3), padding='same', filters=32)에서 padding='same'의 의미로 가장 적절한 것은?",
      "choices": [
        "입출력 공간 크기가 유지되도록 패딩을 적용한다.",
        "라벨을 같은 값으로 만든다.",
        "필터 수를 0 으로 만든다.",
        "학습을 중단한다."
      ],
      "answerIndex": 0,
      "explanation": "same padding 은 가장자리에 값을 채워 합성곱 후 크기 감소를 막거나 완화한다."
    },
    {
      "id": "unit14-41",
      "question": "(MaxPooling 코드) MaxPooling2D((2,2), strides=2)의 일반적 효과로 옳은 것은?",
      "choices": [
        "2x2 영역을 대표값으로 줄여 가로/세로 크기를 대략 절반으로 축소한다.",
        "이미지를 2 배 확대한다.",
        "라벨을 2 개로 바꾼다.",
        "필터 개수를 2 개로 고정한다."
      ],
      "answerIndex": 0,
      "explanation": "2x2 풀링과 stride 2 는 공간 해상도를 줄여 계산량과 복잡도를 낮춘다."
    },
    {
      "id": "unit14-42",
      "question": "(CNN 최종 단계) CNN 앞부분에서 얻은 이미지 정보를 전통적 신경망에 연결하기 위해 필요한 과정은?",
      "choices": [
        "Flatten 으로 1 차원 벡터화한 뒤 Dense 층에 연결한다.",
        "모든 라벨을 삭제한다.",
        "Folium 지도에 붙인다.",
        "KMeans 중심점으로 바꾼다."
      ],
      "answerIndex": 0,
      "explanation": "합성곱/풀링으로 얻은 feature map 은 최종 분류를 위해 평탄화되어 Dense 층으로 전달된다."
    },
    {
      "id": "unit14-43",
      "question": "(CNN 컴파일) Fashion MNIST CNN 실습에서 사용한 컴파일 설정으로 옳은 것은?",
      "choices": [
        "optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy']",
        "optimizer='folium', loss='roc_curve'",
        "optimizer='kmeans++', loss='inertia'",
        "optimizer='grid', loss='IQR'"
      ],
      "answerIndex": 0,
      "explanation": "정수 라벨 다중 클래스 분류이므로 sparse categorical crossentropy 와 accuracy 를 사용했다."
    },
    {
      "id": "unit14-44",
      "question": "(Validation split) model.fit(..., validation_split=0.25)의 의미로 옳은 것은?",
      "choices": [
        "훈련 데이터 중 25%를 검증용으로 떼어 학습 중 검증 성능을 확인한다.",
        "테스트 데이터 25 개만 사용한다.",
        "라벨 25 개를 만든다.",
        "필터 크기를 25 로 한다."
      ],
      "answerIndex": 0,
      "explanation": "validation_split 은 학습 중 검증 손실과 정확도를 관찰하기 위한 설정이다."
    },
    {
      "id": "unit14-45",
      "question": "(학습 곡선) 에폭에 따른 accuracy 와 val_accuracy 를 함께 확인하는 이유로 옳은 것은?",
      "choices": [
        "훈련 성능과 검증 성능의 차이를 보며 과적합 여부를 점검하기 위해서이다.",
        "이미지 색을 바꾸기 위해서이다.",
        "데이터를 지도에 표시하기 위해서이다.",
        "라벨을 문자열로 바꾸기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "훈련 정확도만 오르고 검증 정확도가 정체/하락하면 과적합을 의심할 수 있다."
    },
    {
      "id": "unit14-46",
      "question": "(CNN 결과) Fashion MNIST CNN 의 테스트 정확도로 강의에 제시된 값에 가장 가까운 것은?",
      "choices": [
        "약 0.9046",
        "약 0.172",
        "약 0.5000",
        "약 1.0000"
      ],
      "answerIndex": 0,
      "explanation": "강의 CNN 실습에서는 테스트 정확도가 약 0.9046 으로 나타났다."
    },
    {
      "id": "unit14-47",
      "question": "(예측 결과) model.predict(images)는 모든 클래스에 대한 확률값을 반환한다. 최종 예측 클래스를 얻기 위해 필요 한 함수는?",
      "choices": [
        "argmax",
        "fillna",
        "pivot_table",
        "dropna"
      ],
      "answerIndex": 0,
      "explanation": "가장 확률이 높은 클래스 인덱스를 선택하려면 np.argmax(..., axis=1)을 사용한다."
    },
    {
      "id": "unit14-48",
      "question": "(Confusion matrix) Fashion MNIST CNN 결과를 confusion_matrix 로 확인하는 이유로 옳은 것은?",
      "choices": [
        "어떤 의복 클래스끼리 혼동되는지 클래스별 예측 오류를 확인하기 위해서이다.",
        "모델 파라미터 수를 계산하기 위해서이다.",
        "이미지 DPI 를 변경하기 위해서이다.",
        "지도 팝업을 만들기 위해서이다."
      ],
      "answerIndex": 0,
      "explanation": "혼동행렬은 전체 정확도만으로는 보이지 않는 클래스별 오분류 패턴을 보여준다."
    },
    {
      "id": "unit14-49",
      "question": "(CNN 장점) 이미지 분류에서 CNN 이 단순 Dense 신경망보다 유리한 이유로 가장 적절한 것은?",
      "choices": [
        "필터와 풀링을 통해 이미지의 공간적 특징과 지역 패턴을 학습할 수 있기 때문이다.",
        "CNN 은 라벨이 없어도 항상 정답을 안다.",
        "CNN 은 모든 픽셀을 무시한다.",
        "CNN 은 파라미터가 전혀 없다."
      ],
      "answerIndex": 0,
      "explanation": "단순 Flatten 은 공간 구조를 잃지만 CNN 은 국소 영역의 패턴을 추출한다."
    },
    {
      "id": "unit14-50",
      "question": "(모델 복잡도) 이미지 DNN/CNN 실습 전체에서 얻을 수 있는 교훈으로 가장 적절한 것은?",
      "choices": [
        "층과 노드를 무조건 늘리는 것보다 데이터 특성에 맞는 구조, 전처리, 검증 성능 확인이 중요하다.",
        "복잡한 모델일수록 항상 테스트 정확도 1 이 된다.",
        "전처리는 절대 필요 없다.",
        "검증 데이터는 보면 안 된다."
      ],
      "answerIndex": 0,
      "explanation": "강의는 단순 DNN 의 한계, 과도한 복잡화의 문제, CNN 의 구조적 장점과 검증 성능 확인의 중요성을 보여준다"
    }
  ]
});
