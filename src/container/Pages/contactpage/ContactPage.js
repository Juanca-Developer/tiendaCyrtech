import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div class="container">
      <h1 class="container__title">Consulte por su Servicio</h1>
      <div class="container__form">
        <form class="todo-form" onsubmit="onSubmitEvent(event)">
          <input
            className="todo-form__input"
            type="text"
            name="name"
            placeholder="Nombre"
            size="30"
            required
          />

          <input
            className="todo-form__input"
            type="text"
            name="surname"
            placeholder="Apellido"
            size="30"
            required
          />

          <input
            className="todo-form__input"
            type="text"
            name="telefono"
            placeholder="Telefono"
            size="15"
            required
          />

          <input
            className="todo-form__input"
            type="email"
            name="email"
            placeholder="info@info.com"
            size="20"
          />

          <input
            className="todo-form__input"
            type="text"
            name="adress"
            placeholder="Domicilio"
            size="25"
          />

          <button className="todo-form__button">Enviar</button>
        </form>
      </div>
    </div>
  );
}
