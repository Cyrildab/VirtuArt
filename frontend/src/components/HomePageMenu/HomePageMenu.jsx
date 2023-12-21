import "./HomePageMenu.scss";

function HomePageMenu() {
  return (
    <main className="homepage-menu-container">
      <section className="homepage-menu-buttons-container">
        <button
          type="button"
          className="homepage-menu-button homepage-menu-museum-button"
        >
          Musée virtuel
        </button>
        <button
          type="button"
          className="homepage-menu-button homepage-menu-gallery-button"
        >
          Collection
        </button>
        <button
          type="button"
          className="homepage-menu-button homepage-menu-artists-button"
        >
          Nos artistes
        </button>
      </section>
    </main>
  );
}

export default HomePageMenu;
