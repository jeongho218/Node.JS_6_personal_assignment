    // 하고 싶은 것 1. 무비 카드를 클릭하였을떄 영화의 id를 alert로 출력
    // ex. 영화 ID: (ID)

    // 클래스 movie-card 요소를 모두 가져와
    const movieCards = document.querySelectorAll('.movie-card');
    
    // 반복문을 통해 모든 movie-card에 click, alert 효과 
    movieCards.forEach(movieCard => {
        movieCard.addEventListener('click', function(event) {
            window.alert('영화 ID: ' + movieCard.id);
        });
    });
                
    
    // 하고 싶은 것 2. 영화검색
    // INPUT에 단어를 입력하면 그 단어를 포함하는 제목을 가진 영화의
    // 무비카드만 남겨놓고 나머지는 display: none

    // 2-1. 버튼이 클릭되면
    const btnClicked = document.getElementById("search-btn");
    btnClicked.addEventListener('click', function() {
        event.preventDefault() // 페이지 새로고침 방지
    
    // 2-2. 검색칸에 입력된 내용을 받아들여서
        const inputTxt = document.getElementById('search-input').value;
    // .value없이 사용하면 변수 inputTxt에 [object HTMLInputElement]라는 내용으로 저장된다.
    // 오류는 아니고.. 객체의 실체값이 아닌 객체 자체를 사용하였기 때문이라고 한다.. 
    // '이것은 오브젝트 객체이며 html의 input 요소이다.' 라는 의미라고 한다.
                
    // 2-3. 대소문자 구분하고
    // ~~.toLowerCase('string') 한글 또는 특수문자는 적용되지 않음
    const inputValue = inputTxt.toLowerCase(); 
    // window.alert(inputValue) //테스트 결과 정상
       
     
    // 2-4. 모든 무비 카드를 확인해야하니까 반복문
    movieCards.forEach(titleFilter => {    

    // 2-5. movie-title에서 문자열 포함하는지 확인하는 메소드와 조건문
    // ~~.filter('string') 함수에서 참인 모든 요소
     
    // 2-6. <H3 class='movie-title>이 아닌
    // <div class='movie-card'를 대상으로해서 display 적용해야하니까
    // 태그의 상위 태그를 불러오는 메소드 .closest() - 정영훈님이 알려주심
    // ~~.closest(.movie-card)

    // 2-7. 문자열이 포함된다면 그대로 두고, 포함되지 않으면 display: none
    // ~~~.style.display = "none";

    const movieTitle = document.querySelector('.movie-title').toLowerCase(); 
    // 비교를 위해서 movieTitle 변수도 소문자로 통일
    // inputValue가 비교 기준이 되는 input입력값, movie-card 아래 movie-title이 비교 대상
    if (movieTitle.filter(inputValue)) {
        window.alert(movieTitle,'을 포함하는 무비카드 있음');// 테스트 실패 클릭해도 반응없음
    } else {
        window.alert('없음') // 테스트 실패
    }

    }); // movieCards.forEach닫는 괄호
}) // btnClicked.addEventListener 닫는 괄호
    
    

    // 하고 싶은 것 3. TMDB API 사용
            
    // 배열 메소드 쓰라고 하는 거보면 api로 받아온 자료 중에서
    // 무비카드의 개수를 확인하고,
    // 그 개수만큼 class="movie-card"인 divsion을 생성하고
    // 안의 내용을 api에서 가져온 자료들로 채워야 한다는건 알겠어
    // 근데 어떻게 해야하지
    // TMDB top rated Open API
    // FETCH

    // REQUEST
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2FhNWMwZjM5MGVmZWM3NDhjYzcxNzI0NGM5YTk0NiIsInN1YiI6IjY0NzU5NDlhZGQyNTg5MDBlMjBjYTBiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J262Afhr_nvsbftgI9vt8HcyVwrNiw3_1GlQaNTafNw'
    //     }
    // };

    // fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
