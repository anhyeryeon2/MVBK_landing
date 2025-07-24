// app/head.tsx
export default function Head() {
  return (
    <>
      <title>무비부키 | 영화관 모임의 시작</title>
      <meta
        name="description"
        content="지금 바로 영화관에서 당신만의 추억을 예약해보세요."
      />

      {/* ✅ OG 태그 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="무비부키 | 영화관 모임의 시작" />
      <meta
        property="og:description"
        content="지금 바로 영화관에서 당신만의 추억을 예약해보세요."
      />
      <meta property="og:image" content="/public/og-image.png" />
      <meta property="og:url" content="https://movie-bookie.shop" />
    </>
  );
}
