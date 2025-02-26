const Contacto = () => {
    return (
      <div>
        <section>
          <h1>Contacto</h1>
          <p>Envíanos un mensaje y te responderemos pronto.</p>
        </section>
  
        <section>
          <h2>Formulario de Contacto</h2>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
  
        <section>
          <h2>Información de Contacto</h2>
          <p>📍 Dirección: Calle Ficticia 123, Ciudad</p>
          <p>📞 Teléfono: +56 9 1234 5678</p>
        </section>
      </div>
    );
  };
  
  export default Contacto;  