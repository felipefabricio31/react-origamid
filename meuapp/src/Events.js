const Events = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <h1 style={{color: 'blue', padding: '10px', borderTopColor: 'blue', borderTop: 'solid'}}>Eventos</h1>

      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>

      <br/>
      <a href="https://reactjs.org/docs/events.html">https://reactjs.org/docs/events.html</a>

      <h1 style={{color: 'blue', padding: '10px', borderTopColor: 'blue', borderTop: 'solid'}}>
       Função Anônima
      </h1>

      <button onClick={({ target }) => target.classList.toggle('ativa')}>
        Ativar
      </button>

      <h1 style={{color: 'blue', padding: '10px', borderTopColor: 'blue', borderTop: 'solid'}}>
        window/document
      </h1>
      <div style={{ height: '200vw' }}>Div</div>;

    </div>
  );
};

export default Events;