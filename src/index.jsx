import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {StaticEvent} from "./components/Event";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
      <Header/>
      <main className="main">
        <section className="section main__general">
          <h2 className="section__title section__title-header section__main-title">Главное</h2>
          <div className="hero-dashboard">
            <div className="hero-dashboard__primary">
              <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
              <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
              <ul className="hero-dashboard__info">
                <li className="hero-dashboard__item">
                  <div className="hero-dashboard__item-title">Дома</div>
                  <div className="hero-dashboard__item-details">
                    +23
                    <span className="a11y-hidden">°</span>
                  </div>
                </li>
                <li className="hero-dashboard__item">
                  <div className="hero-dashboard__item-title">За окном</div>
                  <div className="hero-dashboard__item-details">
                    +19
                    <span className="a11y-hidden">°</span>

                    <div
                        className="hero-dashboard__icon hero-dashboard__icon_rain"
                        role="img"
                        aria-label="Дождь"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="hero-dashboard__schedule">
              <StaticEvent
                  icon="temp"
                  iconLabel="Температура"
                  title="Philips Cooler"
                  subtitle="Начнет охлаждать в 16:30"
              />
              <StaticEvent
                  icon="light"
                  iconLabel="Освещение"
                  title="Xiaomi Yeelight LED Smart Bulb"
                  subtitle="Включится в 17:00"
              />
              <StaticEvent
                  icon="light"
                  iconLabel="Освещение"
                  title="Xiaomi Yeelight LED Smart Bulb"
                  subtitle="Включится в 17:00"
              />
            </ul>
          </div>
        </section>

        <section className="section main__scripts">
          <h2 className="section__title section__title-header">Избранные сценарии</h2>

          <ul className="event-grid">
            <StaticEvent
                slim
                icon="light2"
                iconLabel="Освещение"
                title="Выключить весь свет в доме и во дворе"
            />
            <StaticEvent
                slim
                icon="schedule"
                iconLabel="Расписание"
                title="Я ухожу"
            />
            <StaticEvent
                slim
                icon="light2"
                iconLabel="Освещение"
                title="Включить свет в коридоре"
            />
            <StaticEvent
                slim
                icon="temp2"
                iconLabel="Температура"
                title="Набрать горячую ванну"
                subtitle="Начнётся в 18:00"
            />
            <StaticEvent
                slim
                icon="temp2"
                iconLabel="Температура"
                title="Сделать пол тёплым во всей квартире"
            />
          </ul>
        </section>
        <Main/>
      </main>
    </>
);