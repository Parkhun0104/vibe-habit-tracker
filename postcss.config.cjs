// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // 'tailwindcss'가 아니라 이 패키지 이름을 사용합니다.
    autoprefixer: {},
  },
};