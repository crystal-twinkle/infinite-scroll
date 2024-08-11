import notFound from '../assets/404.svg';

export function NotFoundPage() {

  return (
    <section className="">
      <img src={notFound} alt="Not found" />
      <div className="">
        No such page
      </div>
    </section>
  );
}
