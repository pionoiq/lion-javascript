import { insertLast } from './insert.js';

function createUserCard({
  id = '',
  name = 'tiger',
  email = 'tiger@gmail.com',
  website = 'tiger.com',
}) {
  const template = /* html */ `
  <article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href="mailto:tiger@euid.dev"
        >${email}</a
      >
    </div>
    <div>
      <a
        class="user-website"
        href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a
      >
    </div>
  </div>
  <button class="delete">삭제</button>
  </article>
  `;

  return template;
}

function createSpinner(
  size = 100,
  loadingMessage = '유저 정보를 가져오는 중...'
) {
  return /* html */ `
  <figure class="loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="${size}" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path transform="translate(30,130)" fill="#e15b64" d="M6.999-2.173c-0.21-1.843-1.216-3.542-2.21-5.061C4.291-7.995,3.814-8.771,3.242-9.477 c-0.389-0.479-0.799-0.955-0.985-1.554c-0.13-0.42,0.033-1.539-0.704-1.467c-0.359,0.035-0.418,0.337-0.471,0.621 c-0.072,0.38,0,0.842,0,1.227c0,4.1,0,8.199,0,12.299c0,1.247,0,2.495,0,3.742c-2.884-1.873-8.377,1.23-8.197,4.705 c0.091,1.754,1.807,2.481,3.362,2.395c1.974-0.108,3.983-1.249,5.113-2.868c1-1.434,0.769-3.163,0.769-4.822 c0-2.398,0-4.797,0-7.195c0-1.72,0-3.439,0-5.159c1.769,2.454,4.472,4.668,4.002,8.037C6.038,1.149,5.681,1.832,5.665,2.494 C5.639,3.53,6.145,2.799,6.343,2.349C6.99,0.875,7.253-0.575,6.999-2.173z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0;0.2;0.4;1" values="30 130;30 130;30 50;30 130;30 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="2.127659574468085s" repeatCount="indefinite" begin="-1.0638297872340425s"></animateTransform>
</path>
<path transform="translate(70,20)" fill="#f47e60" d="M6.999-2.173c-0.21-1.843-1.216-3.542-2.21-5.061C4.291-7.995,3.814-8.771,3.242-9.477 c-0.389-0.479-0.799-0.955-0.985-1.554c-0.13-0.42,0.033-1.539-0.704-1.467c-0.359,0.035-0.418,0.337-0.471,0.621 c-0.072,0.38,0,0.842,0,1.227c0,4.1,0,8.199,0,12.299c0,1.247,0,2.495,0,3.742c-2.884-1.873-8.377,1.23-8.197,4.705 c0.091,1.754,1.807,2.481,3.362,2.395c1.974-0.108,3.983-1.249,5.113-2.868c1-1.434,0.769-3.163,0.769-4.822 c0-2.398,0-4.797,0-7.195c0-1.72,0-3.439,0-5.159c1.769,2.454,4.472,4.668,4.002,8.037C6.038,1.149,5.681,1.832,5.665,2.494 C5.639,3.53,6.145,2.799,6.343,2.349C6.99,0.875,7.253-0.575,6.999-2.173z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0.1;0.4;0.7;1" values="70 130;70 130;70 20;70 130;70 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="2.127659574468085s" repeatCount="indefinite" begin="-1.0638297872340425s"></animateTransform>
</path>
<path transform="translate(40,60)" fill="#f8b26a" d="M10.988-11.314c-0.201-0.914-2.865,0.152-3.31,0.255c-2.865,0.661-5.73,1.322-8.594,1.983 C-1.873-8.855-2.84-8.658-3.791-8.413c-0.481,0.124-0.664,0.217-0.719,0.77c-0.18,1.819,0,3.786,0,5.621c0,2.663,0,5.325,0,7.988 c-2.146-1.278-5.411,0.577-6.269,2.683c-1.074,2.636,1.925,3.462,3.907,2.736c1.954-0.715,3.253-2.269,3.343-4.333 c0.046-1.037,0-2.087,0-3.125c0-1.638,0-3.276,0-4.914c0-0.673,0-1.346,0-2.019c0-0.215-0.116-0.848,0-1.036 c0.17-0.277,1.196-0.348,1.535-0.427c1.425-0.329,2.849-0.657,4.274-0.986c2.579-0.595,5.158-1.19,7.737-1.786 c0,3.284,0,6.569,0,9.853c-1.64-0.977-3.949-0.013-5.2,1.179c-0.958,0.913-1.87,2.579-0.84,3.778 c1.198,1.393,3.567,0.71,4.866-0.135C10.164,6.578,10.936,5.347,11,3.788c0.148-3.605,0-7.245,0-10.853c0-0.415,0-0.829,0-1.244 C11-9.247,11.189-10.396,10.988-11.314z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0.3;0.6;0.9;1" values="40 130;40 130;40 60;40 130;40 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="2.127659574468085s" repeatCount="indefinite" begin="-1.0638297872340425s"></animateTransform>
</path>
<path transform="translate(60,130)" fill="#e15b64" d="M6.999-2.173c-0.21-1.843-1.216-3.542-2.21-5.061C4.291-7.995,3.814-8.771,3.242-9.477 c-0.389-0.479-0.799-0.955-0.985-1.554c-0.13-0.42,0.033-1.539-0.704-1.467c-0.359,0.035-0.418,0.337-0.471,0.621 c-0.072,0.38,0,0.842,0,1.227c0,4.1,0,8.199,0,12.299c0,1.247,0,2.495,0,3.742c-2.884-1.873-8.377,1.23-8.197,4.705 c0.091,1.754,1.807,2.481,3.362,2.395c1.974-0.108,3.983-1.249,5.113-2.868c1-1.434,0.769-3.163,0.769-4.822 c0-2.398,0-4.797,0-7.195c0-1.72,0-3.439,0-5.159c1.769,2.454,4.472,4.668,4.002,8.037C6.038,1.149,5.681,1.832,5.665,2.494 C5.639,3.53,6.145,2.799,6.343,2.349C6.99,0.875,7.253-0.575,6.999-2.173z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0.5;0.75;1;1" values="60 130;60 130;60 70;60 130;60 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="2.127659574468085s" repeatCount="indefinite" begin="-1.0638297872340425s"></animateTransform>
</path>
<path transform="translate(50,130)" fill="#abbd81" d="M10.988-11.314c-0.201-0.914-2.865,0.152-3.31,0.255c-2.865,0.661-5.73,1.322-8.594,1.983 C-1.873-8.855-2.84-8.658-3.791-8.413c-0.481,0.124-0.664,0.217-0.719,0.77c-0.18,1.819,0,3.786,0,5.621c0,2.663,0,5.325,0,7.988 c-2.146-1.278-5.411,0.577-6.269,2.683c-1.074,2.636,1.925,3.462,3.907,2.736c1.954-0.715,3.253-2.269,3.343-4.333 c0.046-1.037,0-2.087,0-3.125c0-1.638,0-3.276,0-4.914c0-0.673,0-1.346,0-2.019c0-0.215-0.116-0.848,0-1.036 c0.17-0.277,1.196-0.348,1.535-0.427c1.425-0.329,2.849-0.657,4.274-0.986c2.579-0.595,5.158-1.19,7.737-1.786 c0,3.284,0,6.569,0,9.853c-1.64-0.977-3.949-0.013-5.2,1.179c-0.958,0.913-1.87,2.579-0.84,3.778 c1.198,1.393,3.567,0.71,4.866-0.135C10.164,6.578,10.936,5.347,11,3.788c0.148-3.605,0-7.245,0-10.853c0-0.415,0-0.829,0-1.244 C11-9.247,11.189-10.396,10.988-11.314z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0;0.4;0.8;1" values="50 130;50 130;50 20;50 130;50 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="2.127659574468085s" repeatCount="indefinite" begin="0s"></animateTransform>
</path>
</svg>
<figcaption>${loadingMessage}</figcaption>
</figure>
  `;
}

function creatEmptyCard(
  size = 200,
  errorMessage = '알 수 없는 오류가 발생했습니다.'
) {
  return /* html */ `
  <figure class="empty-user-card">
    <svg width="${size}" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      </mask>
      <g mask="url(#mask0_50_2137)">
      <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
      <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
      <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
      </g>
      <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
      <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
      <defs>
      <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D4D9E3"/>
      <stop offset="1" stop-color="#D2D5DC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7ABB6"/>
      <stop offset="1" stop-color="#C7CCD7"/>
      </linearGradient>
      <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      </defs>
      </svg>
      
    <figcaption>${errorMessage}</figcaption>
  </figure>
  `;
}

export function renderUserCard(target, data) {
  insertLast(target, createUserCard(data));
}

export function renderSpinner(target) {
  insertLast(target, createSpinner());
}
export function renderEmptyCard(target) {
  insertLast(target, creatEmptyCard());
}
