const Contacs = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Chisinau, Moldova</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Viber / WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+37367708370</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">mrandrei606@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacs;
