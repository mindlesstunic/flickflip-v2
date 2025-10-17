export default function Home() {
  const movieCount = 2;
  const discount = 50;

  return (
    <div>
      <h1>FlickFlip V2</h1>
      <p>We have {movieCount} deals </p>
      <p>Mystery movie tickets are {discount}% off</p>
      <p>Price {250 * 2}</p>
    </div>
  );
}
