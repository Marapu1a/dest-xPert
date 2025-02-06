const Excursions = () => {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12">
      <div className="text-[#252630] grid md:grid-cols-2 gap-6">
        {/* Заголовок */}
        <h2 className="text-4xl font-bold">Познавательные путешествия</h2>

        {/* Текстовый блок */}
        <p className="text-lg ">
          Откройте Европу во всей ее многогранности! DestXpert Travel приглашает
          вас в познавательные путешествия по столицам и живописным городам, где
          каждая улица хранит свою историю.
          <br />
          <br />
          Мы предлагаем насыщенные маршруты, сочетая культуру, искусство и
          гастрономию, чтобы вы смогли прочувствовать дух Европы. Дворцы и
          музеи, древние замки и современные мегаполисы — каждое путешествие с
          нами станет настоящим открытием!
        </p>
      </div>
    </section>
  );
};

export default Excursions;
